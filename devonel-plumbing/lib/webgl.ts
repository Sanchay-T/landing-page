"use client";

/**
 * The one decision both `components/ds/scene.tsx` and
 * `components/ds/shader-surface.tsx` make before they load a single byte of
 * three.js or shader code: may this visitor have a GPU surface at all?
 *
 * `useRenderGate()` answers "pending" | "allow" | "deny". It is "pending" on the
 * server and on the hydration render, so the static fallback is what gets
 * server-rendered every time; it settles to "allow" or "deny" in an effect.
 * "deny" is permanent for that visit and means the fallback is the finished
 * design, not a placeholder.
 */

import { useEffect, useState } from "react";
import { useReducedMotion } from "./motion";

export type RenderGate = "pending" | "allow" | "deny";

type SaveDataConnection = { saveData?: boolean };
type ConstrainedNavigator = Navigator & {
  /** Chromium-only, in GiB, rounded down to 0.25/0.5/1/2/4/8. */
  deviceMemory?: number;
  connection?: SaveDataConnection;
};

let webglSupport: boolean | null = null;

/**
 * Probe for a WebGL context once per page load and cache the answer.
 *
 * The probe context is released through `WEBGL_lose_context` so it does not
 * hold one of the browser's small pool of live contexts.
 */
export function hasWebGL(): boolean {
  if (webglSupport !== null) return webglSupport;
  if (typeof document === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl2") ??
      canvas.getContext("webgl")) as WebGLRenderingContext | null;
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    webglSupport = gl !== null;
  } catch {
    webglSupport = false;
  }

  return webglSupport;
}

/**
 * `true` for a device that told us it cannot afford this: under 2 GiB of RAM,
 * or Data Saver switched on. Both signals are Chromium-only and absent
 * elsewhere, which we read as "no objection".
 */
export function isConstrainedClient(): boolean {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as ConstrainedNavigator;

  if (typeof nav.deviceMemory === "number" && nav.deviceMemory < 2) return true;
  if (nav.connection?.saveData === true) return true;

  return false;
}

/**
 * Reduced motion, no WebGL, under 2 GiB of memory, or Data Saver: all four
 * deny. Anything else allows, once the client has had a chance to answer.
 */
export function useRenderGate(): RenderGate {
  const prefersReducedMotion = useReducedMotion();
  const [capable, setCapable] = useState<boolean | null>(null);

  useEffect(() => {
    setCapable(hasWebGL() && !isConstrainedClient());
  }, []);

  if (prefersReducedMotion) return "deny";
  if (capable === null) return "pending";
  return capable ? "allow" : "deny";
}
