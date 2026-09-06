import { TopStrip, Nav, LowerSections } from "../_lib/shared";
import { Schematic } from "../schematic";
import { Animations } from "../animations";

export default function OptionC() {
  return (
    <>
      <TopStrip />
      <Nav />

      {/* =================== HERO (schematic-as-hero) =================== */}
      <section className="hero hero--blueprint">
        <div className="hero-blueprint-stage">
          <div className="hero-blueprint-figure" aria-hidden="true">
            <Schematic />
          </div>
          <div className="hero-blueprint-content">
            <div className="hero-eyebrow">
              <span className="swatch"></span>
              <span>Vol. II · No. 14 · Process plumbing &amp; automation</span>
              <span className="psi" style={{ marginLeft: "auto" }}>
                Pressure: <b data-tick="18" data-tick-min="17" data-tick-max="19">18</b> psi{" "}
                <span className="psi-bar"></span> Flow: nominal
              </span>
            </div>
            <h1 className="hero-blueprint-h1">
              Your business <em>leaks</em> through the seams between <span className="water">tools</span>.
            </h1>
            <p className="hero-sub hero-blueprint-sub">
              <strong>Devonel is a process re-engineering studio.</strong> We map the work, find where it&apos;s
              spilling, and weld it back together — with automations that actually hold pressure under real volume.
            </p>
            <div className="hero-cta">
              <a className="btn btn-fill">Request a 90-min walkthrough →</a>
              <a className="btn">See the ledger</a>
            </div>
          </div>
        </div>
        <div className="hero-blueprint-stamp">FIG. 01 · Routing diagram, before / after Devonel · scale 1:∞ · drawn 04/26</div>
      </section>

      <LowerSections />
      <Animations />
    </>
  );
}
