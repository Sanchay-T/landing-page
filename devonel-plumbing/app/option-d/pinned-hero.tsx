"use client";

import { useEffect, useRef } from "react";
import { VFigure1, VFigure2, VFigure3 } from "../_lib/vertical-figures";

const CHAPTER_BREAKS = [0.34, 0.66] as const;

function chapterFor(p: number): number {
  if (p < CHAPTER_BREAKS[0]) return 0;
  if (p < CHAPTER_BREAKS[1]) return 1;
  return 2;
}

function dumpDiag(el: HTMLElement, p: number, label: string) {
  const cs = getComputedStyle(el);
  const rect = (sel: string) => {
    const node = el.querySelector(sel) as HTMLElement | SVGElement | null;
    if (!node) return `${sel}: <missing>`;
    const r = (node as HTMLElement).getBoundingClientRect();
    const o = getComputedStyle(node as Element).opacity;
    return `${sel}: x=${Math.round(r.left)} y=${Math.round(r.top)} w=${Math.round(r.width)} h=${Math.round(r.height)} op=${o}`;
  };
  const fig1 = el.querySelector(".hp-rect-fig-1") as HTMLElement | null;
  const fig2 = el.querySelector(".hp-rect-fig-2") as HTMLElement | null;
  const fig3 = el.querySelector(".hp-rect-fig-3") as HTMLElement | null;
  const pf = (n: HTMLElement | null) => (n ? getComputedStyle(n).getPropertyValue("--pf").trim() : "?");
  const svg = el.querySelector(".hp-rect-fig-1 .vf-svg") as SVGElement | null;
  const visibleChildren: string[] = [];
  if (svg) {
    svg.querySelectorAll("*").forEach((c) => {
      const cls = (c as Element).getAttribute("class") || (c.tagName);
      const cstyle = getComputedStyle(c as Element);
      const op = parseFloat(cstyle.opacity);
      const dash = parseFloat(cstyle.strokeDashoffset);
      const fill = cstyle.fill;
      const hasInk = (op > 0.05) && (isNaN(dash) || dash < 0.95);
      const hasFill = fill && fill !== "none" && op > 0.05;
      if (hasInk || hasFill) {
        visibleChildren.push(`${cls}{op=${op.toFixed(2)} dash=${isNaN(dash)?"-":dash.toFixed(2)} fill=${fill}}`);
      }
    });
  }
  // eslint-disable-next-line no-console
  console.log(
    `[devonel-diag ${label}]\n` +
      `  vw=${window.innerWidth} vh=${window.innerHeight} dpr=${window.devicePixelRatio}\n` +
      `  --p=${p.toFixed(4)} chapter=${el.dataset.chapter} matchesMobileMQ=${matchMedia("(max-width: 1100px)").matches}\n` +
      `  --pf{1,2,3}= ${pf(fig1)} | ${pf(fig2)} | ${pf(fig3)}\n` +
      `  ${rect(".hp-statusbar")}\n` +
      `  ${rect(".hp-stage")}\n` +
      `  ${rect(".hp-rect")}\n` +
      `  ${rect(".hp-rect-body")}\n` +
      `  ${rect(".hp-rect-fig-1")}\n` +
      `  ${rect(".hp-rect-fig-1 .vf-svg")}\n` +
      `  ${rect(".hp-text")}\n` +
      `  ${rect(".hp-text-1")}\n` +
      `  visibleSvgChildren(${visibleChildren.length}):\n    ${visibleChildren.slice(0, 12).join("\n    ")}\n` +
      `  hp-rect-fig position=${fig1 ? getComputedStyle(fig1).position : "?"} inset=${fig1 ? getComputedStyle(fig1).inset : "?"}\n` +
      `  vf-svg sizing= ${svg ? `viewBox=${(svg as SVGSVGElement).getAttribute("viewBox")} clientW=${(svg as SVGSVGElement).clientWidth} clientH=${(svg as SVGSVGElement).clientHeight}` : "?"}\n` +
      `  hero--pinned cs height=${cs.height} pad=${cs.padding}`
  );
}

export function PinnedHero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const tCodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    let raf = 0;
    let lastChapter = -1;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const progress = total > 0 ? scrolled / total : 0;

        el.style.setProperty("--p", String(progress));
        const ch = chapterFor(progress);
        el.dataset.chapter = String(ch);

        if (tCodeRef.current) tCodeRef.current.textContent = `t = ${Math.round(progress * 100)}%`;

        if (ch !== lastChapter) {
          lastChapter = ch;
          dumpDiag(el, progress, `chapter-${ch}`);
        }
      });
    };

    onScroll();
    // Initial dump after styles settle
    setTimeout(() => dumpDiag(el, 0, "mount"), 60);
    setTimeout(() => dumpDiag(el, 0, "mount+500"), 500);
    // Expose helper for manual inspection
    (window as unknown as { __devonelDebug?: () => void }).__devonelDebug = () => {
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-r.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      dumpDiag(el, p, "manual");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero hero--pinned" ref={stageRef} data-chapter="0">
      <div className="hero-pinned-sticky">
        {/* ============ Top status bar ============ */}
        <div className="hp-statusbar">
          <span className="hp-statusbar-id">
            <span className="dot"></span> DEVONEL · STUDIO REPORT
          </span>
          <span className="hp-statusbar-stage">
            <b className="hp-stage-label" data-chapter="0">FIG. 01 · Intake leakage</b>
            <b className="hp-stage-label" data-chapter="1">FIG. 02 · KYC re-verification</b>
            <b className="hp-stage-label" data-chapter="2">FIG. 03 · Returns triage</b>
          </span>
          <span className="hp-statusbar-meta">
            FILE 04/26 · <span ref={tCodeRef} className="hp-tcode">t = 0%</span>
          </span>
        </div>

        {/* ============ Stage: split text-left / rect-right ============ */}
        <div className="hp-stage">
          {/* ---- Left: editorial text, three chapters crossfade ---- */}
          <div className="hp-text">
            <div className="hp-text-chapter hp-text-1">
              <div className="hp-eyebrow">
                <span className="swatch"></span>
                <span>Vol. II · No. 14 · Process plumbing &amp; automation</span>
              </div>
              <h1 className="hp-headline">
                <span className="hp-headline-line">Your business <em>leaks</em></span>
                <span className="hp-headline-line">through the seams</span>
                <span className="hp-headline-line">between <span className="water">tools</span>.</span>
              </h1>
              <p className="hero-sub hp-sub">
                <strong>Devonel is a process re-engineering studio.</strong> We map the work, find where it&apos;s
                spilling, and weld it back together — with automations that actually hold pressure under real volume.
              </p>
              <div className="hero-cta hp-cta">
                <a className="btn btn-fill">Request a 90-min walkthrough →</a>
                <a className="btn">See the ledger</a>
              </div>
            </div>

            <div className="hp-text-chapter hp-text-2" aria-hidden>
              <div className="hp-eyebrow">
                <span className="swatch"></span>
                <span>FIG. 02 · Series-B fintech · KYC re-verification</span>
              </div>
              <h2 className="hp-headline-mini">
                Nine days of backlog <em>collapsed</em> to fourteen hours.
              </h2>
              <p className="hero-sub hp-sub">
                <strong>Before.</strong> Every submission queued for nine days behind a single reviewer pool — clean accounts and edge cases got the same treatment.
              </p>
              <p className="hero-sub hp-sub">
                <strong>After.</strong> A classifier reads each submission and splits a fast lane (most accounts, 14 hr) from a slow lane (flagged accounts, 2 days). Reviewers only see what needs them.
              </p>
              <div className="hp-mini-stats">
                <div><b>14 hr</b><span>review latency</span></div>
                <div><b>$148k</b><span>saved / yr</span></div>
                <div><b>22 hr</b><span>freed / wk</span></div>
              </div>
            </div>

            <div className="hp-text-chapter hp-text-3" aria-hidden>
              <div className="hp-eyebrow">
                <span className="swatch"></span>
                <span>FIG. 03 · DTC apparel · Returns triage</span>
              </div>
              <h2 className="hp-headline-mini">
                Two&#x2011;point&#x2011;three days of email tag became <em>four hours</em> of routing.
              </h2>
              <p className="hero-sub hp-sub">
                <strong>Before.</strong> Every return went to a shared inbox. A human read each one, decided refund vs. exchange, then drafted a reply. Average handle time: 2.3 days.
              </p>
              <p className="hero-sub hp-sub">
                <strong>After.</strong> A triage layer reads the email, routes refunds and exchanges to two automated lanes, and only escalates true edge cases to a human. End-to-end response inside four hours.
              </p>
              <div className="hp-mini-stats">
                <div><b>4 hr</b><span>handle time</span></div>
                <div><b>$74k</b><span>saved / yr</span></div>
                <div><b>14 hr</b><span>freed / wk</span></div>
              </div>
            </div>
          </div>

          {/* ---- Right: portrait rectangle with stacked figures ---- */}
          <div className="hp-rect">
            <div className="hp-rect-head">
              <span className="hp-rect-head-label" data-chapter="0">FIG. 01 · Intake leakage</span>
              <span className="hp-rect-head-label" data-chapter="1">FIG. 02 · KYC backlog</span>
              <span className="hp-rect-head-label" data-chapter="2">FIG. 03 · Returns triage</span>
              <span className="hp-rect-head-meta">scale 1:∞</span>
            </div>
            <div className="hp-rect-body">
              <div className="hp-rect-fig hp-rect-fig-1" aria-hidden={false}><VFigure1 /></div>
              <div className="hp-rect-fig hp-rect-fig-2" aria-hidden><VFigure2 /></div>
              <div className="hp-rect-fig hp-rect-fig-3" aria-hidden><VFigure3 /></div>
            </div>
          </div>
        </div>

        {/* ============ Bottom chrome — figure indicator + progress + hint ============ */}
        <div className="hp-bottombar">
          <div className="hp-figdots">
            <span data-i="0"><i>01</i> Intake leakage</span>
            <span data-i="1"><i>02</i> KYC backlog</span>
            <span data-i="2"><i>03</i> Returns triage</span>
          </div>
          <div className="hp-progress">
            <span className="hp-progress-fill"></span>
          </div>
          <div className="hp-hint">
            <span className="hp-hint-scroll">Scroll to inspect ↓</span>
            <span className="hp-hint-done">Continue ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
