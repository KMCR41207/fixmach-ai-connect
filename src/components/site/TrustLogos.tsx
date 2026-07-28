const companies = [
  "Tata Steel",
  "JSW",
  "L&T",
  "Bosch",
  "Mahindra",
  "Ashok Leyland",
  "BHEL",
  "Siemens",
];

export function TrustLogos() {
  return (
    <div className="relative mx-auto w-[min(1200px,92%)] pb-12">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/60">
        Trusted by maintenance teams at
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {companies.map((c) => (
          <div
            key={c}
            className="glass-panel flex h-14 items-center justify-center rounded-xl px-2 text-center text-[13px] font-semibold tracking-tight text-primary-foreground/75 transition-colors hover:text-primary-foreground"
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
