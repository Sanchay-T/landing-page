# 02 - Codebase and stack audit

Audited 2026-09-07 against commit `4f67614` (2026-05-01) in `/Users/sanchay/hq/projects/personal/devonel.com/devonel-plumbing`.
Purpose: give the overnight agent the plumbing it can keep and a clear line around the visual work it must throw away.

## 1. Stack, versions, scripts, status

| Piece | Exact version (lockfile) | Notes |
|---|---|---|
| Next.js | 15.3.9 | App Router only, `reactStrictMode: true`, no other config |
| React / ReactDOM | 19.2.5 | `^19.1.0` in package.json |
| Tailwind CSS | 4.2.4 via `@tailwindcss/postcss` 4.2.4 | CSS-first config, no `tailwind.config.*` |
| TypeScript | 5.9.3 | `strict: true`, `@/*` -> repo root |
| clsx / tailwind-merge | 2.1.1 / 3.5.0 | only runtime deps besides next and react |
| sharp | 0.34.5 | transitive via next, used by `scripts/generate-icons.mjs` |
| Node / npm | 24.18.1 / 11.16.0 | via mise |

Scripts: `dev` = `next dev -p 3030`, `build` = `next build`, `start` = `next start -p 3030`, `lint` = `next lint`.
Port is 3030 for both dev and start.
Package manager is npm with a committed `package-lock.json` (the parent repo uses pnpm, do not mix).

Build status: `npm run build` passes, exit 0, wall time 7.2 s (12.7 s user) on this machine.
Output is 13 fully static routes, first-load JS 101 kB shared, 117 kB for `/` and `/option-d`.
Two build warnings: `@next/next/no-page-custom-font` on `app/layout.tsx:16` (Google Fonts `<link>` instead of `next/font`), and `metadataBase` is unset so OG/Twitter image URLs resolve to `http://localhost:3000`.
Lint status: `npm run lint` runs and reports the same single font warning, exit 0.
Note that `eslint` is not a dependency of this package; `next lint` only works because Node resolves `eslint@8` and `eslint-config-next` upward from the parent repo's `node_modules`.
Typecheck: `npx tsc --noEmit` passes in 1.4 s.

## 2. Route map and the options switcher

| Route | File | Renders |
|---|---|---|
| `/` | `app/page.tsx` | Option D verbatim: desktop-only `TopStrip` + `Nav`, `PinnedHero`, `LowerSections`, `Animations` |
| `/option-a` | `app/option-a/page.tsx` | Compact hero, CSS classes `hero hero--compact`, then shared lower sections |
| `/option-b` | `app/option-b/page.tsx` | Split hero with `VerticalSchematic` on the right |
| `/option-c` | `app/option-c/page.tsx` | Full-bleed `Schematic` SVG as translucent hero backdrop |
| `/option-d` | `app/option-d/page.tsx` | Pinned scroll-driven hero, split into `MobilePinnedHero` (`lg:hidden`) and `DesktopPinnedHero` (`hidden lg:block`) |
| `/options` | `app/options/page.tsx` | Gallery index: four `next/link` cards with tag, title, effort, impact, href |
| `/icon.svg`, `/apple-icon.png`, `/opengraph-image.png`, `/twitter-image.png` | `app/*` file conventions | Auto-served metadata assets |

Switcher pattern: there is no runtime switcher, no cookie, no query param, and no layout-level toggle.
Each option is a plain top-level route folder, and `/options` is a hand-written array of `{tag,title,desc,effort,impact,href,cta}` rendered as links.
The user navigates by opening `/options` and clicking a card, or by typing the URL; there is no "next option" link inside a variation.
`app/page.tsx` promotes the chosen variation to `/` by importing that variation's hero component directly (`import { PinnedHero } from "./option-d/pinned-hero"`).
All four variations share `app/_lib/shared.tsx` (nav, sections, footer) and `app/animations.tsx`, so only the hero differs.

Verdict on the routing idea: sound and worth reusing in shape, not in files.
Keep: one folder per variation, a static index page with a typed array of variations, and `/` re-exporting the winner.
Improve: wrap the variations in a route group so they share a layout, add a small floating variation switcher (prev/next/index) inside that group layout only, and derive the index array from a single `variations.ts` so the index and the switcher never drift.

## 3. Reusable infrastructure: keep versus discard

### Keep (stack-level plumbing, no visual opinion)

- `lib/utils.ts`: `cn()` = `twMerge(clsx(...))`, standard and correct for Tailwind v4.
- `tsconfig.json`: strict, `@/*` alias, `moduleResolution: bundler`.
- `postcss.config.mjs` and `next.config.mjs`: minimal and correct, nothing to change.
- Metadata file conventions in `app/`: `icon.svg`, `apple-icon.png`, `opengraph-image.png`, `twitter-image.png` are auto-wired by Next; keep the mechanism, regenerate the pixels.
- `scripts/generate-icons.mjs`: sharp-based SVG-to-PNG generator for touch icon, PWA icons, and OG image; keep the script skeleton and replace the SVG strings with the new mark.
- Two defects to fix when reusing it: it writes `icon-192.png` and `icon-512.png` into `app/` while the committed files live in `public/`, and nothing references those two PNGs (no `manifest`).
- `layout.tsx` metadata export shape: keep the `Metadata` object but add `metadataBase: new URL("https://www.devonel.com")` to clear the build warning.
- Font loading approach: the site uses three Google families via `<link>`; migrate to `next/font/google` with `variable` and map them in `@theme` so the lint warning goes away and fonts self-host.
- Tailwind v4 `@theme` block pattern in `globals.css`: colors as `--color-*`, fonts as `--font-*`, breakpoints as `--breakpoint-*`; keep the mechanism, replace every value.
- `@media (prefers-reduced-motion: reduce)` guards exist in CSS and in `Animations` (`matchMedia` early return); carry the discipline forward.
- Scroll-progress helper pattern in `desktop-pinned-hero.tsx` and `mobile-pinned-hero.tsx`: rAF-throttled scroll listener writes `--p` (0..1) and a `data-chapter` or `data-scene` attribute on the section, and CSS derives per-chapter `--pf` with `clamp(0, calc((var(--p) - start) / span), 1)`.
- That helper is duplicated twice; if the new build needs scroll mapping, extract it once into `lib/use-scroll-progress.ts` and drive it with a chapter-breaks array.
- Container-query approach in `components/marketing/magazine-cover.tsx`: `container-type: size` on the component root with all sizing in `cqi` / `cqb` custom properties set via a `TOKENS` style object, then Tailwind arbitrary values read the variables.
- The pattern (component owns its own responsive tokens, no global breakpoints) is worth keeping as a technique; the tokens and copy are not.
- IntersectionObserver reveal in `app/animations.tsx` (add class `in` at threshold 0.18, unobserve) is a fine baseline, but rewrite it against the new class names rather than importing it.

### Discard (visual design, copy, layout)

- Everything in `app/globals.css` below the `@theme` block: 1300 lines of hand-written class CSS (`.hero`, `.ledger-row`, `.hp-*`, `.mh-*`, option-specific sections), the paper/grid background, and the plumbing palette.
- `app/_lib/shared.tsx` (nav, sections, ledger, footer copy), `app/_lib/vertical-figures.tsx`, `app/_lib/vertical-schematic.tsx`, `app/schematic.tsx`: all editorial "process plumbing" SVG diagrams and copy.
- All four option heroes and `components/marketing/magazine-cover.tsx` as rendered.
- The PSI ticker, ledger count-up, and big-number count-up in `animations.tsx` are copy-specific DOM hacks and should not survive.
- The `design research/` folder is untracked reference material (tweet captures), not code; leave it alone.

## 4. Constraints

- No test runner, no Playwright, no Vitest, no `tests/` folder in this package.
- No lint config file in this package; `next lint` relies on the parent's `eslint@8` and `eslint-config-next@14.2.0` via directory resolution, which is fragile.
- Tailwind v4 is CSS-first: no `tailwind.config.js`, no `content` array, theme lives in `@theme` inside `globals.css`, and `@import "tailwindcss"` replaces the three `@tailwind` directives.
- Tailwind v4 preflight is layered, so unlayered hand-written CSS beats utilities in the cascade (a comment in `globals.css` records that bite).
- The only breakpoint override is `--breakpoint-lg: 1024px`; everything else is default.
- No animation library, no icon library, no UI kit; `motion`, `framer-motion`, `lucide-react`, and Radix exist only in the parent repo and are not resolvable from here reliably.
- No `.env` in this package and no server code; every route is static.
- This package is a subfolder of the parent git repo (`git rev-parse --show-toplevel` is `devonel.com/`), so commits and pushes go through the parent.
- The parent worktree is dirty with unrelated untracked `jewelo-*` folders and a modified `.gitignore`; stage only paths under `devonel-plumbing/`.
- Node resolution walks up into the parent's `node_modules`, so an import that "works" locally may not exist in `package.json`; add every dependency explicitly.

## 5. Deploy path (do not deploy)

- DNS: `devonel.com` A 216.198.79.1 and `www.devonel.com` CNAME `b209874cbeb3242a.vercel-dns-017.com`, both Vercel; apex 307-redirects to `https://www.devonel.com/`.
- The live page at `www.devonel.com` is this package: same `<title>Devonel — Process plumbing</title>`, same Google Fonts `<link>`, served with `server: Vercel` and `x-vercel-id: bom1::...`.
- Vercel link lives in the parent, not here: `devonel.com/.vercel/project.json` = project `landing-page`, `projectId prj_vdavYnAIj3gx6LCgiyyHZ9dtM27H`, `orgId team_YPS7obAmmQq80RNwj7zfkLCq`.
- Git remote for both parent and this folder is `https://github.com/Sanchay-T/landing-page` (branch `main`, in sync with origin at audit time).
- Because the parent's own Next app has different fonts and title, the Vercel project's Root Directory is almost certainly set to `devonel-plumbing`; the Vercel MCP returned 403 for that team, so this is inferred from the served HTML, not read from the dashboard.
- Expected deploy flow: push to `main` on `Sanchay-T/landing-page` triggers a Vercel production build of `devonel-plumbing`; a preview deploy happens on any non-main branch.
- No `vercel.json` anywhere, so build command and output are Vercel defaults (`next build`).
- The overnight agent must work on a branch and push only that branch; merging to `main` is a production deploy and needs Sanchay.

## 6. Recommended file layout for the new build

```
app/
  layout.tsx                 fonts via next/font, metadata + metadataBase, globals.css
  globals.css                @import "tailwindcss"; @theme tokens; @layer base only
  page.tsx                   re-exports the winning variation (initially v1)
  (variations)/
    layout.tsx               thin: renders children + <VariationSwitcher/>
    variations.ts            typed array: slug, name, one-line thesis, href
    v1/page.tsx ... v5/page.tsx
    index/page.tsx           gallery of the five, replaces /options
  icon.svg, apple-icon.png, opengraph-image.png, twitter-image.png
components/
  ds/                        shared design system, zero copy
    tokens.css               optional @theme extensions if globals.css gets long
    primitives/              Button, Container, Section, Eyebrow, Heading
    motion/                  Reveal, useScrollProgress, reduced-motion hooks
  variations/
    v1/ ... v5/              hero and sections unique to each variation
lib/
  utils.ts                   cn()
  site.ts                    name, url, contact, nav items as data
scripts/
  generate-icons.mjs         fixed output paths, new mark
docs/goal/                   these planning docs
```

Reasons: the route group `(variations)` gives all five a shared layout and switcher without touching the URL, so `/v1..v5` stay short and shareable.
Pulling the variation list into `variations.ts` means the gallery, the switcher, and `page.tsx` cannot disagree.
Putting shared primitives under `components/ds` and per-variation work under `components/variations/vN` keeps the "do not take inspiration from old UI" rule enforceable by path: nothing from the old `app/_lib` or `globals.css` body is imported.
Delete `app/option-*`, `app/options`, `app/_lib`, `app/schematic.tsx`, `app/animations.tsx`, and `components/marketing` in the same change so no old and new pattern coexist.

## 7. Verification commands for the overnight agent

Run everything from `/Users/sanchay/hq/projects/personal/devonel.com/devonel-plumbing`.

- `npm ci` then `npm run dev` and confirm `http://localhost:3030` responds; the port is fixed in `package.json`.
- `npx tsc --noEmit` after every slice, since it is the only typed gate and runs in about 1.5 s.
- `npm run build` before handoff; expected clean exit with 0 warnings once `next/font` and `metadataBase` are in place.
- `CI=1 npm run lint` for the Next ESLint rules; if the parent's `eslint` is unreachable add `eslint` and `eslint-config-next@15.3.x` as devDependencies here.
- Screenshots: `agent-browser` 0.36.0 is on PATH at `~/.local/share/mise/installs/node/24.18.1/bin/agent-browser`; Playwright is not installed globally, in this package, or in the parent.
- Do not set `AGENT_BROWSER_PROFILE` or `--session-name` for localhost work; the `personal` identity has no agent Chrome profile and none is needed for an unauthenticated local page.
- Per variation and per viewport: `agent-browser viewport 1440 900`, `agent-browser open http://localhost:3030/v1`, `agent-browser screenshot docs/goal/shots/v1-desktop.png`, then repeat with `viewport 390 844` for mobile.
- Run `agent-browser skills get core` once before the first screenshot to pick up the current command syntax.
- For the scroll-driven pieces, screenshot at three scroll positions using `agent-browser scroll` or `press End`, and also once with `emulate reduced-motion` if the CLI exposes it, otherwise toggle `prefers-reduced-motion` in the page via `javascript_tool`.
- Confirm `curl -s http://localhost:3030/opengraph-image.png | file -` returns PNG 1200x630 after rerunning `node scripts/generate-icons.mjs`.
- Final gate list in order: `tsc`, `lint`, `build`, desktop and mobile screenshots of `/`, `/v1`..`/v5`, and the gallery route.
