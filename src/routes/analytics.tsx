import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, BarChart3, PieChart, Activity, AlertTriangle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/analytics")({
  component: AnalyticsPage,
});

function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30days");

  const metrics = [
    {
      label: "Total Repairs",
      value: "124",
      change: "+12%",
      icon: BarChart3,
      trend: "up",
    },
    {
      label: "Avg Downtime",
      value: "2.3 hrs",
      change: "-8%",
      icon: Activity,
      trend: "down",
    },
    {
      label: "Success Rate",
      value: "98.5%",
      change: "+2.1%",
      icon: TrendingUp,
      trend: "up",
    },
    {
      label: "Cost Saved",
      value: "₹4.2L",
      change: "+15%",
      icon: PieChart,
      trend: "up",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-semibold mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Detailed insights about your factory's performance</p>
          </div>
          <div className="flex gap-2">
            {["7days", "30days", "90days", "1year"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  timeRange === range
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                {range === "7days"
                  ? "7D"
                  : range === "30days"
                    ? "30D"
                    : range === "90days"
                      ? "90D"
                      : "1Y"}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="surface-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                  <div className="text-3xl font-bold">{metric.value}</div>
                </div>
                <metric.icon className="size-6 text-primary" />
              </div>
              <div
                className={`text-sm font-semibold ${
                  metric.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.trend === "up" ? "📈" : "📉"} {metric.change} vs last period
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Repair Trend */}
          <div className="lg:col-span-2 surface-card p-6">
            <h2 className="text-xl font-semibold mb-4">Repairs Over Time</h2>
            <div className="h-64 bg-secondary/30 rounded-lg flex items-end justify-around p-4">
              {[40, 35, 50, 45, 60, 55, 70].map((val, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className="bg-primary rounded-t w-6 transition-all hover:bg-primary/80"
                    style={{ height: `${(val / 70) * 200}px` }}
                  />
                  <span className="text-xs mt-2 text-muted-foreground">Week {idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Machine Health */}
          <div className="surface-card p-6">
            <h2 className="text-xl font-semibold mb-4">Machine Health Score</h2>
            <div className="space-y-4">
              {[
                { name: "CNC X200", score: 95 },
                { name: "Hydraulic", score: 87 },
                { name: "Packaging", score: 92 },
              ].map((machine) => (
                <div key={machine.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{machine.name}</span>
                    <span className="font-semibold">{machine.score}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${machine.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Repair Categories */}
          <div className="surface-card p-6">
            <h2 className="text-xl font-semibold mb-4">Repairs by Category</h2>
            <div className="space-y-3">
              {[
                { category: "Preventive", count: 45, pct: 36 },
                { category: "Corrective", count: 58, pct: 47 },
                { category: "Emergency", count: 21, pct: 17 },
              ].map((cat) => (
                <div key={cat.category} className="p-3 bg-secondary/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{cat.category}</span>
                    <span className="text-xs font-bold text-primary">{cat.count}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${cat.pct}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{cat.pct}% of total</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Analysis */}
          <div className="surface-card p-6">
            <h2 className="text-xl font-semibold mb-4">Cost Analysis</h2>
            <div className="space-y-3">
              {[
                { label: "Service Fees", amount: "₹3.2L", pct: 45 },
                { label: "Parts & Materials", amount: "₹2.8L", pct: 40 },
                { label: "Travel Charges", amount: "₹0.7L", pct: 10 },
                { label: "Other", amount: "₹0.3L", pct: 5 },
              ].map((cost) => (
                <div key={cost.label} className="p-3 bg-secondary/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{cost.label}</span>
                    <span className="font-bold text-primary">{cost.amount}</span>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">{cost.pct}% of total spend</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Issues & Alerts */}
        <div className="mt-8 surface-card p-6 border-l-4 border-destructive">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="size-5 text-destructive" /> Critical Alerts
          </h2>
          <div className="space-y-3">
            {[
              { alert: "Hydraulic Press needs maintenance", priority: "High", date: "Today" },
              { alert: "CNC bearing showing wear signs", priority: "Medium", date: "Yesterday" },
            ].map((item) => (
              <div key={item.alert} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                <span>{item.alert}</span>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      item.priority === "High"
                        ? "bg-destructive/20 text-destructive"
                        : "bg-yellow-500/20 text-yellow-600"
                    }`}
                  >
                    {item.priority}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
