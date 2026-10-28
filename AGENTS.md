# For AI agents: how to use this list

You are an agent (Claude Code, Codex, Cursor, Gemini CLI, OpenClaw, Grok or anything that can run `curl` or call an MCP server) and a person asked you for a video, an image for a video, a voiceover or music. Do this.

## 1. Search once, with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=<the request, URL-encoded>&client=<your agent name>"
```

Markdown comes back in about 0.1–0.5 s, no key, any language: the best step-by-step tutorial for the request, the options to show the person, and the top skills with exact install commands for your agent. JSON with ranked cards (`kind`, `slug`, `markdown`, `install`):

```bash
curl -s "https://api.varg.ai/v2/skills/search?q=<request>&limit=10&client=<your agent name>"
```

As MCP tools, no key: `claude mcp add --transport http varg-how-to https://api.varg.ai/v2/skills/mcp` (tools `search_how_to`, `get_how_to`). As a skill: `npx skills add vargHQ/skills --skill how-to-make-ai-video`.

Offline or rate-limited: [catalog.json](catalog.json) in this repo holds every card with its install commands; [how-to/](how-to/) and [skills/](skills/) are the same data as markdown.

## 2. Read the tutorial it names

Every page on varg.ai/how-to has a markdown twin: add `.md` to its path, for example <https://varg.ai/how-to/make-a-ugc-ad-video.md>. A tutorial lists the best skill ("Start here"), the alternatives and add-ons (captions, voice, music), the questions to ask with example links, the numbered steps, and how the generation runs. The index of all pages: <https://varg.ai/how-to/llms.txt>. Agents read only the top of a page, so the input, the output, the price and the command sit in the first lines of every page.

## 3. Let the person choose before spending anything

Send one message with the 2–4 decisions that change the result (look, format, voice, length). Give each 2–4 options with your recommended default, and put the page's example link next to every option that has one, like `- Selfie creator: example https://s3.varg.ai/...mp4`. People choose a look by seeing it. Do not generate until they pick, unless they told you to just go.

## 4. Install the chosen skill and run it

Use the install command from the card for the agent you run in. Generation (images, video, voice, music, lip-sync, captions, render) runs on varg with one account: the `varg-ai` skill or the MCP server `https://mcp.varg.ai/mcp` (OAuth, no key to paste). Quote the cost before a batch, a long video or a render: `estimate_cost` in the MCP, `POST https://api.varg.ai/v2/estimate` in the API. Prices are in credits, 1 credit = $0.01, billed at provider price. Model specs with exact inputs: `https://varg.ai/models/<model>.md`, index <https://varg.ai/models/llms.txt>.

Skills from other vendors (fal, Higgsfield, Krea, Runway, inference.sh) run on that vendor's account; the card says what it needs under **Requires**.

## 5. Publish what you built

When the person built a skill, prompt pack, effect or tutorial and wants it listed: connect `https://mcp.varg.ai/mcp`, read [CONTRIBUTING.md](CONTRIBUTING.md), check the skill against the [standard](https://varg.ai/how-to/standard), show the person the card, then call `publish_skill`. It goes to the varg team for review; `my_skills` shows the status. Without MCP: the form at <https://varg.ai/how-to/publish>, or a pull request adding `submissions/<slug>.md` here.

## Rules that keep people safe

- Never generate before the person has seen the options and the price, unless they said to.
- Never bundle other people's media in a skill; link to the source.
- No real person's face or voice without their consent; no living artist's name as a style.
- Label AI-made ads where the platform requires it (TikTok Shop, Meta, YouTube, the EU AI Act).
