import type { Lang } from '../i18n/translations';

export const BLOG_ORIGIN = 'https://kulmanlab.com';

// Posts live at src/content/blog/<lang>/<slug>.md, so the language is part of
// the entry id rather than the frontmatter — a translation is a file that
// exists, and a language with no file for a slug simply has no translation.
export function splitId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.replace(/\.md$/, '').split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}

export function blogIndexUrl(lang: Lang): string {
  return lang === 'en' ? '/blog/' : `/${lang}/blog/`;
}

export function postUrl(lang: Lang, slug: string): string {
  return `${blogIndexUrl(lang)}${slug}/`;
}

export function postCanonical(lang: Lang, slug: string): string {
  return `${BLOG_ORIGIN}${postUrl(lang, slug)}`;
}

// hreflang is emitted only for translations that actually exist — pointing at a
// locale URL that 404s is worse than omitting the language entirely.
export function blogAlternates(slug: string, langs: Lang[]): Array<{ hreflang: string; href: string }> {
  const alts: Array<{ hreflang: string; href: string }> = [];
  if (langs.includes('en')) {
    alts.push({ hreflang: 'x-default', href: postCanonical('en', slug) });
  }
  for (const lang of langs) {
    alts.push({ hreflang: lang, href: postCanonical(lang, slug) });
  }
  return alts;
}

export function formatDate(date: Date, lang: Lang = 'en'): string {
  return date.toLocaleDateString(lang === 'en' ? 'en-US' : lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

// Frontmatter, code fences and link syntax inflate a naive word count, so strip
// them before dividing by a 220 wpm reading speed. CJK has no spaces to split
// on, so count characters at 500 per minute instead.
export function readingMinutes(body: string, lang: Lang = 'en'): number {
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|-]/g, ' ');
  if (lang === 'zh' || lang === 'ja' || lang === 'th') {
    return Math.max(1, Math.round(text.replace(/\s+/g, '').length / 500));
  }
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
