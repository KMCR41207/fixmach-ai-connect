import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Wrench, X } from "lucide-react";
import { useState } from "react";

const industries = [
  { name: "Automotive", note: "Press shops, robotic welding" },
  { name: "Food Processing", note: "Fillers, retorts, cold chain" },
  { name: "Steel & Metals", note: "Rolling mills, furnaces" },
  { name: "Pharmaceuticals", note: "GMP-compliant service" },
  { name: "Chemical", note: "Reactors, hazardous areas" },
  { name: "Packaging", note: "Cartoners, palletisers" },
  { name: "Textile", note: "Looms, dyeing, spinning" },
  { name: "Mining", note: "Crushers, heavy hydraulics" },
  { name: "Semiconductor", note: "Cleanroom tools" },
  { name: "Aerospace", note: "5-axis CNC, NDT" },
];

const links = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Search", href: "/search" },
  { label: "For Technicians", href: "/for-technicians" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const mobileLinks = [...links];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

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

        <nav
          className="hidden items-center gap-6 lg:flex"
          onMouseLeave={() => setMega(false)}
        >
          <Link
            to="/diagnosis"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Solutions
          </Link>
          <button
            type="button"
            onMouseEnter={() => setMega(true)}
            onClick={() => setMega((v) => !v)}
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Industries <ChevronDown className="size-3.5" />
          </button>
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/auth/login"
            className="rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Sign in
          </Link>
          <Link
            to="/booking"
            className="rounded-xl border border-border px-3.5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Schedule Demo
          </Link>
          <Link
            to="/booking"
            className="rounded-xl bg-[image:var(--gradient-accent)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            Book Repair
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mega && (
        <div
          onMouseLeave={() => setMega(false)}
          className="mx-auto mt-2 hidden w-[min(1200px,94%)] animate-rise-in rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] lg:block"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Industries served
          </p>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {industries.map((i) => (
              <a
                key={i.name}
                href="#industries"
                onClick={() => setMega(false)}
                className="rounded-xl p-3 transition-colors hover:bg-secondary"
              >
                <p className="text-sm font-semibold">{i.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{i.note}</p>
              </a>
            ))}
          </div>
        </div>
      )}

      {open && (
        <div className="mx-auto mt-2 w-[min(1200px,94%)] rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] lg:hidden">
          <nav className="flex flex-col gap-1">
            {[{ label: "Solutions", href: "/diagnosis" }, ...mobileLinks].map((l) => (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/technician/register"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl border border-border px-4 py-2.5 text-center text-sm font-semibold"
            >
              Become Technician
            </Link>
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[image:var(--gradient-accent)] px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Book Repair
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
