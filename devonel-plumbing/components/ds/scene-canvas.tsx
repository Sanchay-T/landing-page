"use client";

/**
 * The WebGL half of `components/ds/scene.tsx`. Do not import this file from a
 * variation: import `<Scene>` instead, which loads this one through
 * `next/dynamic({ ssr: false })` and only after the render gate says yes. That
 * indirection is what keeps three.js out of every route that has no 3D on it.
 *
 * Props
 * - `children`   the r3f scene graph (`<mesh>`, `<ambientLight>`, ...). Written
 *                inline in a client component; the intrinsic elements are typed
 *                globally by @react-three/fiber, so nothing needs importing.
 * - `label`      becomes `role="img"` + `aria-label` on the canvas wrapper. A
 *                screen reader hears one sentence instead of an empty canvas.
 * - `camera`     `{ position, fov }`, merged over the r3f defaults.
 * - `maxDpr`     clamped to 1.5, hard, whatever is passed.
 * - `fps`        clamped to 60, hard. See the frame driver below.
 * - `transparent` keep the clear colour alpha 0 so the static fallback shows
 *                through (default). Pass `false` for an opaque scene.
 * - `onReady`    fired once the first context exists, so the caller can fade in.
 * - `onFailure`  fired on `webglcontextlost`; the caller reverts to the fallback
 *                permanently rather than showing a dead grey rectangle.
 *
 * Render loop
 * The canvas runs `frameloop="never"` and is driven by the rAF loop in this
 * file, which ticks only while the surface intersects the viewport and the tab
 * is foregrounded. Time is accumulated locally and each delta is clamped, so
 * returning to a backgrounded tab resumes the animation where it stopped
 * instead of jumping forward by the time spent away. r3f reads the timestamp
 * passed to `advance()` as seconds of elapsed clock time in this mode.
 */

import { Canvas, type RootState } from "@react-three/fiber";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useDocumentVisible, useInView } from "@/lib/motion";

/** Hard ceilings. A caller may ask for less, never for more. */
const MAX_DPR = 1.5;
const MAX_FPS = 60;
/** One frame at 20 fps: the largest step the scene clock will take at once. */
const MAX_DELTA_SECONDS = 1 / 20;

export type SceneCameraProps = {
  position?: [number, number, number];
  fov?: number;
};

export type SceneCanvasProps = {
  children: ReactNode;
  label: string;
  camera?: SceneCameraProps;
  maxDpr?: number;
  fps?: number;
  transparent?: boolean;
  onReady?: () => void;
  onFailure?: () => void;
};

export function SceneCanvas({
  children,
  label,
  camera,
  maxDpr = MAX_DPR,
  fps = MAX_FPS,
  transparent = true,
  onReady,
  onFailure,
}: SceneCanvasProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const advanceRef = useRef<RootState["advance"] | null>(null);
  const elapsedRef = useRef(0);

  const inView = useInView(hostRef, { rootMargin: "120px" });
  const documentVisible = useDocumentVisible();
  const running = inView && documentVisible;

  const handleCreated = useCallback(
    (state: RootState) => {
      advanceRef.current = state.advance;

      const canvas = state.gl.domElement;
      const handleLost = (event: Event) => {
        // Stop the browser restoring a context we are about to stop driving.
        event.preventDefault();
        advanceRef.current = null;
        onFailure?.();
      };
      canvas.addEventListener("webglcontextlost", handleLost);

      onReady?.();
    },
    [onReady, onFailure],
  );

  useEffect(() => {
    if (!running) return;

    const minFrameMs = 1000 / Math.min(MAX_FPS, Math.max(1, fps));
    let frame = 0;
    let previous: number | null = null;

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);

      if (previous === null) {
        previous = now;
        return;
      }
      // 1 ms of slack, or a 60 fps cap drops every other frame on a 60 Hz panel.
      if (now - previous < minFrameMs - 1) return;

      const delta = Math.min((now - previous) / 1000, MAX_DELTA_SECONDS);
      previous = now;
      elapsedRef.current += delta;
      advanceRef.current?.(elapsedRef.current);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running, fps]);

  return (
    <div ref={hostRef} style={{ position: "absolute", inset: 0, display: "block" }}>
      <Canvas
        role="img"
        aria-label={label}
        frameloop="never"
        dpr={[1, Math.min(MAX_DPR, Math.max(0.5, maxDpr))]}
        camera={{ fov: 45, position: [0, 0, 5], ...camera }}
        gl={{
          alpha: transparent,
          antialias: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        onCreated={handleCreated}
        style={{ display: "block", width: "100%", height: "100%", maxWidth: "100%" }}
      >
        {children}
      </Canvas>
    </div>
  );
}
