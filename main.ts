import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🌞";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
