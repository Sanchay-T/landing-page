import { variations } from "@/app/(variations)/variations";
import { Mark } from "@/components/ds/mark";
import { site } from "@/lib/site";
import { type V4Section } from "./sections";

/**
 * Variation 4 footer - the end-of-line board.
 *
 * Copy is docs/goal/COPY.md section 10, tuned to the v4 tone note ("black
 * panel, four columns, contact in the accent colour"). Nothing here is written
 * outside that section: the sign-off line, the location sentence, the mailbox,
 * the year and the provenance lines are all verbatim, and the column heads are
 * COPY.md's own subheads ("Contact", "Location", "Navigation" split into the
 * two lists it names).
 *
 * WHY IT IS A BOARD AND NOT A COLOPHON
 * Every other section of this page is a piece of transit signage: the nav is
 * the platform band, the hero a route map, the process a timetable, the
 * engagement a fare-rules board. The last thing on a platform is the board
 * that lists where else this station goes, so that is what the footer is.
 * It inverts the page: black ground, paper ink, paper rules - the exact reverse
 * of the 3px black rules on white that divide every section above it. That
 * inversion is the only device the footer adds, which is what keeps it a full
 * stop rather than a tenth section.
 *
 * WHY THE RULES ARE 2px AND EVERYTHING ABOVE IS 3px
 * --v4-rule is 3px and it is the page's section-level division. The footer is
 * one section dividing itself internally, so its rules sit one step down the
 * hierarchy. Two weights, two meanings, same as the founders manifest (3px
 * around the ruled list, 1px between its rows).
 *
 * WHY THE INDEX IS GENERATED
 * `sections` is the same array the signage bar reads, so a link can only exist
 * for a section that is actually rendered. The build spec fails dead links and
 * `#` hrefs, and a hand-typed footer index is exactly how one appears three
 * sections later. The footer drops its own row: a link to the thing you are
 * standing on is not a destination.
 *
 * WHY THE MAILTO IS BUILT HERE AND NOT FROM contactHref()
 * `contactHref()` resolves to WhatsApp the moment `contact.whatsapp` is set,
 * and this line is the mailbox, printed as live text the way COPY.md section 10
 * requires. Building it from `site.contact` keeps the printed address and the
 * link the same string forever. COPY.md gates the WhatsApp line on that same
 * config value, and it is empty, so no chat channel is named here.
 *
 * WHY YELLOW IS THE ACCENT
 * tokens.css 1.1 measures the four inks: on black, yellow is 12.3:1 and is
 * already the page's black-ground accent (the nav CTA, every focus ring inside
 * a black panel). Red is 4.0:1 and blue 3.2:1 on this ground, so neither could
 * carry the address at any size. One accent, one meaning: yellow on this panel
 * is the address and the focus ring, and nothing else takes it.
 *
 * WHY THERE IS NO CTA
 * COPY.md pins one primary CTA wording and the contact section directly above
 * this one carries it. A second button 200px later is the same action asked
 * twice, and this variation's rule is that a block is an action, so a footer
 * full of blocks would read as five of them.
 */

/** COPY.md section 10, "Legal and provenance", verbatim. Fixed strings, not a
 *  clock: the page is dated by the copy document, so a rendered year that drifts
 *  from `docs/goal/COPY.md` would be the page contradicting its own source. */
const YEAR_LINE = "2026 Devonel.";
const PROVENANCE = [
  "Every piece of work shown here was built by Devonel.",
  "Client names appear only with the client's permission.",
  "Page last revised 7 Sep 2026.",
] as const;

/** COPY.md section 10, "Location", verbatim. The cities come from lib/site.ts
 *  so the footer and the founders nameplates cannot name different places. */
const CITIES = `${site.locations.join(" and ")}.`;
const REACH = "Working with clients across the UAE, India and remote.";

/** COPY.md section 4, "CTA alternates" A: the only sanctioned secondary action
 *  and the only wording the document gives this link. */
const CASE_LABEL = "Read the full build";
const CASE_HREF = "/v4/work/jewelo";

/** COPY.md section 10, "Navigation": the variation switcher. */
const SWITCHER_LABEL = "Variation switcher";

/** COPY.md "Constants": print the address as live text, link it with the brief
 *  subject prefilled. */
const MAIL_HREF = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  site.contact.mailSubject,
)}`;

export function V4Footer({ sections }: { sections: readonly V4Section[] }) {
  const index = sections.filter((section) => section.built && section.id !== "footer");

  return (
    <footer className="v4-foot v4-panel--black" id="footer">
      <div className="v4-shell">
        {/* The masthead, upside down: the mark and the wordmark at the 24 stop,
            then the sign-off line at the 40 stop under it. The wordmark says
            "Devonel" and the line says the rest of COPY.md's sign-off sentence,
            so the sentence is printed once between the two. */}
        <div className="v4-foot__head">
          <p className="v4-foot__brand">
            <Mark className="v4-foot__mark" />
            <span>Devonel</span>
          </p>

          <p className="v4-foot__signoff">{site.positioning}</p>
        </div>

        <div className="v4-foot__board v4-grid">
          <section className="v4-foot__col" aria-labelledby="v4-foot-sections">
            <h2 className="v4-foot__head-label" id="v4-foot-sections">
              Sections
            </h2>

            <ul className="v4-foot__list">
              {index.map((section) => (
                <li key={section.id}>
                  <a className="v4-foot__link" href={`#${section.id}`}>
                    {section.navLabel}
                  </a>
                </li>
              ))}
              {/* The one sanctioned sub-page. It is a page rather than an
                  anchor, so it takes the full width of the index and closes
                  it, the way the switcher closes the variations list. */}
              <li className="v4-foot__case">
                <a className="v4-foot__link" href={CASE_HREF}>
                  {CASE_LABEL}
                </a>
              </li>
            </ul>
          </section>

          <section className="v4-foot__col" aria-labelledby="v4-foot-contact">
            <h2 className="v4-foot__head-label" id="v4-foot-contact">
              Contact
            </h2>

            {/* The one piece of colour on the panel. Printed in full and linked
                to itself, so a reader who wants to copy the address rather than
                open a mail client can read it off the page. */}
            <a className="v4-foot__mail" href={MAIL_HREF}>
              {site.contact.email}
            </a>
          </section>

          <section className="v4-foot__col" aria-labelledby="v4-foot-location">
            <h2 className="v4-foot__head-label" id="v4-foot-location">
              Location
            </h2>

            {/* One paragraph, in COPY.md's own order: the cities, then the
                reach. */}
            <p className="v4-foot__where">
              {CITIES} {REACH}
            </p>
          </section>

          <section className="v4-foot__col" aria-labelledby="v4-foot-variations">
            <h2 className="v4-foot__head-label" id="v4-foot-variations">
              Variations
            </h2>

            {/* Numbers are data here, not decoration: variations.ts calls them
                "the label on the switcher button", and they are what Sanchay
                taps. The page you are on is printed without a link, because a
                link to here from here is the dead link the spec fails. */}
            <ul className="v4-foot__list v4-foot__list--file">
              {variations.map((variation) => (
                <li key={variation.slug}>
                  {variation.slug === "v4" ? (
                    <span className="v4-foot__here" aria-current="page">
                      <span className="v4-foot__n">{variation.n}</span>
                      {variation.name}
                    </span>
                  ) : (
                    <a className="v4-foot__link" href={variation.href}>
                      <span className="v4-foot__n">{variation.n}</span>
                      {variation.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* The switcher sits under its own rule rather than as a sixth
                numbered line, because it is not a sixth variation: it is the
                index all five are listed on. */}
            <a className="v4-foot__link v4-foot__switcher" href="/">
              {SWITCHER_LABEL}
            </a>
          </section>
        </div>

        {/* The small print, on one rule at the foot of the board. */}
        <div className="v4-foot__legal">
          <p className="v4-foot__year">{YEAR_LINE}</p>

          <p className="v4-foot__provenance">{PROVENANCE.join(" ")}</p>
        </div>
      </div>
    </footer>
  );
}
