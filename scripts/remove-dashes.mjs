#!/usr/bin/env node
// One-shot utility: remove em (—) and en (–) dashes from all source/content files.
// Rule: " – "/" — " (space-dash-space) collapses to a single space; other occurrences
// of the dash character are simply deleted (no replacement).

import { readFile, writeFile, readdir, stat } from "node:fs/promises";
import { join, extname, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;

const SKIP_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  "out",
  "dist",
  ".vercel",
  ".turbo",
  "gsc-report",
  "public",
  "images",
  "scripts", // don't rewrite this script itself
]);

const ALLOWED_EXT = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".md",
  ".mdx",
  ".html",
  ".htm",
  ".css",
  ".json",
  ".txt",
  ".yml",
  ".yaml",
]);

// Files we should not touch even if extension matches.
const SKIP_FILES = new Set(["package-lock.json", "pnpm-lock.yaml", "yarn.lock"]);

const EN = "\u2013"; // –
const EM = "\u2014"; // —

/**
 * Replace behaviour:
 *   " – "  -> " "     (space, dash, space  ->  single space)
 *   " –"   -> " "     (trailing dash after space -> just the space)
 *   "– "   -> " "     (leading dash before space -> just the space)
 *   "–"    -> ""      (dash between non-space chars -> deleted)
 * Same for em dash.
 */
function stripDashes(s) {
  return s
    .replaceAll(` ${EN} `, " ")
    .replaceAll(` ${EM} `, " ")
    .replaceAll(` ${EN}`, " ")
    .replaceAll(` ${EM}`, " ")
    .replaceAll(`${EN} `, " ")
    .replaceAll(`${EM} `, " ")
    .replaceAll(EN, "")
    .replaceAll(EM, "");
}

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".") && entry.name !== ".vscode") continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      yield* walk(full);
    } else if (entry.isFile()) {
      if (SKIP_FILES.has(entry.name)) continue;
      const ext = extname(entry.name).toLowerCase();
      if (!ALLOWED_EXT.has(ext)) continue;
      yield full;
    }
  }
}

let changed = 0;
let scanned = 0;
const changedFiles = [];

for await (const file of walk(ROOT)) {
  scanned++;
  const original = await readFile(file, "utf8");
  if (!original.includes(EN) && !original.includes(EM)) continue;
  const updated = stripDashes(original);
  if (updated !== original) {
    await writeFile(file, updated, "utf8");
    changed++;
    changedFiles.push(relative(ROOT, file));
  }
}

console.log(`Scanned ${scanned} files, updated ${changed}.`);
for (const f of changedFiles) console.log(`  ${f}`);
