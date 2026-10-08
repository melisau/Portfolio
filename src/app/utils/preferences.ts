export function readPreference(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}

export function savePreference(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* Preferences are optional when storage is blocked. */ }
}

export function isLanguage(value: unknown): value is 'tr' | 'en' | 'de' {
  return value === 'tr' || value === 'en' || value === 'de';
}

export function initialLanguage(): 'tr' | 'en' | 'de' {
  const routeLanguage = window.location.pathname.split('/')[1];
  if (isLanguage(routeLanguage)) return routeLanguage;
  if (routeLanguage === 'projects') return 'tr';
  const saved = readPreference('portfolio-language');
  return isLanguage(saved) ? saved : 'tr';
}
