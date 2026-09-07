# Distinctness check - the five variations

Measured on the live pages at `http://localhost:3030/v1..v5?chrome=0`, viewport 1280x800, one fresh `agent-browser` session per variation, after `document.fonts.status === "loaded"` and every `img.complete`.
Colours are the computed values or the declared custom properties on each variation's root element; sizes are computed pixels, not authored clamps.
Motion is read from the variation's own keyframes and transition declarations.
Crops: `docs/goal/shots/sheet/v<n>-1280.png` and `docs/goal/shots/sheet/v<n>-390.png`.

## Measurements at 1280x800

| | 1 Broadsheet | 2 Terminal | 3 Nightshift | 4 Swiss Signal | 5 Console |
|---|---|---|---|---|---|
| Hero background | `#f6f1e7` warm paper | `#0b0b0b` near-black | `#07080a` base under a video plate | `#ffffff` white | `#f7f7f5` light neutral |
| Hero heading font | Fraunces (serif) | Geist Mono | Fraunces (serif) | Space Grotesk | Geist |
| Hero heading size / weight / tracking | 85.92px / 620 / -1.55px | 36.16px / 500 / -0.36px | 102.4px / 400 / -2.25px | 107.52px / 700 / -3.76px | 52.35px / 600 / -1.15px |
| Hero heading colour | `rgb(20 18 16)` | `rgb(232 230 223)` | `rgb(244 242 238)` | `rgb(17 17 17)` | `rgb(22 22 22)` |
| Body / running text | Fraunces 20.29px deck, Geist 11.9px labels | Geist Mono 16px and 13px, one family only | Geist 23px deck, 13px small | Space Grotesk 24px deck, 18px labels, one family only | Geist 22px deck and 16px, Geist Mono 14px labels |
| Images in the hero | 0 img, 0 svg, 0 video | 0 img, 0 svg, 0 video | 1 img (poster) + 1 video | 0 img, 2 inline svg | 3 img (product UI captures) |
| Accent | `#1d3a8a` blue | `#38d27a` green | `#e0a24a` amber, `#6f8fff` cold blue | `#e63b2e` / `#2456e6` / `#f2c318` / `#111111` | `#2962d6` blue |
| Nav pattern | Static 1280x260 masthead that scrolls away: ten ruled entries on two lines plus a boxed classified CTA. | Fixed left rail 208x800 printing the sections as a file tree (`\|-- hero` ... `` `-- eof ``) with an NN/10 counter. | Fixed full-width bar 1280x65 floating over the video: nine links plus a 999px amber pill CTA. | Sticky bar 1280x82: eight links plus a square `#f2c318` block CTA. | Sticky bar 1280x57: nine links, a secondary text link and a square `#2962d6` block CTA. |
| Layout skeleton | 12 visible column rules behind a 661px hero, headline in the left columns, classified CTA box and pull-quote in the right three, closed by a double rule. | 1072px shell to the right of the rail, 80-character measure, full-width ASCII rules between sections, 543px hero of stacked prompt lines. | Full-bleed 1280x720 flex hero over the video plate, text held to a 720px measure, proof strip pinned along the bottom edge. | White full-width poster, `#hero` 1447px tall so the first screen is headline plus CTA only and the metro-map SVG sits below the fold. | Two-column grid, 432px sticky copy and a 726px window frame of screenshots, hero 758px tall. |
| Motion | No load animation; scroll-position reveal plus an SVG line draw on `cubic-bezier(0.22, 0.61, 0.36, 1)`. | Stepped only: `steps(1/2/3/12/24)` swaps, a `1.06s steps(2, jump-none)` caret and a type-on print; no eased curve anywhere. | Fade-in `v3-enter` plus a looping hero video and continuous `v3-mesh-beats`, `v3-rays-drift` and `v3-plate-drift` background keyframes. | Spring `cubic-bezier(0.34, 1.56, 0.64, 1)` on enter and a `stroke-dashoffset` self-draw on the metro line. | Scroll-linked `v5-parallax` on the screenshots; everything else is a colour transition on `cubic-bezier(0.2, 0, 0, 1)`. |

## Pairwise separation

1-2.
Broadsheet sets an 85.92px Fraunces serif headline in `rgb(20 18 16)` on `#f6f1e7` paper beneath a 260px static masthead with twelve visible column rules and a `#1d3a8a` classified CTA box, and its only motion is a scroll-position reveal on an eased curve, while Terminal sets a 36.16px Geist Mono headline in `rgb(232 230 223)` on `#0b0b0b` beside a fixed 208px file-tree rail with an 80-character measure and a shell-prompt hero whose `#38d27a` caret blinks on `steps(2, jump-none)` with no eased curve on the page.

1-3.
Both use Fraunces, but Broadsheet runs it at 85.92px weight 620 in near-black on `#f6f1e7` inside a ruled 12-column grid with zero images in the hero, while Nightshift runs it at 102.4px weight 400 in near-white on `#07080a` over a playing hero video with a poster image, an amber `#e0a24a` pill CTA and continuous mesh, ray and plate drift keyframes that Broadsheet, which animates nothing on load, has no equivalent of.

1-4.
Broadsheet's serif 85.92px headline on warm `#f6f1e7` sits under a static masthead that scrolls away and inside visible hairline column rules, whereas Swiss Signal's 107.52px Space Grotesk headline at weight 700 and -3.76px tracking sits on flat `#ffffff` under a sticky 82px bar with a `#f2c318` block CTA, carries four flat inks instead of one blue accent, and animates on a `cubic-bezier(0.34, 1.56, 0.64, 1)` spring plus an SVG self-draw where Broadsheet uses only a scroll reveal.

1-5.
Broadsheet is a 661px imageless hero of type and rules on `#f6f1e7` with a 85.92px Fraunces headline and a static 260px masthead, while Console is a 758px two-column grid on `#f7f7f5` with a 52.35px Geist headline in the 432px left column and three product screenshots in a 726px window frame on the right, a sticky 57px bar with a `#2962d6` block CTA, and scroll-linked parallax on those screenshots.

2-3.
Both are dark, but Terminal is `#0b0b0b` with a single Geist Mono family at 36.16px/16px/13px, no images at all and stepped motion on a `#38d27a` accent, while Nightshift is `#07080a` with a 102.4px Fraunces serif over a video and poster, Geist body at 23px, an amber `#e0a24a` accent with a `#6f8fff` cold second, and eased fades over drifting background keyframes.

2-4.
Terminal is near-black `#0b0b0b`, monospace-only, imageless, laid out to an 80-character measure beside a fixed left rail and stepped in every animation, while Swiss Signal is white `#ffffff`, Space Grotesk-only, carries two inline SVGs in a 1447px-tall hero under a sticky bar, uses four flat inks (`#e63b2e`, `#2456e6`, `#f2c318`, `#111111`) against Terminal's one green, and runs a 1.56-overshoot spring where Terminal refuses any easing.

2-5.
Terminal reverses to `#0b0b0b` with a 36.16px mono headline, zero images and a fixed 208px file-tree rail, while Console stays light on `#f7f7f5` with a 52.35px Geist headline, three UI screenshots in a window frame, a sticky 57px bar and a `#2962d6` accent, and where Terminal steps every transition Console is scroll-linked parallax on an eased `cubic-bezier(0.2, 0, 0, 1)`.

3-4.
Nightshift is a full-bleed 1280x720 dark hero on `#07080a` with a 102.4px Fraunces serif over a looping video, a 720px text measure, a rounded 999px amber pill CTA and drifting background keyframes, while Swiss Signal is a white poster with a 107.52px Space Grotesk headline, zero video and two flat SVGs, square-cornered block CTAs, four inks and spring easing.

3-5.
Both carry imagery, but Nightshift's is one video plus a poster played full-bleed behind a 102.4px serif headline in near-white on `#07080a` with an amber accent and fade-in motion, while Console's is three static product screenshots framed inside a 726px window beside a 432px sticky column, a 52.35px Geist headline in near-black on `#f7f7f5`, a `#2962d6` accent and scroll-linked parallax rather than fades.

4-5.
Swiss Signal is Space Grotesk-only at 107.52px weight 700 on pure `#ffffff` with four flat inks, a 1447px hero that puts the metro SVG below the fold, an 82px sticky bar with a yellow block CTA and 1.56-overshoot spring easing, while Console mixes Geist with Geist Mono labels at a 52.35px headline on `#f7f7f5` with a single `#2962d6` accent, a 758px two-column hero whose right half is three screenshots, a 57px sticky bar and eased scroll-linked parallax with no overshoot.

Contact sheet: docs/goal/shots/contact-sheet.png (2062x5140, 2.4 MB)
