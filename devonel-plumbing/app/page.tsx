import { Schematic } from "./schematic";
import { Animations } from "./animations";

export default function Page() {
  return (
    <>
      <div className="topstrip">
        <div className="topstrip-row">
          <div>
            <span className="dot"></span>OPS BOARD · 04 ENGAGEMENTS LIVE · 2 INTAKE SLOTS Q3
          </div>
          <div>devonel · process plumbing &amp; automation, since 2024</div>
          <div>SF + remote · hello@devonel.studio</div>
        </div>
      </div>

      <nav>
        <div className="brand">
          <span className="brand-mark"></span>
          <span>Devonel</span>
        </div>
        <div className="nav-links">
          <a>Practice</a>
          <a>Method</a>
          <a>Ledger</a>
          <a>Memos</a>
          <a>Pod</a>
        </div>
        <div className="nav-cta">
          <a className="btn">Get a routing diagram</a>
          <a className="btn btn-fill">Book intake →</a>
        </div>
      </nav>

      {/* =================== HERO =================== */}
      <section className="hero">
        <div className="hero-eyebrow">
          <span className="swatch"></span>
          <span>Vol. II · No. 14 · Process plumbing &amp; automation</span>
          <span className="psi" style={{ marginLeft: "auto" }}>
            Pressure: <b data-tick="18" data-tick-min="17" data-tick-max="19">18</b> psi{" "}
            <span className="psi-bar"></span> Flow: nominal
          </span>
        </div>

        <div className="hero-grid">
          <div>
            <h1>
              Your business <em>leaks</em> through the
              <br />
              seams between <span className="water">tools</span>.
            </h1>
            <p className="hero-sub">
              <strong>Devonel is a process re-engineering studio.</strong> We map the work, find where it&apos;s
              spilling, and weld it back together — with automations that actually hold pressure under real volume.
            </p>
            <div className="hero-cta">
              <a className="btn btn-fill">Request a 90-min walkthrough →</a>
              <a className="btn">See the ledger</a>
            </div>
          </div>
          <aside className="hero-side">
            <div className="hero-spec">Spec sheet · current cycle</div>
            <h4>What an engagement looks like</h4>
            <div className="spec-row"><span>Cycle</span><b>4 weeks · audit → build</b></div>
            <div className="spec-row"><span>Care</span><b>+90 days run-in</b></div>
            <div className="spec-row"><span>Pod</span><b>2 named operators</b></div>
            <div className="spec-row"><span>Stack</span><b>n8n · Zapier · custom</b></div>
            <div className="spec-row"><span>Flat fee</span><b>$48k–$120k</b></div>
            <div className="spec-row"><span>Avg. payback</span><b>11 weeks</b></div>
          </aside>
        </div>

        <div className="schematic">
          <div className="schematic-head">
            <span>FIG. 01 · Routing diagram — typical mid-market ops stack, before / after Devonel</span>
            <span>scale 1:∞ · drawn 04/26</span>
          </div>
          <Schematic />
        </div>
      </section>

      {/* =================== WHAT WE DO =================== */}
      <section className="sec">
        <div className="sec-head">
          <span className="sec-num">§ 01 · The practice</span>
          <h2>
            Re-engineering, then <em>plumbing</em>. Not the other way round.
          </h2>
          <p className="lede">
            Most &quot;automation&quot; agencies sell tools. We sell finished work. The diagram comes first. The build
            is downstream.
          </p>
        </div>

        <div className="diagram">
          <div className="diagram-col">
            <div className="dc-num"><b>01</b> · Audit</div>
            <svg className="dc-icon" viewBox="0 0 64 64" fill="none" stroke="#0e1410" strokeWidth="1.6">
              <rect x="6" y="10" width="44" height="50" />
              <line x1="14" y1="22" x2="42" y2="22" />
              <line x1="14" y1="30" x2="42" y2="30" />
              <line x1="14" y1="38" x2="34" y2="38" />
              <line x1="14" y1="46" x2="38" y2="46" />
              <circle cx="48" cy="46" r="9" stroke="#c8451c" />
              <line x1="55" y1="53" x2="62" y2="60" stroke="#c8451c" strokeWidth="2" />
            </svg>
            <h3>We map the leaks before we touch a tool.</h3>
            <p>
              Two weeks shadowing your team. We come back with a routing diagram, a list of leaks, and an honest call
              on which ones are worth welding shut.
            </p>
            <div className="dc-meta">→ Wk 1–2 · 1 senior + 1 analyst</div>
          </div>
          <div className="diagram-col">
            <div className="dc-num"><b>02</b> · Build</div>
            <svg className="dc-icon" viewBox="0 0 64 64" fill="none" stroke="#0e1410" strokeWidth="1.6">
              <rect x="6" y="20" width="14" height="20" />
              <rect x="44" y="20" width="14" height="20" />
              <line x1="20" y1="30" x2="44" y2="30" />
              <circle cx="32" cy="30" r="7" fill="url(#hatch)" />
              <line x1="32" y1="20" x2="32" y2="40" />
              <line x1="10" y1="50" x2="54" y2="50" stroke="#c8451c" />
              <line x1="14" y1="46" x2="14" y2="54" stroke="#c8451c" />
              <line x1="50" y1="46" x2="50" y2="54" stroke="#c8451c" />
            </svg>
            <h3>We weld it shut with the simplest pipe that holds.</h3>
            <p>
              n8n, Zapier, custom code where it matters. We don&apos;t fall in love with stacks. The job is flow under
              volume — not screenshots of &quot;AI.&quot;
            </p>
            <div className="dc-meta">→ Wk 3–4 · 2 builders pair-shipping</div>
          </div>
          <div className="diagram-col">
            <div className="dc-num"><b>03</b> · Pressure-test</div>
            <svg className="dc-icon" viewBox="0 0 64 64" fill="none" stroke="#0e1410" strokeWidth="1.6">
              <circle cx="32" cy="32" r="20" />
              <line x1="32" y1="32" x2="46" y2="22" stroke="#c8451c" strokeWidth="2" />
              <circle cx="32" cy="32" r="2" fill="#0e1410" />
              <line x1="32" y1="12" x2="32" y2="16" />
              <line x1="52" y1="32" x2="56" y2="32" />
              <line x1="12" y1="32" x2="8" y2="32" />
              <line x1="32" y1="48" x2="32" y2="52" />
            </svg>
            <h3>Then we run it under real load with a hand on the valve.</h3>
            <p>
              Two weeks shadowed in production. Every hand-off watched, every edge case logged, every owner trained.
              We do not &quot;deliver and run.&quot;
            </p>
            <div className="dc-meta">→ Wk 5–6 · pod on-call</div>
          </div>
          <div className="diagram-col">
            <div className="dc-num"><b>04</b> · Tend</div>
            <svg className="dc-icon" viewBox="0 0 64 64" fill="none" stroke="#0e1410" strokeWidth="1.6">
              <path d="M10 50 Q22 30 32 40 T54 28" />
              <line x1="10" y1="56" x2="54" y2="56" />
              <circle cx="22" cy="38" r="2.5" fill="#c8451c" stroke="none" />
              <circle cx="38" cy="36" r="2.5" fill="#c8451c" stroke="none" />
              <circle cx="50" cy="30" r="2.5" fill="#c8451c" stroke="none" />
              <line x1="10" y1="14" x2="54" y2="14" />
              <text x="32" y="22" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="6" fill="#0e1410" letterSpacing="1">
                UPTIME
              </text>
            </svg>
            <h3>90 days of care, included. Then a clean handover.</h3>
            <p>
              Quiet alerting, monthly tuning, a runbook your team can edit. We keep the keys for ninety days. Then we
              hand them over and stay on retainer if you want.
            </p>
            <div className="dc-meta">→ Day 30–120 · async pod</div>
          </div>
        </div>
      </section>

      {/* =================== HOW WE WORK / PROCESS =================== */}
      <section className="sec">
        <div className="sec-head">
          <span className="sec-num">§ 02 · The cycle</span>
          <h2>
            Six weeks. Four valves. <em>One named pod.</em>
          </h2>
          <p className="lede">
            Same shape every time. We keep it boring on purpose — boring scales. The variation is in the diagram, not
            the schedule.
          </p>
        </div>

        <div className="process">
          <div className="proc-col">
            <span className="pn">
              Wk 01–02 · <b style={{ color: "var(--valve)" }}>VALVE I</b>
            </span>
            <h3>
              Walk the <em>floor</em>.
            </h3>
            <p>
              Sit with the people doing the work. Watch the spreadsheets. Time the hand-offs. Map the back-channels
              nobody admits to. By Friday of week two we have a routing diagram and a leak ledger.
            </p>
            <div className="week">Out: routing diagram · leak ledger · scope</div>
            <svg className="gauge" viewBox="0 0 200 14" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="7" x2="200" y2="7" stroke="#0e1410" strokeWidth="1" />
              <line x1="0" y1="2" x2="0" y2="12" stroke="#0e1410" strokeWidth="1.5" />
              <line className="fill" x1="0" y1="7" x2="50" y2="7" stroke="#c8451c" strokeWidth="3" />
              <line x1="50" y1="2" x2="50" y2="12" stroke="#c8451c" strokeWidth="2" />
              <line x1="200" y1="2" x2="200" y2="12" stroke="#0e1410" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="proc-col">
            <span className="pn">
              Wk 03–04 · <b style={{ color: "var(--valve)" }}>VALVE II</b>
            </span>
            <h3>
              Build the <em>pipes</em>.
            </h3>
            <p>
              Two builders pair-ship. We default to n8n; we drop into TypeScript when n8n would be a hack; we&apos;ll
              happily delete an automation that didn&apos;t earn its keep. Every workflow is owned by a name, not a
              tool.
            </p>
            <div className="week">Out: workflows · runbooks · owners assigned</div>
            <svg className="gauge" viewBox="0 0 200 14">
              <line x1="0" y1="7" x2="200" y2="7" stroke="#0e1410" />
              <line x1="0" y1="2" x2="0" y2="12" stroke="#0e1410" strokeWidth="1.5" />
              <line className="fill" x1="0" y1="7" x2="105" y2="7" stroke="#c8451c" strokeWidth="3" />
              <line x1="105" y1="2" x2="105" y2="12" stroke="#c8451c" strokeWidth="2" />
              <line x1="200" y1="2" x2="200" y2="12" stroke="#0e1410" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="proc-col">
            <span className="pn">
              Wk 05–06 · <b style={{ color: "var(--valve)" }}>VALVE III</b>
            </span>
            <h3>
              Pressure-<em>test</em>.
            </h3>
            <p>
              Live in your real environment. Devonel takes the pager. Every escalation gets logged, every false alarm
              gets tuned out. By the end of week six the pod has shadowed every regular hand-off twice.
            </p>
            <div className="week">Out: production cut-over · alerting · trained owners</div>
            <svg className="gauge" viewBox="0 0 200 14">
              <line x1="0" y1="7" x2="200" y2="7" stroke="#0e1410" />
              <line x1="0" y1="2" x2="0" y2="12" stroke="#0e1410" strokeWidth="1.5" />
              <line className="fill" x1="0" y1="7" x2="160" y2="7" stroke="#c8451c" strokeWidth="3" />
              <line x1="160" y1="2" x2="160" y2="12" stroke="#c8451c" strokeWidth="2" />
              <line x1="200" y1="2" x2="200" y2="12" stroke="#0e1410" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="proc-col">
            <span className="pn">
              Day 30–120 · <b style={{ color: "var(--valve)" }}>VALVE IV</b>
            </span>
            <h3>
              Hand <em>over</em>.
            </h3>
            <p>
              90 days of quiet on-call, monthly tuning, a runbook your team owns. Then a clean handover — or a retainer
              if you want us to keep the keys. We never lock up the source. It&apos;s yours.
            </p>
            <div className="week">Out: source · runbook · monthly memo</div>
            <svg className="gauge" viewBox="0 0 200 14">
              <line x1="0" y1="7" x2="200" y2="7" stroke="#0e1410" />
              <line x1="0" y1="2" x2="0" y2="12" stroke="#0e1410" strokeWidth="1.5" />
              <line className="fill" x1="0" y1="7" x2="200" y2="7" stroke="#c8451c" strokeWidth="3" />
              <line x1="200" y1="2" x2="200" y2="12" stroke="#c8451c" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      {/* =================== PROOF / LEDGER =================== */}
      <section className="sec">
        <div className="sec-head">
          <span className="sec-num">§ 03 · The ledger</span>
          <h2>
            Twelve months. <em>Receipts.</em>
          </h2>
          <p className="lede">
            A real public ledger. Hours saved, dollars recovered, and what we actually shipped — with the leak it
            patched.
          </p>
        </div>

        <div className="proof-grid">
          <div className="ledger">
            <h3>
              <span>Engagement</span>
              <span>hours/wk → $/yr</span>
            </h3>
            <LedgerRow date="04/26" desc="HVAC group · dispatch + invoice ledger" detail="replaced 3 sheets, 1 GPT, 1 part-time clerk" hours="38 hr" savings="$214k" />
            <LedgerRow date="02/26" desc="Series-B fintech · KYC re-verification" detail="cut review backlog from 9 days → 14 hours" hours="22 hr" savings="$148k" />
            <LedgerRow date="12/25" desc="Logistics broker · carrier matching" detail="stopped a 6% load-leakage in week 3" hours="31 hr" savings="$182k" />
            <LedgerRow date="10/25" desc="PE-owned home services · PO reconciliation" detail="recovered 11% from miscoded invoices in qtr 1" hours="19 hr" savings="$96k" />
            <LedgerRow date="08/25" desc="Healthcare staffing · credentialing" detail="8-tab process → 1 dashboard, fewer human errors" hours="27 hr" savings="$132k" />
            <LedgerRow date="06/25" desc="DTC apparel · returns triage" detail="2.3-day handle time → 4 hours" hours="14 hr" savings="$74k" />
            <div className="ledger-foot">
              <span>14 builds · 9 industries · 12 mo rolling</span>
              <span>≈ $1.18M / yr returned</span>
            </div>
          </div>
          <aside className="proof-side">
            <div className="proof-side-top">
              <div className="bignum-block">
                <span className="bignum-cap">— ledger total · 12 mo —</span>
                <div className="bignum">
                  $<span className="bignum-num">1.18</span>
                  <em className="bignum-suffix">M</em>
                </div>
                <span className="bignum-cap">recurring · re-engineered out of payroll &amp; rework</span>
              </div>
              <div className="stat-mini">
                <div>
                  <div className="v">
                    14<em>/14</em>
                  </div>
                  <span className="k">drives shipped</span>
                </div>
                <div>
                  <div className="v">
                    162<em>hr</em>
                  </div>
                  <span className="k">hr / wk freed</span>
                </div>
              </div>
              <div className="stat-mini">
                <div>
                  <div className="v">
                    9<em> ind.</em>
                  </div>
                  <span className="k">industries served</span>
                </div>
                <div>
                  <div className="v">
                    11<em>wk</em>
                  </div>
                  <span className="k">avg. payback</span>
                </div>
              </div>
            </div>
            <div className="quote">
              &quot;They came in expecting to install software. They left having deleted three of ours, and the right
              ones.&quot;
              <div className="qsig">— K. Ahn · COO · logistics broker</div>
            </div>
          </aside>
        </div>
      </section>

      {/* =================== PHILOSOPHY =================== */}
      <section className="sec">
        <div className="sec-head">
          <span className="sec-num">§ 04 · The position</span>
          <h2>
            Four things we <em>actually</em> believe.
          </h2>
          <p className="lede">
            We will not pretend to be neutral. The point of a studio is having a position.
          </p>
        </div>

        <div className="philo">
          <div>
            <div className="philo-num">¶</div>
            <h3>
              Most &quot;AI strategy&quot; is a <em>plumber problem</em>, not a model problem.
            </h3>
            <p>
              <strong>The bottleneck is almost never the model.</strong> It&apos;s the spreadsheet someone keeps in a
              private Google folder. The handoff that goes out as a Slack DM. The CRM field nobody made required. Until
              those are routed, no agent will save you.
            </p>
            <p>
              We do the boring part first. We delete more code than we write. We refuse engagements where the job is
              to make a chatbot for a process that shouldn&apos;t exist.
            </p>
            <p>
              The output of an audit is a diagram you can argue about. If we can&apos;t draw your business in one page,
              we have not understood it yet, and we will not start building.
            </p>
          </div>
          <aside className="philo-side">
            <div className="tenet">
              <div className="t">Tenet i</div>
              <h4>
                No SaaS. <em>Just work, finished.</em>
              </h4>
              <p>
                You hire a pod, not a license. The output is your workflow, running, owned by you. We are not building
                a product on the side.
              </p>
            </div>
            <div className="tenet">
              <div className="t">Tenet ii</div>
              <h4>Named operators, every time.</h4>
              <p>
                Two senior people, on the call from week one. No bait-and-switch to a junior. If the founder is not on
                Slack with you, something has gone wrong.
              </p>
            </div>
            <div className="tenet">
              <div className="t">Tenet iii</div>
              <h4>
                We ship the diagram <em>before</em> the build.
              </h4>
              <p>
                Week two: a routing diagram. Week three: a yes / no on the build. We will tell you when the answer is
                &quot;fix the process first, then call us.&quot;
              </p>
            </div>
            <div className="tenet">
              <div className="t">Tenet iv</div>
              <h4>The source is yours. Period.</h4>
              <p>
                Every workflow is in your accounts, your repos, your runbooks. We stay on retainer because you choose
                to, not because you can&apos;t fire us.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* =================== CONTACT =================== */}
      <section className="contact">
        <div className="contact-grid">
          <div>
            <h2>
              Two intake slots,
              <br />
              Q3 <em>&apos;26</em>.
            </h2>
            <p>
              Send us a paragraph about the work that hurts most this quarter — the one that&apos;s still being done in
              spreadsheets at 11pm. We&apos;ll come back inside two business days with either a 90-minute walkthrough
              on the calendar, or a referral to someone better suited.
            </p>
            <div className="contact-actions">
              <a className="btn btn-fill">Book intake call →</a>
              <a className="btn">Read a memo first</a>
            </div>
          </div>
          <aside className="contact-card">
            <h4>
              <span>Direct line</span>
              <span style={{ color: "var(--ink-2)" }}>est. 2024</span>
            </h4>
            <div className="contact-row"><span className="k">Studio</span><span className="v">Devonel · San Francisco + remote</span></div>
            <div className="contact-row"><span className="k">Email</span><span className="v">hello@devonel.studio</span></div>
            <div className="contact-row"><span className="k">Pod</span><span className="v">06 named operators</span></div>
            <div className="contact-row"><span className="k">Open</span><span className="v">2 of 4 slots · Q3 2026</span></div>
            <div className="contact-row"><span className="k">Cycle</span><span className="v">4 wks build + 90 days care</span></div>
            <div className="contact-row"><span className="k">Fee</span><span className="v">flat · $48k–$120k</span></div>
            <div className="contact-row"><span className="k">Office hr</span><span className="v">Tue 14:00 PT, public Q&amp;A</span></div>
          </aside>
        </div>
      </section>

      <footer className="foot">
        <span>© Devonel Studio · MMXXIV–MMXXVI</span>
        <span>Drawn in San Francisco · printed on whatever browser you&apos;ve got open</span>
        <span>v.14 · last revised 04/26</span>
      </footer>

      <Animations />
    </>
  );
}

function LedgerRow({
  date,
  desc,
  detail,
  hours,
  savings,
}: {
  date: string;
  desc: string;
  detail: string;
  hours: string;
  savings: string;
}) {
  return (
    <div className="ledger-row">
      <span className="mono">{date}</span>
      <span className="desc">
        {desc}
        <i>{detail}</i>
      </span>
      <span className="hours">{hours}</span>
      <span className="savings">{savings}</span>
    </div>
  );
}
