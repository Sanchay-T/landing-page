"use client";

/**
 * The hero: one headline at poster scale, one chrome orb over it, one button.
 * Nothing else above the fold - the proof section starts well below it, and
 * that emptiness is the direction.
 *
 * Occlusion. At 900px and above the orb shares the headline's grid area and
 * stacks on top of it, so the chrome covers the middle of the type and the
 * letters it hides are read in the reflection instead: the map that dresses the
 * orb carries "Sixteen days" across its equator, which is the headline's own
 * first line. The headline is ordinary DOM text underneath, so it stays whole
 * in the accessibility tree and is copyable and searchable. Below 900px the orb
 * drops into normal flow under the action block and occlusion is off, because a
 * partly hidden headline on a phone is a defect, not a device.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 1: the primary headline,
 * both subhead sentences, the canonical CTA through `lib/site.ts` and the
 * support line. No eyebrow - the direction's above-the-fold list has none, and
 * a tracked-out caps label is a named tell.
 *
 * The subhead is not decoration here. At 1280 the orb covers the middle of the
 * headline, so the two sentences under it are where a first-time reader learns
 * what Devonel builds and for whom. The line breaks in the headline are `<br>`
 * elements hidden by width, never `white-space: nowrap`, so an unexpectedly
 * wide line wraps instead of pushing a horizontal scrollbar; the three shapes
 * and the measurements behind them are in the hero block of `tokens.css`.
 *
 * LCP. The headline is server-rendered text and paints before any JavaScript
 * runs. `<Scene>` renders its static fallback on the server and swaps to the
 * canvas only after hydration, behind `next/dynamic({ ssr: false })`, so three
 * is never in this route's first-load JS and never competes with the headline.
 * The WebP still is requested only when the render gate has actually refused a
 * canvas, so on a normal visit no image is fetched and no image can outrank the
 * text as the LCP element.
 */

import dynamic from "next/dynamic";
import Image from "next/image";
import { ContactCTA } from "@/components/ds/contact-cta";
import { Scene } from "@/components/ds/scene";
import { contactLabel } from "@/lib/site";
import { useRenderGate } from "@/lib/webgl";

/** three, fiber and the orb all live behind this boundary. */
const Orb = dynamic(() => import("./orb-scene").then((module) => module.Orb), {
  ssr: false,
});

/**
 * Radius 1 at fov 26.4 from z 4.6 puts the sphere's silhouette at 94.96 percent
 * of a square frame. `--v5-orb-box` divides the wanted disc by that, so a
 * `--v5-orb` of 560px renders a 560px orb. Mirrored in `orb-scene.tsx`.
 */
const ORB_CAMERA = {
  fov: 26.4,
  position: [0, 0, 4.6] as [number, number, number],
};

/** One sentence for anyone who cannot see the orb, on whichever layer shows. */
const ORB_LABEL =
  "A chrome sphere on a near-black ground, reflecting the studio's own words: sixteen days, ships before it pitches, paid discovery, Dubai, Mumbai, Sanchay, Umayr.";

/**
 * What renders when there is no canvas: a CSS conic-gradient chrome disc, and
 * over it a WebP of one frame of this same scene, frozen where "Sixteen days"
 * reads across the equator. Both are the finished design.
 *
 * The image is asked for only once the gate has said no - under
 * `prefers-reduced-motion`, with no WebGL, on a device that told us it cannot
 * afford one, or after a lost context. Before that the disc carries the shape
 * on its own, which also means a visitor with JavaScript off gets a composition
 * rather than a hole, with no bytes spent.
 */
function OrbStill({ withImage }: { withImage: boolean }) {
  return (
    <div className="v5-orb-still">
      <div className="v5-orb-still__disc" />
      {withImage ? (
        <Image
          className="v5-orb-still__img"
          src="/media/v5/orb-static.webp"
          alt=""
          width={1120}
          height={1120}
          sizes="(min-width: 900px) 620px, 92vw"
          priority
        />
      ) : null}
    </div>
  );
}

export function Hero() {
  // `<Scene>` makes this call too; it is cheap, and asking it here is what lets
  // the still stay unrequested on a visit that will get the real orb.
  const gate = useRenderGate();

  return (
    <section className="v5-hero" id="hero">
      <div className="v5-hero__type">
        <h1 className="v5-display v5-hero__headline">
          Sixteen days <br />
          from brief
          <br className="v5-hero__br--tiny" /> to a <br />
          product your <br />
          customers
          <br className="v5-hero__br--narrow" /> use.
        </h1>
      </div>

      <div className="v5-hero__action">
        <p className="v5-hero__lede">
          <span>
            Devonel builds and runs the software owner-led brands sell with.
          </span>
          <span>
            We shipped a name-pendant studio for a bespoke jewellery house in
            Dubai on the morning of their exhibition stall.
          </span>
        </p>
        <ContactCTA className="v5-pill v5-hero__cta">
          {contactLabel()}
        </ContactCTA>
        <p className="v5-hero__support">
          Paid discovery, fixed scope, no forms.
        </p>
      </div>

      <Scene
        className="v5-hero__orb"
        label={ORB_LABEL}
        camera={ORB_CAMERA}
        maxDpr={1.5}
        fallback={<OrbStill withImage={gate === "deny"} />}
      >
        <Orb />
      </Scene>
    </section>
  );
}
