import Image from "next/image";

/**
 * v4 case studies.
 *
 * The honesty rule from `docs/goal/03-design-research.md` section 4, direction
 * 4, applied at case scale: cell size is how much of it is live. The one
 * shipped product is eight of the twelve columns and both rows, filled, with
 * the cobalt rule and the jade dot; the two unshipped cases stack in the
 * four-column strip beside it, one row each, at reduced fill under the same
 * hatch the board uses for work in build, and each carries its exact status
 * line rather than a picture that would claim more than is true. That is a
 * quarter of the flagship's area apiece, the ratio block 16 set when both were
 * on one row; block 23 stacks them so the ratio stops rendering as a 193px
 * sliver on a wide screen.
 *
 * Imagery rule, `docs/goal/ASSET-INVENTORY.md`: one still, in the flagship cell
 * only, at most 480px at 1x and rendered here at 300px, inside its own frame
 * beside the text and never behind it. The two showcases carry none, because
 * they are not shipped and an image would say otherwise.
 *
 * Every string is verbatim from `docs/goal/COPY.md` section 4, including both
 * status lines and the sanctioned secondary CTA.
 */

/** COPY.md section 4, flagship "Stack", in its own order. */
const STACK = [
  "Next.js",
  "React",
  "strict TypeScript",
  "Supabase",
  "Trigger.dev",
  "gpt-image-2",
  "fal.ai Seedance",
  "Sentry",
  "PostHog",
  "DigitalOcean",
];

/** COPY.md section 4, flagship "Tags", split into the four it lists. */
const TAGS = ["Jewellery", "Dubai", "Product studio"];

export function Work() {
  return (
    <section id="work" className="v4-work" aria-label="Case studies">
      <div className="v4-container v4-work-band">
        {/* Same head vocabulary as the board band above it: the COPY.md label
            and the COPY.md headline on one baseline row, no stacked eyebrow. */}
        <div className="v4-band-head">
          <p className="v4-band-label">Case studies</p>
          <h2 className="v4-band-line">One shipped, two in build, nothing invented.</h2>
        </div>

        <div className="v4-board v4-work-board">
          {/* Shipped: eight columns and both rows, filled, cobalt rule, one
              still. */}
          <article className="v4-cell v4-cell--live v4-work-flagship">
            <h3 className="v4-work-title">
              A name-pendant studio, live for an exhibition stall in sixteen days.
            </h3>

            <ul className="v4-work-tags">
              {TAGS.map((tag) => (
                <li className="v4-chip" key={tag}>
                  {tag}
                </li>
              ))}
              <li className="v4-chip">
                <span className="v4-dot" aria-hidden="true" />
                Shipped 27 Aug 2026
              </li>
            </ul>

            <div className="v4-work-body">
              <div className="v4-work-text">
                <h4 className="v4-work-label">Problem</h4>
                <p className="v4-cell-line">
                  A bespoke jewellery house sells pendants cut to a customer&#39;s name. Before
                  ordering, the customer could not see their own name as a finished piece. A
                  customisation field on a store page is a text box, not a design studio.
                </p>

                <h4 className="v4-work-label">What we built</h4>
                <ul className="v4-work-list">
                  <li className="v4-cell-line">
                    Type a name in Arabic or English and take a spelling suggestion.
                  </li>
                  <li className="v4-cell-line">
                    Watch a live preview update as you choose, then approve the spelling.
                  </li>
                  <li className="v4-cell-line">
                    The operator issues the quote and the customer accepts it in the same screen.
                  </li>
                </ul>

                <h4 className="v4-work-label">Stack</h4>
                <ul className="v4-work-tags">
                  {STACK.map((item) => (
                    <li className="v4-chip v4-chip--mono" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="v4-work-label">Result</h4>
                <p className="v4-cell-line">
                  Spec on 11 Aug 2026. Live on the morning of 27 Aug 2026, in time for the
                  client&#39;s exhibition stall.
                </p>

                <p className="v4-work-more">
                  <a className="v4-btn v4-btn--outline" href="/v4/work/jewelo">
                    Read the full build
                  </a>
                </p>
              </div>

              <figure className="v4-work-plate">
                <Image
                  className="v4-plate-img"
                  src="/media/jewelo/pendant-studio-silver@2x.webp"
                  alt="A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot"
                  width={1122}
                  height={1402}
                  sizes="(min-width: 900px) 300px, (min-width: 640px) 45vw, 80vw"
                  priority
                />
              </figure>
            </div>

            {/* One flex item: `.v4-cell-foot` puts a gap between its children,
                so the whole line has to be a single span or the comma detaches
                from the date in front of it. */}
            <p className="v4-cell-foot">
              <span>
                <span className="v4-mono">11 Aug 2026</span> to{" "}
                <span className="v4-mono">27 Aug 2026</span>, spec to live
              </span>
            </p>
          </article>

          {/* In build: the four-column strip beside the flagship, one row
              each, reduced fill under the hatch, no image. */}
          <article className="v4-cell v4-cell--build v4-work-show">
            <h3 className="v4-work-show-title">
              An audit that found the launch blockers before submission.
            </h3>
            <p className="v4-cell-line v4-cell-line--muted">Mobile app. Audit delivered.</p>
            <p className="v4-cell-line">
              A client had built a mobile app and wanted it ready for the stores, not rebuilt.
            </p>
            <p className="v4-cell-foot">Status: audit delivered, build not started</p>
          </article>

          <article className="v4-cell v4-cell--build v4-work-show">
            <h3 className="v4-work-show-title">
              Leads that answer back, for a luxury watch boutique in Dubai.
            </h3>
            <p className="v4-cell-line v4-cell-line--muted">Retail. WhatsApp. In progress.</p>
            <p className="v4-cell-line">
              Leads were arriving on WhatsApp and going cold in the boutique&#39;s current tool.
            </p>
            <p className="v4-cell-foot">Status: in progress, discovery started 25 Aug 2026</p>
          </article>
        </div>
      </div>
    </section>
  );
}
