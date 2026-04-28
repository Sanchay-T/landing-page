"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { VFigure1, VFigure2, VFigure3 } from "../_lib/vertical-figures";

const PF_FULL = { "--pf": "1" } as CSSProperties;

type Props = { className?: string };

export function MobilePinnedHero({ className = "" }: Props) {
  const stageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const p = total > 0 ? scrolled / total : 0;
        el.style.setProperty("--p", String(p));
        const scene = p < 0.22 ? 0 : p < 0.48 ? 1 : p < 0.74 ? 2 : 3;
        el.dataset.scene = String(scene);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={stageRef}
      data-scene="0"
      className={`mh ${className}`}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-paper">
        {/* Top floating chrome — subtle frame so the user always knows
            where they are in the storyboard. */}
        <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between font-mono text-[9.5px] tracking-[0.16em] uppercase text-ink-2 pointer-events-none">
          <span className="flex items-center gap-2 bg-paper/95 backdrop-blur-sm border border-ink/40 px-2 py-1">
            <span className="size-1.5 rounded-full bg-valve animate-pulse" />
            Devonel · Studio
          </span>
          <span className="bg-paper/95 backdrop-blur-sm border border-ink/40 px-2 py-1 min-w-[100px] text-right">
            <b className="mh-label" data-scene="0">VOL II · NO 14</b>
            <b className="mh-label" data-scene="1">FIG 01</b>
            <b className="mh-label" data-scene="2">FIG 02</b>
            <b className="mh-label" data-scene="3">FIG 03</b>
          </span>
        </div>

        {/* Scene 0 — headline / intro */}
        <div className="mh-scene mh-scene-0 absolute inset-0 flex flex-col justify-end px-6 pb-24 pt-20 gap-6 z-10">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-2 flex items-center gap-3">
            <span className="size-3 bg-valve" aria-hidden />
            <span>Vol. II · No. 14 · Process plumbing &amp; automation</span>
          </div>
          <h1 className="font-serif font-medium text-[clamp(40px,11.5vw,64px)] leading-[1.0] tracking-[-0.025em] flex flex-col">
            <span>Your business <em className="not-italic italic font-medium text-valve">leaks</em></span>
            <span>through the seams</span>
            <span>between <span className="italic text-water">tools</span>.</span>
          </h1>
          <p className="text-[15px] leading-[1.55] text-ink-2 max-w-[42ch]">
            <strong className="text-ink font-semibold">Devonel is a process re-engineering studio.</strong>{" "}
            We map the work, find where it&apos;s spilling, and weld it back together — with automations that actually hold pressure under real volume.
          </p>
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-2 flex items-center gap-2 mt-2">
            <span className="size-1 bg-ink-2 rounded-full animate-pulse" />
            Scroll to inspect ↓
          </div>
        </div>

        {/* Scenes 1–3 — the three case-study diagrams */}
        <MhFigureScene
          index={1}
          eyebrow="FIG. 01 · Intake leakage"
          title="Customer ops leaks through the seams between tools."
        >
          <VFigure1 />
        </MhFigureScene>

        <MhFigureScene
          index={2}
          eyebrow="FIG. 02 · KYC re-verification"
          title="Nine days of backlog collapsed to fourteen hours."
        >
          <VFigure2 />
        </MhFigureScene>

        <MhFigureScene
          index={3}
          eyebrow="FIG. 03 · Returns triage"
          title="2.3 days of email tag became four hours of routing."
        >
          <VFigure3 />
        </MhFigureScene>

        {/* Bottom progress bar + scene dots */}
        <div className="absolute bottom-3 left-3 right-3 z-30 flex items-center gap-3 pointer-events-none">
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="mh-dot size-2 rounded-full border border-ink bg-paper"
                data-scene={i}
              />
            ))}
          </div>
          <div className="flex-1 h-[3px] bg-ink/15 relative">
            <span className="mh-progress absolute inset-y-0 left-0 bg-valve" />
          </div>
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-2 bg-paper/95 backdrop-blur-sm border border-ink/40 px-2 py-1">
            <b className="mh-hint" data-scene="0">Scroll ↓</b>
            <b className="mh-hint" data-scene="1">Scene 1/3</b>
            <b className="mh-hint" data-scene="2">Scene 2/3</b>
            <b className="mh-hint" data-scene="3">Scene 3/3</b>
          </span>
        </div>
      </div>
    </section>
  );
}

type FigSceneProps = {
  index: 1 | 2 | 3;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

function MhFigureScene({ index, eyebrow, title, children }: FigSceneProps) {
  return (
    <div
      className={`mh-scene mh-scene-${index} absolute inset-0 flex flex-col px-5 pt-14 pb-20 gap-3 z-10`}
      style={PF_FULL}
    >
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink flex items-center gap-3">
        <span className="size-2.5 bg-valve" aria-hidden />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-serif font-medium text-[clamp(22px,5.8vw,32px)] leading-[1.05] tracking-[-0.015em] max-w-[28ch]">
        {title}
      </h2>
      <div className="flex-1 grid place-items-center min-h-0 -mx-2">
        <div className="w-full max-w-[460px] aspect-[380/680] max-h-full">{children}</div>
      </div>
    </div>
  );
}
