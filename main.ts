import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word for your Wi-Fi: it was just here, mid-call, then gone
// without a word — the router ghosts you. Funny at once, true to how
// home Wi-Fi actually behaves, and a network name in its own right.
const entry = "Ghosting";

const words = entry.trim().split(/\s+/);
if (words.length !== 1 || words[0].length === 0) {
  throw new Error("entry must be exactly one word, no spaces");
}
const charCount = [...entry].length;
if (charCount < 1 || charCount > 20) {
  throw new Error("entry must be 1 to 20 characters");
}

// The grader sets MAKEFUN_OUTPUT_DIR; locally we fall back to out/.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
