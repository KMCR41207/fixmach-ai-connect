import { useRef, useState } from "react";
import {
  AudioLines,
  Bot,
  CheckCircle2,
  FileText,
  Gauge,
  IndianRupee,
  ImageIcon,
  Loader2,
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
  },
  {
    icon: ScanText,
    label: "Error code screen",
    hint: "OCR reads HMI screenshots",
    accept: "image/*",
  },
  {
    icon: AudioLines,
    label: "Machine sound",
    hint: "WAV, M4A abnormal noise",
    accept: "audio/wav,audio/x-m4a,audio/*",
  },
  {
    icon: FileText,
    label: "Maintenance log",
    hint: "PDF, CSV service history",
    accept: ".pdf,.csv,application/pdf,text/csv",
  },
];

const pipeline = [
  { icon: UploadCloud, label: "Upload", detail: "Photo of spindle housing received" },
  { icon: ScanText, label: "OCR", detail: "Alarm 176 · SPINDLE OVERHEAT extracted" },
  { icon: Bot, label: "AI detection", detail: "Bearing wear + coolant flow restriction" },
  { icon: Gauge, label: "Confidence", detail: "92% — cross-checked on 18k similar faults" },
  { icon: IndianRupee, label: "Cost estimate", detail: "₹34,000 – ₹52,000 incl. parts" },
  { icon: CheckCircle2, label: "Recommendation", detail: "Stop machine · replace front bearing set" },
  { icon: UserCheck, label: "Technician", detail: "Ravi K. · 6.2 km · ETA 24 min" },
];

export function DiagnosisFlow() {
  const [mode, setMode] = useState(0);
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const [error, setError] = useState<string | null>(null);
  const MAX_MB = 20;

  const validateAndRun = (file: File) => {
    setError(null);
    if (file.size > MAX_MB * 1024 * 1024) {
      setError(`File too large. Max ${MAX_MB} MB allowed.`);
      return;
    }
    setFileName(file.name);
    runDiagnosis();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) validateAndRun(file);
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) validateAndRun(file);
  };

  const resetDiagnosis = () => {
    setStep(-1);
    setFileName(null);
    setRunning(false);
    setError(null);
  };

  const handleModeSelect = (i: number) => {
    setMode(i);
    resetDiagnosis();
  };

  const openFilePicker = () => {
    if (running) return;
    fileInputRef.current?.click();
  };

  return (
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
              onClick={() => handleModeSelect(i)}
              className={`rounded-xl border p-3 text-left transition-all ${
                mode === i
                  ? "border-primary/50 bg-accent text-accent-foreground"
                  : "border-border bg-card hover:-translate-y-0.5"
              }`}
            >
              <m.icon className="size-4.5" />
              <p className="mt-2 text-xs font-semibold leading-tight">{m.label}</p>
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

        {/* Drop zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          role="button"
          tabIndex={0}
          aria-label={`Upload area for ${uploadModes[mode].label}. Click or drag and drop a file.`}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openFilePicker()}
          className={`mt-4 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            dragging ? "border-primary bg-accent" : "border-border bg-secondary/40 hover:border-primary/50"
          }`}
        >
          {(() => { const ModeIcon = uploadModes[mode].icon; return <ModeIcon className="size-7 text-primary" />; })()}
          <p className="mt-3 text-sm font-semibold">
            {fileName
              ? `Selected: ${fileName}`
              : `Drag & drop your ${uploadModes[mode].label.toLowerCase()}`}
          </p>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{uploadModes[mode].hint}</p>
          {error && (
            <p role="alert" className="mt-2 text-xs font-medium text-red-500">{error}</p>
          )}

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              disabled={running}
              onClick={openFilePicker}
              className="rounded-xl bg-[image:var(--gradient-accent)] px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
            >
              {running ? "Analysing…" : "Run demo diagnosis"}
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
      </div>

      {/* Pipeline */}
      <div className="surface-card p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Diagnosis pipeline
        </p>
        {step === pipeline.length - 1 && !running && (
          <div className="mt-3 flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 dark:bg-green-950/30 dark:text-green-400">
            <CheckCircle2 className="size-4" />
            Diagnosis complete — technician dispatched
          </div>
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
                    : "border-border bg-card opacity-45"
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
                  <p className="text-xs text-muted-foreground">{done ? p.detail : "Waiting…"}</p>
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
  );
}
