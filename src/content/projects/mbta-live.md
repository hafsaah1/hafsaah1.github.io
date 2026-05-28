---
title: MBTA · Live
tagline: every MBTA bus, train, and ferry, live on a map
status: ongoing
started: 2026-05-28
published: 2026-05-28
tags: [javascript, maps, mbta, civic-tech, boston, transit, real-time]
source: https://github.com/hafsaah1/mbta-live
demo: https://hafsaah1.github.io/mbta-live/
---

![MBTA Live — every vehicle in motion across Boston, in pink](/mbta-live.png)

A live map of every MBTA vehicle — buses, subway trains, commuter rail, and
ferries — updating every 8 seconds. Usually 500–800 dots moving across
Massachusetts at any given time.

The whole thing is a static page. The MBTA's
[v3 API](https://www.mbta.com/developers/v3-api) is open, CORS-friendly, and
returns JSON — so the browser hits it directly. No backend, no cron, no
database. One `/routes` call for line colors, then `/vehicles` every 8 seconds.

A few fun bits:

- dots are colored by the MBTA's official line colors (red, orange, blue, green,
  purple commuter rail, yellow bus, teal ferry) so the map reads at a glance
- click any vehicle for its route, status, speed, and occupancy
- started as a Mass RMV wait-times map — the state's data feed turned out to be
  broken, so the same skeleton got repointed at MBTA real-time data instead
