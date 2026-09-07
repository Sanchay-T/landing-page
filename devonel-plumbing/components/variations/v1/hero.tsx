"use client";

/**
 * v1 "Studio Dark" hero.
 *
 * A near-black workshop with one lit object in it. The object is the Devonel
 * mark rebuilt as sixteen arc segments that land one per tick while a gauge
 * under it counts the days of the build, and the ring closes on the sixteenth.
 *
 * Order of operations matters here and is deliberate:
 * - the headline is server-rendered at full strength and never animates, so it
 *   is the LCP element and the canvas can never take that job from it;
 * - `useRenderGate()` settles in an effect, so nothing 3D is even considered
 *   until after the hero text has painted;
 * - `<Scene>` loads three.js through `next/dynamic({ ssr: false })`, and
 *   `MarkScene` is behind a second dynamic boundary because importing
 *   `useFrame` is enough to pull the library into whatever module names it;
 * - `<Scene>` is `contain: layout paint`, so the gauge is its sibling, never
 *   its child.
 *
 * The gauge digits are written straight to the DOM rather than held in state:
 * sixteen ticks at 60fps is 144 renders of a page for one changing number, and
 * the element is memoised so React never reconciles over the imperative write.
 */

import dynamic from "next/dynamic";
import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  type ChangeEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ContactCTA } from "@/components/ds/contact-cta";
import { Scene } from "@/components/ds/scene";
import { contactLabel } from "@/lib/site";
import { useRenderGate } from "@/lib/webgl";
import type { BuildState } from "./mark-scene";

const MarkScene = dynamic(() => import("./mark-scene").then((m) => m.MarkScene), {
  ssr: false,
});

/** Kept in step with DAYS in mark-scene.tsx, which cannot be imported from here
 *  as a value without dragging three.js into this module's chunk. */
const DAYS = 16;

/** The entrance runs once per visit, not once per route change. */
const SESSION_KEY = "devonel.v1.assembled";

const SCENE_LABEL =
  "The Devonel mark rebuilt in three dimensions as sixteen arc segments, one for each day of the build.";

const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v);

function gaugeLabel(t: number): string {
  if (t >= DAYS) return `${DAYS} / ${DAYS}`;
  return `day ${String(Math.floor(t)).padStart(2, "0")} / ${DAYS}`;
}

function remember() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // Private mode and blocked storage both mean "assume it has not run".
  }
}

/* The still. Sixteen arcs with a hairline seam at each end, the crosshair and
   the centre dot, traced from app/icon.svg on its 32 unit square scaled to 320.
   It is the whole design for anyone the render gate turns away, and the
   construction geometry the segments land into for everyone else. */
const GLYPH_R = 110;
const GLYPH_C = 160;
const GLYPH_GAP = 0.45; // degrees per end; matches the 3D ring's 0.965 arc seam

const GLYPH_ARCS = Array.from({ length: DAYS }, (_, i) => {
  const from = ((i * 360) / DAYS + GLYPH_GAP) * (Math.PI / 180);
  const to = (((i + 1) * 360) / DAYS - GLYPH_GAP) * (Math.PI / 180);
  const x0 = (GLYPH_C + GLYPH_R * Math.cos(from)).toFixed(2);
  const y0 = (GLYPH_C - GLYPH_R * Math.sin(from)).toFixed(2);
  const x1 = (GLYPH_C + GLYPH_R * Math.cos(to)).toFixed(2);
  const y1 = (GLYPH_C - GLYPH_R * Math.sin(to)).toFixed(2);
  return `M${x0} ${y0}A${GLYPH_R} ${GLYPH_R} 0 0 0 ${x1} ${y1}`;
});

function MarkGlyph({ ghost }: { ghost: boolean }) {
  return (
    <svg
      className="v1-obj__glyph"
      viewBox="0 0 320 320"
      aria-hidden
      focusable="false"
      data-ghost={ghost ? "1" : undefined}
    >
      <g fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="butt">
        {GLYPH_ARCS.map((d) => (
          <path key={d} d={d} />
        ))}
        <path d="M30 160H290" />
        <path d="M160 30V290" />
      </g>
      <circle cx="160" cy="160" r="35" fill="currentColor" />
    </svg>
  );
}

export function Hero() {
  const gate = useRenderGate();
  const live = gate === "allow";

  const build = useRef<BuildState>({ t: DAYS, scrubbed: false });
  const gaugeRef = useRef<HTMLSpanElement>(null);
  const scrubRef = useRef<HTMLInputElement>(null);
  const dragRef = useRef<{ id: number; x: number; t: number; width: number } | null>(null);

  const paint = useCallback((t: number) => {
    const gauge = gaugeRef.current;
    if (gauge) {
      const next = gaugeLabel(t);
      if (gauge.textContent !== next) gauge.textContent = next;
    }
  }, []);

  const syncScrub = useCallback((t: number) => {
    const scrub = scrubRef.current;
    if (scrub && document.activeElement !== scrub) scrub.value = String(Math.round(t));
  }, []);

  /** Called by the scene on every frame it advances the build. */
  const onTick = useCallback(
    (t: number) => {
      paint(t);
      syncScrub(t);
    },
    [paint, syncScrub],
  );

  /* Decide before paint whether this visit gets the entrance. Reduced motion
     and no-WebGL both land here as `live === false`, which is the assembled
     single frame the direction asks for, gauge included. */
  useLayoutEffect(() => {
    const state = build.current;
    let seen = true;

    if (live) {
      try {
        seen = sessionStorage.getItem(SESSION_KEY) === "1";
      } catch {
        seen = false;
      }
    }

    const entrance = live && !seen;
    // Marked as spent when the entrance starts, not when it ends: a reload
    // halfway through has still had its turn, and "once per session" should
    // not become "every reload" for anyone on a slow connection.
    if (entrance) remember();

    state.t = entrance ? 0 : DAYS;
    state.scrubbed = false;
    paint(state.t);
    const scrub = scrubRef.current;
    if (scrub) scrub.value = String(Math.round(state.t));
  }, [live, paint]);

  const onScrub = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const t = clamp(Number(event.target.value), 0, DAYS);
      build.current.scrubbed = true;
      build.current.t = t;
      paint(t);
      remember();
    },
    [paint],
  );

  const onPointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      // Touch keeps the range input; hijacking a finger here would fight the
      // page scroll on the one width where the object shares the fold.
      if (!live || event.pointerType === "touch") return;
      const frame = event.currentTarget;
      dragRef.current = {
        id: event.pointerId,
        x: event.clientX,
        t: build.current.t,
        width: frame.clientWidth || 1,
      };
      build.current.scrubbed = true;
      try {
        frame.setPointerCapture(event.pointerId);
      } catch {
        // A pointer that is no longer active cannot be captured. The drag still
        // works from the element's own move events, so this is not an error.
      }
    },
    [live],
  );

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current;
      if (!drag || drag.id !== event.pointerId) return;
      const t = clamp(drag.t + ((event.clientX - drag.x) / drag.width) * DAYS, 0, DAYS);
      build.current.t = t;
      paint(t);
      syncScrub(t);
    },
    [paint, syncScrub],
  );

  const onPointerUp = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    remember();
  }, []);

  /* Stable element: React bails out of reconciling it, so the digits written
     above are never overwritten by a re-render of the surrounding tree. */
  const gauge = useMemo(
    () => (
      <span className="v1-gauge__read" ref={gaugeRef}>
        {`${DAYS} / ${DAYS}`}
      </span>
    ),
    [],
  );

  return (
    <section id="hero" className="v1-hero">
      <div className="v1-shell v1-hero__grid">
        <div className="v1-hero__type">
          <h1 className="v1-hero__headline">
            {"Sixteen days "}
            <br className="v1-hero__br--s" />
            {"from "}
            <br className="v1-hero__br--l" />
            {"brief to a "}
            <br className="v1-hero__br--s" />
            {"product "}
            <br className="v1-hero__br--l" />
            {"your "}
            <br className="v1-hero__br--s" />
            {"customers use."}
          </h1>

          <p className="v1-hero__sub">
            Devonel builds and runs the software owner-led brands sell with.{" "}
            <span className="v1-hero__sub-2">
              We shipped a name-pendant studio for a bespoke jewellery house in Dubai on the morning
              of their exhibition stall.
            </span>
          </p>

          <div className="v1-hero__act">
            <ContactCTA className="v1-btn v1-btn--primary">{contactLabel()}</ContactCTA>
            <p className="v1-hero__support">Paid discovery, fixed scope, no forms.</p>
          </div>
        </div>

        <div className="v1-hero__object">
          <div
            className="v1-obj__frame"
            data-live={live ? "1" : undefined}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <Scene
              className="v1-obj"
              label={SCENE_LABEL}
              camera={{ fov: 30, position: [0, 0, 5.6] }}
              maxDpr={1.5}
              fallback={<MarkGlyph ghost={live} />}
            >
              <MarkScene build={build.current} onTick={onTick} />
            </Scene>
          </div>

          <div className="v1-gauge">
            {gauge}
            {live ? (
              <input
                ref={scrubRef}
                className="v1-gauge__scrub"
                type="range"
                min={0}
                max={DAYS}
                step={1}
                defaultValue={DAYS}
                aria-label="Build day"
                onChange={onScrub}
              />
            ) : (
              <span className="v1-gauge__done" aria-hidden />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
