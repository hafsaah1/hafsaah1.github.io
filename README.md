# hafsaah1.github.io

My personal site — a digital-planner ("hobonichi") layout built with
[Astro](https://astro.build), inspired by [sheep's site](https://sheep.nekoweb.org).

## Adding content

No code needed — just drop a Markdown file with a small header:

- **A project** → `src/content/projects/my-thing.md`
  ```yaml
  ---
  title: My Thing
  tagline: a short description
  status: finished        # finished | ongoing | wip | scrapped
  started: 2026-01-01
  finished: 2026-02-01
  published: 2026-02-01
  tags: [python, robotics]
  source: https://github.com/...
  ---
  Write the project here in Markdown.
  ```
- **A blog post** → `src/content/blog/my-post.md` (title, description, published, tags).

Push to `main` and it auto-deploys to https://hafsaah1.github.io via GitHub Actions.

## Develop locally

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # output to dist/
```

## Customize

- `src/config.ts` — name, links, the planner quote, nav.
- `src/styles/global.css` — colors (baby blue `#89CFF0` + cream) and fonts.
- `public/texture.svg` — the kaomoji background pattern.
