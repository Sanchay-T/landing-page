import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

/**
 * v2 case studies: three log blocks.
 *
 * The direction has no imagery, so the case cannot be shown; it is told the way
 * a project is actually told between builders, as `devonel log --project <name>`
 * output. One command per case, a header line with the outcome title, then
 * dated entries in the order they happened.
 *
 * Only dates that `docs/goal/COPY.md` section 4 carries appear in the date
 * column: 11 aug 2026 and 27 aug 2026 on the pendant studio, 25 aug 2026 on the
 * watch boutique discovery. Entries with no date in the source print no date
 * rather than a plausible one, which is the whole point of a log on this page.
 *
 * Copy is COPY.md section 4 on its v2 tone note (numerals, lowercase, terse;
 * each case a log block with a timestamped header; the stack a plain word list,
 * no logos). The two in-progress status lines are quoted from it exactly.
 */

/** Stagger position in the printed sequence, read by the `v2-print` primitive. */
function printStep(i: number): CSSProperties {
  return { "--v2-print-i": i } as CSSProperties;
}

/** One `~/devonel $ ...` command line. Wraps with a hanging indent under it. */
function Command({ children }: { children: ReactNode }) {
  return (
    <p className="v2-log-cmd">
      <span className="v2-prompt">~/devonel $</span> {children}
    </p>
  );
}

/**
 * One unbreakable token: a project slug or a stack name.
 *
 * A hyphen is a line-break opportunity, so on a phone `pendant-studio` set as
 * plain text broke into `pendant-` / `studio` and a shell command read as two.
 * `.v2-nb` is `white-space: nowrap`, so the break moves in front of the whole
 * token instead, where the hanging indent already puts it under the command.
 * Every one of these is short enough to fit a 360px line on its own.
 */
function Nb({ children }: { children: ReactNode }) {
  return <span className="v2-nb">{children}</span>;
}

/**
 * The pendant studio stack, COPY.md section 4, in its order. Each name prints
 * with its own comma inside the unbreakable span, so a wrapped line can never
 * open on a stray comma.
 */
const pendantStack: readonly string[] = [
  "next.js",
  "react",
  "strict typescript",
  "supabase",
  "trigger.dev",
  "gpt-image-2",
  "fal.ai seedance",
  "sentry",
  "posthog",
  "digitalocean",
];

/**
 * One log entry: a head line, an optional date pushed to the right of the
 * measure, and the body. The `*` bullet is a CSS marker in the hanging column,
 * so a wrapped body line never runs under it.
 */
function Entry({ head, when, children }: { head: string; when?: string; children: ReactNode }) {
  return (
    <li className="v2-log-e">
      <p className="v2-log-head">
        <span>{head}</span>
        {when ? <span className="v2-log-when">{when}</span> : null}
      </p>
      {children}
    </li>
  );
}

export function Work() {
  return (
    <section id="work" className="v2-section" aria-labelledby="v2-work-h">
      <div className="v2-rule" data-label="work" aria-hidden="true" />

      <div className="v2-measure">
        <h2 id="v2-work-h" className="v2-work-h v2-print" style={printStep(0)}>
          one shipped, two in build, nothing invented
        </h2>

        {/* ------------------------------------------------ pendant studio */}
        <article className="v2-log v2-print" style={printStep(1)}>
          <Command>
            devonel log --project <Nb>pendant-studio</Nb>
          </Command>

          <h3 className="v2-log-title">
            a name-pendant studio, live for an exhibition stall in 16 days
          </h3>
          <p className="v2-log-tags">jewellery. dubai. product studio. shipped 27 aug 2026.</p>

          <ol className="v2-log-entries">
            <Entry head="spec received" when="11 aug 2026">
              <p className="v2-log-p">
                a bespoke jewellery house in dubai sells pendants cut to a customer&apos;s name.
                before ordering, the customer could not see their own name as a finished piece. a
                customisation field on a store page is a text box, not a design studio.
              </p>
            </Entry>

            <Entry head="build">
              <ul className="v2-log-items" role="list">
                <li>type a name in arabic or english, take a spelling suggestion</li>
                <li>choose one name or two, then the style, the metal, the stones, the size and the chain</li>
                <li>watch a live preview update as you choose, then approve the spelling</li>
                <li>
                  four renders back: a studio shot in about 2 minutes, then the piece on the neck, a
                  close-up and a dark editorial frame
                </li>
                <li>download full screen, see a price estimate and request a quote</li>
                <li>the operator issues the quote and the customer accepts it in the same screen</li>
              </ul>
              <p className="v2-log-deps">
                <span className="v2-log-key">deps:</span>{" "}
                {pendantStack.map((name, i) => (
                  <Fragment key={name}>
                    <Nb>{i < pendantStack.length - 1 ? `${name},` : name}</Nb>{" "}
                  </Fragment>
                ))}
              </p>
            </Entry>

            <Entry head="holds up">
              <p className="v2-log-p">
                four stills run at once and each releases its on-neck version as soon as that one is
                ready. under model provider limits the queue is shown honestly instead of hidden
                behind a spinner. a retry fallback and a time estimate went in on launch morning.
              </p>
            </Entry>

            <Entry head="live" when="27 aug 2026">
              <p className="v2-log-p">the morning of the client&apos;s exhibition stall.</p>
              <blockquote className="v2-log-quote">
                <p>{`"the layout is very good and simple"`}</p>
                <p>- the owner, a bespoke jewellery house in dubai</p>
              </blockquote>
              <p className="v2-log-p">
                the one complaint was generation time, which is set by the model providers, and we
                said so.
              </p>
            </Entry>

            <Entry head="next">
              <p className="v2-log-p">
                scope locked to six design styles and three layouts. pendant sizing tightened in the
                renders, with pricing verification and usage control moved into the next scope.
              </p>
            </Entry>
          </ol>

          <p className="v2-log-out">
            <span className="v2-ok">[ok]</span> 16 days, spec to live.
          </p>

          <Command>
            open{" "}
            <Link className="v2-log-open v2-inv" href="/v2/work/jewelo">
              /v2/work/jewelo
            </Link>
          </Command>
          <p className="v2-note">read the full build</p>
        </article>

        {/* --------------------------------------------------- store audit */}
        <article className="v2-log v2-print" style={printStep(2)}>
          <Command>
            devonel log --project <Nb>store-audit</Nb>
          </Command>

          <h3 className="v2-log-title">
            an audit that found the launch blockers before submission
          </h3>
          <p className="v2-log-tags">mobile app. audit delivered.</p>

          <ol className="v2-log-entries">
            <Entry head="read">
              <p className="v2-log-p">
                a client had built a mobile app and wanted it ready for the stores, not rebuilt. we
                read the whole thing: 5 tabs, more than 25 screens.
              </p>
            </Entry>

            <Entry head="blockers">
              <ul className="v2-log-items" role="list">
                <li>ad units still on test ids</li>
                <li>store billing not wired</li>
                <li>a notification cap that needs a rolling scheduler</li>
                <li>a privacy policy that contradicted the ads</li>
                <li>in-app account deletion missing</li>
              </ul>
            </Entry>
          </ol>

          <p className="v2-log-status">status: audit delivered, build not started.</p>
        </article>

        {/* --------------------------------------------------- watch leads */}
        <article className="v2-log v2-print" style={printStep(3)}>
          <Command>
            devonel log --project <Nb>watch-leads</Nb>
          </Command>

          <h3 className="v2-log-title">
            leads that answer back, for a luxury watch boutique in dubai
          </h3>
          <p className="v2-log-tags">retail. whatsapp. in progress.</p>

          <ol className="v2-log-entries">
            <Entry head="discovery" when="25 aug 2026">
              <p className="v2-log-p">
                leads were arriving on whatsapp and going cold in the boutique&apos;s current tool.
                we ran discovery on the same channel and timed how long competitors took to answer
                the same question; most took hours and some never replied.
              </p>
            </Entry>

            <Entry head="scope">
              <p className="v2-log-p">a lead system that answers, qualifies and hands over.</p>
            </Entry>
          </ol>

          <p className="v2-log-status">status: in progress, discovery started 25 aug 2026.</p>
        </article>
      </div>
    </section>
  );
}
