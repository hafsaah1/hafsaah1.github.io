import { defineConfig } from 'astro/config';

// host-agnostic: builds static files that work on Vercel, Netlify, GitHub Pages.
// When you pick a host, set `site` to your real URL (and `base` for project Pages).
export default defineConfig({
  site: 'https://hafsaah1.github.io',
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
});
