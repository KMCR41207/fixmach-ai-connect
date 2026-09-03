import io
import logging
import os
import struct
import numpy as np
from fastapi import FastAPI, File, Request, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.util import get_remote_address
from PIL import Image
import tensorflow as tf

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("fixmach")

app = FastAPI(title="Fixmach ML API")

# Rate limiter: max 10 predict requests per minute per IP
limiter = Limiter(key_func=get_remote_address, default_limits=["10/minute"])
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Restrict CORS to known frontend origins only.
# Add your production domain to ALLOWED_ORIGINS via environment variable.
_raw_origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173,http://localhost:3000")
ALLOWED_ORIGINS = [o.strip() for o in _raw_origins.split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

# MODEL_PATH must be set via environment variable — no local path fallback.
# On Render this is already configured in render.yaml.
MODEL_PATH = os.getenv("MODEL_PATH")
if not MODEL_PATH:
    raise RuntimeError(
        "MODEL_PATH environment variable is not set. "
        "Set it to the absolute path of fixmach_mega_final.keras before starting the server."
    )

print("Loading model...")
model = tf.keras.models.load_model(MODEL_PATH)
print("Model loaded.")


MAX_UPLOAD_BYTES = 10 * 1024 * 1024  # 10 MB hard limit

# Known image magic bytes: (offset, signature)
_IMAGE_SIGNATURES = [
    (0, b"\xff\xd8\xff"),        # JPEG
    (0, b"\x89PNG\r\n\x1a\n"),  # PNG
    (0, b"GIF87a"),              # GIF87
    (0, b"GIF89a"),              # GIF89
    (0, b"RIFF"),                # WebP outer container (checked further below)
    (0, b"BM"),                  # BMP
]

def _is_valid_image_bytes(data: bytes) -> bool:
    """Return True only if data starts with a recognised image magic sequence."""
    for offset, sig in _IMAGE_SIGNATURES:
        if data[offset : offset + len(sig)] == sig:
            return True
    return False
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB").resize((128, 128))
    arr = np.array(img, dtype=np.float32)
    return np.expand_dims(arr, 0)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/predict")
@limiter.limit("10/minute")
async def predict(request: Request, file: UploadFile = File(...)):
    # 1. Content-Type check (defence in depth — client-side header, not trusted alone)
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")

    image_bytes = await file.read()

    # 2. Server-side size guard
    if len(image_bytes) > MAX_UPLOAD_BYTES:
        raise HTTPException(
            status_code=413,
            detail=f"File exceeds the {MAX_UPLOAD_BYTES // (1024 * 1024)} MB limit",
        )

    # 3. Magic-byte validation — rejects files whose Content-Type was spoofed
    if not _is_valid_image_bytes(image_bytes):
        logger.warning("Rejected upload: Content-Type claimed image but magic bytes invalid")
        raise HTTPException(status_code=400, detail="File content does not match a supported image format")

    logger.info("predict request | filename=%s size=%d content_type=%s", file.filename, len(image_bytes), file.content_type)
    arr = preprocess(image_bytes)
    pred = float(model.predict(arr, verbose=0)[0][0])
    logger.info("prediction result | label=%s confidence=%.1f raw_score=%.4f", "OK" if pred > 0.5 else "DEFECTIVE", round(pred * 100 if pred > 0.5 else (1 - pred) * 100, 1), round(pred, 4))

    # class_names = ['defective', 'ok'] — index 0=defective, 1=ok
    # sigmoid output: closer to 1 = ok, closer to 0 = defective
    if pred > 0.5:
        label = "OK"
        confidence = round(pred * 100, 1)
    else:
        label = "DEFECTIVE"
        confidence = round((1 - pred) * 100, 1)

    return {
        "label": label,
        "confidence": confidence,
        "raw_score": round(pred, 4),
        "recommendation": (
            "No defects detected. Machine appears operational."
            if label == "OK"
            else "Defect detected. Recommend immediate inspection."
        ),
    }
