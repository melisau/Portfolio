
# Modern Responsive Portfolio

React, TypeScript, Vite ve Tailwind altyapısı ile hazırlanmış responsive portfolyo/CV sitesi.

## İçerik düzenleme

Profil, fotoğraf, sosyal medya hesapları, beceriler, projeler ve deneyim kayıtlarının tamamı `src/app/data/portfolio.ts` dosyasından yönetilir. Yeni içerik eklemek için sayfa bileşenlerini değiştirmeniz gerekmez.

Her proje kaydı bir görsel, teknoloji listesi ve isteğe bağlı canlı site/kaynak kod bağlantıları kabul eder.

## Çalıştırma

```bash
npm install
npm run dev
```

Üretim derlemesi için `npm run build` komutunu kullanın.

Yazı tipleri `public/fonts` altında self-hosted WOFF2 dosyaları olarak tutulur. `src/styles/fonts.css` yalnızca kullanılan Inter (400/500/600), JetBrains Mono (400/500/600) ve Outfit (400/500/600/700/800) varyantlarını `font-display: swap` ile tanımlar; Google Fonts CDN bağlantısı gerektirmez.

## Dil, SEO ve yayın adresi

- Türkçe ana sayfa `/`, İngilizce `/en/`, Almanca `/de/` adresindedir.
- Proje detayları `/projects/<slug>/`, `/en/projects/<slug>/` ve `/de/projects/<slug>/` adreslerini kullanır.
- `npm run build` her adres için diline uygun title, description ve Open Graph içeren statik HTML üretir. Hosting, bu dizinlerin `index.html` dosyalarını sunmalıdır; tüm yolları zorla tek kök HTML'e yönlendirmeyin.
- Yayın adresi `https://melisauyar.com` olarak ayarlıdır. Başka bir adrese taşınırsa `.env.example` dosyasını örnek alarak `VITE_SITE_URL` tanımlayın. Değer yalnızca HTTPS origin olmalıdır. Derleme canonical, hreflang, mutlak paylaşım görseli URL'leri, robots.txt ve sitemap.xml dosyalarını üretir.
- SEO metinleri `src/app/data/seo.mjs`, arayüz çevirileri `i18n.ts`, erişilebilirlik metinleri `interfaceText.ts` içindedir.
- Favicon `public/favicon.svg`, paylaşım görseli `public/social-preview.png` (1200×630). Kartın vektör kaynağı `scripts/social-card.svg`; yeniden üretmek için `npm run generate:social`.

## Yayın onayı

GitHub gönderimleri canlı siteyi otomatik güncellemez: `vercel.json` içindeki `git.deploymentEnabled: false` Git kaynaklı otomatik deployment'ları kapatır. Mevcut canlı sürüm yayında kalır. Bu ayar otomatik bir onay bildirimi oluşturmaz.

Her yeni canlı yayın için Melisa'dan değişikliklere özel açık onay alınmalıdır; yalnızca GitHub'a gönderme izni canlı yayın izni değildir. Onaydan sonra Vercel panelinden ilgili Git commit'i seçerek manuel deployment başlatın (veya yetkili CLI/API kullanın), sonucu doğrulayın. Otomatik yayını yeniden açmayın.

## Proje detay içerikleri

`src/app/data/projectDetails.mjs` üç dilde düzenlenmiş README anlık görüntülerini tutar. Kaynak bağlantıları ve kontrol tarihi her kayıtta bulunur; ziyaret sırasında GitHub'dan içerik çekilmez. README değiştiğinde içerik bilinçli olarak yeniden incelenmelidir.

Belgelenmeyen kişisel başarılar veya canlı bağlantılar üretilmez. Atatürk Arşivi ve genel Shopify çalışması mevcut portfolyo kapsamıyla sınırlıdır. Budget Buddy'nin GitHub README'si ile daha yeni yerel Supabase Auth dokümantasyonu arasındaki fark detayda açıklanır. Journal görseli tasarım önizlemesi; Mitzi görseli ortam varlığıdır. Bunlar canlı ekran/oynanış olarak etiketlenmez.

CV hazır olduğunda `public/melisa-uyar-cv.pdf` olarak ekleyin. PDF imzası doğrulanınca indirme bağlantısı açılır; dosya yoksa, HTML dönüyorsa veya ağ hatası varsa e-posta ile CV isteme seçeneği gösterilir.

## Otomatik doğrulama

```bash
npm test
npm run test:ui
```

Playwright üretim derlemesini `http://127.0.0.1:4173` üzerinde başlatır ve kapatır. Varsayılan olarak kurulu Microsoft Edge kullanılır; alternatif kurulu kanal `PLAYWRIGHT_CHANNEL` ile seçilebilir. Playwright Chromium kullanmak için bir kez `npx playwright install chromium` çalıştırıp `PLAYWRIGHT_CHANNEL=chromium` ayarlayın.

Kapsam: masaüstü/mobil, üç dil/iki tema, metadata, proje adresleri ve dil geçişi, menü odağı/Escape, içeriğe atlama, azaltılmış hareket, bozuk görseller, engelli localStorage ve CV indirme/hata akışları. CV başarı testi yapay PDF fixture kullanır; gerçek CV henüz yoktur. Dış görseller deterministik fixture ile izole edilir; testler dış sitelerin erişilebilirliğini garanti etmez. Çıktılar işletim sisteminin geçici klasöründeki `portfolio-playwright-results` dizinine yazılır.
  
