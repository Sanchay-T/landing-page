"use client";

/**
 * `<Scene>` is the only 3D entry point a variation should import.
 *
 * It is a few hundred bytes: the render gate, the static fallback, and a
 * `next/dynamic({ ssr: false })` boundary in front of `scene-canvas.tsx`. three
 * .js is fetched only when a visitor actually reaches a route that renders one
 * of these and passes the gate, so a route with no 3D on it pays nothing.
 *
 * How a variation uses it
 *
 *   "use client";
 *   import { Scene } from "@/components/ds/scene";
 *
 *   <Scene
 *     label="A slowly turning brass valve, rendered in three dimensions"
 *     className="absolute inset-0"
 *     fallback={<div className="h-full w-full bg-[radial-gradient(...)]" />}
 *   >
 *     <ambientLight intensity={0.6} />
 *     <mesh>
 *       <torusKnotGeometry args={[1, 0.3, 128, 32]} />
 *       <meshStandardMaterial color="#c8451c" roughness={0.35} />
 *     </mesh>
 *   </Scene>
 *
 * Anything heavier than intrinsic elements goes behind its own dynamic import.
 * `@react-three/drei` and any `import ... from "three"` pull the whole library
 * into whatever module names them, and if that module is statically imported by
 * a page it lands in that route's first-load JS. Measured on a probe route:
 * a statically imported drei scene took the route from 3.1 kB / 105 kB to
 * 239 kB / 340 kB. The same scene behind `next/dynamic` kept it at 3.1 kB /
 * 105 kB and rendered identically, so:
 *
 *   const Knot = dynamic(() => import("./knot").then((m) => m.Knot), { ssr: false });
 *   <Scene ...><ambientLight intensity={0.6} /><Knot /></Scene>
 *
 * Props
 * - `children`   the r3f scene graph. Intrinsic elements (`<mesh>`,
 *                `<meshStandardMaterial>`, ...) are typed globally by
 *                @react-three/fiber and need no import, so a caller that sticks
 *                to them costs nothing.
 * - `fallback`   REQUIRED. A static poster - CSS gradient, SVG or `<img>`. It
 *                sits in normal flow underneath the canvas, so it is what
 *                defines the box's height unless `className` sets one.
 * - `label`      one sentence describing what the scene shows. Lands on
 *                whichever layer is currently visible, never on both.
 * - `className` / `style`  applied to the outer box. Give it a height.
 * - `camera`, `maxDpr` (<= 1.5), `fps` (<= 60), `transparent`  forwarded.
 *
 * Fallback rules - the fallback is not a spinner, it is the design for anyone
 * the gate turns away. It is what renders:
 * - server-side and through hydration, always;
 * - permanently under `prefers-reduced-motion: reduce`;
 * - permanently with no WebGL, under 2 GiB of `navigator.deviceMemory`, or with
 *   Data Saver on (see `lib/webgl.ts`);
 * - permanently if the scene throws or loses its WebGL context;
 * - and until the first frame is drawn, after which the canvas fades over it.
 */

import dynamic from "next/dynamic";
import { useCallback, useState, type CSSProperties, type ReactNode } from "react";
import { useRenderGate } from "@/lib/webgl";
import { GLBoundary } from "./gl-boundary";
import type { SceneCameraProps } from "./scene-canvas";

const SceneCanvas = dynamic(() => import("./scene-canvas").then((m) => m.SceneCanvas), {
  ssr: false,
});

export type SceneProps = {
  children: ReactNode;
  fallback: ReactNode;
  label: string;
  className?: string;
  style?: CSSProperties;
  camera?: SceneCameraProps;
  maxDpr?: number;
  fps?: number;
  transparent?: boolean;
};

export function Scene({
  children,
  fallback,
  label,
  className,
  style,
  camera,
  maxDpr,
  fps,
  transparent,
}: SceneProps) {
  const gate = useRenderGate();
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleReady = useCallback(() => setReady(true), []);
  const handleFailure = useCallback(() => {
    setReady(false);
    setFailed(true);
  }, []);

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
        style={{ position: "relative", zIndex: 0, height: "100%", width: "100%" }}
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
            <SceneCanvas
              label={label}
              camera={camera}
              maxDpr={maxDpr}
              fps={fps}
              transparent={transparent}
              onReady={handleReady}
              onFailure={handleFailure}
            >
              {children}
            </SceneCanvas>
          </GLBoundary>
        </div>
      ) : null}
    </div>
  );
}
