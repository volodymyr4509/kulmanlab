import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  keywords: z.array(z.string()).optional(),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: docSchema,
});

const docsDe = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-de' }),
  schema: docSchema,
});

export const collections = { docs, 'docs-de': docsDe };
