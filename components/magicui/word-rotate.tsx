"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

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
  const [maxHeight, setMaxHeight] = useState<number>();
  const measurementRef = useRef<HTMLSpanElement>(null);

  const joinedWords = useMemo(() => words.join("|"), [words]);

  useEffect(() => {
    if (words.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(timer);
  }, [words, duration]);

  useEffect(() => {
    const measureHeights = () => {
      if (!measurementRef.current) return;

      const spans = Array.from(
        measurementRef.current.children,
      ) as HTMLElement[];

      const tallest = spans.reduce((acc, span) => {
        const height = span.getBoundingClientRect().height;
        return height > acc ? height : acc;
      }, 0);

      setMaxHeight(tallest || undefined);
    };

    const measurementEl = measurementRef.current;

    measureHeights();
    const frame = requestAnimationFrame(measureHeights);

    if (!measurementEl) return;

    const resizeObserver = new ResizeObserver(() => {
      measureHeights();
    });

    resizeObserver.observe(measurementEl);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, [joinedWords, className]);

  const currentWord = words[index] ?? "";

  return (
    <span
      className={cn("relative inline-block overflow-visible py-2", className)}
      style={maxHeight ? { minHeight: maxHeight } : undefined}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className="block w-full max-w-full break-words md:whitespace-nowrap"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
      <span
        ref={measurementRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[-1] flex flex-col opacity-0"
      >
        {words.map((word) => (
          <span
            key={word}
            className="block w-full max-w-full break-words md:whitespace-nowrap"
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}
