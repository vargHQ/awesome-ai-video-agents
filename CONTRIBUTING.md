# Contributing: submit a skill, prompt, effect, style, guide or tutorial

This list is a mirror of the public catalog on [varg.ai/how-to](https://varg.ai/how-to). Cards are published there and reviewed by the varg team; the markdown in `skills/` and `how-to/` is regenerated from the catalog by `bun run sync`, so **do not edit those files by hand**. Contribute the card itself, one of three ways. All of them are free and keep your name and license on the card.

## 1. From your agent (fastest)

```bash
claude mcp add --transport http varg https://mcp.varg.ai/mcp      # or add https://mcp.varg.ai/mcp in Cursor, VS Code, Claude Desktop
```

Then, in the folder of your skill: *"Publish this skill to varg how to."* The agent reads your SKILL.md, checks it against the [standard](#the-standard-what-a-listed-skill-carries), shows you the card and sends it with `publish_skill`. The card lands as *pending*; the varg team reviews it, usually within a few days; `my_skills` shows the status. Approved cards are searchable on varg.ai/how-to within seconds and appear in this repo at the next daily sync.

## 2. From the form

<https://varg.ai/how-to/publish>: sign in to varg, paste the repo URL and the install command, add a summary and an example. Same review.

## 3. From a pull request

1. Copy [`submissions/TEMPLATE.md`](submissions/TEMPLATE.md) to `submissions/<your-slug>.md` and fill the frontmatter: name, summary, description, category, tags, type, publisher, source URL, license, install commands per agent, agents, example, cost, requires, `useWhen`, `notFor`.
2. Run `bun run check` (schema check plus a scan for secrets and internal references) and open the PR.
3. A maintainer publishes the card to the catalog. Once it is live, the submission file is removed in the same PR and the card appears in `skills/` at the next sync.

Use this route for a batch of cards, for a tutorial, or when you prefer git over MCP.

## What you can submit

| Kind | What it is | Examples |
|---|---|---|
| **Skill** (`type: skill`) | A SKILL.md folder, a plugin, a CLI or a tool an agent installs and runs | a UGC ad pipeline, a podcast clipper, a captions skill |
| **Workflow** | A skill that takes a brief to a finished video, end to end | music video, explainer, changelog video |
| **Prompt** | A prompt pack a video or image model obeys | 47 camera moves, lighting setups, hook lines |
| **Effect** | A transition, caption style, title, device mockup or shader, with the code that makes it | FFmpeg xfade chain, Remotion TransitionSeries, a GLSL wipe |
| **Style** | A look a model or a render can follow: LUTs, fonts, art directions | a LUT pack, open fonts for captions |
| **Guide** | Best practices agents read before they generate or edit | Remotion best practices, shot QA |
| **Tutorial** | A step-by-step "How to {task} with AI" page for a job the list lacks | open a [tutorial request](https://github.com/vargHQ/awesome-ai-video-agents/issues/new?template=request-tutorial.yml) first |
| **Wanted** | A format people ask for that nothing makes yet: build it and submit the skill | see [skills/README.md → Wanted](skills/README.md#wanted) |

## The standard: what a listed skill carries

The full text is at <https://varg.ai/how-to/standard>. The short version reviewers check:

1. **It is an Agent Skill.** A folder with `SKILL.md` (frontmatter `name`, `description`, `license`), ≤ 500 lines, references one level deep in `references/`. It installs with one command into Claude Code, Codex, Cursor, Gemini CLI or OpenClaw.
2. **The name says the task.** First sentence of the description: what goes in and what comes out, with a concrete spec (9:16, MP4, SRT, 1080×1920) or the tools it uses. Say when to use it and when not to, naming the neighbouring skill.
3. **Cost gates first.** A media skill spends money. It quotes before it generates (`estimate_cost` on varg, or the vendor's equivalent), shows cheap drafts before finals, and waits for approval at each checkpoint.
4. **No bundled media.** No MP3, MP4, film stills or other people's pictures in the repo. References live at their source with a URL, a hash and a license; small text, JSON, SVG, LUTs and OFL fonts are fine.
5. **Rights.** No "in the style of" a living artist; real people only with consent; brands and interfaces (Apple UI, logos) flagged in the card's legal note.
6. **Security.** No secrets in files, no post-install hooks, no `curl | bash`, no downloaded executables; scripts call known hosts only; versions pinned.
7. **An example.** A real output (a clip, an image, a rendered frame) with a credit and the right to show it. Cards with an example are picked far more often.
8. **English.** Card text in English; the skill itself may support any language.

## Review

The varg team reviews every card for the standard above, tries the install command, and checks the example and the license. A card can be *live*, *beta* (works, rough edges), *draft* (listed, not installable yet) or *wanted*. Rejections say why; fix and resubmit. Vendors are welcome to list their official skills; independent creators keep their own name as publisher.

## Fixing a card

A wrong install command, a dead example or a stale model name: open a [broken card issue](https://github.com/vargHQ/awesome-ai-video-agents/issues/new?template=broken-card.yml) or, if you own the skill, publish it again through MCP (the card is upserted by slug). Do not edit `skills/*.md` here; the next sync would overwrite it.

## Licensing

Code in this repo is MIT. The card texts and tutorials varg wrote are CC BY 4.0. Your skill keeps its own license, shown on its card. By submitting, you confirm you have the right to list the skill and to show the example.

## Code of conduct

Be kind, be specific, credit people. [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) applies to issues, PRs and reviews.
