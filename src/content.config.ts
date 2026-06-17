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

const docsEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-es' }),
  schema: docSchema,
});

const docsFr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-fr' }),
  schema: docSchema,
});

const docsIt = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-it' }),
  schema: docSchema,
});

const docsPt = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-pt' }),
  schema: docSchema,
});

const docsUk = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-uk' }),
  schema: docSchema,
});

export const collections = { docs, 'docs-de': docsDe, 'docs-es': docsEs, 'docs-fr': docsFr, 'docs-it': docsIt, 'docs-pt': docsPt, 'docs-uk': docsUk };
