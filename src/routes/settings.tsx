import { createFileRoute } from "@tanstack/react-router";
import { Settings as SettingsIcon, User, Lock, Bell, CreditCard, LogOut } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", icon: User, label: "Profile" },
    { id: "security", icon: Lock, label: "Security" },
    { id: "notifications", icon: Bell, label: "Notifications" },
    { id: "billing", icon: CreditCard, label: "Billing" },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <h1 className="text-4xl font-semibold mb-2 flex items-center gap-3">
          <SettingsIcon className="size-8" /> Settings
        </h1>
        <p className="text-muted-foreground mb-8">Manage your account and preferences</p>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="surface-card p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-semibold ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <tab.icon className="size-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Profile Settings */}
            {activeTab === "profile" && (
              <div className="surface-card p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>

                  {/* Profile Picture */}
                  <div className="mb-8 p-6 bg-secondary/30 rounded-lg flex items-center gap-6">
                    <div className="size-20 rounded-full bg-primary/20 flex items-center justify-center text-4xl flex-shrink-0">
                      👤
                    </div>
                    <div>
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold text-sm">
                        Upload Photo
                      </button>
                      <p className="text-xs text-muted-foreground mt-2">JPG, PNG or GIF. Max 5MB.</p>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    {[
                      { label: "Full Name", value: "John Doe" },
                      { label: "Email Address", value: "john@factory.com" },
                      { label: "Phone Number", value: "+91 98765 43210" },
                      { label: "Company Name", value: "ABC Manufacturing Ltd." },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="text-sm font-medium mb-2 block">{field.label}</label>
                        <input
                          type="text"
                          defaultValue={field.value}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                        />
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div className="surface-card p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Security Settings</h2>

                  {/* Change Password */}
                  <div className="mb-8 p-6 bg-secondary/30 rounded-lg">
                    <h3 className="font-semibold mb-4">Change Password</h3>
                    <div className="space-y-3">
                      <input type="password" placeholder="Current password" className="w-full px-4 py-2 border border-border rounded-lg bg-background text-sm" />
                      <input type="password" placeholder="New password" className="w-full px-4 py-2 border border-border rounded-lg bg-background text-sm" />
                      <input type="password" placeholder="Confirm new password" className="w-full px-4 py-2 border border-border rounded-lg bg-background text-sm" />
                      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold text-sm">
                        Update Password
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="p-6 bg-secondary/30 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold">Two-Factor Authentication</h3>
                      <span className="px-2 py-1 bg-green-500/20 text-green-600 rounded text-xs font-semibold">Enabled</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your account is protected with 2FA via authenticator app.
                    </p>
                    <button className="border border-border px-4 py-2 rounded-lg hover:bg-secondary font-semibold text-sm">
                      Manage 2FA
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === "notifications" && (
              <div className="surface-card p-8">
                <h2 className="text-2xl font-semibold mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  {[
                    { label: "Repair Status Updates", desc: "Notifications about your repair progress", enabled: true },
                    { label: "Technician Messages", desc: "New messages from assigned technicians", enabled: true },
                    { label: "Maintenance Reminders", desc: "Scheduled maintenance alerts", enabled: true },
                    { label: "Payment Notifications", desc: "Invoice and payment confirmations", enabled: true },
                    { label: "Promotional Offers", desc: "Special deals and discounts", enabled: false },
                    { label: "Weekly Digest", desc: "Summary of your account activity", enabled: false },
                  ].map((notif) => (
                    <div key={notif.label} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                      <div>
                        <div className="font-semibold text-sm">{notif.label}</div>
                        <p className="text-xs text-muted-foreground">{notif.desc}</p>
                      </div>
                      <button
                        className={`size-6 rounded-full transition-colors ${
                          notif.enabled ? "bg-primary" : "bg-secondary"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Billing Settings */}
            {activeTab === "billing" && (
              <div className="surface-card p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Billing & Payments</h2>

                  {/* Payment Methods */}
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4">Saved Payment Methods</h3>
                    <div className="space-y-3">
                      {[
                        { type: "Visa", last4: "4242", exp: "12/25" },
                        { type: "UPI", last4: "john@upi", exp: "Always active" },
                      ].map((method) => (
                        <div key={method.last4} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                          <div>
                            <div className="font-semibold text-sm">{method.type}</div>
                            <p className="text-xs text-muted-foreground">
                              {method.last4} • Expires {method.exp}
                            </p>
                          </div>
                          <button className="text-red-600 hover:text-red-700 font-semibold text-sm">Remove</button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Billing History */}
                  <div>
                    <h3 className="font-semibold mb-4">Recent Invoices</h3>
                    <div className="space-y-2">
                      {[
                        { id: "INV-001", date: "Dec 15, 2024", amount: "₹5,200", status: "Paid" },
                        { id: "INV-002", date: "Dec 10, 2024", amount: "₹2,800", status: "Paid" },
                        { id: "INV-003", date: "Dec 5, 2024", amount: "₹3,500", status: "Paid" },
                      ].map((invoice) => (
                        <div key={invoice.id} className="flex justify-between p-3 bg-secondary/30 rounded-lg text-sm">
                          <span>{invoice.id}</span>
                          <span className="text-muted-foreground">{invoice.date}</span>
                          <span className="font-semibold">{invoice.amount}</span>
                          <span className="px-2 py-1 bg-green-500/20 text-green-600 rounded text-xs font-semibold">
                            {invoice.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-12 flex justify-end">
          <button className="flex items-center gap-2 px-6 py-3 border border-destructive text-destructive rounded-lg hover:bg-destructive/10 font-semibold">
            <LogOut className="size-5" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
