"use client";

import {
  ComponentPropsWithoutRef,
  CSSProperties,
  useId,
} from "react";

import { cn } from "@/lib/utils";

interface SpinningTextProps extends ComponentPropsWithoutRef<"div"> {
  children: string | string[];
  duration?: number;
  reverse?: boolean;
  /**
   * Radius of the circle path inside the SVG viewBox (0-45).
   */
  radius?: number;
  textClassName?: string;
}

export function SpinningText({
  children,
  duration = 12,
  reverse = false,
  radius = 42,
  className,
  textClassName,
  style,
  ...props
}: SpinningTextProps) {
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error(
      "SpinningText: children must be a string or array of strings"
    );
  }

  const id = useId();
  const content = Array.isArray(children)
    ? children.join(" ").trim()
    : children.trim();
  const textContent = content.endsWith(" ") ? content : `${content} `;

  const clampedRadius = Math.min(Math.max(radius, 6), 45);
  const pathDefinition = `M 50 50 m -${clampedRadius},0 a ${clampedRadius},${clampedRadius} 0 1,1 ${
    clampedRadius * 2
  },0 a ${clampedRadius},${clampedRadius} 0 1,1 -${clampedRadius * 2},0`;

  const animationStyles: CSSProperties = {
    animation: `spinning-text-rotate ${duration}s linear infinite`,
    animationDirection: reverse ? "reverse" : "normal",
    willChange: "transform",
  };

  const combinedStyle = style
    ? ({ ...style, ...animationStyles } as CSSProperties)
    : animationStyles;

  const svgTextClasses = cn(
    "fill-current",
    textClassName ?? undefined
  );

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className
      )}
      style={combinedStyle}
      {...props}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        <defs>
          <path id={id} d={pathDefinition} />
        </defs>
        <text
          className={svgTextClasses}
          style={{ fontSize: "1em", letterSpacing: "0.3em" }}
        >
          <textPath xlinkHref={`#${id}`} startOffset="0%">
            {textContent}
          </textPath>
        </text>
      </svg>
      <span className="sr-only">{content}</span>
    </div>
  );
}
