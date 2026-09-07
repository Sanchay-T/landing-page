"use client";

/**
 * The wire ring: sixteen segments, one per day of the build, lit up to the day
 * the reader has scrolled to. It is parked in the hero's right margin.
 *
 * Three things about it are deliberate.
 *
 * 1. It does not exist below 1100px. Not hidden, not paused - not mounted. The
 *    phone hero carries no canvas at all, which is what keeps this direction's
 *    mobile LCP the headline and nothing else. The gate is doubled: a media
 *    query in `tokens.css` reserves and hides the box, and `useMinWidth` here
 *    decides whether `<Scene>` mounts.
 * 2. The SVG is not a placeholder. It is the ring for everyone the render gate
 *    in `lib/webgl.ts` turns away - reduced motion, no WebGL, under 2 GiB, Data
 *    Saver - and it runs the same per-segment logic off the same `--v3-t`, in
 *    CSS, with no JavaScript at all. About 3 KB of markup.
 * 3. The two draw the same ellipse from the same numbers, so the 600ms crossfade
 *    `<Scene>` does when the first frame lands moves nothing on screen.
 */

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { Scene } from "@/components/ds/scene";
import { ticks } from "./sections";

const LABEL =
  "A ring of sixteen segments, one for each day of the build, lit up to the day the page is showing.";

/** Below this width the ring does not mount. */
const MIN_WIDTH = 1100;

/* ---------------------------------------------------------------- geometry */

const COUNT = ticks.length;
/** Degrees per day. */
const STEP = 360 / COUNT;
/** Degrees of air between two days. */
const GAP = 2.5;

/** SVG ellipse: the ring seen at the same tilt the canvas gives it. */
const CX = 100;
const CY = 100;
const RX = 88;
const RY = 77.3;

function segmentPath(i: number): string {
  const point = (deg: number) => {
    const a = ((-90 + deg) * Math.PI) / 180;
    return `${(CX + RX * Math.cos(a)).toFixed(2)} ${(CY + RY * Math.sin(a)).toFixed(2)}`;
  };
  return `M ${point(i * STEP + GAP / 2)} A ${RX} ${RY} 0 0 1 ${point((i + 1) * STEP - GAP / 2)}`;
}

const SEGMENT_PATHS = ticks.map((_, i) => segmentPath(i));

/**
 * The canvas draws the same ellipse from the same numbers.
 *
 * The camera is deliberately a long lens - 4 degrees at 56 units - because an
 * SVG arc cannot do perspective. At a normal focal length the near half of the
 * tilted ring is magnified and the canvas sits about 6px above the SVG behind
 * it, which reads as a doubled stroke on the lit segment during the crossfade.
 * Flattened to near-orthographic, a tilt of acos(RY / RX) projects to the SVG's
 * ellipse within a quarter of a pixel. Half the frame is `56 * tan(2deg)` units,
 * which converts RX and the 2px stroke into scene units.
 */
const CAMERA_Z = 56;
const CAMERA_FOV = 4;
const HALF_FRAME = CAMERA_Z * Math.tan(((CAMERA_FOV / 2) * Math.PI) / 180);
const RADIUS = (RX / 100) * HALF_FRAME;
/** 2 CSS px of a 200px box, as a torus tube radius. */
const TUBE = ((2 / 200) * (2 * HALF_FRAME)) / 2;
const TILT = Math.acos(RY / RX);

/** Radians, three.js orientation: y up, torus sweeps counterclockwise. */
const ARC = ((STEP - GAP) * Math.PI) / 180;
const SEGMENT_ROTATIONS = ticks.map((_, i) => ((90 - (i + 1) * STEP + GAP / 2) * Math.PI) / 180);

/* -------------------------------------------------------------------- SVG */

function RingSvg() {
  return (
    <svg className="v3-ring-svg" viewBox="0 0 200 200" aria-hidden focusable="false">
      {SEGMENT_PATHS.map((d, i) => (
        <path
          key={i}
          className="v3-ring-seg"
          d={d}
          style={{ "--i": i } as React.CSSProperties}
          strokeLinecap="butt"
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------- hooks */

function useMinWidth(px: number): boolean {
  const query = `(min-width: ${px}px)`;

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (typeof window === "undefined" || typeof window.matchMedia !== "function") return () => {};
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
    return window.matchMedia(query).matches;
  }, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

/**
 * How many days are lit. Read off the document scroller with the same maths the
 * CSS clock uses, so the ring and the tick bar can never disagree, and set only
 * when the whole number changes - which is what makes this scene one render per
 * tick rather than one per frame.
 */
function useLitCount(): number {
  const [lit, setLit] = useState(1);

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const t = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setLit(Math.min(COUNT, Math.floor(t * (COUNT - 1)) + 1));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return lit;
}

/**
 * The ink the ring is drawn in, read from the variation's own tokens rather than
 * written here. The ring only ever appears in the hero, which sits at the night
 * end of the ramp, so the night ink stop is the right and only value it needs.
 */
function useInk(): string {
  const [ink, setInk] = useState("#f2f1ec");

  useEffect(() => {
    const root = document.querySelector(".v3");
    if (!root) return;
    const value = getComputedStyle(root).getPropertyValue("--v3-ink-0").trim();
    if (value) setInk(value);
  }, []);

  return ink;
}

/* ------------------------------------------------------------------- ring */

export function WireRing() {
  const wide = useMinWidth(MIN_WIDTH);
  const lit = useLitCount();
  const ink = useInk();

  if (!wide) {
    return (
      <div className="v3-ring" role="img" aria-label={LABEL}>
        <RingSvg />
      </div>
    );
  }

  return (
    <Scene
      className="v3-ring"
      label={LABEL}
      fallback={<RingSvg />}
      camera={{ position: [0, 0, CAMERA_Z], fov: CAMERA_FOV }}
      maxDpr={1.5}
      // The scene is static between tick changes, so it is driven as slowly as
      // it can be and still turn a day over promptly. `<Scene>` owns the frame
      // driver and already parks it off-screen and on a hidden tab.
      fps={8}
    >
      <group rotation={[TILT, 0, 0]}>
        {SEGMENT_ROTATIONS.map((z, i) => (
          <mesh key={i} rotation={[0, 0, z]}>
            <torusGeometry args={[RADIUS, TUBE, 6, 10, ARC]} />
            <meshBasicMaterial
              color={ink}
              transparent
              opacity={i < lit ? 1 : 0.18}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>
    </Scene>
  );
}
