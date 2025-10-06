"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface IconCloudItem {
  icon: LucideIcon;
  label: string;
}

interface IconCloudProps {
  items: IconCloudItem[];
  className?: string;
}

export function IconCloud({ items, className }: IconCloudProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5 + index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur"
          >
            <Icon className="size-4 text-[rgb(var(--brand-accent-rgb))]" />
            {item.label}
          </motion.div>
        );
      })}
    </div>
  );
}

