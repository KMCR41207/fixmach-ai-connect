import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Bell, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/live-tracking")({
  head: () => ({ meta: [{ title: "Live Tracking — FixMach AI" }, { name: "description", content: "Track your technician live on a map with real ETA, arrival alerts and in-app chat." }] }),
  component: LiveTrackingPage,
});

const features = [
  { icon: MapPin, title: "Real-time map", body: "Watch the assigned technician's live location update every 30 seconds as they travel to your plant." },
  { icon: Clock, title: "Live ETA", body: "Dynamic arrival estimate recalculated continuously based on traffic and route changes." },
  { icon: Bell, title: "Arrival alerts", body: "Push and SMS notifications when the technician is 10 minutes, 5 minutes, and on-site." },
  { icon: MessageSquare, title: "In-app chat", body: "Text, voice notes and document sharing between your team and the technician en route." },
];

function LiveTrackingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Live Tracking" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Live Tracking</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Know exactly where your technician is, every second.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Track your technician live on a map with real ETA, arrival alerts and in-app chat — from dispatch to repair complete.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Location updates every 30 seconds · Works on all devices</p>

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

        <div className="mt-12 surface-card overflow-hidden">
          <div className="flex h-64 items-center justify-center bg-secondary/50">
            <div className="text-center">
              <MapPin className="mx-auto size-12 text-primary opacity-40" />
              <p className="mt-3 text-sm text-muted-foreground">Live map available after booking a repair</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
