import { TopStrip, Nav, LowerSections } from "../_lib/shared";
import { VerticalSchematic } from "../_lib/vertical-schematic";
import { Animations } from "../animations";

export default function OptionB() {
  return (
    <>
      <TopStrip />
      <Nav />

      {/* =================== HERO (side-by-side, vertical schematic on right) =================== */}
      <section className="hero hero--split">
        <div className="hero-split-grid">
          <div className="hero-split-text">
            <div className="hero-eyebrow">
              <span className="swatch"></span>
              <span>Vol. II · No. 14 · Process plumbing &amp; automation</span>
              <span className="psi" style={{ marginLeft: "auto" }}>
                Pressure: <b data-tick="18" data-tick-min="17" data-tick-max="19">18</b> psi{" "}
                <span className="psi-bar"></span> Flow: nominal
              </span>
            </div>

            <h1>
              Your business <em>leaks</em> through the seams between <span className="water">tools</span>.
            </h1>
            <p className="hero-sub">
              <strong>Devonel is a process re-engineering studio.</strong> We map the work, find where it&apos;s
              spilling, and weld it back together — with automations that actually hold pressure under real volume.
            </p>
            <div className="hero-cta">
              <a className="btn btn-fill">Request a 90-min walkthrough →</a>
              <a className="btn">See the ledger</a>
            </div>

            <div className="hero-split-meta">
              <div><span>Cycle</span><b>4 wks · audit → build</b></div>
              <div><span>Pod</span><b>2 named operators</b></div>
              <div><span>Fee</span><b>flat · $48k–$120k</b></div>
              <div><span>Payback</span><b>≈ 11 weeks</b></div>
            </div>
          </div>

          <aside className="hero-split-figure">
            <div className="hero-split-figure-head">
              <span>FIG. 01 · Routing diagram</span>
              <span>scale 1:∞ · 04/26</span>
            </div>
            <div className="hero-split-figure-body">
              <VerticalSchematic />
            </div>
          </aside>
        </div>
      </section>

      <LowerSections />
      <Animations />
    </>
  );
}
