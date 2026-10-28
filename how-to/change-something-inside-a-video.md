# How to change something inside a video with AI

Swap a product, restyle a scene, change lighting or the look of an existing clip while keeping the motion.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/change-something-inside-a-video.md>

## Best skills for this

1. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
2. **[Runway Media](../skills/model/runway-media.md)** (`runway-media`, Runway, live) — Generate and edit images, video, music, speech and sound effects from chat with Runway's MCP tools.
   - Claude Code: `npx skills add runwayml/runway-mcp-plugin --skill runway-media -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/410709b26c13/runway-media.mp4>
3. **[Color Grade AI](../skills/style/color-grade-ai.md)** (`color-grade-ai`, Isaac Rowntree, beta) — Measures a frame or clip and writes .cube 3D LUTs for DaVinci Resolve and Premiere: fixes, shot matching, presets.
   - Claude Code: `git clone https://github.com/isaacrowntree/color-grade-ai.git ~/.claude/skills/color-grade`
4. **[Video Editing Best Practices](../skills/guide/varg-video-editing.md)** (`varg-video-editing`, varg, live) — Best practices for editing video with agents: which service for each edit, and the rules that keep cuts clean.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
5. **[Local-first video downloader: private, no subscription](../skills/model/media-download.md)** (`media-download`, varg, live) — Save any video by link (X, YouTube, Instagram, TikTok, 1800+ sites) or Pinterest images as references, locally, no key.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/547c697e5104/media-download.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=replace%20product%20in%20video"
```

Also searched as: *replace product in video* · *change the product in this video* · *video to video* · *restyle video* · *make this video anime* · *change background in video* · *relight video* · *video edit ai* · *заменить товар в видео* · *поменять стиль видео* · *видео в аниме*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
