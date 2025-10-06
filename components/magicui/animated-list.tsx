"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

interface AnimatedListItem {
  title: string;
  description?: string;
}

interface AnimatedListProps extends HTMLMotionProps<"ul"> {
  items: AnimatedListItem[];
}

export function AnimatedList({ items, className, ...props }: AnimatedListProps) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
          },
        },
      }}
      className={cn("space-y-4", className)}
      {...props}
    >
      {items.map((item) => (
        <motion.li
          key={item.title}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="group rounded-2xl border border-white/10 bg-background/70 p-5 shadow-[0_14px_40px_-24px_rgb(var(--brand-accent-rgb)/0.45)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[rgb(var(--brand-accent-rgb)/0.75)]">
            {item.title}
          </p>
          {item.description ? (
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          ) : null}
        </motion.li>
      ))}
    </motion.ul>
  );
}

