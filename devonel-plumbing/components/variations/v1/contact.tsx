import { ContactCTA } from "@/components/ds/contact-cta";
import { contactHref, contactLabel, site } from "@/lib/site";

/**
 * v1 "Studio Dark" final CTA, the section `sections.ts` calls `final-cta`.
 *
 * The page's second and last panel band. It opened on "Shipped, not promised."
 * and it closes on the ask, on the same surface with the same hairline top and
 * bottom, so the reader has met this shape before: void, band, void, and then
 * void, band, void again at the end. Nothing else on this page is raised edge
 * to edge, which is what makes the two bands a pair rather than two cards.
 *
 * The lamp returns here, and this is the last time it appears on the page. The
 * hero's device cannot come back as an object - one WebGL context per page is
 * a hard rule of the round - so what returns is its light: the button carries
 * the second and final lamp fill, and entry 09's dimmed radial glow sits behind
 * it in the band. That glow is one background-image, no canvas and no
 * JavaScript, which is also why this whole section is a server component.
 *
 * The proof line sits beside the button, which is the gesture the proof band
 * already made with its quote and its link on one baseline. It is the last
 * thing a reader passes before the button, and it is the only sentence on this
 * page that a client wrote.
 *
 * Every string is COPY.md section 9, verbatim, with the bracketed source
 * citations stripped. Three calls worth recording:
 *
 * - The channel line is the always-on one. The conditional WhatsApp clause is
 *   not written here in any form: `lib/site.ts` `contact.whatsapp` is empty, so
 *   no chat channel is named on this page at all.
 * - The address is printed as live text and linked, never hidden behind a
 *   label, and both the text and the href come from `lib/site.ts`. Nothing here
 *   spells out an address or a subject of its own.
 * - COPY.md's own section label, "Start", is not rendered. It would have to sit
 *   as an eyebrow over the heading, which is a named tell in this direction,
 *   and the heading already says what the section is for.
 *
 * There is no form. There is no second button either: the page has one primary
 * action, and this is its last instance.
 */
export function Contact() {
  return (
    <section id="final-cta" className="v1-ask" aria-labelledby="ask-head">
      <div className="v1-shell">
        <h2 id="ask-head" className="v1-ask__head">
          Send the brief. We send back a scope.
        </h2>
        <p className="v1-ask__sub">
          Paid discovery is small and fixed, and it ends with a written scope, a date and a price.
          If you stop there, the plan you paid for is still yours.
        </p>

        <div className="v1-ask__row">
          <div className="v1-ask__act">
            <ContactCTA className="v1-btn v1-btn--primary">{contactLabel()}</ContactCTA>
            <p className="v1-ask__support">Paid discovery, fixed scope, no forms.</p>
          </div>

          <figure className="v1-ask__proof">
            <blockquote className="v1-ask__said">
              &ldquo;the layout is very good and simple&rdquo;
            </blockquote>
            <figcaption className="v1-ask__who">
              the owner, a bespoke jewellery house in Dubai. Shipped{" "}
              <span className="v1-ask__date">27 Aug 2026</span>.
            </figcaption>
          </figure>
        </div>

        <p className="v1-ask__channel">
          Email{" "}
          <a className="v1-ask__mail" href={contactHref()}>
            {site.contact.email}
          </a>
          . No forms.
        </p>
      </div>
    </section>
  );
}
