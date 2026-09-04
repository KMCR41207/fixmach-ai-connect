import { createFileRoute } from "@tanstack/react-router";
import { Boxes, Zap, ShieldCheck, Truck } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/spare-parts")({
  head: () => ({ meta: [{ title: "Spare Parts — FixMach AI" }, { name: "description", content: "OEM and compatible spare parts for industrial machinery. Same-day delivery in major industrial corridors." }] }),
  component: SparePartsPage,
});

const features = [
  { icon: Boxes, title: "OEM & compatible parts", body: "Browse original manufacturer parts and certified compatible alternatives for 150+ machine categories." },
  { icon: Zap, title: "Order during the job", body: "Technicians can order required parts directly from the app while on-site, eliminating procurement delays." },
  { icon: ShieldCheck, title: "Quality guaranteed", body: "Every part ships with a quality certificate and 90-day warranty on fitment." },
  { icon: Truck, title: "Fast delivery", body: "Same-day delivery available in major industrial corridors. Next-day across India." },
];

function SparePartsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Spare Parts" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Spare Parts</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          The right part, delivered before the repair stalls.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Our in-app marketplace stocks OEM and compatible spares for CNC, hydraulic, packaging and robotic machinery — orderable by your technician mid-job.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">10,000+ SKUs · Same-day delivery in Bengaluru, Pune, Chennai, Mumbai, Hyderabad</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="surface-card p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <f.icon className="size-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 surface-card p-8 text-center">
          <h2 className="text-xl font-semibold">Parts marketplace coming soon</h2>
          <p className="mt-2 text-sm text-muted-foreground">Register your plant to get early access.</p>
          <a href="/#book" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Get Early Access
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
