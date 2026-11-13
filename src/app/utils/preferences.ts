export function readPreference(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}

export function savePreference(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* Preferences are optional when storage is blocked. */ }
}

export function isLanguage(value: unknown): value is 'tr' | 'en' | 'de' {
  return value === 'tr' || value === 'en' || value === 'de';
}

const GERMANY_TIME_ZONES = ['Europe/Berlin', 'Europe/Busingen'];
const TURKEY_TIME_ZONES = ['Europe/Istanbul', 'Asia/Istanbul', 'Turkey'];

/* İlk ziyarette dil, cihazın saat diliminden çıkarılan ülkeye göre seçilir:
   Türkiye → tr, Almanya → de, diğer ülkeler → en. Ağ isteği veya IP sorgusu yapılmaz. */
export function detectLanguage(): 'tr' | 'en' | 'de' {
  try {
    // Arama motorları varsayılan (Türkçe) adresi kendi dilinde indekslemeye devam eder.
    if (/bot|crawl|spider|slurp|lighthouse/i.test(navigator.userAgent)) return 'tr';
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (TURKEY_TIME_ZONES.includes(timeZone)) return 'tr';
    if (GERMANY_TIME_ZONES.includes(timeZone)) return 'de';
    if (timeZone && timeZone !== 'UTC' && !timeZone.startsWith('Etc/')) return 'en';
    // Saat dilimi ülke bilgisi vermiyorsa tarayıcının bölge kodu kullanılır.
    const region = new Intl.Locale(navigator.language).maximize().region;
    return region === 'TR' ? 'tr' : region === 'DE' ? 'de' : 'en';
  } catch { return 'en'; }
}

export function initialLanguage(): 'tr' | 'en' | 'de' {
  const routeLanguage = window.location.pathname.split('/')[1];
  if (isLanguage(routeLanguage)) return routeLanguage;
  const saved = readPreference('portfolio-language');
  if (routeLanguage === 'projects') return isLanguage(saved) ? 'tr' : detectLanguage();
  return isLanguage(saved) ? saved : detectLanguage();
}
