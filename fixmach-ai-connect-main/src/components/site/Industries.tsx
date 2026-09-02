import {
  Beaker,
  Boxes,
  Car,
  CircuitBoard,
  Cpu,
  Factory,
  Mountain,
  Pill,
  Plane,
  Shirt,
  UtensilsCrossed,
} from "lucide-react";

const industries = [
  { icon: Car, name: "Automotive", note: "Press shops, paint lines, robotic welding" },
  { icon: UtensilsCrossed, name: "Food Processing", note: "Fillers, retorts, cold chain" },
  { icon: Factory, name: "Steel & Metals", note: "Rolling mills, furnaces, cranes" },
  { icon: Pill, name: "Pharmaceuticals", note: "Blister packs, GMP-compliant service" },
  { icon: Beaker, name: "Chemical", note: "Reactors, pumps, hazardous-area certified" },
  { icon: Boxes, name: "Packaging", note: "Cartoners, labellers, palletisers" },
  { icon: Shirt, name: "Textile", note: "Looms, dyeing, spinning frames" },
  { icon: Mountain, name: "Mining", note: "Crushers, conveyors, heavy hydraulics" },
  { icon: Cpu, name: "Semiconductor", note: "Cleanroom tools, vacuum systems" },
  { icon: Plane, name: "Aerospace", note: "5-axis CNC, NDT, traceable repairs" },
];

export function Industries() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" role="list">
      {industries.map((i) => (
        <article
          key={i.name}
          role="listitem"
          className="surface-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <i.icon className="size-5" />
          </span>
          <h3 className="mt-4 text-sm font-semibold">{i.name}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{i.note}</p>
        </article>
      ))}
      <div className="surface-card flex items-center gap-3 p-5 sm:col-span-2 lg:col-span-5">
        <CircuitBoard className="size-5 shrink-0 text-primary" />
        <p className="text-sm text-muted-foreground">
          Every industry gets machine history, service logs, warranty and AMC tracking, multi-factory
          rollout and role-based access for owners, maintenance managers and operators.
        </p>
      </div>
    </div>
  );
}
