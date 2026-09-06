# Asset queue - generated media slots waiting on Runway

Runway was **not available** in this session.
`claude mcp list` on 2026-09-07T02:54 (local) returned 34 connectors and **no RunwayML entry**.
No video and no image generation happened on this run.

Every slot below is built with the fallback named in its row, so no section is blocked.
When a Runway entry shows Connected, load the `seedance-video-director` skill, read `references/runway-mcp.md`
for the live tool surface, then work this file top to bottom.
Budget ceiling from `07-runway-assets.md` still applies: 12 video generations, 30 image generations for the whole run.

Continuity anchor for every v3 clip: **warm amber key light at 45 degrees from camera left, cold blue-white fill from behind, matte near-black ground `#07080a`, shallow depth of field, no text, no faces, no logos.**
Keep that sentence verbatim in each prompt so the three loops read as one shoot.

Always pass `generateAudio: false`, an explicit duration, and an explicit resolution.
Download immediately to the target path; hosted URLs expire the same day.
After each generation, add a row to `ASSET-LOG.md` with tool, model, prompt, parameters, task id, output path, bytes.

---

## V3-01 - Nightshift hero loop A "brass valve"

- Slot: variation 3 (Nightshift) hero, full-bleed 16:9 video behind the serif headline, first of three crossfaded loops.
- Aspect ratio: 16:9. Duration: 7s. Resolution: 1920x1080. Audio: off. Loop: seamless (first and last frame must match).
- Target file: `public/media/v3/hero-valve.mp4` (H.264, under 4 MB) + `public/media/v3/hero-valve-poster.webp` (under 400 KB).
- Prompt:
  - Subject: a single machined brass gate valve, quarter-turning slowly clockwise, filling the centre third of frame; nothing else in shot.
  - Material: aged polished brass with fine lathe grooves and a faint verdigris in the threads, one bead of condensation on the lower body.
  - Lighting: warm amber key light at 45 degrees from camera left, cold blue-white fill from behind, matte near-black ground `#07080a`, soft falloff to pure black at the frame edges.
  - Camera: locked-off macro, 100mm equivalent, f/2.8, shallow depth of field, subject at 1/3 height, no camera move.
  - Motion: the handwheel rotates roughly 90 degrees over the full clip at constant speed; condensation bead creeps 3mm; nothing else moves.
  - Negative: no text, no numbers, no letters, no logos, no watermark, no hands, no people, no faces, no reflections of a room, no lens flare, no rack focus, no cuts, no colour grading shifts.
- Fallback in place: CSS radial mesh gradient over `#07080a` with a Paper Shaders god-ray layer, plus the still `public/media/jewelo/poster-16x9.webp` at 40% brightness as the poster.

## V3-02 - Nightshift hero loop B "ink through glass"

- Slot: variation 3 hero, second crossfaded loop.
- Aspect ratio: 16:9. Duration: 7s. Resolution: 1920x1080. Audio: off. Loop: seamless.
- Target file: `public/media/v3/hero-ink.mp4` + `public/media/v3/hero-ink-poster.webp`.
- Prompt:
  - Subject: three parallel borosilicate glass pipes crossing frame on a slight diagonal; a single ribbon of blue-white ink enters the leftmost pipe and travels to frame right.
  - Material: clear thick-walled glass with visible wall refraction, brass compression collars at each joint, ink is cold `#6f8fff` and slightly viscous.
  - Lighting: warm amber key light at 45 degrees from camera left, cold blue-white fill from behind, matte near-black ground `#07080a`, the ink self-lights the glass it passes through.
  - Camera: locked-off, 50mm equivalent, f/4, pipes in focus across the frame, no camera move.
  - Motion: the ink front crosses the full frame width once over the clip at constant speed and exits, leaving the pipes clear again so the loop closes.
  - Negative: no text, no numbers, no letters, no logos, no watermark, no bubbles forming words, no hands, no people, no faces, no splashing, no cuts.
- Fallback in place: an animated SVG pipe path with a stroke-dashoffset ink front on the same palette; `prefers-reduced-motion` freezes it at 60%.

## V3-03 - Nightshift hero loop C "ledger page"

- Slot: variation 3 hero, third crossfaded loop; also the loop the proof strip fades in over.
- Aspect ratio: 16:9. Duration: 6s. Resolution: 1920x1080. Audio: off. Loop: seamless.
- Target file: `public/media/v3/hero-ledger.mp4` + `public/media/v3/hero-ledger-poster.webp`.
- Prompt:
  - Subject: a dark leather-bound ledger lying open and flat, ruled columns only, completely blank of writing; a slow amber light sweep travels across the ruled columns from left to right.
  - Material: black grained leather cover, heavy cream ruled paper darkened to near-black by the low key, faint gilt edge on the closed side.
  - Lighting: warm amber key light at 45 degrees from camera left, cold blue-white fill from behind, matte near-black ground `#07080a`, the sweep is a moving amber gradient, not a hard shadow.
  - Camera: locked-off overhead, 35mm equivalent, f/5.6, page fills frame with a black border on all sides, no camera move.
  - Motion: only the light sweep moves, one full pass across the frame, returning to the start state.
  - Negative: no text, no numbers, no letters, no handwriting, no printed figures, no logos, no watermark, no hands, no pen, no people, no faces, no page turning, no cuts.
  - Note: numbers on this section are live HTML counters over the video, never baked into the frame. `07-runway-assets.md` forbids text inside images.
- Fallback in place: a CSS ruled-paper background with an animated linear-gradient sweep and live number-flow counters on top.

## V3-04 - Nightshift hero object still

- Slot: variation 3, optional hero object still used as the `poster` attribute and the mobile / reduced-motion replacement for all three loops.
- Aspect ratio: 16:9. Resolution: 1920x1080. Image generation, not video.
- Target file: `public/media/v3/hero-object.webp` (under 400 KB).
- Prompt:
  - Subject: one brass gate valve and two short glass pipe sections arranged as a still life on a black surface, negative space on the right two thirds for the headline.
  - Material: aged polished brass, thick clear glass, matte black stone surface.
  - Lighting: warm amber key light at 45 degrees from camera left, cold blue-white fill from behind, matte near-black ground `#07080a`.
  - Camera: 85mm equivalent, f/2.8, subject in the left third, shallow depth of field.
  - Motion: n/a, still.
  - Negative: no text, no numbers, no letters, no logos, no watermark, no hands, no people, no faces, no busy background.
- Fallback in place: `public/media/jewelo/poster-16x9.webp` (real product render, 1122x631, dark editorial) is the poster for every v3 video slot until this exists.

## V3-05 - Nightshift section-break texture

- Slot: variation 3, the 160px section gaps; a very low-contrast texture that keeps the dark page from reading flat.
- Aspect ratio: 21:9. Resolution: 2560x1080. Image generation.
- Target file: `public/media/v3/section-texture.webp` (under 200 KB).
- Prompt:
  - Subject: an abstract field of out-of-focus specular highlights, as if from brushed metal at extreme distance.
  - Material: brushed dark metal, no discernible object.
  - Lighting: warm amber key at 45 degrees from camera left, cold blue-white fill from behind, matte near-black ground `#07080a`.
  - Camera: 200mm equivalent, f/1.8, fully defocused.
  - Motion: n/a, still.
  - Negative: no text, no logos, no watermark, no recognisable objects, no faces, no banding.
- Fallback in place: Paper Shaders `paperTexture` at 4% opacity, which is already the mechanism variation 1 uses.

## CASE-01 - Jewelo case-study hero

- Slot: the case-study section hero on every variation that wants one image for the pendant-studio project (v1 figure, v3 bleed, v4 poster block, v5 window frame).
- **Status: not queued for generation.** The real renders are sufficient.
- Resolution: covered by `public/media/jewelo/pendant-dark-gold-emerald@2x.webp` (1122x1402), `pendant-studio-silver@2x.webp` (1122x1402) and `poster-16x9.webp` (1122x631).
- `07-runway-assets.md` says real screenshots of shipped Devonel products are always preferred over generated imagery for proof sections, so this slot stays real.
- Only regenerate if a variation needs an aspect ratio no real render covers. In that case do not crop a 16:9 out of the 4:5 portrait renders; queue a fresh generation at the ratio the slot needs.

## Slots that are deliberately NOT queued

- Variation 1 "Broadsheet": figures are line art drawn with SVG on scroll. No generated media wanted.
- Variation 2 "Terminal": the direction is explicitly "no imagery at all". Never add media here; it would destroy the distinctness claim.
- Variation 4 "Swiss Signal": the metro-map diagram is a self-drawing SVG. Flat colour panels are CSS. No generated media wanted.
- Variation 5 "Console": the whole thesis is real artefacts. Every visual is a real screenshot from `public/media/jewelo/`. Generated imagery here would be a fake dashboard, which `07-runway-assets.md` forbids outright.
- Team, founder and client photography: never generated. `07-runway-assets.md` forbids fake people presented as team or clients.
- Client logos: never generated and never sourced. The Devonel mark is the only logo on the site.
