import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "A spindle failure would normally cost us two days. FixMach had a certified technician on the floor in 41 minutes. Saved 17 hours of downtime.",
    name: "Anand Deshpande",
    role: "Plant Manager, Bosch",
  },
  {
    quote:
      "The AI report was accurate before anyone touched the machine. Our maintenance head approved the quote from his phone.",
    name: "Priya Nair",
    role: "Maintenance Head, JSW",
  },
  {
    quote:
      "Escrow payments and GST invoices ended our vendor paperwork mess. Six plants, one dashboard.",
    name: "Rakesh Menon",
    role: "Operations Director, Mahindra",
  },
];

const caseStudies = [
  { title: "CNC machine failure", saved: "₹18 Lakhs", downtime: "82%", repair: "3 hours" },
  { title: "Hydraulic press leak", saved: "₹9.4 Lakhs", downtime: "71%", repair: "5 hours" },
  { title: "Packaging line stoppage", saved: "₹6.2 Lakhs", downtime: "64%", repair: "2 hours" },
];

export function Testimonials() {
  return (
    <>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="surface-card flex flex-col p-6">
            <Quote className="size-5 text-primary" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
              “{t.quote}”
            </blockquote>
            <div className="mt-5 flex items-center gap-1 text-ember">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>
            <figcaption className="mt-3 text-sm font-semibold">
              {t.name}
              <span className="block text-xs font-normal text-muted-foreground">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {caseStudies.map((c) => (
          <article key={c.title} className="surface-card p-6">
            <h3 className="text-sm font-semibold">{c.title}</h3>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-secondary/70 p-3">
                <p className="text-sm font-semibold text-primary">{c.saved}</p>
                <p className="text-[11px] text-muted-foreground">Saved</p>
              </div>
              <div className="rounded-xl bg-secondary/70 p-3">
                <p className="text-sm font-semibold text-primary">{c.downtime}</p>
                <p className="text-[11px] text-muted-foreground">Downtime cut</p>
              </div>
              <div className="rounded-xl bg-secondary/70 p-3">
                <p className="text-sm font-semibold text-primary">{c.repair}</p>
                <p className="text-[11px] text-muted-foreground">Repair time</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
