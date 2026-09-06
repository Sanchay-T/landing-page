import type { CSSProperties } from "react";
import { ContactCTA } from "@/components/ds/contact-cta";
import { site } from "@/lib/site";

/**
 * v2 final CTA: the shell stops printing and waits.
 *
 * Every section above this one is the buffer printing something: a record, a
 * help page, a config file, a run log. This one is the only place the session
 * goes interactive. The command prints the recap, the terms and the one line of
 * proof, and then the prompt comes back and stays lit. Nothing follows it but
 * the two lines of fine print, so the caret is the last thing moving on the
 * page and the only display-size accent anywhere in the direction.
 *
 * Copy is `docs/goal/COPY.md` section 9 tuned to its v2 tone note there
 * ("a blinking caret prompt, `press enter to send your brief`, with the channel
 * printed underneath"): numerals, lowercase, terse. The headline is the recap,
 * the body is the risk reversal, the quote is COPY's "proof beside the button",
 * and the two notes are COPY's CTA support line and its always-on channel line.
 * Nothing is invented and there is no form: COPY.md forbids one outright.
 *
 * The channel is never named here. `ContactCTA` reads `lib/site.ts` and
 * resolves to mail today and to WhatsApp the day a number lands, and the chat
 * clause on the mail line is gated on the same value, so this file needs no
 * edit either way.
 */

/** Stagger position in the printed sequence, read by the `v2-print` primitive. */
function printStep(i: number): CSSProperties {
  return { "--v2-print-i": i } as CSSProperties;
}

/**
 * The mailbox line is built from `site.contact.email` rather than from
 * `contactHref()`, because `contactHref()` becomes a wa.me link the moment a
 * number is configured and this line is specifically the mailbox.
 */
const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  site.contact.mailSubject
)}`;

/**
 * COPY.md section 9, "Channel line, conditional": the clause renders only once
 * `contact.whatsapp` is set. While it is empty no chat channel is named here.
 */
const chatClause = site.contact.whatsapp.length > 0 ? ", or message us on whatsapp" : "";

export function Contact() {
  return (
    <section id="contact" className="v2-section v2-ct" aria-labelledby="v2-ct-h">
      <div className="v2-rule" data-label="contact" aria-hidden="true" />

      <div className="v2-measure">
        <p className="v2-cmd v2-print" style={printStep(0)}>
          <span className="v2-prompt">~/devonel $</span> devonel --send
        </p>

        {/* Two sentences, two printed lines. A program writes one line per
            thing it has to say, and at display size that also means the recap
            can never wrap badly: the longer of the two is 21 characters, which
            fits the measure at every width in the matrix. */}
        <h2 id="v2-ct-h" className="v2-ct-h v2-print" style={printStep(1)}>
          <span className="v2-ct-h-line">send the brief.</span>
          <span className="v2-ct-h-line">we send back a scope.</span>
        </h2>

        <p className="v2-ct-body v2-print" style={printStep(2)}>
          paid discovery is small and fixed, and it ends with a written scope, a date and a price.
        </p>
        <p className="v2-ct-body v2-print" style={printStep(2)}>
          if you stop there, the plan you paid for is still yours.
        </p>

        <figure className="v2-ct-proof v2-print" style={printStep(3)}>
          <blockquote className="v2-ct-quote">
            {`"the layout is very good and simple"`}
          </blockquote>
          <figcaption className="v2-ct-by">
            - the owner, a bespoke jewellery house in dubai. shipped 27 aug 2026.
          </figcaption>
        </figure>

        <div className="v2-ct-cta v2-print" style={printStep(4)}>
          <p className="v2-ct-prompt">
            <span className="v2-prompt">~/devonel $</span>{" "}
            <span className="v2-ct-input">
              <ContactCTA className="v2-cta">press enter to send your brief</ContactCTA>
              <span className="v2-caret" aria-hidden="true" />
            </span>
          </p>

          <p className="v2-note v2-ct-note">paid discovery, fixed scope, no forms.</p>
          <p className="v2-note v2-ct-note">
            mail{" "}
            <a className="v2-note-link v2-inv" href={mailHref}>
              {site.contact.email}
            </a>
            {chatClause}
          </p>
        </div>
      </div>
    </section>
  );
}
