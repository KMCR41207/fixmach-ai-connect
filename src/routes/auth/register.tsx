import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/auth/register")({
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    industry: "",
  });

  const industries = [
    "Automotive",
    "Food Processing",
    "Steel & Metals",
    "Pharmaceuticals",
    "Chemical",
    "Packaging",
    "Textile",
    "Mining",
    "Semiconductor",
    "Aerospace",
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)] max-w-2xl">
        <h1 className="text-4xl font-semibold mb-2">Register Your Factory</h1>
        <p className="text-muted-foreground mb-8">Start using FixMach AI to reduce machine downtime</p>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full transition-colors ${
                step >= s ? "bg-primary" : "bg-secondary"
              }`}
            />
          ))}
        </div>

        <div className="surface-card p-8">
          {/* Step 1: Company Info */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Company Information</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Factory Name *</label>
                  <input
                    type="text"
                    placeholder="ABC Manufacturing Ltd."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Industry *</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                  >
                    <option value="">Select an industry</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address *</label>
                  <input
                    type="email"
                    placeholder="contact@factory.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                  />
                </div>
              </div>
            </>
          )}

          {/* Step 2: Location */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Factory Location</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Address *</label>
                  <textarea
                    placeholder="Street address, building number, etc."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background h-24"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">City *</label>
                    <input
                      type="text"
                      placeholder="Mumbai"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Pincode *</label>
                    <input
                      type="text"
                      placeholder="400001"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Step 3: Verification */}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Verify Your Details</h2>
              <div className="space-y-4 mb-6 p-4 bg-secondary/30 rounded-lg">
                <div>
                  <div className="text-sm text-muted-foreground">Company Name</div>
                  <div className="font-semibold">{formData.companyName}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Industry</div>
                  <div className="font-semibold">{formData.industry}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-semibold">{formData.city}, {formData.pincode}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-semibold">{formData.email}</div>
                </div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
                <p className="text-sm">
                  We'll verify your factory details and send an email confirmation with next steps.
                </p>
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="flex gap-3">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 border border-border py-2 rounded-lg hover:bg-secondary"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)] flex items-center justify-center gap-2"
              >
                Next <ArrowRight className="size-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  localStorage.setItem("userRole", "owner");
                  navigate({ to: "/dashboard/owner" });
                }}
                className="flex-1 bg-[image:var(--gradient-accent)] text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)] flex items-center justify-center gap-2"
              >
                Create Account <CheckCircle className="size-4" />
              </button>
            )}
          </div>

          <p className="text-sm text-center text-muted-foreground mt-6">
            Already have an account?{" "}
            <button
              onClick={() => navigate({ to: "/auth/login" })}
              className="text-primary hover:underline font-semibold"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
