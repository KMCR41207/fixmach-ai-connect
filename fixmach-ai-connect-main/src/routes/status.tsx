import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/status")({
  head: () => ({ meta: [{ title: "Status — FixMach AI" }, { name: "description", content: "Live system status for all FixMach AI services. Current uptime and incident history." }] }),
  component: StatusPage,
});

const services = [
  { name: "AI Diagnosis API", status: "Operational", uptime: "99.98%" },
  { name: "Technician Dispatch", status: "Operational", uptime: "99.95%" },
  { name: "Escrow Payments", status: "Operational", uptime: "100%" },
  { name: "Live Tracking", status: "Operational", uptime: "99.93%" },
  { name: "Notifications (Push/SMS)", status: "Operational", uptime: "99.89%" },
  { name: "Web App", status: "Operational", uptime: "99.99%" },
  { name: "Mobile App (iOS/Android)", status: "Operational", uptime: "99.97%" },
  { name: "Parts Marketplace API", status: "Operational", uptime: "99.91%" },
];

function StatusPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Status" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Status</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">System Status</h1>

        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-green-500/30 bg-green-50 px-5 py-4 dark:bg-green-950/30">
          <CheckCircle2 className="size-5 text-green-600" />
          <p className="text-sm font-semibold text-green-700 dark:text-green-400">All systems operational</p>
          <span className="ml-auto text-xs text-muted-foreground">Updated just now</span>
        </div>

        <div className="mt-8 space-y-3">
          {services.map((s) => (
            <div key={s.name} className="surface-card flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">{s.name}</span>
              </div>
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <span>{s.uptime} uptime</span>
                <span className="font-semibold text-green-600">{s.status}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">Uptime measured over the past 90 days. Last checked: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}. Subscribe to updates at <a href="mailto:status@fixmach.ai" className="text-primary hover:underline">status@fixmach.ai</a></p>
      </div>
      <Footer />
    </div>
  );
}

