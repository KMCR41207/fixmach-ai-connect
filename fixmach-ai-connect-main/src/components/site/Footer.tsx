import { Wrench } from "lucide-react";

const columns = [
  {
    title: "Platform",
    items: [
      { label: "AI Diagnosis", href: "/ai-diagnosis" },
      { label: "Book a Repair", href: "/book-repair" },
      { label: "Live Tracking", href: "/live-tracking" },
      { label: "Spare Parts", href: "/spare-parts" },
      { label: "Pricing", href: "/pricing" },
      { label: "API", href: "/api" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Documentation", href: "/documentation" },
      { label: "Support", href: "/support" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Technicians",
    items: [
      { label: "Become a Technician", href: "/become-technician" },
      { label: "Certifications", href: "/certifications" },
      { label: "Payouts", href: "/payouts" },
      { label: "Leaderboard", href: "/leaderboard" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

  const socials = [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "YouTube", href: "https://youtube.com" },
    { name: "GitHub", href: "https://github.com" },
    { name: "X", href: "https://x.com" },
  ];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-secondary/40" role="contentinfo">
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
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`FixMach AI on ${s.name}`}
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/70">
        <p className="mx-auto w-[min(1200px,92%)] py-5 text-xs text-muted-foreground">
          © {year} FixMach AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
