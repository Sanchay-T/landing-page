"use client";

/**
 * v2 "Shader Light" - the final CTA, canonical section 9, id `final-cta`.
 *
 * The element id is `final-cta` because that is the id `sections.ts` declares
 * and the id `nav.tsx` already links to; the file is named for what the section
 * is, the anchor is named for what the page calls it.
 *
 * This is the one block on the page where the field runs at full strength.
 * Everywhere else `--v2-field-max` caps it at 22% over paper, which is what
 * keeps body copy legible on tinted paper. Here the cap is lifted to 1 on the
 * section's own field and every word of the section sits inside a solid white
 * plinth, so nothing is ever set on the field: the colour is a frame around the
 * ask, not a ground under it. Two poles at full strength is also the strongest
 * the two-city idea gets to be all page, which is why the closing image is the
 * two clocks repeated one last time directly under the button.
 *
 * The field here is the CSS half only - `.v2-field` + `.v2-field__poles` with
 * the live hues passed in, the same pair `proof.tsx` uses. The brief allows one
 * WebGL context per page and `hero.tsx` owns it, so this section mounts no
 * canvas and reprises the hero by reusing its colour, not its context. It reads
 * the hues through `cityHue` from `two-city-field.tsx`, so the CTA and the hero
 * can never disagree about what time it is in either city.
 *
 * Contact never appears as a literal here. The button's href is `contactHref()`
 * and its label is `contactLabel()`, so the day a WhatsApp number lands in
 * `lib/site.ts` this button becomes a chat link with no edit to this file. The
 * address printed in the channel line is `site.contact.email` linked to mail
 * built from `site.contact`, not `contactHref()`, because COPY.md prints the
 * address as live text linked to mail whatever the button resolves to: an
 * anchor reading "sanchay@devonel.com" that opened WhatsApp would be a lie.
 * Nothing on this section is typed by hand.
 *
 * No form, by instruction: COPY.md says "No forms" twice in this section and
 * the studio's one channel is a message.
 *
 * No motion. The direction spends its one load movement on the field and its
 * one hover on the clocks; the button's own hover is the page's standard
 * `--v2-hover-in` colour step and nothing else here moves.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 9: the label, the headline
 * as its two sentences, the subhead as its two sentences, the CTA support line,
 * the client's line with its attribution, and the always-on channel line. The
 * document's bracketed source references are notation, not copy, and are the
 * only thing dropped. The client is not named, here or anywhere on the page.
 *
 * The proof line is set exactly as COPY.md prints it: straight quote marks
 * around the client's words (as `&quot;`, because a bare `"` in JSX text is a
 * react/no-unescaped-entities error) and no full stop after the date, because
 * the stop in the document belongs to its bracketed source reference. The
 * document's " - " between the words and the attribution is the separator the
 * blockquote/figcaption pair already is, so it is not printed twice.
 */

import type { CSSProperties } from "react";
import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel, site } from "@/lib/site";
import { CITIES, CITY_ORDER, CityClock, cityHue, useNow } from "./two-city-field";

/**
 * COPY.md section 9, the channel line, and section 10, the footer's contact
 * line: both print the address as live text linked to mail. Built from
 * `site.contact` so no address and no subject is written here.
 */
const MAIL_HREF = `mailto:${site.contact.email}?subject=${encodeURIComponent(site.contact.mailSubject)}`;

export function Contact() {
  const now = useNow();
  const dubai = cityHue(CITIES.dubai, now);
  const mumbai = cityHue(CITIES.mumbai, now);

  return (
    <section id="final-cta" className="v2-contact" aria-labelledby="final-cta-headline">
      <div
        className="v2-field v2-contact__field"
        style={{ "--v2-dubai": dubai, "--v2-mumbai": mumbai } as CSSProperties}
        aria-hidden="true"
        suppressHydrationWarning
      >
        <span className="v2-field__poles" />
      </div>

      <div className="v2-contact__plinth">
        <div className="v2-contact__ask">
          <p className="v2-contact__label">Start</p>
          <h2 id="final-cta-headline" className="v2-contact__headline">
            <span className="v2-contact__line">Send the brief.</span>{" "}
            <span className="v2-contact__line">We send back a scope.</span>
          </h2>
        </div>

        <p className="v2-contact__sub">
          Paid discovery is small and fixed, and it ends with a written scope, a date and a price.
          If you stop there, the plan you paid for is still yours.
        </p>

        <div className="v2-contact__act">
          <ContactCTA className="v2-cta">{contactLabel()}</ContactCTA>
          <p className="v2-contact__support">Paid discovery, fixed scope, no forms.</p>

          <figure className="v2-contact__proof">
            <blockquote className="v2-contact__quote">
              &quot;the layout is very good and simple&quot;
            </blockquote>
            <figcaption className="v2-contact__attribution">
              the owner, a bespoke jewellery house in Dubai. Shipped{" "}
              <time dateTime="2026-08-27">27 Aug 2026</time>
            </figcaption>
          </figure>
        </div>

        {/* The closing image: the same two clocks the nav carries, standing on
            the two poles the field behind this plinth is painted from. */}
        <div className="v2-contact__clocks">
          {CITY_ORDER.map((key) => (
            <span key={key} className={`v2-contact__clock v2-contact__clock--${key}`}>
              <CityClock cityKey={key} />
            </span>
          ))}
        </div>

        <p className="v2-contact__channel">
          Email{" "}
          <a className="v2-contact__mail" href={MAIL_HREF}>
            {site.contact.email}
          </a>
          {site.contact.whatsapp ? ", or message us on WhatsApp" : null}. No forms.
        </p>
      </div>
    </section>
  );
}
