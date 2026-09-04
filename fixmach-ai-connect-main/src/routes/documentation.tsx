import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Code, Zap, Settings } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/documentation")({
  head: () => ({ meta: [{ title: "Documentation — FixMach AI" }, { name: "description", content: "Guides, API reference and integration docs for plant managers, engineers and developers." }] }),
  component: DocumentationPage,
});

const sections = [
  { icon: Zap, title: "Getting started", items: ["Create your account", "Add your first machine", "Run your first AI diagnosis", "Book your first technician"] },
  { icon: Settings, title: "Platform guide", items: ["Managing machines & service logs", "Team roles and permissions", "Escrow payments explained", "AMC & warranty tracking"] },
  { icon: Code, title: "API reference", items: ["Authentication & API keys", "Diagnose endpoint", "Bookings API", "Webhooks & callbacks"] },
  { icon: BookOpen, title: "Integrations", items: ["SAP PM integration", "CMMS connectors", "IoT sensor ingestion", "WhatsApp notifications", "Slack alerts"] },
];

function DocumentationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Documentation" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Documentation</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to get up and running.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Guides, API reference and integration docs for plant managers, maintenance engineers and developers.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2026 · v2.1 API</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {sections.map((s) => (
            <div key={s.title} className="surface-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <s.icon className="size-4.5" />
                </span>
                <h2 className="text-base font-semibold">{s.title}</h2>
              </div>
              <ul className="mt-4 space-y-2">
                {s.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

