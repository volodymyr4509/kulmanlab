import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docsGroups = [
  'overview',
  'shapes',
  'edit',
  'markup',
  'layer',
  'layouts',
  'navigate',
  'measure',
  'style',
  'file',
  'interface',
] as const;

const docSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  group: z.enum(docsGroups),
  order: z.number(),
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

const docsTr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-tr' }),
  schema: docSchema,
});

const docsZh = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-zh' }),
  schema: docSchema,
});

const docsHi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-hi' }),
  schema: docSchema,
});

const docsAr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-ar' }),
  schema: docSchema,
});

const docsId = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-id' }),
  schema: docSchema,
});

const docsJa = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-ja' }),
  schema: docSchema,
});

const docsPl = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-pl' }),
  schema: docSchema,
});

const docsKo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-ko' }),
  schema: docSchema,
});

const docsVi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-vi' }),
  schema: docSchema,
});

const docsTh = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-th' }),
  schema: docSchema,
});

const docsMs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-ms' }),
  schema: docSchema,
});

const docsBn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-bn' }),
  schema: docSchema,
});

const docsSw = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-sw' }),
  schema: docSchema,
});

const docsUr = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-ur' }),
  schema: docSchema,
});

const docsEl = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-el' }),
  schema: docSchema,
});

const docsPa = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-pa' }),
  schema: docSchema,
});

const docsSv = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-sv' }),
  schema: docSchema,
});

const docsTl = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-tl' }),
  schema: docSchema,
});

const docsNl = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-nl' }),
  schema: docSchema,
});

const docsHe = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs-he' }),
  schema: docSchema,
});

export const collections = { docs, 'docs-de': docsDe, 'docs-es': docsEs, 'docs-fr': docsFr, 'docs-it': docsIt, 'docs-pt': docsPt, 'docs-uk': docsUk, 'docs-tr': docsTr, 'docs-zh': docsZh, 'docs-hi': docsHi, 'docs-ar': docsAr, 'docs-id': docsId, 'docs-ja': docsJa, 'docs-pl': docsPl, 'docs-ko': docsKo, 'docs-vi': docsVi, 'docs-th': docsTh, 'docs-ms': docsMs, 'docs-bn': docsBn, 'docs-sw': docsSw, 'docs-ur': docsUr, 'docs-el': docsEl, 'docs-pa': docsPa, 'docs-sv': docsSv, 'docs-tl': docsTl, 'docs-nl': docsNl, 'docs-he': docsHe };
