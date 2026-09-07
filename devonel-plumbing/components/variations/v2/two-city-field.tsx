"use client";

/**
 * v2 "Shader Light" - the two-city instrument.
 *
 * One module owns everything that reads the clock in Dubai and Mumbai: the
 * hue ramp, the two live clocks, and the field they colour. Nothing else on
 * the page calls `Intl` or mixes a colour, so the field and the clocks can
 * never disagree about what time it is.
 *
 * The field is one WebGL context and two layers inside it:
 *
 *   poles   an opaque CSS layer, paper plus two radial gradients pinned at
 *           28% and 62% across the page (see `--v2-band` in tokens.css). It
 *           is exact, it costs no JavaScript, and it is also the no-WebGL
 *           fallback, so the twist survives with the GPU switched off.
 *   mesh    `<ShaderSurface>` with exactly two colours, the same two hues
 *           carried at 35% alpha so the poles read through the canvas.
 *           `MeshGradient` moves its colour spots on trajectories of its own,
 *           which is why it supplies the drift and the paper grain and never
 *           decides where a city is.
 *
 * The whole thing tops out at 22% opacity over paper (`--v2-field-max`), so
 * no text on this page is ever set on a live shader at full strength.
 */

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ShaderSurface } from "@/components/ds/shader-surface";
import { useReducedMotion } from "@/lib/motion";

export type CityKey = "dubai" | "mumbai";

type City = {
  key: CityKey;
  /** Printed beside the time. Sourced to brief 9.7, "Dubai and Mumbai". */
  label: string;
  /** IANA zone. Dubai is UTC+4, Kolkata is UTC+5:30: the 1h30 in the label. */
  timeZone: string;
  /** Hue at local midday. */
  day: string;
  /** Hue at local midnight. */
  night: string;
  /** Where this city's pole sits across the band, 0 at the left edge, 1 at the right. */
  pole: number;
};

export const CITIES: Record<CityKey, City> = {
  dubai: {
    key: "dubai",
    label: "Dubai",
    timeZone: "Asia/Dubai",
    day: "#e2a34b",
    night: "#2b3a6b",
    pole: 0.28,
  },
  mumbai: {
    key: "mumbai",
    label: "Mumbai",
    timeZone: "Asia/Kolkata",
    day: "#3e9b8a",
    night: "#1e3a44",
    pole: 0.62,
  },
};

export const CITY_ORDER: readonly CityKey[] = ["dubai", "mumbai"];

/**
 * Authored label, not copy from `docs/goal/COPY.md`: the document carries no
 * phrasing for the offset between the two zones. It states a fact that falls
 * straight out of the two IANA zones above, and it appears nowhere else on the
 * site.
 */
export const OFFSET_LABEL = "1h30 apart";

/**
 * Alpha the two hues carry into the mesh, as hex. 0x59 is 35%.
 *
 * `MeshGradient` sweeps each colour spot across the whole surface on its own
 * trajectory, so at half strength it could put the warm city on the right at
 * some moment of its cycle. A third is enough for the drift and the grain to
 * read while the pole layer keeps deciding which side each city is on.
 */
const MESH_ALPHA = "59";

/** Clocks print HH:MM, so a quarter-minute tick is finer than the display. */
const TICK_MS = 15_000;

// ------------------------------------------------------------------ the clock

const formatters = new Map<string, Intl.DateTimeFormat>();

function formatter(timeZone: string): Intl.DateTimeFormat {
  let found = formatters.get(timeZone);
  if (!found) {
    found = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });
    formatters.set(timeZone, found);
  }
  return found;
}

/** Local wall-clock time in a city, as parts and as the printed string. */
export function cityClock(city: City, now: number): { hour: number; minute: number; text: string } {
  const parts = formatter(city.timeZone).formatToParts(new Date(now));
  const read = (type: "hour" | "minute") => Number(parts.find((p) => p.type === type)?.value ?? 0);
  const hour = read("hour");
  const minute = read("minute");
  const pad = (n: number) => String(n).padStart(2, "0");
  return { hour, minute, text: `${pad(hour)}:${pad(minute)}` };
}

// -------------------------------------------------------------------- the hue

function smoothstep(x: number): number {
  const c = Math.min(1, Math.max(0, x));
  return c * c * (3 - 2 * c);
}

/**
 * How much daylight a city has right now, 0 at night and 1 at midday, with a
 * three-hour dawn from 05:00 and a three-hour dusk to 20:00. The ramp is the
 * only thing that moves a pole's hue, so a visitor in London at 09:00 and one
 * in Dubai at 23:00 are looking at two different pages.
 */
export function daylight(hour: number, minute: number): number {
  const t = hour + minute / 60;
  if (t < 5 || t >= 20) return 0;
  if (t < 8) return smoothstep((t - 5) / 3);
  if (t < 17) return 1;
  return smoothstep((20 - t) / 3);
}

function channel(hex: string, index: number): number {
  return parseInt(hex.slice(1 + index * 2, 3 + index * 2), 16);
}

function toHex(value: number): string {
  return Math.round(Math.min(255, Math.max(0, value)))
    .toString(16)
    .padStart(2, "0");
}

/** This city's pole colour at this instant: night mixed toward day by daylight. */
export function cityHue(city: City, now: number): string {
  const { hour, minute } = cityClock(city, now);
  const d = daylight(hour, minute);
  const mix = (i: number) => channel(city.night, i) + (channel(city.day, i) - channel(city.night, i)) * d;
  return `#${toHex(mix(0))}${toHex(mix(1))}${toHex(mix(2))}`;
}

// ------------------------------------------------------------------- the tick

/**
 * Milliseconds, re-read every 15 seconds.
 *
 * The first value is taken during render, so the server prints a real time
 * into the HTML instead of a placeholder and nothing shifts when the clock
 * arrives. The client re-reads it in an effect, so a page served from the
 * build cache corrects itself on the first commit. Every element whose text or
 * style comes from this carries `suppressHydrationWarning`, which is what that
 * attribute is for.
 */
export function useNow(): number {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  return now;
}

// ----------------------------------------------------------------- the clocks

/** The quiet clock, for the nav: city then time, one line, no interaction. */
export function CityClock({ cityKey }: { cityKey: CityKey }) {
  const now = useNow();
  const city = CITIES[cityKey];
  const { text } = cityClock(city, now);

  return (
    <span className="v2-tick">
      <span className="v2-tick__city">{city.label}</span>
      <time className="v2-tick__time" dateTime={text} suppressHydrationWarning>
        {text}
      </time>
    </span>
  );
}

/**
 * The display clocks, for the hero: both cities sitting on their own pole,
 * joined by a hairline. Hover or focus the pair and the hairline names the
 * distance between them.
 *
 * The group is focusable and carries the whole reading as its accessible name,
 * so a keyboard visitor reaches the reveal and a screen reader never depends
 * on it.
 */
export function HeroClocks() {
  const now = useNow();
  const reading = CITY_ORDER.map((key) => `${CITIES[key].label} ${cityClock(CITIES[key], now).text}`);

  return (
    <div
      className="v2-clocks"
      role="group"
      tabIndex={0}
      aria-label={`Local time now: ${reading.join(", ")}. ${OFFSET_LABEL}.`}
      suppressHydrationWarning
    >
      <span className="v2-clocks__thread" aria-hidden="true">
        <span className="v2-clocks__offset">{OFFSET_LABEL}</span>
      </span>
      {CITY_ORDER.map((key) => {
        const city = CITIES[key];
        const { text } = cityClock(city, now);
        return (
          <span
            key={key}
            className="v2-clocks__clock"
            style={{ "--v2-pole": city.pole } as CSSProperties}
            aria-hidden="true"
          >
            <span className="v2-clocks__city">{city.label}</span>
            <time className="v2-clocks__time" dateTime={text} suppressHydrationWarning>
              {text}
            </time>
          </span>
        );
      })}
    </div>
  );
}

// ------------------------------------------------------------------ the field

export function TwoCityField({ className }: { className?: string }) {
  const now = useNow();
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const dubai = cityHue(CITIES.dubai, now);
  const mumbai = cityHue(CITIES.mumbai, now);

  // Scroll primitive: the two poles part by up to 6% as the field leaves.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // `useReducedMotion` reports false on the hydration render and settles in
    // an effect, so this can run once before the preference is known. Clear
    // the property rather than leaving whatever that first pass wrote.
    if (reducedMotion) {
      el.style.removeProperty("--v2-drift");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const box = el.getBoundingClientRect();
      const travel = box.height || 1;
      const progress = Math.min(1, Math.max(0, -box.top / travel));
      el.style.setProperty("--v2-drift", `${(progress * 6).toFixed(2)}%`);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      className={className ? `v2-field ${className}` : "v2-field"}
      style={{ "--v2-dubai": dubai, "--v2-mumbai": mumbai } as CSSProperties}
      suppressHydrationWarning
    >
      <ShaderSurface
        style={{ position: "absolute", inset: 0 }}
        colors={[`${dubai}${MESH_ALPHA}`, `${mumbai}${MESH_ALPHA}`]}
        speed={0.08}
        distortion={0.8}
        swirl={0.06}
        grain={0.04}
        label="A field with two colour poles: Dubai on the left and Mumbai on the right, each lit by the local time in that city."
        fallback={<span className="v2-field__poles" />}
      />
    </div>
  );
}
