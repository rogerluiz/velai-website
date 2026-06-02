"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer select-none",
          "focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          // Variants
          variant === "primary" && [
            "bg-gold text-navy hover:bg-gold-hover",
            "shadow-[0_2px_12px_rgba(34,211,238,0.25)] hover:shadow-[0_4px_20px_rgba(34,211,238,0.40)] hover:scale-[1.02]",
          ],
          variant === "secondary" && [
            "bg-surface text-slate-900 border border-divider",
            "hover:bg-canvas hover:border-slate-300",
          ],
          variant === "ghost" && ["text-gold hover:bg-gold-muted"],
          variant === "outline" && [
            "border border-gold/40 text-gold hover:bg-gold-muted hover:border-gold",
          ],
          // Sizes
          size === "sm" && "px-4 py-2 text-sm rounded-full",
          size === "md" && "px-6 py-3 text-sm rounded-full",
          size === "lg" && "px-8 py-4 text-base rounded-full",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export { Button };
