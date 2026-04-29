import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Accent = "valve" | "water";

type HeadlineLine = {
  text: string;
  accent?: Accent;
  italic?: boolean;
};

type Stat = {
  value: string;
  label: string;
};

export type MagazineCoverProps = {
  eyebrow: string;
  headline: HeadlineLine[];
  lede: { lead: string; rest: string };
  stats: [Stat, Stat, Stat];
  className?: string;
};

const TOKENS = {
  containerType: "size",
  containerName: "cover",
  "--cover-px": "max(20px, 5cqi)",
  "--cover-pt": "max(64px, 10cqb)",
  "--cover-pb": "max(48px, 8cqb)",
  "--cover-eyebrow-gap": "clamp(24px, 7cqb, 80px)",
  "--cover-headline-leading": "0.92",
  "--cover-headline-size": "min(14.5cqi, 8cqb)",
  "--cover-headline-tracking": "-0.035em",
  "--cover-lede-gap": "clamp(12px, 2.5cqb, 28px)",
  "--cover-lede-size": "clamp(14px, 4cqi, 18px)",
  "--cover-lede-leading": "1.5",
  "--cover-stats-gap": "clamp(20px, 4cqb, 44px)",
  "--cover-stat-value-size": "clamp(20px, 5.8cqi, 26px)",
} as CSSProperties;

export function MagazineCover({ eyebrow, headline, lede, stats, className }: MagazineCoverProps) {
  return (
    <div
      style={TOKENS}
      className={cn(
        "flex flex-col px-[var(--cover-px)] pt-[var(--cover-pt)] pb-[var(--cover-pb)]",
        className,
      )}
    >
      <div className="flex-1 flex flex-col [justify-content:safe_center] min-h-0 overflow-hidden">
        <Eyebrow>{eyebrow}</Eyebrow>
        <DisplayHeadline lines={headline} />
        <Lede lead={lede.lead} rest={lede.rest} />
      </div>
      <StatTeaser stats={stats} />
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-2 flex items-center gap-3">
      <span className="size-3 bg-valve" aria-hidden />
      <span>{children}</span>
    </div>
  );
}

function DisplayHeadline({ lines }: { lines: HeadlineLine[] }) {
  return (
    <h1
      style={{ marginTop: "var(--cover-eyebrow-gap)" }}
      className="font-serif font-medium text-[length:var(--cover-headline-size)] [line-height:var(--cover-headline-leading)] [letter-spacing:var(--cover-headline-tracking)]"
    >
      {lines.map((line, i) => (
        <span
          key={i}
          className={cn(
            "block",
            line.italic && "italic font-medium",
            line.accent === "valve" && "text-valve",
            line.accent === "water" && "text-water",
          )}
        >
          {line.text}
        </span>
      ))}
    </h1>
  );
}

function Lede({ lead, rest }: { lead: string; rest: string }) {
  return (
    <p
      style={{ marginTop: "var(--cover-lede-gap)", textWrap: "pretty" }}
      className="text-[length:var(--cover-lede-size)] [line-height:var(--cover-lede-leading)] text-ink-2 max-w-[40ch]"
    >
      <strong className="text-ink font-semibold">{lead}</strong> {rest}
    </p>
  );
}

function StatTeaser({ stats }: { stats: [Stat, Stat, Stat] }) {
  return (
    <div
      style={{ paddingTop: "var(--cover-stats-gap)" }}
      className="border-t border-ink/15 grid grid-cols-3 gap-4"
    >
      {stats.map((s, i) => (
        <div key={i}>
          <div className="font-serif font-medium text-[length:var(--cover-stat-value-size)] leading-none text-valve">
            {s.value}
          </div>
          <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-2 mt-1.5">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
