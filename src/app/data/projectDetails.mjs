// README-based editorial snapshots. Update deliberately; do not fetch arbitrary Markdown at runtime.
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
    "reviewedAt": "2026-10-08",
    "copy": {
      "tr": {
        "tagline": "Davetiyeden misafir yanıtlarına, etkinliğin dijital deneyimi tek yerde.",
        "problem": "Davetiyeler, katılım yanıtları ve etkinlik fotoğrafları farklı araçlara dağıldığında takip ve gizlilik yönetimi zorlaşıyor.",
        "goal": "Etkinlik sahibine kişiselleştirilebilir davetiye ve yönetim paneli; misafirlere kolay RSVP, fotoğraf yükleme ve mesaj bırakma akışı sunmak.",
        "role": "Full-stack geliştirme",
        "scope": "Çalışma kapsamı: davetiye arayüzü ve düzenleyici, misafir formları, FastAPI uçları, veri modelleri ve özel medya erişimi.",
        "features": [
          "Davetiye temaları, renkler ve görsel katman düzenleme",
          "İki aşamalı zarf/kurdele açılışı ve azaltılmış hareket desteği",
          "RSVP, kişisel düzenleme bağlantıları ve CSV aktarımı",
          "Onaylı fotoğraf galerisi, ziyaretçi defteri ve QR yükleme",
          "Etkinlik erişim kodu, albüm gizliliği ve isteğe bağlı saklama politikası"
        ],
        "architecture": "Statik JavaScript arayüz → FastAPI REST API → SQLAlchemy / PostgreSQL. Fotoğraflar özel R2/S3 depolamasında; yönetici işlemleri JWT ile korunuyor. SQLite yerel geliştirme seçeneği.",
        "decisions": [
          "Kalıcı veri ve yetki kontrolü arayüz yerine API katmanında tutuluyor.",
          "Şema değişiklikleri mevcut etkinlikleri koruyan Alembic migration’larıyla uygulanıyor.",
          "Medya için kalıcı açık bucket bağlantıları yerine erişim kontrollü API kullanılıyor."
        ],
        "challenges": [
          "Gizlilik ayarı değiştiğinde eski fotoğraf bağlantılarının erişimi: yeni okumalar API üzerinden güncel izinlerle doğrulanıyor; önceden indirilen kopyalar geri alınamaz.",
          "Karmaşık açılış animasyonlarının etkileşimi kilitlemesi: animasyona ait timeline ve scroll trigger’lar temizleniyor, azaltılmış harekette dönüşümler kapatılıyor."
        ],
        "limits": "Bellek içi hız sınırlama, çoklu API worker kullanımında paylaşımlı depolama gerektiriyor. Canlı demo adresi doğrulanmadığı için burada yayınlanmıyor.",
        "caption": "Luma giriş ekranı"
      },
      "en": {
        "tagline": "Digital invitations, guest responses and shared memories in one event experience.",
        "problem": "Invitations, attendance responses and event photos become difficult to manage when scattered across different tools.",
        "goal": "Give hosts a customizable invitation and administration panel, with straightforward RSVP, photo and guestbook flows for guests.",
        "role": "Full-stack development",
        "scope": "Scope: invitation UI and editor, guest forms, FastAPI endpoints, data models and private media access.",
        "features": [
          "Invitation themes, colors and visual-layer editing",
          "Two-stage envelope/ribbon opening with reduced-motion support",
          "RSVP, private edit links and CSV export",
          "Moderated photos, guestbook and QR upload",
          "Event access codes, album privacy and optional retention"
        ],
        "architecture": "Static JavaScript UI → FastAPI REST API → SQLAlchemy / PostgreSQL. Photos live in private R2/S3 storage; admin operations use JWT. SQLite is available for local development.",
        "decisions": [
          "Persistence and authorization stay in the API rather than the browser.",
          "Alembic migrations preserve existing event data across schema changes.",
          "Media is exposed through access-controlled APIs, not permanent public bucket links."
        ],
        "challenges": [
          "Changing photo privacy: new reads pass through current API permission checks; previously downloaded copies cannot be recalled.",
          "Complex opening animations: owned timelines and scroll triggers are cleaned up, with spatial transforms disabled for reduced motion."
        ],
        "limits": "In-memory rate limiting requires shared storage with multiple API workers. No verified public demo URL is listed.",
        "caption": "Luma landing screen"
      },
      "de": {
        "tagline": "Digitale Einladungen, Gästeantworten und gemeinsame Erinnerungen an einem Ort.",
        "problem": "Einladungen, Zusagen und Veranstaltungsfotos lassen sich in getrennten Werkzeugen nur schwer verwalten.",
        "goal": "Gastgebern eine anpassbare Einladung und Verwaltung sowie Gästen einfache Zusagen, Foto-Uploads und Nachrichten bieten.",
        "role": "Full-Stack-Entwicklung",
        "scope": "Umfang: Einladungsoberfläche und Editor, Gästeformulare, FastAPI-Endpunkte, Datenmodelle und privater Medienzugriff.",
        "features": [
          "Einladungsthemen, Farben und visuelle Ebenen",
          "Zweistufige Umschlag-/Schleifenöffnung mit reduzierter Bewegung",
          "Zusagen, private Bearbeitungslinks und CSV-Export",
          "Moderierte Fotos, Gästebuch und QR-Upload",
          "Zugangscodes, Album-Privatsphäre und optionale Aufbewahrung"
        ],
        "architecture": "Statische JavaScript-Oberfläche → FastAPI REST API → SQLAlchemy / PostgreSQL. Fotos liegen in privatem R2/S3-Speicher, Verwaltungsaktionen sind JWT-geschützt. SQLite unterstützt die lokale Entwicklung.",
        "decisions": [
          "Persistenz und Berechtigungen liegen in der API statt im Browser.",
          "Alembic-Migrationen erhalten bestehende Veranstaltungsdaten.",
          "Medienzugriff erfolgt über geschützte APIs statt dauerhafte öffentliche Bucket-Links."
        ],
        "challenges": [
          "Geänderte Foto-Privatsphäre: neue Zugriffe prüfen aktuelle API-Rechte; heruntergeladene Kopien lassen sich nicht zurückholen.",
          "Komplexe Öffnungsanimationen: eigene Timelines und Scroll-Trigger werden bereinigt; reduzierte Bewegung deaktiviert räumliche Transformationen."
        ],
        "limits": "In-Memory-Ratenbegrenzung benötigt bei mehreren API-Workern gemeinsamen Speicher. Eine bestätigte öffentliche Demo-URL liegt nicht vor.",
        "caption": "Luma-Startseite"
      }
    }
  },
  {
    "slug": "mitzi-paw-path",
    "title": "Mitzi: Paw Path",
    "image": "/projects/mitzi-paw-path.jpg",
    "stack": [
      "Unity 2022.3",
      "C#",
      "2D Physics",
      "ScriptableObject",
      "PlayerPrefs"
    ],
    "sources": [
      {
        "label": "README",
        "url": "https://github.com/melisau/Mitzi/blob/main/README.md"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/melisau/Mitzi"
      }
    ],
    "reviewedAt": "2026-10-08",
    "copy": {
      "tr": {
        "tagline": "Çizerek yol aç, kedileri kurtar ve onlara bir yuva kur.",
        "problem": "Yalnızca bölüm geçmeye dayalı oyun döngüsüne, yaratıcı kontrol ve kalıcı bir bakım alanı ekleme fikri.",
        "goal": "Çizim ve doğrudan kontrol seçeneklerini; kedi kurtarma, eşya toplama ve ev düzenlemeyle birleştiren sakin bir 2D deneyim oluşturmak.",
        "role": "Unity / C# oyun geliştirme",
        "scope": "Çalışma kapsamı: çizilebilir fizik yolları, bölüm akışı, kontrol modları, ev etkileşimleri ve sürümlü yerel kayıt sistemi.",
        "features": [
          "Normal, zıplama, tehlike ve buz fırçalarıyla Draw to Play",
          "Sol/sağ, zıplama ve eğilme için doğrudan kontrol",
          "Sokak, orman ve şehir temaları; deterministik ileri bölümler",
          "Her beş tamamlanan bölümde yeni kedi kurtarma",
          "Mobilya satın alma, yerleştirme ve kedi bakım değerleri"
        ],
        "architecture": "Unity tek sahne akışı; Core, Levels, Drawing, Hub, UI ve Audio modülleri. İçerik tanımları ScriptableObject; ilerleme PlayerPrefs üzerinde sürümlü JSON olarak saklanıyor.",
        "decisions": [
          "Aynı bölüm numarası aynı yerleşimi üretiyor; tekrar denemelerde düzen korunuyor.",
          "Dekoratif sprite’lar oyun geometrisi ve collider’lardan ayrılıyor.",
          "Kayıt sistemi son sağlam yedeği tutuyor ve yeni sürüm verisini yanlışlıkla düşürmüyor."
        ],
        "challenges": [
          "Bozuk kayıt veya eski sürüm: JSON doğrulama, migration ve yedek okunabilirliği için editör doğrulama komutu bulunuyor.",
          "Yol ve boşluk sınırları: 1–100. bölümleri kontrol eden geometri doğrulama aracı kullanılıyor; bu tam bir oynanış testi değil."
        ],
        "limits": "Geliştiriliyor. Fiziksel Android/iOS cihaz sonuçları henüz kaydedilmemiş; bazı kedilerin animasyonları ve bellek profillemesi tamamlanmayı bekliyor.",
        "caption": "Projeden oyun ortamı görseli; oynanış kaydı değildir."
      },
      "en": {
        "tagline": "Draw a path, rescue cats and build a home for them.",
        "problem": "Explore a level-based game loop that combines creative controls with a persistent cat-care space.",
        "goal": "Create a cozy 2D experience combining drawing and direct controls with cat rescue, collectibles and home customization.",
        "role": "Unity / C# game development",
        "scope": "Scope: drawable physics paths, level flow, control modes, home interactions and versioned local saves.",
        "features": [
          "Draw to Play with normal, bounce, hazard and ice brushes",
          "Direct movement, jump and crouch controls",
          "Street, forest and city themes with deterministic later levels",
          "A new cat rescue every five completed levels",
          "Furniture shopping, placement and per-cat care values"
        ],
        "architecture": "Unity single-scene flow with Core, Levels, Drawing, Hub, UI and Audio modules. Content uses ScriptableObjects; progress is stored as versioned JSON in PlayerPrefs.",
        "decisions": [
          "A level number produces a stable layout for consistent retries.",
          "Decorative sprites stay separate from gameplay geometry and colliders.",
          "Save handling retains a last-known-good backup and protects newer-version data."
        ],
        "challenges": [
          "Malformed or legacy saves: editor validation covers JSON rejection, migration and backup readability.",
          "Road and gap bounds: a geometry validator checks levels 1–100; it is not a complete gameplay test suite."
        ],
        "limits": "In development. Physical Android/iOS device results are not recorded yet; some cat animations and memory profiling remain incomplete.",
        "caption": "Environment artwork from the project; not a gameplay recording."
      },
      "de": {
        "tagline": "Zeichne Wege, rette Katzen und gestalte ihr Zuhause.",
        "problem": "Ein Level-Spielkonzept, das kreative Steuerung mit einem dauerhaften Pflegebereich für Katzen verbindet.",
        "goal": "Ein entspanntes 2D-Erlebnis mit Zeichen- und Direktsteuerung, Katzenrettung, Sammelobjekten und Wohnungsgestaltung schaffen.",
        "role": "Unity-/C#-Spieleentwicklung",
        "scope": "Umfang: zeichnbare Physikwege, Level-Ablauf, Steuerungsmodi, Interaktionen im Zuhause und versionierte lokale Spielstände.",
        "features": [
          "Zeichnen mit Normal-, Sprung-, Gefahren- und Eispinseln",
          "Direktsteuerung für Bewegung, Sprung und Ducken",
          "Straßen-, Wald- und Stadtthemen mit deterministischen späteren Levels",
          "Eine neue Katzenrettung nach jeweils fünf abgeschlossenen Levels",
          "Möbelkauf, Platzierung und individuelle Pflegewerte"
        ],
        "architecture": "Unity-Ablauf in einer Szene mit Core-, Levels-, Drawing-, Hub-, UI- und Audio-Modulen. Inhalte nutzen ScriptableObjects; Fortschritt wird als versioniertes JSON in PlayerPrefs gespeichert.",
        "decisions": [
          "Eine Levelnummer erzeugt ein stabiles Layout für wiederholbare Versuche.",
          "Dekorative Sprites bleiben von Spielgeometrie und Collidern getrennt.",
          "Spielstände behalten eine letzte gültige Sicherung und schützen Daten neuerer Versionen."
        ],
        "challenges": [
          "Fehlerhafte oder alte Spielstände: Editor-Prüfungen decken JSON-Ablehnung, Migration und Sicherungen ab.",
          "Straßen- und Lückengrenzen: ein Geometrieprüfer kontrolliert Level 1–100, ersetzt aber keine vollständigen Spieltests."
        ],
        "limits": "In Entwicklung. Ergebnisse physischer Android-/iOS-Geräte fehlen noch; einige Katzenanimationen und Speicherprofile sind unvollständig.",
        "caption": "Umgebungsgrafik aus dem Projekt; keine Spielaufnahme."
      }
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
      "PostgreSQL",
      "Web Crypto API"
    ],
    "sources": [
      {
        "label": "README",
        "url": "https://github.com/melisau/pin-paper-journal/blob/main/README.md"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/melisau/pin-paper-journal"
      }
    ],
    "reviewedAt": "2026-10-08",
    "copy": {
      "tr": {
        "tagline": "Kişisel düşünceler için görsel bir günlük ve tarayıcı tarafında şifreleme.",
        "problem": "Görsel günlüklerin kişisel içerikleri kolay düzenlemesi kadar, hesabın ve saklanan verinin sınırlarını koruması da önemli.",
        "goal": "Fotoğraf, sticker, çizim ve çok sayfalı defter düzenini; özel hesaplar, isteğe bağlı kilitler ve istemci tarafı şifrelemeyle birleştirmek.",
        "role": "Full-stack geliştirme",
        "scope": "Çalışma kapsamı: Next.js editör geçişi, kayıt/giriş ekranları, korumalı journal rotası, anahtar sarma ve kurtarma akışı.",
        "features": [
          "Fotoğraflar, sticker’lar, çizimler ve kâğıt stilleri",
          "E-posta doğrulamalı Supabase hesapları",
          "Sahip bazlı PostgreSQL Row Level Security",
          "AES-256-GCM ile tarayıcıda içerik şifreleme",
          "Tek kullanımlık gösterilen kurtarma koduyla anahtar kurtarma"
        ],
        "architecture": "Next.js App Router → Supabase Auth / PostgreSQL / özel Storage. Web Crypto ile içerik yüklemeden önce şifreleniyor; hesap anahtarı parola ve ayrı kurtarma koduyla sarılıyor.",
        "decisions": [
          "Her şifreli değer için yeni 96-bit IV kullanılıyor.",
          "Paroladan sarma anahtarı PBKDF2-HMAC-SHA-256, rastgele salt ve 600.000 yinelemeyle türetiliyor.",
          "Kurtarma kodunun okunabilir biçimi Supabase’de saklanmıyor."
        ],
        "challenges": [
          "Parola değişiminde mevcut içeriğe erişim: kurtarma kodu aynı ana anahtarı açar; yeni parola yalnızca bu anahtarın sarılmış kopyasını değiştirir.",
          "Hesaplar arası veri erişimi: her günlük, sayfa ve varlık satırı sahibine göre RLS ile sınırlandırılıyor."
        ],
        "limits": "README bu altyapıyı ilk güvenlik uygulaması olarak tanımlıyor; hassas veri için bağımsız güvenlik incelemesi gerekiyor. Görsel yüklemelerin şifrelenmesi README’de gelecek adım olarak belirtiliyor.",
        "caption": "Journal için tasarım önizlemesi; doğrulanmış canlı uygulama ekranı değildir."
      },
      "en": {
        "tagline": "A visual journal for personal thoughts, with browser-side encryption.",
        "problem": "A visual journal needs both flexible creative editing and clear boundaries around accounts and stored personal content.",
        "goal": "Combine photos, stickers, drawings and notebook spreads with private accounts, optional locks and client-side encryption.",
        "role": "Full-stack development",
        "scope": "Scope: Next.js editor migration, registration/sign-in UI, protected journal route, key wrapping and recovery flow.",
        "features": [
          "Photos, stickers, drawings and paper styles",
          "Supabase accounts with email verification",
          "Owner-scoped PostgreSQL Row Level Security",
          "Browser-side content encryption with AES-256-GCM",
          "Key recovery using a one-time-displayed recovery code"
        ],
        "architecture": "Next.js App Router → Supabase Auth / PostgreSQL / private Storage. Web Crypto encrypts content before upload; the account key is wrapped using a password and a separate recovery code.",
        "decisions": [
          "Each encrypted value uses a fresh 96-bit IV.",
          "Password wrapping keys use PBKDF2-HMAC-SHA-256, random salt and 600,000 iterations.",
          "Readable recovery codes are not stored in Supabase."
        ],
        "challenges": [
          "Keeping content readable after password recovery: the recovery code unwraps the same master key; the new password changes its wrapped copy.",
          "Cross-account data access: journal, page and asset rows use owner-based RLS policies."
        ],
        "limits": "The README identifies this as an initial security implementation requiring independent review for sensitive data. Image-upload encryption is described as a future step.",
        "caption": "Journal design preview; not a verified live-application screenshot."
      },
      "de": {
        "tagline": "Ein visuelles Tagebuch für persönliche Gedanken mit browserseitiger Verschlüsselung.",
        "problem": "Ein visuelles Tagebuch benötigt flexible Gestaltung und klare Grenzen für Konten und persönliche Inhalte.",
        "goal": "Fotos, Sticker, Zeichnungen und Doppelseiten mit privaten Konten, optionalen Sperren und clientseitiger Verschlüsselung verbinden.",
        "role": "Full-Stack-Entwicklung",
        "scope": "Umfang: Migration des Editors zu Next.js, Registrierung/Anmeldung, geschützte Journal-Route, Schlüsselverpackung und Wiederherstellung.",
        "features": [
          "Fotos, Sticker, Zeichnungen und Papierstile",
          "Supabase-Konten mit E-Mail-Bestätigung",
          "Eigentümerbasierte PostgreSQL Row Level Security",
          "Inhaltsverschlüsselung im Browser mit AES-256-GCM",
          "Schlüsselwiederherstellung über einen einmalig angezeigten Code"
        ],
        "architecture": "Next.js App Router → Supabase Auth / PostgreSQL / privater Storage. Web Crypto verschlüsselt Inhalte vor dem Upload; Kontoschlüssel werden mit Passwort und separatem Wiederherstellungscode verpackt.",
        "decisions": [
          "Jeder verschlüsselte Wert verwendet einen neuen 96-Bit-IV.",
          "Passwortbasierte Verpackungsschlüssel nutzen PBKDF2-HMAC-SHA-256, zufälliges Salt und 600.000 Iterationen.",
          "Lesbare Wiederherstellungscodes werden nicht in Supabase gespeichert."
        ],
        "challenges": [
          "Inhaltszugriff nach Passwortwiederherstellung: der Code öffnet denselben Hauptschlüssel; das neue Passwort verändert dessen verpackte Kopie.",
          "Kontenübergreifender Zugriff: Journal-, Seiten- und Mediendatensätze nutzen eigentümerbasierte RLS-Regeln."
        ],
        "limits": "Die README beschreibt eine erste Sicherheitsimplementierung, die vor sensiblen Daten unabhängig geprüft werden muss. Verschlüsselte Bild-Uploads werden als künftiger Schritt genannt.",
        "caption": "Journal-Designvorschau; kein bestätigter Screenshot der Live-Anwendung."
      }
    }
  },
  {
    "slug": "be-a-real-developer",
    "title": "Be a Real Developer",
    "image": "/projects/be-a-real-developer.png",
    "stack": [
      "JavaScript",
      "Node.js",
      "Cloudflare Workers",
      "SQLite / D1",
      "QuickJS",
      "OpenAI API"
    ],
    "sources": [
      {
        "label": "README",
        "url": "https://github.com/melisau/RealDev/blob/main/README.md"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/melisau/RealDev"
      }
    ],
    "reviewedAt": "2026-10-08",
    "copy": {
      "tr": {
        "tagline": "Doğru cevaptan fazlası: kod, açıklama ve hata ayıklamayla öğrenme kanıtı.",
        "problem": "Birden fazla seçmeli doğru cevap, geliştiricinin uygulama ve problem çözme derinliğini tek başına göstermiyor.",
        "goal": "Başlangıç taraması, çalıştırılabilir görevler ve kişisel rotalarla; doğrulanmış test kanıtını geçici AI değerlendirmesinden ayıran pratik ortamı sunmak.",
        "role": "Full-stack geliştirme",
        "scope": "Çalışma kapsamı: öğrenme arayüzü, değerlendirme API’si, kişisel veri yaşam döngüsü, güvenli kod çalıştırma ve kaynak izlenebilirliği.",
        "features": [
          "Sekiz görevli başlangıç taraması ve kişisel öğrenme rotaları",
          "Dört devam edilebilir proje ve on bir kaynaklı teknik inceleme",
          "Sunucuda yeniden çalıştırılan testler ve sahip bazlı geçmiş",
          "Rubrik tabanlı, geçici olarak etiketlenen isteğe bağlı AI geri bildirimi",
          "JSON dışa aktarma, hesap silme ve izinli ses transkripsiyonu"
        ],
        "architecture": "Vanilla web arayüzü → kimlik doğrulamalı Worker API → D1. QuickJS, JavaScript görevlerini sınırlandırılmış ortamda çalıştırıyor. Python/C#/Java görevleri isteğe bağlı özel Piston gateway kullanıyor.",
        "decisions": [
          "İstemcinin gönderdiği notlar yerine sunucunun test sonuçları esas alınıyor.",
          "QuickJS ortamında host ağ, dosya sistemi, DOM veya hesap erişimi yok.",
          "AI kaynak özetleri tam makaleden değil RSS başlık/alıntılarından üretiliyor ve kaynak metin hash’iyle önbelleğe alınıyor."
        ],
        "challenges": [
          "Güvenilmeyen kodu çalıştırma: QuickJS bellek, stack ve süre bütçeleriyle sınırlandırılıyor; sunucu yazılmış testleri yeniden çalıştırıyor.",
          "Şişirilmiş yetkinlik çıkarımları: eşdeğer görevler aynı kanıt ailesinde gruplanıyor; AI değerlendirmesi bağımsız test kanıtından ayrılıyor."
        ],
        "limits": "Mesleki sertifikasyon değildir. Çok dilli kod runner’ının canlı kullanımı özel, kararlı host/tünel; AI özellikleri API kredisi gerektiriyor.",
        "caption": "İngilizce öğrenme paneli"
      },
      "en": {
        "tagline": "Beyond the right answer: learning evidence through code, explanations and debugging.",
        "problem": "Correct multiple-choice answers alone do not show a developer’s practical implementation and debugging depth.",
        "goal": "Offer scans, executable tasks and personal routes while keeping verified test evidence separate from provisional AI assessment.",
        "role": "Full-stack development",
        "scope": "Scope: learning UI, assessment API, personal-data lifecycle, bounded code execution and source traceability.",
        "features": [
          "Eight-task initial scan and personal learning routes",
          "Four resumable projects and eleven sourced technical reviews",
          "Server-rerun tests and owner-scoped history",
          "Optional rubric-based AI feedback labeled provisional",
          "JSON export, account deletion and consent-based audio transcription"
        ],
        "architecture": "Vanilla web UI → authenticated Worker API → D1. QuickJS executes authored JavaScript tasks in a bounded environment; optional private Piston handles Python/C#/Java.",
        "decisions": [
          "Server test results are authoritative, not client-submitted grades.",
          "QuickJS has no host network, filesystem, DOM or account access.",
          "AI feed summaries use RSS titles/excerpts rather than full articles and are cached by source-text hash."
        ],
        "challenges": [
          "Untrusted code: QuickJS uses memory, stack and time budgets, and the server reruns authored tests.",
          "Inflated mastery claims: equivalent tasks share one evidence family, while AI assessment stays separate from independent test evidence."
        ],
        "limits": "This is formative practice, not professional certification. The polyglot runner requires a stable private host/tunnel; AI features require API credit.",
        "caption": "English learning dashboard"
      },
      "de": {
        "tagline": "Mehr als die richtige Antwort: Lernbelege durch Code, Erklärungen und Debugging.",
        "problem": "Richtige Multiple-Choice-Antworten allein zeigen keine praktische Implementierungs- und Debugging-Tiefe.",
        "goal": "Scans, ausführbare Aufgaben und persönliche Lernwege anbieten und geprüfte Testbelege von vorläufiger KI-Bewertung trennen.",
        "role": "Full-Stack-Entwicklung",
        "scope": "Umfang: Lernoberfläche, Bewertungs-API, Lebenszyklus persönlicher Daten, begrenzte Codeausführung und Quellennachverfolgbarkeit.",
        "features": [
          "Startscan mit acht Aufgaben und persönliche Lernwege",
          "Vier fortsetzbare Projekte und elf quellengestützte technische Reviews",
          "Serverseitig wiederholte Tests und eigentümerbezogener Verlauf",
          "Optionale rubrikbasierte, als vorläufig markierte KI-Rückmeldung",
          "JSON-Export, Kontolöschung und Audiotranskription mit Zustimmung"
        ],
        "architecture": "Vanilla-Weboberfläche → authentifizierte Worker-API → D1. QuickJS führt JavaScript-Aufgaben begrenzt aus; ein optionales privates Piston-Gateway unterstützt Python/C#/Java.",
        "decisions": [
          "Server-Testergebnisse zählen statt clientseitig übermittelter Noten.",
          "QuickJS hat keinen Zugriff auf Host-Netzwerk, Dateisystem, DOM oder Konten.",
          "KI-Feed-Zusammenfassungen verwenden RSS-Titel/-Auszüge und einen Quelltext-Hash für den Cache."
        ],
        "challenges": [
          "Nicht vertrauenswürdiger Code: QuickJS begrenzt Speicher, Stack und Laufzeit; der Server wiederholt Tests.",
          "Überhöhte Kompetenzannahmen: gleichwertige Aufgaben teilen eine Belegfamilie; KI-Bewertung bleibt von unabhängigen Tests getrennt."
        ],
        "limits": "Dies ist Lernpraxis, keine berufliche Zertifizierung. Der mehrsprachige Runner benötigt einen stabilen privaten Host/Tunnel; KI-Funktionen benötigen API-Guthaben.",
        "caption": "Englisches Lern-Dashboard"
      }
    }
  },
  {
    "slug": "budget-buddy",
    "title": "Budget Buddy",
    "image": "/projects/budget-buddy.png",
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase Auth",
      "PostgreSQL",
      "Groq",
      "Tailwind CSS"
    ],
    "sources": [
      {
        "label": "GitHub README",
        "url": "https://github.com/melisau/budget-buddy/blob/main/README.md"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/melisau/budget-buddy"
      }
    ],
    "reviewedAt": "2026-10-08",
    "copy": {
      "tr": {
        "tagline": "Kişisel bütçeni ve aile hedeflerini tek bir yerde takip et.",
        "problem": "Kişisel harcamalar ile ortak aile planlarını aynı araçta yönetirken özel işlemleri gereksiz yere paylaşmamak gerekiyor.",
        "goal": "Gelir, gider, bütçe ve tasarruf hedeflerini; seçici aile paylaşımı ve onaylı AI işlem taslaklarıyla anlaşılır hâle getirmek.",
        "role": "Full-stack geliştirme",
        "scope": "Çalışma kapsamı: finans ekranları, sunucu yetkilendirmesi, ilişkisel veri, özel fiş depolama, aile rolleri ve AI açıklama sınırları.",
        "features": [
          "Hesaplar, gelir/gider, transfer, bütçe ve raporlar",
          "CSV içe/dışa aktarma ve özel fiş görselleri",
          "Kişisel tasarruf hedefleri ve isteğe bağlı aile paylaşımı",
          "Aile davetleri, alışveriş listesi ve hediye rezervasyonları",
          "Groq destekli açıklamalar ve onay gerektiren sesli işlem taslakları"
        ],
        "architecture": "Next.js arayüzü → doğrulama ve sahip/rol kontrolleri yapan server routes → Supabase PostgreSQL ve özel Storage. Groq yalnızca yetkili, temizlenmiş finans özetlerini alıyor.",
        "decisions": [
          "Yetki, yalnızca arayüzde buton gizleyerek değil sunucuda doğrulanıyor.",
          "Fişler özel bucket ve kısa süreli imzalı URL’lerle sunuluyor.",
          "AI açık kullanıcı onayı olmadan işlem kaydedemiyor."
        ],
        "challenges": [
          "Kimlik sağlayıcı geçişinde eski finans kayıtları: güncel yerel runbook e-posta üzerinden otomatik eşleştirme yerine doğrulanmış, açık kimlik bağlantısı istiyor.",
          "Aile paylaşımında gizlilik: üyelik/rol kontrolleri, isteğe bağlı hedef paylaşımı ve sürpriz hediye görünürlüğü sunucuda uygulanıyor."
        ],
        "limits": "Kaynak farkı: GitHub README hâlâ Clerk’i anlatıyor; güncel yerel README ve mimari Supabase Auth geçişini belgeliyor. Bu sayfa güncel yerel uygulamayı esas alır. Stripe ödeme altyapısı ayrı yapılandırma gerektiriyor.",
        "caption": "İngilizce giriş sayfası"
      },
      "en": {
        "tagline": "Track personal finances and shared family goals in one place.",
        "problem": "Managing personal spending and family plans in one tool should not require sharing private transactions.",
        "goal": "Make income, expenses, budgets and savings goals understandable through selective family sharing and confirmed AI transaction drafts.",
        "role": "Full-stack development",
        "scope": "Scope: finance screens, server authorization, relational data, private receipts, family roles and AI explanation boundaries.",
        "features": [
          "Accounts, income/expenses, transfers, budgets and reports",
          "CSV import/export and private receipt images",
          "Personal savings goals with optional family sharing",
          "Family invitations, shopping lists and gift reservations",
          "Groq explanations and voice drafts requiring confirmation"
        ],
        "architecture": "Next.js UI → server routes enforcing validation, ownership and family roles → Supabase PostgreSQL and private Storage. Groq receives authorized, sanitized financial summaries only.",
        "decisions": [
          "Authorization is enforced on the server, not merely by hiding UI actions.",
          "Receipts use private buckets and short-lived signed URLs.",
          "AI cannot commit a transaction without explicit user confirmation."
        ],
        "challenges": [
          "Identity-provider migration: the current local runbook requires verified, explicit identity linking rather than automatic email matching of legacy finance records.",
          "Family privacy: server membership/role checks enforce opt-in goal sharing and surprise-gift visibility."
        ],
        "limits": "Source difference: GitHub still documents Clerk; the current local README and architecture document the Supabase Auth migration. This page follows the current local app. Stripe payments require separate configuration.",
        "caption": "English landing page"
      },
      "de": {
        "tagline": "Persönliche Finanzen und gemeinsame Familienziele an einem Ort verfolgen.",
        "problem": "Private Ausgaben und Familienpläne gemeinsam zu verwalten darf keine unnötige Offenlegung persönlicher Transaktionen erfordern.",
        "goal": "Einnahmen, Ausgaben, Budgets und Sparziele durch gezielte Familienfreigaben und bestätigte KI-Entwürfe verständlich machen.",
        "role": "Full-Stack-Entwicklung",
        "scope": "Umfang: Finanzoberflächen, Serverberechtigungen, relationale Daten, private Belege, Familienrollen und Grenzen für KI-Erklärungen.",
        "features": [
          "Konten, Einnahmen/Ausgaben, Transfers, Budgets und Berichte",
          "CSV-Import/-Export und private Belegbilder",
          "Persönliche Sparziele mit optionaler Familienfreigabe",
          "Familieneinladungen, Einkaufslisten und Geschenkreservierungen",
          "Groq-Erklärungen und Sprachentwürfe mit Bestätigung"
        ],
        "architecture": "Next.js-Oberfläche → Server-Routen mit Validierung, Eigentümer- und Rollenprüfung → Supabase PostgreSQL und privater Storage. Groq erhält nur autorisierte, bereinigte Finanzübersichten.",
        "decisions": [
          "Berechtigungen werden serverseitig geprüft, nicht nur durch versteckte Schaltflächen.",
          "Belege nutzen private Buckets und kurzlebige signierte URLs.",
          "KI kann ohne ausdrückliche Bestätigung keine Transaktion speichern."
        ],
        "challenges": [
          "Identitätsmigration: das aktuelle lokale Runbook fordert geprüfte, explizite Verknüpfungen statt automatischer E-Mail-Zuordnung alter Finanzdaten.",
          "Familien-Privatsphäre: serverseitige Mitglieds-/Rollenprüfungen regeln freiwillige Zielfreigaben und Überraschungsgeschenke."
        ],
        "limits": "Quellenunterschied: GitHub beschreibt noch Clerk; aktuelle lokale README und Architektur dokumentieren Supabase Auth. Diese Seite folgt der lokalen Anwendung. Stripe-Zahlungen erfordern zusätzliche Konfiguration.",
        "caption": "Englische Startseite"
      }
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
      "Node.js 22+",
      "Cloudflare Workers",
      "HTML / CSS"
    ],
    "sources": [
      {
        "label": "README",
        "url": "https://github.com/melisau/Rogi/blob/main/README.md"
      }
    ],
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/melisau/Rogi"
      }
    ],
    "reviewedAt": "2026-10-08",
    "copy": {
      "tr": {
        "tagline": "Yayına çıkmadan önce sitendeki eksikleri görünür kıl.",
        "problem": "SEO, kaynak kod, güvenlik ve mobil kullanılabilirlik kontrolleri farklı yerlerde kaldığında yayın öncesi eksikler gözden kaçabiliyor.",
        "goal": "Canlı site taraması ve yerel proje incelemesini, açık kapsamlı kontrol listeleriyle tek bir çalışma alanında toplamak.",
        "role": "Web uygulaması geliştirme",
        "scope": "Çalışma kapsamı: TR/EN landing, etkileşimli örnek rapor, tarama API’si ve mevcut denetim çalışma alanının bütünleştirilmesi.",
        "features": [
          "TR/EN giriş sayfası ve kalıcı dil tercihi",
          "Etkileşimli örnek rapor, iş akışı ve SSS",
          "Canlı web sitesi tarama API’si",
          "Yerel proje incelemesi",
          "Masaüstü ve mobil responsive düzen"
        ],
        "architecture": "Bağımlılıksız Node.js önizleme; Cloudflare Worker modüllerine derlenen landing ve denetim akışı. Giriş sayfası /, çalışma alanı /app; özgün uygulama seo-kontrol klasöründe korunuyor.",
        "decisions": [
          "Landing ve çalışma alanı ayrı rotalarda sunuluyor.",
          "Yeni sunum katmanı eklenirken özgün denetim uygulaması korunuyor.",
          "Örnek puan gerçek tarama sonucuymuş gibi sunulmuyor."
        ],
        "challenges": [
          "Otomatik kontrol ile manuel doğrulamayı ayırmak: güvenlik ve mobil listeleri gerçek akış/cihaz doğrulaması gerektiren kapsam olarak belgeleniyor."
        ],
        "limits": "Denetim çalışma alanı README’ye göre Türkçe. Güvenlik kontrol listesi otomatik penetrasyon testi değildir; landing’deki puan yalnızca örnektir.",
        "caption": "İngilizce giriş sayfası ve temsili rapor"
      },
      "en": {
        "tagline": "Find the gaps in your website before launch.",
        "problem": "Pre-launch gaps can be missed when SEO, source review, security and mobile-usability checks are scattered across tools.",
        "goal": "Bring live-site scanning and local project review into one workspace with clearly scoped checklists.",
        "role": "Web application development",
        "scope": "Scope: Turkish/English landing, interactive sample report, scan API and integration of the existing audit workspace.",
        "features": [
          "TR/EN landing with saved language preference",
          "Interactive sample report, workflow and FAQ",
          "Live website scan API",
          "Local project review",
          "Responsive desktop and mobile layouts"
        ],
        "architecture": "Dependency-free Node.js preview with landing and audit flows built as Cloudflare Worker modules. Landing at /, workspace at /app; the original implementation remains in seo-kontrol.",
        "decisions": [
          "Landing and workspace have separate routes.",
          "The original audit implementation is retained while adding the new presentation layer.",
          "The sample score is explicitly distinguished from a real scan result."
        ],
        "challenges": [
          "Separating automation from manual verification: security and mobile checklists explicitly require checks on real flows and devices."
        ],
        "limits": "The README describes the audit workspace as Turkish. Security checklists are not automated penetration testing; the landing score is illustrative.",
        "caption": "English landing page with illustrative report"
      },
      "de": {
        "tagline": "Lücken in deiner Website vor dem Start sichtbar machen.",
        "problem": "Vor dem Start werden Lücken leicht übersehen, wenn SEO-, Quellcode-, Sicherheits- und Mobilprüfungen verteilt sind.",
        "goal": "Live-Website-Scans und lokale Projektprüfungen in einem Arbeitsbereich mit klar abgegrenzten Checklisten bündeln.",
        "role": "Webanwendungsentwicklung",
        "scope": "Umfang: türkisch/englische Startseite, interaktiver Beispielbericht, Scan-API und Integration des bestehenden Prüfbereichs.",
        "features": [
          "TR/EN-Startseite mit gespeicherter Sprachwahl",
          "Interaktiver Beispielbericht, Ablauf und FAQ",
          "Scan-API für Live-Websites",
          "Lokale Projektprüfung",
          "Responsive Desktop- und Mobillayouts"
        ],
        "architecture": "Abhängigkeitsfreie Node.js-Vorschau; Startseite und Prüfablauf werden als Cloudflare-Worker-Module gebaut. Startseite unter /, Arbeitsbereich unter /app; die ursprüngliche Implementierung bleibt in seo-kontrol.",
        "decisions": [
          "Startseite und Arbeitsbereich haben getrennte Routen.",
          "Die ursprüngliche Prüfimplementierung bleibt neben der neuen Präsentationsebene erhalten.",
          "Der Beispielwert ist ausdrücklich von einem echten Scanergebnis getrennt."
        ],
        "challenges": [
          "Automatik von manueller Prüfung trennen: Sicherheits- und Mobilchecklisten erfordern ausdrücklich echte Abläufe und Geräte."
        ],
        "limits": "Der Prüfbereich ist laut README auf Türkisch. Sicherheitschecklisten sind keine automatischen Penetrationstests; der Startseitenwert ist illustrativ.",
        "caption": "Englische Startseite mit illustrativem Bericht"
      }
    }
  }
];
