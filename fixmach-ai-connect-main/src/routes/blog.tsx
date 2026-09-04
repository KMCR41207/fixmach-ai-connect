import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog — FixMach AI" }, { name: "description", content: "Practical guides, case studies and product updates for industrial maintenance teams." }] }),
  component: BlogPage,
});

const posts = [
  { tag: "Maintenance", title: "Why 73% of industrial breakdowns are predictable — and how AI changes that", date: "Aug 28, 2026", read: "5 min" },
  { tag: "Case Study", title: "How a Pune automotive plant cut CNC downtime by 82% in 3 months", date: "Aug 15, 2026", read: "7 min" },
  { tag: "Guide", title: "Bearing failure: the 5 warning signs every maintenance engineer must know", date: "Aug 3, 2026", read: "6 min" },
  { tag: "Product", title: "Introducing predictive health scores: know your machine's failure probability", date: "Jul 20, 2026", read: "4 min" },
  { tag: "Guide", title: "How to read HMI alarm codes on Fanuc, Siemens and Mitsubishi CNCs", date: "Jul 10, 2026", read: "8 min" },
  { tag: "Industry", title: "The true cost of unplanned downtime in Indian manufacturing (2026 report)", date: "Jun 29, 2026", read: "10 min" },
];

const tagColors: Record<string, string> = {
  "Maintenance": "bg-blue-50 text-blue-700",
  "Case Study": "bg-green-50 text-green-700",
  "Guide": "bg-amber-50 text-amber-700",
  "Product": "bg-purple-50 text-purple-700",
  "Industry": "bg-red-50 text-red-700",
};

function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Blog" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Blog</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Insights for industrial maintenance teams.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Practical guides, case studies and product updates from the FixMach AI team.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">New articles every week. No spam — unsubscribe anytime.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="surface-card group flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
              <span className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagColors[p.tag]}`}>{p.tag}</span>
              <h2 className="mt-3 flex-1 text-sm font-semibold leading-snug">{p.title}</h2>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.date}</span>
                <span>{p.read} read</span>
              </div>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:underline">
                Read more <ArrowRight className="size-3" />
              </a>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

