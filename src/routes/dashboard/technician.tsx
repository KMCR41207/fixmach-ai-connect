import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, DollarSign, Star, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/technician")({
  component: TechnicianDashboard,
});

function TechnicianDashboard() {
  const [activePage, setActivePage] = useState("jobs");
  const [jobsFilter, setJobsFilter] = useState<"pending" | "accepted" | "completed">("pending");

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold mb-2">Your Dashboard</h1>
          <p className="text-muted-foreground">Ravi K. • Avg Rating: ⭐ 4.9 • 234 Repairs</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Today's Earnings", value: "₹8,500", icon: "💰" },
            { label: "Pending Jobs", value: "3", icon: "📋" },
            { label: "Acceptance Rate", value: "94%", icon: "✅" },
            { label: "Avg Rating", value: "4.9/5", icon: "⭐" },
          ].map((stat) => (
            <div key={stat.label} className="surface-card p-6">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-2xl font-semibold mt-1">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {[
            { id: "jobs", label: "Jobs" },
            { id: "earnings", label: "Earnings" },
            { id: "profile", label: "Profile" },
            { id: "performance", label: "Performance" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePage(tab.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activePage === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Jobs Tab */}
        {activePage === "jobs" && (
          <>
            {/* Filter */}
            <div className="flex gap-2 mb-6">
              {(["pending", "accepted", "completed"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setJobsFilter(filter)}
                  className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                    jobsFilter === filter
                      ? "bg-primary text-primary-foreground"
                      : "border border-border hover:bg-secondary"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {jobsFilter === "pending" &&
                [
                  {
                    id: 1,
                    machine: "CNC Machine - Model X200",
                    facility: "ABC Manufacturing",
                    issue: "Spindle not rotating",
                    distance: "2.4 km",
                    eta: "15 min",
                    rate: "₹2,500",
                  },
                  {
                    id: 2,
                    machine: "Hydraulic Press",
                    facility: "XYZ Factory",
                    issue: "Pressure leak detected",
                    distance: "5.2 km",
                    eta: "22 min",
                    rate: "₹3,000",
                  },
                ].map((job) => (
                  <div key={job.id} className="surface-card p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{job.machine}</h3>
                        <p className="text-sm text-muted-foreground">{job.facility}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-semibold text-primary">{job.rate}</div>
                        <div className="text-xs text-muted-foreground">Service fee</div>
                      </div>
                    </div>

                    <p className="text-sm mb-4">{job.issue}</p>

                    <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-secondary/30 rounded-lg">
                      <div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="size-3" /> Distance
                        </div>
                        <div className="font-semibold">{job.distance}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="size-3" /> ETA
                        </div>
                        <div className="font-semibold">{job.eta}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Priority</div>
                        <div className="font-semibold text-yellow-600">Standard</div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 border border-border py-2 rounded-lg hover:bg-secondary">
                        Decline
                      </button>
                      <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)]">
                        Accept Job
                      </button>
                    </div>
                  </div>
                ))}

              {jobsFilter === "accepted" && (
                <div className="surface-card p-6">
                  <h3 className="text-lg font-semibold mb-4">ABC Manufacturing - CNC Service</h3>
                  <div className="space-y-4 mb-4">
                    <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <MapPin className="size-4 text-primary" />
                        <span>Heading to location</span>
                      </div>
                      <span className="font-semibold">2.1 km away</span>
                    </div>
                    <div className="w-full h-40 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🗺️ Live Map</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 py-2 bg-green-500/20 text-green-600 rounded-lg hover:bg-green-500/30">
                      <Phone className="size-4" /> Call
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2 bg-blue-500/20 text-blue-600 rounded-lg hover:bg-blue-500/30">
                      <MessageCircle className="size-4" /> Chat
                    </button>
                  </div>
                </div>
              )}

              {jobsFilter === "completed" && (
                <div className="surface-card p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Completed Jobs</h3>
                  <div className="space-y-3">
                    {[
                      { machine: "Boiler System", facility: "Plant A", earned: "₹5,200", rating: 5 },
                      { machine: "Hydraulic Unit", facility: "Plant B", earned: "₹4,800", rating: 4.5 },
                      { machine: "Control Panel", facility: "Plant C", earned: "₹3,500", rating: 5 },
                    ].map((job, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                        <div>
                          <div className="font-semibold">{job.machine}</div>
                          <div className="text-xs text-muted-foreground">{job.facility}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-green-600">{job.earned}</div>
                          <div className="text-xs">
                            {"⭐".repeat(Math.floor(job.rating))}
                            <span className="text-muted-foreground"> {job.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Earnings Tab */}
        {activePage === "earnings" && (
          <div className="surface-card p-8">
            <h2 className="text-2xl font-semibold mb-6">Earnings & Payments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "This Week", value: "₹42,300" },
                { label: "This Month", value: "₹1,85,600" },
                { label: "Total Earned", value: "₹12,45,800" },
              ].map((earning) => (
                <div key={earning.label} className="bg-secondary/50 p-6 rounded-lg">
                  <div className="text-sm text-muted-foreground">{earning.label}</div>
                  <div className="text-3xl font-semibold text-primary mt-2">{earning.value}</div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-4">Payment History</h3>
              <div className="space-y-2">
                {[
                  { date: "Jul 27", amount: "₹8,500", status: "Paid" },
                  { date: "Jul 26", amount: "₹6,200", status: "Paid" },
                  { date: "Jul 25", amount: "₹9,100", status: "Paid" },
                ].map((payment) => (
                  <div key={payment.date} className="flex justify-between p-3 bg-secondary/30 rounded-lg">
                    <div>
                      <div className="font-semibold">{payment.date}</div>
                      <div className="text-xs text-muted-foreground">{payment.amount}</div>
                    </div>
                    <div className="text-green-600 font-semibold">{payment.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activePage === "profile" && (
          <div className="surface-card p-8">
            <h2 className="text-2xl font-semibold mb-6">Your Profile</h2>
            <div className="max-w-2xl">
              <div className="mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl">👨‍🔧</div>
                  <div>
                    <h3 className="text-xl font-semibold">Ravi K.</h3>
                    <p className="text-muted-foreground">Certified Industrial Technician</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Experience", value: "8+ years" },
                  { label: "Specializations", value: "CNC, Hydraulic, PLC" },
                  { label: "Service Radius", value: "15 km" },
                  { label: "Average Rating", value: "4.9/5" },
                ].map((info) => (
                  <div key={info.label}>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-semibold">{info.value}</div>
                  </div>
                ))}
              </div>
              <button className="px-6 py-2 border border-border rounded-lg hover:bg-secondary">
                Edit Profile
              </button>
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {activePage === "performance" && (
          <div className="surface-card p-8">
            <h2 className="text-2xl font-semibold mb-6">Performance Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Response Rate</h3>
                <div className="w-full h-48 bg-secondary/30 rounded-lg flex items-center justify-center">
                  <span className="text-4xl font-semibold text-primary">94%</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Jobs Completed</h3>
                <div className="w-full h-48 bg-secondary/30 rounded-lg flex items-center justify-center">
                  <span className="text-4xl font-semibold text-green-600">234</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
