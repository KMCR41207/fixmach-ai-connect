import { createFileRoute, useSearch, useNavigate } from "@tanstack/react-router";
import { MapPin, Clock, DollarSign, Users, BookOpen, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/machine-category/$category")({
  component: MachineCategoryPage,
  validateSearch: (search: Record<string, any>) => ({
    category: search.category || "CNC",
  }),
});

function MachineCategoryPage() {
  const navigate = useNavigate();
  const { category } = useSearch({ from: "/machine-category/$category" });

  const machineData: Record<string, any> = {
    CNC: {
      title: "CNC Machines",
      description: "Precision cutting and machining equipment",
      image: "🔧",
      brands: ["Fanuc", "Siemens", "HAAS", "Makino", "DMG MORI"],
      commonFailures: [
        "Spindle bearing wear",
        "Servo motor failure",
        "Coolant system malfunction",
        "Control panel error",
        "Chuck jaw damage",
      ],
      avgCost: "₹8,500 - ₹25,000",
      avgTime: "2-4 hours",
      nearbyTechs: 45,
      success: "98.5%",
    },
    Hydraulic: {
      title: "Hydraulic Systems",
      description: "Pressure and flow control equipment",
      image: "💨",
      brands: ["Bosch Rexroth", "Parker", "Eaton", "Hydac", "Moog"],
      commonFailures: [
        "Pressure leak",
        "Pump cavitation",
        "Seal degradation",
        "Filter blockage",
        "Valve sticking",
      ],
      avgCost: "₹5,000 - ₹18,000",
      avgTime: "1-3 hours",
      nearbyTechs: 32,
      success: "97.8%",
    },
    PLC: {
      title: "PLC & Controls",
      description: "Programmable logic controllers and automation",
      image: "📱",
      brands: ["Siemens", "Allen-Bradley", "Mitsubishi", "Schneider", "ABB"],
      commonFailures: [
        "Module failure",
        "Connection loss",
        "Programming error",
        "Power supply fault",
        "I/O card damage",
      ],
      avgCost: "₹3,000 - ₹15,000",
      avgTime: "1-2 hours",
      nearbyTechs: 28,
      success: "99.2%",
    },
  };

  const data = machineData[category] || machineData.CNC;

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate({ to: "/" })}
            className="text-primary hover:underline mb-4 text-sm"
          >
            ← Back to Home
          </button>
          <div className="flex items-start gap-6 mb-8">
            <span className="text-6xl">{data.image}</span>
            <div>
              <h1 className="text-4xl font-semibold mb-2">{data.title}</h1>
              <p className="text-xl text-muted-foreground">{data.description}</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: DollarSign, label: "Avg Cost", value: data.avgCost },
              { icon: Clock, label: "Avg Time", value: data.avgTime },
              { icon: Users, label: "Expert Technicians", value: `${data.nearbyTechs}+` },
              { icon: BookOpen, label: "Success Rate", value: data.success },
            ].map((stat) => (
              <div key={stat.label} className="surface-card p-4">
                <stat.icon className="size-5 text-primary mb-2" />
                <div className="text-xs text-muted-foreground">{stat.label}</div>
                <div className="font-semibold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Supported Brands */}
            <div className="surface-card p-8">
              <h2 className="text-2xl font-semibold mb-4">Supported Brands</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {data.brands.map((brand) => (
                  <div key={brand} className="p-3 bg-secondary/30 rounded-lg text-center font-medium">
                    {brand}
                  </div>
                ))}
              </div>
            </div>

            {/* Common Failures */}
            <div className="surface-card p-8">
              <h2 className="text-2xl font-semibold mb-4">Common Failures</h2>
              <div className="space-y-2">
                {data.commonFailures.map((failure) => (
                  <div key={failure} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                    <span className="text-primary">•</span>
                    <span>{failure}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Diagnose */}
            <div className="surface-card p-8">
              <h2 className="text-2xl font-semibold mb-4">How to Diagnose Issues</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Listen",
                    desc: "Unusual noises indicate bearing wear or misalignment. Record audio for AI analysis.",
                  },
                  {
                    title: "Observe",
                    desc: "Look for leaks, vibration, or error messages on control panels.",
                  },
                  {
                    title: "Monitor",
                    desc: "Track temperature, pressure, and production speed changes.",
                  },
                  {
                    title: "Upload",
                    desc: "Share photos, videos, error codes with our AI for instant diagnosis.",
                  },
                ].map((step) => (
                  <div key={step.title} className="p-4 bg-secondary/30 rounded-lg">
                    <div className="font-semibold mb-2">{step.title}</div>
                    <div className="text-sm text-muted-foreground">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Nearby Technicians */}
            <div className="surface-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <MapPin className="size-4" /> {data.nearbyTechs}+ Technicians Nearby
              </h3>
              <div className="space-y-3 mb-6">
                {[
                  { name: "Ravi K.", rating: 4.9, exp: "8+ years" },
                  { name: "Priya M.", rating: 4.8, exp: "6+ years" },
                  { name: "Amit S.", rating: 4.7, exp: "10+ years" },
                ].map((tech) => (
                  <div key={tech.name} className="p-3 bg-secondary/30 rounded-lg">
                    <div className="font-semibold text-sm">{tech.name}</div>
                    <div className="text-xs text-muted-foreground">⭐ {tech.rating} • {tech.exp}</div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)] text-sm font-semibold">
                View All Technicians
              </button>
            </div>

            {/* Quick Actions */}
            <div className="surface-card p-6">
              <h3 className="font-semibold mb-4">Need Help?</h3>
              <div className="space-y-2">
                <button className="w-full bg-[image:var(--gradient-accent)] text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)] text-sm font-semibold">
                  Start Diagnosis
                </button>
                <button className="w-full border border-border py-2 rounded-lg hover:bg-secondary text-sm font-semibold flex items-center justify-center gap-2">
                  <Phone className="size-4" /> Call Support
                </button>
              </div>
            </div>

            {/* Resources */}
            <div className="surface-card p-6">
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block p-2 bg-secondary/30 rounded hover:bg-secondary/50">
                  📖 Manuals & Guides
                </a>
                <a href="#" className="block p-2 bg-secondary/30 rounded hover:bg-secondary/50">
                  🎓 Training Videos
                </a>
                <a href="#" className="block p-2 bg-secondary/30 rounded hover:bg-secondary/50">
                  💬 Community Forum
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
