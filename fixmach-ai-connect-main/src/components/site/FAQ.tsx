import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How accurate is the AI machine diagnosis?",
    a: "FixMach AI reads photos, HMI error screens (OCR), abnormal machine sounds and maintenance logs, then benchmarks the pattern against millions of logged industrial faults. Every report carries a confidence score, and a certified technician validates it on site before any part is replaced.",
  },
  {
    q: "How fast can a technician reach my plant?",
    a: "Average first response is 8 minutes and the median time to a technician on site is 94 minutes across serviced industrial corridors. Emergency dispatch alerts every qualified technician nearby, ranked by arrival time.",
  },
  {
    q: "How are payments handled?",
    a: "Funds sit in escrow when a quote is accepted and are released only after you sign off the repair. You receive a signed repair report with before/after images and a GST-ready PDF invoice automatically.",
  },
  {
    q: "Are the technicians verified?",
    a: "Every technician is identity-checked, skill-tested per machine family and carries visible certifications, ratings and job history. You only get matched with technicians certified for your specific machine.",
  },
  {
    q: "Can we manage multiple factories on one account?",
    a: "Yes. Enterprise accounts support multi-factory management, role-based access for owners, maintenance managers and operators, purchase orders, invoice approvals and consolidated downtime analytics.",
  },
  {
    q: "Do you supply spare parts?",
    a: "The in-app marketplace stocks OEM and compatible spares, with the technician able to order required parts during the job so the repair is not blocked by procurement.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-10 grid gap-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="surface-card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
            >
              <span className="text-sm font-semibold">{f.q}</span>
              {isOpen ? (
                <Minus className="size-4 shrink-0 text-primary" />
              ) : (
                <Plus className="size-4 shrink-0 text-muted-foreground" />
              )}
            </button>
            {isOpen && (
              <p className="animate-rise-in px-5 pb-5 text-sm leading-relaxed text-muted-foreground" role="region">
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
