import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Star, Wrench } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({ meta: [{ title: "Leaderboard — FixMach AI" }, { name: "description", content: "Top rated industrial technicians on FixMach AI. Ranked by completed jobs, rating and response time." }] }),
  component: LeaderboardPage,
});

const leaders = [
  { rank: 1, name: "Ravi K.", city: "Bengaluru", jobs: 318, rating: 4.9, spec: "CNC & Robotic Arms" },
  { rank: 2, name: "Suresh M.", city: "Pune", jobs: 291, rating: 4.9, spec: "Hydraulic Systems" },
  { rank: 3, name: "Dinesh P.", city: "Chennai", jobs: 265, rating: 4.8, spec: "Packaging Lines" },
  { rank: 4, name: "Ankit S.", city: "Ahmedabad", jobs: 248, rating: 4.8, spec: "CNC Milling" },
  { rank: 5, name: "Pradeep R.", city: "Hyderabad", jobs: 232, rating: 4.7, spec: "PLC & Automation" },
  { rank: 6, name: "Vijay T.", city: "Mumbai", jobs: 219, rating: 4.7, spec: "Injection Moulding" },
  { rank: 7, name: "Karthik N.", city: "Coimbatore", jobs: 201, rating: 4.8, spec: "Textile Machinery" },
  { rank: 8, name: "Ramesh B.", city: "Nagpur", jobs: 190, rating: 4.6, spec: "Compressors & Boilers" },
];

function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="Leaderboard" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Leaderboard</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Top technicians this month.</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Ranked by completed jobs, rating and response time. Top technicians get priority job matching and bonus earnings.
        </p>
        <div className="mt-12 space-y-3">
          {leaders.map((l) => (
            <div key={l.rank} className={`surface-card flex flex-wrap items-center gap-4 p-4 ${l.rank <= 3 ? "ring-1 ring-primary/30" : ""}`}>
              <span className={`flex size-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${l.rank === 1 ? "bg-amber-400 text-amber-900" : l.rank === 2 ? "bg-zinc-300 text-zinc-700" : l.rank === 3 ? "bg-amber-600 text-white" : "bg-secondary text-muted-foreground"}`}>
                {l.rank <= 3 ? <Trophy className="size-4" /> : `#${l.rank}`}
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold">{l.name}</p>
                <p className="text-xs text-muted-foreground">{l.city} · {l.spec}</p>
              </div>
              <div className="flex items-center gap-6 text-xs">
                <div className="text-center">
                  <p className="font-semibold">{l.jobs}</p>
                  <p className="text-muted-foreground">Jobs</p>
                </div>
                <div className="flex items-center gap-1 text-center">
                  <Star className="size-3 fill-amber-400 text-amber-400" />
                  <p className="font-semibold">{l.rating}</p>
                </div>
                <Wrench className="size-4 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

