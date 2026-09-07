import { sections } from "./sections";

/**
 * v4 board: COPY.md sections 2 and 3 as one status board.
 *
 * `docs/goal/03-design-research.md` section 4, layout skeleton item "2 and 3":
 * proof and services are one grid. So this file is one band holding two
 * regions, `#proof` and `#services`, on the same column rhythm and the same
 * gap. The hero prints a four-cell excerpt of this board; this is the whole
 * thing, and it is the page's argument rather than a decoration of it.
 *
 * The twist is the sizing rule, and it is applied literally:
 *   live      the one shipped product, 2x2, filled, the only cobalt rule
 *   in build  the two open showcases, 1x1, reduced fill under a hatch
 *   shipped   a service with a delivered case behind it, filled, no rule
 *   outline   a service with nothing shipped behind it, 1px border, no fill,
 *             and the FULL service copy in ink so it reads as unbuilt rather
 *             than as disabled
 *   figure    one of the five sourced counts, Geist Mono, tabular
 *
 * Which services are filled is a sourced decision, not a taste one. Customer
 * facing product studios and generated product media are the two the live
 * studio is made of, so they are filled and they are the widest service cells.
 * App store readiness is filled because COPY.md marks the audit delivered.
 * Agent systems has only an internal harness behind it and WhatsApp lead
 * systems is in discovery, so those two are the outline-only pair the direction
 * calls for.
 *
 * Every string is verbatim from `docs/goal/COPY.md` sections 2, 3 and 4, with
 * three exceptions recorded here: the numerals on the figure cells are the
 * counts set as digits because the direction requires Geist Mono figures on the
 * board; "cell size is how much of it is live" is taken verbatim from the
 * direction; and "Redrawn every time something ships." is an authored label,
 * written because COPY.md carries no wording for the line the direction asks
 * to sit beside the legend.
 *
 * No icons, no shadows, no client imagery, no logo strip: a cell's visual is a
 * number, a date or a sentence.
 */

/**
 * The case section is the only sanctioned secondary action, so its cell is a
 * link and it may only exist once that section does. `sections.ts` is the one
 * place that knows, which makes a dead anchor impossible rather than merely
 * unlikely. While the section is missing the cell is dropped and the last
 * figure widens, so the proof region still carries 12 units and no row ends in
 * an empty slot.
 */
const caseBuilt = sections.some((section) => section.id === "work" && section.built);

export function Board() {
  return (
    <div className="v4-container v4-band">
      <section id="proof" className="v4-band-region" aria-labelledby="v4-proof-head">
        <header className="v4-sticky-head v4-band-head">
          <h2 id="v4-proof-head" className="v4-band-label">
            Proof of work
          </h2>
          <p className="v4-band-line">Shipped, not promised.</p>
        </header>

        <div className="v4-board v4-board--full">
          {/* The one live product. Biggest cell on the board, and the only one
              carrying a date, a dot, a customer's words and a scope line. */}
          <article className="v4-cell v4-cell--live">
            <p className="v4-chip">
              <span className="v4-dot" aria-hidden="true" />
              One product live
            </p>
            <h3 className="v4-cell-title">
              A name-pendant studio for a bespoke jewellery house in Dubai
            </h3>
            <p className="v4-cell-line">
              A web app they configure, preview and order in, with the quote issued and accepted
              in the same screen.
            </p>
            {/* Pinned just above the footer band, so the words and the date
                the honesty rule is built on sit together. */}
            <div className="v4-cell-quote">
              <p className="v4-cell-line">
                &quot;the layout is very good and simple&quot;
              </p>
              <p className="v4-cell-line v4-cell-line--muted">
                - the owner, a bespoke jewellery house in Dubai, on the day the studio went live
              </p>
            </div>
            <p className="v4-cell-foot">
              Shipped <span className="v4-mono">27 Aug 2026</span>
            </p>
          </article>

          {/* The two open showcases, at reduced fill under a hatch, each with
              the exact status line COPY.md section 4 gives it. */}
          <article className="v4-cell v4-cell--build">
            <h3 className="v4-cell-title">
              An audit that found the launch blockers before submission.
            </h3>
            <p className="v4-cell-foot">Status: audit delivered, build not started</p>
          </article>

          <article className="v4-cell v4-cell--build">
            <h3 className="v4-cell-title">
              Leads that answer back, for a luxury watch boutique in Dubai.
            </h3>
            <p className="v4-cell-foot">
              Status: in progress, discovery started <span className="v4-mono">25 Aug 2026</span>
            </p>
          </article>

          {/* The five counts from COPY.md section 2, one cell each. The figure
              is printed by the token system and counts up once on hover; the
              value also sits in the DOM as text for assistive technology. */}
          <article className="v4-cell v4-cell--figure">
            <p>
              <span className="v4-figure v4-figure--live" aria-hidden="true" />
              <span className="v4-sr">1</span>
            </p>
            <p className="v4-figure-cap">product live</p>
          </article>

          <article className="v4-cell v4-cell--figure">
            <p>
              <span className="v4-figure v4-figure--days" aria-hidden="true" />
              <span className="v4-sr">16</span>
            </p>
            <p className="v4-figure-cap">days from spec to live</p>
          </article>

          <article className="v4-cell v4-cell--figure">
            <p>
              <span className="v4-figure v4-figure--renders" aria-hidden="true" />
              <span className="v4-sr">4</span>
            </p>
            <p className="v4-figure-cap">renders per design, the first in about two minutes</p>
          </article>

          <article className="v4-cell v4-cell--figure">
            <p>
              <span className="v4-figure v4-figure--screens" aria-hidden="true" />
              <span className="v4-sr">more than 25</span>
            </p>
            <p className="v4-figure-cap">screens covered in an app store readiness audit</p>
          </article>

          <article
            className={
              caseBuilt
                ? "v4-cell v4-cell--figure"
                : "v4-cell v4-cell--figure v4-cell--figure-wide"
            }
          >
            <p>
              <span className="v4-figure v4-figure--cities" aria-hidden="true" />
              <span className="v4-sr">2</span>
            </p>
            <p className="v4-figure-cap">cities: Dubai and Mumbai</p>
          </article>

          {caseBuilt ? (
            <a href="#work" className="v4-cell v4-cell--outline v4-cell--cta">
              <p className="v4-cell-line v4-cell-line--muted">Case studies</p>
              <p className="v4-cell-foot">See how it was built</p>
            </a>
          ) : null}
        </div>
      </section>

      <section id="services" className="v4-band-region" aria-labelledby="v4-services-head">
        <header className="v4-sticky-head v4-band-head">
          <h2 id="v4-services-head" className="v4-band-label">
            What you buy
          </h2>
          <p className="v4-band-line">Five things we build.</p>
          <p className="v4-band-sub">
            Each one is scoped, dated and priced in paid discovery before a line of code is
            written.
          </p>
        </header>

        <div className="v4-board v4-board--full">
          <article className="v4-cell v4-cell--shipped v4-cell--service v4-cell--service-lead">
            <h3 className="v4-cell-title">Customer-facing product studios.</h3>
            <p className="v4-cell-line">
              Let your customer design the thing before they buy it.
            </p>
            <ul className="v4-cell-list">
              <li>
                A web app they configure, preview and order in, with the quote issued and accepted
                in the same screen.
              </li>
              <li>Not a customisation field bolted onto a store page.</li>
            </ul>
            <p className="v4-cell-foot">
              Shipped <span className="v4-mono">27 Aug 2026</span>
            </p>
          </article>

          <article className="v4-cell v4-cell--shipped v4-cell--service v4-cell--service-lead">
            <h3 className="v4-cell-title">Generated product media.</h3>
            <p className="v4-cell-line">
              Product images and video without a shoot for every variant.
            </p>
            <ul className="v4-cell-list">
              <li>
                On-brand stills and video that hold the same person, the same brand voice and the
                local language.
              </li>
              <li>
                Four finished renders per pendant design on the live studio, the first in about two
                minutes.
              </li>
            </ul>
            <p className="v4-cell-foot">
              Shipped <span className="v4-mono">27 Aug 2026</span>
            </p>
          </article>

          <article className="v4-cell v4-cell--outline v4-cell--service">
            <h3 className="v4-cell-title">Agent systems and harnesses.</h3>
            <p className="v4-cell-line">Automation you can watch working.</p>
            <ul className="v4-cell-list">
              <li>
                Agents with verification loops, browser control and telemetry, so you see what ran
                and what failed.
              </li>
              <li>It is the same harness this studio runs its own build work on.</li>
            </ul>
          </article>

          <article className="v4-cell v4-cell--outline v4-cell--service">
            <h3 className="v4-cell-title">WhatsApp lead systems.</h3>
            <p className="v4-cell-line">A number that answers while the lead is still warm.</p>
            <ul className="v4-cell-list">
              <li>
                Qualify, answer and hand over on the channel your customers already use, wired to
                the inbox or tool you already pay for.
              </li>
            </ul>
          </article>

          <article className="v4-cell v4-cell--shipped v4-cell--service">
            <h3 className="v4-cell-title">App store readiness.</h3>
            <p className="v4-cell-line">Find what will fail review before you submit.</p>
            <ul className="v4-cell-list">
              <li>
                One audit across screens, billing, notification scheduling, privacy and store
                policy, with the blockers listed in the order they will bite.
              </li>
            </ul>
            <p className="v4-cell-foot">Audit delivered.</p>
          </article>
        </div>

        {/* COPY.md section 3, "Standing lines under the grid". Terms that hold
            for all five services, so they are lines under the board rather than
            a sixth cell competing with the five. */}
        <ul className="v4-standing">
          <li>Who is on it: both founders, on every engagement, from the first message.</li>
          <li>
            Duration is fixed in discovery and written into the scope, not estimated on a call.
          </li>
          <li>
            Buy versus build: if you should buy something off the shelf instead, we say so in
            discovery.
          </li>
        </ul>
      </section>

      <div className="v4-band-legend">
        <p className="v4-legend">cell size is how much of it is live</p>
        <p className="v4-legend">Redrawn every time something ships.</p>
      </div>
    </div>
  );
}
