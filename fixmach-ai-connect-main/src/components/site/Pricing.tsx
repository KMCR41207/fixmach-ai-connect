import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    tagline: "For a single plant testing the waters.",
    features: [
      "5 AI diagnoses / month",
      "Up to 3 machines",
      "Verified technician booking",
      "Basic repair reports",
    ],
  },
  {
    name: "Professional",
    price: "₹24,999",
    period: "per plant / month",
    tagline: "For plants that cannot afford downtime.",
    featured: true,
    features: [
      "Unlimited AI diagnoses",
      "Unlimited machines & service logs",
      "Emergency 24/7 dispatch priority",
      "Predictive maintenance health scores",
      "Escrow payments + GST invoicing",
      "Spare parts marketplace access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "multi-factory",
    tagline: "For groups running many sites.",
    features: [
      "Multi-factory management",
      "Role-based access & approvals",
      "AMC & warranty tracking",
      "Purchase orders & vendor management",
      "Downtime and cost analytics",
      "Dedicated success manager + SLA",
    ],
  },
];

export function Pricing() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {plans.map((p) => (
        <article
          key={p.name}
          className={`surface-card relative flex flex-col p-7 transition-all duration-300 hover:-translate-y-1 ${
            p.featured ? "ring-2 ring-primary shadow-[var(--shadow-glow)]" : ""
          }`}
        >
          {p.featured && (
            <span className="absolute -top-3 left-7 rounded-full bg-[image:var(--gradient-ember)] px-3 py-1 text-[11px] font-semibold text-ember-foreground">
              Most popular
            </span>
          )}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">{p.name}</h3>
          <p className="mt-4 text-3xl font-semibold tracking-tight">{p.price}</p>
          <p className="text-xs text-muted-foreground">{p.period}</p>
          <p className="mt-3 text-sm text-muted-foreground">{p.tagline}</p>
          <ul className="mt-6 flex-1 space-y-2.5">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href="#book"
            className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
              p.featured
                ? "bg-[image:var(--gradient-accent)] text-primary-foreground"
                : "border border-border hover:bg-secondary"
            }`}
            aria-label={p.name === "Enterprise" ? "Talk to sales about Enterprise plan" : `Get started with ${p.name} plan`}
          >
            {p.name === "Enterprise" ? "Talk to sales" : "Get started"}
            <ArrowRight className="size-4" />
          </a>
        </article>
      ))}
    </div>
  );
}
