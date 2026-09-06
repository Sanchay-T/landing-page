import type { CSSProperties } from "react";
import { ContactCTA } from "@/components/ds/contact-cta";
import { site } from "@/lib/site";

/**
 * v2 hero: one shell session.
 *
 * A command is typed, the studio answers, and the answer is the proposition.
 * The headline is the first line of output, the subhead is the next two, the
 * proof lands as `[ok]` status lines, and the session returns to a prompt that
 * is the CTA.
 *
 * Every string is `docs/goal/COPY.md` section 1, tuned to the v2 tone note
 * there: numerals, lowercase, terse. Nothing is invented, and there is no fake
 * command output: if a line is not in COPY.md it is not on the page.
 *
 * No height is pinned. The session is as tall as its output, which is what
 * keeps the CTA on screen at 844x390.
 */

/** Stagger position in the printed sequence, read by the `v2-print` primitive. */
function printStep(i: number): CSSProperties {
  return { "--v2-print-i": i } as CSSProperties;
}

const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  site.contact.mailSubject
)}`;

export function Hero() {
  return (
    <section id="hero" className="v2-section" aria-labelledby="v2-hero-headline">
      <div className="v2-rule" data-label="hero" aria-hidden="true" />

      <div className="v2-measure">
        <p className="v2-cmd v2-print" style={printStep(0)}>
          <span className="v2-prompt">~/devonel $</span> devonel --ship pendant-studio
        </p>

        <h1 id="v2-hero-headline" className="v2-hero-h v2-print" style={printStep(1)}>
          16 days from brief to a product your customers use
        </h1>

        <p className="v2-hero-body v2-print" style={printStep(2)}>
          devonel builds and runs the software owner-led brands sell with.
        </p>
        <p className="v2-hero-body v2-print" style={printStep(2)}>
          we shipped a name-pendant studio for a bespoke jewellery house in dubai on the morning of
          their exhibition stall.
        </p>

        <ul className="v2-hero-status v2-print" style={printStep(3)}>
          <li>
            <span className="v2-ok">[ok]</span> spec received 11 aug 2026 {"->"} live 27 aug 2026
          </li>
          <li>
            <span className="v2-ok">[ok]</span>{" "}
            {`"the layout is very good and simple" - the owner, a bespoke jewellery house in dubai`}
          </li>
        </ul>

        <div className="v2-hero-cta v2-print" style={printStep(4)}>
          <p>
            <span className="v2-prompt">~/devonel $</span>{" "}
            <ContactCTA className="v2-cta">press enter to send your brief</ContactCTA>
            <span className="v2-caret" aria-hidden="true" />
          </p>
          <p className="v2-note">paid discovery, fixed scope, no forms.</p>
          <p className="v2-note">
            mail{" "}
            <a className="v2-note-link v2-inv" href={mailHref}>
              {site.contact.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
