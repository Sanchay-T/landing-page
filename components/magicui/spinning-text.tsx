"use client";

import { ComponentPropsWithoutRef } from "react";
import { motion, Transition, Variants } from "motion/react";

import { cn } from "@/lib/utils";

interface SpinningTextProps extends ComponentPropsWithoutRef<"div"> {
  children: string | string[];
  duration?: number;
  reverse?: boolean;
  radius?: number;
  transition?: Transition;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
}

const BASE_TRANSITION: Transition = {
  repeat: Infinity,
  ease: "linear",
};

const BASE_ITEM_VARIANTS: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export function SpinningText({
  children,
  duration = 10,
  reverse = false,
  radius = 5,
  transition,
  variants,
  className,
  style,
}: SpinningTextProps) {
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error("SpinningText: children must be a string or array of strings");
  }

  const content = Array.isArray(children) ? children.join("") : children;
  const letters = content.split("");
  letters.push(" ");

  const finalTransition: Transition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: transition?.duration ?? duration,
  };

  const containerVariants: Variants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  };

  const itemVariants: Variants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  return (
    <motion.div
      className={cn("relative", className)}
      style={style}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={finalTransition}
    >
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          key={`${index}-${letter}`}
          variants={itemVariants}
          className="absolute top-1/2 left-1/2 inline-block"
          style={{
            transform: `translate(-50%, -50%) rotate(${(360 / letters.length) * index}deg) translateY(${radius * -1}ch)`,
            transformOrigin: "center",
          }}
        >
          {letter}
        </motion.span>
      ))}
      <span className="sr-only">{content}</span>
    </motion.div>
  );
}
