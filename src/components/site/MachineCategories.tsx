import { Clock, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";

const categories = [
  { name: "CNC Machines", techs: 3240, time: "3.4 hrs", availability: "High", path: "CNC" },
  { name: "Injection Molding", techs: 1890, time: "4.1 hrs", availability: "High", path: "Injection" },
  { name: "Hydraulic Press", techs: 1420, time: "2.8 hrs", availability: "Medium", path: "Hydraulic" },
  { name: "Packaging Machines", techs: 2110, time: "2.2 hrs", availability: "High", path: "Packaging" },
  { name: "Welding Robots", techs: 980, time: "5.0 hrs", availability: "Medium", path: "Robots" },
  { name: "Laser Cutting", techs: 760, time: "3.9 hrs", availability: "Medium", path: "Laser" },
  { name: "Conveyor Systems", techs: 2650, time: "1.9 hrs", availability: "High", path: "Conveyor" },
  { name: "Compressors & Boilers", techs: 1730, time: "2.6 hrs", availability: "High", path: "Boilers" },
  { name: "PLC & Robotic Arms", techs: 1180, time: "4.6 hrs", availability: "Medium", path: "PLC" },
];

export function MachineCategories() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c) => (
        <Link
          key={c.name}
          to={`/machine-category/${c.path}`}
          className="surface-card group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
        >
          <div className="relative h-28 bg-steel blueprint-grid">
            <span className="absolute inset-x-0 bottom-0 bg-[image:var(--gradient-hero)] px-5 py-3 text-sm font-semibold text-primary-foreground">
              {c.name}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 p-5 text-center">
            <div>
              <Users className="mx-auto size-4 text-primary" />
              <p className="mt-1.5 text-sm font-semibold">{c.techs.toLocaleString()}</p>
              <p className="text-[11px] text-muted-foreground">Technicians</p>
            </div>
            <div>
              <Clock className="mx-auto size-4 text-primary" />
              <p className="mt-1.5 text-sm font-semibold">{c.time}</p>
              <p className="text-[11px] text-muted-foreground">Avg repair</p>
            </div>
            <div>
              <span className="mx-auto block size-4 rounded-full bg-ember/30 p-1">
                <span className="block size-2 rounded-full bg-ember" />
              </span>
              <p className="mt-1.5 text-sm font-semibold">{c.availability}</p>
              <p className="text-[11px] text-muted-foreground">Availability</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
