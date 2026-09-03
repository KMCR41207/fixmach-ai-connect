import io
import os
import numpy as np
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import tensorflow as tf

app = FastAPI(title="Fixmach ML API")

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

MODEL_PATH = os.getenv("MODEL_PATH", r"C:\Users\qwert\Downloads\fixmach_mega_final.keras")

print("Loading model...")
model = tf.keras.models.load_model(MODEL_PATH)
print("Model loaded.")


def preprocess(image_bytes: bytes) -> np.ndarray:
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB").resize((128, 128))
    arr = np.array(img, dtype=np.float32)
    return np.expand_dims(arr, 0)


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")

    image_bytes = await file.read()
    arr = preprocess(image_bytes)
    pred = float(model.predict(arr, verbose=0)[0][0])

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
