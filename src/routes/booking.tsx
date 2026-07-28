import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronRight, MapPin, CreditCard, CheckCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
});

function BookingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const steps = [
    { num: 1, title: "Choose Machine", icon: "🔧" },
    { num: 2, title: "Describe Issue", icon: "📝" },
    { num: 3, title: "Upload Images", icon: "📸" },
    { num: 4, title: "AI Diagnosis", icon: "🤖" },
    { num: 5, title: "Select Technician", icon: "👨‍🔧" },
    { num: 6, title: "Confirm & Pay", icon: "💳" },
    { num: 7, title: "Live Tracking", icon: "📍" },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <h1 className="text-4xl font-semibold mb-2">Book a Repair</h1>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {steps.map((s) => (
              <div key={s.num} className="flex items-center">
                <button
                  onClick={() => setStep(s.num)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all ${
                    step >= s.num
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  <span>{s.icon}</span>
                  <div className="text-left">
                    <div className="text-xs opacity-75">Step {s.num}</div>
                    <div className="font-semibold">{s.title}</div>
                  </div>
                </button>
                {s.num < steps.length && <ChevronRight className="size-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Choose Machine */}
        {step === 1 && (
          <div className="surface-card p-8 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6">Select Your Machine</h2>
            <div className="space-y-3 mb-6">
              {[
                { name: "CNC Machine - Model X200", location: "Factory Floor A" },
                { name: "Hydraulic Press - 100 Ton", location: "Workshop B" },
                { name: "Packaging Line - Auto-fill", location: "Warehouse C" },
              ].map((machine) => (
                <button
                  key={machine.name}
                  onClick={() => setStep(2)}
                  className="w-full p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left"
                >
                  <div className="font-semibold">{machine.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="size-3" /> {machine.location}
                  </div>
                </button>
              ))}
            </div>
            <button className="w-full border border-border py-2 rounded-lg hover:bg-secondary">
              + Add New Machine
            </button>
          </div>
        )}

        {/* Step 2: Describe Issue */}
        {step === 2 && (
          <div className="surface-card p-8 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6">Describe the Issue</h2>
            <textarea
              placeholder="Describe what's wrong with the machine..."
              className="w-full h-32 p-4 border border-border rounded-lg bg-background mb-6"
            />
            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 border border-border py-2 rounded-lg hover:bg-secondary"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)]"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Upload Images */}
        {step === 3 && (
          <div className="surface-card p-8 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6">Upload Images</h2>
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center mb-6 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
              <div className="text-4xl mb-2">📸</div>
              <p className="font-semibold">Click or drag images here</p>
              <p className="text-sm text-muted-foreground">PNG, JPG, MP4 up to 10MB</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 border border-border py-2 rounded-lg hover:bg-secondary"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)]"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Select Technician */}
        {step === 5 && (
          <div className="surface-card p-8 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6">Select a Technician</h2>
            <div className="space-y-3 mb-6">
              {[
                { name: "Ravi K.", rating: 4.9, reviews: 234, eta: "15 min", distance: "2.4 km" },
                { name: "Amit S.", rating: 4.8, reviews: 189, eta: "22 min", distance: "3.1 km" },
                { name: "Priya M.", rating: 4.7, reviews: 156, eta: "8 min", distance: "1.2 km" },
              ].map((tech) => (
                <button
                  key={tech.name}
                  onClick={() => setStep(6)}
                  className="w-full p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">{tech.name}</div>
                      <div className="text-sm text-muted-foreground">⭐ {tech.rating} ({tech.reviews} reviews)</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-primary">ETA: {tech.eta}</div>
                      <div className="text-sm text-muted-foreground">{tech.distance}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Confirm & Pay */}
        {step === 6 && (
          <div className="surface-card p-8 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6">Confirm & Payment</h2>
            <div className="space-y-3 mb-6 p-4 bg-secondary/30 rounded-lg">
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span className="font-semibold">₹2,500</span>
              </div>
              <div className="flex justify-between">
                <span>Travel Charge</span>
                <span className="font-semibold">₹300</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="text-lg font-semibold text-primary">₹2,800</span>
              </div>
            </div>
            <button
              onClick={() => setStep(7)}
              className="w-full bg-[image:var(--gradient-accent)] text-primary-foreground py-3 px-4 rounded-lg font-semibold hover:shadow-[var(--shadow-glow)] transition-all flex items-center justify-center gap-2"
            >
              <CreditCard className="size-5" />
              Proceed to Payment
            </button>
          </div>
        )}

        {/* Step 7: Live Tracking */}
        {step === 7 && (
          <div className="surface-card p-8 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="size-8 text-green-500" />
              <div>
                <h2 className="text-2xl font-semibold">Booking Confirmed!</h2>
                <p className="text-muted-foreground">Technician is on the way</p>
              </div>
            </div>
            <div className="p-4 bg-secondary/30 rounded-lg mb-6">
              <div className="font-semibold mb-3">Priya M. is arriving in 8 minutes</div>
              <div className="w-full h-40 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-4xl">🗺️ Live Map</div>
              </div>
              <div className="space-y-2 text-sm">
                <div>📍 Location: 2.4 km away</div>
                <div>⏱️ ETA: 8 minutes</div>
                <div>📞 +91 98765 43210</div>
              </div>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg">
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
