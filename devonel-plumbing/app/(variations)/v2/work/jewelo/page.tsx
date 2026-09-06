import type { Metadata } from "next";
import Link from "next/link";
import { ContactCTA } from "@/components/ds/contact-cta";
import { Nav, sections } from "@/components/variations/v2";
import { site } from "@/lib/site";
import "@/components/variations/v2/tokens.css";

/**
 * Variation 2, flagship case study.
 *
 * The front page tells this case as `devonel log` output; the sub-page is the
 * file that log points at, so it is one `cat work/pendant-studio.md` and the
 * document that comes back. Same system, same four rules: one family, three
 * sizes, no images, accent only on the CTA.
 *
 * The rail is the same `Nav` and the same section registry as `/v2`, given the
 * `/v2` base so every entry navigates back to the section it names instead of
 * to a dead anchor on this page.
 *
 * The client is never named. `docs/goal/01-business-brief.md` section 8 makes
 * the brand confidential, so the only permitted string is the one COPY.md
 * fixes: "a bespoke jewellery house in dubai".
 */

export const metadata: Metadata = {
  title: "work/pendant-studio.md - 2. Terminal - Devonel redesign",
  description:
    "The full build log for a name-pendant studio, live for a bespoke jewellery house in Dubai on the morning of their exhibition stall, 16 days after the spec.",
};

const mailHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
  site.contact.mailSubject
)}`;

export default function Page() {
  return (
    <div className="v2">
      <Nav sections={sections} base="/v2" />

      <div className="v2-shell">
        <main className="v2-main">
          <article className="v2-section" aria-labelledby="v2-doc-h">
            <div className="v2-rule" data-label="work/pendant-studio.md" aria-hidden="true" />

            <div className="v2-measure">
              <p className="v2-log-cmd">
                <span className="v2-prompt">~/devonel $</span> cat work/pendant-studio.md
              </p>

              <h1 id="v2-doc-h" className="v2-doc-h">
                a name-pendant studio, live for an exhibition stall in 16 days
              </h1>
              <p className="v2-doc-tags">jewellery. dubai. product studio. shipped 27 aug 2026.</p>

              <h2 className="v2-doc-h2">problem</h2>
              <p className="v2-doc-p">
                a bespoke jewellery house in dubai sells pendants cut to a customer&apos;s name.
                before ordering, the customer could not see their own name as a finished piece. a
                customisation field on a store page is a text box, not a design studio.
              </p>

              <h2 className="v2-doc-h2">flow</h2>
              <p className="v2-doc-p">what the customer does, in order.</p>
              <ol className="v2-flow" role="list">
                <li>type a name in arabic or english, take a spelling suggestion</li>
                <li>choose one name or two, then the style, the metal, the stones, the size and the chain</li>
                <li>watch a live preview update as you choose, then approve the spelling</li>
                <li>
                  the studio returns four renders: a studio shot in about 2 minutes, then the piece
                  on the neck, a close-up and a dark editorial frame
                </li>
                <li>download full screen, see a price estimate and request a quote</li>
                <li>the operator issues the quote and the customer accepts it in the same screen</li>
              </ol>

              <h2 className="v2-doc-h2">holds up</h2>
              <ul className="v2-log-items v2-doc-list" role="list">
                <li>
                  four stills run at once and each releases its on-neck version as soon as that one
                  is ready
                </li>
                <li>
                  under model provider limits the queue is shown honestly instead of hidden behind a
                  spinner
                </li>
                <li>a retry fallback and a time estimate went in on launch morning</li>
              </ul>

              <h2 className="v2-doc-h2">feedback</h2>
              <blockquote className="v2-log-quote v2-quote-md v2-doc-quote">
                <p>{`"the layout is very good and simple"`}</p>
                <p>
                  - the owner, a bespoke jewellery house in dubai, on the day the studio went live
                </p>
              </blockquote>
              <p className="v2-doc-p">
                the one complaint was generation time, which is set by the model providers, and we
                said so.
              </p>

              <h2 className="v2-doc-h2">deps</h2>
              <p className="v2-doc-p">
                next.js, react, strict typescript, supabase, trigger.dev, gpt-image-2, fal.ai
                seedance, sentry, posthog, digitalocean
              </p>

              <h2 className="v2-doc-h2">timeline</h2>
              <ol className="v2-log-entries v2-doc-list">
                <li className="v2-log-e">
                  <p className="v2-log-head">
                    <span>spec received</span>
                    <span className="v2-log-when">11 aug 2026</span>
                  </p>
                </li>
                <li className="v2-log-e">
                  <p className="v2-log-head">
                    <span>live</span>
                    <span className="v2-log-when">27 aug 2026</span>
                  </p>
                  <p>the morning of the client&apos;s exhibition stall.</p>
                </li>
                <li className="v2-log-e">
                  <p className="v2-log-head">
                    <span>next</span>
                  </p>
                  <p>
                    scope locked to six design styles and three layouts. pendant sizing tightened in
                    the renders, with pricing verification and usage control moved into the next
                    scope.
                  </p>
                </li>
              </ol>

              <p className="v2-log-out">
                <span className="v2-ok">[ok]</span> 16 days, spec to live.
              </p>
            </div>
          </article>

          <section className="v2-section" aria-labelledby="v2-doc-cta-h">
            <div className="v2-rule" data-label="contact" aria-hidden="true" />

            <div className="v2-measure">
              <h2 id="v2-doc-cta-h" className="v2-doc-h2">
                send the brief. we send back a scope.
              </h2>

              <div className="v2-cta-block">
                <p>
                  <span className="v2-prompt">~/devonel $</span>{" "}
                  <ContactCTA className="v2-cta">press enter to send your brief</ContactCTA>
                  <span className="v2-caret" aria-hidden="true" />
                </p>
                <p className="v2-note">paid discovery, fixed scope, no forms.</p>
                <p className="v2-note">
                  mail{" "}
                  <a className="v2-note-link v2-inv" href={mailHref}>
                    {site.contact.email}
                  </a>
                </p>
              </div>

              <p className="v2-log-cmd v2-doc-back">
                <span className="v2-prompt">~/devonel $</span> open{" "}
                <Link className="v2-log-open v2-inv" href="/v2#work">
                  /v2#work
                </Link>
              </p>
            </div>
          </section>
        </main>

        <div className="v2-rule" data-label="eof" aria-hidden="true" />
      </div>
    </div>
  );
}
