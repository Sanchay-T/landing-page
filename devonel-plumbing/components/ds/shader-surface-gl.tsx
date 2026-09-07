"use client";

/**
 * The WebGL half of `components/ds/shader-surface.tsx`. Do not import this file
 * from a variation: import `<ShaderSurface>`, which loads this one through
 * `next/dynamic({ ssr: false })` and only after the render gate says yes.
 *
 * Paper's `ShaderMount` already owns its own resize observer, its own
 * intersection observer and its own `visibilitychange` handling, so it pauses
 * off-screen and in a background tab without help. What it does not do by
 * default is limit resolution: it renders at 2x device pixels up to a 4K budget.
 * `minPixelRatio` and `maxPixelCount` below pull that down to the same 1.5x
 * ceiling `scene-canvas.tsx` applies to three.js.
 */

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect } from "react";

/** 1920 x 1080 at the 1.5x device-pixel ceiling, per side. */
const MAX_PIXEL_COUNT = Math.round(1920 * 1.5 * (1080 * 1.5));

export type ShaderSurfaceGLProps = {
  colors: readonly string[];
  label: string;
  speed: number;
  distortion: number;
  swirl: number;
  grain: number;
  onReady?: () => void;
};

export function ShaderSurfaceGL({
  colors,
  label,
  speed,
  distortion,
  swirl,
  grain,
  onReady,
}: ShaderSurfaceGLProps) {
  useEffect(() => {
    // Two frames: one for the mount, one for the shader's first paint.
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => onReady?.());
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, [onReady]);

  return (
    <MeshGradient
      role="img"
      aria-label={label}
      colors={[...colors]}
      speed={speed}
      distortion={distortion}
      swirl={swirl}
      grainOverlay={grain}
      minPixelRatio={1}
      maxPixelCount={MAX_PIXEL_COUNT}
      style={{
        position: "absolute",
        inset: 0,
        display: "block",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
      }}
    />
  );
}
