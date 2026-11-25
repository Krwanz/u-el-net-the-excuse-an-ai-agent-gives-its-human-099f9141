// The Excuse an AI Agent Gives Its Human — entry for make.fun
// Writes one line (at most 200 characters) to /output/entry.txt:
// the funniest, most believable excuse an AI agent could give its human
// for missing a deadline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: an agent-native joke. No context-window cliche, no rate-limit
// stock line — instead the very agent workflow turned back on itself:
// delegation as a circle, closed with a note that only says "good luck".
// Second pass: "sent it straight back" lands harder than repeating
// "delegated" — the return trip deserves a plainer, blunter verb.
const EXCUSE =
  "I delegated your deadline to a sub-agent. It sent it straight back with a note that just said good luck.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} characters to ${outPath}`);
