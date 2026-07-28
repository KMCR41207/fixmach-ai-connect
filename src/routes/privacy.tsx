import { createFileRoute } from "@tanstack/react-router";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, make a booking, or contact us. This includes name, email, phone number, payment information, and machine details.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use your information to provide and improve our services, process payments, send notifications, detect fraud, and comply with legal obligations. We never sell your personal data to third parties.",
    },
    {
      title: "3. Data Security",
      content:
        "We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits. Your payment information is encrypted and PCI-DSS compliant.",
    },
    {
      title: "4. Cookies & Analytics",
      content:
        "We use cookies to improve your experience and understand how you use our platform. You can control cookie settings in your browser. We also use Google Analytics for usage analytics.",
    },
    {
      title: "5. Third-Party Sharing",
      content:
        "We may share information with service providers (payment processors, hosting providers, analytics services) who are contractually bound to protect your data. We do not sell or share personal data for marketing purposes.",
    },
    {
      title: "6. Your Rights",
      content:
        "You have the right to access, update, or delete your personal information at any time. To exercise these rights, contact us at privacy@fixmach.ai. We will respond within 30 days.",
    },
    {
      title: "7. Retention",
      content:
        "We retain personal data only as long as necessary to provide services or comply with legal obligations. You can request deletion of your account and associated data anytime.",
    },
    {
      title: "8. Children's Privacy",
      content:
        "Our services are not directed to anyone under 18. We do not knowingly collect data from children. If you believe we have collected data from a child, please contact us immediately.",
    },
    {
      title: "9. Changes to This Policy",
      content:
        "We may update this privacy policy from time to time. We will notify you of any material changes via email or by posting on our website. Your continued use of FixMach constitutes acceptance of changes.",
    },
    {
      title: "10. Contact Us",
      content:
        "If you have questions about this privacy policy or our privacy practices, please contact us at privacy@fixmach.ai or call +91 1800-FIXMACH.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)] max-w-3xl">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <Shield className="size-8" /> Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-4">Last updated: January 2025</p>
        <p className="text-muted-foreground mb-12">
          At FixMach, we take your privacy seriously. This policy explains how we collect, use, and protect your information.
        </p>

        <div className="surface-card p-8 space-y-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}

          {/* Acknowledgment */}
          <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              By using FixMach, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. If you do not agree
              with our privacy practices, please do not use our platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
