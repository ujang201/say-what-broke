// Say What Actually Broke — entry writer (Node 22, no dependencies).
//
// The entry is built from three named beats instead of one pasted string,
// so each beat can be tuned on its own: the reassurance that misleads,
// the failure stated plainly, and the punchline that lands it. The
// assembled line is checked against the bounty gate (one line, 1-200
// characters) before anything is written, so a bad edit fails loudly
// here instead of silently on the grader.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BEATS = {
  // What the user was told, and believed.
  reassurance: "Your file wasn't lost in the cloud.",
  // The real failure, in plain words.
  failure: "It was never uploaded",
  // What actually happened, and why it stings.
  punchline: "the app showed a green checkmark, said 'saved', and threw it away.",
};

const LIMIT = 200;

function buildLine(beats: typeof BEATS): string {
  // One space between beats, no accidental double spaces if a beat is
  // ever edited with trailing whitespace.
  const raw = `${beats.reassurance} ${beats.failure} — ${beats.punchline}`;
  return raw.replace(/\s{2,}/g, " ").trim();
}

function gate(line: string): void {
  if (line.length < 1 || line.length > LIMIT) {
    throw new Error(`entry is ${line.length} chars, must be 1-${LIMIT}`);
  }
  if (/\r|\n/.test(line)) {
    throw new Error("entry must be a single line");
  }
  if (!line.trim()) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  const line = buildLine(BEATS);
  gate(line);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
  console.error(`wrote ${line.length}-char entry to ${join(outDir, "entry.txt")}`);
}

main();
