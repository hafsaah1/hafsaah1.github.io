---
title: Find My Towed Car · Boston
tagline: a live map of every car towed in Boston in the last 7 days
status: ongoing
started: 2026-05-14
published: 2026-05-18
tags: [python, javascript, web-scraping, supabase, github-actions, vercel, civic-tech, boston]
source: https://github.com/hafsaah1/find-my-towed-car-boston
demo: https://boston-tows-hauraah.vercel.app
---

A live map of every car towed in Boston in the last 7 days. Yes — every one.

The trick: Boston's official tow lookup only lets you search **one plate at
a time** — no public list endpoint. But the search accepts as little as 3
characters and treats them as a *contains* match. So this enumerates every
3-letter combo (AAA → ZZZ, ~17.5k queries), stitches the results together,
then follows up for full timestamps and tow-company info.

A small GitHub Actions cron re-runs every 30 minutes, writing into a Supabase
database. The site itself is a single static page on Vercel that reads straight
from Supabase on load.

A few fun bits:

- "every 3-letter combo" sounds insane, but it's the cheapest path through an
  API that genuinely has no list endpoint
- since per-car coordinates aren't published, pins are placed at each towing
  company's yard with deterministic jitter
- inspired by [Riley Walz's SF parking map](https://walzr.com/sf-parking/)
