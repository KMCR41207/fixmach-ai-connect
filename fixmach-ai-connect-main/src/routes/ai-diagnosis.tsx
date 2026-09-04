import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Upload, ScanText, Gauge, IndianRupee, CheckCircle2, UserCheck } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { DiagnosisFlow } from "@/components/site/DiagnosisFlow";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/ai-diagnosis")({
  head: () => ({ meta: [{ title: "AI Diagnosis — FixMach AI" }, { name: "description", content: "Upload machine photos, error codes or describe the fault. Get an AI diagnosis with cost estimate in seconds." }] }),
  component: AIDiagnosisPage,
});

function AIDiagnosisPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto w-[min(1200px,92%)] pt-32 pb-24">
        <Breadcrumb page="AI Diagnosis" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">AI Diagnosis</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          From a photo to a costed repair plan in seconds.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Upload machine photos, error code screenshots, maintenance logs or describe the problem. Our AI analyses the fault, estimates repair cost and dispatches a verified technician.
        </p>
        <DiagnosisFlow />
      </div>
      <Footer />
    </div>
  );
}
