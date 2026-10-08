import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { loadEnv } from 'vite';
import { seo, socialImageAlt, defaultSiteUrl } from '../src/app/data/seo.mjs';
import { projectDetails } from '../src/app/data/projectDetails.mjs';
import { homePath, projectPath } from '../src/app/utils/routes.mjs';

const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const config = loadEnv('production', process.cwd(), 'VITE_');
const rawSiteUrl = process.env.VITE_SITE_URL || config.VITE_SITE_URL || defaultSiteUrl;
let siteUrl;
if (rawSiteUrl) {
  const url = new URL(rawSiteUrl);
  if (url.protocol !== 'https:') throw new Error('VITE_SITE_URL must be an HTTPS production origin.');
  siteUrl = url.origin;
}
const original = await readFile('dist/index.html', 'utf8');
const pages = Object.keys(seo).flatMap(language => [
  { language, content: seo[language], path: homePath(language) },
  ...projectDetails.map(project => ({ language, project, path: projectPath(project.slug, language), content: { ...seo[language], title: `${project.title} — Melisa Uyar`, description: project.copy[language].tagline } })),
]);
for (const { language, content, path, project } of pages) {
  let html = original.replace(/<html lang="[^"]*">/, `<html lang="${language}">`)
    .replace(/<title>.*?<\/title>/, `<title>${escape(content.title)}</title>`)
    .replace(/\s*<meta (?:name|property)="(?:description|og:.*?|twitter:.*?)"[^>]*>/g, '');
  const imageUrl = siteUrl ? `${siteUrl}/social-preview.png` : '/social-preview.png';
  const meta = {
    description: content.description, 'og:type': 'website', 'og:site_name': 'Melisa Uyar',
    'og:title': content.title, 'og:description': content.description, 'og:locale': content.locale,
    'og:image': imageUrl, 'og:image:type': 'image/png', 'og:image:width': '1200', 'og:image:height': '630', 'og:image:alt': socialImageAlt,
    'twitter:card': 'summary_large_image', 'twitter:title': content.title, 'twitter:description': content.description,
    'twitter:image': imageUrl, 'twitter:image:alt': socialImageAlt,
  };
  if (siteUrl) { meta['portfolio:site-url'] = siteUrl; meta['og:url'] = `${siteUrl}${path}`; }
  let tags = Object.entries(meta).map(([key, value]) => `<meta ${key.startsWith('og:') ? 'property' : 'name'}="${key}" content="${escape(value)}" />`).join('\n    ');
  tags += Object.values(seo).filter(item => item.locale !== content.locale).map(item => `\n    <meta property="og:locale:alternate" content="${item.locale}" />`).join('');
  if (siteUrl) {
    tags += `\n    <link rel="canonical" href="${meta['og:url']}" />`;
    for (const locale of Object.keys(seo)) tags += `\n    <link rel="alternate" hreflang="${locale}" href="${siteUrl}${project ? projectPath(project.slug, locale) : homePath(locale)}" />`;
    tags += `\n    <link rel="alternate" hreflang="x-default" href="${siteUrl}${project ? projectPath(project.slug, 'tr') : '/'}" />`;
  }
  html = html.replace('</head>', `    ${tags}\n  </head>`);
  const directory = `dist${path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}
// /tr/ remains a supported alias, but / is the canonical Turkish home.
await mkdir('dist/tr', { recursive: true });
await writeFile('dist/tr/index.html', await readFile('dist/index.html', 'utf8'));
if (siteUrl) {
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(page => `<url><loc>${escape(siteUrl + page.path)}</loc></url>`).join('')}</urlset>`);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
}
if (!siteUrl) console.log('SEO: localized HTML generated. Set VITE_SITE_URL for absolute social URLs, canonical and hreflang.');
