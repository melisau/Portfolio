import type { Language } from './i18n';

type Localized = Record<Language, string>;
export type ProjectHighlight = { value: string | Localized; label: Localized };

/* Rakamlar projectDetails.mjs içindeki doğrulanmış metinlerden türetilir; yeni iddia eklenmez. */
export const projectHighlights: Record<string, ProjectHighlight[]> = {
  luma: [
    { value: '12', label: { tr: 'Düzenleyicide en fazla görsel katman', en: 'Maximum visual layers in the editor', de: 'Bildebenen maximal im Editor' } },
    { value: '390 px', label: { tr: 'Kaydetmeden mobil önizleme tuvali', en: 'Mobile preview canvas for unsaved designs', de: 'Mobilvorschau für ungespeicherte Entwürfe' } },
    { value: 'CSV · ZIP', label: { tr: 'RSVP ve albüm dışa aktarma', en: 'RSVP and album export', de: 'Export für Zusagen und Album' } },
    { value: 'WebP', label: { tr: 'Yüklenen görsellerin dönüştürüldüğü biçim', en: 'Format uploads are converted to', de: 'Zielformat für hochgeladene Bilder' } },
  ],
  'mitzi-paw-path': [
    { value: '4', label: { tr: 'İlerlemeyle açılan mekân', en: 'Environments unlocked through progress', de: 'Freischaltbare Umgebungen' } },
    { value: '8', label: { tr: 'Evde buluşan kedi', en: 'Cats brought together at home', de: 'Katzen im gemeinsamen Zuhause' } },
    { value: '2', label: { tr: 'Kontrol biçimi: çizim ve joystick', en: 'Control modes: drawing and joysticks', de: 'Steuerungen: Zeichnen und Joysticks' } },
    { value: '3', label: { tr: 'Öğretici dili (TR · EN · DE)', en: 'Tutorial languages (TR · EN · DE)', de: 'Tutorial-Sprachen (TR · EN · DE)' } },
  ],
  'pin-paper-journal': [
    { value: 'AES-256-GCM', label: { tr: 'Yüklemeden önce tarayıcıda şifreleme', en: 'In-browser encryption before upload', de: 'Verschlüsselung im Browser vor dem Upload' } },
    { value: { tr: '600.000', en: '600,000', de: '600.000' }, label: { tr: 'PBKDF2-HMAC-SHA-256 yinelemesi', en: 'PBKDF2-HMAC-SHA-256 iterations', de: 'PBKDF2-HMAC-SHA-256-Iterationen' } },
    { value: '96-bit', label: { tr: 'Her şifreli değer için yeni IV', en: 'Fresh IV for every encrypted value', de: 'Neuer IV für jeden verschlüsselten Wert' } },
    { value: 'RLS', label: { tr: 'Sahip bazlı PostgreSQL erişimi', en: 'Owner-scoped PostgreSQL access', de: 'Kontobezogener PostgreSQL-Zugriff' } },
  ],
  'be-a-real-developer': [
    { value: { tr: '1.312', en: '1,312', de: '1.312' }, label: { tr: 'TR/EN değerlendirme sorusu', en: 'TR/EN assessment questions', de: 'TR/EN-Fragen' } },
    { value: '13', label: { tr: 'Konu alanı', en: 'Topic areas', de: 'Themenbereiche' } },
    { value: '24', label: { tr: 'Özgün iki dilli kavram makalesi', en: 'Original bilingual concept articles', de: 'Eigene zweisprachige Fachartikel' } },
    { value: '4', label: { tr: 'Kod çalıştırma dili: JS, Python, C#, Java', en: 'Execution languages: JS, Python, C#, Java', de: 'Ausführungssprachen: JS, Python, C#, Java' } },
  ],
  'budget-buddy': [
    { value: '3', label: { tr: 'Aile rolü: owner · member · viewer', en: 'Family roles: owner · member · viewer', de: 'Familienrollen: owner · member · viewer' } },
    { value: 'TR · EN', label: { tr: 'Ayrı kanonik giriş adresleri', en: 'Separate canonical landing routes', de: 'Eigene kanonische Landingpages' } },
    { value: 'CSV', label: { tr: 'İşlem içe ve dışa aktarma', en: 'Transaction import and export', de: 'Import und Export von Transaktionen' } },
    { value: 'AI', label: { tr: 'Yalnız onayla işlem oluşturan taslaklar', en: 'Drafts that need confirmation to become transactions', de: 'Entwürfe werden erst nach Bestätigung gebucht' } },
  ],
  rogi: [
    { value: '20', label: { tr: 'Proje başına saklanan bulut raporu', en: 'Cloud reports kept per project', de: 'Cloud-Berichte je Projekt' } },
    { value: '10', label: { tr: 'Tarayıcıda tutulan yerel rapor', en: 'Local reports kept in the browser', de: 'Lokale Berichte im Browser' } },
    { value: '3 + 10', label: { tr: 'Ek sayfa ve iç bağlantı kontrolü', en: 'Extra pages and internal links checked', de: 'Zusätzliche Seiten und interne Links' } },
    { value: 'JSON · CSV', label: { tr: 'Rapor dışa aktarma', en: 'Report export', de: 'Berichtsexport' } },
  ],
};
