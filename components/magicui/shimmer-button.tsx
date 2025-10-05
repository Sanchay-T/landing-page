"use client";

import React, { ComponentPropsWithoutRef, CSSProperties } from "react";

import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  asChild?: boolean;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "linear-gradient(90deg,#0b0b0f,#151520)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden border border-white/10 px-6 py-3 text-sm font-semibold text-white [background:var(--bg)]",
          "rounded-full transition-transform duration-300 ease-in-out active:translate-y-px",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "-z-30 blur-sm",
            "[container-type:size] absolute inset-0 overflow-visible"
          )}
        >
          <div className="animate-shimmer-slide absolute inset-0 aspect-square h-[100cqh]">
            <div className="animate-spin-around absolute -inset-full w-auto bg-[conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
          </div>
        </div>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <div
          className="absolute inset-0 -z-10 rounded-[inherit] border border-white/10"
          style={{ padding: "var(--cut)" }}
        />
        <div
          className="absolute inset-[var(--cut)] -z-20 rounded-[inherit]"
          style={{ background: "var(--bg)" }}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
