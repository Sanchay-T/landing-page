import { TopStrip, Nav, SchematicFigure, LowerSections } from "../_lib/shared";
import { Animations } from "../animations";

export default function OptionA() {
  return (
    <>
      <TopStrip />
      <Nav />

      {/* =================== HERO (compact) =================== */}
      <section className="hero hero--compact">
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

        <SchematicFigure />
      </section>

      <LowerSections />
      <Animations />
    </>
  );
}
