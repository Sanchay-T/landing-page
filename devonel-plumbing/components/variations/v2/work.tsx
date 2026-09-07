import Image from "next/image";

/**
 * v2 "Shader Light" - section 4, case studies.
 *
 * Direction 2 asks for "two columns, flagship left as a long read with one
 * 400px still, showcases right as two short entries", and its component
 * vocabulary is "plinths, not cards: white blocks with no border and no
 * shadow". So the section is a 7/5 split of three plinths: one wide one
 * holding the shipped case, two smaller ones holding the work that is not
 * shipped. Nothing here has a border, a radius, a shadow or an icon; the only
 * division inside a plinth is a 1px rule.
 *
 * Copy is verbatim from `docs/goal/COPY.md` section 4. The heading is that
 * section's label, the line under it is its headline, and every sentence in
 * the flagship and the two showcases is the document's own, including the two
 * status lines, which are the honest part of this page and are printed exactly
 * as written. The owner's quote from the same section is deliberately not
 * repeated here: the proof strip above already carries it at display size, and
 * printing it twice on one page would weaken it in both places. It is on
 * `/v2/work/jewelo`, under Feedback, with the sentence that follows it.
 *
 * Imagery rule, from `docs/goal/ASSET-INVENTORY.md`: one still, in the
 * flagship entry only, at most 480px wide, inside the plinth with text above
 * and below it and never behind it. The two showcases carry no image, because
 * neither is shipped and a picture would claim otherwise. The client is never
 * named; the constant is "a bespoke jewellery house in Dubai".
 *
 * The still is `pendant-studio-silver`, which the inventory nominates for the
 * light directions, served from its `@2x` master so the optimiser can cut both
 * densities from one file.
 */

const FLAGSHIP_TAGS = ["Jewellery", "Dubai", "Product studio", "Shipped 27 Aug 2026"];

const FLAGSHIP_BUILD = [
  "Type a name in Arabic or English and take a spelling suggestion.",
  "Choose one name or two, then the style, the metal, the stones, the size and the chain.",
  "Watch a live preview update as you choose, then approve the spelling.",
  "The studio returns four renders: a studio shot in about two minutes, then the piece on the neck, a close-up and a dark editorial frame.",
  "Download full screen, see a price estimate and request a quote.",
  "The operator issues the quote and the customer accepts it in the same screen.",
];

const STACK =
  "Next.js, React, strict TypeScript, Supabase, Trigger.dev, gpt-image-2, fal.ai Seedance, Sentry, PostHog, DigitalOcean.";

const SHOWCASES = [
  {
    title: "An audit that found the launch blockers before submission.",
    tags: ["Mobile app", "Audit delivered"],
    body: [
      "A client had built a mobile app and wanted it ready for the stores, not rebuilt.",
      "We read the whole thing: five tabs, more than 25 screens.",
      "The audit listed what would stop a launch: ad units still on test IDs, store billing not wired, a notification cap that needs a rolling scheduler, a privacy policy that contradicted the ads, and in-app account deletion missing.",
    ],
    status: "Status: audit delivered, build not started.",
  },
  {
    title: "Leads that answer back, for a luxury watch boutique in Dubai.",
    tags: ["Retail", "WhatsApp", "In progress"],
    body: [
      "Leads were arriving on WhatsApp and going cold in the boutique's current tool.",
      "We ran discovery on the same channel and timed how long competitors took to answer the same question; most took hours and some never replied.",
      "The scope is a lead system that answers, qualifies and hands over.",
    ],
    status: "Status: in progress, discovery started 25 Aug 2026.",
  },
];

export function Work() {
  return (
    <section id="work" className="v2-work" aria-labelledby="work-title">
      <div className="v2-work__head">
        <h2 id="work-title" className="v2-work__title">
          Case studies
        </h2>
        <p className="v2-work__sub">One shipped, two in build, nothing invented.</p>
      </div>

      <div className="v2-work__body">
        <article className="v2-plinth v2-work__flagship">
          <h3 className="v2-case__title">
            A name-pendant studio, live for an exhibition stall in sixteen days.
          </h3>

          <ul className="v2-case__tags">
            {FLAGSHIP_TAGS.map((tag) => (
              <li key={tag} className="v2-chip">
                {tag}
              </li>
            ))}
          </ul>

          <h4 className="v2-case__h">Problem</h4>
          <p className="v2-case__p">
            A bespoke jewellery house sells pendants cut to a customer&rsquo;s name. Before ordering,
            the customer could not see their own name as a finished piece. A customisation field on
            a store page is a text box, not a design studio.
          </p>

          <figure className="v2-plate">
            <Image
              className="v2-plate__img"
              src="/media/jewelo/pendant-studio-silver@2x.webp"
              alt="A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot"
              width={1122}
              height={1402}
              sizes="400px"
              priority
            />
            <figcaption className="v2-plate__caption">
              The studio shot: the first of the four renders the product returns, in about two
              minutes.
            </figcaption>
          </figure>

          <h4 className="v2-case__h">What we built</h4>
          <ul className="v2-case__list">
            {FLAGSHIP_BUILD.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <h4 className="v2-case__h">Stack</h4>
          <p className="v2-case__p">{STACK}</p>

          <h4 className="v2-case__h">Result</h4>
          <p className="v2-case__p">
            Spec on 11 Aug 2026. Live on the morning of 27 Aug 2026, in time for the client&rsquo;s
            exhibition stall.
          </p>

          <a className="v2-read" href="/v2/work/jewelo">
            Read the full build
          </a>
        </article>

        <div className="v2-work__showcases">
          {SHOWCASES.map((showcase) => (
            <article key={showcase.title} className="v2-plinth v2-showcase">
              <h3 className="v2-showcase__title">{showcase.title}</h3>

              <ul className="v2-case__tags">
                {showcase.tags.map((tag) => (
                  <li key={tag} className="v2-chip">
                    {tag}
                  </li>
                ))}
              </ul>

              {showcase.body.map((line) => (
                <p key={line} className="v2-showcase__p">
                  {line}
                </p>
              ))}

              <p className="v2-showcase__status">
                <span className="v2-chip v2-chip--status">{showcase.status}</span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
