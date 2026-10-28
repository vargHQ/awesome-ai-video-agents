/**
 * Keeps this public repo free of internal material. Fails when a tracked text file mentions
 * anything from the deny list (internal process names, private repos, unpublished studies).
 * Run: bun run guard   (also runs in CI on every pull request)
 */
import { readFile } from "node:fs/promises";

const DENY = [
  /\bPLAYBOOK\b/, /\bREPLENISH\b/, /vargHQ\/aeo\b/, /\bmarketplace-lifecycle\b/, /\bskills-marketplace\b/,
  /\bword\s?fit\b/i, /\b4,?455\b/, /agent discovery study/i, /\bnaming\.json\b/, /\bintents\.json\b/,
  /\btrend-radar\b/, /\bcard-drafts\b/, /\bpublisher-pass\b/, /\bcurator\b/i, /\blastmod\b/, /\bshare-cards?\b/,
  /\bVARG_SKILLS_KEY\b/, /\bskills:publish\b/, /\bINTERNAL_SECRET\b/, /\bvarg\.ai\/admin\b/,
  /sk-[A-Za-z0-9]{20,}/, /ghp_[A-Za-z0-9]{20,}/, /AKIA[0-9A-Z]{16}/, /xox[bp]-[A-Za-z0-9-]{10,}/,
];
const SKIP = [/^catalog\.json$/, /^scripts\/guard\.ts$/, /^examples\//, /^bun\.lock$/];

const proc = Bun.spawnSync(["git", "ls-files", "-z", "--cached", "--others", "--exclude-standard"]);
const files = new TextDecoder().decode(proc.stdout).split("\0").filter(Boolean).filter((f) => !SKIP.some((r) => r.test(f)));
let bad = 0;
for (const f of files) {
  let text: string;
  try { text = await readFile(f, "utf8"); } catch { continue; }
  if (text.includes("\u0000")) continue;
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    for (const r of DENY) if (r.test(line)) { console.error(`${f}:${i + 1}: matches ${r}`); bad++; }
  });
}
if (bad) { console.error(`\nguard: ${bad} hit(s). Remove internal references before publishing.`); process.exit(1); }
console.log(`guard: ${files.length} files clean`);
