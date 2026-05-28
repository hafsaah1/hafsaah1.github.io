---
title: LangPick
tagline: natural-language pick-and-place in MuJoCo
status: finished
started: 2026-05-27
finished: 2026-05-27
published: 2026-05-27
tags: [python, mujoco, clip, robotics, computer-vision, machine-learning]
source: https://github.com/hafsaah1/langPickArm
---

Type something like *"put the red block on the blue plate"* and a Franka arm does
it — picking and stacking blocks/plates however you ask.

The trick: **CLIP** reads your words and figures out which object you mean from
images of the scene, then a scripted controller handles the actual arm motion.
Same idea as the big language-to-robot papers (CLIPort, VIMA, RT-2) — just
smaller, built in a weekend.

A few fun bits:

- it tells a red *block* from a red *plate* by shape, not just color
- "attaching" the object to the gripper is way more reliable than simulating real grip physics
- CLIP is shockingly good at this for basically one line of code
