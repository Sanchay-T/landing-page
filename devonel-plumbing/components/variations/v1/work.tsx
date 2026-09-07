import Image from "next/image";
import Link from "next/link";

/**
 * v1 "Studio Dark" case studies.
 *
 * The direction's fourth block: the flagship as one wide panel, the two
 * showcases as narrower panels beside it. Panels, not cards - #111519 fill, a
 * 1px line border, 0 radius, no shadow anywhere - which is the same surface the
 * proof band uses, now cut into blocks instead of run full-bleed.
 *
 * A server component. Nothing here is stateful and nothing here animates on
 * load: the sixteen-tick assembly in the hero is this page's one entrance.
 *
 * The anchor is `case-studies`, not `work`. That is the id `sections.ts` owns
 * and the id the proof band's "See how it was built" link is built from, so the
 * file is named work.tsx and the section answers to the id the rest of the
 * variation already points at.
 *
 * COPY.md section 4, verbatim, citations stripped. Two deliberate omissions,
 * both editorial rather than invented:
 * - COPY.md's own label "Case studies" is not rendered. It would have to sit as
 *   an eyebrow above the heading and a mono or caps eyebrow is a named tell in
 *   this direction; the heading carries the section instead, the same call the
 *   proof band and the services list made.
 * - The owner's quote line inside "Result." is left out here because the proof
 *   band two sections above already prints it verbatim with its attribution.
 *   Everything else in the flagship's Result runs as written, and the two
 *   blocks the section drops - "How it holds up." and "What came next." - are
 *   the reason the "Read the full build" link has a job.
 *
 * Imagery: exactly one still, `pendant-dark-silver`, which the asset inventory
 * assigns to the dark directions because a black-velvet still meets this panel
 * without a seam. It is capped at 420px at every width, framed by a 1px line,
 * never behind text, and carries the inventory's alt text. The showcases carry
 * none, because neither is shipped and an image would claim otherwise.
 *
 * The flagship panel is two columns from 1180: the narrative on the left -
 * problem, what we built, result - and a facts column on the right holding the
 * still and the stack. That split is what keeps the right-hand track from
 * standing empty beside a tall write-up, and the source order is the reading
 * order at every width, so nothing is reordered in CSS.
 */

/** The date type is the one place mono is allowed in this section. The rest of
 *  the direction's mono budget is spent on the hero gauge and the proof
 *  figures; no label, tag or heading here is mono or caps. */
function Datum({ iso, children }: { iso: string; children: string }) {
  return (
    <time className="v1-work__date" dateTime={iso}>
      {children}
    </time>
  );
}

const FLAGSHIP = {
  title: "A name-pendant studio, live for an exhibition stall in sixteen days.",
  tags: ["Jewellery", "Dubai", "Product studio", "Shipped 27 Aug 2026"],
  problem: [
    "A bespoke jewellery house sells pendants cut to a customer's name.",
    "Before ordering, the customer could not see their own name as a finished piece.",
    "A customisation field on a store page is a text box, not a design studio.",
  ],
  built: [
    "Type a name in Arabic or English and take a spelling suggestion.",
    "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
    "Watch a live preview update as you choose, then approve the spelling.",
    "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame.",
    "Download full screen, see a price estimate and request a quote.",
    "The operator issues the quote and the customer accepts it in the same screen.",
  ],
  stack:
    "Next.js, React, strict TypeScript, Supabase, Trigger.dev, gpt-image-2, fal.ai Seedance, Sentry, PostHog, DigitalOcean.",
} as const;

/** Status is the last line of each showcase in COPY.md, kept exactly, because
 *  the honest count in the section heading depends on it being exact. */
const SHOWCASES = [
  {
    title: "An audit that found the launch blockers before submission.",
    tags: ["Mobile app", "Audit delivered"],
    lines: [
      "A client had built a mobile app and wanted it ready for the stores, not rebuilt.",
      "We read the whole thing: five tabs, more than 25 screens.",
      "The audit listed what would stop a launch: ad units still on test IDs, store billing not wired, a notification cap that needs a rolling scheduler, a privacy policy that contradicted the ads, and in-app account deletion missing.",
    ],
    status: <>Status: audit delivered, build not started</>,
  },
  {
    title: "Leads that answer back, for a luxury watch boutique in Dubai.",
    tags: ["Retail", "WhatsApp", "In progress"],
    lines: [
      "Leads were arriving on WhatsApp and going cold in the boutique's current tool.",
      "We ran discovery on the same channel and timed how long competitors took to answer the same question; most took hours and some never replied.",
      "The scope is a lead system that answers, qualifies and hands over.",
    ],
    status: (
      <>
        Status: in progress, discovery started <Datum iso="2026-08-25">25 Aug 2026</Datum>
      </>
    ),
  },
] as const;

function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="v1-work__tags" role="list">
      {tags.map((tag) => (
        <li key={tag} className="v1-work__tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function Work() {
  return (
    <section id="case-studies" className="v1-work" aria-labelledby="work-head">
      <div className="v1-shell">
        <h2 id="work-head" className="v1-work__head">
          One shipped, two in build, nothing invented.
        </h2>

        <div className="v1-work__row">
          <article className="v1-panel v1-work__flag" aria-labelledby="work-flag-title">
            <div className="v1-work__flaghead">
              <h3 id="work-flag-title" className="v1-work__flagtitle">
                {FLAGSHIP.title}
              </h3>
              <Tags tags={FLAGSHIP.tags} />
            </div>

            <div className="v1-work__flagbody">
              <div className="v1-work__doc">
                <h4 className="v1-work__block">Problem.</h4>
                {FLAGSHIP.problem.map((line) => (
                  <p key={line} className="v1-work__line">
                    {line}
                  </p>
                ))}

                <h4 className="v1-work__block">What we built.</h4>
                {FLAGSHIP.built.map((line) => (
                  <p key={line} className="v1-work__line">
                    {line}
                  </p>
                ))}

                <h4 className="v1-work__block">Result.</h4>
                <p className="v1-work__line">
                  Spec on <Datum iso="2026-08-11">11 Aug 2026</Datum>.
                </p>
                <p className="v1-work__line">
                  Live on the morning of <Datum iso="2026-08-27">27 Aug 2026</Datum>
                  {", in time for the client's exhibition stall."}
                </p>
                <p className="v1-work__line">
                  The one complaint was generation time, which is set by the model providers, and we
                  said so.
                </p>
              </div>

              <div className="v1-work__aside">
                <figure className="v1-work__plate">
                  <Image
                    className="v1-work__still"
                    src="/media/jewelo/pendant-dark-silver@2x.webp"
                    alt="A silver name pendant resting on black velvet, lit as a dark editorial still"
                    width={1122}
                    height={1402}
                    sizes="(min-width: 73.75rem) 220px, (min-width: 30rem) 420px, 100vw"
                    priority
                  />
                </figure>

                <h4 className="v1-work__block">Stack.</h4>
                <p className="v1-work__line">{FLAGSHIP.stack}</p>
              </div>

              <p className="v1-work__act">
                <Link className="v1-work__more" href="/v1/work/jewelo">
                  Read the full build
                </Link>
              </p>
            </div>
          </article>

          <div className="v1-work__side">
            {SHOWCASES.map(({ title, tags, lines, status }) => (
              <article key={title} className="v1-panel v1-work__show">
                <h3 className="v1-work__showtitle">{title}</h3>
                <Tags tags={tags} />
                {lines.map((line) => (
                  <p key={line} className="v1-work__line">
                    {line}
                  </p>
                ))}
                <p className="v1-work__status">{status}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
