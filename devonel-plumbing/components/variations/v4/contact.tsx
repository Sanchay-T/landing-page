import { ContactCTA } from "@/components/ds/contact-cta";
import { contactChannel, contactLabel, site } from "@/lib/site";

/**
 * v4 final CTA.
 *
 * `docs/goal/03-design-research.md` section 4, direction 4, layout skeleton
 * item 9: "one full-width cobalt cell". So this section is one cell, and it is
 * the third and last cobalt surface on the page. The orchestrator's decision in
 * `docs/goal/STATUS.md` sets the budget at hero button, live cell rule and this
 * cell, which is why the nav button moved to the ink outline form: the count
 * stays at three, and this is the loudest of the three because it is the only
 * one that fills a whole row.
 *
 * THE TWIST, APPLIED HERE. Cell size is honesty, and the honest size for the
 * one thing the page wants is the whole board width. Every other cell has been
 * sized against what is actually shipped; this one is sized against what is
 * actually being asked for, and there is exactly one ask.
 *
 * The band label above the cell is not sticky. Every other band on this page
 * has a sticky head because it scrolls past several rows of cells; a one-cell
 * band never scrolls far enough for stickiness to mean anything, and a head
 * that pins for 200px reads as a bug rather than as a device.
 *
 * The channel line sits in the cell's own footer band rather than under the
 * button. COPY.md prints "no forms" twice here, once in the support line and
 * once in the channel line, and both are required; putting them at opposite
 * ends of the cell is what stops the repetition reading as a copy defect.
 *
 * No icons, no shadow, no form, no second button. Every visible string is
 * verbatim from `docs/goal/COPY.md` section 9, and the one string that is not
 * written in this file at all is the address: it comes from `lib/site.ts`, the
 * single place the site is allowed to know a contact channel.
 */
export function Contact() {
  // COPY.md section 9: the address is rendered as live text and linked with the
  // canonical subject prefilled. Built from `lib/site.ts` rather than typed
  // here, so the mailbox stays a one-line config change. `contactHref()` is not
  // used for this link on purpose: it becomes a wa.me URL the day a number is
  // configured, and this specific line is the mail channel, not the primary
  // action. The button above it is the primary action and does use it.
  const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    site.contact.mailSubject,
  )}`;

  // COPY.md section 9, "Channel line, conditional": the WhatsApp clause renders
  // only once `contact.whatsapp` is set. It is empty today, so nothing here
  // names a chat channel and no number appears anywhere in this file.
  const chatClause = contactChannel() === "whatsapp" ? ", or message us on WhatsApp" : "";

  return (
    <section id="contact" className="v4-container v4-band" aria-labelledby="v4-contact-head">
      <div className="v4-band-head">
        <h2 id="v4-contact-head" className="v4-band-label">
          Start
        </h2>
      </div>

      <div className="v4-board v4-board--final">
        <div className="v4-cell v4-cell--final">
          <div className="v4-final-main">
            <div className="v4-final-ask">
              <p className="v4-final-head">Send the brief. We send back a scope.</p>
              <p className="v4-final-sub">
                Paid discovery is small and fixed, and it ends with a written scope, a date
                and a price.
              </p>
              <p className="v4-final-sub">
                If you stop there, the plan you paid for is still yours.
              </p>
            </div>

            <div className="v4-final-act">
              <ContactCTA className="v4-btn v4-btn--on-cobalt">{contactLabel()}</ContactCTA>
              <p className="v4-final-support">Paid discovery, fixed scope, no forms.</p>
            </div>
          </div>

          <p className="v4-cell-foot v4-final-foot">
            <span className="v4-mono v4-final-channel">
              Email{" "}
              <a className="v4-final-mail" href={mailHref}>
                {site.contact.email}
              </a>
              {chatClause}. No forms.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
