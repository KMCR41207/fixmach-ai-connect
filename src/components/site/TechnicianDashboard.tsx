import { CalendarClock, IndianRupee, ShieldCheck, Star, Trophy, Wrench } from "lucide-react";

const bars = [40, 62, 48, 80, 55, 92, 70];

export function TechnicianDashboard() {
  return (
    <div className="rounded-3xl bg-background p-5 shadow-[var(--shadow-glow)]">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Technician dashboard
        </p>
        <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
          Today
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-[image:var(--gradient-accent)] p-4 text-primary-foreground">
          <IndianRupee className="size-4" />
          <p className="mt-2 text-2xl font-semibold tracking-tight">₹12,500</p>
          <p className="text-xs opacity-80">Today&apos;s earnings</p>
        </div>
        <div className="grid gap-3">
          <div className="rounded-2xl bg-secondary/70 p-3">
            <Wrench className="size-4 text-primary" />
            <p className="mt-1 text-lg font-semibold leading-tight">8</p>
            <p className="text-[11px] text-muted-foreground">Jobs completed</p>
          </div>
          <div className="rounded-2xl bg-secondary/70 p-3">
            <Star className="size-4 text-ember" />
            <p className="mt-1 text-lg font-semibold leading-tight">4.9</p>
            <p className="text-[11px] text-muted-foreground">Rating</p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-end gap-1.5 rounded-2xl bg-secondary/60 p-4">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-md bg-[image:var(--gradient-accent)]"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3">
        {[
          { icon: ShieldCheck, label: "Escrow", value: "Released" },
          { icon: CalendarClock, label: "Nearby jobs", value: "4" },
          { icon: Trophy, label: "City rank", value: "#7" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-secondary/70 p-3">
            <s.icon className="size-4 text-primary" />
            <p className="mt-1 text-sm font-semibold leading-tight">{s.value}</p>
            <p className="text-[11px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
