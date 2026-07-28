import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Upload, Zap, Download, Share2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/diagnosis")({
  component: DiagnosisPage,
});

function DiagnosisPage() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [showReport, setShowReport] = useState(false);

  const handleUpload = (type: string) => {
    setUploadedFiles([...uploadedFiles, type]);
  };

  const generateReport = () => {
    setShowReport(true);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="mx-auto w-[min(1200px,92%)]">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold mb-2">AI Machine Diagnosis</h1>
          <p className="text-muted-foreground mb-8">Upload machine data for instant AI analysis</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <div className="surface-card p-8 mb-6">
              <h2 className="text-xl font-semibold mb-6">Upload Machine Data</h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: "📷", label: "Images", type: "image" },
                  { icon: "🎥", label: "Videos", type: "video" },
                  { icon: "🔊", label: "Audio", type: "audio" },
                  { icon: "📄", label: "Error Screenshot", type: "screenshot" },
                  { icon: "📋", label: "Maintenance Log", type: "log" },
                  { icon: "📊", label: "Error Code (OCR)", type: "ocr" },
                ].map((item) => (
                  <button
                    key={item.type}
                    onClick={() => handleUpload(item.type)}
                    className="border-2 border-dashed border-border rounded-lg p-6 hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-sm font-medium group-hover:text-primary">{item.label}</div>
                  </button>
                ))}
              </div>

              {uploadedFiles.length > 0 && (
                <div className="bg-secondary/50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold mb-3">Uploaded Files ({uploadedFiles.length})</h3>
                  <div className="flex flex-wrap gap-2">
                    {uploadedFiles.map((file, idx) => (
                      <span key={idx} className="bg-primary/20 text-primary text-sm px-3 py-1 rounded-full">
                        {file}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={generateReport}
                disabled={uploadedFiles.length === 0}
                className="w-full bg-[image:var(--gradient-accent)] text-primary-foreground py-3 px-4 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[var(--shadow-glow)] transition-all flex items-center justify-center gap-2"
              >
                <Zap className="size-5" />
                Generate AI Diagnosis
              </button>
            </div>

            {/* AI Report */}
            {showReport && (
              <div className="surface-card p-8">
                <h2 className="text-xl font-semibold mb-6">AI Diagnosis Report</h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Severity", value: "High", color: "text-red-500" },
                    { label: "Confidence", value: "92%", color: "text-green-500" },
                    { label: "Est. Cost", value: "₹45,000", color: "text-blue-500" },
                    { label: "Est. Time", value: "4.5 hours", color: "text-yellow-500" },
                  ].map((item) => (
                    <div key={item.label} className="bg-secondary/50 p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className={`text-2xl font-semibold ${item.color}`}>{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                  <h3 className="font-semibold text-destructive mb-2">⚠️ Safety Warnings</h3>
                  <p className="text-sm">Hydraulic pressure anomaly detected. Ensure proper lockout before inspection.</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Recommended Spare Parts</h3>
                  <div className="space-y-2">
                    {["Hydraulic Pump Seal Kit", "Pressure Relief Valve", "Filter Assembly"].map((part) => (
                      <div key={part} className="flex items-center gap-2 p-2 bg-secondary/30 rounded">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span className="text-sm">{part}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-[image:var(--gradient-accent)] text-primary-foreground py-2 px-4 rounded-lg font-semibold hover:shadow-[var(--shadow-glow)] transition-all flex items-center justify-center gap-2">
                    <Download className="size-4" />
                    Download PDF
                  </button>
                  <button className="flex-1 border border-border py-2 px-4 rounded-lg font-semibold hover:bg-secondary transition-all flex items-center justify-center gap-2">
                    <Share2 className="size-4" />
                    Share Report
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Chat Sidebar */}
          <div className="lg:col-span-1">
            <div className="surface-card p-6 sticky top-32">
              <h3 className="font-semibold mb-4">AI Assistant</h3>
              <div className="space-y-3 mb-4">
                <div className="bg-secondary/50 p-3 rounded text-sm">
                  <p>Hi! I'm here to help diagnose your machine. Upload data and I'll analyze it instantly.</p>
                </div>
                <div className="bg-primary/10 p-3 rounded text-sm ml-auto w-4/5 text-right">
                  <p>What machine are you diagnosing today?</p>
                </div>
              </div>
              <input
                type="text"
                placeholder="Ask anything..."
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
