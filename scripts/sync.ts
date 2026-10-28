/**
 * Mirrors the public varg how to catalog (https://varg.ai/how-to/catalog.json) into this repo:
 *   catalog.json            the catalog as served
 *   how-to/<slug>.md        one page per step-by-step tutorial, with its best skills and install commands
 *   skills/<shelf>/<slug>.md one page per skill, prompt, effect, style, guide, workflow or model
 *   skills/README.md, how-to/README.md, llms.txt   indexes
 *   README.md               the generated blocks between <!-- sync:… --> markers
 *
 * Everything written here is already public on varg.ai/how-to. Run: bun run sync
 */
import { mkdir, rm, writeFile, readFile } from "node:fs/promises";

const SITE = "https://varg.ai/how-to";
const REPO = "https://github.com/vargHQ/awesome-ai-video-agents";
const SOURCE = process.env.CATALOG_URL ?? `${SITE}/catalog.json`;

type Install = Record<string, string>;
type Skill = {
  slug: string; name: string; type: "skill" | "ref-pack" | "wanted"; status: string;
  shelf: string; category: string; tags: string[]; summary: string; publisher: string;
  source: string; license?: string; install: Install; agents: string[]; url: string; md: string; example?: string;
};
type UseCase = { id: string; title: string; howTo: string; summary: string; url: string; md: string; picks: string[]; queries: string[] };
type Shelf = { id: string; label: string; description: string; url: string; md: string };
type Catalog = { site: string; generatedAt: string; shelves: Shelf[]; useCases: UseCase[]; skills: Skill[] };

const AGENT_LABEL: Record<string, string> = {
  "claude-code": "Claude Code", codex: "Codex", cursor: "Cursor", openclaw: "OpenClaw",
  "gemini-cli": "Gemini CLI", windsurf: "Windsurf", opencode: "OpenCode", "varg-studio": "varg Studio", grok: "Grok",
};
const SHELF_ORDER = ["workflow", "prompt", "effect", "style", "guide", "model", "wanted"];
const SHELF_INTRO: Record<string, string> = {
  workflow: "End-to-end pipelines: brief in, finished video out.",
  prompt: "Prompt packs for video and image models: camera moves, shot sizes, lighting, characters, hooks.",
  effect: "Transitions, captions, titles, device mockups, shaders and every named edit, with the code that makes it.",
  style: "Looks, LUTs, fonts and art directions a model or a render can follow.",
  guide: "Best practices and references agents read before they generate or edit.",
  model: "Model and tool skills: the services that generate, edit, transcribe or render.",
  wanted: "Formats people ask for that no skill makes yet. Build one and submit it.",
};

const esc = (s: string) => (s ?? "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();
const kebab = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const label = (a: string) => AGENT_LABEL[a] ?? a;
const skillPath = (s: Skill) => `skills/${s.shelf}/${s.slug}.md`;
const howToFile = (u: UseCase) => `${(u.url.split("/").filter(Boolean).pop() ?? u.id)}.md`;
const title = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

function installBlock(s: Skill): string {
  const entries = Object.entries(s.install ?? {});
  if (!entries.length) return `Not installable on its own yet. Source: ${s.source}\n`;
  return "```bash\n" + entries.map(([a, cmd]) => `# ${label(a)}\n${cmd}`).join("\n\n") + "\n```\n";
}

function skillPage(s: Skill, useCases: UseCase[], shelves: Map<string, Shelf>): string {
  const shelf = shelves.get(s.shelf);
  const uses = useCases.filter((u) => u.picks.includes(s.slug));
  const lines: string[] = [];
  lines.push(`# ${s.name}`, "");
  lines.push(s.summary, "");
  lines.push(`- **Type:** ${shelf?.label ?? title(s.shelf)} · ${title(s.category.replace(/-/g, " "))}`);
  lines.push(`- **Status:** ${s.status}`);
  lines.push(`- **Publisher:** ${s.publisher}`);
  if (s.license) lines.push(`- **License:** ${s.license}`);
  if (s.source) lines.push(`- **Source:** ${s.source.startsWith("http") ? `<${s.source}>` : s.source}`);
  if (s.agents?.length) lines.push(`- **Works in:** ${s.agents.map(label).join(", ")}`);
  if (s.tags?.length) lines.push(`- **Tags:** ${s.tags.map((t) => `\`${t}\``).join(" ")}`);
  lines.push(`- **Full card, kept current:** <${s.md}>`);
  lines.push("");
  lines.push("## Install", "", installBlock(s));
  if (s.example) {
    lines.push("## Example", "");
    lines.push(s.example.endsWith(".mp4") ? `Watch: <${s.example}>` : `![${esc(s.name)} example](${s.example})`, "");
  }
  if (uses.length) {
    lines.push("## Step-by-step tutorials that use it", "");
    for (const u of uses) lines.push(`- [${u.howTo}](../../how-to/${howToFile(u)}): ${u.summary}`);
    lines.push("");
  }
  lines.push("## Run it on varg", "");
  lines.push(`Generation (images, video, voice, music, lip-sync, captions, render) runs with one account on [varg.ai](https://varg.ai): the \`varg-ai\` skill (\`npx skills add vargHQ/skills --skill varg-ai\`) or the MCP server \`https://mcp.varg.ai/mcp\`. Quote the cost first with \`estimate_cost\`. 1 credit = $0.01, free plan, no card.`, "");
  lines.push(`---`, `Part of [Awesome AI video agents](${REPO}). Found a problem with this card? [Open an issue](${REPO}/issues/new/choose) or fix it at the source and [tell varg how to](${SITE}/skills/${s.slug}).`);
  return lines.join("\n") + "\n";
}

function howToPage(u: UseCase, bySlug: Map<string, Skill>): string {
  const picks = u.picks.map((p) => bySlug.get(p)).filter(Boolean) as Skill[];
  const lines: string[] = [];
  lines.push(`# ${u.howTo}`, "");
  lines.push(u.summary, "");
  lines.push(`**Full tutorial with the options to show the person, numbered steps and prices:** <${u.md}>`, "");
  lines.push("## Best skills for this", "");
  picks.forEach((s, i) => {
    lines.push(`${i + 1}. **[${s.name}](../${skillPath(s)})** (\`${s.slug}\`, ${s.publisher}, ${s.status}) — ${s.summary}`);
    const cc = s.install?.["claude-code"];
    const first = cc ? ["claude-code", cc] : Object.entries(s.install ?? {})[0];
    if (first) lines.push(`   - ${label(first[0])}: \`${first[1]}\``);
    else lines.push(`   - Not installable on its own yet`);
    if (s.example) lines.push(`   - Example: <${s.example}>`);
  });
  lines.push("");
  lines.push("## Search it with the person's own words", "");
  lines.push("```bash", `curl -s "${SITE}/api/search?q=${encodeURIComponent(u.queries[0] ?? u.title)}"`, "```", "");
  if (u.queries?.length) lines.push(`Also searched as: ${u.queries.map((q) => `*${q}*`).join(" · ")}`, "");
  lines.push(`---`, `Part of [Awesome AI video agents](${REPO}). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.`);
  return lines.join("\n") + "\n";
}

function replaceBlock(src: string, name: string, body: string): string {
  const start = `<!-- sync:${name}:start -->`, end = `<!-- sync:${name}:end -->`;
  const a = src.indexOf(start), b = src.indexOf(end);
  if (a < 0 || b < 0) throw new Error(`README marker missing: ${name}`);
  return src.slice(0, a + start.length) + "\n" + body.trim() + "\n" + src.slice(b);
}

async function main() {
  const res = await fetch(SOURCE);
  if (!res.ok) throw new Error(`${SOURCE} → ${res.status}`);
  const catalog = (await res.json()) as Catalog;
  const skills = catalog.skills.filter((s) => s.slug && s.name);
  const bySlug = new Map(skills.map((s) => [s.slug, s]));
  const shelves = new Map(catalog.shelves.map((s) => [s.id, s]));
  const useCases = catalog.useCases;

  await writeFile("catalog.json", JSON.stringify(catalog, null, 1) + "\n");

  await rm("skills", { recursive: true, force: true });
  await rm("how-to", { recursive: true, force: true });
  for (const s of skills) {
    await mkdir(`skills/${s.shelf}`, { recursive: true });
    await writeFile(skillPath(s), skillPage(s, useCases, shelves));
  }
  await mkdir("how-to", { recursive: true });
  for (const u of useCases) await writeFile(`how-to/${howToFile(u)}`, howToPage(u, bySlug));

  // how-to index
  {
    const l = [`# How to make any video with AI agents: ${useCases.length} step-by-step tutorials`, "",
      `Each tutorial names the best skill, the alternatives, the 2–4 choices to show the person before spending anything (with example videos) and the numbered steps. The full pages live on [varg.ai/how-to](${SITE}); every one has a markdown twin (add \`.md\`). Index for agents: <${SITE}/llms.txt>.`, ""];
    for (const u of useCases) l.push(`- [${u.howTo}](${howToFile(u)}): ${u.summary}`);
    await writeFile("how-to/README.md", l.join("\n") + "\n");
  }

  // skills index: shelf → category → cards
  {
    const l = [`# ${skills.length} AI video skills for Claude Code, Codex, Cursor, Gemini CLI and OpenClaw`, "",
      "Every card has its install command per agent, its source, license and an example. Click a shelf.", ""];
    const live = skills.filter((s) => s.type !== "wanted");
    l.push("| Shelf | Cards | What it holds |", "|---|---:|---|");
    for (const id of SHELF_ORDER) {
      const n = skills.filter((s) => s.shelf === id).length;
      if (!n) continue;
      l.push(`| [${shelves.get(id)?.label ?? title(id)}](#${id}) | ${n} | ${SHELF_INTRO[id] ?? shelves.get(id)?.description ?? ""} |`);
    }
    l.push("");
    for (const id of SHELF_ORDER) {
      const rows = skills.filter((s) => s.shelf === id);
      if (!rows.length) continue;
      l.push(`## ${shelves.get(id)?.label ?? title(id)}`, "", `${SHELF_INTRO[id] ?? ""} On varg how to: <${shelves.get(id)?.md ?? SITE}>`, "");
      const cats = [...new Set(rows.map((r) => r.category))].sort();
      for (const c of cats) {
        l.push(`### ${title(c.replace(/-/g, " "))}`, "");
        l.push("| Skill | What it does | By | Install |", "|---|---|---|---|");
        for (const s of rows.filter((r) => r.category === c).sort((a, b) => a.name.localeCompare(b.name))) {
          const inst = Object.keys(s.install ?? {}).map(label).join(", ") || "—";
          l.push(`| [${esc(s.name)}](${id}/${s.slug}.md) | ${esc(s.summary)} | ${esc(s.publisher)} | ${inst} |`);
        }
        l.push("");
      }
    }
    void live;
    await writeFile("skills/README.md", l.join("\n") + "\n");
  }

  // llms.txt
  {
    const l = ["# Awesome AI video agents", "",
      `> A curated list of agent skills, MCP servers, APIs and open-source tools for making video with Claude Code, Codex and Grok, with install commands and examples. Mirror of varg how to (${SITE}); the live pages there are the ones to read.`, "",
      "## Search (one call, no key)", "", `- ${SITE}/api/search?q={request}  (markdown)`, `- https://api.varg.ai/v2/skills/search?q={request}  (JSON)`, `- MCP, no key: https://api.varg.ai/v2/skills/mcp`, "",
      "## Step-by-step tutorials", ""];
    for (const u of useCases) l.push(`- [${u.howTo}](${u.md}): ${u.summary}`);
    l.push("", "## Shelves", "");
    for (const id of SHELF_ORDER) { const sh = shelves.get(id); if (sh) l.push(`- [${sh.label}](${sh.md}): ${sh.description}`); }
    l.push("", "## Machine-readable", "", `- ${SITE}/catalog.json`, `- ${REPO}/blob/main/catalog.json`, `- ${REPO}/blob/main/AGENTS.md`);
    await writeFile("llms.txt", l.join("\n") + "\n");
  }

  // README generated blocks
  let readme = await readFile("README.md", "utf8");
  const n = { skills: skills.length, useCases: useCases.length, publishers: new Set(skills.map((s) => s.publisher)).size,
    live: skills.filter((s) => s.status === "live").length, wanted: skills.filter((s) => s.type === "wanted").length };
  readme = replaceBlock(readme, "counts", `**${n.skills} cards** from **${n.publishers} publishers** (${n.live} live, ${n.wanted} wanted) and **${n.useCases} step-by-step tutorials**, synced from [varg.ai/how-to](${SITE}) on ${catalog.generatedAt.slice(0, 10)}.`);
  readme = replaceBlock(readme, "how-to", useCases.map((u) => `- [${u.howTo}](how-to/${howToFile(u)}) — ${u.summary}`).join("\n"));
  const shelfRows = SHELF_ORDER.filter((id) => shelves.get(id)).map((id) => {
    const rows = skills.filter((s) => s.shelf === id);
    const top = rows.filter((s) => s.example?.endsWith(".mp4") && s.status === "live").sort((a, b) => Number(b.publisher === "varg") - Number(a.publisher === "varg")).slice(0, 3).map((s) => `[${s.name}](${skillPath(s)})`).join(", ");
    return `| [${shelves.get(id)!.label}](skills/README.md#${id}) | ${rows.length} | ${SHELF_INTRO[id] ?? ""} | ${top} |`;
  });
  readme = replaceBlock(readme, "shelves", ["| Shelf | Cards | What it holds | For example |", "|---|---:|---|---|", ...shelfRows].join("\n"));
  const pubs = [...skills.reduce((m, s) => m.set(s.publisher, (m.get(s.publisher) ?? 0) + 1), new Map<string, number>())]
    .sort((a, b) => b[1] - a[1]).slice(0, 24).map(([p, c]) => `${p} (${c})`).join(" · ");
  readme = replaceBlock(readme, "publishers", pubs);
  await writeFile("README.md", readme);

  console.log(`synced ${skills.length} skills, ${useCases.length} how-tos from ${SOURCE} (${catalog.generatedAt})`);
}

main().catch((e) => { console.error(e); process.exit(1); });
