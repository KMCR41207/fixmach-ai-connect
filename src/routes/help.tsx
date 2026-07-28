import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/help")({
  component: HelpPage,
});

function HelpPage() {
  const guides = [
    {
      title: "How to submit a repair ticket",
      description: "Step-by-step process for uploading your machine issue and getting the fastest estimate.",
    },
    {
      title: "Choosing the right technician",
      description: "Understand technician certifications, ratings, and response times before you confirm a booking.",
    },
    {
      title: "Using AI diagnostics effectively",
      description: "Learn how to capture the best photos, video, and error logs for accurate analysis.",
    },
    {
      title: "Managing invoices and GST documents",
      description: "Access, download and verify your repair invoices from the account dashboard.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Help & Documentation</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guides, walkthroughs, and support resources for FixMach users and technicians.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {guides.map((guide, idx) => (
            <div key={idx} className="surface-card rounded-3xl p-8">
              <h2 className="text-2xl font-semibold mb-3">{guide.title}</h2>
              <p className="text-muted-foreground leading-7">{guide.description}</p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Read full guide
              </a>
            </div>
          ))}
        </div>

        <div className="surface-card rounded-3xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">Need personalized assistance?</h2>
          <p className="text-muted-foreground mb-6">
            Our operations team can walk you through fleet onboarding, technician tracking, and emergency escalation.
          </p>
          <a className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)]" href="/contact">
            Contact Help Desk
          </a>
        </div>
      </div>
    </div>
  );
}
