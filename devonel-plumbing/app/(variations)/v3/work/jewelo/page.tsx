import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactCTA } from "@/components/ds/contact-cta";
import { contactLabel } from "@/lib/site";
import { V3Nav, navSections } from "@/components/variations/v3";
// The same design system the variation runs on. Scoped under `.v3`, so this
// route needs no tokens of its own and can never drift from /v3.
import "@/components/variations/v3/tokens.css";

/**
 * Variation 3 - the flagship case study in full.
 *
 * The one sanctioned secondary action on this variation (COPY.md, "Canonical
 * primary CTA") lands here. Copy is COPY.md section 4 for the case and section
 * 9 for the closing block, verbatim; the picture captions restate the rows in
 * docs/goal/ASSET-INVENTORY.md. The client is "a bespoke jewellery house in
 * Dubai" everywhere, per brief 8, and no image or caption names a brand.
 *
 * It reads as the same film as the section it came from, seen closer: the title
 * sits on black rather than over a picture, the one full-bleed frame under it
 * is the macro render, and the studio's own screens run as a contact sheet.
 * The floating bar is the variation's, with `base="/v3"`, so every anchor in it
 * leaves this page and lands on the matching section.
 */

export const metadata: Metadata = {
  title: "A name-pendant studio, live in sixteen days - Devonel case study",
  description:
    "How Devonel built a name-pendant design studio for a bespoke jewellery house in Dubai. Spec on 11 Aug 2026, live on the morning of 27 Aug 2026.",
};

/** COPY.md section 4, "What we built.", one sentence per step, in order. */
const FLOW = [
  "Type a name in Arabic or English and take a spelling suggestion.",
  "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
  "Watch a live preview update as you choose, then approve the spelling.",
  "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame.",
  "Download full screen, see a price estimate and request a quote.",
  "The operator issues the quote and the customer accepts it in the same screen.",
] as const;

/**
 * The screens, in the product's own order. `alt` is that file's row in
 * docs/goal/ASSET-INVENTORY.md; the caption is what the row says the shot
 * proves. Every one is cropped below the client's own navigation bar, which is
 * why none of them shows a brand.
 */
const SHOTS = [
  {
    src: "/media/jewelo/ui-name-and-language@2x.webp",
    width: 1440,
    height: 822,
    modifier: "",
    alt: "The name step of a jewellery design tool: a name field, a language toggle, an approved script-spelling field, and a live pendant preview",
    caption: "The name step, with the language toggle and the approved Arabic spelling.",
  },
  {
    src: "/media/jewelo/ui-style-picker@2x.webp",
    width: 1440,
    height: 822,
    modifier: "",
    alt: "The style step of a jewellery design tool showing six lettering styles as selectable cards",
    caption: "Six lettering styles, which is the scope the client locked after launch.",
  },
  {
    src: "/media/jewelo/ui-stones-and-setting@2x.webp",
    width: 1440,
    height: 822,
    modifier: "",
    alt: "The stone step of a jewellery design tool: setting density and stone type beside a live pendant preview",
    caption: "Setting density and stone type, beside the live preview.",
  },
  {
    src: "/media/jewelo/ui-review-spec@2x.webp",
    width: 1440,
    height: 822,
    modifier: "",
    alt: "A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox",
    caption: "The review screen, and the spelling the customer confirms before production.",
  },
  {
    src: "/media/jewelo/ui-rtl-mirror@2x.webp",
    width: 1440,
    height: 822,
    modifier: "",
    alt: "A design tool mirrored right to left, with the live preview on the right and the step rail reversed",
    caption: "The studio mirrored right to left, not a translated left to right layout.",
  },
  {
    src: "/media/jewelo/ui-generation-queue@2x.webp",
    width: 920,
    height: 460,
    modifier: "v3-study__shot--queue",
    alt: "Four presentation views queued in parallel, labelled Studio, On model, Close up and Dark mood, each showing a queued state",
    caption: "Four presentation views running at once, each showing an honest queued state.",
  },
  {
    src: "/media/jewelo/ui-operator-console@2x.webp",
    width: 1440,
    height: 322,
    modifier: "v3-study__shot--wide v3-study__shot--console",
    alt: "An operator work queue header showing counts for quote requests, in progress and ready",
    caption: "The operator side: quote requests, in progress, ready.",
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

/** Every date the sources carry for this build, and the span they add up to. */
const TIMELINE = [
  { when: "11 Aug 2026", what: "Spec received." },
  { when: "27 Aug 2026", what: "Live on the morning of the client’s exhibition stall." },
  { when: "Sixteen days", what: "Spec to live." },
] as const;

export default function Page() {
  return (
    <div className="v3">
      <V3Nav sections={navSections()} base="/v3" />

      <main className="v3-study">
        <div className="v3-shell">
          <header className="v3-study__head v3-enter">
            <Link className="v3-study__crumb" href="/v3#work">
              Proof of work
            </Link>
            <h1 className="v3-study__title">
              A name-pendant studio, live for an exhibition stall in sixteen days.
            </h1>
            <p className="v3-study__tags">
              Jewellery. Dubai. Product studio. Shipped 27 Aug 2026.
            </p>
            <div className="v3-study__prose">
              <p>A bespoke jewellery house sells pendants cut to a customer&rsquo;s name.</p>
              <p>
                Before ordering, the customer could not see their own name as a finished piece.
              </p>
              <p>A customisation field on a store page is a text box, not a design studio.</p>
            </div>
          </header>
        </div>

        <figure>
          <div className="v3-study__plate">
            <Image
              src="/media/jewelo/pendant-close-silver@2x.webp"
              alt="Close detail of a silver cut-out name pendant showing the polished edges and the chain links"
              width={1122}
              height={1402}
              sizes="100vw"
              priority
            />
          </div>
          <figcaption className="v3-shell v3-caption v3-study__figcap">
            The close-up, one of the four renders the studio returns for every design.
          </figcaption>
        </figure>

        <div className="v3-shell">
          <section className="v3-study__block" aria-labelledby="v3-study-built">
            <h2 className="v3-study__h" id="v3-study-built">
              What we built
            </h2>
            <ol className="v3-study__steps">
              {FLOW.map((step, index) => (
                <li className="v3-study__step" key={step}>
                  <span className="v3-study__step-n">{index + 1}</span>
                  <p className="v3-study__step-t">{step}</p>
                </li>
              ))}
            </ol>

            <ul className="v3-study__gallery">
              {SHOTS.map((shot) => (
                <li className={`v3-study__shot ${shot.modifier}`.trim()} key={shot.src}>
                  <div className="v3-study__shot-media">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      sizes={
                        shot.modifier.includes("--wide")
                          ? "(min-width: 82.5rem) 76rem, 92vw"
                          : "(min-width: 82.5rem) 37rem, (min-width: 56rem) 45vw, 92vw"
                      }
                      priority
                    />
                  </div>
                  <p className="v3-caption">{shot.caption}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="v3-study__block" aria-labelledby="v3-study-holds">
            <h2 className="v3-study__h" id="v3-study-holds">
              How it holds up
            </h2>
            <div className="v3-study__prose">
              <p>
                Four stills run at once and each releases its on-neck version as soon as that one is
                ready.
              </p>
              <p>
                Under model provider limits the queue is shown honestly instead of hidden behind a
                spinner.
              </p>
              <p>A retry fallback and a time estimate went in on launch morning.</p>
            </div>
          </section>

          <section className="v3-study__block" aria-labelledby="v3-study-result">
            <h2 className="v3-study__h" id="v3-study-result">
              Result
            </h2>
            <dl className="v3-study__timeline">
              {TIMELINE.map((entry) => (
                <div className="v3-study__t-row" key={entry.when}>
                  <dt className="v3-study__t-date">{entry.when}</dt>
                  <dd className="v3-study__t-text">{entry.what}</dd>
                </div>
              ))}
            </dl>
            <blockquote className="v3-study__quote">
              <p>&ldquo;the layout is very good and simple&rdquo;</p>
              <footer>
                The owner&rsquo;s note on the first version. A bespoke jewellery house in Dubai.
              </footer>
            </blockquote>
            <div className="v3-study__prose">
              <p>
                The one complaint was generation time, which is set by the model providers, and we
                said so.
              </p>
            </div>
          </section>

          <section className="v3-study__block" aria-labelledby="v3-study-stack">
            <h2 className="v3-study__h" id="v3-study-stack">
              Stack
            </h2>
            <ul className="v3-study__stack">
              {STACK.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="v3-study__block" aria-labelledby="v3-study-next">
            <h2 className="v3-study__h" id="v3-study-next">
              What came next
            </h2>
            <div className="v3-study__prose">
              <p>Scope locked to six design styles and three layouts.</p>
              <p>
                Pendant sizing tightened in the renders, with pricing verification and usage control
                moved into the next scope.
              </p>
            </div>
          </section>

          <section className="v3-study__cta" aria-labelledby="v3-study-cta">
            <h2 className="v3-study__h" id="v3-study-cta">
              Send the brief. We send back a scope.
            </h2>
            <div className="v3-study__prose">
              <p>
                Paid discovery is small and fixed, and it ends with a written scope, a date and a
                price.
              </p>
              <p>If you stop there, the plan you paid for is still yours.</p>
            </div>
            <div className="v3-study__cta-actions">
              <ContactCTA className="v3-pill v3-glow">{contactLabel()}</ContactCTA>
              <p className="v3-study__cta-support">Paid discovery, fixed scope, no forms.</p>
            </div>
            <p className="v3-study__channel">
              Email{" "}
              <a href="mailto:sanchay@devonel.com?subject=Brief%20for%20Devonel">
                sanchay@devonel.com
              </a>
              . No forms.
            </p>
          </section>

          <div className="v3-study__foot">
            <Link className="v3-study__back" href="/v3#work">
              Back to the work
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
