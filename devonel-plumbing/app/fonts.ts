import { Fraunces, Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

/**
 * The whole project's type budget: four variable families, self-hosted by
 * next/font, exposed as CSS variables and mapped to roles in `app/globals.css`.
 * Adding a fifth family is a budget decision, not a styling decision.
 *
 * `preload` is on for Geist only. It is the body face of the switcher at `/`
 * and of variations 3 and 5, so it is worth the early request; preloading the
 * other three on every route would ship font bytes that most routes never use.
 * `display: "swap"` plus next/font's metric-matched fallback keeps the swap
 * from moving layout.
 */

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
  // Optical size is the point of Fraunces here: 144 for a broadsheet masthead,
  // 14 for a caption, from one file.
  axes: ["opsz"],
  style: ["normal", "italic"],
});

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: false,
});

/** Every font variable, for the <html> className in the root layout. */
export const fontVariables = [
  fraunces.variable,
  geist.variable,
  geistMono.variable,
  spaceGrotesk.variable,
].join(" ");
