import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, CheckCircle2, DollarSign } from "lucide-react";

export const Route = createFileRoute("/job-history")({
  component: JobHistoryPage,
});

function JobHistoryPage() {
  const jobs = [
    {
      id: "FH-1024",
      machine: "CNC Milling Unit",
      status: "Completed",
      date: "Jul 20, 2026",
      technician: "Ravi K.",
      cost: "₹12,450",
      location: "Pune Plant 3",
    },
    {
      id: "FH-1108",
      machine: "Hydraulic Press",
      status: "In Progress",
      date: "Jul 24, 2026",
      technician: "Neha S.",
      cost: "₹8,300",
      location: "Ahmedabad Line 2",
    },
    {
      id: "FH-1130",
      machine: "Packaging Conveyor",
      status: "Scheduled",
      date: "Jul 28, 2026",
      technician: "Anil P.",
      cost: "₹5,600",
      location: "Chennai Depot",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Job History</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Review past repairs, ongoing work, and upcoming service jobs in a single view.
          </p>
        </div>

        <div className="surface-card p-8 mb-10">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { label: "Total jobs", value: "124" },
              { label: "Completed", value: "98" },
              { label: "Pending", value: "15" },
              { label: "Avg. cost", value: "₹9,200" },
            ].map((summary) => (
              <div key={summary.label} className="rounded-3xl border border-border p-5">
                <div className="text-sm text-muted-foreground">{summary.label}</div>
                <div className="mt-2 text-3xl font-semibold">{summary.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card p-8">
          <h2 className="text-2xl font-bold mb-6">Recent service jobs</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="rounded-3xl border border-border p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Job ID</div>
                    <div className="text-lg font-semibold">{job.id}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Machine</div>
                    <div className="font-semibold">{job.machine}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Status</div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{job.status}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Date</div>
                    <div>{job.date}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Cost</div>
                    <div className="font-semibold">{job.cost}</div>
                  </div>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-secondary/40 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Technician</div>
                    <div className="mt-2 font-semibold">{job.technician}</div>
                  </div>
                  <div className="rounded-3xl bg-secondary/40 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Location</div>
                    <div className="mt-2 flex items-center gap-2 font-semibold">
                      <MapPin className="size-4" /> {job.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {[
            { icon: Clock, label: "Average ETA", value: "18 min" },
            { icon: CheckCircle2, label: "Success rate", value: "99.1%" },
            { icon: DollarSign, label: "Budget alignment", value: "92%" },
          ].map((metric) => (
            <div key={metric.label} className="surface-card rounded-3xl p-6 text-center">
              <metric.icon className="mx-auto mb-4 size-8 text-primary" />
              <div className="text-sm text-muted-foreground">{metric.label}</div>
              <div className="mt-3 text-3xl font-semibold">{metric.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
