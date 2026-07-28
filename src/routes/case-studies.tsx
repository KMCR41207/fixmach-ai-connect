import { createFileRoute } from "@tanstack/react-router";
import { Award, TrendingUp, Clock, DollarSign } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const cases = [
    {
      title: "ABC Manufacturing: 40% Downtime Reduction",
      company: "ABC Manufacturing Ltd.",
      industry: "Automotive",
      challenge: "Frequent CNC breakdowns causing 200+ hours downtime/month",
      solution: "Implemented AI diagnostics and predictive maintenance",
      results: [
        { metric: "Downtime", value: "200hrs → 120hrs/month", icon: Clock },
        { metric: "Savings", value: "₹50L annually", icon: DollarSign },
        { metric: "Efficiency", value: "+35%", icon: TrendingUp },
      ],
      image: "🏭",
    },
    {
      title: "XYZ Factory: 5x Faster Repairs",
      company: "XYZ Factory Private Ltd.",
      industry: "Food Processing",
      challenge: "2-3 day repair time for packaging machines",
      solution: "Connected verified technician network with AI diagnosis",
      results: [
        { metric: "Repair Time", value: "2 days → 4 hours", icon: Clock },
        { metric: "Cost Saved", value: "₹25L annually", icon: DollarSign },
        { metric: "Uptime", value: "+98%", icon: Award },
      ],
      image: "🍝",
    },
    {
      title: "Tech Steel: Zero Emergency Repairs",
      company: "Tech Steel Industries",
      industry: "Steel & Metals",
      challenge: "Unpredictable equipment failures",
      solution: "24/7 AI monitoring and preventive maintenance",
      results: [
        { metric: "Emergency Repairs", value: "100 → 0/month", icon: Award },
        { metric: "Investment", value: "3-month ROI", icon: TrendingUp },
        { metric: "Satisfaction", value: "99% uptime SLA", icon: Clock },
      ],
      image: "🏢",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how factories like yours are saving time and money with FixMach
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((c, idx) => (
            <div key={idx} className="surface-card p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <span className="text-muted-foreground text-sm font-semibold">COMPANY</span>
                  <h2 className="text-2xl font-bold mt-2 mb-4">{c.title}</h2>
                  <p className="text-muted-foreground mb-4">{c.company}</p>
                  <div className="px-3 py-1 bg-primary/20 text-primary rounded w-fit text-xs font-semibold">
                    {c.industry}
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm font-semibold">CHALLENGE</span>
                  <p className="text-base mt-2">{c.challenge}</p>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm font-semibold">SOLUTION</span>
                  <p className="text-base mt-2">{c.solution}</p>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-6">
                <span className="text-muted-foreground text-sm font-semibold">RESULTS</span>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  {c.results.map((result) => (
                    <div key={result.metric} className="text-center">
                      <result.icon className="size-6 text-primary mx-auto mb-2" />
                      <div className="font-bold mb-1">{result.value}</div>
                      <div className="text-sm text-muted-foreground">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="surface-card p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-3">Ready for Similar Results?</h2>
          <p className="text-muted-foreground mb-6">Join 1000+ factories reducing downtime and saving money</p>
          <button className="bg-[image:var(--gradient-accent)] text-primary-foreground px-8 py-3 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
}
