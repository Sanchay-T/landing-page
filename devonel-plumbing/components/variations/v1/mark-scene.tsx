"use client";

/**
 * The hero object of v1 "Studio Dark": the Devonel mark from `app/icon.svg`
 * rebuilt in three dimensions as sixteen arc segments, one for each day of the
 * build, plus the crosshair and the centre dot.
 *
 * Never import this file from a page. `hero.tsx` pulls it in through
 * `next/dynamic({ ssr: false })` and renders it inside `<Scene>`, which is what
 * keeps three.js out of /v1's first-load JS. Importing `useFrame` here is
 * enough to drag the whole library into this module, which is exactly why the
 * module has to stay behind a dynamic boundary.
 *
 * Geometry is traced from the mark on its 32 unit square - ring r 11, crosshair
 * 3 to 29, centre dot r 3.5 - divided through by 11 so the ring radius is 1.
 * The stroke is drawn finer than the favicon's: 2/32 reads as a bold mark at
 * 32px and as a pipe at 520px, so the tube is set to read as a line instead.
 *
 * The scene owns the build clock. It advances `build.t` from 0 to 16 at one
 * tick per 150ms and reports each value back through `onTick` so the gauge in
 * `hero.tsx` stays in step with what the canvas is actually drawing, rather
 * than with a timer that started before the canvas finished loading. When
 * `build.scrubbed` is true the visitor has taken the clock over and the scene
 * stops advancing it.
 */

import { useFrame } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import type { Group, Mesh } from "three";

/** One per day of the Jewelo build: 11 Aug 2026 spec to 27 Aug 2026 live. */
export const DAYS = 16;

/** 150ms per tick, 2.4s for the whole assembly. Mirrors --v1-tick. */
const TICK_SECONDS = 0.15;

export type BuildState = {
  /** 0 to 16. Whole numbers are landed segments; the fraction is the one in flight. */
  t: number;
  /** True once the visitor has scrubbed, after which the scene stops driving t. */
  scrubbed: boolean;
};

const TAU = Math.PI * 2;
const SLICE = TAU / DAYS;
/** A hairline seam at each end, so the closed ring still reads as sixteen pieces. */
const ARC = SLICE * 0.965;
const TUBE = 0.02;
const CROSS_HALF = 13 / 11;
const DOT = 3.5 / 11;

/** The mark sits a few degrees off square so it reads as an object, not a print. */
const BASE_X = -0.15;
const BASE_Y = 0.2;

const BODY = "#dde3e8";
const LAMP = "#fff3e0";

const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v);
const clamp01 = (v: number) => clamp(v, 0, 1);

/** cubic-bezier(.2, .8, .2, 1), the one entrance curve in this direction. */
function makeEase(x1: number, y1: number, x2: number, y2: number) {
  const a = (p: number, q: number) => 1 - 3 * q + 3 * p;
  const b = (p: number, q: number) => 3 * q - 6 * p;
  const c = (p: number) => 3 * p;
  const at = (t: number, p: number, q: number) => ((a(p, q) * t + b(p, q)) * t + c(p)) * t;
  const slope = (t: number, p: number, q: number) => 3 * a(p, q) * t * t + 2 * b(p, q) * t + c(p);

  return (x: number) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 6; i += 1) {
      const s = slope(t, x1, x2);
      if (s === 0) break;
      t -= (at(t, x1, x2) - x) / s;
    }
    return at(t, y1, y2);
  };
}

const ease = makeEase(0.2, 0.8, 0.2, 1);

const SEGMENTS = Array.from({ length: DAYS }, (_, i) => i);

export type MarkSceneProps = {
  build: BuildState;
  onTick: (t: number) => void;
};

export function MarkScene({ build, onTick }: MarkSceneProps) {
  const rootRef = useRef<Group>(null);
  const segRefs = useRef<(Mesh | null)[]>([]);
  const barXRef = useRef<Mesh>(null);
  const barYRef = useRef<Mesh>(null);
  const dotRef = useRef<Group>(null);
  const motion = useRef({ y: 0, prev: 0, drift: 0, idle: 0 });

  /** The scroll clamp is a design token, so it is read from the token, not retyped. */
  const driftLimit = useMemo(() => {
    if (typeof document === "undefined") return 0.2;
    const raw = getComputedStyle(document.documentElement).getPropertyValue("--v1-drift");
    const parsed = Number.parseFloat(raw);
    return Number.isFinite(parsed) ? parsed : 0.2;
  }, []);

  useEffect(() => {
    const read = () => {
      motion.current.y = window.scrollY;
    };
    read();
    motion.current.prev = motion.current.y;
    window.addEventListener("scroll", read, { passive: true });
    return () => window.removeEventListener("scroll", read);
  }, []);

  /** Put every piece where the current t says it is, with no interpolation. */
  const apply = useMemo(
    () => (t: number) => {
      for (let i = 0; i < DAYS; i += 1) {
        const mesh = segRefs.current[i];
        if (!mesh) continue;

        const raw = t - i;
        if (raw <= 0) {
          mesh.visible = false;
          continue;
        }

        mesh.visible = true;
        const e = ease(clamp01(raw));
        const mid = (i + 0.5) * SLICE;
        const out = (1 - e) * 0.55;
        mesh.position.set(Math.cos(mid) * out, Math.sin(mid) * out, (1 - e) * 0.9);
        mesh.rotation.z = i * SLICE + (1 - e) * 0.34;
      }

      // The crosshair draws out through the last four ticks and the dot lights
      // on the sixteenth, so the mark completes exactly as the ring closes.
      const cross = ease(clamp01((t - 12) / 4));
      for (const bar of [barXRef.current, barYRef.current]) {
        if (!bar) continue;
        bar.visible = cross > 0;
        bar.scale.y = Math.max(cross, 0.0001);
      }

      const dot = dotRef.current;
      if (dot) {
        const lit = ease(clamp01(t - (DAYS - 1)));
        dot.visible = lit > 0;
        dot.scale.setScalar(Math.max(lit, 0.0001));
      }
    },
    [],
  );

  useLayoutEffect(() => {
    apply(build.t);
  }, [apply, build]);

  useFrame((_, delta) => {
    const step = Math.min(delta, 1 / 20);

    if (!build.scrubbed && build.t < DAYS) {
      build.t = Math.min(DAYS, build.t + step / TICK_SECONDS);
      onTick(build.t);
    }

    apply(build.t);

    // Scroll primitive: rotation bound to damped scroll velocity, clamped.
    const m = motion.current;
    const velocity = (m.y - m.prev) / Math.max(step, 1e-4);
    m.prev = m.y;
    const target = clamp(velocity * 0.00055, -driftLimit, driftLimit);
    m.drift += (target - m.drift) * Math.min(1, step * 6);

    // Idle only once the ring has closed, and inside the same clamp, so the
    // mark can never drift far enough to stop reading as the mark.
    if (build.t >= DAYS) m.idle += step;
    const idle = driftLimit * Math.sin(m.idle * 0.25);

    const root = rootRef.current;
    if (root) root.rotation.y = BASE_Y + clamp(m.drift + idle, -0.3, 0.3);
  });

  return (
    <group ref={rootRef} rotation={[BASE_X, BASE_Y, 0]}>
      <ambientLight intensity={0.5} color="#5a6570" />
      <directionalLight position={[2.6, 3.2, 3.4]} intensity={2.4} color={LAMP} />
      <pointLight position={[-2.8, -1.6, -2.4]} intensity={22} distance={14} decay={2} color={LAMP} />

      {SEGMENTS.map((i) => (
        <mesh
          key={i}
          ref={(node) => {
            segRefs.current[i] = node;
          }}
        >
          <torusGeometry args={[1, TUBE, 10, 16, ARC]} />
          <meshStandardMaterial color={BODY} roughness={0.34} metalness={0.25} />
        </mesh>
      ))}

      <mesh ref={barYRef}>
        <cylinderGeometry args={[TUBE, TUBE, CROSS_HALF * 2, 10]} />
        <meshStandardMaterial color={BODY} roughness={0.34} metalness={0.25} />
      </mesh>
      <mesh ref={barXRef} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[TUBE, TUBE, CROSS_HALF * 2, 10]} />
        <meshStandardMaterial color={BODY} roughness={0.34} metalness={0.25} />
      </mesh>

      <group ref={dotRef}>
        <mesh scale={[1, 1, 0.2]}>
          <sphereGeometry args={[DOT, 40, 24]} />
          <meshStandardMaterial
            color={LAMP}
            roughness={0.3}
            metalness={0.15}
            emissive={LAMP}
            emissiveIntensity={0.12}
          />
        </mesh>
      </group>
    </group>
  );
}
