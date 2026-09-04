import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — FixMach AI" }, { name: "description", content: "FixMach AI was founded to eliminate days-long waits between industrial machine breakdowns and repairs." }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="About Us" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Built to end factory downtime.</h1>

        <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>FixMach AI was founded in 2024 with one mission: eliminate the days-long wait between an industrial machine breaking down and getting it fixed.</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">We built an AI that reads machine photos, HMI error codes, abnormal sounds and maintenance logs to pinpoint faults in seconds — then instantly connects the plant to a verified, certified technician who can actually fix it.</p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">Today, FixMach AI serves manufacturing plants across India, with a network of 28,500+ verified technicians covering CNC, hydraulic, packaging, robotic and process machinery.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { label: "Founded", value: "2024" },
            { label: "Technicians", value: "28,500+" },
            { label: "Machine categories", value: "150+" },
          ].map((s) => (
            <div key={s.label} className="surface-card p-6 text-center">
              <p className="text-3xl font-semibold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 surface-card p-8">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
              <Wrench className="size-5" />
            </span>
            <h2 className="text-lg font-semibold">Our mission</h2>
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            To make industrial machinery repair as fast and reliable as calling an Uber — with AI-powered diagnosis, verified technicians and escrow-protected payments all in one platform.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

