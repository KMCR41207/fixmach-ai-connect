import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, MessageSquare, FileText } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [messageType, setMessageType] = useState("support");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <h1 className="text-4xl font-semibold mb-2">Contact Us & Support</h1>
        <p className="text-muted-foreground mb-12">We're here to help. Reach out anytime.</p>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Contact */}
          {[
            {
              icon: Phone,
              label: "Phone Support",
              value: "+91 1800-FIXMACH",
              desc: "24/7 Emergency Support",
            },
            {
              icon: Mail,
              label: "Email Support",
              value: "support@fixmach.ai",
              desc: "Response within 2 hours",
            },
            {
              icon: MapPin,
              label: "Office Address",
              value: "Mumbai, India",
              desc: "Mon-Fri, 10AM-6PM IST",
            },
          ].map((contact) => (
            <div key={contact.label} className="surface-card p-6 text-center">
              <contact.icon className="size-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{contact.label}</h3>
              <p className="text-lg font-semibold text-primary mb-1">{contact.value}</p>
              <p className="text-sm text-muted-foreground">{contact.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="surface-card p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>

            <div className="mb-6">
              <label className="text-sm font-medium mb-3 block">What can we help with?</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "support", label: "Technical Support" },
                  { id: "billing", label: "Billing Issue" },
                  { id: "feedback", label: "Feedback" },
                  { id: "partnership", label: "Partnership" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setMessageType(type.id)}
                    className={`p-3 rounded-lg text-sm font-semibold transition-colors border ${
                      messageType === type.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more..."
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background h-32"
                />
              </div>

              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold">
                Send Message
              </button>
            </div>
          </div>

          {/* FAQ & Resources */}
          <div className="space-y-6">
            {/* FAQ */}
            <div className="surface-card p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <MessageSquare className="size-6" /> Common Questions
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "How do I reset my password?",
                    a: "Click 'Forgot Password' on the login page. We'll send you a reset link.",
                  },
                  {
                    q: "How are disputes resolved?",
                    a: "Our team reviews all evidence and makes a fair decision within 48 hours.",
                  },
                  {
                    q: "Can I cancel a booking?",
                    a: "Yes, cancel anytime before the technician arrives for a full refund.",
                  },
                  {
                    q: "What's your refund policy?",
                    a: "Full refunds if canceling before technician arrival, minus service fee.",
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="p-3 bg-secondary/30 rounded-lg">
                    <div className="font-semibold text-sm mb-1">{faq.q}</div>
                    <div className="text-xs text-muted-foreground">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="surface-card p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FileText className="size-6" /> Resources
              </h2>
              <div className="space-y-2">
                {[
                  "📖 User Guide & Tutorials",
                  "📋 Terms & Conditions",
                  "🔐 Privacy Policy",
                  "💳 Billing & Invoices",
                  "🆘 Troubleshooting Guide",
                  "📞 API Documentation",
                ].map((resource) => (
                  <a key={resource} href="#" className="block p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 text-sm font-semibold transition-colors">
                    {resource}
                  </a>
                ))}
              </div>
            </div>

            {/* Support Hours */}
            <div className="surface-card p-8 bg-blue-500/5 border border-blue-500/30">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="size-5" /> Support Hours
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>📱 Phone Support:</span>
                  <span className="font-semibold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>📧 Email Support:</span>
                  <span className="font-semibold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>💬 Live Chat:</span>
                  <span className="font-semibold">10 AM - 6 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>🏢 Office Hours:</span>
                  <span className="font-semibold">Mon-Fri, 10 AM - 6 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
