import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/case-studies")({
  head: () => ({ meta: [{ title: "Case Studies — FixMach AI" }, { name: "description", content: "Real results from Indian manufacturing plants. See how FixMach AI cuts downtime and saves costs." }] }),
  component: CaseStudiesPage,
});

const cases = [
  { company: "Bosch India, Pune", industry: "Automotive", machine: "CNC Spindle", saved: "₹18 Lakhs", downtime: "82%", time: "3 hrs", quote: "A spindle failure would normally cost us two days. FixMach had a certified technician on the floor in 41 minutes.", person: "Anand Deshpande, Plant Manager" },
  { company: "JSW Steel, Vijayanagara", industry: "Steel & Metals", machine: "Rolling Mill", saved: "₹42 Lakhs", downtime: "76%", time: "5 hrs", quote: "The AI report was accurate before anyone touched the machine. Our maintenance head approved the quote from his phone.", person: "Priya Nair, Maintenance Head" },
  { company: "Mahindra Logistics, Chennai", industry: "Packaging", machine: "Conveyor Line", saved: "₹9.4 Lakhs", downtime: "71%", time: "2 hrs", quote: "Escrow payments and GST invoices ended our vendor paperwork mess. Six plants, one dashboard.", person: "Rakesh Menon, Operations Director" },
  { company: "BHEL, Haridwar", industry: "Heavy Engineering", machine: "Hydraulic Press", saved: "₹28 Lakhs", downtime: "68%", time: "6 hrs", quote: "Predictive alerts caught the issue 3 days before the press would have failed. Zero unplanned downtime this quarter.", person: "Sunil Rawat, Chief Engineer" },
];

function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Case Studies" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Case Studies</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Maintenance heads measure us in hours saved.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Real results from Indian manufacturing plants that use FixMach AI for emergency repairs and predictive maintenance.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">₹69+ Lakhs saved across featured case studies · Average downtime reduction: 76%</p>

        <div className="mt-12 space-y-8">
          {cases.map((c) => (
            <article key={c.company} className="surface-card p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{c.industry}</span>
                  <h2 className="mt-3 text-lg font-semibold">{c.company}</h2>
                  <p className="text-sm text-muted-foreground">Machine: {c.machine}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-xl bg-secondary/70 px-4 py-3">
                    <p className="text-lg font-semibold text-primary">{c.saved}</p>
                    <p className="text-xs text-muted-foreground">Saved</p>
                  </div>
                  <div className="rounded-xl bg-secondary/70 px-4 py-3">
                    <p className="text-lg font-semibold text-primary">{c.downtime}</p>
                    <p className="text-xs text-muted-foreground">Downtime cut</p>
                  </div>
                  <div className="rounded-xl bg-secondary/70 px-4 py-3">
                    <p className="text-lg font-semibold text-primary">{c.time}</p>
                    <p className="text-xs text-muted-foreground">Repair time</p>
                  </div>
                </div>
              </div>
              <blockquote className="mt-6 border-l-2 border-primary pl-4 text-sm italic text-muted-foreground">
                "{c.quote}"
              </blockquote>
              <p className="mt-2 text-xs font-semibold text-foreground">— {c.person}</p>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

