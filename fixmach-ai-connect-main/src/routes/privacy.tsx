import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — FixMach AI" }, { name: "description", content: "How FixMach AI collects, uses and protects your data. GDPR and IT Act 2000 compliant." }] }),
  component: PrivacyPage,
});

const sections = [
  { title: "Information we collect", body: "We collect information you provide when creating an account (name, email, phone), machine and plant data you enter, photos and files you upload for diagnosis, and usage data to improve our services." },
  { title: "How we use your information", body: "We use your information to provide AI diagnosis and technician dispatch services, send notifications about your bookings, improve our AI models, and comply with legal obligations. We do not sell your personal data." },
  { title: "Data sharing", body: "We share necessary information with verified technicians to complete your repair bookings. We do not share your data with advertisers or unrelated third parties." },
  { title: "Data security", body: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Payments are processed through escrow with PCI-DSS compliant providers." },
  { title: "Your rights", body: "You may request access to, correction of, or deletion of your personal data at any time by contacting privacy@fixmach.ai. We will respond within 30 days." },
  { title: "Cookies", body: "We use essential cookies for authentication and analytics cookies to understand how our platform is used. You can control cookie preferences in your browser settings." },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Privacy Policy" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Privacy Policy</h1>
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
          <p className="text-sm text-muted-foreground">Questions about this policy? Contact us at <a href="mailto:privacy@fixmach.ai" className="text-primary hover:underline">privacy@fixmach.ai</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

