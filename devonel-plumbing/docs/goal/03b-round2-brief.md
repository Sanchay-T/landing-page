# 03b - Round 2 brief

One page.
Read it before you open an editor, and read `03-design-research.md` section 4 for the direction you were assigned.
Round 1 lives in `03-design-research-round1.md` as an anti-reference only; nothing in it may be reused.

## Devonel is the subject; the client is a case study.

That sentence settles every argument on this page.
If a section makes the reader think about jewellery before it makes them think about the studio, the section is wrong.

## What the founder said about round 1

> this is not a jewellery promotion, it is for Devonel, the agency that does the work; it looks like the client's landing pages; which agency website uses a terminal?

> create something unique post inspo, I don't want to look the same as others

Both rejections are structural, not cosmetic.
The first says the client's product took over the page.
The second says a direction that ships the genre and nothing else has failed, no matter how well it is executed.

## The five directions

1. **Studio Dark** - near-black, one procedural three.js object: the Devonel mark assembled out of sixteen segments, one per day of the Jewelo build.
2. **Shader Light** - off-white paper, a Paper Shaders mesh whose two colour poles are Dubai and Mumbai, lit by the real local time in each city.
3. **Scroll Story** - a sticky sixteen-tick date bar and a background that travels from the night the brief arrived to the morning the product went live.
4. **Bento SaaS** - light, shadcn-grade, no canvas, and a board where cell size is honesty: the one live product is the biggest cell and the unshipped work is an outline.
5. **Liquid Metal** - dark chrome orb whose reflections are made from the studio's own words, with Archivo Expanded at poster scale.

Each direction's twist is a build requirement.
Ship the genre without it and the direction has failed.

## Imagery rule

Client renders and UI stills from `ASSET-INVENTORY.md` appear only inside case-study cards and on `/work/jewelo`.
They never appear in the hero, the proof strip or the services section.
Inside a case card: one still, at most 480px wide at 1x, never full-bleed, never behind text, always with the alt text from the inventory.
The client is never named on the page; use "a bespoke jewellery house in Dubai" from `COPY.md`.
The only logo on the site is the Devonel mark at `app/icon.svg`.

## Dependency rule

Two additions are allowed, and only two: `three` (with `@react-three/fiber` and `@react-three/drei` if they earn their weight) and `@paper-design/shaders-react`.
Both are imported through `next/dynamic` with `ssr: false`, mounted on hero intersection or `requestIdleCallback`, and kept out of the entry chunk.
No HDRI downloads, no model files, no animation library, no icon pack, no UI kit.
Directions 1, 3 and 5 use `three`; direction 2 uses Paper Shaders; direction 4 uses no canvas at all.
Only one WebGL context per page: the final CTA reprises the hero object by reusing it, not by creating a second one.

## Performance budget

- Lighthouse mobile performance 85 or above on every variation root, measured with the command in `06-verification-protocol.md`. Direction 4 has no canvas and sets the reference score.
- The headline text is the LCP element in all five. The canvas never carries the LCP and never blocks it.
- Hero JavaScript is lazy: dynamic import, `ssr: false`, out of the entry chunk, mounted after the hero text has painted.
- Every canvas pauses off-screen through an `IntersectionObserver`, runs `frameloop="demand"` where the scene is not continuously animating, and clamps DPR to 1.5 (1.25 for the shader).
- Largest case-study image stays under 400 KB; the reduced-motion stills stay under 60 KB.
- `npm run build` and `npm run lint` both exit 0, and no route logs a console error at any tested width.

## Fallback rule

Every canvas ships two fallbacks, and both are part of "done", not a follow-up.

- **`prefers-reduced-motion: reduce`** - the direction's device still reads, it just stops moving. The object renders assembled in one frame, the shader renders at `speed={0}` still coloured by the real local times, the value ramp renders as three fixed bands, the orb renders as a still at the rotation where its words are legible. The twist survives the fallback in all five.
- **No WebGL** - a static CSS or SVG composition of the same idea, no JavaScript, under 60 KB. Verify it by disabling WebGL in the browser, not by reading the code.

Check `prefers-reduced-motion` on first paint, never after the entrance has already run.
