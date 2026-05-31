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
    ref
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
            "shadow-[0_2px_12px_rgba(246,185,26,0.3)] hover:shadow-[0_4px_20px_rgba(246,185,26,0.45)]",
          ],
          variant === "secondary" && [
            "bg-surface text-slate-900 border border-divider",
            "hover:bg-canvas hover:border-slate-300",
          ],
          variant === "ghost" && [
            "text-gold hover:bg-gold-muted",
          ],
          variant === "outline" && [
            "border border-gold/40 text-gold hover:bg-gold-muted hover:border-gold",
          ],
          // Sizes
          size === "sm" && "px-4 py-2 text-sm rounded-md",
          size === "md" && "px-6 py-3 text-sm rounded-lg",
          size === "lg" && "px-8 py-4 text-base rounded-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
