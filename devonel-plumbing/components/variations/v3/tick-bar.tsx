"use client";

/**
 * The tick bar: 48px, sticky, and the only sticky element on this page.
 *
 * It carries the wordmark, the sixteen days of the build, the marker that
 * travels with the reader, the date readout, and one primary action. Hovering
 * or focusing a day shows what happened on it. Nothing here is pinned to the
 * viewport and nothing touches the scroll.
 *
 * Almost none of this is JavaScript. The marker position, the lit ticks, the
 * date readout and the tick entrance are all CSS reading `--v3-t`, which the
 * document sets with `animation-timeline: scroll()`. The one effect below is the
 * fallback for browsers without scroll timelines, and it takes itself out of the
 * way everywhere else.
 */

import { useEffect } from "react";
import type { CSSProperties } from "react";
import { ContactCTA } from "@/components/ds/contact-cta";
import { Mark } from "@/components/ds/mark";
import { contactLabel } from "@/lib/site";
import { resolvedTicks, ticks } from "./sections";

/**
 * The rAF path for the clock.
 *
 * It does nothing at all where `animation-timeline: scroll()` works, and nothing
 * at all under reduced motion, where the page is meant to sit in three fixed
 * bands. Where it does run it stamps `data-ramp="raf"` on the root, which stands
 * down the no-JavaScript bands in `tokens.css`, and writes `--v3-t` inline.
 */
function useScrollClockFallback() {
  useEffect(() => {
    if (typeof CSS !== "undefined" && CSS.supports("animation-timeline", "scroll()")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.querySelector<HTMLElement>(".v3");
    if (!root) return;

    root.dataset.ramp = "raf";
    let frame = 0;

    const write = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const t = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--v3-t", t.toFixed(4));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(write);
    };

    write();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
      delete root.dataset.ramp;
      root.style.removeProperty("--v3-t");
    };
  }, []);
}

type TickBarProps = {
  /**
   * Prefix for every anchor the bar builds. Empty on `/v3`, where the sections
   * are on the same document; `"/v3"` on a sub-page such as
   * `/v3/work/jewelo`, where the same sixteen ticks are the way back into the
   * page they came from.
   */
  base?: string;
};

export function TickBar({ base = "" }: TickBarProps) {
  useScrollClockFallback();

  return (
    <header className="v3-bar">
      <div className="v3-bar-inner">
        {/* The wordmark is display:none below 46rem and the mark is decorative,
            so the link carries its own name; at 46rem and up the label is the
            visible word. */}
        <a className="v3-bar-mark" href={`${base}#hero`} aria-label="Devonel">
          <Mark />
          <span className="v3-bar-name">Devonel</span>
        </a>

        <nav className="v3-rail" aria-label="The sixteen days of the build">
          {resolvedTicks.map((tick, i) => {
            const style = { "--i": i } as CSSProperties;
            const body = (
              <>
                <span className="v3-tick" />
                {tick.event ? (
                  <span className="v3-event">
                    <span>
                      <span className="v3-event-date">{tick.date}</span>
                      {tick.event}
                    </span>
                  </span>
                ) : null}
              </>
            );

            return tick.href ? (
              <a
                key={tick.n}
                className="v3-tick-hit"
                href={`${base}${tick.href}`}
                style={style}
                aria-label={`${tick.date}, ${tick.label}`}
              >
                {body}
              </a>
            ) : (
              <span key={tick.n} className="v3-tick-hit" style={style} aria-hidden>
                {body}
              </span>
            );
          })}
          <span className="v3-marker" aria-hidden />
        </nav>

        <p className="v3-date" aria-hidden>
          {ticks.map((tick, i) => (
            <span key={tick.n} className="v3-date-item" style={{ "--i": i } as CSSProperties}>
              {tick.date}
            </span>
          ))}
        </p>

        <ContactCTA className="v3-bar-cta">{contactLabel()}</ContactCTA>
      </div>
    </header>
  );
}
