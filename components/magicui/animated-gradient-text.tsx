"use client";

import { ElementType, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type AnimatedGradientTextProps<T extends ElementType> = {
  as?: T;
  from?: string;
  via?: string;
  to?: string;
} & Omit<HTMLAttributes<HTMLElement>, "as">;

export function AnimatedGradientText<T extends ElementType = "span">({
  as,
  className,
  children,
  from = "rgb(var(--brand-accent-rgb))",
  via = "rgba(var(--brand-accent-rgb), 0.65)",
  to = "rgba(255,255,255,0.85)",
  ...props
}: AnimatedGradientTextProps<T>) {
  const Component = (as ?? "span") as ElementType;

  return (
    <Component
      className={cn(
        "relative inline-flex bg-clip-text text-transparent",
        "[background-size:200%_200%]",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(120deg, ${from}, ${via}, ${to})`,
        animation: "gradient-move 8s ease infinite",
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Component>
  );
}

