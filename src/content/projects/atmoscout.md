---
title: AtmoScout
tagline: autonomous drones that learn where to look — adaptive sensing meets data assimilation
status: ongoing
started: 2026-05-28
published: 2026-05-29
tags: [python, mujoco, data-assimilation, ensemble-kalman-filter, gaussian-process, path-planning, robotics, earth-science]
source: https://github.com/hafsaah1/atmoscout
featured: true
---

![AtmoScout — a fleet of drones flying over the evolving atmosphere as 3-D terrain](/atmoscout.gif)

**Where should you point a sensor to learn the most about the sky?** AtmoScout is
an autonomous agent that answers that — deciding *where to fly and measure* to
reconstruct (and forecast) an atmospheric field from as few observations as
possible. Robotics people plan paths on toy blobs; earth-science people fly dumb
coverage patterns. AtmoScout puts a robot with real flight dynamics **inside a
real geophysical field** and closes the loop.

It's built as an honest research arc, every claim measured against the baselines a
reviewer would actually demand:

- **Adaptive sensing beats the survey** — on *real* NCEP reanalysis (a January
  Arctic outbreak over North America), validated on held-out days.
- **A cost-aware planner Pareto-dominates greedy** — same accuracy, far less flying.
- A real **Ensemble Kalman Filter** data-assimilation OSSE, where **forecast-error
  targeting** places observations to cut the *forecast* error downstream.
- The part I'm proudest of: a path-constrained glider first **lost** to plain
  coverage — I reported that, diagnosed it, and a **non-myopic submodular planner
  flipped it into a win**; a coordinated **fleet** then reached the teleport-optimal
  bound.

The unifying finding: **clever routing matters most when observations are
precious** — which is exactly when you reach for it.

![AtmoScout thinking — left: a MuJoCo drone over the real temperature field; middle: its reconstruction sharpening as the uncertainty fog clears; right: the planner scoring every cell and choosing where to look next](/atmoscout-decision.gif)

Everything runs in MuJoCo + Python (Gaussian processes, an EnKF I validated
myself, ensemble-sensitivity targeting), and every result is reproducible from the
repo. Built fast, kept honest — including the experiments that didn't flatter the
idea until I fixed them.
