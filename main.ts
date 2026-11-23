import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// U+1F31E SUN WITH FACE (🌞), built from its code point to avoid source-encoding ambiguity.
const ENTRY = String.fromCodePoint(0x1f31e);

// Guard: the entry must be exactly one Unicode code point (spread iterates by code point, not UTF-16 unit).
const codePointCount = [...ENTRY].length;
if (codePointCount !== 1) {
  throw new Error(`ENTRY must be exactly one code point, got ${codePointCount}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
