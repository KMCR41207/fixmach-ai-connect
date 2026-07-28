import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Mail, Phone, LogIn } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/auth/login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (input.trim()) {
      // Simulate login - in production, call API
      localStorage.setItem("userRole", "owner");
      navigate({ to: "/dashboard/owner" });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="surface-card p-8">
          <h1 className="text-3xl font-semibold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground mb-8">Sign in to your FixMach AI account</p>

          {/* Login Method Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setLoginMethod("email")}
              className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                loginMethod === "email"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              <Mail className="size-4" /> Email OTP
            </button>
            <button
              onClick={() => setLoginMethod("phone")}
              className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                loginMethod === "phone"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              <Phone className="size-4" /> Phone OTP
            </button>
          </div>

          {/* Input Field */}
          <div className="mb-6">
            <label className="text-sm font-medium mb-2 block">
              {loginMethod === "email" ? "Email Address" : "Phone Number"}
            </label>
            <input
              type={loginMethod === "email" ? "email" : "tel"}
              placeholder={loginMethod === "email" ? "you@example.com" : "+91 98765 43210"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background"
            />
          </div>

          {/* Login Buttons */}
          <button
            onClick={handleLogin}
            className="w-full bg-[image:var(--gradient-accent)] text-primary-foreground py-2 px-4 rounded-lg font-semibold mb-3 hover:shadow-[var(--shadow-glow)] transition-all"
          >
            <LogIn className="inline mr-2 size-4" />
            Send OTP
          </button>

          {/* Social Login */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="py-2 px-4 border border-border rounded-lg hover:bg-secondary transition-colors">
              Google
            </button>
            <button className="py-2 px-4 border border-border rounded-lg hover:bg-secondary transition-colors">
              Microsoft
            </button>
          </div>

          {/* Role Selection */}
          <p className="text-sm text-muted-foreground mb-4">Signing in as:</p>
          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 px-4 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors">
              <div className="font-semibold text-sm">Factory Owner</div>
              <div className="text-xs text-muted-foreground">Manage machines</div>
            </button>
            <button className="py-3 px-4 border border-border rounded-lg hover:bg-secondary transition-colors">
              <div className="font-semibold text-sm">Technician</div>
              <div className="text-xs text-muted-foreground">Accept jobs</div>
            </button>
          </div>

          <p className="text-sm text-center mt-6 text-muted-foreground">
            New to FixMach?{" "}
            <button
              onClick={() => navigate({ to: "/auth/register" })}
              className="text-primary hover:underline font-semibold"
            >
              Create account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
