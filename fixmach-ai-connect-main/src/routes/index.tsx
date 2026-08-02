import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bot,
  Boxes,
  Camera,
  CheckCircle2,
  CircuitBoard,
  Clock,
  FileText,
  IndianRupee,
  MapPin,
  MessagesSquare,
  PlayCircle,
  ShieldCheck,
  Siren,
  Wrench,
  Zap,
} from "lucide-react";

import heroFactory from "@/assets/hero-factory.jpg";
import { Counter } from "@/components/site/Counter";
import { DiagnosisFlow } from "@/components/site/DiagnosisFlow";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { Industries } from "@/components/site/Industries";
import { LiveWorkflow } from "@/components/site/LiveWorkflow";
import { MachineCategories } from "@/components/site/MachineCategories";
import { Navbar } from "@/components/site/Navbar";
import { Pricing } from "@/components/site/Pricing";
import { TechnicianDashboard } from "@/components/site/TechnicianDashboard";
import { Testimonials } from "@/components/site/Testimonials";
import { TrustLogos } from "@/components/site/TrustLogos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FixMach AI — Industrial Machine Repair in Minutes" },
      {
        name: "description",
        content:
          "AI diagnostics plus verified industrial technicians on demand. Diagnose breakdowns, get repair estimates and book a technician in minutes to cut factory downtime.",
      },
      { property: "og:title", content: "FixMach AI — Industrial Machine Repair in Minutes" },
      {
        property: "og:description",
        content:
          "AI diagnostics plus verified industrial technicians on demand for CNC, hydraulic, packaging and robotic machinery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const stats = [
  { value: 28500, suffix: "+", label: "Verified technicians" },
  { value: 150, suffix: "+", label: "Machine categories" },
  { value: 8, suffix: " min", label: "Average response time" },
  { value: 99.3, suffix: "%", decimals: 1, label: "Repair success" },
  { value: 12, prefix: "₹", suffix: "Cr+", label: "Downtime saved" },
];

const urgency = [
  { icon: Clock, label: "Average response time", value: "8 Minutes" },
  { icon: Wrench, label: "Average repair completion", value: "4.3 Hours" },
  { icon: Siren, label: "Emergency dispatch", value: "24/7" },
];

const features = [
  {
    icon: Bot,
    title: "AI machine diagnosis",
    body: "Upload photos, videos, error screenshots, machine sounds or maintenance logs. Get the probable fault, severity, damaged components and a cost band.",
  },
  {
    icon: MapPin,
    title: "Live technician tracking",
    body: "Watch the assigned technician move toward your plant with real ETA, distance and arrival notifications.",
  },
  {
    icon: Siren,
    title: "Emergency dispatch",
    body: "One tap alerts every qualified technician nearby, ranked by arrival time with transparent priority pricing.",
  },
  {
    icon: Activity,
    title: "Predictive maintenance",
    body: "Health scores, failure probability and service intervals per machine so the next breakdown never surprises you.",
  },
  {
    icon: MessagesSquare,
    title: "Chat, voice & video",
    body: "Text, voice notes, documents and live machine-camera sharing between your team and the technician.",
  },
  {
    icon: FileText,
    title: "Reports & GST invoices",
    body: "Before/after images, signed repair reports and tax-ready PDF invoices generated automatically.",
  },
];

const steps = [
  { icon: Camera, title: "Upload issue", body: "Snap the machine, upload the error code or record the sound. Two minutes, no forms to fight." },
  { icon: Bot, title: "AI diagnosis", body: "Probable cause, severity, temporary fix and safety warnings — with cost and duration." },
  { icon: MapPin, title: "Nearby technicians", body: "Certified specialists within your radius are alerted and ranked by arrival time." },
  { icon: BadgeCheck, title: "Accept quote", body: "Transparent line-item pricing. Approve from your phone; funds move into escrow." },
  { icon: Wrench, title: "Repair", body: "Live ETA, in-app chat and machine-camera sharing until the line is running again." },
  { icon: IndianRupee, title: "Payment", body: "Sign off the repair report; escrow releases and the GST invoice is issued." },
];

const technicianPerks = [
  { icon: Zap, title: "Jobs that match your skills", body: "Only machines you are certified for." },
  { icon: ShieldCheck, title: "Guaranteed payouts", body: "Escrow-backed, released on sign-off." },
  { icon: Boxes, title: "Parts at hand", body: "Order OEM and compatible spares in-app." },
];

const particles = [
  { left: "8%", delay: "0s" },
  { left: "22%", delay: "2.5s" },
  { left: "37%", delay: "5s" },
  { left: "54%", delay: "1.2s" },
  { left: "68%", delay: "3.8s" },
  { left: "81%", delay: "6.2s" },
  { left: "93%", delay: "4.4s" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroFactory}
          alt="Industrial factory floor with CNC machines and robotic arms"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div aria-hidden className="absolute inset-0 blueprint-grid opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[image:var(--gradient-scan)] animate-scan-y"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {particles.map((p) => (
            <span
              key={p.left}
              className="absolute bottom-10 size-1.5 rounded-full bg-ember/70 animate-drift"
              style={{ left: p.left, animationDelay: p.delay }}
            />
          ))}
        </div>
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          className="pointer-events-none absolute -right-16 top-24 size-72 text-primary-foreground/10 animate-spin-gear"
        >
          <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="10 8" />
          <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
        <div
          aria-hidden
          className="absolute -left-24 top-24 size-96 rounded-full bg-[image:var(--gradient-accent)] opacity-30 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden
          className="absolute -right-16 bottom-0 size-80 rounded-full bg-[image:var(--gradient-ember)] opacity-25 blur-3xl animate-float-slow"
        />

        <div className="relative mx-auto grid w-[min(1200px,92%)] gap-12 pb-16 pt-40 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-44">
          <div className="animate-rise-in">
            <span className="glass-panel inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-primary-foreground">
              <CircuitBoard className="size-3.5" />
              AI diagnostics · verified technicians · escrow payments
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Industrial machine breakdown?
              <span className="block text-gradient">Find verified technicians in minutes.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              Reduce downtime with AI-powered diagnostics and instant technician booking — for CNC,
              hydraulic, packaging, robotic and process machinery.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-ember-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                Book Repair <ArrowRight className="size-4" />
              </a>
              <a
                href="#ai-diagnosis"
                className="inline-flex items-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                <Bot className="size-4" /> AI Diagnosis
              </a>
              <a
                href="#book"
                className="glass-panel inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/20"
              >
                <PlayCircle className="size-4" /> Schedule Demo
              </a>
              <a
                href="#technicians"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-primary-foreground/85 transition-colors hover:text-primary-foreground"
              >
                Become Technician
              </a>
            </div>

            <dl className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {urgency.map((u) => (
                <div key={u.label} className="glass-panel rounded-2xl p-4">
                  <u.icon className="size-4 text-ember" />
                  <dd className="mt-2 text-lg font-semibold text-primary-foreground">{u.value}</dd>
                  <dt className="text-[11px] leading-tight text-primary-foreground/65">{u.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <LiveWorkflow />
        </div>

        <TrustLogos />

        {/* Stats */}
        <div className="relative mx-auto w-[min(1200px,92%)] pb-16">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="bg-card p-6">
                <p className="text-3xl font-semibold tracking-tight text-foreground">
                  <Counter
                    to={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI diagnosis */}
      <section id="ai-diagnosis" className="mx-auto w-[min(1200px,92%)] py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            AI diagnosis
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            From a photo and an error code to a costed repair plan.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Drop in machine imagery, an HMI screenshot, an abnormal sound or a maintenance log and
            watch the pipeline run end to end — OCR, fault detection, confidence, cost and the
            nearest certified technician.
          </p>
        </div>

        <DiagnosisFlow />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="surface-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-[image:var(--gradient-accent)] group-hover:text-primary-foreground">
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-border bg-secondary/40 py-24">
        <div className="mx-auto w-[min(1200px,92%)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Six steps between breakdown and back in production.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">Median time to technician on site: 94 min</p>
          </div>

          <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="surface-card relative p-6">
                <span className="absolute right-5 top-5 text-4xl font-bold text-border">
                  0{i + 1}
                </span>
                <span className="flex size-11 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Machine categories */}
      <section id="machines" className="mx-auto w-[min(1200px,92%)] py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Machine coverage
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            150+ machine categories, one dispatch network.
          </h2>
        </div>
        <MachineCategories />
      </section>

      {/* Industries */}
      <section id="industries" className="border-y border-border bg-secondary/40 py-24">
        <div className="mx-auto w-[min(1200px,92%)]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Industries served
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for the floors where every minute is money.
            </h2>
          </div>
          <Industries />
        </div>
      </section>

      {/* Technicians */}
      <section id="technicians" className="border-t border-border bg-steel py-24 text-steel-foreground">
        <div className="mx-auto grid w-[min(1200px,92%)] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ember">
              For technicians
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Your certifications, finally worth what they should be.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-steel-foreground/75">
              Set your specializations, service radius and rates. Accept only the jobs that fit,
              track earnings and climb the regional leaderboard.
            </p>
            <div className="mt-8 grid gap-3">
              {technicianPerks.map((p) => (
                <div key={p.title} className="glass-panel flex items-start gap-4 rounded-2xl p-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <p.icon className="size-4.5 text-ember" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-steel-foreground/70">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#book"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-ember-foreground transition-transform hover:-translate-y-0.5"
            >
              Apply as technician <ArrowRight className="size-4" />
            </a>
          </div>

          <TechnicianDashboard />
        </div>
      </section>

      {/* Testimonials & case studies */}
      <section id="testimonials" className="mx-auto w-[min(1200px,92%)] py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Proof on the floor
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Maintenance heads measure us in hours saved.
          </h2>
        </div>
        <Testimonials />
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-y border-border bg-secondary/40 py-24">
        <div className="mx-auto w-[min(1200px,92%)]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Pricing</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Priced against downtime, not seats.
            </h2>
          </div>
          <Pricing />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto w-[min(1200px,92%)] py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions plant teams ask us first.
          </h2>
        </div>
        <FAQ />
      </section>

      {/* CTA */}
      <section id="book" className="mx-auto w-[min(1200px,92%)] pb-24">
        <div className="surface-card relative overflow-hidden p-10 text-center sm:p-16">
          <div
            aria-hidden
            className="absolute -left-20 -top-24 size-72 rounded-full bg-[image:var(--gradient-accent)] opacity-15 blur-3xl animate-float-slow"
          />
          <h2 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">
            Every idle hour costs more than the repair.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Register your plant, add your machines, and keep a verified technician one tap away.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#ai-diagnosis"
              className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              Start free AI diagnosis <ArrowRight className="size-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Schedule a demo
            </a>
          </div>
          <p className="relative mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="size-4 text-primary" /> No card required · Escrow-protected
            payments · GST invoices
          </p>
        </div>
      </section>

      <Footer />

      <a
        href="#book"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-2xl bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-ember-foreground shadow-[var(--shadow-glow)] animate-pulse-ring transition-transform hover:-translate-y-0.5"
      >
        <Wrench className="size-4" /> Book Repair
      </a>
    </div>
  );
}
