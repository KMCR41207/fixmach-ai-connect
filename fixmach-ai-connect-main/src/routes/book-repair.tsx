import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bot, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/book-repair")({
  head: () => ({ meta: [{ title: "Book a Repair — FixMach AI" }, { name: "description", content: "Book a verified industrial technician in under 2 hours. AI diagnosis, escrow payments, GST invoices." }] }),
  component: BookRepairPage,
});

const steps = [
  { icon: Bot, title: "AI Diagnosis", body: "Describe your issue or upload a photo to get an instant AI fault report." },
  { icon: MapPin, title: "Match Technician", body: "Certified technicians nearby are alerted and ranked by arrival time." },
  { icon: ShieldCheck, title: "Approve & Escrow", body: "Review the quote, approve it, and funds move into escrow." },
  { icon: Wrench, title: "Repair & Sign Off", body: "Technician completes the repair; you sign off to release payment." },
];

function BookRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Book a Repair" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Book a Repair</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          A verified technician on site in under 2 hours.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Emergency or scheduled — book a certified industrial technician for CNC, hydraulic, packaging, robotic and process machinery.
        </p>
        <p className="mt-2 text-sm font-medium text-primary">Average technician on site: 94 minutes</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="surface-card p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
                <s.icon className="size-5" />
              </span>
              <p className="mt-1 text-right text-4xl font-bold text-border">0{i + 1}</p>
              <h2 className="mt-2 text-base font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 surface-card p-8 text-center">
          <h2 className="text-2xl font-semibold">Ready to book?</h2>
          <p className="mt-2 text-muted-foreground">Start with a free AI diagnosis — no credit card required.</p>
          <a href="/ai-diagnosis" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5">
            Start AI Diagnosis <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

