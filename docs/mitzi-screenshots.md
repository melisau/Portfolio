# Mitzi ekran görüntüleri

21 Ekim 2026. Kart ve detay kapak görseli gerçek sokak ekranına geçirildi. Detay galerisi sokak ve kedi evi ekranlarını ayrı ayrı gösterir ve büyütür. Önceki `mitzi-paw-path.jpg` artık bu projenin kartında veya detayında kullanılmaz; eski dosya geriye dönük bağlantıları bozmamak için tutulur.

## Kaynak

20 Ekim yayın hazırlığındaki `Builds/Store/20261020/street.png` ve `home.png` dosyaları, yerel `D:/Projects/Mitzi` çalışma klasöründe bulundu. Görseller `PlayStoreCapture.Run` ile izole `MitziValidation` Unity projesindeki gerçek oyun akışından alınmış 1920×1080 ekranlardır. Kaynak açıklaması: [Play yayın kaydı](https://github.com/melisau/Mitzi/blob/81d21c5150a8d4773c0be1707f5d431e0756cc22/Docs/PLAY_RELEASE_20261020.md).

- `street.png` SHA-256: `dc7d8e31f9d412e822a6d3b7ded89e03abdb2967730eec3a3b22c22beef06f80`
- `home.png` SHA-256: `995b52891ff4d0907d135a286ed5cb65f64fc25195493fd68f81d4573bdc1067`

Kaynaklar değiştirilmeden, ek yazı/kompozisyon veya yapay görsel üretimi olmadan lossless WebP'ye dönüştürüldü. Dönüşüm sonrası çözülmüş RGB pikselleri orijinallerle byte-byte karşılaştırıldı ve eşleşti. Çıktılar:

- `public/projects/mitzi-gameplay.webp` — 1920×1080, 2.209.138 bayt.
- `public/projects/mitzi-home.webp` — 1920×1080, 1.416.262 bayt.

PNG toplamı 5.450.844 bayttan 3.625.400 bayta indi. Kartta `contain`, galeride doğal en-boy oranı ve modalda `contain` kullanılır; sahne veya kontroller kesilmez. Galeri görselleri lazy yüklenir. Kayıtlar fiziksel telefon performans testi veya yeni oyun sürümü doğrulaması değildir. Türkçe oyun arayüzü orijinal biçimiyle korunur; açıklama ve erişilebilirlik metinleri portfolyonun TR/EN/DE dilini izler.
