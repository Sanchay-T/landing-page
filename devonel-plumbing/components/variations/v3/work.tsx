import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

/** Same stagger primitive the hero uses: the floor is 0.6 opacity, never 0, so
 *  a capture taken mid flight still shows every line. */
const delay = (ms: number) => ({ "--v3-enter-delay": `${ms}ms` }) as CSSProperties;

/**
 * Variation 3 - case studies.
 *
 * Copy is docs/goal/COPY.md section 4, verbatim, with the v3 tone note applied:
 * "one full-bleed render per case, text in a 720px measure, showcases reduced
 * to three lines each". Nothing here is written; every sentence is lifted.
 *
 * Composition. The flagship runs as a film: one full-bleed dark render with the
 * outcome title over its top, the four presentation views under it as a strip,
 * then the case set as production notes, term beside text, inside the measure.
 * The plate inverts the hero on purpose - type at the top, subject at the
 * bottom, one scrim and grain and none of the hero's mesh or rays - so the two
 * full-bleed pictures on the page never read as one repeated layout.
 *
 * The two open files carry no picture. The audit and the lead system have
 * shipped nothing a reader could look at yet, and a mocked dashboard would be
 * the one lie on a page whose whole argument is that the work is real.
 *
 * Every image is a real render off the shipped product, listed in
 * docs/goal/ASSET-INVENTORY.md, and every alt string is that file's row from
 * the inventory, which is written to describe the artefact and never to name
 * the client.
 */

/** docs/goal/ASSET-INVENTORY.md. `@2x` files, with their true intrinsic size.
 *  Each caption is the clause COPY.md section 4 gives that render inside "The
 *  studio returns four renders: ...", in the document's own order and its own
 *  words, so the strip names the four views without writing a line for them. */
const RENDERS = [
  {
    src: "/media/jewelo/pendant-studio-silver@2x.webp",
    width: 1122,
    height: 1402,
    alt: "A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot",
    caption: "a studio shot in about two minutes",
  },
  {
    src: "/media/jewelo/pendant-worn-silver@2x.webp",
    width: 1122,
    height: 1222,
    alt: "A silver name pendant worn at the collarbone, framed below the chin",
    caption: "the piece on the neck",
  },
  {
    src: "/media/jewelo/pendant-close-silver@2x.webp",
    width: 1122,
    height: 1402,
    alt: "Close detail of a silver cut-out name pendant showing the polished edges and the chain links",
    caption: "a close-up",
  },
  {
    src: "/media/jewelo/pendant-dark-silver@2x.webp",
    width: 1122,
    height: 1402,
    alt: "A silver name pendant resting on black velvet, lit as a dark editorial still",
    caption: "a dark editorial frame",
  },
] as const;

/** COPY.md section 4, "Stack.", split at its commas. No logos, ever. */
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
] as const;

export function V3Work() {
  return (
    <section className="v3-work" id="work" aria-labelledby="v3-work-title">
      <div className="v3-shell">
        <div className="v3-work__head v3-enter">
          {/* COPY.md section 4's own label. The proof strip above owns "Proof
              of work", which is section 2's, so the two chips stay distinct. */}
          <p className="v3-eyebrow">Case studies</p>
          <h2 className="v3-h2" id="v3-work-title">
            One shipped, two in build, nothing invented.
          </h2>
        </div>
      </div>

      <article>
        {/* The plate. Fixed aspect at every width, so the crop the pendant sits
            in is the same on a 360 phone and a 2560 ultrawide. */}
        <div className="v3-work__plate">
          <Image
            src="/media/jewelo/pendant-dark-silver@2x.webp"
            alt="A silver name pendant resting on black velvet, lit as a dark editorial still"
            width={1122}
            height={1402}
            sizes="100vw"
            priority
          />
          <div className="v3-work__plate-scrim" />
          <div className="v3-work__plate-grain" />
          <div className="v3-work__plate-inner v3-enter" style={delay(80)}>
            <h3 className="v3-work__plate-title">
              A name-pendant studio, live for an exhibition stall in sixteen days.
            </h3>
            <p className="v3-work__tags">Jewellery. Dubai. Product studio. Shipped 27 Aug 2026.</p>
          </div>
        </div>

        <div className="v3-shell">
          <ul className="v3-work__strip">
            {RENDERS.map((render) => (
              <li className="v3-work__frame" key={render.src}>
                <div className="v3-work__frame-media">
                  <Image
                    src={render.src}
                    alt={render.alt}
                    width={render.width}
                    height={render.height}
                    sizes="(min-width: 82.5rem) 19rem, (min-width: 48rem) 24vw, 44vw"
                    priority
                  />
                </div>
                <p className="v3-caption">{render.caption}</p>
              </li>
            ))}
          </ul>

          <dl className="v3-work__dossier">
            <div className="v3-work__row">
              <dt className="v3-work__term">Problem</dt>
              <dd className="v3-work__def">
                <div className="v3-work__prose">
                  <p>A bespoke jewellery house sells pendants cut to a customer&rsquo;s name.</p>
                  <p>
                    Before ordering, the customer could not see their own name as a finished piece.
                  </p>
                  <p>A customisation field on a store page is a text box, not a design studio.</p>
                </div>
              </dd>
            </div>

            <div className="v3-work__row">
              <dt className="v3-work__term">What we built</dt>
              <dd className="v3-work__def">
                <div className="v3-work__prose">
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
              </dd>
            </div>

            <div className="v3-work__row">
              <dt className="v3-work__term">How it holds up</dt>
              <dd className="v3-work__def">
                <div className="v3-work__prose">
                  <p>
                    Four stills run at once and each releases its on-neck version as soon as that one
                    is ready.
                  </p>
                  <p>
                    Under model provider limits the queue is shown honestly instead of hidden behind
                    a spinner.
                  </p>
                  <p>A retry fallback and a time estimate went in on launch morning.</p>
                </div>
              </dd>
            </div>

            <div className="v3-work__row">
              <dt className="v3-work__term">Stack</dt>
              <dd className="v3-work__def">
                <ul className="v3-work__stack">
                  {STACK.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>

            <div className="v3-work__row">
              <dt className="v3-work__term">Result</dt>
              <dd className="v3-work__def">
                <div className="v3-work__prose">
                  <p>
                    Spec on 11 Aug 2026. Live on the morning of 27 Aug 2026, in time for the
                    client&rsquo;s exhibition stall.
                  </p>
                </div>
                <blockquote className="v3-work__quote">
                  <p>&ldquo;the layout is very good and simple&rdquo;</p>
                  <footer>The owner&rsquo;s note on the first version</footer>
                </blockquote>
                <div className="v3-work__prose">
                  <p>
                    The one complaint was generation time, which is set by the model providers, and
                    we said so.
                  </p>
                </div>
              </dd>
            </div>

            <div className="v3-work__row">
              <dt className="v3-work__term">What came next</dt>
              <dd className="v3-work__def">
                <div className="v3-work__prose">
                  <p>Scope locked to six design styles and three layouts.</p>
                  <p>
                    Pendant sizing tightened in the renders, with pricing verification and usage
                    control moved into the next scope.
                  </p>
                </div>
              </dd>
            </div>
          </dl>

          <div className="v3-work__foot">
            <Link className="v3-work__more" href="/v3/work/jewelo">
              Read the full build
            </Link>
          </div>
        </div>
      </article>

      <div className="v3-shell">
        <div className="v3-work__minor">
          <article className="v3-work__case">
            <div className="v3-work__case-side">
              <h3 className="v3-work__case-title">
                An audit that found the launch blockers before submission.
              </h3>
              <p className="v3-work__tags">Mobile app. Audit delivered.</p>
            </div>
            <div className="v3-work__case-body">
              <div className="v3-work__prose">
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
              <p className="v3-work__status">Status: audit delivered, build not started.</p>
            </div>
          </article>

          <article className="v3-work__case">
            <div className="v3-work__case-side">
              <h3 className="v3-work__case-title">
                Leads that answer back, for a luxury watch boutique in Dubai.
              </h3>
              <p className="v3-work__tags">Retail. WhatsApp. In progress.</p>
            </div>
            <div className="v3-work__case-body">
              <div className="v3-work__prose">
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
              <p className="v3-work__status v3-work__status--open">
                Status: in progress, discovery started 25 Aug 2026.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
