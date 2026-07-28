import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { TrendingUp, Users, Award, Clock, DollarSign, Shield, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/for-technicians")({
  component: ForTechniciansPage,
});

function ForTechniciansPage() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: TrendingUp,
      title: "Grow Your Income",
      desc: "Earn ₹500-₹1000 per hour. More jobs = more earnings.",
    },
    {
      icon: Users,
      title: "Steady Job Flow",
      desc: "Get consistent work from verified factories nationwide.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      desc: "Choose jobs that fit your availability.",
    },
    {
      icon: Award,
      title: "Build Reputation",
      desc: "Get ratings and reviews to attract more clients.",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      desc: "Escrow protection ensures you get paid for every job.",
    },
    {
      icon: DollarSign,
      title: "Bonus Incentives",
      desc: "Earn extra through referrals and performance bonuses.",
    },
  ];

  const requirements = [
    "3+ years of machine repair experience",
    "Valid government ID",
    "Proof of previous work (certificates/references)",
    "Basic knowledge of 2+ machine types",
    "Reliable smartphone and internet connection",
    "Transportation to job sites",
  ];

  const specializations = [
    "CNC Machines",
    "Hydraulic Systems",
    "PLC & Controls",
    "Boiler Systems",
    "Conveyor Systems",
    "Welding Robots",
    "Laser Cutting",
    "Food Processing",
    "Packaging Machines",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-steel/20 to-background">
        <div className="mx-auto w-[min(1200px,92%)]">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Grow Your Repair Business</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of technicians earning 2-3x more by getting consistent jobs from verified factories across India.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => navigate({ to: "/technician/register" })}
                className="bg-[image:var(--gradient-accent)] text-primary-foreground px-8 py-3 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold"
              >
                Start Earning Today
              </button>
              <button
                onClick={() => navigate({ to: "/" })}
                className="border border-border px-8 py-3 rounded-lg hover:bg-secondary font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20">
        <div className="mx-auto w-[min(1200px,92%)]">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Join FixMach?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="surface-card p-8">
                <benefit.icon className="size-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings */}
      <section className="py-20 bg-primary/5">
        <div className="mx-auto w-[min(1200px,92%)]">
          <h2 className="text-4xl font-bold mb-12 text-center">How Much Can You Earn?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                scenario: "Starter",
                desc: "3-5 jobs per week",
                earning: "₹7,500 - ₹12,500",
              },
              {
                scenario: "Professional",
                desc: "10-15 jobs per week",
                earning: "₹25,000 - ₹37,500",
              },
              {
                scenario: "Expert",
                desc: "20+ jobs per week",
                earning: "₹50,000 - ₹75,000+",
              },
            ].map((earn) => (
              <div key={earn.scenario} className="surface-card p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{earn.scenario}</h3>
                <p className="text-sm text-muted-foreground mb-4">{earn.desc}</p>
                <div className="text-3xl font-bold text-primary">{earn.earning}</div>
                <p className="text-xs text-muted-foreground mt-3">Per month</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto w-[min(1200px,92%)]">
          <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: 1, title: "Register", desc: "Create your profile and verify credentials" },
              { step: 2, title: "Get Verified", desc: "Our team verifies your experience" },
              { step: 3, title: "Accept Jobs", desc: "Browse and accept repair jobs" },
              { step: 4, title: "Earn & Grow", desc: "Get paid and build your rating" },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="surface-card p-6 text-center">
                  <div className="size-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto w-[min(1200px,92%)]">
          <h2 className="text-4xl font-bold mb-12 text-center">Basic Requirements</h2>
          <div className="max-w-2xl mx-auto">
            <div className="surface-card p-8">
              <div className="space-y-3">
                {requirements.map((req) => (
                  <div key={req} className="flex items-center gap-3">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20">
        <div className="mx-auto w-[min(1200px,92%)]">
          <h2 className="text-4xl font-bold mb-12 text-center">Specializations We Need</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {specializations.map((spec) => (
              <div key={spec} className="surface-card p-4 text-center">
                <span className="font-semibold text-sm">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto w-[min(1200px,92%)]">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: "How do I get paid?",
                a: "Payments are processed through escrow after job completion. Get paid within 24-48 hours of work verification.",
              },
              {
                q: "What if a customer disputes my work?",
                a: "We have a fair dispute resolution system. Our team reviews both sides and makes an unbiased decision.",
              },
              {
                q: "Can I work part-time?",
                a: "Yes! You choose which jobs to accept. Many technicians work flexible hours alongside their main job.",
              },
              {
                q: "What support do you provide?",
                a: "24/7 customer support, job insurance, and regular training on new machine types.",
              },
            ].map((faq) => (
              <div key={faq.q} className="surface-card p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto w-[min(1200px,92%)]">
          <div className="surface-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our network of top technicians. Complete registration in 10 minutes and start accepting jobs.
            </p>
            <button
              onClick={() => navigate({ to: "/technician/register" })}
              className="bg-[image:var(--gradient-accent)] text-primary-foreground px-8 py-3 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold"
            >
              Register as Technician
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
