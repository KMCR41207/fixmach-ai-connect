import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Zap, ShieldCheck, Boxes, Trophy } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/become-technician")({
  head: () => ({ meta: [{ title: "Become a Technician — FixMach AI" }, { name: "description", content: "Join 28,500+ verified technicians earning more with flexible industrial repair jobs matched to your skills." }] }),
  component: BecomeTechnicianPage,
});

const perks = [
  { icon: Zap, title: "Jobs that match your skills", body: "Only get alerted for machines you are certified to service. No irrelevant callouts." },
  { icon: ShieldCheck, title: "Guaranteed payouts", body: "Funds are held in escrow before you start. Released automatically on sign-off — no chasing invoices." },
  { icon: Boxes, title: "Parts at hand", body: "Order OEM and compatible spares in-app while on the job. No more procurement delays." },
  { icon: Trophy, title: "Leaderboard & reputation", body: "Build a verified rating, climb the city leaderboard and unlock higher-value jobs over time." },
];

const steps = [
  { n: "01", title: "Apply", body: "Submit your certifications, specialisations and service radius." },
  { n: "02", title: "Verify", body: "Our team verifies your identity and skill certifications." },
  { n: "03", title: "Go live", body: "Set your rates, radius and availability. Start receiving job alerts." },
  { n: "04", title: "Earn", body: "Complete jobs, get rated, and receive instant escrow payouts." },
];

function BecomeTechnicianPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Become a Technician" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">For Technicians</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Your certifications, finally worth what they should be.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Join 28,500+ verified industrial technicians earning more with flexible jobs matched to their exact machine specialisations.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground"><span className="size-2 rounded-full bg-green-500 inline-block"/>Applications open</span>
          <span className="flex items-center gap-1.5 text-muted-foreground"><span className="size-2 rounded-full bg-primary inline-block"/>Verification 24–48 hrs</span>
          <span className="flex items-center gap-1.5 text-muted-foreground"><span className="size-2 rounded-full bg-amber-500 inline-block"/>Instant payouts</span>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {perks.map((p) => (
            <div key={p.title} className="surface-card p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
                <p.icon className="size-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-xl font-semibold">How to join</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="surface-card p-6">
              <p className="text-4xl font-bold text-border">{s.n}</p>
              <h3 className="mt-2 text-sm font-semibold">{s.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 surface-card p-8 text-center">
          <h2 className="text-xl font-semibold">Ready to start earning?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Applications open. Verification takes 24–48 hours.</p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5">
            Apply as Technician <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

