# Proje içerik incelemesi — 21 Ekim 2026

Bu kayıt portfolyo metinlerinin kaynak kontrolüdür; ürünlerin canlı kabul testi, güvenlik denetimi veya yeni yayını değildir. Kartlar ve detaylar TR/EN/DE olarak birlikte güncellendi. Kaynak içerik ziyaret sırasında indirilmez.

## İncelenen sürümler

| Proje | GitHub main commit | Esas alınan kapsam |
| --- | --- | --- |
| Luma frontend | `150ec238d4cf939aed899dbea309f7594648ca7c` | README: görsel katmanlar, mobil önizleme, bölüm stilleri, RSVP ve albüm |
| Luma backend | `6dd571fab70f2b9dfd95984e926c6982636b9f96` | README ve servisler: medya izinleri, saklama, veri tabanlı hız sınırı |
| Mitzi | `81d21c5150a8d4773c0be1707f5d431e0756cc22` | README ve ANDROID_RELEASE: çift joystick, dört mekân, sekiz kedi, iki oda, Android hazırlığı |
| Pin & Paper Journal | `077e4c02b0dfe97eb741f883c468ef37e319ef1b` | README, lib/asset-repository.ts ve lib/cloud-drafts.ts: metin/medya şifreleme, şifreli cache ve taslaklar |
| RealDev | `eab5f40d7024cb37da0788ba76dd969b62e449c6` | README, PROJECT-STATUS, PROJECT-DELIVERY ve docs/runner-vds: 1.312 soru, kabul testleri, kod çalıştırma ve runner dağıtım altyapısı |
| Budget Buddy | `7f6543865487b3aa507fe06d14219305ccb8398c` | README ve güncel commit değişiklikleri: Supabase Auth, aile iş birliği, dilli e-postalar ve SEO adresleri |
| Rogi | `6ba7f34d9ed6fdf8a64dc16d53fb7f46d54aa849` | README, TASKS ve render.js: hesap/proje/rapor, AST, çok sayfa, güvenli taşıma ve Chromium render |

GitHub kayıtları `gh api` ile salt okunur alındı. Diğer projelerin çalışma ağaçlarına, veritabanlarına, hesaplarına veya yayınlarına yazılmadı.

## Çelişkiler ve yayın sınırları

- Journal README'sinde görsel şifreleme gelecek zamanla anlatılıyor; GitHub'daki gerçek medya ve taslak kodu uygulamayı doğruluyor. Metinler koda göre düzeltildi.
- Journal'ın yerel, henüz GitHub'a işlenmemiş sürüm kontrollü eşitleme kodu; `SYNC_CONFLICT_ROLLOUT.md`, `lib/page-repository.ts`, `lib/conflict-copy.ts`, `lib/cloud-drafts.ts` ve `lib/theme.ts` üzerinden ayrıca incelendi. Detay sayfasında **yerel geliştirme** olarak belirtilir. Gerçek iki cihaz kabulü veya uygulama yayını tamamlanmış gibi sunulmaz. Kaynak listesinde yalnız GitHub'da mevcut dosyalar linklenir.
- Budget Buddy'nin eski README/yerel Supabase Auth farkı güncel main'de ortadan kalkmış. Yeni metin güncel GitHub durumunu esas alır; eski yerel çalışma ağacıyla remote main karıştırılmaz. Ödeme ve Google girişi koşullu özelliklerdir.
- RealDev envanterindeki bazı işletim notları eski tarihlidir. Runner dağıtım kodu kalıcı sunucunun gerçekten etkin olduğunu kanıtlamaz. Bildirim desteği yazılır; günlük teslimat, 7/24 hizmet ve canlı Unity sandbox iddiası eklenmez. Ürün sertifikasyon olarak tanımlanmaz.
- Mitzi belgelerinde paket, cihaz ve Play test kayıtları farklı zamanlara aittir. Oynanış ve Android hazırlığı güncellenir; genel mağaza yayını, tüm cihazlarda kabul veya onaylı canlı reklam iddiası eklenmez.
- Rogi'nin bazı README kapsam satırları TASKS ve koddaki hesap/kalıcı rapor özelliklerinin gerisindedir. Node güvenli taşıması ve kalıcı kota mevcutken Worker taşıma sınırı korunur. Korumalı kişisel demo, herkesin erişebileceği demo gibi linklenmez.
- Luma aynı commit'te olmasına rağmen önceki portfolyo kaydında özetlenmeyen görsel düzenleyici kapsamı ayrıntılandırıldı. Canlı kapasite ve SMTP ayrıca test edilmedi.
- Atatürk Arşivi ve genel Shopify kaydında yeni paylaşılabilir kaynak olmadığı için kişisel katkı sınırı, içerik ve inceleme tarihi korunur.
- İlk içerik güncellemesinde ekran görselleri değiştirilmedi. Sonraki Mitzi görsel çalışmasında ortam görselinin yerini gerçek Unity ekranları aldı; ayrıntılar [görsel kaydındadır](mitzi-screenshots.md). Journal'ın tasarım önizlemesi etiketi korunur.

## Doğrulama sınırı

Portfolyo testi içerik, yerleşim, rota, dil, tema ve indirme akışını denetler. Diğer ürünlerin uçtan uca testleri bu görevde çalıştırılmadı. Canlı yayın için değişikliğe özel onay gerekir; otomatik Git dağıtımı kapalı tutulur.
