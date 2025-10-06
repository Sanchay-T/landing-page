# Devonel Bento Grid Enhancement SOP

_Last updated: 2025-10-06_

## 1. Purpose
This SOP documents exactly how to upgrade the Services “Option B Bento Grid” on the Devonel landing page so it feels more alive while preserving today’s dark aesthetic, tile proportions, and copy. Follow this doc and you can execute the enhancement end-to-end without referring back to our prior chat logs.

## 2. Context & Constraints
- Hero section is locked; the Bento grid is the first deep-dive module inside the **Playbooks** chapter of the conversion plan (`devonel-conversion-plan.md`).
- Target experience: premium, operator-led AI brand. Motion must support conversion, not overwhelm it.
- User directives from conversation:
  - “Grid should maintain the same aesthetic and look and boxes.”
  - “Boxes should have animation… proper container… nice animation.”
  - “Don’t overuse components. Pick the best ones.”
- Acceptable component palette (per chapter motion budget): `bento-grid`, `magic-card`, `animated-beam` (timeline only), `typing-animation`, `interactive-grid-pattern`, `blur-fade`.
- Reuse existing layout scaffolding where it does not conflict with the above goals.

## 3. Reference Assets
- Magic UI Bento Grid docs: `batch_scrape_markdown/magicui.design_docs_components_bento-grid.md`
- Current implementation file: `components/landing/services-section.tsx`
- Supporting utilities already imported: `motion` (Framer Motion), `BorderBeam`, `Marquee`, `cn`

## 4. Current Layout Snapshot
```
┌───────────────────────────────────────────────┐
│ Section Heading + Lead text                   │
├───────────────────────────────────────────────┤
│ Card A (2x2) | Card B | Card C                │
│              |        |                       │
│ Card D       | Card E |                       │
├───────────────────────────────────────────────┤
│ Metrics marquee                               │
└───────────────────────────────────────────────┘
```
- Card list defined in `cards` array, rendered inside a responsive `grid` with `md:grid-cols-4`.
- Each card already uses `motion.article` for entrance fade; featured card uses `BorderBeam`.

## 5. Enhancement Goals
1. **Container Experience**
   - Add a subtle animated backdrop that cues motion when the section enters view.
   - Introduce top/bottom padding and a framing layer so the grid feels like a cohesive module.
2. **Tile Interactions**
   - Keep tile geometry intact but add layered hover motion (light sweep + slight parallax on media).
   - Standardize animation timing between featured and non-featured tiles.
3. **Copy Legibility & Focus**
   - Ensure text contrast remains AAA against dark BG after new effects.
   - Maintain CTA marquee as-is (already linked to metrics). No extra components appended below.

## 6. Recommended Magic UI Components & Effects
| Use Case | Component | Notes |
| --- | --- | --- |
| Section backdrop | `Animated Grid Pattern` | Soft svg grid. Wrap inside a masked container to avoid edge glow. |
| Tile hover accent | `Magic Card` pointer light | Provides a spotlight following the cursor without changing layout. |
| Featured tile framing | `Border Beam` (already present) | Keep but sync duration to other hover cues. |
| Micro copy animation | `Text Animate` (optional) | Only if we need a single-line reveal for the section kicker. |

**Keep animation budget lean:** one background motion (`Animated Grid Pattern`) + per-card hover (Magic Card) is sufficient.

## 7. Implementation Steps

### Step 1 · Prep Imports
- In `components/landing/services-section.tsx`, add:
  ```tsx
  import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
  import { MagicCard } from "@/components/magicui/magic-card";
  ```
- Confirm these exist inside `components/magicui`. If not, fetch via Magic UI MCP per `@AGENTS.md` guidelines (never expose token in logs).

### Step 2 · Wrap Section in Animated Backdrop
- Enclose the grid + marquee inside a parent `div` with relative positioning, then drop an `AnimatedGridPattern` absolutely positioned with low opacity.
- Example skeleton:
  ```tsx
  <section ...>
    <div className="relative overflow-hidden rounded-[40px] border border-white/8 bg-background/60 px-6 py-10">
      <AnimatedGridPattern
        numSquares={10}
        maxOpacity={0.04}
        duration={8}
        className="pointer-events-none absolute inset-0"
      />
      {/* existing heading, grid, marquee */}
    </div>
  </section>
  ```
- Ensure heading remains outside the animated container if you prefer the framing to just hug the grid. Either approach is acceptable; align with hero spacing.

### Step 3 · Upgrade Cards Using Magic Card
- Replace the card wrapper with `MagicCard` to add the cursor-following spotlight:
  ```tsx
  <MagicCard className={cn("group relative ...", card.className)}>
    {/* BorderBeam + content */}
  </MagicCard>
  ```
- `MagicCard` exposes `gradientColor` / `borderColor` props; set them to Devonel accent tokens to match brand.
- Retain existing `motion.article` entrance animation by wrapping `MagicCard` inside the `motion` component or by forwarding `as` prop (Magic Card supports `as={motion.article}` if needed).

### Step 4 · Harmonize Hover Motion
- Featured card already scales media on hover; replicate a lighter version for non-media tiles using Framer `whileHover={{ y: -6 }}` on the outer `motion.article`.
- Adjust gradient overlay to fade in within 150–200ms for responsive feel.
- For media tile, add subtle parallax:
  ```tsx
  <motion.div whileHover={{ scale: 1.05, rotate: -0.25 }} ...>
  ```
- Keep total transform under 1.05 to avoid jitter.

### Step 5 · Accessibility & Performance Guardrails
- Check color contrast after background additions (use DevTools color contrast or `pnpm lint --report` if available).
- Ensure animations respect `prefers-reduced-motion`. Wrap Framer animations with:
  ```tsx
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion ? { initial: false, whileInView: { opacity: 1, y: 0 } } : {/* existing */};
  ```
- Verify that the `AnimatedGridPattern` opacity remains below 0.06 to prevent distraction.

### Step 6 · QA Checklist
- View on breakpoints: 375px, 768px, 1280px.
- Confirm marquee remains readable with new container padding.
- Test hover interactions with mouse and trackpad; ensure click targets stay intact.
- Run `pnpm lint` / `pnpm typecheck` if available.
- Capture before/after screenshots and drop into `screenshots/` for stakeholder review.

## 8. Rollout Notes
- Coordinate with the broader conversion plan: this is the signature “Playbooks” grid; no other sections should adopt MagicCard hover to preserve novelty.
- If additional microcopy is added (e.g., per-tile bullet), ensure copy team signs off.
- Document changes in commit message: `feat: enrich services bento grid motion`.

## 9. Conversation Timeline (for posterity)
| Timestamp (UTC-4 approx.) | Speaker | Summary |
| --- | --- | --- |
| 2025-10-06 16:50 | User | Shared `devonel-page-structure.md`, asked for improvement ideas using Magic UI. |
| 2025-10-06 17:00 | Assistant | Proposed full-page enhancements including Bento grid rework ideas. |
| 2025-10-06 17:08 | User | Clarified hero fixed; requested conversion-focused flow; asked for discussion before coding. |
| 2025-10-06 17:20 | Assistant | Delivered lean Proof → Playbooks → Commit plan in `devonel-conversion-plan.md`. |
| 2025-10-06 17:28 | User | Directed focus to Bento grid; wants livelier animation without altering layout. |
| 2025-10-06 17:32 | Assistant | Authored this SOP so any teammate can execute the enhancement. |

## 10. Appendix
- Cross-reference: `devonel-conversion-plan.md` for overall sequence decisions.
- Magic UI usage policy: `@AGENTS.md` (token handling, downloads).
- Component catalog digest: `component_summaries.md` (quick descriptions).

> Ready? Branch off main, follow Steps 1–6, and you’ll have an animated, on-brand Bento grid that supports the Devonel conversion narrative.
