import { Wrench } from "lucide-react";
import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Platform",
    items: [
      { label: "AI Diagnosis", href: "/diagnosis" },
      { label: "Book a Repair", href: "/booking" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Machine Types", href: "/search" },
      { label: "Search", href: "/search" },
      { label: "Emergency", href: "/emergency" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Contact Support", href: "/contact" },
      { label: "Notifications", href: "/notifications" },
      { label: "Reviews", href: "/reviews" },
      { label: "Analytics", href: "/analytics" },
      { label: "For Technicians", href: "/for-technicians" },
    ],
  },
  {
    title: "Technicians",
    items: [
      { label: "Register as Technician", href: "/technician/register" },
      { label: "Join Our Network", href: "/for-technicians" },
      { label: "View Profiles", href: "/search" },
      { label: "Earn More", href: "/for-technicians" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Settings", href: "/settings" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "X", href: "#" },
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
