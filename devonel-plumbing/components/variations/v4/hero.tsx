import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";

/**
 * v4 hero.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 1, using sanctioned
 * headline alternate A. The written headline runs to three lines at 56px in a
 * 616px column, and this direction is specified as a two-line headline; the
 * alternate is 40 characters and sets to two lines at every width from 390 up,
 * and the sixteen-day fact it gives up is carried by the board instead, in the
 * figure cell and in the live cell's launch date.
 *
 * The board preview announces the mechanism before the page uses it. Its four
 * cells are a staircase, and the steps are the honesty rule: a shipped product
 * is 2x2 and filled, work in build is 3x1 at reduced fill under a hatch, a
 * service with no case behind it is 2x1 as an outline with nothing dimmed about
 * its copy, and the proof figure is the 1x1. No icons, no shadows, no client
 * imagery: a cell's visual is a number, a date or a sentence.
 */
export function Hero() {
  return (
    <section id="hero" className="v4-hero">
      <div className="v4-container v4-hero-layout">
        <div className="v4-hero-copy">
          <p className="v4-eyebrow">AI product studio and growth partner</p>

          <h1 className="v4-display">The studio that ships before it pitches.</h1>

          <p className="v4-lede">
            Devonel builds and runs the software owner-led brands sell with. We shipped a
            name-pendant studio for a bespoke jewellery house in Dubai on the morning of their
            exhibition stall.
          </p>

          <div className="v4-hero-actions">
            <ContactCTA className="v4-btn v4-btn--primary">{contactLabel()}</ContactCTA>
            <p className="v4-support">Paid discovery, fixed scope, no forms.</p>
          </div>
        </div>

        <div className="v4-hero-board">
          <div className="v4-board v4-board--preview">
            {/* Live: the only shipped product, so the only 2x2 and the only
                filled cell carrying a date, a dot and a customer's words. */}
            <article className="v4-cell v4-cell--live">
              <p className="v4-chip">
                <span className="v4-dot" aria-hidden="true" />
                One product live
              </p>
              <p className="v4-cell-title">A name-pendant studio</p>
              <p className="v4-cell-line">
                &ldquo;the layout is very good and simple&rdquo;
              </p>
              <p className="v4-cell-line v4-cell-line--muted">
                - the owner, a bespoke jewellery house in Dubai
              </p>
              <p className="v4-cell-foot">
                Shipped <span className="v4-mono">27 Aug 2026</span>
              </p>
            </article>

            {/* In build: reduced fill, hatched, and the status line exactly as
                the case study states it. */}
            <article className="v4-cell v4-cell--build">
              <p className="v4-cell-title">
                Leads that answer back, for a luxury watch boutique in Dubai.
              </p>
              <p className="v4-cell-line v4-cell-line--muted">
                Status: in progress, discovery started 25 Aug 2026
              </p>
            </article>

            {/* Outline: nothing shipped behind it yet, so no fill. The copy is
                the full service entry and it is set in ink, not greyed. */}
            <article className="v4-cell v4-cell--outline">
              <p className="v4-cell-title">Agent systems and harnesses.</p>
              <p className="v4-cell-line">Automation you can watch working.</p>
            </article>

            {/* Figure: one proof count, in mono, counting up once on hover. */}
            <article className="v4-cell v4-cell--figure">
              <p>
                <span className="v4-figure v4-figure--days" aria-hidden="true" />
                <span className="v4-sr">16</span>
              </p>
              <p className="v4-figure-cap">days from spec to live</p>
            </article>
          </div>

          <p className="v4-legend">cell size is how much of it is live</p>
        </div>
      </div>
    </section>
  );
}
