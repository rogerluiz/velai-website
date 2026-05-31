import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "success" | "warning" | "danger" | "navy" | "muted";
  className?: string;
}

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
        variant === "gold" && "bg-gold-light text-navy border border-gold/30",
        variant === "success" && "bg-success-light text-success",
        variant === "warning" && "bg-warning-light text-warning",
        variant === "danger" && "bg-danger-light text-danger",
        variant === "navy" && "bg-navy text-gold border border-gold/20",
        variant === "muted" && "bg-canvas text-slate-500 border border-divider",
        className
      )}
    >
      {children}
    </span>
  );
}
