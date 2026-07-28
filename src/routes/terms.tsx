import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using FixMach, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our platform.",
    },
    {
      title: "2. Use License",
      content:
        "We grant you a limited, revocable, non-exclusive license to use FixMach for lawful purposes only. You agree not to use our platform for illegal activities, fraud, or any harmful purposes.",
    },
    {
      title: "3. User Responsibilities",
      content:
        "You are responsible for maintaining the confidentiality of your account credentials and password. You agree to accept responsibility for all activities under your account. You must notify us immediately of any unauthorized access.",
    },
    {
      title: "4. Booking & Cancellation",
      content:
        "Bookings are subject to technician availability and verification. You may cancel bookings before the technician arrives for a full refund. Cancellations within 2 hours of appointment may incur a service fee.",
    },
    {
      title: "5. Payment Terms",
      content:
        "All prices are in Indian Rupees (₹) unless otherwise specified. Payments are processed securely using industry-standard encryption. You authorize us to charge your payment method for services rendered.",
    },
    {
      title: "6. Dispute Resolution",
      content:
        "In case of disputes between customers and technicians, FixMach will review evidence from both parties and make a decision within 48 hours. Decisions are final and binding unless appealed with new evidence.",
    },
    {
      title: "7. Limitation of Liability",
      content:
        "FixMach is provided on an 'as-is' basis. We are not liable for indirect, incidental, special, or consequential damages. Our total liability is limited to the amount you paid for services.",
    },
    {
      title: "8. Warranty Disclaimer",
      content:
        "We do not guarantee that repairs will permanently fix issues or that machines will work without future problems. Technicians provide services based on diagnosis, but machine behavior can vary.",
    },
    {
      title: "9. Intellectual Property",
      content:
        "All content, software, and materials on FixMach are owned by us or our licensors. You may not reproduce, modify, or distribute any content without our permission.",
    },
    {
      title: "10. Indemnification",
      content:
        "You agree to indemnify FixMach and our team members from any claims, damages, or losses arising from your use of our platform or violation of these terms.",
    },
    {
      title: "11. Service Availability",
      content:
        "We strive to maintain 99.5% uptime but do not guarantee uninterrupted service. We may take services offline for maintenance, updates, or security purposes.",
    },
    {
      title: "12. Changes to Terms",
      content:
        "We reserve the right to modify these terms at any time. Material changes will be communicated via email. Your continued use of FixMach constitutes acceptance of modified terms.",
    },
    {
      title: "13. Termination",
      content:
        "We may terminate your account and access to FixMach if you violate these terms, engage in fraudulent activity, or for any reason we deem necessary for platform security.",
    },
    {
      title: "14. Governing Law",
      content:
        "These Terms of Service are governed by Indian law and subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.",
    },
    {
      title: "15. Contact Information",
      content:
        "If you have questions about these terms, please contact us at legal@fixmach.ai or call +91 1800-FIXMACH.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)] max-w-3xl">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <FileText className="size-8" /> Terms of Service
        </h1>
        <p className="text-muted-foreground mb-4">Last updated: January 2025</p>
        <p className="text-muted-foreground mb-12">
          Please read these terms carefully before using FixMach. By using our platform, you agree to be bound by these terms.
        </p>

        <div className="surface-card p-8 space-y-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}

          {/* Acknowledgment */}
          <div className="mt-12 p-6 bg-destructive/10 border border-destructive/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              By using FixMach, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not
              agree with any part of these terms, you must discontinue use of our platform immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
