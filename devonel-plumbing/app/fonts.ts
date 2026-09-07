import { Archivo, Fraunces, Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

/**
 * The whole project's type budget: five variable families, self-hosted by
 * next/font, exposed as CSS variables and mapped to roles in `app/globals.css`.
 * Adding a sixth family is a budget decision, not a styling decision.
 *
 * Archivo is the fifth and it earns the slot on its width axis rather than on
 * its shapes: one file covers two display systems that look nothing alike -
 * `wdth` 70 / `wght` 700 is the condensed date face of v3 Scroll Story, where a
 * date and a headline have to share a line, and `wdth` 125 / `wght` 800 is the
 * expanded poster face of v5 Liquid Metal, whose counters have to stay legible
 * when the orb reflects them. A static pair of weights would not do either job.
 *
 * `preload` is on for Geist only. It is the body face of the switcher at `/`
 * and of every variation, so it is worth the early request; preloading the
 * other four on every route would ship font bytes that most routes never use.
 * `display: "swap"` plus next/font's metric-matched fallback keeps the swap
 * from moving layout.
 */

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
  // Optical size is the point of Fraunces here: 144 for a display line, 14 for
  // a caption, from one file.
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

export const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  preload: false,
  // Width is the reason this family is here. `wght` is on every variable font
  // by default, so listing `wdth` beside it keeps the whole 62-125 range live
  // and lets v3 set 70 and v5 set 125 from the same file with
  // `font-variation-settings`. Do not pin `weight` here: a fixed weight
  // collapses the font to a static instance and takes the axes with it.
  axes: ["wdth"],
});

/** Every font variable, for the <html> className in the root layout. */
export const fontVariables = [
  fraunces.variable,
  geist.variable,
  geistMono.variable,
  spaceGrotesk.variable,
  archivo.variable,
].join(" ");
