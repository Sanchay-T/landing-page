import Image from "next/image";
import { ColumnRules } from "./hero";

/**
 * The four renders the pendant studio returns for one design.
 *
 * Kept in the product's own order, per docs/goal/ASSET-INVENTORY.md: studio,
 * on model, close up, dark mood. Each `src` points at the native `@2x` file
 * with its real intrinsic dimensions, so next/image builds its srcset from the
 * full resolution the source allows and never claims a density the pixels do
 * not support.
 *
 * `alt` is verbatim from ASSET-INVENTORY.md, which writes it to describe the
 * artefact and never name the client brand.
 */
export const RENDERS = [
  {
    src: "/media/jewelo/pendant-studio-silver@2x.webp",
    width: 1122,
    height: 1402,
    alt: "A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot",
    caption: "Studio shot. The first frame back, in about two minutes.",
  },
  {
    src: "/media/jewelo/pendant-worn-silver@2x.webp",
    width: 1122,
    height: 1222,
    alt: "A silver name pendant worn at the collarbone, framed below the chin",
    caption: "On model. Released as soon as that view finishes.",
  },
  {
    src: "/media/jewelo/pendant-close-silver@2x.webp",
    width: 1122,
    height: 1402,
    alt: "Close detail of a silver cut-out name pendant showing the polished edges and the chain links",
    caption: "Close up. The cut edges and the chain at full size.",
  },
  {
    src: "/media/jewelo/pendant-dark-silver@2x.webp",
    width: 1122,
    height: 1402,
    alt: "A silver name pendant resting on black velvet, lit as a dark editorial still",
    caption: "Dark mood. The editorial frame that closes the set.",
  },
] as const;

/**
 * The render spread: four plates in a row, each cropped to one 4:5 box so the
 * row sets to the grid the way a printed photo spread does.
 *
 * Lazy by default, which is safe here: `scripts/shots.mjs` captures the full
 * page rather than the viewport, so a below-the-fold plate is loaded and
 * present in every verification screenshot. Confirmed against both settings.
 */
export function RenderSpread({ sizes }: { sizes: string }) {
  return (
    <ol className="v1-spread__row">
      {RENDERS.map((render, i) => (
        <li key={render.src}>
          <figure>
            <span className="v1-spread__frame">
              <Image
                src={render.src}
                alt={render.alt}
                width={render.width}
                height={render.height}
                sizes={sizes}
              />
            </span>
            <figcaption className="v1-spread__cap">
              <span className="v1-spread__n">{i + 1}</span>
              <span>{render.caption}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ol>
  );
}

/** The stack, verbatim from COPY.md section 4. Set as a colophon list. */
export const STACK = [
  "Next.js",
  "React",
  "Strict TypeScript",
  "Supabase",
  "Trigger.dev",
  "gpt-image-2",
  "fal.ai Seedance",
  "Sentry",
  "PostHog",
  "DigitalOcean",
] as const;

/**
 * Proof of work.
 *
 * A broadsheet feature spread. The flagship runs as a full article: story
 * headline, dateline, standfirst, a ruled furniture column carrying the two
 * dates and the stack, the four render plates across the measure, then the
 * build set in three newspaper columns. Under the heavy rule, the two open
 * files run as short columns, each closing on its own status line so an in
 * progress case can never be read as a shipped one.
 *
 * Every word is verbatim from docs/goal/COPY.md section 4, with the v1 tone
 * note applied. The client is named only as the anonymised phrase COPY.md
 * fixes as CLIENT_JEWELLERY.
 */
export function V1Work() {
  return (
    <section id="work" className="v1-work">
      <ColumnRules />

      <div className="v1-work__inner v1-shell">
        <header className="v1-work__head">
          <p className="v1-kicker">Case studies</p>
          <h2 className="v1-display v1-work__title">
            One shipped, two in build, nothing invented.
          </h2>
        </header>

        <article className="v1-work__lead">
          <div className="v1-grid">
            <div className="v1-work__story">
              <h3 className="v1-storyhead">
                A name-pendant studio, live for an exhibition stall in sixteen days.
              </h3>

              <p className="v1-dateline v1-work__dateline">
                Jewellery. Dubai. Product studio. Shipped 27 Aug 2026.
              </p>

              <p className="v1-deck v1-work__deck">
                A bespoke jewellery house sells pendants cut to a customer&rsquo;s name. Before
                ordering, the customer could not see their own name as a finished piece. A
                customisation field on a store page is a text box, not a design studio.
              </p>
            </div>

            <aside className="v1-work__rail">
              <dl className="v1-ledger">
                <div className="v1-ledger__cell">
                  <dt className="v1-ledger__k">Spec received</dt>
                  <dd className="v1-ledger__v">11 Aug 2026</dd>
                </div>
                <div className="v1-ledger__cell">
                  <dt className="v1-ledger__k">Live</dt>
                  <dd className="v1-ledger__v">27 Aug 2026</dd>
                </div>
              </dl>

              <div>
                <h4 className="v1-crosshead">Stack</h4>
                <ul className="v1-colophon">
                  {STACK.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <p>
                <a href="/v1/work/jewelo" className="v1-textlink v1-underline">
                  Read the full build
                </a>
              </p>
            </aside>
          </div>

          <figure className="v1-work__spread v1-reveal">
            <RenderSpread sizes="(min-width: 1024px) 284px, 45vw" />
            <figcaption className="v1-spread__note">
              Four renders of one design, in the order the studio returns them. Real renders from
              the shipped product.
            </figcaption>
          </figure>

          <div className="v1-work__body v1-grid">
            <div className="v1-work__col">
              <h4 className="v1-crosshead">What we built</h4>
              <div className="v1-prose">
                <p>Type a name in Arabic or English and take a spelling suggestion.</p>
                <p>
                  Choose one name or two, then the style, the metal, the stones, the size and the
                  chain.
                </p>
                <p>Watch a live preview update as you choose, then approve the spelling.</p>
                <p>
                  The studio returns four renders: a studio shot in about two minutes, then the
                  piece on the neck, a close-up and a dark editorial frame.
                </p>
                <p>Download full screen, see a price estimate and request a quote.</p>
                <p>The operator issues the quote and the customer accepts it in the same screen.</p>
              </div>
            </div>

            <div className="v1-work__col">
              <h4 className="v1-crosshead">How it holds up</h4>
              <div className="v1-prose">
                <p>
                  Four stills run at once and each releases its on-neck version as soon as that one
                  is ready.
                </p>
                <p>
                  Under model provider limits the queue is shown honestly instead of hidden behind a
                  spinner.
                </p>
                <p>A retry fallback and a time estimate went in on launch morning.</p>
              </div>

              <h4 className="v1-crosshead">What came next</h4>
              <div className="v1-prose">
                <p>Scope locked to six design styles and three layouts.</p>
                <p>
                  Pendant sizing tightened in the renders, with pricing verification and usage
                  control moved into the next scope.
                </p>
              </div>
            </div>

            <div className="v1-work__col">
              <h4 className="v1-crosshead">Result</h4>
              <div className="v1-prose">
                <p>
                  Live on the morning of 27 Aug 2026, in time for the client&rsquo;s exhibition
                  stall.
                </p>
                <p>
                  The owner&rsquo;s note on the first version: &ldquo;the layout is very good and
                  simple&rdquo;.
                </p>
                <p>
                  The one complaint was generation time, which is set by the model providers, and we
                  said so.
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="v1-work__more">
          <div className="v1-work__showcases v1-grid">
            <article className="v1-work__case">
              <h3 className="v1-storyhead v1-storyhead--sm">
                An audit that found the launch blockers before submission.
              </h3>
              <p className="v1-dateline">Mobile app. Audit delivered.</p>
              <div className="v1-prose">
                <p>
                  A client had built a mobile app and wanted it ready for the stores, not rebuilt.
                </p>
                <p>We read the whole thing: five tabs, more than 25 screens.</p>
                <p>
                  The audit listed what would stop a launch: ad units still on test IDs, store
                  billing not wired, a notification cap that needs a rolling scheduler, a privacy
                  policy that contradicted the ads, and in-app account deletion missing.
                </p>
              </div>
              <p className="v1-status">Status: audit delivered, build not started.</p>
            </article>

            <article className="v1-work__case">
              <h3 className="v1-storyhead v1-storyhead--sm">
                Leads that answer back, for a luxury watch boutique in Dubai.
              </h3>
              <p className="v1-dateline">Retail. WhatsApp. In progress.</p>
              <div className="v1-prose">
                <p>
                  Leads were arriving on WhatsApp and going cold in the boutique&rsquo;s current
                  tool.
                </p>
                <p>
                  We ran discovery on the same channel and timed how long competitors took to answer
                  the same question; most took hours and some never replied.
                </p>
                <p>The scope is a lead system that answers, qualifies and hands over.</p>
              </div>
              <p className="v1-status">Status: in progress, discovery started 25 Aug 2026.</p>
            </article>
          </div>
        </div>

        <div className="v1-folio v1-folio--ruled v1-work__folio">
          <span>Case studies</span>
          <span className="v1-folio__n">4</span>
        </div>
      </div>

      <div className="v1-rule-double" />
    </section>
  );
}
