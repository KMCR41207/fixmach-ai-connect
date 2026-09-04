import { createFileRoute } from "@tanstack/react-router";
import { IndianRupee, Zap, ShieldCheck, CreditCard } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/payouts")({
  head: () => ({ meta: [{ title: "Payouts — FixMach AI" }, { name: "description", content: "Instant escrow-backed payouts for technicians. No chasing invoices — get paid minutes after job sign-off." }] }),
  component: PayoutsPage,
});

function PayoutsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Payouts" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Payouts</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Get paid instantly. No chasing invoices.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Funds are held in escrow before you start the job and released automatically the moment the plant manager signs off the repair.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            { icon: ShieldCheck, title: "Escrow protection", body: "Payment is secured before you travel. You will always get paid for completed work." },
            { icon: Zap, title: "Instant release", body: "Funds hit your bank account within minutes of sign-off — no net-30 delays." },
            { icon: IndianRupee, title: "Transparent fees", body: "FixMach AI charges a flat platform fee. You keep the rest. No hidden deductions." },
            { icon: CreditCard, title: "Bank & UPI support", body: "Payouts via NEFT, IMPS or UPI to any Indian bank account." },
          ].map((f) => (
            <div key={f.title} className="surface-card p-6">
              <f.icon className="size-6 text-primary" />
              <h2 className="mt-3 text-base font-semibold">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

