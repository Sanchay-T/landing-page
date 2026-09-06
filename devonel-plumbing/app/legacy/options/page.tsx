import Link from "next/link";
import { TopStrip, Nav, SiteFooter } from "../_lib/shared";

const options = [
  {
    tag: "Option A",
    title: <>Compact <em>hero</em>.</>,
    desc: "Same layout as the original, but the headline shrinks (clamp 48–76px) and paddings tighten so the schematic is visible above the fold without scrolling.",
    effort: "LOW",
    impact: "HIGH",
    href: "/legacy/option-a",
    cta: "Open compact →",
  },
  {
    tag: "Option B",
    title: <>Side-by-<em>side</em>.</>,
    desc: "Two-column hero. Headline + CTAs on the left, the routing schematic on the right replacing the spec sheet. The diagram is the first thing you see, animating on load.",
    effort: "MEDIUM",
    impact: "HIGH",
    href: "/legacy/option-b",
    cta: "Open side-by-side →",
  },
  {
    tag: "Option C",
    title: <>Schematic-<em>as-hero</em>.</>,
    desc: "The full routing diagram fills the viewport as a translucent backdrop. Headline and CTAs sit over it. Boldest, most editorial — the diagram is the page.",
    effort: "MEDIUM",
    impact: "MAX",
    href: "/legacy/option-c",
    cta: "Open blueprint →",
  },
  {
    tag: "Option D",
    title: <>Pinned <em>scroll</em>.</>,
    desc: "Sticky hero. As you scroll the first viewport, the headline fades and the schematic builds itself in the same frame. Cinematic; one extra scroll-tick before the page proper begins.",
    effort: "HIGH",
    impact: "MAX",
    href: "/legacy/option-d",
    cta: "Open pinned →",
  },
] as const;

export default function OptionsIndex() {
  return (
    <>
      <TopStrip />
      <Nav />

      <section className="gallery">
        <div className="gallery-head">
          <span className="sec-num">§ Hero options</span>
          <h1>Pick the <em>hero</em> that lands.</h1>
          <p className="lede">
            Four variants of the plumbing concept, identical content below the hero so you&apos;re comparing first
            impression only. Open each in its own tab and tell me which one to ship.
          </p>
        </div>

        <div className="gallery-grid">
          {options.map((o) => (
            <Link key={o.href} href={o.href} className="gallery-card">
              <span className="gc-tag">{o.tag}</span>
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
              <div className="gc-meta">
                <span>Effort · <b>{o.effort}</b></span>
                <span>Impact · <b>{o.impact}</b></span>
              </div>
              <span className="gc-link">{o.cta}</span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
