import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
});

function FAQPage() {
  const faqs = [
    {
      question: "How quickly can I get a technician onsite?",
      answer:
        "Most urgent requests are routed to the nearest available certified technician within 30 minutes. Response time depends on location and machine type.",
    },
    {
      question: "How does AI diagnosis work?",
      answer:
        "Upload photos, videos, error messages, or machine audio. Our AI analyzes common failure modes and returns probable causes with severity and recommended next steps.",
    },
    {
      question: "Can I trust the repair estimate?",
      answer:
        "Estimates are based on verified technician rates, parts pricing, and historical repair data. The final quote is confirmed after technician inspection and is released only after you approve.",
    },
    {
      question: "Is warranty coverage available?",
      answer:
        "Yes. You can attach machine warranties in your account settings, and our technicians will verify eligibility during booking.",
    },
    {
      question: "How do I pay for repairs?",
      answer:
        "Payments are held in escrow until the repair is complete and approved. We accept UPI, credit/debit cards, and net banking.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1000px,92%)]">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Answers to common questions from factory managers, technicians, and support teams.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="surface-card rounded-3xl border border-border p-6 open:border-primary/40">
              <summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary>
              <p className="mt-4 text-muted-foreground leading-7">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="surface-card p-8 mt-12">
          <h2 className="text-2xl font-bold mb-3">Need help with a specific machine?</h2>
          <p className="text-muted-foreground mb-6">
            Contact our support team or open a support ticket and we’ll get you the fastest available technician.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="/contact" className="rounded-2xl border border-border px-6 py-4 text-center text-sm font-semibold transition hover:bg-secondary">
              Contact Support
            </a>
            <a href="/booking" className="rounded-2xl bg-primary px-6 py-4 text-center text-sm font-semibold text-primary-foreground transition hover:shadow-[var(--shadow-glow)]">
              Book a Technician
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
