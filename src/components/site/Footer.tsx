import { Wrench } from "lucide-react";
import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Platform",
    items: [
      { label: "AI Diagnosis", href: "#ai-diagnosis" },
      { label: "Book a Repair", href: "#book" },
      { label: "Live Tracking", href: "#how-it-works" },
      { label: "Spare Parts", href: "#machines" },
      { label: "Pricing", href: "#pricing" },
      { label: "API", href: "#faq" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "#testimonials" },
      { label: "Case Studies", href: "#testimonials" },
      { label: "Documentation", href: "#faq" },
      { label: "Support", href: "#faq" },
      { label: "Status", href: "#faq" },
    ],
  },
  {
    title: "Technicians",
    items: [
      { label: "Become a Technician", href: "#technicians" },
      { label: "Certifications", href: "#technicians" },
      { label: "Payouts", href: "#technicians" },
      { label: "Leaderboard", href: "#technicians" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#ai-diagnosis" },
      { label: "Careers", href: "#book" },
      { label: "Contact", href: "#book" },
      { label: "Privacy", href: "#faq" },
      { label: "Terms", href: "#faq" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", href: "#technicians" },
  { label: "YouTube", href: "#how-it-works" },
  { label: "GitHub", href: "#ai-diagnosis" },
  { label: "X", href: "#book" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid w-[min(1200px,92%)] gap-10 py-14 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
              <Wrench className="size-4.5" />
            </span>
            <span className="text-base font-semibold tracking-tight">FixMach AI</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            AI-powered industrial machinery diagnostics and verified technician dispatch — built to
            cut factory downtime from days to minutes.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((s) => (
              <Link
                key={s.label}
                to={s.href}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/70">
        <p className="mx-auto w-[min(1200px,92%)] py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} FixMach AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
