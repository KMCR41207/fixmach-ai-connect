import { createFileRoute } from "@tanstack/react-router";
import { Box, Layers, Truck, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/inventory-management")({
  component: InventoryManagementPage,
});

function InventoryManagementPage() {
  const inventory = [
    { item: "Hydraulic oil", stock: 54, status: "Healthy" },
    { item: "CNC spindle bolts", stock: 12, status: "Low" },
    { item: "PLC modules", stock: 8, status: "Reorder" },
    { item: "Conveyor belts", stock: 21, status: "Healthy" },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1100px,92%)]">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Inventory Management</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track spare parts, reorder critical items, and keep your maintenance stores ready.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4 mb-10">
          {[
            { icon: Truck, label: "Items in stock", value: "95" },
            { icon: Layers, label: "Categories", value: "18" },
            { icon: ShieldCheck, label: "Compliance", value: "100%" },
            { icon: Box, label: "Reorder alerts", value: "3" },
          ].map((metric) => (
            <div key={metric.label} className="surface-card rounded-3xl p-6 text-center">
              <metric.icon className="mx-auto mb-3 size-8 text-primary" />
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="surface-card rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">Critical inventory items</h2>
          <div className="space-y-4">
            {inventory.map((item) => (
              <div key={item.item} className="grid gap-4 rounded-3xl border border-border p-5 md:grid-cols-[1.5fr_1fr_1fr]">
                <div>
                  <div className="text-sm text-muted-foreground">Item</div>
                  <div className="font-semibold">{item.item}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Stock</div>
                  <div className="font-semibold">{item.stock}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Status</div>
                  <div className={`w-fit rounded-full px-3 py-1 text-sm font-semibold ${item.status === "Reorder" ? "bg-amber-200 text-amber-900" : item.status === "Low" ? "bg-orange-200 text-orange-900" : "bg-emerald-200 text-emerald-900"}`}>
                    {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
