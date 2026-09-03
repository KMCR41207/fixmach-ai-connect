import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — FixMach AI" }, { name: "description", content: "Get in touch with the FixMach AI team for support, sales or partnership enquiries." }] }),
  component: ContactPage,
});

/** Strip HTML tags and trim whitespace to prevent XSS via displayed values */
function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactPage() {
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof fields>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<typeof fields> = {};
    if (!sanitize(fields.name)) e.name = "Name is required.";
    else if (sanitize(fields.name).length > 100) e.name = "Name must be 100 characters or fewer.";

    if (!sanitize(fields.email)) e.email = "Email is required.";
    else if (!EMAIL_RE.test(fields.email.trim())) e.email = "Enter a valid email address.";

    if (!sanitize(fields.subject)) e.subject = "Subject is required.";
    else if (sanitize(fields.subject).length > 150) e.subject = "Subject must be 150 characters or fewer.";

    if (!sanitize(fields.message)) e.message = "Message is required.";
    else if (sanitize(fields.message).length < 10) e.message = "Message must be at least 10 characters.";
    else if (sanitize(fields.message).length > 2000) e.message = "Message must be 2 000 characters or fewer.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: wire to backend / email service
    setSubmitted(true);
  };

  const update = (field: keyof typeof fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFields(prev => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Contact Us" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Get in touch.</h1>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "hello@fixmach.ai", href: "mailto:hello@fixmach.ai" },
              { icon: Phone, label: "Phone", value: "+91 1800 XXX XXXX", href: "tel:+911800XXXXXXX" },
              { icon: MapPin, label: "Office", value: "Bengaluru, Karnataka, India", href: "#" },
            ].map((c) => (
              <div key={c.label} className="surface-card flex items-center gap-4 p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <c.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">{c.label}</p>
                  <a href={c.href} className="text-sm font-semibold hover:text-primary">{c.value}</a>
                </div>
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="surface-card flex items-center justify-center p-10 text-center">
              <div>
                <p className="text-2xl">✅</p>
                <p className="mt-2 text-sm font-semibold">Message sent!</p>
                <p className="mt-1 text-xs text-muted-foreground">We'll get back to you within 1 business day.</p>
              </div>
            </div>
          ) : (
            <form className="surface-card space-y-4 p-6" onSubmit={handleSubmit} noValidate>
              <h2 className="text-base font-semibold">Send a message</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={fields.name}
                    onChange={update("name")}
                    maxLength={100}
                    autoComplete="name"
                    aria-label="Your name"
                    aria-invalid={!!errors.name}
                    className="w-full rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={fields.email}
                    onChange={update("email")}
                    maxLength={254}
                    autoComplete="email"
                    aria-label="Email address"
                    aria-invalid={!!errors.email}
                    className="w-full rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={fields.subject}
                  onChange={update("subject")}
                  maxLength={150}
                  aria-label="Subject"
                  aria-invalid={!!errors.subject}
                  className="w-full rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your message…"
                  value={fields.message}
                  onChange={update("message")}
                  maxLength={2000}
                  aria-label="Your message"
                  aria-invalid={!!errors.message}
                  className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <p className="mt-0.5 text-right text-[10px] text-muted-foreground">{fields.message.length}/2000</p>
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>
              <button type="submit" className="rounded-xl bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

