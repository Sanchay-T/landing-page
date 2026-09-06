import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel, site } from "@/lib/site";
import { ColumnRules } from "./hero";

/**
 * The final call to action, set as the paid notice a paper closes on.
 *
 * Buyer question: what is the one thing I do next, and what does it cost me if
 * I am wrong?
 *
 * A broadsheet answers that on its classified page, so this is one. The heavy
 * accent rule runs to the screen edge the way the nameplate rule does, the
 * story sits under it, and the announcement itself is one ruled row: the
 * advertisement on the left, the contact lines beside it as small print, the
 * client's words on the right. That is the v1 tone note for this section,
 * "a classified-ad box, ruled, with the contact lines set as small print".
 *
 * One action and one channel, by rule. The button never names a channel: its
 * wording and its href come from `lib/site.ts` through `ContactCTA`, so the
 * same three words are correct whether the studio is on mail or on WhatsApp.
 * The email address beside it is the one place a channel is written out,
 * because COPY.md section 9 asks for it as live text rather than a label, and
 * its mailto is built from the same config so the subject line cannot drift.
 * The WhatsApp clause renders only when a number is configured; while
 * `contact.whatsapp` is empty no chat channel is named here. There is no form
 * anywhere and no reply-time promise, because no source carries one.
 *
 * Every word is docs/goal/COPY.md section 9 verbatim, except the minimum
 * commitment line, which is section 7's wording brought down to sit with the
 * other terms of the offer where a classified prints them.
 */
export function V1Contact() {
  // COPY.md, "Constants": the address is printed as live text and linked with
  // the one sanctioned subject. Built from config rather than written out, so
  // the mailbox and the subject stay a single edit in lib/site.ts.
  const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    site.contact.mailSubject
  )}`;

  // COPY.md section 9, "Channel line, conditional". Read as a length so the
  // clause is genuinely config driven and not compiled away with the empty
  // string that ships today.
  const chatClause = site.contact.whatsapp.length > 0 ? ", or message us on WhatsApp" : "";

  return (
    <section id="contact" className="v1-contact">
      <ColumnRules />

      {/* The rule a paid notice is set under, run to the screen edge like the
          nameplate's. The one place colour is used at page scale. */}
      <div className="v1-contact__band" />

      <div className="v1-contact__inner v1-shell">
        <header className="v1-contact__head">
          <p className="v1-kicker">Start</p>
          <h2 className="v1-display v1-contact__title">Send the brief. We send back a scope.</h2>
          <p className="v1-deck v1-contact__deck">
            Paid discovery is small and fixed, and it ends with a written scope, a date and a price.
            If you stop there, the plan you paid for is still yours.
          </p>
        </header>

        <div className="v1-notice">
          <ContactCTA className="v1-classified v1-classified--lg v1-contact__cta">
            <span className="v1-classified__label v1-underline">{contactLabel()}</span>
            <span className="v1-classified__support">Paid discovery, fixed scope, no forms.</span>
          </ContactCTA>

          <div className="v1-contact__lines">
            <p className="v1-contact__line">
              Email{" "}
              <a className="v1-textlink v1-underline" href={mailHref}>
                {site.contact.email}
              </a>
              {`${chatClause}. No forms.`}
            </p>
            <p className="v1-contact__line">Minimum commitment up front on every engagement.</p>
          </div>

          {/* The proof beside the button. It runs a step under the front page
              pull-quote and takes its rules from the announcement, so the
              closing testimonial reads as evidence next to the action rather
              than as a second pull-quote competing with the headline. */}
          <figure className="v1-contact__proof v1-reveal">
            <blockquote>&ldquo;the layout is very good and simple&rdquo;</blockquote>
            <figcaption>
              the owner, a bespoke jewellery house in Dubai. Shipped 27 Aug 2026
            </figcaption>
          </figure>
        </div>

        <div className="v1-folio v1-folio--ruled v1-contact__folio">
          <span>Start</span>
          <span className="v1-folio__n">9</span>
        </div>
      </div>
    </section>
  );
}
