import { useEffect } from 'react';
import { seo, socialImageAlt } from '../data/seo.mjs';
import type { Language } from '../data/i18n';
import type { ProjectDetailData } from '../components/ProjectDetail';
import { detailLabels } from '../data/detailLabels';
import { projectPath, homePath } from '../utils/routes.mjs';

export function useMetadata(language: Language, project?: ProjectDetailData, notFound = false) {
  useEffect(() => {
    const content = project ? { ...seo[language], title: `${project.title} — Melisa Uyar`, description: project.copy[language].tagline } : notFound ? { ...seo[language], title: `${detailLabels[language].notFound} — Melisa Uyar` } : seo[language];
    const siteUrl = document.head.querySelector<HTMLMetaElement>('meta[name="portfolio:site-url"]')?.content;
    document.documentElement.lang = language;
    document.title = content.title;
    const setMeta = (attribute: 'name' | 'property', key: string, value: string) => {
      let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!meta) { meta = document.createElement('meta'); meta.setAttribute(attribute, key); document.head.append(meta); }
      meta.content = value;
    };
    setMeta('name', 'description', content.description);
    setMeta('name', 'robots', notFound ? 'noindex, follow' : 'index, follow');
    for (const prefix of ['og', 'twitter']) {
      const attribute = prefix === 'og' ? 'property' : 'name';
      setMeta(attribute, `${prefix}:title`, content.title);
      setMeta(attribute, `${prefix}:description`, content.description);
      setMeta(attribute, `${prefix}:image`, new URL('/social-preview.png', siteUrl || window.location.origin).href);
      setMeta(attribute, `${prefix}:image:alt`, socialImageAlt);
    }
    setMeta('property', 'og:locale', content.locale);
    document.head.querySelectorAll('meta[property="og:locale:alternate"]').forEach(meta => meta.remove());
    Object.values(seo).filter(item => item.locale !== content.locale).forEach(item => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale:alternate'); meta.content = item.locale; document.head.append(meta);
    });
    if (siteUrl) {
      const url = new URL(project ? projectPath(project.slug, language) : homePath(language), siteUrl).href;
      const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (canonical) canonical.href = url;
      setMeta('property', 'og:url', url);
    }
    document.head.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]').forEach(link => {
      const locale = link.hreflang === 'x-default' ? 'tr' : link.hreflang;
      if (siteUrl && ['tr', 'en', 'de'].includes(locale)) link.href = new URL(project ? projectPath(project.slug, locale) : homePath(locale), siteUrl).href;
    });
  }, [language, project, notFound]);
}
