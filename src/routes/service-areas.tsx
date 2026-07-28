import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Users, Clock } from "lucide-react";

export const Route = createFileRoute("/service-areas")({
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  const regions = [
    {
      name: "Western India",
      cities: "Mumbai, Pune, Ahmedabad, Rajkot",
      techs: 1240,
      coverage: "99%",
      response: "15-30 min",
    },
    {
      name: "Northern India",
      cities: "Delhi, Gurgaon, Noida, Chandigarh",
      techs: 980,
      coverage: "98%",
      response: "20-45 min",
    },
    {
      name: "Southern India",
      cities: "Bangalore, Hyderabad, Chennai, Cochin",
      techs: 1120,
      coverage: "99%",
      response: "15-35 min",
    },
    {
      name: "Eastern India",
      cities: "Kolkata, Jamshedpur, Bhubaneswar",
      techs: 540,
      coverage: "95%",
      response: "30-60 min",
    },
    {
      name: "Central India",
      cities: "Indore, Nagpur, Bhopal",
      techs: 420,
      coverage: "92%",
      response: "45-90 min",
    },
    {
      name: "Tier 2 Cities",
      cities: "200+ secondary cities",
      techs: 2100,
      coverage: "85%",
      response: "60-120 min",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <h1 className="text-4xl font-semibold mb-2 flex items-center gap-3">
          <MapPin className="size-8" /> Service Coverage Areas
        </h1>
        <p className="text-muted-foreground mb-12">
          We operate across India with 5000+ verified technicians. Check coverage in your area.
        </p>

        {/* Coverage Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Total Technicians", value: "5,400+" },
            { label: "Cities Covered", value: "250+" },
            { label: "Avg Response Time", value: "25 min" },
          ].map((stat) => (
            <div key={stat.label} className="surface-card p-6 text-center">
              <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Regional Coverage */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {regions.map((region) => (
            <div key={region.name} className="surface-card p-6">
              <h3 className="text-xl font-semibold mb-2">{region.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{region.cities}</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Users className="size-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Technicians</span>
                  </div>
                  <div className="font-bold">{region.techs}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Coverage</div>
                  <div className="font-bold text-primary">{region.coverage}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Clock className="size-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Response</span>
                  </div>
                  <div className="font-bold text-xs">{region.response}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Check Your Area */}
        <div className="surface-card p-8">
          <h2 className="text-2xl font-bold mb-6">Check Service Availability</h2>
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Enter your city name..."
              className="w-full px-4 py-2 border border-border rounded-lg bg-background mb-4"
            />
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold">
              Check Availability
            </button>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-12 surface-card p-8 bg-blue-500/5 border border-blue-500/30">
          <h2 className="text-2xl font-bold mb-4">Expansion Plans</h2>
          <p className="text-muted-foreground mb-6">
            We're rapidly expanding to reach more areas. Coming soon to your region:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {["North East", "Tier 3 Cities", "Rural Areas"].map((area) => (
              <div key={area} className="p-4 bg-secondary/30 rounded-lg text-center font-semibold">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
