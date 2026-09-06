import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";

/**
 * The visible column rules of the 12 column grid.
 *
 * A decorative layer that reuses the grid definition in `tokens.css`, so a
 * hairline always lands in the middle of a real gutter. Drop it inside any
 * `position: relative` full width section. It renders nothing on one column
 * layouts, where twelve rules across a phone would be noise.
 */
export function ColumnRules() {
  return (
    <div className="v1-colrules" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <i key={i} />
      ))}
    </div>
  );
}

/**
 * The front page.
 *
 * Left eight columns carry the lead story: kicker, headline, deck, and the two
 * dates the headline rests on. Right four columns carry the paid notice and the
 * client's words, which is where a broadsheet puts a classified box and a
 * pull-quote. The rail comes first in the two column layout so the CTA is on
 * screen without scrolling at every viewport in the matrix, including
 * 844x390 where a single column would push it under the fold.
 *
 * Every word here is verbatim from docs/goal/COPY.md section 1, with the v1
 * tone note applied: "Sixteen days" spelled out, the client quote lifted into
 * the right columns as a pull-quote.
 */
export function V1Hero() {
  return (
    <section id="hero" className="v1-hero">
      <ColumnRules />

      <div className="v1-hero__inner v1-shell">
        <div className="v1-grid">
          <div className="v1-hero__story">
            <p className="v1-kicker">AI product studio and growth partner</p>

            <h1 className="v1-display v1-hero__head">
              Sixteen days from brief to a product your customers use.
            </h1>

            <p className="v1-deck v1-hero__deck">
              Devonel builds and runs the software owner-led brands sell with. We shipped a
              name-pendant studio for a bespoke jewellery house in Dubai on the morning of their
              exhibition stall.
            </p>

            {/* The proof hook: the two dates behind the headline's sixteen days. */}
            <dl className="v1-ledger v1-hero__ledger">
              <div className="v1-ledger__cell">
                <dt className="v1-ledger__k">Spec received</dt>
                <dd className="v1-ledger__v">11 Aug 2026</dd>
              </div>
              <div className="v1-ledger__cell">
                <dt className="v1-ledger__k">Live</dt>
                <dd className="v1-ledger__v">27 Aug 2026</dd>
              </div>
            </dl>
          </div>

          <aside className="v1-hero__rail">
            <ContactCTA className="v1-classified v1-hero__cta">
              <span className="v1-classified__label v1-underline">{contactLabel()}</span>
              <span className="v1-classified__support">
                Paid discovery, fixed scope, no forms.
              </span>
            </ContactCTA>

            <figure className="v1-pullquote v1-hero__quote v1-reveal">
              <blockquote>&ldquo;the layout is very good and simple&rdquo;</blockquote>
              <figcaption>the owner, a bespoke jewellery house in Dubai</figcaption>
            </figure>
          </aside>
        </div>

        <div className="v1-folio v1-folio--ruled v1-hero__folio">
          <span>Front page</span>
          <span className="v1-folio__n">1</span>
        </div>
      </div>

      {/* The rule that closes a front page. Runs to the screen edge, matching
          the rule the nameplate sits on. Static: a scroll driven draw here
          would be frozen part way whenever the page is too short to scroll. */}
      <div className="v1-rule-double" />
    </section>
  );
}
