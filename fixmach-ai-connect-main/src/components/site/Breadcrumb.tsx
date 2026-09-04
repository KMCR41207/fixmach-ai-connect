import { ChevronRight, Home } from "lucide-react";

export function Breadcrumb({ page }: { page: string }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
      <a href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
        <Home className="size-3" /> Home
      </a>
      <ChevronRight className="size-3" aria-hidden="true" />
      <span className="text-foreground font-medium">{page}</span>
    </nav>
  );
}
