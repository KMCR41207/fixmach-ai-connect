import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Users, Target, Lightbulb, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-steel/20 to-background">
        <div className="mx-auto w-[min(1200px,92%)]">
          <h1 className="text-5xl font-bold mb-6">About FixMach AI</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Transforming industrial repair with AI-powered diagnostics and a network of verified technicians.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="mx-auto w-[min(1200px,92%)]">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "Reduce machine downtime and repair costs through AI diagnostics and verified technicians.",
              },
              {
                icon: Lightbulb,
                title: "Our Vision",
                desc: "A world where factories can diagnose and fix machines instantly, anywhere.",
              },
              {
                icon: Award,
                title: "Our Values",
                desc: "Transparency, reliability, and continuous innovation for industry 4.0.",
              },
            ].map((item) => (
              <div key={item.title} className="surface-card p-8 text-center">
                <item.icon className="size-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto w-[min(1200px,92%)] max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              FixMach was founded in 2023 by a team of engineers frustrated with industrial machine downtime. We saw factories losing ₹10,000+ per hour when machines broke down, with no way to quickly diagnose issues or find qualified technicians.
            </p>
            <p>
              We built an AI system trained on thousands of machine repair cases to diagnose issues from photos and videos in seconds. We paired this with a network of verified technicians to execute repairs quickly and reliably.
            </p>
            <p>
              Today, FixMach has processed over 10,000 repairs, saved factories ₹50 crores in downtime costs, and connected 5,000+ technicians with verified factories across India.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto w-[min(1200px,92%)]">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Rajesh Kumar", role: "CEO & Co-founder", bg: "bg-blue-500" },
              { name: "Priya Sharma", role: "CTO & Co-founder", bg: "bg-purple-500" },
              { name: "Amit Patel", role: "Head of Operations", bg: "bg-green-500" },
              { name: "Neha Gupta", role: "Head of Product", bg: "bg-orange-500" },
            ].map((member) => (
              <div key={member.name} className="surface-card p-6 text-center">
                <div className={`size-20 ${member.bg} rounded-full mx-auto mb-4`} />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-primary/10">
        <div className="mx-auto w-[min(1200px,92%)]">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "10,000+", label: "Repairs Completed" },
              { number: "5,000+", label: "Technicians Connected" },
              { number: "500+", label: "Factories Served" },
              { number: "₹50 Cr", label: "Downtime Cost Saved" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="mx-auto w-[min(1200px,92%)]">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Milestones</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { year: "2023", event: "FixMach founded with AI diagnosis system" },
              { year: "2023", event: "First 500 repairs completed" },
              { year: "2024", event: "Expanded to 15+ states in India" },
              { year: "2024", event: "Crossed 10,000 repairs milestone" },
              { year: "2025", event: "Enterprise features launched" },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="text-right flex-shrink-0 w-24">
                  <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                </div>
                <div className="surface-card p-4 flex-1">
                  <p className="font-semibold">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto w-[min(1200px,92%)] text-center">
          <h2 className="text-4xl font-bold mb-4">Join the FixMach Revolution</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a factory looking to reduce downtime or a technician wanting to grow your business, FixMach is here to help.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate({ to: "/auth/register" })}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold"
            >
              Register as Factory
            </button>
            <button
              onClick={() => navigate({ to: "/for-technicians" })}
              className="border border-border px-8 py-3 rounded-lg hover:bg-secondary font-semibold"
            >
              Join as Technician
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
