import { createFileRoute } from "@tanstack/react-router";
import { Star, MessageCircle, TrendingUp } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
});

function ReviewsPage() {
  const [activeTab, setActiveTab] = useState("given");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const givenReviews = [
    {
      id: 1,
      for: "Ravi K. (Technician)",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent work! Fixed our CNC in record time. Very professional.",
    },
    {
      id: 2,
      for: "Priya M. (Technician)",
      rating: 4,
      date: "1 week ago",
      comment: "Good service, though could have been faster.",
    },
  ];

  const receivedReviews = [
    {
      id: 1,
      from: "Technician",
      rating: 5,
      date: "3 days ago",
      comment: "Great facility and equipment. Easy to work with management.",
    },
    {
      id: 2,
      from: "Technician",
      rating: 4,
      date: "1 week ago",
      comment: "Professional setup. Payment processing could be faster.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)] max-w-3xl">
        <h1 className="text-4xl font-semibold mb-2 flex items-center gap-3">
          <Star className="size-8" /> Reviews & Ratings
        </h1>
        <p className="text-muted-foreground mb-8">View and manage your reviews from technicians and factories</p>

        {/* Rating Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Your Rating", value: "4.6/5" },
            { label: "Total Reviews", value: "12" },
            { label: "5-Star Reviews", value: "8" },
            { label: "Trust Score", value: "92%" },
          ].map((stat) => (
            <div key={stat.label} className="surface-card p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border mb-6 overflow-x-auto">
          {[
            { id: "given", label: "Reviews You've Given" },
            { id: "received", label: "Reviews You've Received" },
            { id: "write", label: "Write a Review" },
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

        {/* Content */}
        {activeTab === "given" && (
          <div className="space-y-4">
            {givenReviews.length > 0 ? (
              givenReviews.map((review) => (
                <div key={review.id} className="surface-card p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-semibold">{review.for}</div>
                      <div className="text-xs text-muted-foreground">{review.date}</div>
                    </div>
                    <div className="flex gap-1">
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
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <MessageCircle className="size-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">No reviews yet. Complete a repair to leave a review!</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "received" && (
          <div className="space-y-4">
            {receivedReviews.length > 0 ? (
              receivedReviews.map((review) => (
                <div key={review.id} className="surface-card p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-semibold">{review.from}</div>
                      <div className="text-xs text-muted-foreground">{review.date}</div>
                    </div>
                    <div className="flex gap-1">
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
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <TrendingUp className="size-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">No reviews received yet.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "write" && (
          <div className="surface-card p-8">
            <h2 className="text-2xl font-semibold mb-6">Write a Review</h2>
            <div className="space-y-6">
              {/* Select Person/Entity */}
              <div>
                <label className="text-sm font-medium mb-2 block">Who are you reviewing?</label>
                <select className="w-full px-4 py-2 border border-border rounded-lg bg-background">
                  <option>Ravi K. - CNC Repair on Dec 10</option>
                  <option>Priya M. - Hydraulic Fix on Dec 5</option>
                </select>
              </div>

              {/* Rating */}
              <div>
                <label className="text-sm font-medium mb-3 block">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`size-8 ${
                          star <= rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="text-sm font-medium mb-2 block">Your Review (Optional)</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience. What went well? What could be improved?"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background h-32"
                />
              </div>

              {/* Aspects */}
              <div>
                <label className="text-sm font-medium mb-3 block">How was the experience?</label>
                <div className="space-y-2">
                  {[
                    { label: "Professionalism", value: "professional" },
                    { label: "Timeliness", value: "timely" },
                    { label: "Quality of Work", value: "quality" },
                    { label: "Communication", value: "communication" },
                  ].map((aspect) => (
                    <div key={aspect.value} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                      <span className="text-sm">{aspect.label}</span>
                      <select className="px-2 py-1 border border-border rounded bg-background text-xs">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Average</option>
                        <option>Poor</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold">
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
