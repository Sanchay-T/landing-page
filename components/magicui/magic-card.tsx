"use client";

import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface MagicCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export const MagicCard = forwardRef<HTMLDivElement, MagicCardProps>(
  ({ className, children, glow = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-3xl border border-white/10 bg-background/70 p-6",
          "shadow-[0_30px_80px_-48px_rgb(var(--brand-accent-rgb)/0.65)]",
          "backdrop-blur-sm",
          className
        )}
        {...props}
      >
        {glow ? (
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_top,rgba(var(--brand-accent-rgb),0.18),transparent_65%)] opacity-80" />
        ) : null}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    );
  }
);

MagicCard.displayName = "MagicCard";

