import { Mark } from "@/components/ds/mark";
import { site } from "@/lib/site";
import { sections } from "./sections";

/**
 * v4 footer.
 *
 * `docs/goal/03-design-research.md` section 4, direction 4, layout skeleton
 * item 10: "four grid-aligned columns". So it is the board's last row, and the
 * one thing it is not is a row of cells: after the full-width cobalt cell above
 * it, a second filled surface would compete with the page's one loud moment.
 * This row sits on the canvas, unfilled, closed by a single hairline that runs
 * the full width of the viewport rather than of the container.
 *
 * Columns, on the same twelve the rest of the page lays out on:
 *   3   the sign-off: the mark, the name, what the studio is
 *   6   every section on the page, in two sub-columns, plus the case page
 *   3   where the studio is and how to reach it
 * Then one legal band under a hairline, provenance left and dates right.
 *
 * THE ANCHORS ARE READ FROM `sections.ts`, NOT LISTED HERE. That file is the
 * honesty flag for the whole variation: a section appears in the footer the
 * moment its `built` flag turns true and not one commit earlier, which makes a
 * dead footer link impossible rather than merely discouraged. It is the same
 * contract the nav bar runs on, and the reason this list needs no maintenance.
 * The nav bar shows the five it carries; the footer shows every section above
 * it and not its own row, which is what COPY.md section 10 asks the footer
 * navigation to be.
 *
 * No social links: `docs/goal/COPY.md` lists no social account for Devonel, and
 * a link to a profile that does not exist is the one thing a footer must never
 * print. No icons, no shadow, no form. The only logo is the Devonel mark.
 *
 * Every visible string is verbatim from COPY.md section 10, except the address,
 * which is not written in this file at all: it comes from `lib/site.ts`.
 */
export function Footer() {
  // COPY.md section 10: the address is live text, linked with the canonical
  // subject prefilled. Built from `lib/site.ts` for the same reason the final
  // CTA builds it there: the mailbox is config, not copy.
  const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    site.contact.mailSubject,
  )}`;

  // The footer never indexes itself: a link from the footer to the footer is a
  // dead end, so the index is the nine sections above it - hero, labelled
  // "Devonel" the way the wordmark says it, through contact - and not ten. Same
  // shape as every other variation's index; see STATUS.md "Footer index labels".
  const anchors = sections.filter(
    (section) => section.built && section.id !== "footer",
  );

  return (
    <footer id="footer" className="v4-footer">
      <div className="v4-container v4-footer-inner">
        <div className="v4-footer-row">
          {/* COPY.md section 10, "Sign-off line": "Devonel. AI product studio
              and growth partner for owner-led brands." The name is set as the
              wordmark rather than repeated as text above the same word, so the
              mark carries the first sentence and the descriptor follows it. */}
          <div className="v4-footer-col v4-footer-sign">
            <p className="v4-wordmark v4-footer-mark">
              <Mark />
              <span>Devonel</span>
            </p>
            <p className="v4-footer-line">
              AI product studio and growth partner for owner-led brands.
            </p>
          </div>

          <nav className="v4-footer-col v4-footer-nav" aria-label="All sections">
            <ul className="v4-footer-links">
              {anchors.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.label}</a>
                </li>
              ))}
              {/* COPY.md section 10 puts the flagship case study page in the
                  footer navigation beside the section anchors. It is the only
                  sanctioned secondary action on the site and the only link here
                  that leaves the page, so it carries the same wording it
                  carries inside the case card. */}
              <li>
                <a href="/v4/work/jewelo">Read the full build</a>
              </li>
            </ul>
          </nav>

          {/* COPY.md section 10, "Location" and "Contact". They answer one
              question between them - where are you and how do I reach you - so
              they share a column. The two cities are set in Geist Mono, the
              same face the board prints every other datum in. */}
          <div className="v4-footer-col v4-footer-reach">
            <p className="v4-footer-line">
              <span className="v4-mono">Dubai and Mumbai.</span> Working with clients across
              the UAE, India and remote.
            </p>
            <p className="v4-footer-line">
              <a className="v4-footer-mail" href={mailHref}>
                {site.contact.email}
              </a>
            </p>
            <p className="v4-footer-line v4-footer-line--muted">No contact form.</p>
          </div>
        </div>

        {/* COPY.md section 10, "Legal and provenance". Four lines, provenance
            on the left and the two dated facts on the right, so the revision
            line lands where a reader looks for it. */}
        <div className="v4-footer-legal">
          <div className="v4-footer-legal-group">
            <p>Every piece of work shown here was built by Devonel.</p>
            <p>Client names appear only with the client&rsquo;s permission.</p>
          </div>
          <div className="v4-footer-legal-group v4-footer-legal-group--end">
            <p>2026 Devonel.</p>
            <p>
              Page last revised <span className="v4-mono">7 Sep 2026</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
