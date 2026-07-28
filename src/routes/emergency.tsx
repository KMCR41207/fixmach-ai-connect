import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AlertTriangle, Phone, Clock, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/emergency")({
  component: EmergencyPage,
});

function EmergencyPage() {
  const navigate = useNavigate();
  const [severity, setSeverity] = useState("high");
  const [description, setDescription] = useState("");

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)] max-w-2xl">
        <div className="surface-card p-8 border-2 border-destructive">
          {/* Header */}
          <div className="flex items-start gap-4 mb-8">
            <AlertTriangle className="size-8 text-destructive flex-shrink-0" />
            <div>
              <h1 className="text-3xl font-semibold mb-1">Emergency Machine Repair</h1>
              <p className="text-muted-foreground">Request immediate assistance for critical machine failure</p>
            </div>
          </div>

          {/* Alert Box */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
            <p className="text-sm font-semibold text-destructive flex items-center gap-2">
              <span>🚨</span> We prioritize emergency requests and dispatch technicians immediately
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6 mb-8">
            {/* Severity */}
            <div>
              <label className="text-sm font-medium mb-3 block">How Critical is the Issue?</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "high", label: "Critical", desc: "Production halted" },
                  { value: "medium", label: "Urgent", desc: "Degraded performance" },
                  { value: "low", label: "Important", desc: "Minor issues" },
                ].map((s) => (
                  <button
                    key={s.value}
                    onClick={() => setSeverity(s.value)}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      severity === s.value
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-semibold">{s.label}</div>
                    <div className="text-xs text-muted-foreground">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Machine Selection */}
            <div>
              <label className="text-sm font-medium mb-2 block">Affected Machine</label>
              <select className="w-full px-4 py-2 border border-border rounded-lg bg-background">
                <option>CNC X200 - Main Assembly Line</option>
                <option>Hydraulic Press - Unit 2</option>
                <option>Packaging Machine - Line 3</option>
              </select>
            </div>

            {/* Issue Description */}
            <div>
              <label className="text-sm font-medium mb-2 block">What's the Problem?</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the issue - unusual noise, smoke, error codes, production stopped, etc."
                className="w-full px-4 py-2 border border-border rounded-lg bg-background h-32"
              />
            </div>

            {/* Contact */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Your Name</label>
                <input type="text" placeholder="On-site contact name" className="w-full px-4 py-2 border border-border rounded-lg bg-background" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-2 border border-border rounded-lg bg-background" />
              </div>
            </div>
          </div>

          {/* Emergency Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-secondary/30 rounded-lg">
            {[
              { icon: Clock, label: "Avg Response", value: "8 minutes" },
              { icon: MapPin, label: "Nearest Tech", value: "2.3 km away" },
              { icon: Phone, label: "Direct Support", value: "24/7 Available" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="size-5 text-primary mx-auto mb-2" />
                <div className="text-xs text-muted-foreground">{stat.label}</div>
                <div className="font-semibold text-sm">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate({ to: "/booking" })}
              className="bg-[image:var(--gradient-accent)] text-primary-foreground py-3 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold"
            >
              Request Emergency Tech
            </button>
            <button
              onClick={() => navigate({ to: "/" })}
              className="border border-border py-3 rounded-lg hover:bg-secondary font-semibold"
            >
              Cancel
            </button>
          </div>

          {/* Call Support */}
          <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg text-center">
            <p className="text-sm text-muted-foreground mb-3">Or speak directly with our emergency team</p>
            <button className="flex items-center justify-center gap-2 mx-auto bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold">
              <Phone className="size-5" /> Call Emergency Support: +91-1800-FIXMACH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
