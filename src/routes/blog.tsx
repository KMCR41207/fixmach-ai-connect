import { createFileRoute } from "@tanstack/react-router";
import { Calendar, User, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "5 Ways to Reduce Machine Downtime in 2025",
      excerpt: "Industry experts share proven strategies to minimize production losses.",
      author: "Sarah Chen",
      date: "Jan 15, 2025",
      category: "Industry Tips",
      image: "📊",
    },
    {
      id: 2,
      title: "AI Diagnostics: The Future of Preventive Maintenance",
      excerpt: "How machine learning is transforming factory maintenance schedules.",
      author: "Rajesh Kumar",
      date: "Jan 10, 2025",
      category: "Technology",
      image: "🤖",
    },
    {
      id: 3,
      title: "Case Study: ABC Manufacturing Saves ₹50L Annually",
      excerpt: "Real-world results from a factory that switched to predictive maintenance.",
      author: "Priya Sharma",
      date: "Jan 5, 2025",
      category: "Case Study",
      image: "📈",
    },
    {
      id: 4,
      title: "Technician Spotlight: Meet Ravi K., Our Top Performer",
      excerpt: "Interview with the #1 technician on FixMach about skills and success.",
      author: "Admin Team",
      date: "Dec 28, 2024",
      category: "People",
      image: "👨‍🔧",
    },
    {
      id: 5,
      title: "New Feature: AI-Powered Parts Recommendations",
      excerpt: "We've launched smart spare parts suggestions based on machine diagnostics.",
      author: "Tech Team",
      date: "Dec 20, 2024",
      category: "Product Updates",
      image: "🎉",
    },
    {
      id: 6,
      title: "Industry Report: Manufacturing Trends in India",
      excerpt: "Comprehensive analysis of the current manufacturing landscape.",
      author: "Research Team",
      date: "Dec 15, 2024",
      category: "Research",
      image: "📋",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">FixMach Blog</h1>
          <p className="text-xl text-muted-foreground">
            Industry insights, tips, and updates from the FixMach team
          </p>
        </div>

        {/* Featured Post */}
        <div className="surface-card mb-12 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <span className="text-primary font-semibold text-sm mb-2">FEATURED</span>
              <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
              <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="size-4" />
                  {posts[0].author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="size-4" />
                  {posts[0].date}
                </div>
              </div>
            </div>
            <div className="bg-primary/10 flex items-center justify-center text-8xl">
              {posts[0].image}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <div key={post.id} className="surface-card p-6 hover:shadow-[var(--shadow-glow)] transition-all cursor-pointer">
              <div className="text-5xl mb-4">{post.image}</div>
              <span className="text-xs font-semibold text-primary">{post.category}</span>
              <h3 className="text-lg font-bold my-3">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="surface-card p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">Get industry insights and FixMach updates weekly</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 border border-border rounded-lg bg-background"
            />
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:shadow-[var(--shadow-glow)] font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
