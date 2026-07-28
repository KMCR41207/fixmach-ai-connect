import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Home } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
});

function HowItWorksPage() {
  const navigate = useNavigate();

  const steps = [
    {
      num: 1,
      title: "Register Your Factory",
      description: "Create account with factory details, location, and machines",
      icon: "🏭",
      details: [
        "Company name and address",
        "Factory floor information",
        "Contact person details",
        "Verify via phone/email",
      ],
    },
    {
      num: 2,
      title: "Add Your Machines",
      description: "Upload machine details, manuals, and maintenance history",
      icon: "⚙️",
      details: [
        "Machine name and model",
        "Upload manual & warranty",
        "Add maintenance logs",
        "Set up health monitoring",
      ],
    },
    {
      num: 3,
      title: "Upload Machine Issue",
      description: "Capture photos, videos, audio, error codes, or error screens",
      icon: "📷",
      details: [
        "Take machine photos",
        "Record audio/video",
        "Scan error code with OCR",
        "Upload error screenshot",
      ],
    },
    {
      num: 4,
      title: "Get AI Diagnosis",
      description: "AI analyzes data and provides detailed fault analysis with cost estimate",
      icon: "🤖",
      details: [
        "Probable fault identified",
        "Severity level assigned",
        "Repair cost estimated",
        "Spare parts recommended",
      ],
    },
    {
      num: 5,
      title: "Choose Technician",
      description: "Select from available qualified technicians based on specialization, rating, and ETA",
      icon: "👨‍🔧",
      details: [
        "View certified specialists",
        "Check ratings & reviews",
        "See real-time ETA",
        "Compare pricing",
      ],
    },
    {
      num: 6,
      title: "Repair & Payment",
      description: "Technician arrives, completes repair, you approve and pay via escrow",
      icon: "✅",
      details: [
        "Live ETA updates",
        "Real-time chat/video",
        "Service completion report",
        "Escrow payment release",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="max-w-3xl mb-16">
          <button
            onClick={() => navigate({ to: "/" })}
            className="text-sm text-primary hover:underline mb-4 flex items-center gap-1"
          >
            <Home className="size-4" /> Back to Home
          </button>
          <h1 className="text-5xl font-semibold mb-4">How FixMach AI Works</h1>
          <p className="text-xl text-muted-foreground">
            From breakdown to repair in 6 simple steps. Reduce factory downtime from days to hours.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-20 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-transparent"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.num} className="pl-20">
                {/* Circle Marker */}
                <div className="absolute left-0 top-6 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {step.num}
                </div>

                <div className="surface-card p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{step.icon}</span>
                    <div>
                      <h2 className="text-2xl font-semibold">{step.title}</h2>
                      <p className="text-muted-foreground mt-1">{step.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-4 border-t border-border">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="mt-6 flex items-center gap-2 text-primary">
                      <div className="flex-1 h-px bg-border"></div>
                      <ArrowRight className="size-5" />
                      <div className="flex-1 h-px bg-border"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 surface-card p-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join hundreds of factories that have cut downtime and improved productivity with FixMach AI.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate({ to: "/auth/register" })}
              className="bg-[image:var(--gradient-accent)] text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-[var(--shadow-glow)]"
            >
              Register Factory
            </button>
            <button
              onClick={() => navigate({ to: "/booking" })}
              className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-secondary"
            >
              Book a Repair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
