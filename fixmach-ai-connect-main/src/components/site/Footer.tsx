import { Wrench } from "lucide-react";

const columns = [
  {
    title: "Platform",
    items: ["AI Diagnosis", "Book a Repair", "Live Tracking", "Spare Parts", "Pricing", "API"],
  },
  {
    title: "Resources",
    items: ["Blog", "Case Studies", "Documentation", "Support", "Status"],
  },
  {
    title: "Technicians",
    items: ["Become a Technician", "Certifications", "Payouts", "Leaderboard"],
  },
  {
    title: "Company",
    items: ["About", "Careers", "Contact", "Privacy", "Terms"],
  },
];

const socials = ["LinkedIn", "YouTube", "GitHub", "X"];

export function Footer() {
  const year = new Date().getFullYear();
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
              <a
                key={s}
                href="#"
                className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
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
