# Asset inventory - `public/media/jewelo/`

15 assets, 29 files (each ships a 1x and a native `@2x` for `srcset`, except the poster).
All WebP q82. Largest file 173 KB against a 400 KB budget.
Provenance, exact crops and reproduction commands are in `ASSET-LOG.md`.
Generated-media slots still waiting on Runway are in `ASSET-QUEUE.md`.

Every image here is a real render or a real screenshot from the shipped pendant-studio product.
None of them shows the client brand name, a client logo, a customer name, a staging URL, a price, or an identifiable face.
Alt text below is written to stay that way: describe the artefact, never name the brand.
Refer to the client in surrounding copy as "a bespoke jewellery house in Dubai" until they approve being named.

| File (1x + 2x) | Dimensions (1x / 2x) | Bytes (1x / 2x) | Size | Alt text suggestion | Suggested uses |
| --- | --- | --- | --- | --- | --- |
| `pendant-studio-silver.webp` + `pendant-studio-silver@2x.webp` | 561x701 / 1122x1402 | 54780 / 163028 | 53 / 159 KB | A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot | v1 case figure; v3 content bleed; v4 poster block; v5 window frame. The "studio shot" of the four-view set. |
| `pendant-worn-silver.webp` + `pendant-worn-silver@2x.webp` | 561x611 / 1122x1222 | 29356 / 113334 | 29 / 111 KB | A silver name pendant worn at the collarbone, framed below the chin | v3 content bleed; v4 poster block; v5 detail panel. The "on model" of the four-view set. |
| `pendant-close-silver.webp` + `pendant-close-silver@2x.webp` | 561x701 / 1122x1402 | 67148 / 176982 | 66 / 173 KB | Close detail of a silver cut-out name pendant showing the polished edges and the chain links | v3 content bleed; v5 detail panel; any hover-zoom. The "close up" of the four-view set. |
| `pendant-dark-silver.webp` + `pendant-dark-silver@2x.webp` | 561x701 / 1122x1402 | 18972 / 52322 | 19 / 51 KB | A silver name pendant resting on black velvet, lit as a dark editorial still | v3 hero object and section bleed; v5 dark accent tile. The "dark editorial" of the four-view set. |
| `pendant-studio-gold.webp` + `pendant-studio-gold@2x.webp` | 627x627 / 1254x1254 | 15280 / 48324 | 15 / 47 KB | A gold script name pendant with two small set stones, laid flat on a warm neutral ground | v1 case figure; v4 bento tile. Square crop, second style, warm palette. |
| `pendant-worn-gold.webp` + `pendant-worn-gold@2x.webp` | 561x614 / 1122x1227 | 22056 / 86874 | 22 / 85 KB | A gold script name pendant worn at the collarbone, framed below the chin | v1 pull-quote figure; v4 bento tile. Second style on model. |
| `pendant-dark-gold-emerald.webp` + `pendant-dark-gold-emerald@2x.webp` | 561x701 / 1122x1402 | 22484 / 69916 | 22 / 68 KB | A gold script name pendant set with four small emeralds, on black velvet | v3 hero object and section bleed. Warmest dark render; closest to the v3 amber palette. |
| `poster-16x9.webp` | 1122x631 | 43566 | 43 KB | A gold script name pendant set with emeralds on black velvet, cropped wide | v3 video poster and reduced-motion still for every queued V3 loop; any 16:9 case hero. No 2x: the source does not allow one. |
| `ui-name-and-language.webp` + `ui-name-and-language@2x.webp` | 720x411 / 1440x822 | 10246 / 27966 | 10 / 27 KB | The name step of a jewellery design tool: a name field, a language toggle, an approved script-spelling field, and a live pendant preview | v5 sticky screenshot 1; v1 figure. Proves TYPE NAME and CHOOSE LANGUAGE with spelling approval. |
| `ui-style-picker.webp` + `ui-style-picker@2x.webp` | 720x411 / 1440x822 | 11436 / 31466 | 11 / 31 KB | The style step of a jewellery design tool showing six lettering styles as selectable cards | v5 sticky screenshot 2; v4 poster block. Proves CHOOSE DESIGN and the six-style scope lock. |
| `ui-stones-and-setting.webp` + `ui-stones-and-setting@2x.webp` | 720x411 / 1440x822 | 11184 / 30368 | 11 / 30 KB | The stone step of a jewellery design tool: setting density and stone type beside a live pendant preview | v5 sticky screenshot 3. Proves CUSTOMIZE. |
| `ui-review-spec.webp` + `ui-review-spec@2x.webp` | 720x411 / 1440x822 | 11672 / 32968 | 11 / 32 KB | A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox | v5 sticky screenshot 4; v1 ledger figure. Proves the approve-spelling gate before production. |
| `ui-generation-queue.webp` + `ui-generation-queue@2x.webp` | 460x230 / 920x460 | 3644 / 9340 | 4 / 9 KB | Four presentation views queued in parallel, labelled Studio, On model, Close up and Dark mood, each showing a queued state | v5 process section; v1 process figure. Proves parallel generation with honest queued states. |
| `ui-rtl-mirror.webp` + `ui-rtl-mirror@2x.webp` | 720x411 / 1440x822 | 10392 / 28128 | 10 / 27 KB | A design tool mirrored right to left, with the live preview on the right and the step rail reversed | v5 detail panel; v4 poster block. Proves full RTL, not a translated LTR layout. |
| `ui-operator-console.webp` + `ui-operator-console@2x.webp` | 720x161 / 1440x322 | 5216 / 13102 | 5 / 13 KB | An operator work queue header showing counts for quote requests, in progress and ready | v5 proof strip; v1 running-head strip. Proves the operator side exists, with all order names cropped away. |

## Using them

- The four `pendant-*-silver` files are one pendant photographed four ways. They are the visual proof of the "four renders" claim in `01-business-brief.md` section 4, so keep them together in any grid that makes that claim, and keep them in the product's own order: studio, on model, close up, dark mood.
- `pendant-studio-gold`, `pendant-worn-gold` and `pendant-dark-gold-emerald` are a second design in a warmer palette. Use them where a page needs variety rather than a matched set.
- The seven `ui-*` files run in product order: name and language, style picker, stones and setting, review spec, generation queue, RTL mirror, operator console. Variation 5 can scroll them in that sequence as the sticky right column.
- `ui-operator-console` and `ui-generation-queue` are wide strips, not full screens. Frame them as cropped panels; a browser chrome frame around them would read as a fake screenshot.
- Names visible on the pendants ("Layla", "Asma") and in the studio fields are the product's own preload test names, committed as fixtures. They are not customers. Do not caption them as customer orders.
- `prefers-reduced-motion` and mobile in variation 3 both fall back to `poster-16x9.webp`.

## Logo policy

The only logo on this site is the Devonel mark, already in the repo at `app/icon.svg` (a valve seen from above: off-white ground, near-black ring and crosshair, `#c8451c` centre dot) and rasterised at `public/icon-512.png`, `public/icon-192.png`, `app/apple-icon.png`, `app/opengraph-image.png` and `app/twitter-image.png`.
No client logo, no fake client logo, no invented partner strip, and no generated logo of any kind.
