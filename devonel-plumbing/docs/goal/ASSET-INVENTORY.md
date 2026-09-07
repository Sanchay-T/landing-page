# Asset inventory - `public/media/jewelo/`

Round 2 rule: Devonel is the subject; the client is a case study. No file here appears in hero, proof or services.

15 assets, 29 files (each ships a 1x and a native `@2x` for `srcset`, except the poster).
All WebP q82. Largest file 173 KB against a 400 KB budget.
Provenance, exact crops and reproduction commands are in `ASSET-LOG.md`.
Generated-media slots still waiting on Runway are in `ASSET-QUEUE.md`.

Every image here is a real render or a real screenshot from the shipped pendant-studio product.
None of them shows the client brand name, a client logo, a customer name, a staging URL, a price, or an identifiable face.
Alt text below is written to stay that way: describe the artefact, never name the brand.
Refer to the client in surrounding copy as "a bespoke jewellery house in Dubai" until they approve being named.

There are exactly two placements on the whole site: a case-study card in section 4 of a variation, and the `/work/jewelo` sub-page.
A card carries one still, at most 480px wide at 1x, never full-bleed, never behind text, always with the alt text from this table.
Everything else lives on `/work/jewelo` as a small still with a caption.

| File (1x + 2x) | Dimensions (1x / 2x) | Bytes (1x / 2x) | Size | Alt text suggestion | Suggested uses |
| --- | --- | --- | --- | --- | --- |
| `pendant-studio-silver.webp` + `pendant-studio-silver@2x.webp` | 561x701 / 1122x1402 | 54780 / 163028 | 53 / 159 KB | A silver name pendant on a fine chain, laid on cream silk and pale travertine, lit as a studio product shot | Default case-card still for the light directions (v2, v4), capped at 480px at 1x; opening plate on `/work/jewelo`. The "studio shot" of the four-view set. |
| `pendant-worn-silver.webp` + `pendant-worn-silver@2x.webp` | 561x611 / 1122x1222 | 29356 / 113334 | 29 / 111 KB | A silver name pendant worn at the collarbone, framed below the chin | `/work/jewelo` only, second plate of the four-view set. The "on model" view. |
| `pendant-close-silver.webp` + `pendant-close-silver@2x.webp` | 561x701 / 1122x1402 | 67148 / 176982 | 66 / 173 KB | Close detail of a silver cut-out name pendant showing the polished edges and the chain links | `/work/jewelo` only, third plate of the four-view set. The "close up" view. |
| `pendant-dark-silver.webp` + `pendant-dark-silver@2x.webp` | 561x701 / 1122x1402 | 18972 / 52322 | 19 / 51 KB | A silver name pendant resting on black velvet, lit as a dark editorial still | Case-card still for the dark directions (v1, v5), where a black ground meets the card without a seam; fourth plate on `/work/jewelo`. The "dark mood" view. |
| `pendant-studio-gold.webp` + `pendant-studio-gold@2x.webp` | 627x627 / 1254x1254 | 15280 / 48324 | 15 / 47 KB | A gold script name pendant with two small set stones, laid flat on a warm neutral ground | `/work/jewelo` only, first plate of the second design. Square crop, so it is the one that fits a card with a fixed aspect if a direction needs one. |
| `pendant-worn-gold.webp` + `pendant-worn-gold@2x.webp` | 561x614 / 1122x1227 | 22056 / 86874 | 22 / 85 KB | A gold script name pendant worn at the collarbone, framed below the chin | `/work/jewelo` only, second plate of the second design. |
| `pendant-dark-gold-emerald.webp` + `pendant-dark-gold-emerald@2x.webp` | 561x701 / 1122x1402 | 22484 / 69916 | 22 / 68 KB | A gold script name pendant set with four small emeralds, on black velvet | `/work/jewelo` only, third plate of the second design. Alternate to `pendant-dark-silver` in a dark case card, never both. |
| `poster-16x9.webp` | 1122x631 | 43566 | 43 KB | A gold script name pendant set with emeralds on black velvet, cropped wide | `/work/jewelo` only: the one wide plate on that page and the reduced-motion still for any queued loop there. It is not a hero and not a section bleed on any variation root. No 2x: the source does not allow one. |
| `ui-name-and-language.webp` + `ui-name-and-language@2x.webp` | 720x411 / 1440x822 | 10246 / 27966 | 10 / 27 KB | The name step of a jewellery design tool: a name field, a language toggle, an approved script-spelling field, and a live pendant preview | Step 1 of the flow on `/work/jewelo`; the case-card still when a direction wants Devonel's work rather than the client's product in the card. Proves TYPE NAME and CHOOSE LANGUAGE with spelling approval. |
| `ui-style-picker.webp` + `ui-style-picker@2x.webp` | 720x411 / 1440x822 | 11436 / 31466 | 11 / 31 KB | The style step of a jewellery design tool showing six lettering styles as selectable cards | Step 2 of the flow on `/work/jewelo`. Proves CHOOSE DESIGN and the six-style scope lock. |
| `ui-stones-and-setting.webp` + `ui-stones-and-setting@2x.webp` | 720x411 / 1440x822 | 11184 / 30368 | 11 / 30 KB | The stone step of a jewellery design tool: setting density and stone type beside a live pendant preview | Step 3 of the flow on `/work/jewelo`. Proves CUSTOMIZE. |
| `ui-review-spec.webp` + `ui-review-spec@2x.webp` | 720x411 / 1440x822 | 11672 / 32968 | 11 / 32 KB | A review screen listing script, layout, metal, stones, size and chain, with a spelling confirmation checkbox | Step 4 of the flow on `/work/jewelo`; the strongest alternative case-card still, because the approve-spelling gate is a Devonel decision rather than a client product. |
| `ui-generation-queue.webp` + `ui-generation-queue@2x.webp` | 460x230 / 920x460 | 3644 / 9340 | 4 / 9 KB | Four presentation views queued in parallel, labelled Studio, On model, Close up and Dark mood, each showing a queued state | Step 5 of the flow on `/work/jewelo`. Proves parallel generation with honest queued states. Not a proof-strip figure: proof carries no client imagery. |
| `ui-rtl-mirror.webp` + `ui-rtl-mirror@2x.webp` | 720x411 / 1440x822 | 10392 / 28128 | 10 / 27 KB | A design tool mirrored right to left, with the live preview on the right and the step rail reversed | Step 6 of the flow on `/work/jewelo`. Proves full RTL, not a translated LTR layout. |
| `ui-operator-console.webp` + `ui-operator-console@2x.webp` | 720x161 / 1440x322 | 5216 / 13102 | 5 / 13 KB | An operator work queue header showing counts for quote requests, in progress and ready | Step 7 of the flow on `/work/jewelo`, the last plate. Proves the operator side exists, with all order names cropped away. Not a proof strip and not a running head. |

## Using them

- Two placements, and no third. A case-study card in section 4 of a variation, and `/work/jewelo`. Nothing from this folder may appear in a hero, a proof strip, a services section, a process rail, a founders block, a final CTA or a footer, at any width, in any direction, including as a background, a bleed, a poster or a texture.
- One still per case card. The flagship card carries exactly one image at no more than 480px wide at 1x, sitting inside the card's own frame with text beside or under it, never behind it. The showcase cards carry none, because the two showcases are not shipped yet and an image would claim otherwise.
- Pick the card still by ground, not by taste: `pendant-dark-silver` for v1 Studio Dark and v5 Liquid Metal, `pendant-studio-silver` for v2 Shader Light and v4 Bento SaaS, and either one for v3 Scroll Story depending on where its case section sits on the night-to-day ramp. `ui-review-spec` replaces the pendant in any direction that would rather show the work than the product.
- `/work/jewelo` is where the set gets to be a set. The four `pendant-*-silver` files are one pendant photographed four ways and stay in the product's own order - studio, on model, close up, dark mood - because that order is the "four renders" claim in `01-business-brief.md` section 4. The three gold files follow as the second design. The seven `ui-*` files then run in product order: name and language, style picker, stones and setting, review spec, generation queue, RTL mirror, operator console.
- Everything on `/work/jewelo` is a small still with a caption, not a gallery of full-bleed images. Cap the plates at 480px wide at 1x there too, so the sub-page reads as a case write-up rather than a lookbook for the client.
- `ui-operator-console` and `ui-generation-queue` are wide strips, not full screens. Frame them as cropped panels; a browser chrome frame around them would read as a fake screenshot.
- Names visible on the pendants ("Layla", "Asma") and in the studio fields are the product's own preload test names, committed as fixtures. They are not customers. Do not caption them as customer orders.
- The client is never named. Captions and surrounding copy say "a bespoke jewellery house in Dubai", from `COPY.md`.
- A variation's own device - the assembling mark, the two-city shader, the sixteen-tick ramp, the honest board, the chrome orb - is what carries the hero. If a hero feels empty without one of these files, the device has failed and the fix is the device, not the image.

## Logo policy

The only logo on this site is the Devonel mark, already in the repo at `app/icon.svg` (a valve seen from above: off-white ground, near-black ring and crosshair, `#c8451c` centre dot) and rasterised at `public/icon-512.png`, `public/icon-192.png`, `app/apple-icon.png`, `app/opengraph-image.png` and `app/twitter-image.png`.
No client logo, no fake client logo, no invented partner strip, and no generated logo of any kind.
