import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Upload, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/technician/register")({
  component: TechnicianRegisterPage,
});

function TechnicianRegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    specialization: [] as string[],
  });

  const specializations = [
    "CNC Machines",
    "Hydraulic Systems",
    "PLC & Controls",
    "Boilers & Pressure",
    "Robotic Arms",
    "Packaging Lines",
    "HVAC Systems",
    "Laser Cutters",
  ];

  const toggleSpecialization = (spec: string) => {
    setFormData({
      ...formData,
      specialization: formData.specialization.includes(spec)
        ? formData.specialization.filter((s) => s !== spec)
        : [...formData.specialization, spec],
    });
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)] max-w-2xl">
        <h1 className="text-4xl font-semibold mb-2">Join as Technician</h1>
        <p className="text-muted-foreground mb-8">Get certified jobs matching your skills and earn more</p>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full transition-colors ${
                step >= s ? "bg-primary" : "bg-secondary"
              }`}
            />
          ))}
        </div>

        <div className="surface-card p-8">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Basic Information</h2>
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                />
              </div>
            </>
          )}

          {/* Step 2: Experience */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Experience & Specialization</h2>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Years of Experience</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg bg-background">
                  <option>Less than 1 year</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5-10 years</option>
                  <option>10+ years</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Machine Specializations</label>
                <div className="grid grid-cols-2 gap-2">
                  {specializations.map((spec) => (
                    <button
                      key={spec}
                      onClick={() => toggleSpecialization(spec)}
                      className={`p-3 rounded-lg border-2 transition-all text-left ${
                        formData.specialization.includes(spec)
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {formData.specialization.includes(spec) && (
                          <CheckCircle className="size-4 text-primary" />
                        )}
                        <span className="text-sm font-medium">{spec}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Step 3: Documents */}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Upload Documents</h2>
              <div className="space-y-4 mb-6">
                {[
                  { label: "Certificates & Credentials", icon: "📜" },
                  { label: "Aadhaar ID", icon: "🆔" },
                  { label: "PAN Card", icon: "📋" },
                  { label: "Bank Details", icon: "🏦" },
                ].map((doc) => (
                  <div key={doc.label} className="border-2 border-dashed border-border rounded-lg p-6 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{doc.icon}</span>
                      <div className="text-left">
                        <div className="font-medium">{doc.label}</div>
                        <div className="text-sm text-muted-foreground">Click to upload</div>
                      </div>
                      <Upload className="size-4 text-muted-foreground ml-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Review Your Profile</h2>
              <div className="space-y-4 mb-6 p-4 bg-secondary/30 rounded-lg">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name</span>
                  <span className="font-semibold">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-semibold">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Specializations</span>
                  <span className="font-semibold text-right">{formData.specialization.length} selected</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Your profile will be reviewed by our team within 24 hours. Once approved, you'll receive access to your dashboard.
              </p>
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
            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)] flex items-center justify-center gap-2"
              >
                Next <ArrowRight className="size-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  localStorage.setItem("userRole", "technician");
                  navigate({ to: "/dashboard/technician" });
                }}
                className="flex-1 bg-[image:var(--gradient-accent)] text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)] flex items-center justify-center gap-2"
              >
                Submit Application <CheckCircle className="size-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
