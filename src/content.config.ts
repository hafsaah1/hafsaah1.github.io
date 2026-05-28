import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects: one Markdown file per project, just like astrid.tech's model.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    status: z.enum(['finished', 'ongoing', 'wip', 'scrapped']).default('finished'),
    started: z.coerce.date().optional(),
    finished: z.coerce.date().optional(),
    published: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    source: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, blog };
