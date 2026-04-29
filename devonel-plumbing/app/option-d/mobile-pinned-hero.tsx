"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { VFigure1, VFigure2, VFigure3 } from "../_lib/vertical-figures";
import { MagazineCover } from "@/components/marketing/magazine-cover";

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
      <div className="mh-stage sticky top-0 h-[100svh] overflow-hidden">
        {/* Mobile-only nav header — replaces the desktop TopStrip + Nav so
            the hero gets the full viewport. Logo + Book Intake CTA + scene
            label that updates with scroll position. */}
        <header className="absolute top-0 left-0 right-0 z-30 grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 border-b border-ink bg-paper/95 backdrop-blur-sm pointer-events-auto">
          <a className="flex items-center gap-2 font-serif font-semibold text-[15px] text-ink">
            <svg viewBox="0 0 32 32" className="size-5" aria-hidden>
              <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <line x1="3" y1="16" x2="29" y2="16" stroke="currentColor" strokeWidth="1.5" />
              <line x1="16" y1="3" x2="16" y2="29" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="3" fill="var(--color-valve)" />
            </svg>
            Devonel
          </a>
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-2 text-center truncate">
            <b className="mh-label" data-scene="0">Vol II · No 14</b>
            <b className="mh-label" data-scene="1">Fig 01 · Intake leakage</b>
            <b className="mh-label" data-scene="2">Fig 02 · KYC backlog</b>
            <b className="mh-label" data-scene="3">Fig 03 · Returns triage</b>
          </span>
          <a className="bg-ink text-paper font-mono text-[10px] tracking-[0.16em] uppercase px-3 py-2 whitespace-nowrap">
            Book →
          </a>
        </header>

        {/* Scene 0 — magazine cover. All spacing/typography lives in
            <MagazineCover>; iterate there, not here. */}
        <MagazineCover
          className="mh-scene mh-scene-0 absolute inset-0 z-10"
          eyebrow="Process plumbing & automation"
          headline={[
            { text: "Your business" },
            { text: "leaks", accent: "valve", italic: true },
            { text: "through the" },
            { text: "seams between" },
            { text: "tools.", accent: "water", italic: true },
          ]}
          lede={{
            lead: "Devonel is a process re-engineering studio.",
            rest: "We map the work, find where it's spilling, and weld it back together — automations that hold pressure under real volume.",
          }}
          stats={[
            { value: "$214k", label: "Intake recovered" },
            { value: "9d→14h", label: "KYC backlog" },
            { value: "2.3d→4h", label: "Returns triage" },
          ]}
        />

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

        {/* Bottom paper fade — keeps diagrams from bleeding into the
            progress chrome zone below. */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-paper via-paper/95 to-transparent z-20 pointer-events-none" />

        {/* Bottom progress bar + scene dots */}
        <div className="absolute bottom-4 left-3 right-3 z-30 flex items-center gap-3 pointer-events-none">
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
      className={`mh-scene mh-scene-${index} absolute inset-0 flex flex-col px-5 pt-[clamp(56px,9svh,80px)] pb-[clamp(96px,16svh,128px)] gap-3 z-10`}
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
