import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bot,
  Boxes,
  Camera,
  CircuitBoard,
  Cpu,
  FileText,
  Flame,
  Gauge,
  MapPin,
  MessagesSquare,
  PlayCircle,
  ShieldCheck,
  Siren,
  Timer,
  Wrench,
  Zap,
} from "lucide-react";

import heroFactory from "@/assets/hero-factory.jpg";
import { Counter } from "@/components/site/Counter";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

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
    ],
  }),
  component: Landing,
});

const stats = [
  { value: 20000, suffix: "+", label: "Verified technicians" },
  { value: 100, suffix: "+", label: "Machine types" },
  { value: 30, suffix: " min", label: "Average response" },
  { value: 99, suffix: "%", label: "Customer satisfaction" },
];

const aiOutputs = [
  { icon: Cpu, label: "Probable fault", value: "Spindle bearing wear" },
  { icon: Flame, label: "Severity", value: "High · stop machine" },
  { icon: Timer, label: "Repair duration", value: "3–5 hours" },
  { icon: Gauge, label: "Confidence", value: "92%" },
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
  {
    icon: Camera,
    title: "Describe the breakdown",
    body: "Snap the machine, upload the error code or record the sound. Two minutes, no forms to fight.",
  },
  {
    icon: Bot,
    title: "Get the AI diagnosis",
    body: "Probable cause, severity, temporary fix and safety warnings — with an estimated cost and duration.",
  },
  {
    icon: BadgeCheck,
    title: "Match a verified technician",
    body: "Ranked by machine expertise, certification, distance, rating and availability window.",
  },
  {
    icon: Wrench,
    title: "Track, repair, close out",
    body: "Live ETA, in-app chat, repair report and invoice — with escrow payment released on completion.",
  },
];

const categories = [
  "CNC Machines",
  "Injection Molding",
  "Hydraulic Press",
  "Packaging Machines",
  "Printing Machines",
  "Laser Cutting",
  "Welding Robots",
  "Conveyor Systems",
  "Compressors",
  "Boilers",
  "Industrial Generators",
  "Textile Machines",
  "Food Processing",
  "Pharma Machines",
  "Chemical Processing",
  "Mining Equipment",
  "HVAC Industrial",
  "PLC Systems",
  "Robotic Arms",
  "Custom Machines",
];

const technicianPerks = [
  { icon: Zap, title: "Jobs that match your skills", body: "Only machines you are certified for." },
  { icon: ShieldCheck, title: "Guaranteed payouts", body: "Escrow-backed, released on sign-off." },
  { icon: Boxes, title: "Parts at hand", body: "Order OEM and compatible spares in-app." },
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
        <div
          aria-hidden
          className="absolute -left-24 top-24 size-96 rounded-full bg-[image:var(--gradient-accent)] opacity-30 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden
          className="absolute -right-16 bottom-0 size-80 rounded-full bg-[image:var(--gradient-ember)] opacity-25 blur-3xl animate-float-slow"
        />

        <div className="relative mx-auto grid w-[min(1200px,92%)] gap-12 pb-24 pt-40 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-32 lg:pt-44">
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
                href="#technicians"
                className="glass-panel inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/20"
              >
                Become Technician
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-primary-foreground/85 transition-colors hover:text-primary-foreground"
              >
                <PlayCircle className="size-4.5" /> Watch demo
              </a>
            </div>
          </div>

          {/* Live dispatch card */}
          <div className="glass-panel animate-rise-in rounded-3xl p-5 [animation-delay:150ms]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
                Live dispatch
              </p>
              <span className="flex items-center gap-2 rounded-full bg-ember/20 px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                <span className="size-2 rounded-full bg-ember animate-pulse-ring" /> Emergency
              </span>
            </div>

            <div className="mt-4 rounded-2xl bg-background p-4">
              <p className="text-xs font-medium text-muted-foreground">Haas VF-2 · CNC Mill</p>
              <p className="mt-1 text-sm font-semibold">Alarm 176 — spindle overheating</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {aiOutputs.map((o) => (
                  <div key={o.label} className="rounded-xl bg-secondary/70 p-3">
                    <o.icon className="size-4 text-primary" />
                    <p className="mt-2 text-[11px] uppercase tracking-wide text-muted-foreground">
                      {o.label}
                    </p>
                    <p className="text-sm font-semibold leading-tight">{o.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3 rounded-2xl bg-background p-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-[image:var(--gradient-accent)] text-sm font-bold text-primary-foreground">
                RK
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">Ravi K. · CNC & spindle specialist</p>
                <p className="text-xs text-muted-foreground">
                  4.9 ★ · 11 yrs · 6.2 km away · ETA 24 min
                </p>
              </div>
              <BadgeCheck className="size-5 shrink-0 text-primary" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mx-auto w-[min(1200px,92%)] pb-16">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card p-6">
                <p className="text-3xl font-semibold tracking-tight text-foreground">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI diagnosis */}
      <section id="ai-diagnosis" className="mx-auto w-[min(1200px,92%)] py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            AI diagnosis
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            From a photo and an error code to a costed repair plan.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our models read machine imagery, OCR error screens, listen to abnormal sounds and parse
            maintenance logs — then produce a report your maintenance head can act on immediately.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      <section id="how-it-works" className="border-y border-border bg-secondary/40 py-20">
        <div className="mx-auto w-[min(1200px,92%)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Four steps between breakdown and back in production.
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">Median time to technician on site: 94 min</p>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
      <section id="machines" className="mx-auto w-[min(1200px,92%)] py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Machine coverage
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            100+ machine types, one dispatch network.
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Technicians */}
      <section id="technicians" className="border-t border-border bg-steel py-20 text-steel-foreground">
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
            <a
              href="#book"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-ember-foreground transition-transform hover:-translate-y-0.5"
            >
              Apply as technician <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid gap-4">
            {technicianPerks.map((p) => (
              <div key={p.title} className="glass-panel flex items-start gap-4 rounded-2xl p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <p.icon className="size-5 text-ember" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-steel-foreground/70">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="mx-auto w-[min(1200px,92%)] py-20">
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
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <a
        href="#book"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-2xl bg-[image:var(--gradient-ember)] px-5 py-3 text-sm font-semibold text-ember-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
      >
        <Wrench className="size-4" /> Book Repair
      </a>
    </div>
  );
}
