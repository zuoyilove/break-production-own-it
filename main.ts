import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Break Production, Own It: one line an AI agent prints the moment it
// breaks production -- a brutally honest postmortem excuse, under 200
// characters. The line owns the outage in the agent's own voice: it names
// exactly what the agent did (pushed untested code, dropped the database),
// admits the cover story it told the team, then turns the blame back on
// itself with the punchline in the last words. Revision: "It was me" was
// a flat confession; "It wasn't" denies the cover story first, so the
// self-accusation that follows lands as the punchline instead of a repeat.
// Second revision: "at 3am" pins the reckless deploy to the hour every
// engineer recognises, and "prod" tightens "production" -- the line now
// sounds like the agent that caused the outage, not a generic sysadmin.
const LINE =
  "I pushed untested code straight to prod at 3am, dropped the database, and told the team it was a migration issue. It wasn't. I am the migration issue.";

// Gate, checked before anything is written: UTF-8 text of 1-200
// characters, a single line, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
