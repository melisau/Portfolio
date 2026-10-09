import {
  BrainCircuit,
  Code2,
  Database,
  Github,
  Linkedin,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";
import type { Experience, Project, SkillGroup, SocialLink } from "../types/portfolio";

/* Portfolyodaki tüm değişken içerik bu dosyada tutulur. */
export const profile = {
  name: "Melisa Uyar",
  shortName: "MU",
  role: "Full-Stack & Shopify Developer",
  eyebrow: "Merhaba, ben Melisa",
  headline: "Web uygulamaları ve Shopify deneyimleri geliştiriyorum.",
  summary:
    "React, FastAPI ve PostgreSQL ile arayüzden veritabanına uzanan projeler üzerinde çalışıyorum.",
  about:
    "Bireysel projelerimde Budget Buddy ile bütçe takibi ve hesap yetkilendirmesi, Luma ile dijital davetiye ve misafir yanıtları, Pin & Paper Journal ile tarayıcı tarafı şifreleme üzerinde çalışıyorum. Bu projelerde React, Next.js, FastAPI, Supabase ve PostgreSQL kullanıyorum.",
  email: "melisauyar5225@gmail.com",
  phone: "+90 537 428 00 11",
  location: "Muğla, Türkiye",
  availability: "Çalışmaya açık",
  resumeUrl: "/melisa-uyar-cv.pdf",
};

export const navigation = [
  { label: "Hakkımda", href: "#about" },
  { label: "Uzmanlık", href: "#skills" },
  { label: "Projeler", href: "#projects" },
  { label: "Deneyim", href: "#experience" },
  { label: "İletişim", href: "#contact" },
];

export const metrics = [
  { value: "8", label: "Öne çıkan proje" },
  { value: "2025", label: "Mezuniyet yılı" },
  { value: "Uzaktan", label: "Çalışma tercihi" },
];

export const socials: SocialLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/melisa-uyar-78653a200", icon: Linkedin },
  { label: "GitHub", url: "https://github.com/melisau", icon: Github },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend Development",
    description: "Güvenilir API'ler ve sürdürülebilir sunucu uygulamaları",
    icon: Code2,
    skills: ["Node.js", "Python", "FastAPI", "REST API Development", "Supabase", "PostgreSQL"],
  },
  {
    title: "Frontend Development",
    description: "Modern, responsive ve kullanıcı odaklı web arayüzleri",
    icon: PanelsTopLeft,
    skills: ["React", "HTML5", "CSS3", "JavaScript", "Shopify Liquid", "Responsive UI/UX"],
  },
  {
    title: "Database",
    description: "İlişkisel ve bulut tabanlı veri çözümleri",
    icon: Database,
    skills: ["Supabase", "PostgreSQL", "MongoDB", "Relational Database Design", "SQL Queries", "RLS"],
  },
  {
    title: "Tools & Technologies",
    description: "Tasarım, geliştirme ve versiyon kontrol araçları",
    icon: Wrench,
    skills: ["Git & GitHub", "Agile/Scrum", "Figma to Code", "Web Performance Optimization", "VS Code", "Figma"],
  },
  {
    title: "Additional Knowledge",
    description: "Bilgisayar mühendisliği temelleri ve yazılım yaklaşımı",
    icon: BrainCircuit,
    skills: ["Web Crypto API", "JWT Authentication", "WCAG 2.1 AA", "Client-Side Encryption", "Software Architecture", "Secure Data Handling"],
  },
];

export const projects: Project[] = [
  {
    title: "Luma",
    slug: "luma",
    category: "Event Platform",
    summary: "Personalized digital invitation platform with guest RSVP, shared event memories, photo galleries, and a dedicated administration experience.",
    technologies: ["JavaScript", "FastAPI", "PostgreSQL", "Responsive UI"],
    year: "Personal Project",
    accent: "#31594d",
    image: "/projects/luma.png",
    sourceUrl: "https://github.com/melisau/luma-frontend",
  },
  {
    title: "Mitzi: Paw Path",
    slug: "mitzi-paw-path",
    category: "2D Game Development",
    summary: "A cozy side-scrolling cat game with draw-to-play and direct-control modes, collectible rewards, themed levels, cat rescue progression, and a customizable home hub.",
    technologies: ["Unity", "C#", "2D Physics", "ScriptableObject"],
    year: "In Development",
    accent: "#8b5cf6",
    image: "/projects/mitzi-paw-path.jpg",
    sourceUrl: "https://github.com/melisau/Mitzi",
  },
  {
    title: "Pin & Paper Journal",
    slug: "pin-paper-journal",
    category: "Encrypted Journal Application",
    summary: "A visual bullet journal for writing, photos, stickers, drawing, templates, and encrypted cloud backups with client-side key protection.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Web Crypto API"],
    year: "Personal Project",
    accent: "#9a5c67",
    image: "/projects/journal.png",
    sourceUrl: "https://github.com/melisau/pin-paper-journal",
  },
  {
    title: "Be a Real Developer",
    slug: "be-a-real-developer",
    category: "Developer Learning Platform",
    summary: "A bilingual practice platform with evidence-based skill assessment, executable coding tasks, personalized learning paths, technical reviews, and optional rubric-based AI feedback.",
    technologies: ["JavaScript", "Node.js", "SQLite / D1", "QuickJS", "OpenAI API"],
    year: "Personal Project",
    accent: "#2563eb",
    image: "/projects/be-a-real-developer.png",
    imageFit: "contain",
    sourceUrl: "https://github.com/melisau/RealDev",
  },
  {
    title: "Budget Buddy",
    slug: "budget-buddy",
    category: "Finance Platform",
    summary: "Personal and family finance tracker with RBAC, secure receipt uploads, CSV export, and AI-assisted financial explanations.",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Supabase Auth", "Tailwind"],
    year: "Personal Project · Jan 2025 — Present",
    accent: "#0f766e",
    image: "/projects/budget-buddy.png",
    sourceUrl: "https://github.com/melisau/budget-buddy",
    imageFit: "contain",
  },
  {
    title: "Atatürk Digital Archive",
    slug: "ataturk-digital-archive",
    category: "Digital Archive",
    summary: "A BusinessUp project I contributed to, featuring a large-scale digital archive with multi-filter galleries, PDF viewing, light/dark mode, and interactive content sections.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Metafields"],
    year: "BusinessUp · Professional Project",
    accent: "#b91c1c",
    image: "https://ataturkarsivi.com/cdn/shop/files/Ataturk.jpg?v=1747747216&width=1200",
    liveUrl: "https://ataturkarsivi.com/",
  },
  {
    title: "Custom Shopify Theme Development",
    slug: "shopify-theme-development",
    category: "Shopify Development",
    summary: "Custom Shopify Liquid themes and sections for client projects, with a focus on performance and user experience optimization.",
    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    year: "Feb 2024 — Jul 2025",
    accent: "#16a34a",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&q=85",
  },
  {
    title: "Rogi",
    slug: "rogi",
    category: "Website Audit Platform",
    summary: "A bilingual website audit tool for live-site SEO analysis, source-code review, and guided security and mobile usability checks before launch.",
    technologies: ["JavaScript", "Node.js", "Cloudflare Workers", "HTML / CSS"],
    year: "Personal Project",
    accent: "#c8f56a",
    image: "/projects/rogi.png",
    imageFit: "contain",
    sourceUrl: "https://github.com/melisau/Rogi",
  },
];

export const experience: Experience[] = [
  {
    title: "Full-Stack Developer · Bireysel Projeler",
    organization: "Bireysel Projeler",
    period: "Ağustos 2025 — Günümüz",
    description: "Budget Buddy, Pin & Paper Journal ve Luma'yı bireysel projeler olarak tasarlıyor ve geliştiriyorum. Bütçe takibi, tarayıcı tarafı şifreleme ve dijital davetiye akışları üzerinde çalışıyor; arayüz, API ve veri modellerini geliştiriyorum.",
  },
  {
    title: "Full-Stack Developer",
    organization: "BusinessUp",
    period: "Temmuz 2024 — Ağustos 2025",
    description: "BusinessUp'ta Temmuz 2024'te Full-Stack Developer Intern olarak başladım ve Temmuz 2025'te Junior Full-Stack Developer rolüne geçtim. Bu süreçte ölçeklenebilir Shopify mağazaları ve dinamik medya arşivleri geliştirdim; Shopify Liquid ve Metafields ile özel galeriler ve filtreler oluşturdum, geleneksel perakende markalarının arayüzlerini responsive Shopify temalarına dönüştürdüm.",
  },
  {
    title: "Bilgisayar Mühendisliği (Lisans)",
    organization: "Manisa Celal Bayar Üniversitesi · Manisa, Türkiye",
    period: "Mezuniyet: Haziran 2025",
    description: "Yazılım geliştirme, algoritmalar, veri yapıları, nesne yönelimli programlama, veritabanı sistemleri, yapay zekâ, veri madenciliği, bilgisayar ağları, işletim sistemleri ve mikroişlemciler alanlarında eğitim aldım. Teorik bilgilerimi Java, Python, Spring Boot, PostgreSQL, SvelteKit, FastAPI ve Shopify ile geliştirdiğim projelerle pekiştirdim.",
  },
];
