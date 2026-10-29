# How to make a text message story video with AI

A viral iMessage-style chat drama: bubbles appear with typing, sounds and a cliffhanger.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-a-text-message-story-video.md>

## Best skills for this

1. **[iMessage Video](../skills/workflow/varg-imessage-video.md)** (`varg-imessage-video`, varg, live) — Any chat script as an iPhone iMessage screen recording: typing, tapbacks, group chats, dark mode, sounds. Local, free.
   - Claude Code: `git clone --depth 1 https://github.com/vargHQ/code2video-templates ~/code2video-templates && ln -s ~/code2video-templates/imessage-video ~/.claude/skills/imessage-video`
   - Example: <https://varg.ai/how-to/undefined>
2. **[HyperFrames](../skills/guide/hyperframes.md)** (`hyperframes`, HeyGen, live) — Turn HTML, CSS and seekable animation into deterministic MP4s: launch films, explainers, captions, title cards.
   - Claude Code: `claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes`
   - Example: <https://s3.varg.ai/how-to/previews/400daa5dc577/hyperframes.mp4>
3. **[Consistent Characters](../skills/workflow/varg-consistent-characters.md)** (`varg-consistent-characters`, varg, beta) — Multi-scene ads where the same actors, outfits and location hold in every cut: cards, composites, Kling v3 clips.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/fd12064dae3c/varg-consistent-characters.mp4>
4. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=text%20message%20story"
```

Also searched as: *text message story* · *imessage video* · *chat story* · *texting story* · *fake text conversation video* · *chat drama* · *переписка видео* · *видео переписки* · *сторис переписка* · *чат история*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
