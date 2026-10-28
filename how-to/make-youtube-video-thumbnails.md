# How to make YouTube video thumbnails with AI

High-CTR thumbnails and vertical covers, in a few options to choose from.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-youtube-video-thumbnails.md>

## Best skills for this

1. **[Higgsfield YouTube Thumbnail](../skills/workflow/higgsfield-youtube-thumbnail.md)** (`higgsfield-youtube-thumbnail`, Higgsfield, live) — Design truthful, high-CTR YouTube thumbnails and vertical covers with up to three consistent faces.
   - Claude Code: `/plugin marketplace add higgsfield-ai/skills
/plugin install higgsfield@higgsfield`
   - Example: <https://s3.varg.ai/how-to/previews/ca2be60825df/higgsfield-youtube-thumbnail.webp>
2. **[YouTube Thumbnail Design](../skills/guide/inference-sh-youtube-thumbnail-design.md)** (`inference-sh-youtube-thumbnail-design`, inference.sh, live) — Design YouTube thumbnails that read on a phone: dimensions, contrast, safe zones, text and faces.
   - Claude Code: `npx skills add inference-sh/skills --skill youtube-thumbnail-design -a claude-code`
3. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
4. **[YouTube MCP](../skills/model/youtube-mcp.md)** (`youtube-mcp`, Zubeid Hendricks, live) — YouTube Data API over MCP: search, video and channel stats, transcripts.
   - mcp: `npx -y @smithery/cli install @ZubeidHendricks/youtube --client claude`

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=youtube%20thumbnail"
```

Also searched as: *youtube thumbnail* · *thumbnail* · *video cover* · *превью для ютуба* · *обложка видео* · *превьюшка*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
