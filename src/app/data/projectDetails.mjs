// Editorial snapshots from reviewed documentation and source; never fetched at runtime.
export const projectDetails = [
  {
    "slug": "luma",
    "title": "Luma",
    "image": "/projects/luma.png",
    "stack": [
      "JavaScript",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Cloudflare R2",
      "GSAP"
    ],
    "sources": [
      {
        "label": "Frontend README",
        "url": "https://github.com/melisau/luma-frontend/blob/main/README.md"
      },
      {
        "label": "Backend README",
        "url": "https://github.com/melisau/luma-backend/blob/main/README.md"
      }
    ],
    "links": [
      {
        "label": "Frontend",
        "url": "https://github.com/melisau/luma-frontend"
      },
      {
        "label": "Backend",
        "url": "https://github.com/melisau/luma-backend"
      }
    ],
    "reviewedAt": "2026-10-21",
    "copy": {
      "tr": {
        "tagline": "Görsel davetiye tasarımından RSVP ve özel anı albümüne uzanan etkinlik platformu.",
        "problem": "Davetiyeler, katılım yanıtları ve etkinlik fotoğrafları farklı araçlara dağıldığında takip ve gizlilik yönetimi zorlaşıyor.",
        "goal": "Etkinlik sahibinin davetiyeyi kod yazmadan kişiselleştirmesini; misafir yanıtlarını, fotoğrafları ve mesajları aynı panelden yönetmesini sağlamak.",
        "role": "Full-stack geliştirme",
        "scope": "Bireysel full-stack proje: iki dilli tanıtım, görsel davetiye düzenleyicisi, mobil önizleme, misafir akışları, FastAPI servisleri ve özel medya yönetimi.",
        "features": [
          "Bölüm arka planları, sticker, kâğıt dokuları, fotoğraf çerçeveleri ve asimetrik sergi düzenleri",
          "Zarf ve kurdele açılışı; kaydırma animasyonları ve azaltılmış hareket desteği",
          "Kaydetmeden renk, görsel katman ve açılış ayarlarını gösteren 390 px mobil önizleme",
          "Kişisel düzenleme bağlantılı RSVP; kişi sayısı, beslenme notları ve CSV aktarımı",
          "Onaylı fotoğraf ve ziyaretçi defteri, QR yükleme, yinelenen fotoğraf kontrolü ve ZIP albüm aktarımı",
          "Etkinlik erişim kodu, bağımsız albüm gizliliği ve onaylı anı saklama politikası"
        ],
        "architecture": "Statik JavaScript arayüz → FastAPI REST API → SQLAlchemy / PostgreSQL. Alembic şema geçişlerini yönetir; özel R2/S3 medyası yetki kontrollü API üzerinden sunulur. GSAP açılışları ve bölüm animasyonlarını yürütür; üretim için veritabanı tabanlı hız sınırlama seçeneği bulunur.",
        "decisions": [
          "Düzenleyicinin 12 katmana kadar görsel verisi etkinliğe ait varlık kimlikleriyle saklanır; istemcinin verdiği rastgele medya URL’leri kalıcılaştırılmaz.",
          "Yüklenen görseller EXIF yönüne göre düzeltilir, boyutlandırılır ve şeffaflığı koruyan WebP’ye dönüştürülür.",
          "Davetiye görünümü yönetim panelinin marka stilinden ayrılır; PATCH isteğinde gönderilmeyen ayarlar korunur.",
          "Misafir RSVP bağlantılarında yalnız token hash’i saklanır; albümün görünürlüğü ile yükleme izni ayrı yönetilir."
        ],
        "challenges": [
          "Kaydedilmemiş tasarımı telefonda değerlendirmek: mobil tuval yerel dosyaları sunucuya yüklemeden gösterir; tam animasyon ayrı canlı önizlemede çalışır.",
          "Özel albüm erişimi: yeni medya okumaları güncel izinlerden geçer; indirilen kopyaların geri alınabileceği iddia edilmez.",
          "Saklama süresi dolan anılar: başarısız dosya silmelerinin kayıtları yeniden deneme için tutulur; PostgreSQL satır kilitleri çoklu worker işlemlerini koordine eder."
        ],
        "limits": "Kaynak ve kod incelemesi yapıldı; canlı hizmet kapasitesi veya üretimde SMTP teslimatı bu portfolyo güncellemesinde test edilmedi.",
        "caption": "Luma giriş ekranı"
      },
      "en": {
        "tagline": "An event platform spanning visual invitation design, RSVPs and private shared memories.",
        "problem": "Invitations, attendance responses and event photos become difficult to manage when scattered across different tools.",
        "goal": "Let hosts personalize invitations without writing code and manage guest responses, photos and messages in one workspace.",
        "role": "Full-stack development",
        "scope": "Personal full-stack project: bilingual landing, visual invitation editor, mobile preview, guest flows, FastAPI services and private media management.",
        "features": [
          "Section backgrounds, stickers, paper textures, photo frames and asymmetric gallery layouts",
          "Envelope and ribbon openings, scroll animation and reduced-motion support",
          "A 390 px mobile preview for unsaved colors, visual layers and opening settings",
          "RSVP with private edit links, party size, dietary notes and CSV export",
          "Moderated photos and guestbook, QR uploads, duplicate detection and ZIP album export",
          "Event access codes, independent album privacy and explicitly confirmed retention settings"
        ],
        "architecture": "Static JavaScript UI → FastAPI REST API → SQLAlchemy / PostgreSQL. Alembic manages schema changes; private R2/S3 media is served through permission-checked APIs. GSAP drives openings and section animation; a database-backed rate-limit option supports production configuration.",
        "decisions": [
          "Up to 12 visual layers reference event-owned asset IDs; arbitrary client-provided media URLs are not persisted.",
          "Uploads are EXIF-oriented, resized and encoded as WebP while preserving transparency.",
          "Invitation presentation is separate from the administration brand; omitted PATCH settings retain their saved values.",
          "Only RSVP token hashes are stored; album visibility and upload permission remain independent."
        ],
        "challenges": [
          "Previewing unsaved designs on a phone-sized canvas: local files render without uploading; the full animation runs in a separate live preview.",
          "Private albums: new media reads check current permissions; previously downloaded copies cannot be recalled.",
          "Expiring memories: failed storage deletions retain their records for retry, while PostgreSQL row locks coordinate multiple workers."
        ],
        "limits": "Reviewed against documentation and code; this portfolio update does not test live capacity or production SMTP delivery.",
        "caption": "Luma landing screen"
      },
      "de": {
        "tagline": "Eine Eventplattform von der visuellen Einladung bis zu Zusagen und privaten Erinnerungen.",
        "problem": "Einladungen, Zusagen und Veranstaltungsfotos lassen sich in getrennten Werkzeugen nur schwer verwalten.",
        "goal": "Gastgeber sollen Einladungen ohne Programmierung gestalten und Gästeantworten, Fotos und Nachrichten gemeinsam verwalten können.",
        "role": "Full-Stack-Entwicklung",
        "scope": "Persönliches Full-Stack-Projekt: zweisprachige Landingpage, visueller Editor, mobile Vorschau, Gästeabläufe, FastAPI-Dienste und private Medienverwaltung.",
        "features": [
          "Abschnittshintergründe, Sticker, Papiertexturen, Fotorahmen und asymmetrische Galerien",
          "Umschlag- und Schleifenöffnung, Scrollanimationen und reduzierte Bewegung",
          "390-px-Mobilvorschau für ungespeicherte Farben, Ebenen und Öffnungseinstellungen",
          "Zusagen mit privaten Bearbeitungslinks, Personenzahl, Ernährungshinweisen und CSV-Export",
          "Moderierte Fotos und Gästebuch, QR-Uploads, Duplikatprüfung und ZIP-Albumexport",
          "Zugangscodes, separate Album-Privatsphäre und ausdrücklich bestätigte Aufbewahrung"
        ],
        "architecture": "Statische JavaScript-Oberfläche → FastAPI REST API → SQLAlchemy / PostgreSQL. Alembic verwaltet Schemaänderungen; private R2/S3-Medien werden über berechtigungsgeprüfte APIs bereitgestellt. GSAP steuert Öffnungs- und Scrollanimationen; eine datenbankgestützte Ratenbegrenzung ist konfigurierbar.",
        "decisions": [
          "Bis zu 12 Bildebenen referenzieren veranstaltungseigene Dateien; beliebige vom Client gelieferte Medien-URLs werden nicht gespeichert.",
          "Uploads werden anhand der EXIF-Ausrichtung korrigiert, verkleinert und mit erhaltener Transparenz als WebP gespeichert.",
          "Einladungsdesign und Verwaltungsdesign bleiben getrennt; ausgelassene PATCH-Felder behalten ihre bisherigen Werte.",
          "Für RSVP-Links werden nur Token-Hashes gespeichert; Albumansicht und Upload-Erlaubnis bleiben unabhängig."
        ],
        "challenges": [
          "Ungespeicherte Gestaltung mobil prüfen: lokale Dateien erscheinen ohne Upload auf der Vorschaufläche; die vollständige Animation läuft separat.",
          "Private Alben: neue Medienaufrufe prüfen aktuelle Rechte; bereits heruntergeladene Kopien lassen sich nicht zurückholen.",
          "Abgelaufene Erinnerungen: fehlgeschlagene Dateilöschungen bleiben erneut ausführbar; PostgreSQL-Zeilensperren koordinieren mehrere Worker."
        ],
        "limits": "Dokumentation und Code wurden geprüft; Live-Kapazität und SMTP-Zustellung wurden hier nicht getestet.",
        "caption": "Luma-Startseite"
      }
    },
    "sourceRevisions": {
      "luma-frontend": "150ec238d4cf939aed899dbea309f7594648ca7c",
      "luma-backend": "6dd571fab70f2b9dfd95984e926c6982636b9f96"
    }
  },
  {
    "slug": "mitzi-paw-path",
    "title": "Mitzi: Paw Path",
    "image": "/projects/mitzi-gameplay.webp",
    "gallery": [
      {
        "image": "/projects/mitzi-gameplay.webp",
        "captions": {
          "tr": "Sokak bölümü ve pati joystickleri — Unity’den alınmış gerçek oyun ekran görüntüsü.",
          "en": "Street level and paw joysticks — an actual game screenshot captured in Unity.",
          "de": "Straßenlevel und Pfoten-Joysticks — echte Spielaufnahme aus Unity."
        }
      },
      {
        "image": "/projects/mitzi-home.webp",
        "captions": {
          "tr": "Kedi evi, bakım göstergeleri ve oda kontrolleri — Unity’den alınmış gerçek oyun ekran görüntüsü.",
          "en": "Cat home, care indicators and room controls — an actual game screenshot captured in Unity.",
          "de": "Katzenzuhause, Pflegeanzeigen und Zimmersteuerung — echte Spielaufnahme aus Unity."
        }
      }
    ],
    "stack": [
      "Unity 2022.3",
      "C#",
      "2D Physics",
      "ScriptableObject",
      "PlayerPrefs",
      "Android / IL2CPP"
    ],
    "sources": [
      {
        "label": "README",
        "url": "https://github.com/melisau/Mitzi/blob/main/README.md"
      },
      {
        "label": "Android release",
        "url": "https://github.com/melisau/Mitzi/blob/81d21c5150a8d4773c0be1707f5d431e0756cc22/ANDROID_RELEASE.md"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/melisau/Mitzi"
      }
    ],
    "reviewedAt": "2026-10-21",
    "copy": {
      "tr": {
        "tagline": "Çizerek ya da pati joystickleriyle ilerle; sekiz kediyi iki odalı evinde buluştur.",
        "problem": "Yalnızca bölüm geçmeye dayalı oyun döngüsüne, yaratıcı kontrol ve kalıcı bir bakım alanı ekleme fikri.",
        "goal": "İki kontrol biçimini, mekâna göre gelişen zorluğu ve kalıcı kedi bakımını birleştiren mobil 2D oyun geliştirmek.",
        "role": "Unity / C# oyun geliştirme",
        "scope": "Bireysel Unity / C# projesi: çizim fiziği, çift joystick kontrolü, bölüm ve kurtarma ilerlemesi, iki odalı ev, ekonomi, kayıt dayanıklılığı ve Android sürüm hazırlığı.",
        "features": [
          "Çizerek ve tuşlarla oynama; hareket, çift zıplama ve eğilme için pati joystickleri",
          "Sokak, Orman, Cadde ve Neo Teknoloji; ilerlemeyle açılan mekânlar ve mekâna özgü otomatik zorluk",
          "Mitzi ile başlayan, 7–70. bölümler arasında yedi farklı kedinin kurtarıldığı ilerleme",
          "İki oda, dokunarak veya joystick ile kedi yönlendirme; mama, su, uyku ve bakım etkileşimleri",
          "Mobilya yerleştirme, taşıma, döndürme, depolama, satış ve oda bazlı duvar kâğıdı",
          "Türkçe, İngilizce ve Almanca öğreticiler; sürümlü kayıt ve sekiz saatle sınırlı çevrimdışı ihtiyaç hesabı"
        ],
        "architecture": "Unity Built-in Render Pipeline üzerinde Core, Drawing, Levels, Hub, UI ve Economy modülleri. ScriptableObject içerik kataloglarını; PlayerPrefs içindeki şema 5 JSON ilerleme, envanter, oda düzeni ve ihtiyaçları taşır. Android sürüm hazırlığı ARM64 / IL2CPP ve imzalı paket doğrulamasını kapsar.",
        "decisions": [
          "Zorluk her mekânın kendi geçmişiyle ilerler; eski kayıtlarda genel ilerleme ve kurtarılan kediler korunur.",
          "Kayıtlar son sağlam yedekle tutulur; çevrimdışı ihtiyaç azalması sekiz saatle sınırlandırılır.",
          "İki joystick ayrı parmakları izler; odak kaybı, duraklatma ve bırakma sırasında giriş temizlenir.",
          "Reklam ödülü yalnız tamamlanmış izleme sonrası ve günlük sınırla verilir; SDK ve yayın onayı canlı reklamın etkin olduğu anlamına gelmez."
        ],
        "challenges": [
          "Çukur ve eğilme geometrisi: gerçek collider’larla dört mekânda, farklı kedi boyutları ve hareket durumlarında fizik senaryoları doğrulandı.",
          "Evde dokunma, oda kaydırma ve eşya düzenlemesini ayırmak: UI ve eşyalardan başlayan hareketler oda geçişi veya yanlış yürüme komutu üretmez.",
          "Mobil sürüm hazırlığı: imzalı AAB/APK, API 36 ve 16 KB sayfa uyumluluğu kontrolleri belgelendi; mağaza ve cihaz kabulü ayrı doğrulanır."
        ],
        "limits": "Android paket ve Play test hazırlığı sürüyor; genel mağaza yayını veya canlı reklam onayı iddia edilmez. Fizik denemeleri tam oyun/gerçek cihaz kabulünün yerine geçmez.",
        "caption": "Sokak bölümü — Unity’den alınmış gerçek oyun ekran görüntüsü."
      },
      "en": {
        "tagline": "Draw a path or use paw joysticks, then bring eight cats together in a two-room home.",
        "problem": "Explore a level-based game loop that combines creative controls with a persistent cat-care space.",
        "goal": "Build a mobile 2D game combining two control modes, environment-specific difficulty and persistent cat care.",
        "role": "Unity / C# game development",
        "scope": "Personal Unity / C# project: drawing physics, dual-joystick controls, levels and rescues, a two-room home, economy, resilient saves and Android release preparation.",
        "features": [
          "Draw-to-play and direct controls with paw joysticks for movement, double jump and crouch",
          "Street, Forest, Avenue and Neo Technology, unlocked through progress with environment-specific difficulty",
          "Start with Mitzi and rescue seven more cats between levels 7 and 70",
          "Two rooms, tap or joystick cat movement, feeding, water, sleep and care interactions",
          "Place, move, rotate, store and sell furniture, with separate wallpapers for each room",
          "Turkish, English and German tutorials, versioned saves and offline needs capped at eight hours"
        ],
        "architecture": "Unity Built-in Render Pipeline with Core, Drawing, Levels, Hub, UI and Economy modules. ScriptableObjects define content; schema-5 JSON in PlayerPrefs stores progress, inventory, room layouts and needs. Android release preparation covers ARM64 / IL2CPP and signed-package verification.",
        "decisions": [
          "Difficulty follows each environment’s own history; legacy saves retain overall progress and rescued cats.",
          "Saves retain a last-known-good backup, while offline needs decay is capped at eight hours.",
          "Joysticks track separate fingers and clear input on focus loss, pause and release.",
          "Ad rewards require completed viewing and daily limits; SDK integration and release preparation do not imply approved live ads."
        ],
        "challenges": [
          "Gaps and crouch geometry: physics scenarios use real colliders across four environments, different cat sizes and movement states.",
          "Separating room swipes, taps and furniture editing prevents gestures starting on UI or objects from causing room changes or unintended movement.",
          "Mobile release preparation documents signed AAB/APK, API 36 and 16 KB compatibility checks; store and device acceptance remain separate."
        ],
        "limits": "Android package and Play test preparation is ongoing; no general store launch or live-ad approval is claimed. Physics checks are not complete gameplay or device acceptance.",
        "caption": "Street level — an actual game screenshot captured in Unity."
      },
      "de": {
        "tagline": "Zeichne Wege oder steuere mit Pfoten-Joysticks und vereine acht Katzen in einem Zuhause mit zwei Zimmern.",
        "problem": "Ein Level-Spielkonzept, das kreative Steuerung mit einem dauerhaften Pflegebereich für Katzen verbindet.",
        "goal": "Ein mobiles 2D-Spiel mit zwei Steuerungen, umgebungsabhängiger Schwierigkeit und dauerhafter Katzenpflege entwickeln.",
        "role": "Unity-/C#-Spieleentwicklung",
        "scope": "Persönliches Unity-/C#-Projekt: Zeichenphysik, zwei Joysticks, Level- und Rettungsfortschritt, zwei Zimmer, Wirtschaft, robuste Spielstände und Android-Vorbereitung.",
        "features": [
          "Zeichenmodus und Direktsteuerung mit Pfoten-Joysticks für Bewegung, Doppelsprung und Ducken",
          "Straße, Wald, Avenue und Neo-Technologie mit freischaltbaren Umgebungen und eigener Schwierigkeit",
          "Mit Mitzi beginnen und sieben weitere Katzen zwischen Level 7 und 70 retten",
          "Zwei Zimmer, Katzen per Tippen oder Joystick führen, Futter, Wasser, Schlaf und Pflege",
          "Möbel platzieren, bewegen, drehen, lagern und verkaufen; eigene Tapeten je Zimmer",
          "Türkische, englische und deutsche Tutorials, versionierte Spielstände und höchstens acht Stunden Offline-Bedürfnisse"
        ],
        "architecture": "Unity Built-in Render Pipeline mit Core-, Drawing-, Levels-, Hub-, UI- und Economy-Modulen. ScriptableObjects definieren Inhalte; JSON mit Schema 5 in PlayerPrefs speichert Fortschritt, Inventar, Zimmer und Bedürfnisse. Die Android-Vorbereitung umfasst ARM64 / IL2CPP und signierte Pakete.",
        "decisions": [
          "Jede Umgebung hat einen eigenen Schwierigkeitsverlauf; alte Spielstände behalten Gesamtfortschritt und gerettete Katzen.",
          "Eine letzte intakte Sicherung schützt Spielstände; Offline-Bedürfnisse ändern sich höchstens über acht Stunden.",
          "Joysticks verfolgen Finger getrennt und setzen Eingaben bei Fokusverlust, Pause und Loslassen zurück.",
          "Werbebelohnungen gelten erst nach vollständiger Wiedergabe und mit Tageslimit; die Integration bedeutet keine Freigabe für Live-Werbung."
        ],
        "challenges": [
          "Lücken und Duckpassagen: Physikprüfungen verwenden echte Collider in vier Umgebungen, unterschiedliche Katzengrößen und Bewegungszustände.",
          "Zimmerwechsel, Tippen und Möbelbearbeitung werden getrennt, damit Gesten über UI oder Objekten keine falschen Bewegungen auslösen.",
          "Signierte AAB/APK, API 36 und 16-KB-Kompatibilität sind dokumentiert; Store- und Geräteabnahme werden separat geprüft."
        ],
        "limits": "Android-Paket- und Play-Testvorbereitung läuft; kein allgemeiner Store-Start und keine Freigabe für Live-Werbung werden behauptet.",
        "caption": "Straßenlevel — echte Spielaufnahme aus Unity."
      }
    },
    "sourceRevisions": {
      "Mitzi": "81d21c5150a8d4773c0be1707f5d431e0756cc22"
    }
  },
  {
    "slug": "pin-paper-journal",
    "title": "Pin & Paper Journal",
    "image": "/projects/journal.png",
    "stack": [
      "Next.js",
      "TypeScript",
      "Supabase Auth",
      "PostgreSQL / RLS",
      "Web Crypto API",
      "IndexedDB"
    ],
    "sources": [
      {
        "label": "README",
        "url": "https://github.com/melisau/pin-paper-journal/blob/main/README.md"
      },
      {
        "label": "Encrypted media",
        "url": "https://github.com/melisau/pin-paper-journal/blob/077e4c02b0dfe97eb741f883c468ef37e319ef1b/lib/asset-repository.ts"
      },
      {
        "label": "Encrypted drafts",
        "url": "https://github.com/melisau/pin-paper-journal/blob/077e4c02b0dfe97eb741f883c468ef37e319ef1b/lib/cloud-drafts.ts"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/melisau/pin-paper-journal"
      }
    ],
    "reviewedAt": "2026-10-21",
    "copy": {
      "tr": {
        "tagline": "Yazı, fotoğraf ve çizimleri şifreli bir dijital defterde bir araya getir.",
        "problem": "Görsel günlüklerin kişisel içerikleri kolay düzenlemesi kadar, hesabın ve saklanan verinin sınırlarını koruması da önemli.",
        "goal": "Çok sayfalı görsel günlük düzenini; hesaplara özel veri, tarayıcıda şifrelenen medya, kurtarma ve yerel taslak korumasıyla birleştirmek.",
        "role": "Full-stack geliştirme",
        "scope": "Bireysel full-stack proje: görsel defter editörü, Supabase hesapları, metin ve medya şifreleme, yedek/kurtarma, mobil kullanım; yerel geliştirmede sürüm kontrollü eşitleme ve tema çalışmaları.",
        "features": [
          "Çok sayfalı defterler, fotoğraf, sticker, çizim, kâğıt stilleri ve planlayıcı şablonları",
          "Supabase Auth, e-posta doğrulama, parola kurtarma ve sahip bazlı PostgreSQL RLS",
          "Metin, fotoğraf ve çizim verisini yüklemeden önce AES-256-GCM ile şifreleme",
          "Şifreli IndexedDB medya önbelleği ve şifreli bekleyen bulut taslakları",
          "Kurtarma koduyla ana anahtarı açma; parola değişiminde aynı içeriğe erişimi koruma",
          "Fotoğraf sıkıştırma, görünür sayfa medyasını yükleme ve parolalı defter yedeği",
          "Türkçe/İngilizce arayüz, mobil defter kitaplığı ve okuma modu"
        ],
        "architecture": "Next.js App Router → Supabase Auth / PostgreSQL / özel Storage. Metin ve medya tarayıcıda Web Crypto ile şifrelenir; IndexedDB şifreli medya önbelleği tutar. Yerel geliştirmedeki sürümlü SQL snapshot/RPC akışı, kaydı beklenen defter revizyonuyla aynı transaction içinde karşılaştırır.",
        "decisions": [
          "Her şifreli değer yeni 96-bit IV kullanır; parola sarma anahtarı rastgele salt ve 600.000 PBKDF2-HMAC-SHA-256 yinelemesiyle türetilir.",
          "Kurtarma kodunun açık biçimi sunucuda tutulmaz; parola değişiminde içerik anahtarı değil sarılmış kopyası yenilenir.",
          "Medya indirme sonrası tarayıcıda çözülür; önbellek ve bekleyen taslaklar açık metin yerine şifreli tutulur.",
          "Yerel eşitleme geliştirmesinde çakışma otomatik ezilmez; taslak yeni anahtarla ayrı deftere kurtarılır. Gerçek iki cihaz kabulü henüz ayrı doğrulama gerektirir."
        ],
        "challenges": [
          "Metin dışında medyayı korumak: dosya ve metadata ayrı şifrelenir; çözülmüş object URL’leri kullanım sonunda temizlenir.",
          "Kesintide taslağı kaybetmemek: senkronize edilmemiş içerik şifreli saklanır; tarayıcı verilerinin silinmesine karşı kalıcı garanti verilmez.",
          "Birden fazla sekmeden eski kayıt: yerel sürüm denetimi eski revizyonu reddeder ve sekme taslaklarını ayırır; yayın durumu ile yerel test sonucu karıştırılmaz."
        ],
        "limits": "Medya şifrelemesi artık kaynakta uygulanmış durumda; README’deki gelecek zaman ifadesi geride kalmış. Sürüm kontrollü eşitleme ve tema değişiklikleri yerel çalışma olarak incelendi; bağımsız güvenlik incelemesi ve canlı iki cihaz kabulü yerine geçmez.",
        "caption": "Journal için tasarım önizlemesi; doğrulanmış canlı uygulama ekranı değildir."
      },
      "en": {
        "tagline": "Bring writing, photos and drawings together in an encrypted digital notebook.",
        "problem": "A visual journal needs both flexible creative editing and clear boundaries around accounts and stored personal content.",
        "goal": "Combine multi-page visual journaling with owner-only data, browser-encrypted media, recovery and local draft protection.",
        "role": "Full-stack development",
        "scope": "Personal full-stack project: visual notebook editor, Supabase accounts, text/media encryption, backup and recovery, mobile use; local development includes versioned sync and theme work.",
        "features": [
          "Multi-page notebooks, photos, stickers, drawings, paper styles and planner templates",
          "Supabase Auth, email verification, password recovery and owner-scoped PostgreSQL RLS",
          "AES-256-GCM encryption of text, photos and drawings before upload",
          "Encrypted IndexedDB media cache and encrypted pending cloud drafts",
          "Recovery-code access to the master key, preserving content through password changes",
          "Photo compression, visible-page media loading and password-protected notebook backups",
          "Turkish/English interface, mobile notebook library and reading mode"
        ],
        "architecture": "Next.js App Router → Supabase Auth / PostgreSQL / private Storage. Web Crypto encrypts text and media in the browser; IndexedDB stores encrypted media caches. The locally developed versioned SQL snapshot/RPC flow checks the expected notebook revision within the write transaction.",
        "decisions": [
          "Each encrypted value uses a fresh 96-bit IV; wrapping keys use a random salt and 600,000 PBKDF2-HMAC-SHA-256 iterations.",
          "Readable recovery codes are not stored on the server; password changes replace the wrapped key, not the content key.",
          "Media is decrypted after download; cached media and pending drafts stay encrypted rather than plaintext.",
          "Local sync work rejects conflicting overwrites and recovers drafts into a separate notebook with a new key; live two-device acceptance remains separate."
        ],
        "challenges": [
          "Protecting media as well as text: files and metadata are encrypted separately, and decrypted object URLs are cleaned up after use.",
          "Preserving interrupted edits: unsynced drafts stay encrypted, but clearing browser data cannot be made loss-proof.",
          "Stale saves from multiple tabs: local revision checks reject old writes and isolate tab drafts; local verification is not a deployed-release claim."
        ],
        "limits": "Media encryption is implemented in source despite older README wording. Versioned sync and themes were reviewed as local work, not independent security review or live two-device acceptance.",
        "caption": "Journal design preview; not a verified live-application screenshot."
      },
      "de": {
        "tagline": "Texte, Fotos und Zeichnungen in einem verschlüsselten digitalen Notizbuch verbinden.",
        "problem": "Ein visuelles Tagebuch benötigt flexible Gestaltung und klare Grenzen für Konten und persönliche Inhalte.",
        "goal": "Mehrseitige visuelle Tagebücher mit kontoeigenen Daten, im Browser verschlüsselten Medien, Wiederherstellung und lokalen Entwürfen verbinden.",
        "role": "Full-Stack-Entwicklung",
        "scope": "Persönliches Full-Stack-Projekt: visueller Editor, Supabase-Konten, Text-/Medienverschlüsselung, Sicherung und Wiederherstellung sowie mobile Nutzung; lokale Arbeit an versionierter Synchronisierung und Themes.",
        "features": [
          "Mehrseitige Notizbücher, Fotos, Sticker, Zeichnungen, Papierstile und Planervorlagen",
          "Supabase Auth, E-Mail-Bestätigung, Passwortwiederherstellung und kontobezogenes PostgreSQL RLS",
          "AES-256-GCM-Verschlüsselung von Texten, Fotos und Zeichnungen vor dem Upload",
          "Verschlüsselter IndexedDB-Mediencache und verschlüsselte ausstehende Cloud-Entwürfe",
          "Hauptschlüssel per Wiederherstellungscode öffnen und Inhalte bei Passwortänderung erhalten",
          "Fotokompression, Medienladen für sichtbare Seiten und passwortgeschützte Sicherungen",
          "Türkische/englische Oberfläche, mobile Notizbuchbibliothek und Lesemodus"
        ],
        "architecture": "Next.js App Router → Supabase Auth / PostgreSQL / privater Storage. Web Crypto verschlüsselt Text und Medien im Browser; IndexedDB speichert verschlüsselte Medien. Der lokal entwickelte versionierte SQL-Snapshot/RPC prüft die erwartete Notizbuchrevision innerhalb der Schreibtransaktion.",
        "decisions": [
          "Jeder verschlüsselte Wert nutzt einen neuen 96-Bit-IV; Schlüsselableitung erfolgt mit zufälligem Salt und 600.000 PBKDF2-HMAC-SHA-256-Iterationen.",
          "Lesbare Wiederherstellungscodes werden nicht serverseitig gespeichert; Passwortänderungen erneuern den verpackten Schlüssel, nicht den Inhaltsschlüssel.",
          "Medien werden nach dem Download entschlüsselt; Cache und ausstehende Entwürfe bleiben verschlüsselt.",
          "Die lokale Synchronisierung verweigert widersprüchliche Überschreibungen und rettet Entwürfe in ein neues Notizbuch; echte Zwei-Geräte-Abnahme bleibt separat."
        ],
        "challenges": [
          "Medien ebenso wie Text schützen: Dateien und Metadaten werden separat verschlüsselt, entschlüsselte Object-URLs anschließend freigegeben.",
          "Unterbrochene Bearbeitung: ungesendete Entwürfe bleiben verschlüsselt; das Löschen von Browserdaten kann dennoch Inhalte entfernen.",
          "Veraltete Speicherungen aus mehreren Tabs: lokale Revisionsprüfung und getrennte Entwürfe verhindern Überschreiben; dies ist keine Behauptung einer veröffentlichten Version."
        ],
        "limits": "Medienverschlüsselung ist im Code vorhanden, obwohl die README ältere Formulierungen enthält. Versionierte Synchronisierung und Themes wurden als lokale Arbeit geprüft, nicht als unabhängige Sicherheits- oder Live-Geräteabnahme.",
        "caption": "Journal-Designvorschau; kein bestätigter Screenshot der Live-Anwendung."
      }
    },
    "sourceRevisions": {
      "pin-paper-journal": "077e4c02b0dfe97eb741f883c468ef37e319ef1b"
    },
    "editorialNote": "Includes read-only local development review of versioned sync and themes on 2026-10-21. Local changes are not claimed as a deployed release."
  },
  {
    "slug": "be-a-real-developer",
    "title": "Be a Real Developer",
    "image": "/projects/be-a-real-developer.png",
    "stack": [
      "JavaScript",
      "Node.js",
      "Cloudflare Workers",
      "D1 / Drizzle",
      "Firebase Auth",
      "QuickJS",
      "Docker / Piston",
      "OpenAI API"
    ],
    "sources": [
      {
        "label": "README",
        "url": "https://github.com/melisau/RealDev/blob/main/README.md"
      },
      {
        "label": "Project inventory",
        "url": "https://github.com/melisau/RealDev/blob/eab5f40d7024cb37da0788ba76dd969b62e449c6/PROJECT-STATUS.md"
      },
      {
        "label": "Project acceptance tests",
        "url": "https://github.com/melisau/RealDev/blob/eab5f40d7024cb37da0788ba76dd969b62e449c6/PROJECT-DELIVERY.md"
      },
      {
        "label": "Runner deployment",
        "url": "https://github.com/melisau/RealDev/blob/eab5f40d7024cb37da0788ba76dd969b62e449c6/docs/runner-vds.md"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/melisau/RealDev"
      }
    ],
    "reviewedAt": "2026-10-21",
    "copy": {
      "tr": {
        "tagline": "Soru çözmekten çalışan proje teslimine: kanıta dayalı geliştirici pratiği.",
        "problem": "Doğru seçeneği bulmak, kod yazma, hata ayıklama ve bir projeyi teslim etme becerilerini tek başına göstermiyor. Öğrenme geçmişinin hangi tür kanıta dayandığını ayırmak gerekiyor.",
        "goal": "Konu çalışmasını kod laboratuvarı, proje kabul testleri ve kişisel rotalarla birleştirmek; testle doğrulanmış davranışı yazılı öz değerlendirme ve geçici AI geri bildiriminden ayrı göstermek.",
        "role": "Full-stack geliştirme",
        "scope": "Bireysel full-stack proje: iki dilli öğrenme arayüzü, soru ve hata katalogları, hesap izolasyonu, kod sandbox’ı, şablonlu proje teslimi ve kaynak izlenebilirliği.",
        "features": [
          "13 alanda 1.312 TR/EN değerlendirme sorusu; konu araması, açıklama, not ve kayıtlı soru kütüphanesi",
          "Sekiz görevli başlangıç taraması, kişisel öğrenme rotaları ve kod/cevap geçmişi",
          "JavaScript için QuickJS; Python, C# ve Java için sınırlandırılmış Piston kod çalıştırma altyapısı",
          "Python HTTP/SQLite ve .NET proje teslimlerinde kaynak hash’i ve sürümlü sekiz kabul testi; Unity şablonu için ayrı yerel test kapsamı",
          "Hata laboratuvarı, kaynaklı teknik kod incelemeleri ve 24 özgün iki dilli kavram makalesi",
          "Aktif çalışma süresi ve takvim; hesap dışa aktarma, öğrenme sıfırlama ve hesap silme",
          "Rubrik ve öğrenci alıntısına dayanan isteğe bağlı AI geri bildirimi; onaylı ses transkripsiyonu",
          "Cihaz iznine bağlı Web Push hatırlatıcıları, saat dilimi ayarı ve test bildirimi"
        ],
        "architecture": "Vanilla JavaScript arayüz → Firebase kimliği doğrulanan Worker API → D1 / Drizzle. JavaScript görevleri önceden derlenmiş WebAssembly modülü kullanan QuickJS’te çalışır. Piston ve Python/.NET proje kabul servisi kimlik doğrulamalı ayrı gateway’ler kullanır; kalıcı Ubuntu runner için Docker Compose, Caddy, sağlık kontrolü ve geri alma akışı hazırlanmıştır.",
        "decisions": [
          "Her soru sürümü yanıtla birlikte tutulur; cevap anahtarı genel payload’a gönderilmez, not sunucuda hesaplanır.",
          "Test sonucu kaynak SHA-256, görev, motor ve test sürümüyle eşleşmeden beceri kanıtına katılmaz.",
          "Farklı dillerdeki eşdeğer görevler tek kanıt ailesidir; AI geçici değerlendirmesi gerçek test sonucuyla birleştirilmez.",
          "Worker çalışma anında WASM derleyemediği için QuickJS modülü derleme sırasında ayrıştırılır ve önceden derlenmiş olarak yüklenir.",
          "Runner sürümü production dalındaki commit’e bağlanır; sağlık kontrolü başarısız olduğunda önceki sürüme dönüş yolu bulunur."
        ],
        "challenges": [
          "Güvenilmeyen kod: QuickJS bellek/süre bütçeleri ve proje tesliminde sınırlı dosya listesi kullanılır; Python/.NET öğrenci ve test süreçleri ayrı kapsayıcılarda çalışır.",
          "Gerçek proje davranışını ölçmek: HTTP, SQLite, sahip izolasyonu, sürüm ve yeniden başlatma senaryoları özgün kabul testleriyle denetlenir; yerel Unity sonucu canlı öğrenci sandbox’ı gibi sunulmaz.",
          "Yanıltıcı yetkinlik iddiaları: seçenekli sorular tek başına uzmanlık sayılmaz; notlar, AI yorumu ve sunucu testleri ayrı kanıt türleri olarak gösterilir.",
          "Dış servis bağımlılığı: runner erişimi ve bildirim izinleri açık durumlarla gösterilir; altyapı kodunun varlığı kesintisiz canlı hizmet garantisi değildir."
        ],
        "limits": "Soru ve kod kapsamı kaynaklardan doğrulandı; 7/24 runner işletimi, gerçek cihaz bildirimleri ve canlı Unity öğrenci ortamı burada yeniden doğrulanmadı. Mesleki sertifikasyon değildir.",
        "caption": "İngilizce öğrenme paneli"
      },
      "en": {
        "tagline": "From answering questions to submitting working projects: evidence-based developer practice.",
        "problem": "Picking the right option alone does not demonstrate coding, debugging or project delivery. Learning records need to distinguish the kind of evidence behind each result.",
        "goal": "Connect topic practice with code labs, project acceptance tests and personal routes, keeping verified behavior separate from written self-review and provisional AI feedback.",
        "role": "Full-stack development",
        "scope": "Personal full-stack project: bilingual learning UI, question and debugging catalogs, account isolation, code sandboxing, template-based project submissions and source traceability.",
        "features": [
          "1,312 TR/EN assessment questions across 13 areas, with topic search, explanations, notes and a saved-question library",
          "Eight-task initial scan, personal learning routes and answer/code history",
          "QuickJS for JavaScript and a bounded Piston execution integration for Python, C# and Java",
          "Python HTTP/SQLite and .NET submissions with source hashes and eight versioned acceptance tests; separate local Unity template tests",
          "Debugging lab, sourced technical code reviews and 24 original bilingual concept articles",
          "Active study time and calendar, account export, learning reset and account deletion",
          "Optional rubric- and quotation-based AI feedback, plus consent-based audio transcription",
          "Permission-based Web Push reminders, timezone preferences and test notifications"
        ],
        "architecture": "Vanilla JavaScript UI → Firebase-verified Worker API → D1 / Drizzle. JavaScript tasks use QuickJS with a precompiled WebAssembly module. Piston and Python/.NET project acceptance services use separate authenticated gateways; an Ubuntu runner deployment includes Docker Compose, Caddy, health checks and rollback.",
        "decisions": [
          "Answers retain their question version; answer keys stay out of public payloads and grading runs on the server.",
          "A result must match the source SHA-256, assignment, engine and suite version before contributing skill evidence.",
          "Equivalent tasks across languages share one evidence family; provisional AI evaluation is not merged into test verification.",
          "The Worker cannot compile WASM at runtime, so the build extracts the QuickJS module for precompiled loading.",
          "Runner releases reference production-branch commits and include rollback when a health check fails."
        ],
        "challenges": [
          "Untrusted code: QuickJS has memory/time budgets, project files are allowlisted, and Python/.NET learner and tester run in separate containers.",
          "Project behavior: original acceptance checks exercise HTTP, SQLite, owner isolation, versions and restart persistence; local Unity results are not claimed as a live learner sandbox.",
          "Avoiding inflated proficiency claims: choice answers alone do not establish mastery; notes, AI comments and server tests remain separate evidence types.",
          "External services: runner connectivity and notification permissions have explicit states; deployment code does not guarantee always-on operation."
        ],
        "limits": "Question and execution scope was reviewed from source; always-on runner operation, device delivery and a live Unity learner environment were not reverified. Not professional certification.",
        "caption": "English learning dashboard"
      },
      "de": {
        "tagline": "Von Fragen zu lauffähigen Projektabgaben: evidenzbasierte Entwicklungspraxis.",
        "problem": "Die richtige Auswahlantwort beweist weder Programmierung noch Debugging oder Projektabgabe. Lernfortschritt muss die Art der zugrunde liegenden Nachweise unterscheiden.",
        "goal": "Themenübungen, Code-Labor, Projektabnahmen und persönliche Lernpfade verbinden; geprüftes Verhalten bleibt von Selbsteinschätzung und vorläufigem KI-Feedback getrennt.",
        "role": "Full-Stack-Entwicklung",
        "scope": "Persönliches Full-Stack-Projekt: zweisprachige Lernoberfläche, Fragen- und Fehlerkataloge, Kontentrennung, Code-Sandbox, vorlagenbasierte Abgaben und Quellennachweise.",
        "features": [
          "1.312 TR/EN-Fragen in 13 Bereichen mit Themensuche, Erklärungen, Notizen und gespeicherten Fragen",
          "Einstiegsscan mit acht Aufgaben, persönliche Lernpfade und Antwort-/Codeverlauf",
          "QuickJS für JavaScript und begrenzte Piston-Anbindung für Python, C# und Java",
          "Python-HTTP/SQLite- und .NET-Abgaben mit Quellcode-Hash und acht versionierten Abnahmetests; separate lokale Unity-Vorlagentests",
          "Fehlerlabor, quellenbasierte Code-Reviews und 24 eigene zweisprachige Fachartikel",
          "Aktive Lernzeit und Kalender, Datenexport, Lernreset und Kontolöschung",
          "Optionales KI-Feedback mit Rubrik und Originalzitaten sowie Audiotranskription mit Zustimmung",
          "Web-Push-Erinnerungen mit Geräteerlaubnis, Zeitzoneneinstellung und Testbenachrichtigung"
        ],
        "architecture": "Vanilla-JavaScript-Oberfläche → Worker-API mit Firebase-Identitätsprüfung → D1 / Drizzle. JavaScript-Aufgaben laufen in QuickJS mit vorkompiliertem WebAssembly-Modul. Piston und Python/.NET-Abnahmen nutzen getrennte authentifizierte Gateways; die Ubuntu-Runner-Konfiguration enthält Docker Compose, Caddy, Gesundheitsprüfung und Rollback.",
        "decisions": [
          "Antworten behalten die Fragenversion; Lösungsschlüssel fehlen im öffentlichen Payload und die Bewertung erfolgt serverseitig.",
          "Ergebnisse müssen zu Quellcode-SHA-256, Aufgabe, Engine und Testsuite passen, bevor sie als Kompetenznachweis zählen.",
          "Gleichwertige Aufgaben in mehreren Sprachen bilden eine Nachweisfamilie; KI-Bewertung bleibt vorläufig.",
          "Da der Worker WASM nicht zur Laufzeit kompiliert, wird das QuickJS-Modul beim Build extrahiert und vorkompiliert eingebunden.",
          "Runner-Releases beziehen sich auf Commits des production-Branches und erlauben Rollback bei fehlgeschlagener Gesundheitsprüfung."
        ],
        "challenges": [
          "Nicht vertrauenswürdiger Code: QuickJS-Zeit-/Speicherlimits, erlaubte Abgabedateien und getrennte Python/.NET-Container für Lernende und Tests.",
          "Projektverhalten prüfen: eigene Tests untersuchen HTTP, SQLite, Kontentrennung, Versionen und Neustarts; lokale Unity-Tests sind kein Live-Sandbox-Nachweis.",
          "Überhöhte Kompetenzurteile vermeiden: Auswahlantworten, Notizen, KI-Kommentare und serverseitige Tests bleiben unterschiedliche Nachweise.",
          "Externe Dienste: Runner-Verbindung und Benachrichtigungsrechte haben explizite Zustände; Konfigurationscode garantiert keinen Dauerbetrieb."
        ],
        "limits": "Fragen- und Codeumfang wurden anhand der Quellen geprüft; Dauerbetrieb, Gerätebenachrichtigungen und eine Live-Unity-Lernumgebung wurden nicht erneut bestätigt. Keine Berufszertifizierung.",
        "caption": "Englisches Lern-Dashboard"
      }
    },
    "sourceRevisions": {
      "RealDev": "eab5f40d7024cb37da0788ba76dd969b62e449c6"
    }
  },
  {
    "slug": "budget-buddy",
    "title": "Budget Buddy",
    "image": "/projects/budget-buddy.png",
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase Auth",
      "PostgreSQL",
      "Groq",
      "Vinext / Workers"
    ],
    "sources": [
      {
        "label": "GitHub README",
        "url": "https://github.com/melisau/budget-buddy/blob/main/README.md"
      },
      {
        "label": "Architecture",
        "url": "https://github.com/melisau/budget-buddy/blob/7f6543865487b3aa507fe06d14219305ccb8398c/docs/architecture.md"
      },
      {
        "label": "Auth migration",
        "url": "https://github.com/melisau/budget-buddy/blob/7f6543865487b3aa507fe06d14219305ccb8398c/docs/supabase-auth-migration.md"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/melisau/budget-buddy"
      }
    ],
    "reviewedAt": "2026-10-21",
    "copy": {
      "tr": {
        "tagline": "Kişisel bütçeni korurken ailenle hedef, alışveriş ve hediye planla.",
        "problem": "Kişisel harcamalar ile ortak aile planlarını aynı araçta yönetirken özel işlemleri gereksiz yere paylaşmamak gerekiyor.",
        "goal": "Gelir/gider takibini kişisel hedefler, harçlık planı ve seçici aile paylaşımıyla birleştirmek; özel işlemleri ortak planlardan ayrı tutmak.",
        "role": "Full-stack geliştirme",
        "scope": "Bireysel full-stack proje: finans ekranları, Supabase Auth geçişi, sunucu sahiplik/rol kontrolleri, aile iş birliği, özel fiş depolama ve onaylı AI işlem taslakları.",
        "features": [
          "Hesaplar, gelir/gider, transfer, bütçe, rapor ve kişisel tasarruf hedefleri",
          "Banka hesabı veya geçmiş işlem gerektirmeden hedef oluşturma; özel aylık harçlık ve tasarruf yüzdesi",
          "Aile grubu, davet ve roller; seçilen hedef ilerlemesini özel işlemleri açmadan paylaşma",
          "Ortak alışveriş listesi ve not; etkinlik istek listelerinde hediye rezervasyonu ve sürpriz modu",
          "Supabase Auth ile doğrulamalı kayıt, parola kurtarma ve kullanıcı diline göre e-posta şablonları",
          "Özel fiş görselleri, CSV içe/dışa aktarma, Groq finans asistanı ve onay gerektiren sesli işlem taslakları",
          "Ayrı Türkçe/İngilizce giriş adresleri, canonical/hreflang, sitemap ve yerelleştirilmiş paylaşım metaverisi"
        ],
        "architecture": "Next.js 16 / React 19 / TypeScript → doğrulanmış Supabase Auth oturumuyla server routes → Supabase PostgreSQL ve özel Storage. Finans grafikleri Recharts; arayüz Tailwind ve shadcn/ui kullanır. Dağıtım altyapısı Vinext / Cloudflare Workers içerir; Groq yalnız yetkilendirilmiş, temizlenmiş finans özetlerini alır.",
        "decisions": [
          "Clerk yerine Supabase Auth kullanılır; kimlik her korumalı kaynağın yanında auth.getUser() ile doğrulanır, istemci başlıklarına güvenilmez.",
          "Eski finans kayıtları korunur; e-posta eşleşmesi otomatik sahiplik vermez, doğrulanmış açık kimlik bağlantısı gerekir.",
          "Sunucu aile üyeliği, owner/member/viewer rolleri ve sürpriz hediye görünürlüğünü denetler; özel işlemler hedef paylaşımından ayrıdır.",
          "Fişler özel bucket ve kısa süreli imzalı URL kullanır; AI kullanıcı açıkça onaylamadan işlem oluşturamaz.",
          "TR/EN girişleri ayrı kanonik adreslerdir; indekslenebilir dil içeriği yalnız tarayıcı tercihine bırakılmaz."
        ],
        "challenges": [
          "Kimlik sağlayıcı geçişinin kesinti üretmesi: eksik yayın anahtarı tüm sayfalarda 500 yerine güvenli oturum-dışı duruma düşer; migration’lar mevcut veriyi korur.",
          "Aile gizliliği: üye olmayan, bekleyen davetli ve kaldırılan üyeler veri alamaz; hediye sahibi sürpriz rezervasyonları göremez.",
          "Yetki testleri: kişisel işlem sahipliği, aile rolleri ve başka hesaba ait hesap/kategori kullanımı bellek içi servislerle sınanır; şema geçişleri PostgreSQL üzerinde ayrıca doğrulanmıştır."
        ],
        "limits": "Güncel GitHub README ve kod Supabase Auth kullanımında tutarlı. Stripe ödeme temeli ve Google girişi ayrı yapılandırma gerektirir; bu inceleme canlı ödeme veya AI servis kabulü değildir.",
        "caption": "İngilizce giriş sayfası"
      },
      "en": {
        "tagline": "Keep your budget private while planning goals, shopping and gifts with family.",
        "problem": "Managing personal spending and family plans in one tool should not require sharing private transactions.",
        "goal": "Combine income and expense tracking with personal goals, allowance planning and selective family sharing, keeping private transactions separate from shared plans.",
        "role": "Full-stack development",
        "scope": "Personal full-stack project: finance screens, Supabase Auth migration, server-side ownership and role checks, family collaboration, private receipts and confirmed AI transaction drafts.",
        "features": [
          "Accounts, income/expenses, transfers, budgets, reports and personal savings goals",
          "Start goals without bank accounts or historical transactions; private monthly allowance and savings percentage",
          "Family groups, invitations and roles; share selected goal progress without exposing private transactions",
          "Shared shopping list and notes, occasion wishlists, gift reservations and surprise mode",
          "Verified Supabase Auth registration, password recovery and language-aware email templates",
          "Private receipt images, CSV import/export, Groq assistant and voice drafts requiring confirmation",
          "Separate Turkish/English landing routes, canonical/hreflang, sitemap and localized sharing metadata"
        ],
        "architecture": "Next.js 16 / React 19 / TypeScript → server routes with verified Supabase Auth sessions → Supabase PostgreSQL and private Storage. Recharts powers charts, with Tailwind and shadcn/ui for the interface. Deployment infrastructure includes Vinext / Cloudflare Workers; Groq receives only authorized, sanitized financial summaries.",
        "decisions": [
          "Supabase Auth replaces Clerk; auth.getUser() verifies identity beside each protected resource and client headers are not trusted.",
          "Legacy financial records are preserved; email matching alone grants no ownership, requiring an explicitly verified identity link.",
          "The server enforces family membership, owner/member/viewer roles and surprise-gift visibility; sharing goals does not expose private transactions.",
          "Receipts use private storage and short-lived signed URLs; AI cannot create transactions without explicit confirmation.",
          "TR/EN landings have separate canonical URLs, making localized content independent of browser-only preferences."
        ],
        "challenges": [
          "Authentication cutover outages: missing publishable configuration falls back safely to signed-out state instead of breaking every page with HTTP 500; migrations preserve existing data.",
          "Family privacy: outsiders, pending invitees and removed members cannot access data, while wishlist owners cannot see surprise reservations.",
          "Authorization tests cover transaction ownership, family roles and foreign account/category access using in-memory services; migrations are separately checked on PostgreSQL."
        ],
        "limits": "The current GitHub documentation and code agree on Supabase Auth. Stripe and Google sign-in require separate configuration; this review does not certify live payment or AI flows.",
        "caption": "English landing page"
      },
      "de": {
        "tagline": "Das eigene Budget privat halten und Ziele, Einkäufe und Geschenke gemeinsam planen.",
        "problem": "Private Ausgaben und Familienpläne gemeinsam zu verwalten darf keine unnötige Offenlegung persönlicher Transaktionen erfordern.",
        "goal": "Einnahmen und Ausgaben mit persönlichen Zielen, Taschengeldplanung und gezieltem Familienteilen verbinden; private Transaktionen bleiben getrennt.",
        "role": "Full-Stack-Entwicklung",
        "scope": "Persönliches Full-Stack-Projekt: Finanzoberflächen, Supabase-Auth-Umstellung, serverseitige Rechteprüfung, Familienfunktionen, private Belege und bestätigte KI-Entwürfe.",
        "features": [
          "Konten, Einnahmen/Ausgaben, Überweisungen, Budgets, Berichte und Sparziele",
          "Ziele ohne Bankkonto oder alte Transaktionen starten; privater monatlicher Taschengeldplan und Sparanteil",
          "Familiengruppen, Einladungen und Rollen; ausgewählten Zielfortschritt ohne private Transaktionen teilen",
          "Gemeinsame Einkaufsliste und Notizen, Anlass-Wunschlisten, Geschenkreservierungen und Überraschungsmodus",
          "Supabase Auth mit bestätigter Registrierung, Passwortwiederherstellung und sprachabhängigen E-Mail-Vorlagen",
          "Private Belege, CSV-Import/-Export, Groq-Assistent und bestätigungspflichtige Sprachentwürfe",
          "Separate türkische/englische Landingpages, Canonical/hreflang, Sitemap und lokalisierte Sharing-Metadaten"
        ],
        "architecture": "Next.js 16 / React 19 / TypeScript → Serverrouten mit geprüfter Supabase-Auth-Sitzung → Supabase PostgreSQL und privater Storage. Recharts liefert Diagramme, Tailwind und shadcn/ui die Oberfläche. Die Bereitstellung umfasst Vinext / Cloudflare Workers; Groq erhält nur autorisierte, bereinigte Finanzübersichten.",
        "decisions": [
          "Supabase Auth ersetzt Clerk; auth.getUser() prüft die Identität direkt an geschützten Ressourcen statt Client-Headern zu vertrauen.",
          "Bestehende Finanzdaten bleiben erhalten; gleiche E-Mail-Adressen reichen nicht als Eigentumsnachweis, eine geprüfte Zuordnung ist erforderlich.",
          "Der Server prüft Mitgliedschaft, owner/member/viewer-Rollen und Überraschungsgeschenke; geteilte Ziele veröffentlichen keine privaten Transaktionen.",
          "Belege nutzen privaten Storage und kurzlebige signierte URLs; KI erstellt Transaktionen nur nach ausdrücklicher Bestätigung.",
          "TR/EN-Landingpages haben eigene kanonische Adressen und sind nicht allein von Browserpräferenzen abhängig."
        ],
        "challenges": [
          "Ausfälle bei der Auth-Umstellung: fehlende Konfiguration führt sicher zu abgemeldet statt überall zu HTTP 500; Migrationen erhalten vorhandene Daten.",
          "Familienprivatsphäre: Außenstehende, unbestätigte und entfernte Mitglieder erhalten keinen Zugriff; Wunschlisteneigentümer sehen keine Überraschungsreservierungen.",
          "Berechtigungstests prüfen Eigentum, Familienrollen und fremde Konten/Kategorien mit In-Memory-Diensten; Migrationen wurden separat mit PostgreSQL geprüft."
        ],
        "limits": "Aktuelle GitHub-Dokumentation und Code verwenden Supabase Auth. Stripe und Google-Anmeldung benötigen gesonderte Konfiguration; Live-Zahlungen und KI-Abläufe wurden hier nicht abgenommen.",
        "caption": "Englische Startseite"
      }
    },
    "sourceRevisions": {
      "budget-buddy": "7f6543865487b3aa507fe06d14219305ccb8398c"
    }
  },
  {
    "slug": "ataturk-digital-archive",
    "title": "Atatürk Digital Archive",
    "image": "https://ataturkarsivi.com/cdn/shop/files/Ataturk.jpg?v=1747747216&width=1200",
    "stack": [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Metafields"
    ],
    "liveUrl": "https://ataturkarsivi.com/",
    "sources": [],
    "links": [],
    "reviewedAt": "2026-10-08",
    "copy": {
      "tr": {
        "tagline": "Tarihî içerikleri keşfetmeyi kolaylaştıran dijital arşiv.",
        "problem": "Geniş bir tarihî içerik koleksiyonunda aranan görsele veya belgeye kolayca ulaşabilmek gerekiyor.",
        "goal": "Çoklu filtreli galeriler ve belge görüntüleme ile içerik keşfini kolaylaştırmak.",
        "role": "BusinessUp · ekip projesine geliştirme katkısı",
        "scope": "Portfolyoda belirtilen katkı kapsamı: filtreli galeriler, PDF görüntüleme, açık/koyu tema ve etkileşimli içerik bölümleri. Projenin tamamının tek geliştiricisi olduğum iddia edilmez.",
        "features": [
          "Çoklu filtreli galeriler",
          "PDF belge görüntüleme",
          "Açık/koyu tema",
          "Etkileşimli içerik bölümleri"
        ],
        "architecture": "Mevcut portfolyo kaydı Shopify, Liquid, JavaScript ve Metafields kullanımını belirtiyor. Ayrıntılı mimariyi doğrulayan README bulunamadı.",
        "decisions": [],
        "challenges": [],
        "limits": "İçerik mevcut portfolyo beyanıyla sınırlı. README ile doğrulanmayan mühendislik gerekçeleri, kişisel zorluk hikâyeleri veya başarı ölçümleri eklenmedi.",
        "caption": "Arşivde kullanılan fotoğraf; site arayüzünün ekran görüntüsü değildir."
      },
      "en": {
        "tagline": "A digital archive that makes historical content easier to explore.",
        "problem": "A large historical collection needs clear ways to discover images and documents.",
        "goal": "Make content discovery easier through multi-filter galleries and document viewing.",
        "role": "BusinessUp · development contribution to a team project",
        "scope": "Portfolio-stated scope: filtered galleries, PDF viewing, light/dark theme and interactive content sections. This does not claim sole authorship of the entire project.",
        "features": [
          "Multi-filter galleries",
          "PDF document viewing",
          "Light/dark theme",
          "Interactive content sections"
        ],
        "architecture": "The existing portfolio identifies Shopify, Liquid, JavaScript and Metafields. No README was found to verify deeper architecture.",
        "decisions": [],
        "challenges": [],
        "limits": "Content is limited to the existing portfolio statement. No unverified engineering rationale, personal challenge stories or outcome metrics have been added.",
        "caption": "Photograph used in the archive; not a screenshot of the site interface."
      },
      "de": {
        "tagline": "Ein digitales Archiv, das historische Inhalte leichter zugänglich macht.",
        "problem": "Eine große historische Sammlung benötigt übersichtliche Wege zu Bildern und Dokumenten.",
        "goal": "Inhalte durch mehrfach filterbare Galerien und Dokumentansicht leichter auffindbar machen.",
        "role": "BusinessUp · Entwicklungsbeitrag zu einem Teamprojekt",
        "scope": "Im Portfolio angegebener Beitrag: Filtergalerien, PDF-Ansicht, Hell-/Dunkelmodus und interaktive Inhaltsbereiche. Keine Behauptung alleiniger Urheberschaft.",
        "features": [
          "Mehrfach filterbare Galerien",
          "PDF-Dokumentansicht",
          "Hell-/Dunkelmodus",
          "Interaktive Inhaltsbereiche"
        ],
        "architecture": "Das bestehende Portfolio nennt Shopify, Liquid, JavaScript und Metafields. Eine README zur Bestätigung weiterer Architekturdetails fehlt.",
        "decisions": [],
        "challenges": [],
        "limits": "Inhalte beschränken sich auf bestehende Portfolioangaben. Ungeprüfte technische Begründungen, persönliche Problemlösungsgeschichten und Erfolgsmetriken wurden nicht ergänzt.",
        "caption": "Archivfoto; kein Screenshot der Website-Oberfläche."
      }
    }
  },
  {
    "slug": "shopify-theme-development",
    "title": "Custom Shopify Theme Development",
    "image": null,
    "stack": [
      "Shopify",
      "Liquid",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "sources": [],
    "links": [],
    "reviewedAt": "2026-10-08",
    "copy": {
      "tr": {
        "tagline": "Müşteri ihtiyaçlarına uyarlanan responsive Shopify arayüzleri.",
        "problem": "Hazır mağaza temaları her markanın içerik, tasarım ve alışveriş akışını birebir karşılamıyor.",
        "goal": "Markaya uygun, yeniden kullanılabilir section’lar ve mobil uyumlu mağaza arayüzleri geliştirmek.",
        "role": "Shopify / frontend geliştirme",
        "scope": "Bu kayıt tek bir ürün yerine müşteri çalışmalarının bir özetidir. Mevcut kapsam: özel Liquid tema ve section geliştirme, responsive uyarlama, performans ve kullanıcı deneyimi çalışmaları.",
        "features": [
          "Özel Liquid section’ları",
          "Responsive HTML/CSS düzenleri",
          "JavaScript ile mağaza etkileşimleri",
          "Markaya uygun tema özelleştirmeleri"
        ],
        "architecture": "Shopify tema katmanı: Liquid şablonları, HTML/CSS sunumu ve JavaScript etkileşimleri. Müşteri bazında ayrıntılı uygulama bilgisi paylaşılmamış.",
        "decisions": [],
        "challenges": [],
        "limits": "Doğrulanmış müşteri demo adresleri, paylaşılabilir kaynak kod ve gerçek mağaza ekran görüntüleri henüz eklenmedi. Temsili stok görsel bu detay sayfasında kullanılmıyor.",
        "caption": ""
      },
      "en": {
        "tagline": "Responsive Shopify storefronts tailored to client needs.",
        "problem": "Off-the-shelf storefront themes do not fit every brand’s content, design and shopping flow.",
        "goal": "Build brand-aligned, reusable sections and mobile-friendly storefront interfaces.",
        "role": "Shopify / frontend development",
        "scope": "This entry summarizes client work rather than a single product. Stated scope: custom Liquid themes/sections, responsive implementation, performance and user-experience work.",
        "features": [
          "Custom Liquid sections",
          "Responsive HTML/CSS layouts",
          "JavaScript storefront interactions",
          "Brand-aligned theme customization"
        ],
        "architecture": "Shopify theme layer: Liquid templates, HTML/CSS presentation and JavaScript interactions. Client-specific implementation details have not been provided.",
        "decisions": [],
        "challenges": [],
        "limits": "Verified client demo URLs, shareable source code and real storefront screenshots have not yet been supplied. The stock image is not used on this detail page.",
        "caption": ""
      },
      "de": {
        "tagline": "Responsive Shopify-Oberflächen für individuelle Kundenanforderungen.",
        "problem": "Standard-Shop-Themes passen nicht zu jeder Marke, ihren Inhalten und Einkaufsabläufen.",
        "goal": "Markengerechte, wiederverwendbare Sections und mobilfreundliche Shop-Oberflächen entwickeln.",
        "role": "Shopify-/Frontend-Entwicklung",
        "scope": "Dieser Eintrag fasst Kundenarbeiten statt eines einzelnen Produkts zusammen. Umfang: eigene Liquid-Themes/-Sections, responsive Umsetzung sowie Performance und Nutzererfahrung.",
        "features": [
          "Individuelle Liquid-Sections",
          "Responsive HTML-/CSS-Layouts",
          "JavaScript-Shop-Interaktionen",
          "Markengerechte Theme-Anpassung"
        ],
        "architecture": "Shopify-Theme-Ebene: Liquid-Vorlagen, HTML-/CSS-Darstellung und JavaScript-Interaktionen. Kundenspezifische Implementierungsdetails wurden nicht bereitgestellt.",
        "decisions": [],
        "challenges": [],
        "limits": "Bestätigte Kunden-Demos, teilbarer Quellcode und echte Shop-Screenshots fehlen noch. Das Stockfoto wird auf dieser Detailseite nicht verwendet.",
        "caption": ""
      }
    }
  },
  {
    "slug": "rogi",
    "title": "Rogi",
    "image": "/projects/rogi.png",
    "stack": [
      "JavaScript",
      "Node.js 24",
      "Neon PostgreSQL",
      "Neon Auth",
      "Babel / parse5",
      "Playwright / Chromium",
      "Vercel"
    ],
    "sources": [
      {
        "label": "README",
        "url": "https://github.com/melisau/Rogi/blob/main/README.md"
      },
      {
        "label": "Verified backlog",
        "url": "https://github.com/melisau/Rogi/blob/6ba7f34d9ed6fdf8a64dc16d53fb7f46d54aa849/TASKS.md"
      },
      {
        "label": "Rendered-page scanner",
        "url": "https://github.com/melisau/Rogi/blob/6ba7f34d9ed6fdf8a64dc16d53fb7f46d54aa849/rogi-landing/server/render.js"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/melisau/Rogi"
      }
    ],
    "reviewedAt": "2026-10-21",
    "copy": {
      "tr": {
        "tagline": "Siteyi ve kaynak kodunu incele; bulguyu kanıtıyla takip et, raporları karşılaştır.",
        "problem": "SEO, kaynak kod, güvenlik ve mobil kullanılabilirlik kontrolleri farklı yerlerde kaldığında yayın öncesi eksikler gözden kaçabiliyor.",
        "goal": "Canlı tarama, yerel proje incelemesi ve manuel kontrolleri; önceliklendirilmiş bulgular, düzeltme önerileri ve izlenebilir raporlarla tek çalışma alanında toplamak.",
        "role": "Web uygulaması geliştirme",
        "scope": "Bireysel web uygulaması: iki dilli tanıtım ve denetim arayüzü, URL tarama motoru, yerel AST incelemesi, hesap/proje alanı, kalıcı raporlar ve güvenli ağ taşıması.",
        "features": [
          "TR/EN arayüz ve dil adresleri; canonical, hreflang, sitemap ve yapılandırılmış veri",
          "SEO, JSON-LD ve X-Robots-Tag kontrolleri; kanıt, öncelik, efor ve düzeltme önerileri",
          "İsteğe bağlı en fazla üç aynı-origin ek sayfa ve on iç bağlantı kontrolü; sayfa bazlı ayrı sonuçlar",
          "JavaScript ile oluşan sayfalar için sınırlandırılmış Chromium render desteği",
          "Next.js metadata, generateMetadata, rota ve JSX sinyallerinin kaynak çalıştırmadan Babel AST incelemesi",
          "Hesaplara ait projeler ve proje başına son 20 bulut raporu; açık kullanıcı eylemiyle kayıt",
          "Son 10 yerel rapor, bulgu karşılaştırması, site bazlı notlar ve JSON/CSV dışa aktarma"
        ],
        "architecture": "Node.js tarama taşıması → parse5 / Babel inceleme motoru → hesap ve raporlar için Neon PostgreSQL / yönetilen Neon Auth. Vercel Node taşıması hedef bağlantıda DNS/IP doğrulaması yapar. JavaScript render için Playwright/Chromium ağ istekleri aynı kontrollü taşıma üzerinden geçirilir; Worker yolu güvenli taşıma yoksa taramayı reddeder.",
        "decisions": [
          "Giriş sayfasının puanı ek sayfa puanlarıyla karıştırılmaz; geçti, hata, doğrulanamadı ve uygulanamaz durumları ayrılır.",
          "Yerel proje kodu çalıştırılmaz; AST bulguları dosya/satır kanıtı sunar ve çalışma zamanı doğrulaması gerektiğini belirtir.",
          "Kalıcı kota ham IP yerine HMAC anahtarıyla tutulur; kota servisi erişilemiyorsa tarama güvenli biçimde durur.",
          "Chromium yalnız aynı-origin GET kaynaklarını, istek ve boyut bütçeleri içinde alır; WebSocket ve service worker erişimi engellenir.",
          "Normal raporlar ve notlar tarayıcıda kalır; bulut kaydı yeni sunucu taraması ve hesap sahipliği kontrolü gerektirir."
        ],
        "challenges": [
          "SSRF ve DNS rebinding: Node soket çözümlemesinde public IP seçimi ve her yönlendirmede yeniden doğrulama uygulanır.",
          "SPA taramalarında belirsizlik: render edilmiş DOM ek sinyal sağlar; engellenen kaynaklar veya bütçe sınırı yüzünden doğrulanamayan sonuçlar kesin hata gibi sunulmaz.",
          "Yerel ve bulut raporlarını ayırmak: proje erişimi hesap bazında denetlenir; son 20 rapor sınırı transaction kilitleriyle korunur."
        ],
        "limits": "Kişisel demo Vercel Authentication korumalıdır; herkese açık demo bağlantısı olarak sunulmaz. Kontrol listeleri penetrasyon testi değildir; Core Web Vitals ölçümü ve tüm hesap akışının gerçek tarayıcı kabulü ayrı işlerdir.",
        "caption": "İngilizce giriş sayfası ve temsili rapor"
      },
      "en": {
        "tagline": "Review live sites and source code, follow evidence and compare audit reports.",
        "problem": "Pre-launch gaps can be missed when SEO, source review, security and mobile-usability checks are scattered across tools.",
        "goal": "Bring live scans, local project review and manual checklists into one workspace with prioritized findings, repair guidance and traceable reports.",
        "role": "Web application development",
        "scope": "Personal web application: bilingual landing and audit UI, URL scanning, local AST review, account/project workspace, persistent reports and guarded network transport.",
        "features": [
          "TR/EN UI and localized URLs, canonical links, hreflang, sitemap and structured data",
          "SEO, JSON-LD and X-Robots-Tag checks with evidence, priority, effort and repair guidance",
          "Optional checks of up to three additional same-origin pages and ten internal links, with separate page results",
          "Bounded Chromium rendering for JavaScript-generated pages",
          "Babel AST review of Next.js metadata, generateMetadata, routes and JSX signals without executing project code",
          "Account-owned projects and the latest 20 cloud reports per project, saved through an explicit action",
          "Latest 10 local reports, finding comparison, per-site notes and JSON/CSV export"
        ],
        "architecture": "Node.js scanning transport → parse5 / Babel review engine → Neon PostgreSQL and managed Neon Auth for accounts and reports. The Vercel Node transport validates DNS/IP at connection time. Playwright/Chromium render requests use the same guarded transport; Worker scanning refuses to run without secure transport.",
        "decisions": [
          "The entry score is separate from additional-page scores; pass, fail, unverified and not-applicable states remain distinct.",
          "Local project code is not executed; AST findings include file/line evidence and require runtime verification.",
          "Persistent quotas use HMAC keys rather than raw IPs; scans stop safely when the quota service is unavailable.",
          "Chromium fetches only same-origin GET resources within request/size budgets; WebSockets and service workers are blocked.",
          "Ordinary reports and notes remain in the browser; cloud saving reruns the server scan and verifies account ownership."
        ],
        "challenges": [
          "SSRF and DNS rebinding: Node socket resolution selects public IPs and redirects are revalidated.",
          "Uncertainty on SPA pages: rendered DOM adds evidence, but blocked resources and budget limits do not turn unverified findings into definite failures.",
          "Local versus cloud history: account checks protect projects and transaction locks enforce the latest-20-report limit."
        ],
        "limits": "The personal demo requires Vercel Authentication and is not listed as an open demo. Checklists are not penetration tests; Core Web Vitals and complete real-browser account acceptance are separate work.",
        "caption": "English landing page with illustrative report"
      },
      "de": {
        "tagline": "Websites und Quellcode prüfen, Belege nachvollziehen und Auditberichte vergleichen.",
        "problem": "Vor dem Start werden Lücken leicht übersehen, wenn SEO-, Quellcode-, Sicherheits- und Mobilprüfungen verteilt sind.",
        "goal": "Live-Scans, lokale Projektprüfung und manuelle Checklisten mit priorisierten Befunden, Korrekturhinweisen und nachvollziehbaren Berichten verbinden.",
        "role": "Webanwendungsentwicklung",
        "scope": "Persönliche Webanwendung: zweisprachige Landingpage und Auditoberfläche, URL-Scanner, lokale AST-Prüfung, Konten und Projekte, dauerhafte Berichte und kontrollierter Netzwerkzugriff.",
        "features": [
          "TR/EN-Oberfläche und Sprachadressen mit Canonical, hreflang, Sitemap und strukturierten Daten",
          "SEO-, JSON-LD- und X-Robots-Tag-Prüfung mit Beleg, Priorität, Aufwand und Korrekturhinweis",
          "Optional bis zu drei weitere Same-Origin-Seiten und zehn interne Links mit getrennten Ergebnissen",
          "Begrenztes Chromium-Rendering für durch JavaScript erzeugte Seiten",
          "Babel-AST-Prüfung von Next.js-Metadaten, generateMetadata, Routen und JSX ohne Codeausführung",
          "Kontoeigene Projekte und die letzten 20 Cloud-Berichte je Projekt, ausdrücklich gespeichert",
          "Letzte zehn lokale Berichte, Befundvergleich, Website-Notizen sowie JSON-/CSV-Export"
        ],
        "architecture": "Node.js-Scantransport → parse5-/Babel-Prüfengine → Neon PostgreSQL und verwaltetes Neon Auth für Konten und Berichte. Der Vercel-Node-Transport prüft DNS/IP beim Verbindungsaufbau. Playwright-/Chromium-Anfragen verwenden denselben kontrollierten Transport; der Worker verweigert Scans ohne sicheren Transport.",
        "decisions": [
          "Der Einstiegsscore bleibt von weiteren Seitenscores getrennt; bestanden, Fehler, ungeprüft und nicht anwendbar sind eigene Zustände.",
          "Lokaler Projektcode wird nicht ausgeführt; AST-Befunde liefern Datei-/Zeilenbelege und benötigen Laufzeitprüfung.",
          "Dauerhafte Quoten nutzen HMAC-Schlüssel statt roher IPs; bei Ausfall der Quotenprüfung wird der Scan beendet.",
          "Chromium lädt nur Same-Origin-GET-Ressourcen innerhalb fester Budgets; WebSockets und Service Worker sind gesperrt.",
          "Normale Berichte und Notizen bleiben im Browser; Cloud-Speicherung erfordert erneuten Serverscan und Kontoprüfung."
        ],
        "challenges": [
          "SSRF und DNS-Rebinding: öffentliche IP-Auswahl bei der Socket-Auflösung und erneute Prüfung jeder Weiterleitung.",
          "SPA-Unsicherheit: gerenderter DOM ergänzt Belege; blockierte Ressourcen und Budgetgrenzen erzeugen keine fälschlich sicheren Fehlerurteile.",
          "Lokale und Cloud-Verläufe: Kontoprüfungen schützen Projekte; Transaktionssperren sichern die Grenze von 20 Berichten."
        ],
        "limits": "Die persönliche Demo erfordert Vercel Authentication und wird nicht als offene Demo verlinkt. Checklisten sind keine Penetrationstests; Core Web Vitals und vollständige Browserabnahme sind separate Aufgaben.",
        "caption": "Englische Startseite mit illustrativem Bericht"
      }
    },
    "sourceRevisions": {
      "Rogi": "6ba7f34d9ed6fdf8a64dc16d53fb7f46d54aa849"
    }
  }
];
