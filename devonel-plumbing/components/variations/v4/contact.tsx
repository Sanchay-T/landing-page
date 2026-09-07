import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel, site } from "@/lib/site";

/**
 * Variation 4 final CTA - the terminus board.
 *
 * Copy is docs/goal/COPY.md section 9, tuned to the v4 tone note ("full-width
 * colour panel, black block button, headline at 120px"). This is the one
 * full-bleed red section on the page, and the third and last appearance of the
 * 120 stop: the hero opens at 120 on white, the proof board argues at 120 on
 * yellow, and the page closes at 120 on red. A metro map has a terminus, and
 * this is it.
 *
 * WHY THIS SECTION BREAKS THE PAGE PATTERN
 * Every other section opens with a black signage plate, then the 72 stop, then
 * the 24 lead. This one opens on the headline itself, at 120, with no plate.
 * The plate exists to tell a reader which of ten stops they are standing at;
 * at the end of the line there is no next stop to distinguish, and a small
 * black label above a 120px sentence only delays it. The COPY.md label for
 * this section is "Start", which says what the bar's yellow CTA block already
 * says: that block carries contactLabel(), "Send your brief", and it has been
 * on screen since the top of the page.
 *
 * WHY THE BUTTON IS PAPER AND NOT BLACK
 * COPY.md's tone note says "black block button". On a white ground that is the
 * strongest object available; on this red ground it is not. The headline is
 * already black, at 120px, directly above the button, so a black button would
 * be the same ink as the loudest thing in the section and would read as a
 * footnote to it. Paper is the one ink no other element on this panel uses, so
 * the button is the only white object here and cannot be mistaken for anything
 * else. It swaps to black on hover and focus, which is the moment the block
 * joins the headline's ink.
 *
 * CONTRAST, every pair rendered here (WCAG 2.1 1.4.3):
 *   black on red     4.6:1   the headline, the lead, the rules, the strip,
 *                            the support line, the channel line and its link.
 *                            Passes AA at every size, which is why nothing on
 *                            this panel is set in paper except the button's
 *                            hover state.
 *   black on paper   19.0:1  the button at rest
 *   paper on black   19.0:1  the button on hover and focus
 * Paper text on this red is 4.2:1 and fails the 4.5 floor for body sizes, so it
 * is not used. That is the same decision tokens.css section 11 records for the
 * engagement band's red field: red on this page never carries white words.
 *
 * NO FORM, NO NUMBER
 * There is no input on this section and there is none anywhere on the site
 * [brief 9.9]. WhatsApp is config-gated: the clause below renders only when
 * `contact.whatsapp` is set in lib/site.ts, and while it is empty this section
 * names no chat channel and prints no number.
 */

/**
 * The mail link behind the printed address. Built from `site.contact` rather
 * than from `contactHref()` on purpose: `contactHref()` is the primary CTA's
 * href and becomes a wa.me link the day a number is configured, while this line
 * is the email channel specifically and must stay mail in both states. Subject
 * is COPY.md's "Exact mailto subject to prefill everywhere".
 */
const MAIL_HREF = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  site.contact.mailSubject,
)}`;

/**
 * COPY.md section 9, "Channel line, conditional". Empty string today, so the
 * line reads "Email sanchay@devonel.com. No forms." and WhatsApp is not named.
 */
const CHAT_CLAUSE = site.contact.whatsapp.length > 0 ? ", or message us on WhatsApp" : "";

/**
 * The ruled strip that closes the page.
 *
 * COPY.md section 9's subhead is one sentence with two halves: "Paid discovery
 * is small and fixed, and it ends with a written scope, a date and a price."
 * The first half is the lead above; the second half is set here as three terms
 * on a rule, which is the form the sentence already has. Nothing is added and
 * nothing is dropped. The same three deliverables are what COPY.md section 5
 * phase 1 promises, so the strip is the page's own recap rather than a new
 * claim, which is the job 05-build-spec.md gives item 9 ("recap value, repeat
 * the CTA, risk reversal").
 */
const ENDS_WITH = ["A written scope", "A date", "A price"] as const;

export function V4Contact() {
  return (
    <section className="v4-contact v4-panel--red" id="contact" aria-labelledby="v4-contact-title">
      <div className="v4-shell">
        {/* Two spans, the same device as the hero headline: a designed break at
            the sentence above 900px, a natural wrap below it. */}
        <h2 className="v4-contact__title" id="v4-contact-title">
          <span>Send the brief.</span> <span>We send back a scope.</span>
        </h2>

        <div className="v4-contact__body v4-grid">
          <div className="v4-contact__act">
            <p className="v4-contact__lead">
              Paid discovery is small and fixed. If you stop there, the plan you paid for is still
              yours.
            </p>

            <ContactCTA className="v4-block v4-contact__cta">{contactLabel()}</ContactCTA>

            <p className="v4-contact__support">Paid discovery, fixed scope, no forms.</p>

            <p className="v4-contact__channel">
              Email{" "}
              <a className="v4-contact__mail" href={MAIL_HREF}>
                {site.contact.email}
              </a>
              {CHAT_CLAUSE}. No forms.
            </p>
          </div>

          {/* COPY.md section 9, "Proof beside the button". The hero prints the
              same sentence as a blockquote on white; here it is set small,
              under a rule, with the ship date the hero does not carry, so at
              the point of action it reads as a receipt rather than as the
              quote arriving a second time. */}
          <blockquote className="v4-contact__proof">
            <p>&ldquo;the layout is very good and simple&rdquo;</p>
            <footer>
              the owner, a bespoke jewellery house in Dubai. Shipped 27 Aug 2026.
            </footer>
          </blockquote>
        </div>

        <dl className="v4-contact__strip v4-grid">
          <dt className="v4-contact__strip-label">Paid discovery ends with</dt>
          {ENDS_WITH.map((term) => (
            <dd className="v4-contact__term" key={term}>
              {term}
            </dd>
          ))}
        </dl>
      </div>
    </section>
  );
}
