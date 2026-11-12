# How to cut silences and add zooms to a video with AI

A talking video in, a tighter cut out: every pause over 0.55 s removed and a punch-in zoom on every other cut, in one FFmpeg run on your machine.

**Full tutorial with the options to show the person, numbered steps and prices:** <https://varg.ai/how-to/cut-silences-and-add-zooms.md>

## Best skills for this

1. **[Video editing skills for Claude Code and AI agents](../skills/guide/varg-video-edit-library.md)** (`varg-video-edit-library`, varg, live) — 206 named edits with recipes for FFmpeg, HyperFrames, Remotion and CapCut: cuts, transitions, titles, UI, numbers.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
2. **[Herk Edit Kit](../skills/workflow/herk-edit-kit.md)** (`herk-edit-kit`, Nate Herk, live) — Nate Herk's kit to edit talking-head videos, reels and Shorts: silence and flub cuts, storytelling, motion graphics.
   - Claude Code: `git clone https://github.com/nateherkai/herk-edit-kit.git`
   - Example: <https://s3.varg.ai/how-to/previews/bb31cdd5a172/herk-edit-kit.mp4>
3. **[OpenMontage Silence Cutter & Auto Reframe](../skills/guide/openmontage-jump-cut-reframe.md)** (`openmontage-jump-cut-reframe`, Calesthio, live) — Automatic jump cuts from silencedetect, plus a face-tracked 16:9 → 9:16 reframe with a smoothed crop.
   - Claude Code: `git clone https://github.com/calesthio/OpenMontage.git && cd OpenMontage && make setup`
4. **[SmartCut (capcut-ai-editor)](../skills/guide/capcut-smartcut-mcp.md)** (`capcut-smartcut-mcp`, mrbuslov, live) — MCP that reads CapCut auto-captions to cut silences and duplicate takes right inside your CapCut project.
   - mcp: `pip install -e .  (inside the cloned repo), then add the venv python to your MCP config`
5. **[FFmpeg Skill](../skills/model/ffmpeg-skill.md)** (`ffmpeg-skill`, Shogo Kajiyama, live) — Local video editor for agents: 42 FFmpeg tools with a machine-readable contract and an MCP server; no cloud, no keys.
   - Claude Code: `npx ffmpeg-skill`
   - Example: <https://s3.varg.ai/how-to/previews/564622beb60d/ffmpeg-skill.mp4>
6. **[Short-form FFmpeg cookbook: copyable commands for Reels](../skills/guide/short-form-ffmpeg-cookbook.md)** (`short-form-ffmpeg-cookbook`, varg, live) — Footage into a 9:16 MP4 with FFmpeg: crop to vertical, burn captions, trim and join, music under the voice.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
7. **[Caption Styles: 17 pro caption looks with presets](../skills/effect/caption-styles.md)** (`caption-styles`, varg, live) — Karaoke, word pop, pill, glass, neon and 12 more caption looks as exact presets: sizes, safe zones, sync and contrast from subtitle pros.
   - Claude Code: `claude plugin marketplace add vargHQ/skills && claude plugin install varg@varg`
   - Example: <https://s3.varg.ai/files/72c55813-c0fa-4cf2-9f64-ec4f7ed0e7ae/file_4d3d0dbdc222.mp4>

## Search it with the person's own words

```bash
curl -s "https://varg.ai/how-to/api/search?q=cut%20silences%20and%20add%20zooms"
```

Also searched as: *cut silences and add zooms* · *cut the silences out of my video and add zooms* · *cut silences* · *remove silence from video* · *silence remover* · *auto cut silence* · *remove pauses from video* · *cut dead air* · *auto zoom* · *punch in zoom* · *jump cut zoom* · *jump cuts* · *ffmpeg remove silence* · *ffmpeg silencedetect* · *talking head zoom cuts*

---
Part of [Awesome AI video agents](https://github.com/vargHQ/awesome-ai-video-agents). Every page here is a short mirror; the page on varg.ai/how-to is the one agents should read.
