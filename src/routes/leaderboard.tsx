import { createFileRoute } from "@tanstack/react-router";
import { Trophy, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/leaderboard")({
  component: LeaderboardPage,
});

function LeaderboardPage() {
  const technicians = [
    { rank: 1, name: "Ravi K.", jobs: 456, rating: 4.95, earnings: "₹22.5L", badge: "🏆" },
    { rank: 2, name: "Priya M.", jobs: 389, rating: 4.89, earnings: "₹18.2L", badge: "🥈" },
    { rank: 3, name: "Amit S.", jobs: 342, rating: 4.87, earnings: "₹16.8L", badge: "🥉" },
    { rank: 4, name: "Suresh K.", jobs: 298, rating: 4.82, earnings: "₹14.5L", badge: "⭐" },
    { rank: 5, name: "Meera P.", jobs: 275, rating: 4.81, earnings: "₹13.2L", badge: "⭐" },
    { rank: 6, name: "Vikram R.", jobs: 256, rating: 4.78, earnings: "₹12.8L", badge: "⭐" },
    { rank: 7, name: "Deepak M.", jobs: 234, rating: 4.76, earnings: "₹11.5L", badge: "" },
    { rank: 8, name: "Neha S.", jobs: 212, rating: 4.74, earnings: "₹10.6L", badge: "" },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <h1 className="text-4xl font-semibold mb-2 flex items-center gap-3">
          <Trophy className="size-8" /> Technician Leaderboard
        </h1>
        <p className="text-muted-foreground mb-12">Top performing technicians on FixMach</p>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {technicians.slice(0, 3).map((tech) => (
            <div
              key={tech.rank}
              className={`surface-card p-6 text-center ${
                tech.rank === 1 ? "border-2 border-yellow-500 bg-yellow-500/5" : ""
              }`}
            >
              <div className="text-5xl mb-3">{tech.badge}</div>
              <div className="text-3xl font-bold mb-2">#{tech.rank}</div>
              <h3 className="text-xl font-semibold mb-4">{tech.name}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Jobs Completed</span>
                  <span className="font-semibold">{tech.jobs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="font-semibold">⭐ {tech.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Earnings</span>
                  <span className="font-semibold text-primary">{tech.earnings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Leaderboard */}
        <div className="surface-card overflow-hidden">
          <table className="w-full">
            <thead className="bg-secondary/30">
              <tr>
                <th className="text-left p-4 font-semibold">Rank</th>
                <th className="text-left p-4 font-semibold">Technician</th>
                <th className="text-left p-4 font-semibold">Jobs Completed</th>
                <th className="text-left p-4 font-semibold">Rating</th>
                <th className="text-left p-4 font-semibold">Total Earnings</th>
                <th className="text-left p-4 font-semibold">Change</th>
              </tr>
            </thead>
            <tbody>
              {technicians.map((tech) => (
                <tr key={tech.rank} className="border-t border-border hover:bg-secondary/20">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{tech.badge}</span>
                      <span className="font-bold text-lg">#{tech.rank}</span>
                    </div>
                  </td>
                  <td className="p-4 font-semibold">{tech.name}</td>
                  <td className="p-4">{tech.jobs}</td>
                  <td className="p-4 font-semibold">⭐ {tech.rating}</td>
                  <td className="p-4 text-primary font-semibold">{tech.earnings}</td>
                  <td className="p-4">
                    <span className="flex items-center gap-1 text-green-600 font-semibold">
                      <TrendingUp className="size-4" /> +2%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
