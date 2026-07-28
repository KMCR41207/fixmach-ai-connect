import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/partners")({
  component: PartnersPage,
});

function PartnersPage() {
  const partners = [
    { name: "OEM Parts Network", benefit: "Native spare part sourcing for 50+ machine brands." },
    { name: "Logistics Connect", benefit: "Same-day parts delivery within major industrial corridors." },
    { name: "Warranty Bridge", benefit: "Automatic warranty validation and claim assistance." },
    { name: "Safety Audit", benefit: "Integrated inspection checklists for every repair." },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Partners & Integrations</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            FixMach works with service partners, parts suppliers, and compliance networks to streamline repairs and reduce downtime.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {partners.map((partner) => (
            <div key={partner.name} className="surface-card rounded-3xl p-8">
              <h2 className="text-2xl font-semibold mb-3">{partner.name}</h2>
              <p className="text-muted-foreground leading-7">{partner.benefit}</p>
            </div>
          ))}
        </div>

        <div className="surface-card rounded-3xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">Build your integration</h2>
          <p className="text-muted-foreground mb-6">
            Add your service, spare parts, or compliance workflow to FixMach and offer it to our factory customers nationwide.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)]">
            Contact Partnership Team
          </Link>
        </div>
      </div>
    </div>
  );
}
