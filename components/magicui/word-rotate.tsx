"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  className?: string;
  textClassName?: string;
  duration?: number;
}

export function WordRotate({
  words,
  className,
  textClassName,
  duration = 2500,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const longestWord = useMemo(() => {
    if (words.length === 0) return "";

    return words.reduce(
      (longest, candidate) =>
        candidate.length > longest.length ? candidate : longest,
      words[0],
    );
  }, [words]);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(timer);
  }, [words, duration]);

  const currentWord = words[index] ?? "";

  return (
    <span
      className={cn(
        "relative inline-grid overflow-hidden align-baseline",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none select-none whitespace-nowrap opacity-0",
          textClassName,
        )}
      >
        {longestWord}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className={cn(
            "col-start-1 row-start-1 whitespace-nowrap leading-[inherit]",
            textClassName,
          )}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
