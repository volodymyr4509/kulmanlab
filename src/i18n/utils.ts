import type { Lang } from './translations';

export const LANGS_NO_EN = ['de', 'es', 'fr', 'it', 'pt', 'uk', 'tr', 'zh', 'hi', 'ar', 'id', 'ja', 'pl'] as const;
export type NonEnLang = typeof LANGS_NO_EN[number];

export function localeUrl(lang: Lang, page: 'home' | 'faq' | 'changelog'): string {
  const suffix = page === 'home' ? '/' : `/${page}`;
  if (lang === 'en') return suffix === '/' ? '/' : suffix;
  return `/${lang}${suffix}`;
}

export function buildAlternates(page: 'home' | 'faq' | 'changelog'): Array<{ hreflang: string; href: string }> {
  const base = 'https://kulmanlab.com';
  const all: Array<{ hreflang: string; href: string }> = [];
  // English (x-default + en)
  const enUrl = base + (page === 'home' ? '/' : `/${page}`);
  all.push({ hreflang: 'x-default', href: enUrl });
  all.push({ hreflang: 'en', href: enUrl });
  // Other languages
  for (const lang of LANGS_NO_EN) {
    const suffix = page === 'home' ? '/' : `/${page}`;
    all.push({ hreflang: lang, href: `${base}/${lang}${suffix}` });
  }
  return all;
}
