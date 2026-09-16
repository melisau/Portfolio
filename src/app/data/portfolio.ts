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
  role: "Full-Stack Developer | Fintech & E-Commerce Platforms",
  eyebrow: "Merhaba, ben Melisa",
  headline: "Fintech ve e-ticaret için güvenli, ölçeklenebilir web uygulamaları geliştiriyorum.",
  summary:
    "Üretim ortamında kullanılan fintech, e-ticaret ve şifreli depolama uygulamaları geliştiren Full-Stack ve Shopify Developer'ım. Modern frontend/backend mimarileri, Shopify Liquid ve istemci tarafı kriptografi protokolleriyle yüksek performanslı, erişilebilir ve güvenli web çözümleri geliştiriyorum.",
  about:
    "Backend tarafında Node.js, Python, FastAPI, REST API, Supabase ve PostgreSQL; frontend ve e-ticaret tarafında React, JavaScript, HTML, CSS, Shopify Liquid ve responsive UI/UX ile çalışıyorum. Figma tasarımlarını erişilebilir ve yeniden kullanılabilir bileşenlere dönüştürüyorum.",
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
  { value: "7", label: "Öne çıkan proje" },
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
    title: "Budget Buddy",
    category: "Finance Platform",
    summary: "Personal and family finance tracker with RBAC, secure receipt uploads, CSV export, and AI-assisted financial explanations.",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Clerk", "Tailwind"],
    year: "Jan 2025 — Present",
    accent: "#0f766e",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&q=85",
  },
  {
    title: "Pin & Paper Journal",
    category: "Journal Application",
    summary: "A Pinterest-inspired bullet journal utilizing client-side AES-256-GCM browser encryption and password wrapping keys.",
    technologies: ["React", "Supabase", "Web Crypto API", "RLS"],
    year: "Feb 2026 — Aug 2026",
    accent: "#be185d",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&auto=format&q=85",
  },
  {
    title: "Atatürk Digital Archive",
    category: "Digital Archive",
    summary: "A BusinessUp project I contributed to, featuring a large-scale digital archive with multi-filter galleries, PDF viewing, light/dark mode, and interactive content sections.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Metafields"],
    year: "BusinessUp · Professional Project",
    accent: "#b91c1c",
    image: "https://ataturkarsivi.com/cdn/shop/files/Ataturk.jpg?v=1747747216&width=1200",
    liveUrl: "https://ataturkarsivi.com/",
  },
  {
    title: "Luma",
    category: "Event Platform",
    summary: "Digital invitation platform with guest RSVP, shared event photo galleries, and an isolated administrative dashboard API.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Railway"],
    year: "Personal Project",
    accent: "#7c3aed",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&auto=format&q=85",
  },
  {
    title: "Full-Stack Blog Platform",
    category: "Content Platform",
    summary: "Async RESTful blogging platform featuring JWT authentication, dynamic follower feeds, categories, and notifications.",
    technologies: ["FastAPI", "MongoDB", "React", "Beanie"],
    year: "Personal Project",
    accent: "#2563eb",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&q=85",
  },
  {
    title: "Custom Shopify Theme Development",
    category: "Shopify Development",
    summary: "Custom Shopify Liquid themes and sections for client projects, with a focus on performance and user experience optimization.",
    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    year: "Feb 2024 — Jul 2025",
    accent: "#16a34a",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&q=85",
  },
  {
    title: "UI Component Library",
    category: "Frontend Development",
    summary: "A modular, accessible UI component library translated from Figma wireframes for use across applications.",
    technologies: ["React", "JavaScript", "Figma", "WCAG 2.1 AA"],
    year: "Feb 2024",
    accent: "#ea580c",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&auto=format&q=85",
  },
];

export const experience: Experience[] = [
  {
    title: "Freelance Full-Stack Developer",
    organization: "Self-Employed · Independent Projects",
    period: "Ağustos 2025 — Günümüz",
    description: "Fintech ve kişisel üretkenlik alanlarındaki müşteriler için Budget Buddy, Pin & Paper Journal ve Luma platformlarını React, FastAPI, Supabase ve Web Crypto API kullanarak tasarladım ve geliştirdim. Üretim ortamında çalışan full-stack web uygulamalarının mimarisini kurup yayına aldım.",
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
