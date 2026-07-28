import { createFileRoute } from "@tanstack/react-router";
import { Plus, Settings, Bell, Menu, LogOut, Home, Wrench, FileText, Gauge } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/owner")({
  component: OwnerDashboard,
});

function OwnerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("overview");

  const menuItems = [
    { id: "overview", icon: Home, label: "Overview" },
    { id: "machines", icon: Wrench, label: "My Machines" },
    { id: "repairs", icon: FileText, label: "Repairs" },
    { id: "analytics", icon: Gauge, label: "Analytics" },
    { id: "invoices", icon: FileText, label: "Invoices" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-card border-r border-border transition-all duration-300 fixed h-screen flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-border flex items-center gap-3">
          <div className="size-10 rounded-lg bg-[image:var(--gradient-accent)] flex items-center justify-center text-primary-foreground font-semibold">
            ⚙️
          </div>
          {sidebarOpen && <span className="font-semibold">FixMach AI</span>}
        </div>

        {/* Menu */}
        <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activePage === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="size-5 shrink-0" />
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <button className="m-3 flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground w-full">
          <LogOut className="size-5" />
          {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>

      {/* Main Content */}
      <div className={`${sidebarOpen ? "ml-64" : "ml-20"} flex-1 transition-all duration-300`}>
        {/* Top Bar */}
        <div className="border-b border-border bg-card sticky top-0 z-40 p-4 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-secondary rounded-lg">
            <Menu className="size-5" />
          </button>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-secondary rounded-lg relative">
              <Bell className="size-5" />
              <span className="absolute top-1 right-1 size-2 bg-primary rounded-full"></span>
            </button>
            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">👤</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Overview Page */}
          {activePage === "overview" && (
            <>
              <h1 className="text-3xl font-semibold mb-2">Welcome back!</h1>
              <p className="text-muted-foreground mb-8">Here's what's happening with your machines today</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Active Machines", value: "12", color: "text-blue-500" },
                  { label: "Pending Repairs", value: "3", color: "text-yellow-500" },
                  { label: "Health Score", value: "87%", color: "text-green-500" },
                  { label: "Downtime (hrs)", value: "2.4", color: "text-red-500" },
                ].map((stat) => (
                  <div key={stat.label} className="surface-card p-6">
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className={`text-3xl font-semibold ${stat.color}`}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Recent Repairs */}
              <div className="surface-card p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Recent Repairs</h2>
                <div className="space-y-3">
                  {[
                    { machine: "CNC X200", status: "Completed", date: "Today", tech: "Ravi K." },
                    { machine: "Hydraulic Press", status: "In Progress", date: "Today", tech: "Priya M." },
                    { machine: "Packaging Line", status: "Scheduled", date: "Tomorrow", tech: "Amit S." },
                  ].map((repair) => (
                    <div key={repair.machine} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                      <div>
                        <div className="font-semibold">{repair.machine}</div>
                        <div className="text-xs text-muted-foreground">{repair.tech}</div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            repair.status === "Completed"
                              ? "bg-green-500/20 text-green-600"
                              : repair.status === "In Progress"
                              ? "bg-blue-500/20 text-blue-600"
                              : "bg-yellow-500/20 text-yellow-600"
                          }`}
                        >
                          {repair.status}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{repair.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-[image:var(--gradient-accent)] text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-[var(--shadow-glow)] flex items-center justify-center gap-2">
                <Plus className="size-5" />
                Book New Repair
              </button>
            </>
          )}

          {/* Machines Page */}
          {activePage === "machines" && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold">My Machines</h1>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:shadow-[var(--shadow-glow)] flex items-center gap-2">
                  <Plus className="size-4" />
                  Add Machine
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "CNC X200", status: "Running", health: "92%", nextMaint: "5 days" },
                  { name: "Hydraulic Press", status: "Idle", health: "78%", nextMaint: "2 days" },
                  { name: "Packaging Line", status: "Running", health: "85%", nextMaint: "10 days" },
                ].map((machine) => (
                  <div key={machine.name} className="surface-card p-6">
                    <h3 className="font-semibold mb-4">{machine.name}</h3>
                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="text-xs text-muted-foreground">Status</div>
                        <div className={`font-semibold ${machine.status === "Running" ? "text-green-600" : "text-yellow-600"}`}>
                          {machine.status}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Health Score</div>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-green-600"
                            style={{ width: machine.health }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Next Maintenance</div>
                        <div className="font-semibold">{machine.nextMaint}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 border border-border py-2 text-sm rounded-lg hover:bg-secondary">
                        Edit
                      </button>
                      <button className="flex-1 border border-border py-2 text-sm rounded-lg hover:bg-secondary">
                        History
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Other pages - simple placeholders */}
          {activePage === "repairs" && (
            <div className="surface-card p-8 text-center">
              <h2 className="text-2xl font-semibold mb-2">Repair Requests</h2>
              <p className="text-muted-foreground">View all repair history and status</p>
            </div>
          )}

          {activePage === "analytics" && (
            <div className="surface-card p-8 text-center">
              <h2 className="text-2xl font-semibold mb-2">Analytics & Reports</h2>
              <p className="text-muted-foreground">Downtime analysis, cost trends, and performance metrics</p>
            </div>
          )}

          {activePage === "invoices" && (
            <div className="surface-card p-8 text-center">
              <h2 className="text-2xl font-semibold mb-2">Invoices</h2>
              <p className="text-muted-foreground">Download and manage all GST invoices</p>
            </div>
          )}

          {activePage === "settings" && (
            <div className="surface-card p-8 text-center">
              <h2 className="text-2xl font-semibold mb-2">Settings</h2>
              <p className="text-muted-foreground">Manage your profile and preferences</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
