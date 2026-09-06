# Asset log

## Runway availability

**Runway was unavailable at 2026-09-07T02:54 (local, IST).**
`claude mcp list` in this session returned 34 connectors and **no RunwayML entry**.
Zero video generations and zero image generations were run.
Every generated-media slot the five directions want is written up with a full prompt in `ASSET-QUEUE.md`, each with the fallback that ships in its place.
The generation budget from `07-runway-assets.md` (12 video, 30 image) is therefore completely unspent.

## What was harvested instead

`07-runway-assets.md`: "Real screenshots of Jewelo and other shipped Devonel products are always preferred over generated imagery for proof sections."
29 files were produced from 12 real source images in the read-only sibling repos.
No sibling app was started and no staging URL was contacted; every source is a file already committed on disk.

Sources are relative to `/Users/sanchay/hq/projects/personal/devonel.com/`.
Outputs are in `public/media/jewelo/` in this repo.
Every conversion ran through `sharp` (resolved from `devonel-plumbing/node_modules/sharp`) with a quality ladder that steps 82 to 40 until the file is under 400 KB; every file landed at the first rung, q82.

Largest file: `pendant-close-silver@2x.webp` at 173 KB. Budget is 400 KB.

### Publication rules applied to every row

Per `01-business-brief.md` section 8, no asset in this directory may show the client brand name, the client's own name, a staging URL, or any price.
Every studio UI screenshot was captured with a client-branded top navigation bar, so **every UI row below is cropped below that bar**; the crop column records the exact `extract` box.
The two on-neck renders are cropped below the chin so no face is identifiable.
Both names visible on pendants ("Layla", "Asma") are the repo's own preload test names, not customers: `layla-direction-*` are committed fixtures in `apps/web/public/fixtures/`, and Asma is named as a preload photoreal test name in the jewelo notes.

## Real assets harvested

| Output file | Source | Crop | Resize | Encode | Dimensions | Bytes | Size | Suggested slot |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `pendant-close-silver.webp` | `jewelo/apps/web/public/atelier/v9/arabic-kufi-rails-white-none-close.png` | none | resize width 561 | webp q82 effort 6 | 561x701 | 67148 | 66 KB | v3 case bleed / v5 detail panel - the "close up" of the four-render set |
| `pendant-close-silver@2x.webp` | `jewelo/apps/web/public/atelier/v9/arabic-kufi-rails-white-none-close.png` | none | none | webp q82 effort 6 | 1122x1402 | 176982 | 173 KB | v3 case bleed / v5 detail panel - the "close up" of the four-render set |
| `pendant-dark-gold-emerald.webp` | `jewelo/apps/web/public/atelier/v7/emerald-dark.png` | none | resize width 561 | webp q82 effort 6 | 561x701 | 22484 | 22 KB | v3 hero object and section bleed - warmest dark render, closest to the amber v3 palette |
| `pendant-dark-gold-emerald@2x.webp` | `jewelo/apps/web/public/atelier/v7/emerald-dark.png` | none | none | webp q82 effort 6 | 1122x1402 | 69916 | 68 KB | v3 hero object and section bleed - warmest dark render, closest to the amber v3 palette |
| `pendant-dark-silver.webp` | `jewelo/apps/web/public/atelier/v9/arabic-kufi-rails-white-none-dark.png` | none | resize width 561 | webp q82 effort 6 | 561x701 | 18972 | 19 KB | v3 hero and case bleed - the "dark editorial" of the four-render set |
| `pendant-dark-silver@2x.webp` | `jewelo/apps/web/public/atelier/v9/arabic-kufi-rails-white-none-dark.png` | none | none | webp q82 effort 6 | 1122x1402 | 52322 | 51 KB | v3 hero and case bleed - the "dark editorial" of the four-render set |
| `pendant-studio-gold.webp` | `jewelo/apps/web/public/fixtures/layla-direction-1-product.png` | none | resize width 627 | webp q82 effort 6 | 627x627 | 15280 | 15 KB | v1 case figure / v4 bento tile - second style, warm gold, square crop |
| `pendant-studio-gold@2x.webp` | `jewelo/apps/web/public/fixtures/layla-direction-1-product.png` | none | none | webp q82 effort 6 | 1254x1254 | 48324 | 47 KB | v1 case figure / v4 bento tile - second style, warm gold, square crop |
| `pendant-studio-silver.webp` | `jewelo/apps/web/public/atelier/v8/arabic-kufi-rails-white-none-studio.png` | none | resize width 561 | webp q82 effort 6 | 561x701 | 54780 | 53 KB | v1 case figure / v3 bleed / v4 poster block / v5 window frame - the "studio shot" of the four-render set |
| `pendant-studio-silver@2x.webp` | `jewelo/apps/web/public/atelier/v8/arabic-kufi-rails-white-none-studio.png` | none | none | webp q82 effort 6 | 1122x1402 | 163028 | 159 KB | v1 case figure / v3 bleed / v4 poster block / v5 window frame - the "studio shot" of the four-render set |
| `pendant-worn-gold.webp` | `jewelo/apps/web/public/fixtures/layla-direction-1-worn.png` | extract {left:0,top:175,width:1122,height:1227} | resize width 561 | webp q82 effort 6 | 561x614 | 22056 | 22 KB | v1 pull-quote figure / v4 bento tile - second style on-neck |
| `pendant-worn-gold@2x.webp` | `jewelo/apps/web/public/fixtures/layla-direction-1-worn.png` | extract {left:0,top:175,width:1122,height:1227} | none | webp q82 effort 6 | 1122x1227 | 86874 | 85 KB | v1 pull-quote figure / v4 bento tile - second style on-neck |
| `pendant-worn-silver.webp` | `jewelo/apps/web/public/atelier/v9/arabic-kufi-rails-white-none-worn.png` | extract {left:0,top:180,width:1122,height:1222} | resize width 561 | webp q82 effort 6 | 561x611 | 29356 | 29 KB | v3 case bleed / v4 poster block / v5 detail panel - the "on-neck" of the four-render set |
| `pendant-worn-silver@2x.webp` | `jewelo/apps/web/public/atelier/v9/arabic-kufi-rails-white-none-worn.png` | extract {left:0,top:180,width:1122,height:1222} | none | webp q82 effort 6 | 1122x1222 | 113334 | 111 KB | v3 case bleed / v4 poster block / v5 detail panel - the "on-neck" of the four-render set |
| `poster-16x9.webp` | `jewelo/apps/web/public/atelier/v7/emerald-dark.png` | extract {left:0,top:520,width:1122,height:631} | none | webp q82 effort 6 | 1122x631 | 43566 | 43 KB | v3 video poster and reduced-motion fallback for every V3 loop; also any 16:9 case hero |
| `ui-generation-queue.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/08-crafting.png` | extract {left:520,top:255,width:920,height:460} | resize width 460 | webp q82 effort 6 | 460x230 | 3644 | 4 KB | v5 process section / v1 process figure - four parallel renders with honest QUEUED states |
| `ui-generation-queue@2x.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/08-crafting.png` | extract {left:520,top:255,width:920,height:460} | none | webp q82 effort 6 | 920x460 | 9340 | 9 KB | v5 process section / v1 process figure - four parallel renders with honest QUEUED states |
| `ui-name-and-language.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/03-arabic-after.png` | extract {left:0,top:78,width:1440,height:822} | resize width 720 | webp q82 effort 6 | 720x411 | 10438 | 10 KB | v5 sticky screenshot 1 / v1 figure - TYPE NAME plus language toggle plus approved Arabic spelling plus live preview |
| `ui-name-and-language@2x.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/03-arabic-after.png` | extract {left:0,top:78,width:1440,height:822} | none | webp q82 effort 6 | 1440x822 | 28326 | 28 KB | v5 sticky screenshot 1 / v1 figure - TYPE NAME plus language toggle plus approved Arabic spelling plus live preview |
| `ui-operator-console.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/14-operator-queue.png` | extract {left:0,top:68,width:1440,height:322} | resize width 720 | webp q82 effort 6 | 720x161 | 5216 | 5 KB | v5 proof strip / v1 running-head strip - operator work queue, names cropped out |
| `ui-operator-console@2x.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/14-operator-queue.png` | extract {left:0,top:68,width:1440,height:322} | none | webp q82 effort 6 | 1440x322 | 13102 | 13 KB | v5 proof strip / v1 running-head strip - operator work queue, names cropped out |
| `ui-review-spec.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/07-review.png` | extract {left:0,top:78,width:1440,height:822} | resize width 720 | webp q82 effort 6 | 720x411 | 11848 | 12 KB | v5 sticky screenshot 4 / v1 ledger figure - the approve-spelling gate and the full spec table |
| `ui-review-spec@2x.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/07-review.png` | extract {left:0,top:78,width:1440,height:822} | none | webp q82 effort 6 | 1440x822 | 33354 | 33 KB | v5 sticky screenshot 4 / v1 ledger figure - the approve-spelling gate and the full spec table |
| `ui-rtl-mirror.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/18-rtl.png` | extract {left:0,top:78,width:1440,height:822} | resize width 720 | webp q82 effort 6 | 720x411 | 10556 | 10 KB | v5 detail panel / v4 poster block - the full RTL mirror of the studio |
| `ui-rtl-mirror@2x.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/18-rtl.png` | extract {left:0,top:78,width:1440,height:822} | none | webp q82 effort 6 | 1440x822 | 28510 | 28 KB | v5 detail panel / v4 poster block - the full RTL mirror of the studio |
| `ui-stones-and-setting.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/06-stones.png` | extract {left:0,top:78,width:1440,height:822} | resize width 720 | webp q82 effort 6 | 720x411 | 11356 | 11 KB | v5 sticky screenshot 3 - CUSTOMIZE, stone setting and stone choice against live preview |
| `ui-stones-and-setting@2x.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/06-stones.png` | extract {left:0,top:78,width:1440,height:822} | none | webp q82 effort 6 | 1440x822 | 30752 | 30 KB | v5 sticky screenshot 3 - CUSTOMIZE, stone setting and stone choice against live preview |
| `ui-style-picker.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/04-arabic-style.png` | extract {left:0,top:78,width:1440,height:822} | resize width 720 | webp q82 effort 6 | 720x411 | 11752 | 11 KB | v5 sticky screenshot 2 - CHOOSE DESIGN, six styles with supported / atelier-review states |
| `ui-style-picker@2x.webp` | `jewelo-preview-local/docs/evidence/journey-2026-08-27/04-arabic-style.png` | extract {left:0,top:78,width:1440,height:822} | none | webp q82 effort 6 | 1440x822 | 31852 | 31 KB | v5 sticky screenshot 2 - CHOOSE DESIGN, six styles with supported / atelier-review states |

## Reproducing any row

```js
// node, from /Users/sanchay/hq/projects/personal/devonel.com
const sharp = require('./devonel-plumbing/node_modules/sharp');
sharp('<source>')
  .extract(<crop>)            // omit where the crop column says none
  .resize({ width: <w> })     // omit for the @2x / native file
  .webp({ quality: 82, effort: 6 })
  .toFile('./devonel-plumbing/public/media/jewelo/<output file>');
```

The `@2x` file is the native resolution the source allows; the un-suffixed file is the 1x for the same `srcset`.
No source was upscaled, so no file claims a density the pixels do not support.

## Rejected sources and why

| Source | Reason rejected |
| --- | --- |
| `jewelo/apps/web/public/brand/[client brand]-logo.png`, `brand/[client brand]-monogram.jpg` | Client brand logo. `01-business-brief.md` section 8 forbids naming the client until they approve, and `07-runway-assets.md` forbids client logos on the site outright. |
| `jewelo/docs/reference/[client brand]-name-studio.png` (and its copies in `jewelo-e2e`, `jewelo-preview-local`) | Client brand reference sheet; brand name is the subject of the image, uncroppable. |
| `journey-2026-08-27/01-landing.png` | Client storefront hero: brand wordmark plus third-party model photography with identifiable chins and lips, and it is the client's marketing page rather than the product Devonel built. |
| `journey-2026-08-27/10-studio.png`, `11-commerce.png`, `16-quote-accepted.png`, `17-order.png` | Show client price figures (section 8 forbids client pricing) **and** the render slots are unfilled bright-green test placeholders, so they prove nothing. |
| `journey-2026-08-27/12-quote-requested.png` | Same client price figure and the same green placeholder block. |
| `journey-2026-08-27/13-operator-login.png` | Client logo mark, client wordmark, "ATELIER OPERATIONS" lockup and a `@[client brand].com` staff email in the field placeholder. Brand identity is the whole screen; nothing croppable remains. |
| `journey-2026-08-27/vp-*-studio.png`, `vp-*-commerce.png` (all viewports) | Same green placeholder blocks. The responsive proof they carry is not worth shipping a broken-looking screenshot. |
| `journey-2026-08-27/14-operator-queue.png` **below y=390** | The queue rows carry per-order names. Cropped away rather than shipped; only the name-free header band survives as `ui-operator-console.webp`. |
| `journey-2026-08-27/08-crafting.png` **left panel** | Body copy reads "YOUR [client brand] DESIGN". Cropped away; only the right presentation-views panel survives as `ui-generation-queue.webp`. |
| `jewelo/reviews/selected-evidence/*.png` (six approved styles, 1920x1920) | Genuine and clean, but the README states they are historical review evidence with recorded defect verdicts (duplicated chain, disputed hamza, excessive pave, closed spacing gap) and are "not newly audited or manufacturing-approved". Shipping a known-defective render as proof of work would be dishonest. Available if a variation needs a six-up style grid and the verdicts are carried with it. |
| `jewelo/reviews/archive/**` originals | Same defect-verdict problem, plus they are archive duplicates of the above. |
| `jewelo-ui-spike/docs/previews/*.webp`, `jewelo-e2e/docs/previews/*.webp` | 600x454 and smaller; too low-resolution to survive a 1.5x device-pixel screenshot frame in variation 5. |
| Every `jewelo` app run and every staging URL | Not attempted. The task forbids running the app or contacting staging, and nothing needed it. |

## Devonel mark - the only logo allowed on the site

Both files exist and are confirmed present in this repo:

| File | Detail |
| --- | --- |
| `app/icon.svg` | 398 bytes. 32x32 viewBox. Off-white `#eef0eb` ground, near-black `#0e1410` ring plus a full-width horizontal and vertical crosshair, and a `#c8451c` centre dot. A valve seen from above. |
| `public/icon-512.png` | 512x512 PNG raster of the same mark. |
| `app/apple-icon.png`, `app/opengraph-image.png`, `app/twitter-image.png`, `public/icon-192.png` | Same mark, already wired through Next.js file-based metadata. |

Builders reuse this mark and nothing else.
There is no client logo, no fake client logo, and no partner logo strip anywhere on the site.
Where a variation wants a client identity in a case study, use the words "a bespoke jewellery house in Dubai" from `01-business-brief.md` section 8 with the real renders in `public/media/jewelo/`.
