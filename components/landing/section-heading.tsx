"use client";

import { TextAnimate, type TextAnimateProps } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowClassName?: string;
  title: string;
  titleClassName?: string;
  description?: string;
  descriptionClassName?: string;
  className?: string;
  align?: "left" | "center" | "right";
  titleDelay?: number;
  descriptionDelay?: number;
  titleBy?: TextAnimateProps["by"];
  descriptionBy?: TextAnimateProps["by"];
  titleAnimation?: TextAnimateProps["animation"];
  descriptionAnimation?: TextAnimateProps["animation"];
  once?: boolean;
}

export function SectionHeading({
  eyebrow,
  eyebrowClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  className,
  align = "left",
  titleDelay = 0.1,
  descriptionDelay = 0.2,
  titleBy = "word",
  descriptionBy = "line",
  titleAnimation = "blurInUp",
  descriptionAnimation = "slideUp",
  once = true,
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center"
      ? "text-center"
      : align === "right"
        ? "text-right items-end"
        : "text-left";

  return (
    <div className={cn("flex flex-col gap-3", alignmentClass, className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.24em] text-primary/70",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <TextAnimate
        as="h2"
        className={cn("text-3xl font-semibold leading-tight text-foreground md:text-4xl", titleClassName)}
        animation={titleAnimation}
        by={titleBy}
        delay={titleDelay}
        duration={0.6}
        once={once}
      >
        {title}
      </TextAnimate>
      {description ? (
        <TextAnimate
          as="p"
          className={cn("text-sm text-muted-foreground md:text-base", descriptionClassName)}
          animation={descriptionAnimation}
          by={descriptionBy}
          delay={descriptionDelay}
          duration={0.6}
          once={once}
        >
          {description}
        </TextAnimate>
      ) : null}
    </div>
  );
}
