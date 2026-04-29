// Generate raster icon variants from the Devonel mark for iOS apple-touch
// (180x180), Android Chrome (192/512), and the OG share image (1200x630).
// Run with: node scripts/generate-icons.mjs

import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const appDir = path.join(root, "app");
const publicDir = path.join(root, "public");

const PAPER = "#eef0eb";
const INK = "#0e1410";
const INK2 = "#2c3530";
const VALVE = "#c8451c";

// Mark — used solo at small sizes and as part of the OG image.
function markSvg(viewBox, strokeWidth, dotR) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">
    <circle cx="16" cy="16" r="11" fill="none" stroke="${INK}" stroke-width="${strokeWidth}"/>
    <line x1="3" y1="16" x2="29" y2="16" stroke="${INK}" stroke-width="${strokeWidth}"/>
    <line x1="16" y1="3" x2="16" y2="29" stroke="${INK}" stroke-width="${strokeWidth}"/>
    <circle cx="16" cy="16" r="${dotR}" fill="${VALVE}"/>
  </svg>`;
}

function tile(size, padding, strokeWidth, dotR) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" fill="${PAPER}"/>
    <g transform="translate(${padding}, ${padding}) scale(${(size - padding * 2) / 32})">
      <circle cx="16" cy="16" r="11" fill="none" stroke="${INK}" stroke-width="${strokeWidth}"/>
      <line x1="3" y1="16" x2="29" y2="16" stroke="${INK}" stroke-width="${strokeWidth}"/>
      <line x1="16" y1="3" x2="16" y2="29" stroke="${INK}" stroke-width="${strokeWidth}"/>
      <circle cx="16" cy="16" r="${dotR}" fill="${VALVE}"/>
    </g>
  </svg>`;
}

async function pngFromSvg(svgString, outPath) {
  const buf = Buffer.from(svgString);
  await sharp(buf).png().toFile(outPath);
  console.log("wrote", outPath);
}

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <!-- editorial grid -->
  <g stroke="${INK}" stroke-opacity="0.06" stroke-width="1">
    ${Array.from({ length: 25 }, (_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="630"/>`).join("\n    ")}
    ${Array.from({ length: 13 }, (_, i) => `<line x1="0" y1="${i * 50}" x2="1200" y2="${i * 50}"/>`).join("\n    ")}
  </g>

  <!-- Top bar: mark + Devonel wordmark -->
  <g transform="translate(80, 80)">
    <g transform="scale(2.6)">
      <circle cx="16" cy="16" r="11" fill="none" stroke="${INK}" stroke-width="2"/>
      <line x1="3" y1="16" x2="29" y2="16" stroke="${INK}" stroke-width="2"/>
      <line x1="16" y1="3" x2="16" y2="29" stroke="${INK}" stroke-width="2"/>
      <circle cx="16" cy="16" r="3.5" fill="${VALVE}"/>
    </g>
    <text x="120" y="60" font-family="Newsreader, Georgia, serif" font-size="42" font-weight="600" fill="${INK}">Devonel</text>
  </g>

  <!-- Eyebrow rule -->
  <g transform="translate(80, 220)">
    <rect width="20" height="20" fill="${VALVE}"/>
    <text x="40" y="16" font-family="JetBrains Mono, ui-monospace, monospace" font-size="18" letter-spacing="3" fill="${INK2}">PROCESS PLUMBING &amp; AUTOMATION</text>
  </g>

  <!-- Headline -->
  <g transform="translate(80, 320)" font-family="Newsreader, Georgia, serif" font-weight="500" font-size="92" letter-spacing="-2">
    <text x="0" y="0" fill="${INK}">Your business <tspan fill="${VALVE}" font-style="italic">leaks</tspan> through</text>
    <text x="0" y="100" fill="${INK}">the seams between <tspan fill="#2962d6" font-style="italic">tools.</tspan></text>
  </g>

  <!-- Bottom rule + url -->
  <line x1="80" y1="560" x2="1120" y2="560" stroke="${INK}" stroke-opacity="0.2" stroke-width="1"/>
  <text x="80" y="595" font-family="JetBrains Mono, ui-monospace, monospace" font-size="16" letter-spacing="2" fill="${INK2}">DEVONEL.COM · PROCESS RE-ENGINEERING STUDIO</text>
</svg>`;

async function main() {
  await mkdir(publicDir, { recursive: true });

  // Apple touch icon (180x180) — iOS pulls this when user pins the site.
  await pngFromSvg(tile(180, 18, 2, 3.5), path.join(appDir, "apple-icon.png"));

  // Android / PWA icons
  await pngFromSvg(tile(192, 20, 2, 3.5), path.join(appDir, "icon-192.png"));
  await pngFromSvg(tile(512, 56, 2, 3.5), path.join(appDir, "icon-512.png"));

  // OG / Twitter share image
  await pngFromSvg(ogSvg, path.join(appDir, "opengraph-image.png"));
  await pngFromSvg(ogSvg, path.join(appDir, "twitter-image.png"));

  console.log("done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
