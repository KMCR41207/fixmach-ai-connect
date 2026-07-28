import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Star, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/feedback")({
  component: FeedbackPage,
});

function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setRating(0);
      setFeedback("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)] max-w-2xl">
        <h1 className="text-4xl font-semibold mb-2 flex items-center gap-3">
          <MessageCircle className="size-8" /> Share Your Feedback
        </h1>
        <p className="text-muted-foreground mb-12">Help us improve FixMach by sharing your suggestions and experience</p>

        {!submitted ? (
          <div className="surface-card p-8">
            <div className="mb-8">
              <label className="text-sm font-medium mb-3 block">How satisfied are you with FixMach?</label>
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

            <div className="mb-8">
              <label className="text-sm font-medium mb-2 block">Your Feedback</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="What can we improve? What did you like most?"
                className="w-full px-4 py-3 border border-border rounded-lg bg-background h-40"
              />
            </div>

            <div className="mb-8">
              <label className="text-sm font-medium mb-3 block">What aspect did you want to feedback on?</label>
              <div className="space-y-2">
                {["Platform Usability", "Technician Quality", "Pricing", "Customer Support", "Other"].map((option) => (
                  <label key={option} className="flex items-center gap-3 p-2">
                    <input type="radio" name="aspect" className="size-4" defaultChecked={option === "Platform Usability"} />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold flex items-center justify-center gap-2"
            >
              <Send className="size-5" /> Submit Feedback
            </button>
          </div>
        ) : (
          <div className="surface-card p-8 text-center">
            <div className="text-5xl mb-4">🙏</div>
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-muted-foreground">Your feedback helps us build a better platform for everyone</p>
          </div>
        )}

        {/* Recent Feedback */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recent Feedback Highlights</h2>
          <div className="space-y-4">
            {[
              {
                author: "Factory Manager",
                rating: 5,
                text: "Excellent service! Our downtime has reduced significantly.",
              },
              {
                author: "Plant Owner",
                rating: 4,
                text: "Great platform. Would love more detailed analytics.",
              },
              { author: "Technician", rating: 5, text: "Easy to use and excellent earning opportunity!" },
            ].map((item, idx) => (
              <div key={idx} className="surface-card p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold">{item.author}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < item.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
