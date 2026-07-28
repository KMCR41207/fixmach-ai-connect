import { createFileRoute } from "@tanstack/react-router";
import { Bell, CheckCircle, AlertCircle, Info, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/notifications")({
  component: NotificationsPage,
});

function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "success",
      icon: CheckCircle,
      title: "Repair Completed",
      message: "Your CNC machine repair has been completed successfully.",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      type: "info",
      icon: MessageSquare,
      title: "Technician Message",
      message: "Ravi K. sent you a message: 'Ready for the CNC job tomorrow?'",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "alert",
      icon: AlertCircle,
      title: "Maintenance Due",
      message: "Your Hydraulic Press needs routine maintenance. Schedule now.",
      time: "1 day ago",
      read: true,
    },
    {
      id: 4,
      type: "info",
      icon: Clock,
      title: "Booking Confirmation",
      message: "Technician Priya M. has accepted your repair booking.",
      time: "2 days ago",
      read: true,
    },
    {
      id: 5,
      type: "success",
      icon: CheckCircle,
      title: "Payment Received",
      message: "Payment of ₹5,200 has been processed successfully.",
      time: "3 days ago",
      read: true,
    },
    {
      id: 6,
      type: "info",
      icon: Info,
      title: "System Update",
      message: "FixMach AI has been updated with new features.",
      time: "1 week ago",
      read: true,
    },
  ];

  const filtered =
    activeTab === "all"
      ? notifications
      : activeTab === "unread"
        ? notifications.filter((n) => !n.read)
        : notifications.filter((n) => n.type === activeTab);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)] max-w-3xl">
        <h1 className="text-4xl font-semibold mb-2 flex items-center gap-3">
          <Bell className="size-8" /> Notifications
        </h1>
        <p className="text-muted-foreground mb-8">Stay updated with your repairs, bookings, and messages</p>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-border overflow-x-auto">
          {[
            { id: "all", label: "All" },
            { id: "unread", label: "Unread" },
            { id: "success", label: "Completed" },
            { id: "alert", label: "Important" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map((notif) => (
              <div
                key={notif.id}
                className={`surface-card p-4 hover:shadow-[var(--shadow-glow)] transition-all cursor-pointer ${
                  !notif.read ? "border-l-4 border-primary bg-primary/5" : ""
                }`}
              >
                <div className="flex gap-4">
                  <div
                    className={`size-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      notif.type === "success"
                        ? "bg-green-500/20"
                        : notif.type === "alert"
                          ? "bg-destructive/20"
                          : "bg-blue-500/20"
                    }`}
                  >
                    <notif.icon
                      className={`size-5 ${
                        notif.type === "success"
                          ? "text-green-600"
                          : notif.type === "alert"
                            ? "text-destructive"
                            : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-semibold">{notif.title}</div>
                        <p className="text-sm text-muted-foreground mt-1">{notif.message}</p>
                      </div>
                      {!notif.read && <div className="size-2 bg-primary rounded-full mt-2 flex-shrink-0" />}
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">{notif.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Bell className="size-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">No {activeTab === "all" ? "" : activeTab} notifications yet</p>
          </div>
        )}

        {/* Settings */}
        <div className="mt-12 surface-card p-6">
          <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
          <div className="space-y-3">
            {[
              { label: "Repair Status Updates", enabled: true },
              { label: "Technician Messages", enabled: true },
              { label: "Maintenance Reminders", enabled: true },
              { label: "Payment Notifications", enabled: true },
              { label: "Promotional Offers", enabled: false },
            ].map((pref) => (
              <div key={pref.label} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                <span className="text-sm">{pref.label}</span>
                <button
                  className={`size-6 rounded-full ${
                    pref.enabled ? "bg-primary" : "bg-secondary"
                  } transition-colors`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
