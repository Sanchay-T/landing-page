import type { CSSProperties } from "react";
import { VFigure1, VFigure2, VFigure3 } from "../_lib/vertical-figures";

type Props = { className?: string };

// --pf is the per-figure animation progress consumed by .vf-* CSS rules in
// globals.css. On mobile we render every figure fully drawn (--pf:1) — the
// line-draw choreography is desktop-only.
const PF_FULL = { "--pf": "1" } as CSSProperties;

const sectionBase =
  "relative min-h-[100svh] flex flex-col px-5 py-14 border-b border-ink/15";

export function MobileHero({ className = "" }: Props) {
  return (
    <div className={className}>
      <section className={`${sectionBase} justify-center gap-6`}>
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-2">
          <span className="size-3 bg-valve" aria-hidden />
          <span>Vol. II · No. 14 · Process plumbing &amp; automation</span>
        </div>

        <h1 className="font-serif font-medium text-[clamp(28px,8.5vw,42px)] leading-[1.04] tracking-[-0.02em] flex flex-col">
          <span>Your business <em className="not-italic font-medium text-valve italic">leaks</em></span>
          <span>through the seams</span>
          <span>between <span className="text-water italic">tools</span>.</span>
        </h1>

        <p className="text-[15px] leading-[1.55] text-ink-2 max-w-[40ch]">
          <strong className="text-ink font-semibold">Devonel is a process re-engineering studio.</strong>{" "}
          We map the work, find where it&apos;s spilling, and weld it back together — with automations that
          actually hold pressure under real volume.
        </p>

        <div className="flex flex-col gap-3 self-stretch mt-2">
          <a className="text-center bg-ink text-paper py-3.5 px-4 font-mono text-xs tracking-[0.16em] uppercase border border-ink">
            Request a 90-min walkthrough →
          </a>
          <a className="text-center py-3.5 px-4 font-mono text-xs tracking-[0.16em] uppercase border border-ink">
            See the ledger
          </a>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-ink-2">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-valve" />
            Devonel · Studio Report
          </span>
          <span>Scroll ↓</span>
        </div>
      </section>

      <MobileFigureSection
        eyebrow="FIG. 01 · Intake leakage"
        title="Customer ops leaks through the seams between tools."
        before="Three intake surfaces, three backends, leads triple-counted in some places and dropped in others. The leak rate hovers around 14% of inbound."
        after="Single intake → routed to CRM, owner, and audit log via one valve. Every handoff observable, every drop accounted for."
        stat="$214k recovered / yr"
      >
        <VFigure1 />
      </MobileFigureSection>

      <MobileFigureSection
        eyebrow="FIG. 02 · KYC re-verification"
        title="Nine days of backlog collapsed to fourteen hours."
        before="Every submission queued for nine days behind a single reviewer pool — clean accounts and edge cases got the same treatment."
        after="A classifier reads each submission and splits a fast lane (most accounts, 14 hr) from a slow lane (flagged accounts, 2 days). Reviewers only see what needs them."
        stat="$148k saved / yr · 22 hr/wk freed"
      >
        <VFigure2 />
      </MobileFigureSection>

      <MobileFigureSection
        eyebrow="FIG. 03 · Returns triage"
        title="2.3 days of email tag became four hours of routing."
        before="Every return went to a shared inbox. A human read each one, decided refund vs. exchange, then drafted a reply. Average handle time: 2.3 days."
        after="A triage layer reads the email, routes refunds and exchanges to two automated lanes, and only escalates true edge cases to a human. End-to-end response inside four hours."
        stat="$74k saved / yr · 14 hr/wk freed"
      >
        <VFigure3 />
      </MobileFigureSection>
    </div>
  );
}

type FigSectionProps = {
  eyebrow: string;
  title: string;
  before: string;
  after: string;
  stat: string;
  children: React.ReactNode;
};

function MobileFigureSection({ eyebrow, title, before, after, stat, children }: FigSectionProps) {
  return (
    <section className={`${sectionBase} gap-5 justify-between`}>
      <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-ink">
        <span className="size-2.5 bg-valve" aria-hidden />
        <span>{eyebrow}</span>
      </div>

      <h2 className="font-serif font-medium text-[clamp(22px,6.4vw,30px)] leading-[1.06] tracking-[-0.015em] max-w-[28ch]">
        {title}
      </h2>

      <div className="flex-1 grid place-items-center min-h-0 my-2" style={PF_FULL}>
        <div className="w-full max-w-[440px] aspect-[380/680]">{children}</div>
      </div>

      <div className="flex flex-col gap-3 text-[14px] leading-[1.5] text-ink-2">
        <p><strong className="text-ink font-semibold">Before.</strong> {before}</p>
        <p><strong className="text-ink font-semibold">After.</strong> {after}</p>
      </div>

      <p className="font-serif italic text-[20px] text-gold leading-none">{stat}</p>
    </section>
  );
}
