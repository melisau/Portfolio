import { test, expect } from '@playwright/test';
import { seo } from '../src/app/data/seo.mjs';
import { interfaceText } from '../src/app/data/interfaceText';
import { projectDetails } from '../src/app/data/projectDetails.mjs';
import { detailLabels } from '../src/app/data/detailLabels';
import { projectPath } from '../src/app/utils/routes.mjs';

test.beforeEach(async ({ page }) => {
  // Remote stock photos/fonts are not required for functional tests; use a deterministic image response.
  await page.route(/https:\/\/(?:images\.unsplash\.com|ataturkarsivi\.com)\//, route => route.fulfill({
    contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="1200" height="800" fill="#20394b"/></svg>',
  }));
});

for (const language of ['tr', 'en', 'de'] as const) {
  for (const theme of ['light', 'dark']) {
    test(`${language} / ${theme}: content, metadata, labels, layout and navigation`, async ({ page }, testInfo) => {
      const errors: string[] = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
      await page.addInitScript(({ language, theme }) => {
        localStorage.setItem('portfolio-language', language);
        localStorage.setItem('portfolio-theme', theme);
      }, { language, theme });
      await page.goto(language === 'tr' ? '/' : `/${language}/`);
      await expect(page).toHaveTitle(seo[language].title);
      await expect(page.locator('html')).toHaveAttribute('lang', language);
      await expect(page.locator('html')).toHaveClass(theme === 'dark' ? /dark/ : /^$/);
      await expect(page.locator('h1')).toHaveText('Melisa Uyar');
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', seo[language].description);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', seo[language].title);
      await expect(page.locator('meta[name="twitter:description"]')).toHaveAttribute('content', seo[language].description);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://melisauyar.com${language === 'tr' ? '/' : `/${language}/`}`);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://melisauyar.com/social-preview.png');
      await expect(page.getByRole('combobox', { name: interfaceText[language].languageLabel })).toBeVisible();
      await expect(page.locator('.portrait-frame img')).toHaveAttribute('alt', interfaceText[language].portraitAlt);
      await expect(page.locator('.project-card')).toHaveCount(8);
      await expect(page.locator('vite-error-overlay')).toHaveCount(0);
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      await page.screenshot({ path: testInfo.outputPath(`${language}-${theme}.png`) });
      await page.locator('.hero__actions .button').click();
      await expect(page).toHaveURL(/#projects$/);
      await expect(page.locator('#projects h2')).toBeInViewport();
      expect(errors).toEqual([]);
    });
  }
}

test('language switch updates metadata, URL and back/forward history', async ({ page }) => {
  await page.goto('/tr/');
  await page.locator('select').selectOption('en');
  await expect(page).toHaveURL(/\/en\/$/);
  await expect(page).toHaveTitle(seo.en.title);
  await page.locator('select').selectOption('de');
  await expect(page).toHaveTitle(seo.de.title);
  await page.goBack();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.goBack();
  await expect(page.locator('html')).toHaveAttribute('lang', 'tr');
  await page.goForward();
  await expect(page).toHaveTitle(seo.en.title);
  await page.reload();
  await expect(page).toHaveTitle(seo.en.title);
});

test('invalid preferences fall back safely', async ({ page }) => {
  await page.addInitScript(() => { localStorage.setItem('portfolio-language', '__proto__'); localStorage.setItem('portfolio-theme', 'invalid'); });
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'tr');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('html')).not.toHaveClass(/dark/);
});

test('blocked storage does not break rendering or language/theme controls', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new DOMException('Blocked', 'SecurityError'); };
    Storage.prototype.setItem = () => { throw new DOMException('Blocked', 'SecurityError'); };
  });
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  await page.locator('select').selectOption('en');
  await expect(page).toHaveTitle(seo.en.title);
  await page.locator('.nav-actions > .icon-button').first().click();
  await expect(page.locator('html')).toHaveClass(/dark/);
});

test('theme toggle persists on reload', async ({ page }) => {
  await page.goto('/');
  await page.locator('.nav-actions > .icon-button').first().click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.locator('.nav-actions > .icon-button').first().click();
  await expect(page.locator('html')).not.toHaveClass(/dark/);
});

test('skip link is first keyboard target and focuses main', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});

test('mobile menu traps focus, closes on Escape and focuses the destination', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'Mobile navigation only');
  await page.goto('/en/');
  const menu = page.locator('.menu-button');
  const firstLink = page.locator('#main-navigation a').first();
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(firstLink).toBeFocused();
  await expect(page.locator('main')).toHaveAttribute('inert', '');
  await menu.focus();
  await page.keyboard.press('Tab');
  await expect(page.locator('header .logo')).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(menu).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeFocused();
  await expect(page.locator('main')).not.toHaveAttribute('inert', '');
  await menu.click();
  await page.locator('#main-navigation a[href="#projects"]').click();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#projects')).toBeFocused();
  await expect(page).toHaveURL(/#projects$/);
  await menu.click();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('main')).not.toHaveAttribute('inert', '');
});

test('reduced motion shows a full static phrase without a cursor', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/en/');
  await expect(page.locator('.hero__eyebrow span')).toHaveText('JUNIOR FULL-STACK DEVELOPER');
  await expect(page.locator('.hero__eyebrow i')).toHaveCount(0);
  const before = await page.locator('.hero__eyebrow').textContent();
  await page.waitForTimeout(600);
  expect(await page.locator('.hero__eyebrow').textContent()).toBe(before);
});

test('broken portrait and project images have localized fallbacks', async ({ page }) => {
  await page.route('**/profile.jpg', route => route.abort());
  await page.route('**/projects/luma.png', route => route.abort());
  await page.goto('/en/');
  await expect(page.locator('.portrait-frame .image-fallback')).toHaveAttribute('aria-label', /Portrait of Melisa Uyar.*Image unavailable/);
  await page.locator('.project-card').first().scrollIntoViewIfNeeded();
  await expect(page.locator('.project-card').first().locator('.image-fallback')).toHaveAttribute('aria-label', /Luma.*Image unavailable/);
  await page.locator('select').selectOption('de');
  await expect(page.locator('.portrait-frame .image-fallback')).toHaveAttribute('aria-label', /Porträt.*Bild nicht verfügbar/);
});

test('missing CV or HTML fallback never creates a fake download', async ({ page }) => {
  await page.route('**/melisa-uyar-cv.pdf', route => route.fulfill({ status: 200, contentType: 'text/html', body: '<html>SPA fallback</html>' }));
  await page.goto('/en/');
  await expect(page.locator('a[download]')).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Request my résumé' })).toHaveAttribute('href', /^mailto:/);
});

test('CV network failure keeps a working email alternative', async ({ page }) => {
  await page.route('**/melisa-uyar-cv.pdf', route => route.abort());
  await page.goto('/de/');
  await expect(page.getByRole('link', { name: 'Lebenslauf anfragen' })).toBeVisible();
  await expect(page.locator('a[download]')).toHaveCount(0);
});

test('PDF availability enables the real download mechanism (test fixture)', async ({ page }) => {
  await page.route('**/melisa-uyar-cv.pdf', route => route.fulfill({ contentType: 'application/pdf', body: '%PDF-1.4\n% Test fixture, not a résumé\n%%EOF' }));
  await page.goto('/en/');
  const link = page.getByRole('link', { name: 'Download résumé' });
  await expect(link).toHaveAttribute('download', '');
  const download = page.waitForEvent('download');
  await link.click();
  expect((await download).suggestedFilename()).toBe('melisa-uyar-cv.pdf');
});

test('links, local assets and static language metadata are valid', async ({ page, request }) => {
  await page.goto('/');
  const hrefs = await page.locator('a').evaluateAll(links => links.map(link => link.getAttribute('href')!));
  for (const href of hrefs) {
    expect(href).toMatch(/^(#.+|https:\/\/.+|mailto:.+|tel:.+|\/melisa-uyar-cv\.pdf|\/(?:en\/|de\/)?projects\/[a-z-]+\/)$/);
    if (href.startsWith('#')) await expect(page.locator(href)).toHaveCount(1);
  }
  await expect(page.getByRole('link', { name: 'GitHub', exact: true }).first()).toHaveAttribute('href', 'https://github.com/melisau');
  await expect(page.getByRole('link', { name: 'LinkedIn', exact: true }).first()).toHaveAttribute('href', /^https:\/\/www.linkedin.com\/in\//);
  for (const url of ['/favicon.svg', '/social-preview.png', '/profile.jpg', '/projects/luma.png', '/projects/rogi.png', '/projects/be-a-real-developer.png', '/projects/budget-buddy.png', '/projects/journal.png', '/projects/mitzi-paw-path.jpg']) {
    const response = await request.get(url);
    expect(response.ok(), url).toBe(true);
    expect(response.headers()['content-type'], url).toMatch(/^image\//);
  }
  for (const language of ['tr', 'en', 'de'] as const) {
    const response = await request.get(language === 'tr' ? '/' : `/${language}/`);
    const html = await response.text();
    expect(html).toContain(`<html lang="${language}">`);
    expect(html).toContain(seo[language].description);
    expect(html).toContain('summary_large_image');
    expect(html).not.toContain('Shopify Developer &amp; Frontend Engineer');
  }
});

for (const language of ['tr', 'en', 'de'] as const) {
  test(`all project detail pages: ${language}, direct URL, localized content and static metadata`, async ({ page, request }) => {
    test.setTimeout(90000);
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const [index, project] of projectDetails.entries()) {
      await page.addInitScript(theme => localStorage.setItem('portfolio-theme', theme), index % 2 ? 'dark' : 'light');
      const path = projectPath(project.slug, language);
      await page.goto(path);
      await expect(page).toHaveTitle(`${project.title} — Melisa Uyar`);
      await expect(page.locator('h1')).toHaveText(project.title);
      await expect(page.locator('html')).toHaveAttribute('lang', language);
      await expect(page.locator('#detail-purpose h2')).toHaveText(detailLabels[language].purpose);
      await expect(page.locator('#detail-role')).toContainText(project.copy[language].role);
      await expect(page.locator('#detail-features li')).toHaveCount(project.copy[language].features.length);
      await expect(page.locator('#detail-limits')).toContainText(project.copy[language].limits);
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      const html = await (await request.get(path)).text();
      expect(html).toContain(project.copy[language].tagline);
      expect(html).toContain(`<html lang="${language}">`);
      expect(html).toContain('og:title');
    }
    expect(errors).toEqual([]);
  });
}

test('card opens details, language keeps the project, zoom dialog supports Escape and next/back links work', async ({ page }, testInfo) => {
  await page.goto('/en/');
  await page.locator('.project-card').first().locator('.project-detail-link').click();
  await expect(page).toHaveURL(/\/en\/projects\/luma\/$/);
  await expect(page.locator('h1')).toHaveText('Luma');
  await page.screenshot({ path: testInfo.outputPath('project-detail.png') });
  await page.locator('select').selectOption('de');
  await expect(page).toHaveURL(/\/de\/projects\/luma\/$/);
  await expect(page.locator('#detail-purpose h2')).toHaveText(detailLabels.de.purpose);
  await page.reload();
  await expect(page.locator('h1')).toHaveText('Luma');
  const zoom = page.locator('.detail-media-button');
  await zoom.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('button', { name: detailLabels.de.close })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(zoom).toBeFocused();
  await page.locator('.detail-next').click();
  await expect(page.locator('h1')).toHaveText('Mitzi: Paw Path');
  await page.locator('.detail-back').click();
  await expect(page).toHaveURL(/\/de\/#projects$/);
  await expect(page.locator('.project-card')).toHaveCount(8);
});

test('unknown project renders a localized noindex state', async ({ page }) => {
  await page.goto('/en/projects/missing-project/');
  await expect(page.locator('h1')).toHaveText(detailLabels.en.notFound);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
  await expect(page.getByRole('link', { name: detailLabels.en.back })).toHaveAttribute('href', '/en/#projects');
});
