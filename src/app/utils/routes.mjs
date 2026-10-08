export const homePath = language => language === 'tr' ? '/' : `/${language}/`;
export const projectPath = (slug, language) => `${homePath(language)}projects/${slug}/`;
export function parseRoute(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  const language = ['tr', 'en', 'de'].includes(parts[0]) ? parts.shift() : undefined;
  if (parts.length === 0) return { language, slug: undefined, notFound: false };
  if (parts.length === 2 && parts[0] === 'projects') return { language: language || 'tr', slug: parts[1], notFound: false };
  return { language, slug: undefined, notFound: true };
}
