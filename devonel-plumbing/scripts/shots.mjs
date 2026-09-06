#!/usr/bin/env node
/**
 * shots.mjs - the single source of truth for redesign screenshots.
 *
 *   node scripts/shots.mjs <route> <label> [options]
 *
 *   node scripts/shots.mjs / switcher
 *   node scripts/shots.mjs /v1 v1-hero --sections hero,proof,services
 *   node scripts/shots.mjs /v3 v3 --sections hero,work --session my-run
 *
 * For every viewport in the matrix from docs/goal/06-verification-protocol.md it
 * opens http://localhost:3030<route> with ?chrome=0 (which removes the mini
 * switcher), sizes the viewport, waits for network idle and writes a full-page
 * PNG to docs/goal/shots/<label>/<WxH>.png. With --sections it also scrolls each
 * #anchor into view and writes a viewport-sized PNG per section. Console output
 * is collected per viewport into docs/goal/shots/<label>/console.txt.
 *
 * Options
 *   --sections a,b,c     also capture a viewport shot at each #anchor
 *   --session <name>     override the browser session (default: per label)
 *   --base <url>         override http://localhost:3030
 *   --ignore-console     report console errors but do not fail on them
 *   --keep-open          leave the browser session running afterwards
 *
 * Exit code is 0 only when every capture succeeded and no console errors were
 * seen (unless --ignore-console).
 */

import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const BIN = "agent-browser";
const DEFAULT_BASE = "http://localhost:3030";
const SHOTS_ROOT = path.resolve(process.cwd(), "docs/goal/shots");

/** docs/goal/06-verification-protocol.md, "Width and aspect matrix". */
const VIEWPORTS = [
  { w: 390, h: 844, name: "phone" },
  { w: 844, h: 390, name: "phone-landscape" },
  { w: 360, h: 780, name: "phone-small" },
  { w: 820, h: 1180, name: "tablet" },
  { w: 1180, h: 820, name: "tablet-landscape" },
  { w: 1280, h: 800, name: "laptop" },
  { w: 1536, h: 864, name: "desktop" },
  { w: 1920, h: 1080, name: "desktop-large" },
  { w: 2560, h: 1080, name: "ultrawide" },
];

// ---------------------------------------------------------------- arguments

function parseArgs(argv) {
  const positional = [];
  const flags = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) {
      positional.push(arg);
      continue;
    }
    const key = arg.slice(2);
    if (key === "ignore-console" || key === "keep-open") {
      flags[key] = true;
    } else {
      const value = argv[i + 1];
      if (value === undefined || value.startsWith("--")) die(`--${key} needs a value`);
      flags[key] = value;
      i += 1;
    }
  }
  return { positional, flags };
}

function die(message) {
  console.error(`\nshots.mjs: ${message}\n`);
  process.exit(1);
}

const { positional, flags } = parseArgs(process.argv.slice(2));
const [route, label] = positional;

if (!route || !label) {
  die("usage: node scripts/shots.mjs <route> <label> [--sections a,b,c] [--session name]");
}
if (!route.startsWith("/")) die(`route must start with "/", got "${route}"`);
if (!/^[a-z0-9][a-z0-9._-]*$/i.test(label)) {
  die(`label must be a plain filename fragment, got "${label}"`);
}

const base = flags.base ?? DEFAULT_BASE;
const sections = flags.sections
  ? flags.sections
      .split(",")
      .map((s) => s.trim().replace(/^#/, ""))
      .filter(Boolean)
  : [];

// ---------------------------------------------------------------- the CLI

function run(args, { allowFailure = false } = {}) {
  const result = spawnSync(BIN, args, { encoding: "utf8" });
  if (result.error) {
    if (result.error.code === "ENOENT") {
      die(
        `\`${BIN}\` is not on PATH. Screenshots are the proof for every section, so this is fatal.\n` +
          `Install it with \`npm i -g agent-browser && agent-browser install\`, then re-run.`
      );
    }
    if (allowFailure) return { ok: false, stdout: "", stderr: String(result.error) };
    die(`\`${BIN} ${args.join(" ")}\` failed: ${result.error.message}`);
  }
  const ok = result.status === 0;
  if (!ok && !allowFailure) {
    die(`\`${BIN} ${args.join(" ")}\` exited ${result.status}\n${result.stderr || result.stdout}`);
  }
  return { ok, stdout: result.stdout ?? "", stderr: result.stderr ?? "" };
}

function assertBinary() {
  const probe = spawnSync(BIN, ["--version"], { encoding: "utf8" });
  if (probe.error || probe.status !== 0) {
    die(
      `\`${BIN}\` is not usable (${probe.error ? probe.error.code : `exit ${probe.status}`}).\n` +
        `Install it with \`npm i -g agent-browser && agent-browser install\`, then re-run.`
    );
  }
  return probe.stdout.trim();
}

/** A session per label so two builders shooting different pages never collide. */
function resolveSession() {
  if (flags.session) return flags.session;
  const probe = spawnSync(BIN, ["session", "id", "--scope", "worktree", "--prefix", "devonel"], {
    encoding: "utf8",
  });
  const worktreeId =
    probe.status === 0 && probe.stdout.trim() ? probe.stdout.trim() : "devonel-shots";
  return `${worktreeId}-${label}`;
}

function browser(args, opts) {
  return run(["--session", session, ...args], opts);
}

function json(args) {
  const { ok, stdout } = browser([...args, "--json"], { allowFailure: true });
  if (!ok) return null;
  try {
    return JSON.parse(stdout);
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------- capturing

function targetUrl() {
  const url = new URL(route, base);
  url.searchParams.set("chrome", "0");
  return url.toString();
}

function readConsole() {
  const messages = json(["console"])?.data?.messages ?? [];
  const pageErrors = json(["errors"])?.data?.errors ?? [];
  const lines = [];
  for (const m of messages) {
    const type = m.type ?? "log";
    if (type === "error" || type === "warning" || type === "warn") {
      lines.push({ level: type === "error" ? "error" : "warning", text: m.text ?? "" });
    }
  }
  for (const e of pageErrors) {
    lines.push({ level: "error", text: e.message ?? e.text ?? JSON.stringify(e) });
  }
  return lines;
}

const binVersion = assertBinary();
const session = resolveSession();
const outDir = path.join(SHOTS_ROOT, label);
mkdirSync(outDir, { recursive: true });

const url = targetUrl();
console.log(`shots.mjs  ${binVersion}`);
console.log(`  url      ${url}`);
console.log(`  out      ${path.relative(process.cwd(), outDir)}`);
console.log(`  session  ${session}`);
if (sections.length) console.log(`  sections ${sections.join(", ")}`);
console.log("");

const rows = [];
const consoleLog = [`route: ${url}`, `session: ${session}`, `captured: ${new Date().toISOString()}`, ""];
let failures = 0;
let consoleErrors = 0;

for (const vp of VIEWPORTS) {
  const size = `${vp.w}x${vp.h}`;
  const row = { size, name: vp.name, page: "-", sections: 0, errors: 0, warnings: 0 };

  browser(["set", "viewport", String(vp.w), String(vp.h)]);
  browser(["console", "--clear"], { allowFailure: true });
  browser(["errors", "--clear"], { allowFailure: true });

  const opened = browser(["open", url], { allowFailure: true });
  if (!opened.ok) {
    row.page = "OPEN FAILED";
    failures += 1;
    rows.push(row);
    consoleLog.push(`## ${size} (${vp.name})`, `open failed: ${opened.stderr.trim()}`, "");
    continue;
  }

  browser(["wait", "--load", "networkidle"], { allowFailure: true });
  // Let fonts settle and any scroll-driven CSS reach its rest state.
  browser(["wait", "300"], { allowFailure: true });

  const pagePath = path.join(outDir, `${size}.png`);
  const shot = browser(["screenshot", "--full", pagePath], { allowFailure: true });
  row.page = shot.ok ? "ok" : "FAILED";
  if (!shot.ok) failures += 1;

  for (const section of sections) {
    const selector = `#${section}`;
    const into = browser(["scrollintoview", selector], { allowFailure: true });
    if (!into.ok) {
      failures += 1;
      consoleLog.push(`## ${size} (${vp.name})`, `missing anchor ${selector}`, "");
      continue;
    }
    browser(["wait", "250"], { allowFailure: true });
    const sectionPath = path.join(outDir, `${size}-${section}.png`);
    const sectionShot = browser(["screenshot", sectionPath], { allowFailure: true });
    if (sectionShot.ok) row.sections += 1;
    else failures += 1;
  }

  const lines = readConsole();
  row.errors = lines.filter((l) => l.level === "error").length;
  row.warnings = lines.filter((l) => l.level === "warning").length;
  consoleErrors += row.errors;

  consoleLog.push(`## ${size} (${vp.name})`);
  consoleLog.push(lines.length ? lines.map((l) => `${l.level}: ${l.text}`).join("\n") : "clean");
  consoleLog.push("");

  rows.push(row);
}

if (!flags["keep-open"]) browser(["close"], { allowFailure: true });

const consolePath = path.join(outDir, "console.txt");
writeFileSync(consolePath, `${consoleLog.join("\n")}\n`, "utf8");

// ---------------------------------------------------------------- summary

const header = ["viewport", "name", "page", "sections", "errors", "warnings"];
const table = [header, ...rows.map((r) => [r.size, r.name, r.page, String(r.sections), String(r.errors), String(r.warnings)])];
const widths = header.map((_, i) => Math.max(...table.map((r) => r[i].length)));
const line = (cells) => cells.map((c, i) => c.padEnd(widths[i])).join("  ");

console.log(line(header));
console.log(widths.map((w) => "-".repeat(w)).join("  "));
for (const r of table.slice(1)) console.log(line(r));
console.log("");
console.log(`console log: ${path.relative(process.cwd(), consolePath)}`);

if (failures) {
  console.error(`\n${failures} capture(s) failed.`);
  process.exit(1);
}
if (consoleErrors && !flags["ignore-console"]) {
  console.error(
    `\n${consoleErrors} console error(s) across the matrix. No console errors is a release gate;` +
      ` read ${path.relative(process.cwd(), consolePath)} or re-run with --ignore-console.`
  );
  process.exit(1);
}
console.log(`All ${VIEWPORTS.length} viewports captured.`);
