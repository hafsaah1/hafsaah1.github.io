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

Type *"put the red block on the blue plate"* and watch a Franka Panda arm do it.
You can also stack things: blocks on blocks, plates on blocks, whatever.

## how it works

```
text prompt ──► CLIP text encoder ─────────────┐
                                                │ cosine
render RGB + segmentation ─► CLIP image encoder ┤ similarity ─► target object
                                                ┘                    │
                                                                     ▼
                          scripted IK: move ─► grasp ─► lift ─► place
```

The "intelligence" is **CLIP doing grounding** — it matches your words to the
right object from cropped images of the scene. The manipulation is a **scripted
damped-least-squares IK** controller. It's the same language → object → motion
recipe as CLIPort / VIMA / RT-2, just with a smaller hammer.

## what it actually decides

For *"stack the red block on the green block"*, CLIP scores every object and
picks correctly — telling apart both color **and** block-vs-plate shape:

> red_block 0.344 (pick), green_block 0.347 (place) — both beat the distractors.

## things i learned

- MuJoCo segmentation rendering gives you clean per-object crops for free.
- A kinematic-attach grasp is way more robust for a demo than fighting contact physics.
- CLIP is a shockingly good zero-shot grounding model for ~one line of code.
