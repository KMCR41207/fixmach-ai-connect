import { createFileRoute } from "@tanstack/react-router";
import { Code, Zap, ShieldCheck, Globe } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/api")({
  head: () => ({ meta: [{ title: "API — FixMach AI" }, { name: "description", content: "REST API for AI machine diagnosis, technician dispatch and repair tracking. Integrate FixMach AI into your CMMS or ERP." }] }),
  component: APIPage,
});

const endpoints = [
  { method: "POST", path: "/v1/diagnose", desc: "Submit machine photo, error code or description for AI diagnosis" },
  { method: "GET", path: "/v1/technicians", desc: "List available technicians near a location by machine category" },
  { method: "POST", path: "/v1/bookings", desc: "Create a repair booking and initiate escrow payment" },
  { method: "GET", path: "/v1/bookings/:id", desc: "Get live status and technician location for a booking" },
  { method: "GET", path: "/v1/reports/:id", desc: "Download signed repair report as PDF" },
];

function APIPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="API" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">API</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Integrate FixMach AI into your systems.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          REST API with JSON responses. Connect your CMMS, ERP or IoT platform to FixMach AI for automated fault detection, technician dispatch and repair tracking.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Zap, t: "Fast", b: "Median diagnosis response under 3 seconds." },
            { icon: ShieldCheck, t: "Secure", b: "OAuth 2.0, rate limiting, audit logs." },
            { icon: Globe, t: "REST", b: "Standard JSON over HTTPS, easy to integrate." },
            { icon: Code, t: "SDKs", b: "Python, Node.js and Java SDKs coming soon." },
          ].map((f) => (
            <div key={f.t} className="surface-card p-5">
              <f.icon className="size-5 text-primary" />
              <h3 className="mt-3 text-sm font-semibold">{f.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{f.b}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-xl font-semibold">Endpoints</h2>
        <div className="mt-4 space-y-3">
          {endpoints.map((e) => (
            <div key={e.path} className="surface-card flex items-start gap-4 p-4">
              <span className={`shrink-0 rounded-lg px-2.5 py-1 text-xs font-bold ${e.method === "POST" ? "bg-primary/10 text-primary" : "bg-accent text-accent-foreground"}`}>
                {e.method}
              </span>
              <div>
                <code className="text-sm font-mono text-foreground">{e.path}</code>
                <p className="mt-0.5 text-xs text-muted-foreground">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 surface-card p-8 text-center">
          <h2 className="text-xl font-semibold">Request API access</h2>
          <p className="mt-2 text-sm text-muted-foreground">API keys available on Professional and Enterprise plans.</p>
          <a href="/pricing" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
            View Pricing
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

