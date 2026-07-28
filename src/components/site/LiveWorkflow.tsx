import { useEffect, useState } from "react";
import {
  BadgeCheck,
  Bot,
  CheckCircle2,
  MapPin,
  ScanLine,
  Siren,
  Users,
  Wrench,
} from "lucide-react";

const stages = [
  { icon: Siren, label: "Machine alarm", detail: "Haas VF-2 · Alarm 176 spindle overheating" },
  { icon: ScanLine, label: "AI scans image", detail: "Reading thermal frame + error screen (OCR)" },
  { icon: Bot, label: "Fault detected", detail: "Spindle bearing wear · High · 92% confidence" },
  { icon: Users, label: "Technicians nearby", detail: "6 certified CNC specialists alerted" },
  { icon: BadgeCheck, label: "Ravi K. accepted", detail: "4.9 ★ · 11 yrs · escrow funded" },
  { icon: MapPin, label: "Live tracking", detail: "6.2 km away · ETA 24 min" },
  { icon: CheckCircle2, label: "Repair completed", detail: "3h 10m · report + GST invoice issued" },
];

export function LiveWorkflow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % stages.length), 2200);
    return () => clearInterval(id);
  }, []);

  const Current = stages[active].icon;
  const progress = ((active + 1) / stages.length) * 100;

  return (
    <div className="glass-panel animate-rise-in rounded-3xl p-5 [animation-delay:150ms]">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
          Live dispatch simulation
        </p>
        <span className="flex items-center gap-2 rounded-full bg-ember/20 px-2.5 py-1 text-xs font-semibold text-primary-foreground">
          <span className="size-2 rounded-full bg-ember animate-pulse-ring" /> Emergency
        </span>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl bg-background">
        <div className="relative flex items-center gap-3 p-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
            <Current className="size-5" />
          </span>
          <div key={active} className="animate-rise-in min-w-0">
            <p className="truncate text-sm font-semibold">{stages[active].label}</p>
            <p className="truncate text-xs text-muted-foreground">{stages[active].detail}</p>
          </div>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[image:var(--gradient-scan)] animate-scan-x"
          />
        </div>

        <div className="h-1 w-full bg-secondary">
          <div
            className="h-full bg-[image:var(--gradient-ember)] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ol className="space-y-1.5 p-4">
          {stages.map((s, i) => (
            <li
              key={s.label}
              className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-xs transition-all duration-300 ${
                i === active
                  ? "bg-secondary font-semibold text-foreground"
                  : i < active
                    ? "text-muted-foreground"
                    : "text-muted-foreground/50"
              }`}
            >
              <span
                className={`size-1.5 shrink-0 rounded-full ${
                  i <= active ? "bg-primary" : "bg-border"
                }`}
              />
              {s.label}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-2xl bg-background p-3 text-xs text-muted-foreground">
        <Wrench className="size-4 text-primary" />
        Average end-to-end resolution on FixMach AI: 4.3 hours
      </div>
    </div>
  );
}
