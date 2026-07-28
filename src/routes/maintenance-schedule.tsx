import { createFileRoute } from "@tanstack/react-router";
import { Calendar, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/maintenance-schedule")({
  component: MaintenanceSchedulePage,
});

function MaintenanceSchedulePage() {
  const [view, setView] = useState("list");

  const schedule = [
    {
      id: 1,
      machine: "CNC X200",
      type: "Routine Oil Change",
      dueDate: "Jan 15, 2025",
      status: "Due Soon",
      urgency: "medium",
    },
    {
      id: 2,
      machine: "Hydraulic Press",
      type: "Seal Replacement",
      dueDate: "Jan 20, 2025",
      status: "Scheduled",
      urgency: "low",
    },
    {
      id: 3,
      machine: "Packaging Machine",
      type: "Belt Tension Check",
      dueDate: "Today",
      status: "Overdue",
      urgency: "high",
    },
    {
      id: 4,
      machine: "Conveyor System",
      type: "Motor Inspection",
      dueDate: "Feb 1, 2025",
      status: "Scheduled",
      urgency: "low",
    },
    {
      id: 5,
      machine: "CNC X200",
      type: "Annual Service",
      dueDate: "Completed",
      status: "Done",
      urgency: "none",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-semibold mb-2 flex items-center gap-3">
              <Calendar className="size-8" /> Maintenance Schedule
            </h1>
            <p className="text-muted-foreground">Plan and track preventive maintenance for all machines</p>
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold">
            Schedule Maintenance
          </button>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Overdue", count: 1, color: "destructive" },
            { label: "Due Soon", count: 1, color: "yellow" },
            { label: "Scheduled", count: 2, color: "primary" },
            { label: "Completed", count: 1, color: "green" },
          ].map((card) => (
            <div key={card.label} className="surface-card p-4">
              <div className="text-sm text-muted-foreground mb-2">{card.label}</div>
              <div className="text-3xl font-bold text-primary">{card.count}</div>
            </div>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 mb-6">
          {["list", "calendar"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                view === v
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:bg-secondary"
              }`}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)} View
            </button>
          ))}
        </div>

        {/* List View */}
        {view === "list" && (
          <div className="space-y-3">
            {schedule.map((item) => (
              <div
                key={item.id}
                className={`surface-card p-4 flex items-center justify-between border-l-4 ${
                  item.urgency === "high"
                    ? "border-destructive"
                    : item.urgency === "medium"
                      ? "border-yellow-500"
                      : "border-primary"
                }`}
              >
                <div>
                  <h3 className="font-semibold">{item.machine}</h3>
                  <p className="text-sm text-muted-foreground">{item.type}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-sm font-semibold">{item.dueDate}</div>
                    <div className="text-xs text-muted-foreground">{item.status}</div>
                  </div>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold text-sm">
                    Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Calendar View */}
        {view === "calendar" && (
          <div className="surface-card p-6">
            <div className="grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-semibold text-sm p-2">
                  {day}
                </div>
              ))}
              {[...Array(35)].map((_, idx) => (
                <div
                  key={idx}
                  className={`aspect-square flex items-center justify-center rounded-lg border border-border text-sm ${
                    idx % 7 === 0 || idx % 7 === 6 ? "bg-secondary/30" : "bg-background"
                  }`}
                >
                  {idx + 1 > 3 && idx + 1 <= 34 ? idx - 1 : ""}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
