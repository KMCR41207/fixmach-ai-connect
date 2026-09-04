import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service — FixMach AI" }, { name: "description", content: "Terms governing use of the FixMach AI platform for plant managers, technicians and enterprise customers." }] }),
  component: TermsPage,
});

const sections = [
  { title: "Acceptance of terms", body: "By using FixMach AI, you agree to these terms. If you do not agree, do not use the platform. These terms apply to plant managers, maintenance engineers, and technicians." },
  { title: "Platform services", body: "FixMach AI provides AI-powered machine fault diagnosis, verified technician matching, escrow payment processing, and repair report generation. We are a marketplace — technicians are independent contractors, not employees of FixMach AI." },
  { title: "Escrow payments", body: "Payments are held in escrow upon booking confirmation and released only after the plant manager signs off the completed repair. FixMach AI charges a platform fee deducted from the technician's payout." },
  { title: "AI diagnosis disclaimer", body: "AI diagnosis reports are advisory in nature. Always have a certified technician inspect the machine before undertaking repairs. FixMach AI is not liable for decisions made solely on the basis of AI reports without professional verification." },
  { title: "Technician obligations", body: "Technicians must maintain valid certifications for their listed specialisations, arrive within the committed ETA, and complete repairs to the standard described in the job brief." },
  { title: "Limitation of liability", body: "FixMach AI's liability is limited to the platform fee paid for the disputed transaction. We are not liable for indirect, incidental or consequential damages arising from platform use." },
];

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Terms of Service" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: August 1, 2026</p>

        <div className="mt-12 max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-base font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 surface-card p-6 max-w-3xl">
          <p className="text-sm text-muted-foreground">Questions? Contact us at <a href="mailto:legal@fixmach.ai" className="text-primary hover:underline">legal@fixmach.ai</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

