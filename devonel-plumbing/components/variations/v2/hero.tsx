/**
 * v2 "Shader Light" - the hero.
 *
 * Everything is centred and everything is text. The field sits behind it at
 * 22% over paper and carries no image; the only picture on this screen is the
 * two cities the studio works from, printed as the time in each one.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 1:
 *   headline  the primary, unchanged.
 *   subhead   its first sentence. The direction asks for a one-sentence
 *             subhead; the second sentence is the client story and belongs in
 *             the proof strip and the case study, not in front of the field.
 *   CTA       `contactLabel()`, which resolves the canonical "Send your brief".
 *   support   the standing support line, printed under the button.
 * The proof hook and the eyebrow are not here: the direction's above-the-fold
 * list is headline, clocks, one-sentence subhead, button, support line.
 */

import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";
import { HeroClocks, TwoCityField } from "./two-city-field";

export function Hero() {
  return (
    <section id="hero" className="v2-hero">
      <TwoCityField className="v2-hero__field" />

      <div className="v2-hero__inner">
        <h1 className="v2-hero__headline">
          <span className="v2-hero__line">Sixteen days from</span>{" "}
          <span className="v2-hero__line">brief to a product</span>{" "}
          <span className="v2-hero__line">your customers use.</span>
        </h1>

        <HeroClocks />

        <p className="v2-hero__sub">
          Devonel builds and runs the software owner-led brands sell with.
        </p>

        <p className="v2-hero__act">
          <ContactCTA className="v2-cta">{contactLabel()}</ContactCTA>
        </p>

        <p className="v2-hero__support">Paid discovery, fixed scope, no forms.</p>
      </div>
    </section>
  );
}
