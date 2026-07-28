import { createFileRoute, useNavigate } from "@antml/react-router";
import { Star, MapPin, Phone, MessageCircle, Video, Award } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/technician/$id")({
  component: TechnicianProfilePage,
});

function TechnicianProfilePage() {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);

  // Mock technician data
  const technician = {
    name: "Ravi K.",
    rating: 4.9,
    reviews: 234,
    experience: "8+ years",
    specializations: ["CNC Machines", "Hydraulic Systems", "PLC & Controls"],
    languages: ["English", "Hindi", "Marathi"],
    availability: "Available now",
    serviceRadius: "15 km",
    hourlyRate: "₹500/hr",
    responseTime: "5-15 min",
    completionRate: "98.5%",
    location: "Mumbai, Maharashtra",
    certifications: [
      "ISO 9001 Certified",
      "CNC Specialist",
      "Hydraulic Systems Expert",
      "PLC Programming",
    ],
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <button
          onClick={() => navigate({ to: "/" })}
          className="text-primary hover:underline mb-6 text-sm"
        >
          ← Back
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="surface-card p-8 mb-6">
              <div className="flex items-start gap-6 mb-6">
                <div className="size-24 rounded-full bg-primary/20 flex items-center justify-center text-5xl">
                  👨‍🔧
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-semibold mb-1">{technician.name}</h1>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-semibold">{technician.rating}</span>
                    <span className="text-muted-foreground">({technician.reviews} reviews)</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>🏆 {technician.experience} experience</div>
                    <div>✅ Completion Rate: {technician.completionRate}</div>
                    <div>📍 {technician.location}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-semibold text-primary mb-2">{technician.hourlyRate}</div>
                  <div className="text-xs text-muted-foreground">Hourly rate</div>
                </div>
              </div>

              {/* Status */}
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg mb-6">
                <div className="flex items-center gap-2">
                  <span className="size-2 bg-green-600 rounded-full"></span>
                  <span className="font-semibold text-green-600">{technician.availability}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button className="bg-primary text-primary-foreground py-3 rounded-lg hover:shadow-[var(--shadow-glow)] flex items-center justify-center gap-2 font-semibold">
                  <Phone className="size-5" /> Call
                </button>
                <button
                  onClick={() => setShowChat(true)}
                  className="border border-border py-3 rounded-lg hover:bg-secondary flex items-center justify-center gap-2 font-semibold"
                >
                  <MessageCircle className="size-5" /> Chat
                </button>
                <button className="border border-border py-3 rounded-lg hover:bg-secondary flex items-center justify-center gap-2 font-semibold">
                  <Video className="size-5" /> Video
                </button>
              </div>
            </div>

            {/* Specializations */}
            <div className="surface-card p-8 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Machine Specializations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {technician.specializations.map((spec) => (
                  <div key={spec} className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="font-semibold text-sm">{spec}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="surface-card p-8 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Certifications & Credentials</h2>
              <div className="space-y-2">
                {technician.certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                    <Award className="size-5 text-primary" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="surface-card p-8">
              <h2 className="text-2xl font-semibold mb-4">Recent Reviews</h2>
              <div className="space-y-4">
                {[
                  {
                    author: "ABC Manufacturing",
                    rating: 5,
                    text: "Excellent work. Fixed our CNC in record time. Highly recommended!",
                    date: "3 days ago",
                  },
                  {
                    author: "XYZ Factory",
                    rating: 5,
                    text: "Very professional and knowledgeable. Great communication.",
                    date: "1 week ago",
                  },
                  {
                    author: "Plant Manager",
                    rating: 4,
                    text: "Good service. Could have been faster but very thorough.",
                    date: "2 weeks ago",
                  },
                ].map((review, idx) => (
                  <div key={idx} className="p-4 bg-secondary/30 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="font-semibold">{review.author}</div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Info */}
            <div className="surface-card p-6">
              <h3 className="font-semibold mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Response Time", value: technician.responseTime },
                  { label: "Service Radius", value: technician.serviceRadius },
                  { label: "Languages", value: technician.languages.join(", ") },
                  { label: "Completed Jobs", value: "234" },
                  { label: "Avg Rating", value: `${technician.rating}/5` },
                ].map((item) => (
                  <div key={item.label} className="p-3 bg-secondary/30 rounded-lg">
                    <div className="text-muted-foreground text-xs mb-1">{item.label}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hire Button */}
            <button
              onClick={() => navigate({ to: "/booking" })}
              className="w-full bg-[image:var(--gradient-accent)] text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-[var(--shadow-glow)]"
            >
              Hire This Technician
            </button>

            {/* Availability Calendar */}
            <div className="surface-card p-6">
              <h3 className="font-semibold mb-4">Availability</h3>
              <div className="text-sm">
                <div className="mb-3">
                  <div className="text-muted-foreground text-xs mb-2">This Week</div>
                  <div className="grid grid-cols-7 gap-1">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <div
                        key={day}
                        className="aspect-square flex items-center justify-center rounded bg-primary text-primary-foreground text-xs font-semibold cursor-pointer hover:shadow-[var(--shadow-glow)]"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Location Map */}
            <div className="surface-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <MapPin className="size-4" /> Servicearea
              </h3>
              <div className="w-full h-40 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🗺️</span>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Covers {technician.serviceRadius} radius from {technician.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed bottom-5 right-5 surface-card w-80 h-96 flex flex-col rounded-xl shadow-2xl">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="font-semibold">Chat with {technician.name}</div>
            <button onClick={() => setShowChat(false)} className="text-muted-foreground hover:text-foreground">
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <div className="bg-secondary/30 p-3 rounded max-w-xs">
              <p className="text-sm">Hi! How can I help you?</p>
            </div>
          </div>
          <div className="p-4 border-t border-border">
            <input type="text" placeholder="Type your message..." className="w-full px-3 py-2 border border-border rounded-lg text-sm" />
          </div>
        </div>
      )}
    </div>
  );
}
