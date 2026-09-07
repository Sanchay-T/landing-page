/**
 * The ask: one sentence at the hero's scale, one button, and the void.
 *
 * The direction gives this section two words - poster type and emptiness. So
 * the ask is set in Archivo `wdth` 125 / `wght` 800 in chrome rather than in
 * text ink, which makes it the second brightest thing on the page after the orb
 * and the only other place the page shouts. Everything under it is 16px Geist
 * on the void. There is no slab, no panel and no ground here: the block the
 * reader has to act in is the emptiest one on the site, which is the whole
 * argument of this direction applied to the one screen that matters.
 *
 * THE ORB DOES NOT RETURN HERE, and that is a stated deviation from the
 * direction's layout skeleton 9, which asks for it at 240px and 30 percent
 * brightness behind the button. Two reasons, both measured. The page is allowed
 * exactly one WebGL context (03b-round2-brief.md, dependency rule), so a
 * reprise could only be the static composition - the CSS conic-gradient disc
 * from `hero.tsx` - and at 30 percent over the void its bright arc lands near
 * #4a4e54, where the muted 16px lines that sit beside and under the button
 * measure 2.3:1 against it. Chrome text clears 4.5 over that disc; the support
 * line, the proof line and the channel line do not, and they are the three
 * pieces of copy this section exists to deliver. A dim grey circle behind a
 * button is also the "hero blob that means nothing" tell at a smaller size. The
 * reprise is dropped rather than dimmed into invisibility, and the section
 * keeps the direction's real device instead: the hero's own type scale.
 *
 * COPY is verbatim from `docs/goal/COPY.md` section 9 - the headline, both
 * subhead sentences, the CTA support line, the always-on channel line, and the
 * proof line beside the button with its straight quotes and no full stop after
 * the date, exactly as the source sets it. The section label "Start" is the
 * document's name for this block and is not printed: this direction carries no
 * eyebrows anywhere, and a tracked-out label above a heading is a named tell.
 *
 * THE PROOF LINE IS BESIDE THE BUTTON, not under it, from 56rem up. It is the
 * one sentence a stranger's decision turns on, and putting it on the button's
 * own optical line means it is read in the same glance as the thing it is meant
 * to reassure. Below 56rem it falls under the action block, because two
 * columns at phone width is two narrow columns.
 *
 * NO FORM, and no channel is named here that `lib/site.ts` has not configured.
 * The button's href and label both come from `lib/site.ts`, so the day a
 * WhatsApp number lands there this section changes with it and no edit is
 * needed. The printed address is built from `site.contact` and points at mail
 * on purpose rather than at `contactHref()`: COPY.md section 9 prints the
 * mailbox as live text, and it should stay mail even once the button does not.
 *
 * NO ENTRANCE. The variation spends its one load moment on the orb's
 * environment map. Nothing here moves on scroll or on load, so the section is
 * byte-identical under `prefers-reduced-motion` apart from the pill's own fill,
 * which `tokens.css` already collapses to 1ms.
 */

import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel, site } from "@/lib/site";

/**
 * COPY.md section 9, the channel line: the address as live text linked to mail
 * with the brief subject prefilled. Built from `site.contact`, so no address
 * and no subject is typed in this file.
 */
const MAIL_HREF = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  site.contact.mailSubject,
)}`;

/**
 * COPY.md section 9, "Proof beside the button", verbatim: straight quotes, the
 * hyphen the source uses, and no full stop after the date. Held as a string so
 * the quote marks are data rather than JSX entities.
 */
const PROOF =
  '"the layout is very good and simple" - the owner, a bespoke jewellery house in Dubai. Shipped 27 Aug 2026';

export function Contact() {
  return (
    <section className="v5-start" id="start" aria-labelledby="start-title">
      <div className="v5-band v5-start__inner">
        <h2 className="v5-display v5-start__ask" id="start-title">
          Send the brief. <br />
          We send back <br className="v5-start__br" />a scope.
        </h2>

        <p className="v5-start__lede">
          <span>
            Paid discovery is small and fixed, and it ends with a written scope,
            a date and a price.
          </span>
          <span>If you stop there, the plan you paid for is still yours.</span>
        </p>

        <div className="v5-start__action">
          <div className="v5-start__act">
            <ContactCTA className="v5-pill v5-start__cta">
              {contactLabel()}
            </ContactCTA>
            <p className="v5-start__support">
              Paid discovery, fixed scope, no forms.
            </p>
          </div>

          <p className="v5-start__proof">{PROOF}</p>
        </div>

        <p className="v5-start__channel">
          Email{" "}
          <a className="v5-start__mail" href={MAIL_HREF}>
            {site.contact.email}
          </a>
          {site.contact.whatsapp ? ", or message us on WhatsApp" : null}. No
          forms.
        </p>
      </div>
    </section>
  );
}
