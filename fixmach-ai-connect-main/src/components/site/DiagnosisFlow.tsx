import { useRef, useState } from "react";
import {
  Bot,
  CheckCircle2,
  FileText,
  Gauge,
  IndianRupee,
  ImageIcon,
  Loader2,
  MessageSquare,
  ScanText,
  UploadCloud,
  UserCheck,
} from "lucide-react";

const uploadModes = [
  {
    icon: ImageIcon,
    label: "Machine photo",
    hint: "JPG, PNG up to 20 MB",
    accept: "image/jpeg,image/png",
    type: "file",
  },
  {
    icon: ScanText,
    label: "Error code screen",
    hint: "OCR reads HMI screenshots",
    accept: "image/*",
    type: "file",
  },
  {
    icon: MessageSquare,
    label: "Describe problem",
    hint: "Type your issue in detail",
    accept: "",
    type: "text",
  },
  {
    icon: FileText,
    label: "Maintenance log",
    hint: "PDF, CSV service history",
    accept: ".pdf,.csv,application/pdf,text/csv",
    type: "file",
  },
];

const defaultPipeline = [
  { icon: UploadCloud, label: "Upload", detail: "Photo received" },
  { icon: ScanText, label: "OCR", detail: "Image analysed" },
  { icon: Bot, label: "AI detection", detail: "Running defect detection…" },
  { icon: Gauge, label: "Confidence", detail: "Calculating confidence…" },
  { icon: IndianRupee, label: "Cost estimate", detail: "₹34,000 – ₹52,000 incl. parts" },
  { icon: CheckCircle2, label: "Recommendation", detail: "Awaiting result…" },
  { icon: UserCheck, label: "Technician", detail: "Ravi K. · 6.2 km · ETA 24 min" },
];

export function DiagnosisFlow() {
  const [mode, setMode] = useState(0);
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [dragging, setDragging] = useState(false);
  // per-mode file storage: { 0: File, 1: File, 3: File }
  const [modeFiles, setModeFiles] = useState<Record<number, File | null>>({});
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pipeline, setPipeline] = useState(defaultPipeline);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pendingFile = useRef<File | null>(null);

  // current mode's file
  const currentFile = modeFiles[mode] ?? null;

  const runDiagnosis = () => {
    if (running) return;
    setRunning(true);
    setStep(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      if (i >= pipeline.length) {
        clearInterval(id);
        setRunning(false);
        setStep(pipeline.length - 1);
        return;
      }
      setStep(i);
    }, 750);
  };

  const runRealDiagnosis = async (file: File) => {
    if (running) return;
    setPipeline(defaultPipeline);
    setRunning(true);
    setStep(0);

    // Animate steps 0-2 while API call is in progress
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      if (i >= 2) { clearInterval(id); }
      else { setStep(i); }
    }, 800);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      clearInterval(id);

      // Update pipeline with real results
      setPipeline(prev => prev.map((p, idx) => {
        if (idx === 2) return { ...p, detail: `${data.label} detected · ${data.confidence}% confidence` };
        if (idx === 3) return { ...p, detail: `${data.confidence}% — AI model (99% accuracy)` };
        if (idx === 5) return { ...p, detail: data.recommendation };
        return p;
      }));

      // Animate remaining steps
      let j = 2;
      const id2 = setInterval(() => {
        j += 1;
        setStep(j);
        if (j >= defaultPipeline.length - 1) {
          clearInterval(id2);
          setRunning(false);
        }
      }, 750);
    } catch {
      clearInterval(id);
      setError("Could not reach ML backend. Make sure it's running on port 8000.");
      setRunning(false);
      setStep(-1);
    }
  };

  const MAX_MB = 20;

  const validateAndRun = (file: File) => {
    setError(null);
    if (file.size > MAX_MB * 1024 * 1024) {
      setError(`File too large. Max ${MAX_MB} MB allowed.`);
      return;
    }
    setModeFiles(prev => ({ ...prev, [mode]: file }));
    pendingFile.current = file;
    if (mode === 0) {
      runRealDiagnosis(file);
    } else {
      runDiagnosis();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setError(null);
      if (file.size > MAX_MB * 1024 * 1024) {
        setError(`File too large. Max ${MAX_MB} MB allowed.`);
      } else {
        pendingFile.current = file;
        setModeFiles(prev => ({ ...prev, [mode]: file }));
      }
    }
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setError(null);
      if (file.size > MAX_MB * 1024 * 1024) {
        setError(`File too large. Max ${MAX_MB} MB allowed.`);
      } else {
        pendingFile.current = file;
        setModeFiles(prev => ({ ...prev, [mode]: file }));
      }
    }
  };

  const resetDiagnosis = () => {
    setStep(-1);
    setModeFiles({});
    setDescription("");
    setRunning(false);
    setError(null);
    pendingFile.current = null;
  };

  const handleModeSelect = (i: number) => {
    if (i === mode) return;
    setMode(i);
    // restore this mode's pending file
    pendingFile.current = modeFiles[i] ?? null;
  };

  const openFilePicker = () => {
    if (running) return;
    fileInputRef.current?.click();
  };

  const handleTextRun = () => {
    setError(null);
    if (!description.trim()) {
      setError("Please describe the problem before running diagnosis.");
      return;
    }
    runDiagnosis();
  };

  return (
    <section aria-label="AI diagnosis demo">
    <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="surface-card p-6">
        {/* Hidden file input — accept type changes with mode */}
        <input
          ref={fileInputRef}
          type="file"
          accept={uploadModes[mode].accept}
          className="sr-only"
          aria-hidden="true"
          onChange={handleFileChange}
        />

        {/* Mode selector buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          {uploadModes.map((m, i) => (
            <button
              key={m.label}
              type="button"
              title={m.hint}
              onClick={() => handleModeSelect(i)}
              className={`relative rounded-xl border p-3 text-left transition-all ${
                mode === i
                  ? "border-primary/50 bg-accent text-accent-foreground"
                  : "border-border bg-card hover:-translate-y-0.5"
              }`}
            >
              {/* green dot if file attached for this mode */}
              {m.type === "file" && modeFiles[i] && (
                <span className="absolute top-2 right-2 size-2 rounded-full bg-green-500" />
              )}
              <m.icon className="size-4.5" />
              <p className="mt-2 text-xs font-semibold leading-tight">{m.label}</p>
              {mode === i && (
                <p className="mt-0.5 text-[10px] text-muted-foreground leading-tight">
                  {m.type === "file" && modeFiles[i] ? modeFiles[i]!.name : m.hint}
                </p>
              )}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        {running && (
          <div className="mt-3">
            <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
              <span>Step {step + 1} of {pipeline.length} · {pipeline[step]?.label}…</span>
              <span>{Math.round(((step + 1) / pipeline.length) * 100)}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-[image:var(--gradient-accent)] transition-all duration-500"
                style={{ width: `${((step + 1) / pipeline.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Drop zone / Text input */}
        {uploadModes[mode].type === "text" ? (
          <div className="mt-4 rounded-2xl border border-border bg-secondary/40 p-4">
            {(() => { const ModeIcon = uploadModes[mode].icon; return <ModeIcon className="size-6 text-primary mb-2" />; })()}
            <textarea
              rows={4}
              placeholder="e.g. Machine vibrating heavily at startup, unusual grinding noise from spindle area…"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={running}
              className="w-full resize-none rounded-xl border border-border bg-card px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
            />
            {error && (
              <p role="alert" className="mt-1 text-xs font-medium text-red-500">{error}</p>
            )}
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                disabled={running || !description.trim()}
                onClick={handleTextRun}
                className="rounded-xl bg-[image:var(--gradient-accent)] px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
              >
                {running ? "Analysing…" : "Run diagnosis"}
              </button>
              {step === pipeline.length - 1 && (
                <button
                  type="button"
                  onClick={resetDiagnosis}
                  className="rounded-xl border border-border px-4 py-2 text-xs font-semibold transition-colors hover:bg-accent"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        ) : (
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`relative mt-4 rounded-2xl border-2 border-dashed px-6 py-8 text-center transition-all ${
              dragging ? "border-primary bg-accent scale-[1.01]" : "border-border bg-secondary/40"
            }`}
          >
            {dragging && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-primary/10">
                <p className="text-sm font-bold text-primary">Drop to upload</p>
              </div>
            )}

            {/* Icon + label */}
            <div className="flex flex-col items-center">
              {(() => { const ModeIcon = uploadModes[mode].icon; return <ModeIcon className="size-7 text-primary" />; })()}
              <p className="mt-2 text-sm font-semibold">
                {currentFile ? `📎 ${currentFile.name}` : `Drag & drop your ${uploadModes[mode].label.toLowerCase()}`}
              </p>
              {currentFile && (
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {(currentFile.size / 1024).toFixed(1)} KB · {currentFile.type || "file"}
                </p>
              )}
              {!currentFile && (
                <p className="mt-0.5 text-xs text-muted-foreground">{uploadModes[mode].hint}</p>
              )}
            </div>

            {error && (
              <p role="alert" className="mt-2 text-xs font-medium text-red-500">{error}</p>
            )}

            {/* Two separate buttons */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {/* Upload button — only opens file picker */}
              <button
                type="button"
                disabled={running}
                onClick={openFilePicker}
                className="rounded-xl border border-primary px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
              >
                {fileName ? "Change file" : "Choose file"}
              </button>

              {/* Run button — only active after file is selected */}
              <button
                type="button"
                disabled={running || !currentFile}
                onClick={() => {
                  if (currentFile) validateAndRun(currentFile);
                }}
                className="rounded-xl bg-[image:var(--gradient-accent)] px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
              >
                {running ? "Analysing…" : "Run diagnosis"}
              </button>

              {step === pipeline.length - 1 && !running && (
                <button
                  type="button"
                  onClick={resetDiagnosis}
                  className="rounded-xl border border-border px-4 py-2 text-xs font-semibold transition-colors hover:bg-accent"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Pipeline */}
      <div className="surface-card p-6">
        {/* Screen reader live region */}
        <p aria-live="polite" aria-atomic="true" className="sr-only">
          {running
            ? `Step ${step + 1} of ${pipeline.length}: ${pipeline[step]?.label}`
            : step === pipeline.length - 1
            ? "Diagnosis complete. Technician dispatched."
            : ""}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Diagnosis pipeline
          </p>
          {step >= 0 && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              {Math.min(step + 1, pipeline.length)}/{pipeline.length}
            </span>
          )}
        </div>
        {step === pipeline.length - 1 && !running && (
          <div className="mt-3 flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 dark:bg-green-950/30 dark:text-green-400">
            <CheckCircle2 className="size-4" />
            Diagnosis complete — technician dispatched
          </div>
        )}
        {step === pipeline.length - 1 && !running && (
          <button
            type="button"
            className="mt-3 w-full rounded-xl bg-[image:var(--gradient-accent)] py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Repair Now
          </button>
        )}
        <ol className="mt-5 space-y-2">
          {pipeline.map((p, i) => {
            const done = step >= i;
            const active = step === i && running;
            return (
              <li
                key={p.label}
                className={`flex items-start gap-3 rounded-xl border p-3 transition-all duration-500 ${
                  active
                    ? "border-primary bg-accent opacity-100 shadow-sm"
                    : done
                    ? "border-primary/30 bg-accent/50 opacity-100"
                    : "border-border bg-card opacity-40"
                }`}
              >
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${
                    done
                      ? "bg-[image:var(--gradient-accent)] text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {active ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <p.icon className="size-4" />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">{p.label}</p>
                  <p className={`text-xs text-muted-foreground ${!done && running ? "animate-pulse" : ""}`}>
                    {done ? p.detail : running ? "Processing…" : "Waiting…"}
                  </p>
                </div>
                {done && (
                  <CheckCircle2 className="ml-auto size-4 shrink-0 text-primary" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
    </section>
  );
}
