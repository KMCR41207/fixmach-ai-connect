import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/service-contracts")({
  component: ServiceContractsPage,
});

function ServiceContractsPage() {
  const contracts = [
    {
      name: "Annual Preventive Care",
      coverage: "24/7 machine coverage for critical assets",
      savings: "Up to 30% on emergency repairs",
      details: "Includes scheduled inspections, predictive diagnostics, and priority technician dispatch.",
    },
    {
      name: "Standard Repair Support",
      coverage: "On-demand service for breakdowns and part replacements",
      savings: "Up to 18% on repair work",
      details: "Choose this plan for flexible coverage on individual machines and small fleets.",
    },
    {
      name: "OEM Protection",
      coverage: "Manufacturer-approved service agreements with genuine parts",
      savings: "Fixed-rate service pricing",
      details: "Sync warranty and warranty-expired equipment with certified OEM technicians.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Service Contracts</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a service contract to keep machines running longer and reduce unplanned downtime.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {contracts.map((contract) => (
            <div key={contract.name} className="surface-card rounded-3xl p-8">
              <h2 className="text-2xl font-semibold mb-3">{contract.name}</h2>
              <p className="text-muted-foreground mb-4">{contract.details}</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Coverage</span>
                  <span>{contract.coverage}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Estimated savings</span>
                  <span>{contract.savings}</span>
                </div>
              </div>
              <button className="w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)]">
                Subscribe now
              </button>
            </div>
          ))}
        </div>

        <div className="surface-card rounded-3xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">Why contract service matters</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Predictable repair costs and reduced emergency spend</li>
            <li>• Faster technician mobilization for covered equipment</li>
            <li>• Integrated service history and performance reporting</li>
            <li>• Priority access to certified OEM and specialty technicians</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
