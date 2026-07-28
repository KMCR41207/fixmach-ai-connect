import { createFileRoute } from "@antml/react-router";
import { Users, Building2, TrendingUp, AlertCircle, Settings } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/admin")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const [activePage, setActivePage] = useState("overview");

  const menuItems = [
    { id: "overview", icon: TrendingUp, label: "Overview" },
    { id: "users", icon: Users, label: "Manage Users" },
    { id: "factories", icon: Building2, label: "Factories" },
    { id: "technicians", icon: Users, label: "Technicians" },
    { id: "disputes", icon: AlertCircle, label: "Disputes" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border fixed h-screen flex flex-col p-4 space-y-6">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="size-10 rounded-lg bg-[image:var(--gradient-accent)] flex items-center justify-center text-primary-foreground font-bold">
            A
          </div>
          <span className="font-semibold">Admin Panel</span>
        </div>

        <nav className="space-y-2 flex-1">
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
              <item.icon className="size-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <div className="border-b border-border bg-card sticky top-0 z-40 p-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Administration Dashboard</h1>
          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">👤</div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Overview */}
          {activePage === "overview" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Total Factories", value: "2,430", trend: "+12%" },
                  { label: "Active Technicians", value: "28,500", trend: "+8%" },
                  { label: "Monthly Revenue", value: "₹2.4 Cr", trend: "+24%" },
                  { label: "Success Rate", value: "99.2%", trend: "+0.5%" },
                ].map((stat) => (
                  <div key={stat.label} className="surface-card p-6">
                    <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                    <div className="text-3xl font-semibold mb-2">{stat.value}</div>
                    <div className="text-xs text-green-600">📈 {stat.trend} this month</div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="surface-card p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  {[
                    { action: "New Factory Registered", details: "XYZ Manufacturing", time: "5 min ago" },
                    { action: "Technician Verified", details: "Ravi K.", time: "1 hour ago" },
                    { action: "Dispute Reported", details: "Invoice #12345", time: "2 hours ago" },
                    { action: "Payment Processed", details: "₹50,000", time: "3 hours ago" },
                  ].map((item) => (
                    <div key={item.action} className="flex justify-between p-3 bg-secondary/30 rounded-lg">
                      <div>
                        <div className="font-semibold text-sm">{item.action}</div>
                        <div className="text-xs text-muted-foreground">{item.details}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{item.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Users Management */}
          {activePage === "users" && (
            <div className="surface-card p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">All Users</h2>
                <button className="px-4 py-2 border border-border rounded-lg hover:bg-secondary text-sm">
                  Export Data
                </button>
              </div>
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex justify-between p-4 bg-secondary/30 rounded-lg">
                    <div>
                      <div className="font-semibold">Factory Name {i + 1}</div>
                      <div className="text-sm text-muted-foreground">user{i}@example.com</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">Active</div>
                      <div className="text-xs text-muted-foreground">Joined 3 months ago</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Factories */}
          {activePage === "factories" && (
            <div className="surface-card p-6">
              <h2 className="text-xl font-semibold mb-6">Factory Management</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-semibold">Factory</th>
                      <th className="text-left p-3 font-semibold">Industry</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                      <th className="text-left p-3 font-semibold">Machines</th>
                      <th className="text-left p-3 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(5)].map((_, i) => (
                      <tr key={i} className="border-b border-border hover:bg-secondary/50">
                        <td className="p-3">ABC Manufacturing {i}</td>
                        <td className="p-3">Automotive</td>
                        <td className="p-3">
                          <span className="px-2 py-1 bg-green-500/20 text-green-600 rounded text-xs font-semibold">
                            Active
                          </span>
                        </td>
                        <td className="p-3">12</td>
                        <td className="p-3">
                          <button className="text-blue-600 hover:underline text-xs font-semibold">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Technicians */}
          {activePage === "technicians" && (
            <div className="surface-card p-6">
              <h2 className="text-xl font-semibold mb-6">Technician Management</h2>
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex justify-between p-4 bg-secondary/30 rounded-lg items-center">
                    <div>
                      <div className="font-semibold">Technician {i + 1}</div>
                      <div className="text-sm text-muted-foreground">⭐ 4.9 rating • 234 jobs completed</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-primary text-primary-foreground rounded text-xs font-semibold">
                        Approve
                      </button>
                      <button className="px-3 py-1 border border-border rounded text-xs font-semibold hover:bg-secondary">
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Disputes */}
          {activePage === "disputes" && (
            <div className="surface-card p-6">
              <h2 className="text-xl font-semibold mb-6">Dispute Resolution</h2>
              <div className="space-y-3">
                {[
                  { id: "#1001", factory: "ABC Mfg", status: "Pending", amount: "₹5,200" },
                  { id: "#1002", factory: "XYZ Plant", status: "Resolved", amount: "₹3,800" },
                ].map((dispute) => (
                  <div key={dispute.id} className="flex justify-between p-4 bg-secondary/30 rounded-lg items-center">
                    <div>
                      <div className="font-semibold">{dispute.id}</div>
                      <div className="text-sm text-muted-foreground">{dispute.factory} • {dispute.amount}</div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          dispute.status === "Pending"
                            ? "bg-yellow-500/20 text-yellow-600"
                            : "bg-green-500/20 text-green-600"
                        }`}
                      >
                        {dispute.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings */}
          {activePage === "settings" && (
            <div className="surface-card p-6">
              <h2 className="text-xl font-semibold mb-6">System Settings</h2>
              <div className="space-y-4">
                {[
                  { label: "Commission Rate", value: "15%" },
                  { label: "Platform Fee", value: "5%" },
                  { label: "Min Technician Rating", value: "4.0/5" },
                  { label: "Escrow Hold Period", value: "7 days" },
                ].map((setting) => (
                  <div key={setting.label} className="flex justify-between p-4 bg-secondary/30 rounded-lg items-center">
                    <span>{setting.label}</span>
                    <input type="text" defaultValue={setting.value} className="px-3 py-1 border border-border rounded" />
                  </div>
                ))}
                <button className="w-full mt-6 bg-primary text-primary-foreground py-2 rounded-lg hover:shadow-[var(--shadow-glow)]">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
