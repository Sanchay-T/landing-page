import type { CSSProperties } from "react";
import Image from "next/image";
import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel, site } from "@/lib/site";

/** The entrance primitive, staggered by hand so the sequence reads top to
 *  bottom. Every step starts from a visible 0.6 opacity, never from 0, so a
 *  capture taken mid-flight still shows the whole section. */
const delay = (ms: number) => ({ "--v3-enter-delay": `${ms}ms` }) as CSSProperties;

/**
 * The still behind the closing frame.
 *
 * docs/goal/ASSET-INVENTORY.md, `pendant-dark-gold-emerald` row, whose own
 * suggested use is "v3 hero object and section bleed. Warmest dark render;
 * closest to the v3 amber palette". It is the only render in the set that is
 * black velvet with a single warm object in it, which is what a frame with type
 * over it needs: the ground is already the page's ground, so the words sit on
 * near-black and the gold is the one lit thing beside the button.
 *
 * The two warm renders in the set were both tried here. `pendant-worn-gold` is
 * lit skin and cream cloth edge to edge; scrimmed hard enough for AA it turns
 * the closing frame into a beige wash, and scrimmed lightly it takes the eye
 * off the button. This render needs no such trade.
 *
 * The hero shows the 16:9 crop of the same source as its poster. That is the
 * bookend on purpose: the film opens wide on the piece and closes on it full
 * frame, with every silver render in between.
 *
 * The `@2x` file is the source rather than the 1x for the same reason the other
 * plates use it: next/image builds the srcset itself and can only scale down.
 * 1122x1402 at 68 KB, well inside the 400 KB image budget.
 *
 * The alt names the artefact and never the client, per the inventory's rule.
 */
const PLATE = "/media/jewelo/pendant-dark-gold-emerald@2x.webp";
const PLATE_ALT = "A gold script name pendant set with four small emeralds, on black velvet";

/**
 * The mailbox line's own href.
 *
 * Built from `lib/site.ts` rather than typed here, so the address and the
 * prefilled subject cannot drift from the rest of the site. It is deliberately
 * not `contactHref()`: that function is the primary action and becomes a wa.me
 * link the day a number lands, while this line is the mailbox and stays mail.
 */
const MAILTO = `mailto:${site.contact.email}?subject=${encodeURIComponent(site.contact.mailSubject)}`;

/**
 * COPY.md section 9, "Channel line, conditional": the clause is appended only
 * when `lib/site.ts` carries a WhatsApp number. It is empty today, so nothing
 * renders and no chat channel is named anywhere in this section. Read as a
 * length rather than against the empty literal, so it is a runtime gate.
 */
const CHAT_CLAUSE = site.contact.whatsapp.length > 0 ? ", or message us on WhatsApp" : "";

/**
 * Variation 3 - the final CTA, staged as the closing frame.
 *
 * The reel is over. The hero opened on a wide film frame with the title card
 * bottom left and the light coming in from the top left; this is the last frame
 * of the same film, so it is shorter, the type is centred in it rather than
 * hung off the floor, and the light has crossed the screen: the ray pool and
 * the cold blue now sit in the top right and the picture holds the right hand
 * side while the words hold the left. Two 8% white hairlines rule the top and
 * the bottom of it, which is the one thing on this page that is drawn as a
 * frame rather than as a section.
 *
 * The one bright object in it is the button. Everything else in the frame is
 * scrimmed to about a third of its brightness and the amber mesh is kept off
 * the type column, so the only warm light landing on a reader's eye is the
 * pill's own glow. That is the whole idea of the section: one lit thing, and it
 * is the thing you press.
 *
 * Contrast. The plate is a photograph, so no line over it is trusted to the
 * base colour: a left-weighted scrim takes the render to about a third of its
 * brightness, and a shelf goes over the mesh and the rays to bring the type
 * column back to the page's own ground. It was then measured rather than
 * assumed: the section was re-rendered with the type hidden at all nine
 * viewports in the matrix and the brightest ground pixel inside every line box
 * was sampled. Worst case is the closing channel line at 390, 5.43:1 against
 * the muted tier; every other line is 7.4:1 or better and the recap runs at
 * 15.5:1. The bottom padding in tokens.css is the distance that measurement
 * asked for, which is why it is larger than the section gap.
 *
 * No form fields, here or anywhere on the site [COPY.md section 9]. One action,
 * one channel, and the channel is resolved by `ContactCTA` from `lib/site.ts`,
 * never named in this file.
 */
export function V3Contact() {
  return (
    <section className="v3-contact" id="contact" aria-labelledby="v3-contact-title">
      {/* The plate, in paint order: still, scrim, mesh, rays, grain, and the
          shelf that takes the type column back down over all of them. */}
      <div className="v3-contact__plate">
        {/* The still is positioned by its wrapper, never by the image: with
            `fill`, next/image writes position and inset as inline styles, which
            beat any class the frame could carry. */}
        <div className="v3-contact__frame">
          <Image
            src={PLATE}
            alt={PLATE_ALT}
            fill
            priority
            sizes="(min-width: 75rem) 42vw, 100vw"
            className="v3-contact__still"
          />
        </div>
        <div className="v3-contact__scrim" />
        <div className="v3-contact__mesh" />
        <div className="v3-contact__rays" />
        <div className="v3-contact__grain" />
      </div>

      <div className="v3-contact__inner">
        <div className="v3-contact__body">
          <p className="v3-eyebrow v3-enter">Start</p>

          <h2 className="v3-contact__title v3-enter" id="v3-contact-title" style={delay(60)}>
            Send the brief. We send back a scope.
          </h2>

          <p className="v3-lead v3-contact__lead v3-enter" style={delay(140)}>
            Paid discovery is small and fixed, and it ends with a written scope, a date and a
            price. If you stop there, the plan you paid for is still yours.
          </p>

          <div className="v3-contact__act v3-enter" style={delay(220)}>
            <div className="v3-contact__action">
              <ContactCTA className="v3-pill v3-glow">{contactLabel()}</ContactCTA>
              <p className="v3-contact__support">Paid discovery, fixed scope, no forms.</p>
            </div>

            {/* COPY.md section 9, "Proof beside the button". The page's one
                client sentence, printed here a third time on purpose: it is the
                last thing a reader sees before deciding, which is exactly where
                the research puts proof. */}
            <figure className="v3-contact__proof">
              <blockquote className="v3-contact__quote">
                <p>&quot;the layout is very good and simple&quot;</p>
              </blockquote>
              <figcaption className="v3-contact__cite">
                the owner, a bespoke jewellery house in Dubai. Shipped 27 Aug 2026.
              </figcaption>
            </figure>
          </div>

          <p className="v3-contact__channel v3-enter" style={delay(300)}>
            Email{" "}
            <a className="v3-contact__mail" href={MAILTO}>
              {site.contact.email}
            </a>
            {CHAT_CLAUSE}. No forms.
          </p>
        </div>
      </div>
    </section>
  );
}
