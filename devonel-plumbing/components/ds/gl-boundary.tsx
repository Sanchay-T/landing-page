"use client";

/**
 * Shared crash boundary for the two GPU surfaces (`scene.tsx`,
 * `shader-surface.tsx`). A shader that fails to compile or a scene that throws
 * must not take the page down: this unmounts the offending subtree and hands
 * the owner a one-way switch back to its static fallback.
 *
 * Internal to `components/ds`. Variations never touch it.
 */

import { Component, type ReactNode } from "react";

type GLBoundaryProps = { children: ReactNode; onError: () => void };
type GLBoundaryState = { crashed: boolean };

export class GLBoundary extends Component<GLBoundaryProps, GLBoundaryState> {
  state: GLBoundaryState = { crashed: false };

  static getDerivedStateFromError(): GLBoundaryState {
    return { crashed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.crashed ? null : this.props.children;
  }
}
