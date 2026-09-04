import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — FixMach AI" }, { name: "description", content: "Join the FixMach AI team and help build AI for industrial maintenance across India." }] }),
  component: CareersPage,
});

const roles = [
  { dept: "Engineering", title: "Senior Full-Stack Engineer", loc: "Bengaluru / Remote", type: "Full-time" },
  { dept: "Engineering", title: "ML Engineer — Computer Vision", loc: "Bengaluru / Remote", type: "Full-time" },
  { dept: "Product", title: "Product Manager — Marketplace", loc: "Bengaluru", type: "Full-time" },
  { dept: "Growth", title: "B2B Sales — Industrial Accounts", loc: "Mumbai / Delhi", type: "Full-time" },
  { dept: "Operations", title: "Technician Success Manager", loc: "Bengaluru", type: "Full-time" },
];

const deptColors: Record<string, string> = {
  Engineering: "bg-blue-50 text-blue-700",
  Product: "bg-purple-50 text-purple-700",
  Growth: "bg-green-50 text-green-700",
  Operations: "bg-amber-50 text-amber-700",
};

function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Careers" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Careers</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Help us fix India's factories.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          We're a small, fast-moving team building AI for industrial maintenance. If you want your work to matter to the people running India's production lines, we'd love to hear from you.
        </p>

        <div className="mt-12 space-y-3">
          {roles.map((r) => (
            <div key={r.title} className="surface-card flex flex-wrap items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${deptColors[r.dept]}`}>{r.dept}</span>
                <h2 className="text-sm font-semibold">{r.title}</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">{r.loc}</span>
                <span className="text-xs text-muted-foreground">{r.type}</span>
                <a href="mailto:careers@fixmach.ai" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                  Apply <ArrowRight className="size-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 surface-card p-8 text-center">
          <h2 className="text-xl font-semibold">Don't see your role?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Send us your CV anyway — we're always looking for great people.</p>
          <a href="mailto:careers@fixmach.ai" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary">
            careers@fixmach.ai
          </a>
          <p className="mt-4 text-xs text-muted-foreground">We respond to every application within 5 business days.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
