# How to make an AI short film

A multi-shot story with consistent characters: script, storyboard, previz, shots, edit.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/make-an-ai-short-film.md>

## Best skills for this

1. **[Previz to Seedance](../skills/workflow/varg-previz.md)** (`varg-previz`, varg, beta) — Plan multi-shot AI video before paying: story, anchor sheets, a three.js grey-box previz, then a Seedance v2v pack.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/2f5f2d60dd84/varg-previz.mp4>
2. **[fal Storytelling](../skills/guide/fal-storytelling.md)** (`fal-storytelling`, fal, live) — Plan multi-shot stories: storyboards, shot lists, first-to-last-frame chains and continuity across scenes.
   - Claude Code: `npx skills add fal-ai-community/skills --skill storytelling -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/6ed608385efd/fal-storytelling.mp4>
3. **[Drama Skills (ZenStory)](../skills/guide/zenstory-drama-skills.md)** (`zenstory-drama-skills`, ZenStory AI, live) — Short-drama skills that beat a no-skill control in blind tests: script, assets, storyboard, keyframe and video prompts.
   - Claude Code: `npx skills add zenstory-ai/drama-skills -y -g`
   - Example: <https://s3.varg.ai/how-to/previews/3a4ecaa3014e/zenstory-drama-skills.mp4>
4. **[AI Short Drama Studio](../skills/workflow/ai-short-drama-studio.md)** (`ai-short-drama-studio`, Hao0321, live) — Greenlight score, series bible, episode compiler and production pack for serialized AI short dramas and manju.
   - Claude Code: `git clone https://github.com/Hao0321/ai-short-drama.git ~/.claude/skills/ai-short-drama`
5. **[Consistent Characters](../skills/workflow/varg-consistent-characters.md)** (`varg-consistent-characters`, varg, beta) — Multi-scene ads where the same actors, outfits and location hold in every cut: cards, composites, Kling v3 clips.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/fd12064dae3c/varg-consistent-characters.mp4>
6. **[fal Cinematography](../skills/prompt/fal-cinematography.md)** (`fal-cinematography`, fal, live) — Direct cinematic stills and video: shot language, camera moves, lenses, lighting, grade and film texture.
   - Claude Code: `npx skills add fal-ai-community/skills --skill cinematography -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/825db19fa1b1/fal-cinematography.mp4>
7. **[varg AI](../skills/model/varg-ai.md)** (`varg-ai`, varg, live) — The official varg skill: videos, images, speech and music through one API key, rendered in the cloud or locally.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/how-to/previews/7df061df8dcb/varg-ai.mp4>
8. **[Awesome Seedance Skills](../skills/prompt/awesome-seedance-skills.md)** (`awesome-seedance-skills`, LearnPrompt, live) — Evidence-led Seedance 2.5/2.0 skills: a production workflow plus genre templates distilled from 934 verified cases.
   - Claude Code: `npx skills add LearnPrompt/awesome-seedance --skill seedance-production-workflow`
9. **[ElevenLabs Sound Effects](../skills/model/elevenlabs-sound-effects.md)** (`elevenlabs-sound-effects`, ElevenLabs, live) — Generate sound effects and ambiences from a text description, including seamless loops.
   - Claude Code: `npx skills add elevenlabs/skills --skill sound-effects -a claude-code`
   - Example: <https://s3.varg.ai/how-to/previews/8caef6128d55/elevenlabs-sound-effects.mp3>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=ai%20short%20film"
```

Also searched as: *ai short film* · *ai movie* · *short drama* · *ai series* · *cinematic ai video* · *story video* · *короткометражка* · *ии фильм* · *сериал нейросеть* · *кино нейросетью*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
