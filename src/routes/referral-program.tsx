import { createFileRoute } from "@tanstack/react-router";
import { Gift, Share2, TrendingUp, Users } from "lucide-react";

export const Route = createFileRoute("/referral-program")({
  component: ReferralProgramPage,
});

function ReferralProgramPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Gift className="size-10" /> Referral Program
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Earn rewards by referring factories and technicians to FixMach
          </p>
        </div>

        {/* How it Works */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              step: 1,
              title: "Share Your Code",
              desc: "Get your unique referral code",
              icon: Share2,
            },
            {
              step: 2,
              title: "Friend Joins",
              desc: "They register and go live",
              icon: Users,
            },
            {
              step: 3,
              title: "They Spend",
              desc: "They book repairs/use services",
              icon: TrendingUp,
            },
            {
              step: 4,
              title: "You Earn",
              desc: "Get 15% commission forever",
              icon: Gift,
            },
          ].map((item) => (
            <div key={item.step} className="surface-card p-6 text-center">
              <div className="size-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                {item.step}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Earning Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Earning Tiers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tier: "Starter", referrals: "1-5", commission: "10%", bonus: "No bonus" },
              {
                tier: "Pro",
                referrals: "6-15",
                commission: "15%",
                bonus: "₹500 for each",
              },
              {
                tier: "Elite",
                referrals: "16+",
                commission: "20%",
                bonus: "₹1000 for each",
              },
            ].map((item) => (
              <div key={item.tier} className="surface-card p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{item.tier}</h3>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary">{item.commission}</div>
                  <div className="text-sm text-muted-foreground">Commission</div>
                </div>
                <div className="mb-4 p-4 bg-secondary/30 rounded-lg">
                  <div className="text-sm text-muted-foreground">{item.referrals} Active Referrals</div>
                  <div className="font-semibold mt-2">{item.bonus}</div>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold text-sm">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Your Referrals */}
        <div className="surface-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Your Referral Dashboard</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Referrals", value: "8" },
              { label: "Active Referrals", value: "7" },
              { label: "Lifetime Earnings", value: "₹45,000" },
              { label: "Pending Payout", value: "₹8,500" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-secondary/30 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Referrals List */}
          <div className="space-y-3">
            {[
              { name: "ABC Manufacturing", status: "Active", earnings: "₹12,500" },
              { name: "XYZ Factory", status: "Active", earnings: "₹8,200" },
              { name: "Tech Industries", status: "Active", earnings: "₹6,800" },
            ].map((ref) => (
              <div key={ref.name} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <div>
                  <div className="font-semibold">{ref.name}</div>
                  <div className="text-xs text-muted-foreground">{ref.status}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">{ref.earnings}</div>
                  <div className="text-xs text-muted-foreground">Lifetime</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="surface-card p-8">
            <h3 className="text-2xl font-bold mb-3">Your Referral Code</h3>
            <div className="bg-secondary/30 p-4 rounded-lg mb-4">
              <div className="text-lg font-mono font-bold text-primary">JOHN-REF-2025</div>
            </div>
            <button className="w-full border border-border py-2 rounded-lg hover:bg-secondary font-semibold">
              Copy Link
            </button>
          </div>
          <div className="surface-card p-8">
            <h3 className="text-2xl font-bold mb-3">Share on Social</h3>
            <div className="space-y-2">
              {["WhatsApp", "Email", "LinkedIn", "Copy Link"].map((platform) => (
                <button
                  key={platform}
                  className="w-full border border-border py-2 rounded-lg hover:bg-secondary font-semibold text-sm"
                >
                  Share on {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
