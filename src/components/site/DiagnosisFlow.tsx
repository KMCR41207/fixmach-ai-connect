import { useState } from "react";
import {
  AudioLines,
  Bot,
  CheckCircle2,
  FileText,
  Gauge,
  IndianRupee,
  ImageIcon,
  ScanText,
  UploadCloud,
  UserCheck,
} from "lucide-react";

const uploadModes = [
  { icon: ImageIcon, label: "Machine photo", hint: "JPG, PNG up to 20 MB" },
  { icon: ScanText, label: "Error code screen", hint: "OCR reads HMI screenshots" },
  { icon: AudioLines, label: "Machine sound", hint: "WAV, M4A abnormal noise" },
  { icon: FileText, label: "Maintenance log", hint: "PDF, CSV service history" },
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

  const run = () => {
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

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="surface-card p-6">
        <div className="grid grid-cols-2 gap-2.5">
          {uploadModes.map((m, i) => (
            <button
              key={m.label}
              type="button"
              onClick={() => setMode(i)}
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

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            run();
          }}
          onClick={run}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && run()}
          className={`mt-4 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-all ${
            dragging ? "border-primary bg-accent" : "border-border bg-secondary/40 hover:border-primary/50"
          }`}
        >
          <UploadCloud className="size-7 text-primary" />
          <p className="mt-3 text-sm font-semibold">Drag &amp; drop your {uploadModes[mode].label.toLowerCase()}</p>
          <p className="mt-1 text-xs text-muted-foreground">{uploadModes[mode].hint}</p>
          <span className="mt-4 rounded-xl bg-[image:var(--gradient-accent)] px-4 py-2 text-xs font-semibold text-primary-foreground">
            {running ? "Analysing…" : "Run demo diagnosis"}
          </span>
        </div>
      </div>

      <div className="surface-card p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Diagnosis pipeline
        </p>
        <ol className="mt-5 space-y-2">
          {pipeline.map((p, i) => {
            const done = step >= i;
            return (
              <li
                key={p.label}
                className={`flex items-start gap-3 rounded-xl border p-3 transition-all duration-500 ${
                  done
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
                  <p.icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{p.label}</p>
                  <p className="text-xs text-muted-foreground">{done ? p.detail : "Waiting…"}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
