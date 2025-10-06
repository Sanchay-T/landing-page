"use client";

import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface TextHighlighterProps extends ComponentPropsWithoutRef<"span"> {
  accentColor?: string;
  offset?: string;
}

export function TextHighlighter({
  children,
  className,
  accentColor = "rgb(var(--brand-accent-rgb))",
  offset = "0.4em",
  ...props
}: TextHighlighterProps) {
  return (
    <span
      className={cn(
        "relative inline-block font-medium",
        "after:absolute after:left-0 after:bottom-0 after:-z-10 after:h-2/3 after:w-full after:rounded-lg",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(transparent calc(100% - ${offset}), ${accentColor} calc(100% - ${offset}))`,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
