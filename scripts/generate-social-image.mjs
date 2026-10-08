import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';

const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL || 'msedge' });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  const svg = await readFile(new URL('./social-card.svg', import.meta.url), 'utf8');
  await page.setContent(`<style>html,body{margin:0;width:1200px;height:630px;overflow:hidden}svg{display:block}</style>${svg}`);
  await page.screenshot({ path: fileURLToPath(new URL('../public/social-preview.png', import.meta.url)), type: 'png' });
  console.log('Generated public/social-preview.png (1200 × 630)');
} finally { await browser.close(); }
