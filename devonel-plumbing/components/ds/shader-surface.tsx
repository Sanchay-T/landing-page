"use client";

/**
 * `<ShaderSurface>` is the only shader entry point a variation should import.
 * Same shape as `<Scene>`: render gate, static fallback, and a
 * `next/dynamic({ ssr: false })` boundary in front of `shader-surface-gl.tsx`,
 * so @paper-design/shaders-react is fetched only on a route that renders one.
 *
 * How a variation uses it
 *
 *   "use client";
 *   import { ShaderSurface } from "@/components/ds/shader-surface";
 *
 *   <ShaderSurface
 *     className="absolute inset-0"
 *     label="A slow wash of off-white, clay and rust"
 *     colors={["#eef0eb", "#d8dcd2", "#c8451c", "#0e1410"]}
 *     speed={0.5}
 *     distortion={0.8}
 *   />
 *
 * Props
 * - `colors`      2 to 10 CSS colours. They drive the shader AND the static
 *                 fallback, so the two can never drift apart.
 * - `speed`       animation rate, default 0.5. `0` renders one static frame.
 * - `distortion`  organic noise warp, 0..1, default 0.8.
 * - `swirl`       vortex warp, 0..1, default 0.1.
 * - `grain`       black/white grain overlay, 0..1, default 0.
 * - `label`       one sentence describing the surface. Lands on whichever layer
 *                 is currently visible, never on both.
 * - `className` / `style`  applied to the outer box. Give it a height: the
 *                 surface has no intrinsic size.
 * - `fallback`    optional override. Omit it and the default is a CSS gradient
 *                 built from `colors` via `--shader-c0..N` custom properties.
 *
 * Fallback rules - identical to `<Scene>`. The static gradient renders
 * server-side and through hydration, permanently under
 * `prefers-reduced-motion: reduce`, permanently with no WebGL / under 2 GiB of
 * `navigator.deviceMemory` / with Data Saver on, permanently if the shader
 * throws, and until the first shader frame, after which the canvas fades over.
 */

import dynamic from "next/dynamic";
import { useCallback, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { useRenderGate } from "@/lib/webgl";
import { GLBoundary } from "./gl-boundary";

const ShaderSurfaceGL = dynamic(
  () => import("./shader-surface-gl").then((m) => m.ShaderSurfaceGL),
  { ssr: false },
);

/** Where each colour after the first sits in the static fallback. */
const BLOB_POSITIONS = [
  "22% 24%",
  "82% 18%",
  "26% 82%",
  "78% 76%",
  "50% 46%",
  "8% 56%",
  "94% 48%",
  "44% 6%",
  "58% 96%",
] as const;

const BLOB_SIZES = [
  "68% 62%",
  "58% 66%",
  "72% 58%",
  "62% 70%",
  "80% 64%",
  "54% 60%",
  "66% 74%",
  "60% 56%",
  "70% 68%",
] as const;

/**
 * The static twin of the shader: the same colours as `--shader-c0..N` custom
 * properties, the first as the ground and the rest as soft radial blobs.
 *
 * Exported so a variation can paint an adjacent panel from the same palette
 * without re-deriving it, and so a caller passing its own `fallback` can still
 * start from this and add to it.
 */
export function shaderFallbackStyle(colors: readonly string[]): CSSProperties {
  const vars: Record<string, string> = {};
  colors.forEach((color, index) => {
    vars[`--shader-c${index}`] = color;
  });

  const layers = colors
    .slice(1)
    .map((_, index) => {
      const size = BLOB_SIZES[index % BLOB_SIZES.length];
      const position = BLOB_POSITIONS[index % BLOB_POSITIONS.length];
      return `radial-gradient(${size} at ${position}, var(--shader-c${index + 1}) 0%, transparent 72%)`;
    })
    .join(", ");

  return {
    ...vars,
    backgroundColor: colors.length > 0 ? "var(--shader-c0)" : undefined,
    backgroundImage: layers.length > 0 ? layers : undefined,
  } as CSSProperties;
}

export type ShaderSurfaceProps = {
  colors: readonly string[];
  label: string;
  speed?: number;
  distortion?: number;
  swirl?: number;
  grain?: number;
  className?: string;
  style?: CSSProperties;
  fallback?: ReactNode;
};

export function ShaderSurface({
  colors,
  label,
  speed = 0.5,
  distortion = 0.8,
  swirl = 0.1,
  grain = 0,
  className,
  style,
  fallback,
}: ShaderSurfaceProps) {
  const gate = useRenderGate();
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleReady = useCallback(() => setReady(true), []);
  const handleFailure = useCallback(() => {
    setReady(false);
    setFailed(true);
  }, []);

  const posterStyle = useMemo(() => shaderFallbackStyle(colors), [colors]);
  const mounted = gate === "allow" && !failed;

  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "block",
        maxWidth: "100%",
        overflow: "hidden",
        contain: "layout paint",
        ...style,
      }}
    >
      <div
        style={{ position: "relative", zIndex: 0, height: "100%", width: "100%", ...posterStyle }}
        {...(ready ? { "aria-hidden": true } : { role: "img", "aria-label": label })}
      >
        {fallback}
      </div>

      {mounted ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: ready ? 1 : 0,
            transition: "opacity 600ms ease",
          }}
        >
          <GLBoundary onError={handleFailure}>
            <ShaderSurfaceGL
              colors={colors}
              label={label}
              speed={speed}
              distortion={distortion}
              swirl={swirl}
              grain={grain}
              onReady={handleReady}
            />
          </GLBoundary>
        </div>
      ) : null}
    </div>
  );
}
