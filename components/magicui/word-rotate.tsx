"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  className?: string;
  duration?: number;
}

export function WordRotate({
  words,
  className,
  duration = 2500,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(timer);
  }, [words, duration]);

  const currentWord = words[index] ?? "";

  return (
    <span className={cn("relative inline-block overflow-visible py-2", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
