/**
 * Validates submissions/*.md (frontmatter) against the card format, and checks that the synced
 * tree is consistent (README markers filled, catalog.json parses, every how-to pick resolves).
 * Run: bun run validate
 */
import { readdir, readFile } from "node:fs/promises";

const AGENTS = new Set(["claude-code", "codex", "cursor", "openclaw", "gemini-cli", "windsurf", "opencode", "grok"]);
const SHELVES = new Set(["workflow", "prompt", "effect", "style", "guide", "model"]);
let errors = 0;
const fail = (f: string, m: string) => { console.error(`${f}: ${m}`); errors++; };

function frontmatter(src: string): Record<string, any> | null {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  return (Bun as any).YAML.parse(m[1]) as Record<string, any>;
}

// submissions
let subs: string[] = [];
try { subs = (await readdir("submissions")).filter((f) => f.endsWith(".md") && f !== "TEMPLATE.md" && f !== "README.md"); } catch {}
for (const file of subs) {
  const f = `submissions/${file}`;
  const fm = frontmatter(await readFile(f, "utf8"));
  if (!fm) { fail(f, "no frontmatter"); continue; }
  const slug = String(fm.slug ?? "");
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug) || slug.length > 64) fail(f, "slug must be kebab-case, ≤ 64 chars");
  if (file !== `${slug}.md`) fail(f, `file name must be ${slug}.md`);
  for (const k of ["name", "summary", "description", "type", "shelf", "category", "publisher", "source", "install", "agents"]) if (fm[k] == null || fm[k] === "") fail(f, `missing ${k}`);
  if (typeof fm.summary === "string" && fm.summary.length > 200) fail(f, "summary over 200 characters");
  if (fm.shelf && !SHELVES.has(fm.shelf)) fail(f, `shelf must be one of ${[...SHELVES].join(", ")}`);
  if (!["skill", "ref-pack"].includes(fm.type)) fail(f, "type must be skill or ref-pack");
  if (!fm.source?.url || !/^https?:\/\//.test(fm.source.url)) fail(f, "source.url must be an http(s) URL");
  if (!fm.source?.license) fail(f, "source.license missing (MIT, Apache-2.0, proprietary, …)");
  const install = fm.install ?? {};
  if (typeof install !== "object" || !Object.keys(install).length) fail(f, "install needs at least one agent → command");
  for (const [a, cmd] of Object.entries(install)) {
    if (!AGENTS.has(a)) fail(f, `unknown agent in install: ${a}`);
    if (typeof cmd !== "string" || /curl[^\n]*\|\s*(ba)?sh/.test(cmd)) fail(f, `install.${a}: must be a plain command, no curl | bash`);
  }
  if (!Array.isArray(fm.agents) || !fm.agents.every((a: string) => AGENTS.has(a))) fail(f, "agents must list known agents");
  if (!Array.isArray(fm.tags) || fm.tags.length < 2) fail(f, "give at least 2 tags");
  if (!fm.example?.url) console.warn(`${f}: no example; cards with an example are picked far more often`);
  if (fm.example?.url && !/^https?:\/\//.test(fm.example.url)) fail(f, "example.url must be an http(s) URL");
  if (/[Ѐ-ӿ]/.test(JSON.stringify(fm))) fail(f, "card text must be in English");
}

// synced tree
try {
  const cat = JSON.parse(await readFile("catalog.json", "utf8"));
  const slugs = new Set(cat.skills.map((s: any) => s.slug));
  for (const u of cat.useCases) for (const p of u.picks) if (!slugs.has(p)) console.warn(`catalog: how-to ${u.id} picks unknown skill ${p}`);
  const readme = await readFile("README.md", "utf8");
  for (const name of ["counts", "how-to", "shelves", "publishers"]) {
    const m = readme.match(new RegExp(`<!-- sync:${name}:start -->\\n([\\s\\S]*?)\\n<!-- sync:${name}:end -->`));
    if (!m || !m[1].trim()) fail("README.md", `sync block ${name} is empty: run bun run sync`);
  }
  // every relative link in README resolves
  const links = [...readme.matchAll(/\]\(((?!https?:|#|mailto:)[^)\s]+)\)/g)].map((m) => m[1].split("#")[0]);
  for (const l of new Set(links)) if (l && !(await Bun.file(l).exists())) fail("README.md", `broken link ${l}`);
} catch (e) { fail("catalog.json", String(e)); }

if (errors) { console.error(`\nvalidate: ${errors} error(s)`); process.exit(1); }
console.log(`validate: ${subs.length} submission(s) ok, tree consistent`);
