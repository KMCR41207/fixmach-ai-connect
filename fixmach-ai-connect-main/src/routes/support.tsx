import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Phone, Mail, Clock } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FAQ } from "@/components/site/FAQ";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/support")({
  head: () => ({ meta: [{ title: "Support — FixMach AI" }, { name: "description", content: "24/7 support for emergency dispatch. Contact us via live chat, phone or email." }] }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Support" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Support</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">We're here when your machines aren't.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          24/7 support for emergency dispatch. Business hours support for platform questions.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MessageSquare, title: "Live chat", body: "Available 24/7 in the app for emergency repair support.", cta: "Open chat", href: "#" },
            { icon: Phone, title: "Emergency hotline", body: "Call us directly for critical machine-down situations.", cta: "+91 1800 XXX XXXX", href: "tel:+911800XXXXXXX" },
            { icon: Mail, title: "Email support", body: "For billing, account and non-urgent platform questions.", cta: "support@fixmach.ai", href: "mailto:support@fixmach.ai" },
            { icon: Clock, title: "Response time", body: "Emergency: under 5 min. General: under 4 business hours.", cta: "View SLA", href: "#" },
          ].map((c) => (
            <div key={c.title} className="surface-card flex flex-col p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <c.icon className="size-5" />
              </span>
              <h2 className="mt-4 text-sm font-semibold">{c.title}</h2>
              <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">{c.body}</p>
              <a href={c.href} className="mt-4 text-xs font-semibold text-primary hover:underline">{c.cta}</a>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-xl font-semibold">Frequently asked questions</h2>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

