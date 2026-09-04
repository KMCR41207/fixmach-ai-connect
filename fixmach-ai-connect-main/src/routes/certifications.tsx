import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, ShieldCheck, Star } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/certifications")({
  head: () => ({ meta: [{ title: "Certifications — FixMach AI" }, { name: "description", content: "Four-level technician certification framework. Higher levels unlock better jobs and earnings on FixMach AI." }] }),
  component: CertificationsPage,
});

const certs = [
  { level: "Level 1", title: "General Industrial Technician", req: "ITI certificate + 2 years field experience", machines: "Conveyors, compressors, basic hydraulics, pumps" },
  { level: "Level 2", title: "Specialist Technician", req: "Diploma/BE + 3 years + manufacturer training", machines: "CNC, injection moulding, packaging lines, welding robots" },
  { level: "Level 3", title: "Master Technician", req: "BE/ME + 5 years + FixMach assessment", machines: "Robotic arms, PLC systems, cleanroom tools, laser cutting" },
  { level: "Level 4", title: "FixMach Certified Expert", req: "Level 3 + 50 completed jobs + 4.8+ rating", machines: "All categories, mentoring, complex multi-machine faults" },
];

function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Certifications" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Certifications</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A skill framework you can build on.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          FixMach AI certifies technicians across four levels. Higher levels unlock higher-value jobs, priority dispatch and better earnings.
        </p>

        <div className="mt-12 space-y-4">
          {certs.map((c, i) => (
            <div key={c.level} className="surface-card p-6">
              <div className="flex items-start gap-4">
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-primary-foreground ${i >= 2 ? "bg-[image:var(--gradient-accent)]" : "bg-accent text-accent-foreground"}`}>
                  {i >= 3 ? <Star className="size-5" /> : i >= 2 ? <ShieldCheck className="size-5" /> : <BadgeCheck className="size-5 text-primary" />}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-muted-foreground">{c.level}</span>
                    <h2 className="text-base font-semibold">{c.title}</h2>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Requirements: {c.req}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Machines: {c.machines}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

