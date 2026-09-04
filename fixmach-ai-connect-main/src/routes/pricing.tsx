import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Pricing } from "@/components/site/Pricing";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — FixMach AI" }, { name: "description", content: "Simple pricing for industrial maintenance teams. Free plan available. No credit card required." }] }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Pricing" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Pricing</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Priced against downtime, not seats.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Start free and scale as your plant grows. Every plan includes AI diagnostics, verified technician booking and escrow-protected payments.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">All prices exclude GST. Annual billing available at 20% discount.</p>
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}
