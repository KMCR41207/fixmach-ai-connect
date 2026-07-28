import { Link } from "@tanstack/react-router";
import { Menu, Wrench, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "AI Diagnosis", href: "#ai-diagnosis" },
  { label: "Machines", href: "#machines" },
  { label: "For Technicians", href: "#technicians" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex w-[min(1200px,94%)] items-center justify-between rounded-2xl border border-border/70 bg-background/80 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground">
            <Wrench className="size-4.5" />
          </span>
          <span className="text-base font-semibold tracking-tight">
            FixMach<span className="text-gradient"> AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#technicians"
            className="rounded-xl px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Sign in
          </a>
          <a
            href="#book"
            className="rounded-xl bg-[image:var(--gradient-accent)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            Book Repair
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 w-[min(1200px,94%)] rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[image:var(--gradient-accent)] px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Book Repair
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
