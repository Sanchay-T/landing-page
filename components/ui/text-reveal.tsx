"use client";

import { ComponentPropsWithoutRef, useMemo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  /** height of the scroll container in viewport height units */
  viewportHeight?: number;
}

export function TextReveal({
  children,
  className,
  viewportHeight = 200,
  ...props
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const prefersReducedMotion = useReducedMotion();
  const words = useMemo(() => children.split(" "), [children]);

  if (prefersReducedMotion) {
    return (
      <div
        ref={containerRef}
        className={cn("mx-auto max-w-4xl px-4", className)}
        {...props}
      >
        <p className="text-balance text-xl font-semibold text-foreground md:text-2xl lg:text-3xl">
          {children}
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative z-0", className)}
      style={{ height: `${viewportHeight}vh` }}
      {...props}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center px-4 py-10">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-2 gap-y-3 text-center text-balance text-2xl font-semibold text-foreground/15 md:text-3xl lg:text-4xl">
          {words.map((word, index) => (
            <RevealWord
              key={`${word}-${index}`}
              index={index}
              total={words.length}
              progress={scrollYProgress}
            >
              {word}
            </RevealWord>
          ))}
        </div>
      </div>
    </div>
  );
}

interface RevealWordProps {
  children: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function RevealWord({ children, index, total, progress }: RevealWordProps) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0, 1], {
    clamp: true,
  });

  return (
    <span className="relative inline-block">
      <span className="absolute inset-0 text-foreground/20">{children}</span>
      <motion.span style={{ opacity }} className="text-foreground">
        {children}
      </motion.span>
    </span>
  );
}
