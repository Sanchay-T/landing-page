import type { CSSProperties } from "react";
import Image from "next/image";
import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";

/** The entrance primitive is staggered by hand so the order reads top to
 *  bottom. Every step starts from a visible 0.6 opacity, so a capture taken
 *  mid-flight still shows the whole title card. */
const delay = (ms: number) => ({ "--v3-enter-delay": `${ms}ms` }) as CSSProperties;

/**
 * Variation 3 - the hero.
 *
 * A film frame, not a screen filler: full bleed, 16:9 where the width allows,
 * never shorter than 60svh, never taller than 90svh, and never 100vh, so phone
 * landscape at 844x390 still shows the CTA without a scroll.
 *
 * Runway was unavailable on this run, so the moving image is the fallback
 * documented in docs/goal/ASSET-QUEUE.md, built in four layers:
 *   1. a real dark editorial product render, priority loaded, under a scrim
 *      that takes it to roughly 40% brightness at the top of the frame and
 *      almost to black where the type sits;
 *   2. a CSS mesh gradient, two amber pools and one cold blue, screened over it;
 *   3. a god ray band, one rotated set of light shafts under a radial mask;
 *   4. an SVG feTurbulence grain at 5%.
 * All three of the drifting layers run on one scroll timeline, three beats, and
 * stop the moment the hero leaves the viewport.
 *
 * The empty <video> above the still is slot V3-01. It shows the same frame as
 * its poster today and becomes the loop the day a `src` is added; nothing else
 * on this page changes when it lands.
 */

/** Slot V3-01's poster, and today the still it stands in for. */
const PLATE = "/media/jewelo/poster-16x9.webp";
/** docs/goal/ASSET-INVENTORY.md, poster-16x9 row. Brand free on purpose. */
const PLATE_ALT = "A gold script name pendant set with emeralds on black velvet, cropped wide";

export function V3Hero() {
  return (
    <section className="v3-hero" id="hero">
      <div className="v3-hero__plate">
        <div className="v3-hero__media v3-scroll">
          <Image
            src={PLATE}
            alt={PLATE_ALT}
            fill
            priority
            sizes="100vw"
            className="v3-hero__still"
          />
          {/* Asset slot V3-01. No src today: with neither a src attribute nor a
              source child the element stops at its poster, which is the still
              above, so the frame is identical until the loop is generated. */}
          <video
            className="v3-hero__video"
            data-asset-queue="V3-01"
            poster={PLATE}
            preload="none"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            tabIndex={-1}
          />
        </div>
        <div className="v3-hero__scrim" />
        <div className="v3-hero__mesh v3-scroll" />
        <div className="v3-hero__rays v3-scroll" />
        <div className="v3-hero__grain" />
      </div>

      <div className="v3-hero__inner">
        <p className="v3-eyebrow v3-enter">AI product studio and growth partner</p>

        <h1 className="v3-display v3-hero__title v3-enter" style={delay(80)}>
          Sixteen days from brief to a product your customers use.
        </h1>

        <p className="v3-lead v3-hero__lead v3-enter" style={delay(180)}>
          Devonel builds and runs the software owner-led brands sell with.
        </p>

        <div className="v3-hero__actions v3-enter" style={delay(260)}>
          <ContactCTA className="v3-pill v3-glow">{contactLabel()}</ContactCTA>
          <p className="v3-hero__support">Paid discovery, fixed scope, no forms.</p>
        </div>
      </div>

      <div className="v3-hero__proof v3-enter" style={delay(360)}>
        <div className="v3-hero__proof-inner">
          <p className="v3-hero__dates">Spec received 11 August 2026. Live 27 August 2026.</p>
          <p className="v3-hero__quote">
            <span className="v3-hero__quote-said">
              &quot;the layout is very good and simple&quot;
            </span>{" "}
            - the owner, a bespoke jewellery house in Dubai.
          </p>
        </div>
      </div>
    </section>
  );
}
