"use client";

/**
 * The chrome orb, and the twist this whole direction rests on.
 *
 * The orb's environment map is not an HDRI of a city or a photo studio. It is
 * painted at runtime on an offscreen 2D canvas that holds the words Devonel
 * says about itself, set in Archivo Expanded, white on near-black, over two
 * coloured fields that stand in for a cold key light and a warm rim. As the map
 * turns, those words swim across the chrome and dissolve. The reflection costs
 * no download, and no other site can carry it, because no other site has those
 * words. Every phrase is sourced from `docs/goal/COPY.md`; nothing is invented.
 *
 * This module is the only thing on the route that imports three. It is reached
 * through `next/dynamic({ ssr: false })` from `hero.tsx`, so three, fiber and
 * this file all land in an async chunk and never in the route's first-load JS.
 * See the header of `components/ds/scene.tsx` for the measurement behind that.
 *
 * Three details that are easy to get wrong and expensive to debug:
 *
 * 1. A mirror reverses handedness, so a word painted the normal way reads
 *    backwards on the chrome. Every run is drawn through `scale(-1, 1)` so it
 *    reads forwards in the reflection.
 * 2. Rotating the mesh does nothing. A sphere's reflection is sampled from the
 *    world-space normal, which does not change when a radially symmetric object
 *    spins, so the idle and the pointer tilt both drive `envMapRotation`
 *    instead of `mesh.rotation`.
 * 3. three PMREM-converts an equirectangular env map once and caches it against
 *    the texture object, so repainting the canvas and setting `needsUpdate`
 *    would change nothing. The build animation therefore hands the material a
 *    new `CanvasTexture` per step and disposes the old one, which also drops the
 *    cached PMREM. Seven steps over 1.2s, then never again.
 *
 * Numbers here are the direction's. The three that decide how big the disc
 * looks - sphere radius 1, camera fov 26.4, camera z 4.6 - put the silhouette
 * at 94.96 percent of the square frame, which is where `--v5-orb-box` in
 * `tokens.css` gets its divisor. The camera half lives in `hero.tsx`. Change
 * one, change all three.
 */

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* ------------------------------------------------------------- constants --- */

/** Equirectangular, so 2:1. 1024 wide keeps the reflection close to one texel
 *  per screen pixel on a 560px orb, which is what stops the words crawling. */
const ENV_W = 1024;
const ENV_H = 512;

/** Type in the map, mirroring `--v5-display-*` in tokens.css. */
const ENV_WGHT = 800;
const ENV_TRACKING = "-0.02em";
const ENV_FALLBACK_FAMILY = "system-ui, sans-serif";

/** Geometry. The camera that frames it lives in `hero.tsx`, which is the file
 *  that owns the box, so the two numbers that set the disc size sit next to the
 *  element they size. Keep radius 1 / fov 26.4 / z 4.6 in step with
 *  `--v5-orb-box`. */
const SPHERE_RADIUS = 1;
const SPHERE_SEGMENTS = 128;

/** Motion, mirroring `--v5-dur-build` and `--v5-dur-hover` in tokens.css. */
const BUILD_MS = 1200;
const IDLE_RAD_PER_SECOND = 0.08;
const TILT_MAX_RAD = (8 * Math.PI) / 180;
const TILT_TAU_SECONDS = 0.2;
const ROUGHNESS_MIN = 0.02;
const ROUGHNESS_MAX = 0.35;

/**
 * The four latitudes the vocabulary sits on, as equirectangular `v` (0 is the
 * south pole, 1 the north). Everything is inside 0.30..0.84 on purpose: the
 * poles and the far side of the map land on the orb's silhouette, where the
 * reflection compresses to nothing, and type there is what shimmers. The rim
 * gets a smooth gradient and no letters.
 *
 * `phase` walks each band's starting longitude so the four rows never stack
 * into a column.
 */
const ENV_BANDS = [
  { v: 0.5, size: 84, alpha: 1, phase: 0.02 },
  { v: 0.68, size: 66, alpha: 0.82, phase: 0.3 },
  { v: 0.32, size: 70, alpha: 0.86, phase: 0.62 },
  { v: 0.82, size: 56, alpha: 0.42, phase: 0.44 },
] as const;

/**
 * Devonel's vocabulary, in the order it is written onto the map. Every phrase
 * appears in `docs/goal/COPY.md`: "Sixteen days" and "ships before it pitches"
 * are the hero headline and its first alternate, "paid discovery" is the first
 * commercial step, Dubai and Mumbai are the two cities, and Sanchay and Umayr
 * are the two founders. No client, no product, no invented word.
 *
 * The first two are the phrases the reader needs, so they are written first and
 * they sit on the equator and just above it, where the chrome covers the
 * headline.
 */
const ENV_WORDS: readonly { band: number; text: string }[] = [
  { band: 0, text: "Sixteen days" },
  { band: 1, text: "Ships before it pitches" },
  { band: 0, text: "Dubai" },
  { band: 2, text: "Paid discovery" },
  { band: 2, text: "Mumbai" },
  { band: 3, text: "Sanchay" },
  { band: 3, text: "Umayr" },
] as const;

/* --------------------------------------------------------------- painting --- */

function rgba(channels: readonly [number, number, number], alpha: number): string {
  return `rgba(${channels[0]}, ${channels[1]}, ${channels[2]}, ${alpha})`;
}

/** A soft elliptical light, drawn three times so it survives the seam at u 0/1. */
function paintGlow(
  ctx: CanvasRenderingContext2D,
  width: number,
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  channels: readonly [number, number, number],
  alpha: number,
): void {
  for (const offset of [-width, 0, width]) {
    ctx.save();
    ctx.translate(cx + offset, cy);
    ctx.scale(1, ry / rx);
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
    gradient.addColorStop(0, rgba(channels, alpha));
    gradient.addColorStop(1, rgba(channels, 0));
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, rx, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

/**
 * The world the orb reflects before a single word is written: a bright ceiling
 * falling to a black floor, one cold key, one warm rim, and one floor bounce.
 * The value ramp is what makes chrome read as chrome; without it the sphere is
 * a grey ball with stickers on it, and the two temperatures are the
 * studio-photography trick the direction asks for.
 *
 * The ceiling and the floor are full-width bands rather than shaped panels on
 * purpose. Near the poles an equirectangular map stretches a rectangle into a
 * torn-looking arc, so anything with a corner up there reads as a smudge on the
 * chrome; a band that wraps the whole latitude reads as a clean cap of light.
 */
function paintGround(ctx: CanvasRenderingContext2D, width: number, height: number): void {
  ctx.fillStyle = "#04060b";
  ctx.fillRect(0, 0, width, height);

  const ramp = ctx.createLinearGradient(0, 0, 0, height);
  ramp.addColorStop(0, "rgba(214, 228, 248, 0.7)");
  ramp.addColorStop(0.22, "rgba(120, 142, 176, 0.26)");
  ramp.addColorStop(0.52, "rgba(28, 38, 54, 0.1)");
  ramp.addColorStop(0.78, "rgba(4, 6, 11, 0)");
  ramp.addColorStop(1, "rgba(0, 0, 0, 0.92)");
  ctx.fillStyle = ramp;
  ctx.fillRect(0, 0, width, height);

  const key = [143, 182, 255] as const; // --v5-key
  const rim = [240, 192, 138] as const; // --v5-rim

  paintGlow(ctx, width, 0.6 * width, 0.24 * height, 0.3 * width, 0.3 * height, key, 0.5);
  paintGlow(ctx, width, 0.18 * width, 0.62 * height, 0.34 * width, 0.26 * height, rim, 0.4);
  paintGlow(ctx, width, 0.92 * width, 0.46 * height, 0.16 * width, 0.2 * height, key, 0.22);

  // Ceiling: the hard-edged strip every chrome ball needs, wrapped as a band.
  const ceiling = ctx.createLinearGradient(0, 0, 0, 0.09 * height);
  ceiling.addColorStop(0, "rgba(238, 243, 250, 0.92)");
  ceiling.addColorStop(0.7, "rgba(238, 243, 250, 0.62)");
  ceiling.addColorStop(1, "rgba(238, 243, 250, 0)");
  ctx.fillStyle = ceiling;
  ctx.fillRect(0, 0, width, 0.09 * height);

  // Floor bounce: a cool sliver that separates the bottom of the orb from the
  // void behind it, so the silhouette never dissolves into the ground.
  const floor = ctx.createLinearGradient(0, 0.86 * height, 0, height);
  floor.addColorStop(0, "rgba(150, 172, 206, 0)");
  floor.addColorStop(0.55, "rgba(150, 172, 206, 0.3)");
  floor.addColorStop(1, "rgba(150, 172, 206, 0.05)");
  ctx.fillStyle = floor;
  ctx.fillRect(0, 0.86 * height, width, 0.14 * height);
}

function paintWord(
  ctx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  cy: number,
  width: number,
  alpha: number,
  size: number,
): void {
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = `rgba(244, 248, 255, ${alpha})`;
  ctx.shadowColor = `rgba(180, 206, 250, ${alpha * 0.5})`;
  ctx.shadowBlur = size * 0.35;
  for (const offset of [-width, 0, width]) {
    ctx.save();
    ctx.translate(cx + offset, cy);
    // A mirror reverses handedness. Flip the run so it reads forwards on the
    // chrome rather than backwards.
    ctx.scale(-1, 1);
    ctx.fillText(text, 0, 0);
    ctx.restore();
  }
  ctx.restore();
}

function setEnvFont(ctx: CanvasRenderingContext2D, size: number, family: string): void {
  // `expanded` is the CSS font-stretch keyword for 125%, which is the same
  // width instance the page sets with `font-variation-settings: "wdth" 125`.
  // Canvas has no font-variation-settings, and the shorthand is the only way in.
  ctx.font = `${ENV_WGHT} expanded ${size}px ${family}`;
  if ("letterSpacing" in ctx) {
    (ctx as unknown as { letterSpacing: string }).letterSpacing = ENV_TRACKING;
  }
}

/**
 * Paint the map with the first `reveal` phrases written on it. Positions come
 * from the full band, not from the revealed subset, so a word appears where it
 * will stay instead of sliding as its neighbours arrive.
 */
function paintEnvMap(canvas: HTMLCanvasElement, reveal: number, family: string): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalCompositeOperation = "source-over";
  ctx.clearRect(0, 0, width, height);
  paintGround(ctx, width, height);

  for (let band = 0; band < ENV_BANDS.length; band += 1) {
    const row = ENV_BANDS[band];
    const entries = ENV_WORDS.map((word, order) => ({ ...word, order })).filter(
      (word) => word.band === band,
    );
    if (entries.length === 0) continue;

    setEnvFont(ctx, row.size, family);
    let widths = entries.map((entry) => ctx.measureText(entry.text).width);
    let total = widths.reduce((sum, value) => sum + value, 0);

    // A band must never run out of room: if the loaded face is wider than the
    // one this was tuned against, shrink the row rather than overlap it.
    if (total > width * 0.9) {
      const size = Math.max(24, Math.floor((row.size * width * 0.9) / total));
      setEnvFont(ctx, size, family);
      widths = entries.map((entry) => ctx.measureText(entry.text).width);
      total = widths.reduce((sum, value) => sum + value, 0);
    }

    const gap = (width - total) / entries.length;
    const y = (1 - row.v) * height;
    let cursor = row.phase * width + gap / 2;

    for (let index = 0; index < entries.length; index += 1) {
      if (entries[index].order < reveal) {
        paintWord(ctx, entries[index].text, cursor + widths[index] / 2, y, width, row.alpha, row.size);
      }
      cursor += widths[index] + gap;
    }
  }
}

function readDisplayFamily(): string {
  if (typeof document === "undefined") return ENV_FALLBACK_FAMILY;
  const family = getComputedStyle(document.documentElement)
    .getPropertyValue("--font-archivo")
    .trim();
  return family.length > 0 ? family : ENV_FALLBACK_FAMILY;
}

/* -------------------------------------------------------------- the scene --- */

export function Orb() {
  const gl = useThree((state) => state.gl);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const spin = useRef(0);
  const tilt = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // The environment map is a designed image, not a captured one: its white is
  // meant to arrive as white and its two temperatures as themselves. A filmic
  // curve would roll both off, so this scene renders without tone mapping.
  useEffect(() => {
    const previous = gl.toneMapping;
    gl.toneMapping = THREE.NoToneMapping;
    return () => {
      gl.toneMapping = previous;
    };
  }, [gl]);

  const canvas = useMemo(() => {
    const element = document.createElement("canvas");
    element.width = ENV_W;
    element.height = ENV_H;
    return element;
  }, []);

  // Painting before Archivo has arrived would bake the fallback face into the
  // texture, so the build waits for the face and then runs.
  const [family, setFamily] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    const resolved = readDisplayFamily();
    const settle = () => {
      if (!cancelled) setFamily(resolved);
    };
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.load(`${ENV_WGHT} 84px ${resolved}`).then(settle, settle);
    } else {
      settle();
    }
    return () => {
      cancelled = true;
    };
  }, []);

  // Entrance primitive: one phrase per step, the whole vocabulary in 1.2s, once.
  const [reveal, setReveal] = useState(0);
  useEffect(() => {
    if (family === null || reveal >= ENV_WORDS.length) return;
    const id = window.setTimeout(
      () => setReveal((step) => step + 1),
      BUILD_MS / ENV_WORDS.length,
    );
    return () => window.clearTimeout(id);
  }, [family, reveal]);

  const texture = useMemo(() => {
    paintEnvMap(canvas, family === null ? 0 : reveal, family ?? ENV_FALLBACK_FAMILY);
    const map = new THREE.CanvasTexture(canvas);
    map.mapping = THREE.EquirectangularReflectionMapping;
    map.colorSpace = THREE.SRGBColorSpace;
    return map;
  }, [canvas, family, reveal]);

  useEffect(
    () => () => {
      texture.dispose();
    },
    [texture],
  );

  // Hover primitive: pointer position tilts the orb up to 8 degrees, damped over
  // 200ms. Desktop pointer only, and on `window` because the canvas is
  // `pointer-events: none` so it never steals a selection from the headline.
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const element = gl.domElement;
    const onPointerMove = (event: PointerEvent) => {
      const box = element.getBoundingClientRect();
      const dx = (event.clientX - (box.left + box.width / 2)) / (window.innerWidth / 2);
      const dy = (event.clientY - (box.top + box.height / 2)) / (window.innerHeight / 2);
      tilt.current.targetY = THREE.MathUtils.clamp(dx, -1, 1) * TILT_MAX_RAD;
      tilt.current.targetX = THREE.MathUtils.clamp(dy, -1, 1) * TILT_MAX_RAD;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [gl]);

  useFrame((_, delta) => {
    const material = materialRef.current;
    if (!material) return;

    spin.current += IDLE_RAD_PER_SECOND * delta;

    const damping = 1 - Math.exp(-delta / TILT_TAU_SECONDS);
    tilt.current.x += (tilt.current.targetX - tilt.current.x) * damping;
    tilt.current.y += (tilt.current.targetY - tilt.current.y) * damping;

    material.envMapRotation.set(tilt.current.x, spin.current + tilt.current.y, 0);

    // Scroll primitive: one uniform. The chrome goes matte as the hero leaves.
    const box = gl.domElement.getBoundingClientRect();
    const progress =
      box.height > 0 ? THREE.MathUtils.clamp(-box.top / box.height, 0, 1) : 0;
    material.roughness = ROUGHNESS_MIN + progress * (ROUGHNESS_MAX - ROUGHNESS_MIN);
  });

  return (
    <>
      {/* Metal takes almost nothing from an analytic light, so these two are a
          pair of pinpoint sparkles on top of the work the map is doing. They
          carry the same two temperatures, from the same tokens. */}
      <directionalLight color="#8fb6ff" intensity={0.7} position={[-2.4, 2.2, 3.2]} />
      <directionalLight color="#f0c08a" intensity={0.45} position={[2.8, -1.6, -2.2]} />
      <mesh>
        <sphereGeometry args={[SPHERE_RADIUS, SPHERE_SEGMENTS, SPHERE_SEGMENTS]} />
        <meshStandardMaterial
          ref={materialRef}
          color="#eef3fa"
          metalness={1}
          roughness={ROUGHNESS_MIN}
          envMap={texture}
          envMapIntensity={1}
        />
      </mesh>
    </>
  );
}
