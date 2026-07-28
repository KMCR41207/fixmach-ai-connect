import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing-plans")({
  component: PricingPlansPage,
});

function PricingPlansPage() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Startup",
      price: "₹0",
      period: "Free Forever",
      desc: "Perfect for small facilities",
      features: [
        "Up to 5 machines",
        "AI diagnostics (5 per month)",
        "Basic support",
        "Standard technicians",
        "Email support",
      ],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Professional",
      price: "₹4,999",
      period: "Per Month",
      desc: "For growing factories",
      features: [
        "Unlimited machines",
        "Unlimited AI diagnostics",
        "Priority support",
        "Access to expert technicians",
        "Phone + Email support",
        "Analytics dashboard",
        "Custom reports",
      ],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact Sales",
      desc: "For large operations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "24/7 phone support",
        "SLA guarantees",
        "Custom integrations",
        "API access",
        "Unlimited custom reports",
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your factory's needs. Always free to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`surface-card p-8 rounded-lg ${
                plan.featured
                  ? "border-2 border-primary shadow-[var(--shadow-glow)] transform md:scale-105"
                  : "border border-border"
              }`}
            >
              {plan.featured && (
                <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.desc}</p>
              <div className="mb-6">
                <div className="text-4xl font-bold">{plan.price}</div>
                <div className="text-sm text-muted-foreground">{plan.period}</div>
              </div>
              <button
                onClick={() => navigate({ to: "/auth/register" })}
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)]"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                {plan.cta}
              </button>
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="size-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="surface-card p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Can I change plans anytime?", a: "Yes, upgrade or downgrade anytime with prorated billing." },
              { q: "Is there a setup fee?", a: "No setup fees. Start using FixMach immediately." },
              { q: "What payment methods do you accept?", a: "Credit cards, debit cards, UPI, and net banking." },
              { q: "Do you offer discounts for annual billing?", a: "Yes! Save 20% with annual plans." },
            ].map((faq, idx) => (
              <div key={idx} className="p-4 bg-secondary/30 rounded-lg">
                <h4 className="font-semibold mb-2">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
