"use client";

/**
 * Motion primitives shared by every animated surface on the site.
 *
 * `useReducedMotion()` is SSR-safe: it reports `false` on the server and on the
 * hydration render, then re-renders with the real value, so it never produces a
 * hydration mismatch. `useInView()` and `useDocumentVisible()` are the two
 * signals `components/ds/scene.tsx` and `components/ds/shader-surface.tsx` use
 * to stop burning GPU on a canvas nobody is looking at.
 *
 * These are hooks, so only a client component may call them.
 */

import { useEffect, useState, useSyncExternalStore, type RefObject } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function canMatchMedia(): boolean {
  return typeof window !== "undefined" && typeof window.matchMedia === "function";
}

function subscribeReducedMotion(onStoreChange: () => void): () => void {
  if (!canMatchMedia()) return () => {};
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot(): boolean {
  if (!canMatchMedia()) return false;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

/**
 * `true` when the visitor has asked their OS for reduced motion.
 *
 * Treat it as a hard gate, not a hint: the animated surface should not mount at
 * all, so no WebGL context is created and no rAF loop starts.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

export type UseInViewOptions = {
  /** Grow the viewport before intersecting, so the scene warms up just off-screen. */
  rootMargin?: string;
  /** Fraction of the element that must be visible. */
  threshold?: number;
  /** Latch to `true` on the first intersection and stop observing. */
  once?: boolean;
};

/**
 * `true` while `ref`'s element intersects the viewport.
 *
 * The ref must point at an element that is rendered on the first commit; a
 * conditionally mounted element will not be picked up, because the observer is
 * attached once. Where `IntersectionObserver` is missing the hook reports
 * `true`, so the content is never hidden by a missing browser feature.
 */
export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  { rootMargin = "200px", threshold = 0, once = false }: UseInViewOptions = {},
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, rootMargin, threshold, once]);

  return inView;
}

function subscribeVisibility(onStoreChange: () => void): () => void {
  if (typeof document === "undefined") return () => {};
  document.addEventListener("visibilitychange", onStoreChange);
  return () => document.removeEventListener("visibilitychange", onStoreChange);
}

function getVisibilitySnapshot(): boolean {
  if (typeof document === "undefined") return true;
  return document.visibilityState !== "hidden";
}

function getVisibilityServerSnapshot(): boolean {
  return true;
}

/** `true` while the tab is foregrounded. Pair with `useInView` to pause work. */
export function useDocumentVisible(): boolean {
  return useSyncExternalStore(
    subscribeVisibility,
    getVisibilitySnapshot,
    getVisibilityServerSnapshot,
  );
}
