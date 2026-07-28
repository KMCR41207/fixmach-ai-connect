import { createFileRoute } from "@tanstack/react-router";
import { Search as SearchIcon, MapPin, Star, Users } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/search")({
  component: SearchPage,
});

function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("technicians");

  const technicians = [
    {
      name: "Ravi K.",
      rating: 4.9,
      reviews: 234,
      specializations: ["CNC", "Hydraulic", "PLC"],
      location: "Mumbai, 2.3 km",
      hourlyRate: "₹500/hr",
    },
    {
      name: "Priya M.",
      rating: 4.8,
      reviews: 189,
      specializations: ["Hydraulic", "Boilers"],
      location: "Mumbai, 3.5 km",
      hourlyRate: "₹450/hr",
    },
    {
      name: "Amit S.",
      rating: 4.7,
      reviews: 156,
      specializations: ["CNC", "Laser", "Robots"],
      location: "Mumbai, 5.1 km",
      hourlyRate: "₹550/hr",
    },
  ];

  const machines = [
    { name: "CNC Machines", techs: 3240, avg: "3.4 hrs" },
    { name: "Hydraulic Systems", techs: 2100, avg: "2.8 hrs" },
    { name: "PLC & Controls", techs: 1180, avg: "2.2 hrs" },
    { name: "Boiler Systems", techs: 890, avg: "3.1 hrs" },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        {/* Search Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold mb-6">Find Technicians & Solutions</h1>
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search technicians, machines, services..."
              className="w-full pl-12 pr-4 py-4 border border-border rounded-lg bg-background text-lg"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="surface-card p-4 mb-6 flex flex-wrap gap-3">
          {["Available Now", "Rating 4.8+", "Under 5 km", "Emergency Support", "Certified"].map((filter) => (
            <button key={filter} className="px-4 py-2 border border-border rounded-full hover:bg-secondary text-sm font-semibold">
              {filter}
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-border mb-8">
          {[
            { id: "technicians", label: "Technicians", count: technicians.length },
            { id: "machines", label: "Machine Types", count: machines.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Technicians List */}
        {activeTab === "technicians" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicians.map((tech) => (
              <div key={tech.name} className="surface-card p-6 hover:shadow-[var(--shadow-glow)] transition-all">
                <div className="flex gap-4 mb-4">
                  <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl flex-shrink-0">
                    👨‍🔧
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{tech.name}</h3>
                    <div className="flex items-center gap-2">
                      <Star className="size-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{tech.rating}</span>
                      <span className="text-muted-foreground text-sm">({tech.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="size-4" />
                  {tech.location}
                </div>

                <div className="text-2xl font-bold text-primary mb-4">{tech.hourlyRate}</div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.specializations.map((spec) => (
                    <span key={spec} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">
                      {spec}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold text-sm">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Machines List */}
        {activeTab === "machines" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {machines.map((machine) => (
              <div key={machine.name} className="surface-card p-6 hover:shadow-[var(--shadow-glow)] transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg">{machine.name}</h3>
                  <span className="text-2xl">🔧</span>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Available Technicians</span>
                    <span className="font-semibold flex items-center gap-1">
                      <Users className="size-4" /> {machine.techs}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg Repair Time</span>
                    <span className="font-semibold">{machine.avg}</span>
                  </div>
                </div>

                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {query && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No results found for "{query}"</p>
            <button
              onClick={() => setQuery("")}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-[var(--shadow-glow)]"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
