import { createFileRoute } from "@tanstack/react-router";
import { Download, Eye, Filter } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/invoices")({
  component: InvoicesPage,
});

function InvoicesPage() {
  const [filter, setFilter] = useState("all");

  const invoices = [
    {
      id: "INV-001",
      date: "Dec 15, 2024",
      amount: "₹5,200",
      status: "Paid",
      machine: "CNC X200",
      technician: "Ravi K.",
    },
    {
      id: "INV-002",
      date: "Dec 10, 2024",
      amount: "₹2,800",
      status: "Paid",
      machine: "Hydraulic Press",
      technician: "Priya M.",
    },
    {
      id: "INV-003",
      date: "Dec 5, 2024",
      amount: "₹3,500",
      status: "Pending",
      machine: "Packaging Machine",
      technician: "Amit S.",
    },
    {
      id: "INV-004",
      date: "Nov 30, 2024",
      amount: "₹1,800",
      status: "Paid",
      machine: "Conveyor System",
      technician: "Ravi K.",
    },
  ];

  const filtered =
    filter === "all" ? invoices : invoices.filter((inv) => inv.status.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <h1 className="text-4xl font-semibold mb-2">Invoices & Billing</h1>
        <p className="text-muted-foreground mb-8">View and manage your repair invoices</p>

        <div className="flex gap-2 mb-8">
          {["all", "paid", "pending"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:bg-secondary"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="surface-card overflow-hidden">
          <table className="w-full">
            <thead className="bg-secondary/30">
              <tr>
                <th className="text-left p-4 font-semibold">Invoice ID</th>
                <th className="text-left p-4 font-semibold">Date</th>
                <th className="text-left p-4 font-semibold">Machine</th>
                <th className="text-left p-4 font-semibold">Technician</th>
                <th className="text-left p-4 font-semibold">Amount</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-left p-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((inv) => (
                <tr key={inv.id} className="border-t border-border hover:bg-secondary/20">
                  <td className="p-4 font-semibold">{inv.id}</td>
                  <td className="p-4 text-muted-foreground">{inv.date}</td>
                  <td className="p-4">{inv.machine}</td>
                  <td className="p-4">{inv.technician}</td>
                  <td className="p-4 font-semibold">{inv.amount}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        inv.status === "Paid"
                          ? "bg-green-500/20 text-green-600"
                          : "bg-yellow-500/20 text-yellow-600"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="p-4 flex gap-2">
                    <button className="p-2 hover:bg-secondary rounded-lg">
                      <Eye className="size-4" />
                    </button>
                    <button className="p-2 hover:bg-secondary rounded-lg">
                      <Download className="size-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
