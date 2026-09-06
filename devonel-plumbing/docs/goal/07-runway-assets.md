# Runway assets - images and video for the landing page

## Availability check first

Runway is a claude.ai connector named "claude.ai RunwayML".
It is enabled in Sanchay's default Claude profile but was not present in this profile's MCP list on 2026-09-07.
Before generating anything, run `claude mcp list` and confirm a Runway entry shows Connected.
If it is missing, do not stop the whole run.
Build every section with SVG, CSS, and real product screenshots first, keep a list of the asset slots that want generated media in `docs/goal/ASSET-QUEUE.md`, and fill them the moment Runway is available.
Real screenshots of Jewelo and other shipped Devonel products are always preferred over generated imagery for proof sections.

## Operating rules

- Load the `seedance-video-director` skill before any video call and read its `references/runway-mcp.md` for the live tool surface.
- Read the live tool schemas before the first paid call.
  The surface changes; the skill notes document two different adapters.
- Always pass explicit duration, resolution, and `generateAudio: false`.
- Download every output immediately to `public/media/<variation>/` with a descriptive filename.
  Hosted URLs expire the same day.
- Record every generation in `docs/goal/ASSET-LOG.md`: tool, model, prompt, parameters, task id, output path, size, where used.
- Budget: at most 12 video generations and 30 image generations for the whole run.
  Prefer one strong hero video per variation that needs it over many weak clips.
- Compress before shipping: images to WebP or AVIF under 400 KB, video to H.264 MP4 under 4 MB with a WebP poster.
  Use `ffmpeg` and `sharp` or `squoosh` through npx; state the commands in the asset log.

## What to generate

Only the directions in `03-design-research.md` that call for generated media need it.
Typical slots:

- Hero background or hero object for the cinematic direction: abstract, brand-adjacent, no faces, no text baked in.
- Case study hero for Jewelo: a pendant render in the style Jewelo itself produces, or better, a real Jewelo output if one exists in the jewelo repo assets.
- Process illustrations: only if SVG cannot carry it.

## What never to generate

- Fake client logos.
- Fake people presented as team or clients.
- Fake dashboards presented as shipped product.
- Any text inside images; text is always live HTML.

## Prompt discipline

Write the prompt as subject, material, lighting, camera, motion, and negative list.
Keep one continuity anchor across the clips of one variation so they read as one shoot.
Generate at the aspect ratio the slot needs; do not crop a 16:9 into a 9:16 hero.
