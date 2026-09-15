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
  role: "Junior Full-Stack Developer",
  eyebrow: "Merhaba, ben Melisa",
  headline: "Modern, kullanıcı odaklı ve ölçeklenebilir yazılımlar geliştiriyorum.",
  summary:
    "Web teknolojileri, backend geliştirme ve kullanıcı odaklı yazılım çözümleri üzerine çalışan bir Bilgisayar Mühendisi ve Junior Full-Stack Developer'ım.",
  about:
    "Backend tarafında Java Spring Boot, Python, REST API ve PostgreSQL; frontend tarafında HTML, CSS, JavaScript, SvelteKit ve Shopify Liquid ile modern, responsive arayüzler geliştiriyorum.",
  email: "melisauyar5225@gmail.com",
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
  { value: "5", label: "Öne çıkan proje" },
  { value: "2025", label: "Mezuniyet yılı" },
  { value: "Uzaktan", label: "Çalışma tercihi" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com", icon: Github },
  { label: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend Development",
    description: "Güvenilir API'ler ve sürdürülebilir sunucu uygulamaları",
    icon: Code2,
    skills: ["Java", "Spring Boot", "Python", "FastAPI", "REST API Development", "SQLAlchemy"],
  },
  {
    title: "Frontend Development",
    description: "Modern, responsive ve kullanıcı odaklı web arayüzleri",
    icon: PanelsTopLeft,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Svelte & SvelteKit", "Shopify Liquid", "Responsive Web Design"],
  },
  {
    title: "Database",
    description: "İlişkisel ve bulut tabanlı veri çözümleri",
    icon: Database,
    skills: ["PostgreSQL", "Firebase Firestore", "Relational Database Design", "SQL Queries"],
  },
  {
    title: "Tools & Technologies",
    description: "Tasarım, geliştirme ve versiyon kontrol araçları",
    icon: Wrench,
    skills: ["Git & GitHub", "VS Code", "Cursor", "Figma", "Linux", "Windows"],
  },
  {
    title: "Additional Knowledge",
    description: "Bilgisayar mühendisliği temelleri ve yazılım yaklaşımı",
    icon: BrainCircuit,
    skills: ["Object-Oriented Programming", "Design Patterns", "Data Structures & Algorithms", "Artificial Intelligence", "Data Mining", "Computer Networks", "Software Architecture"],
  },
];

export const projects: Project[] = [
  {
    title: "Atatürk Digital Archive",
    category: "Digital Archive",
    summary: "A large-scale digital archive featuring multi-filter galleries, PDF viewing, light/dark mode, and interactive content sections.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Metafields"],
    year: "Professional Project",
    accent: "#b91c1c",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&auto=format&q=85",
  },
  {
    title: "Budget Buddy",
    category: "Finance Platform",
    summary: "Personal and family finance tracker with RBAC, secure receipt uploads, CSV export, and AI-assisted financial explanations.",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "Clerk", "Tailwind"],
    year: "Personal Project",
    accent: "#0f766e",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&q=85",
  },
  {
    title: "Pin & Paper Journal",
    category: "Journal Application",
    summary: "A Pinterest-inspired bullet journal utilizing client-side AES-256-GCM browser encryption and password wrapping keys.",
    technologies: ["React", "Supabase", "Web Crypto API", "RLS"],
    year: "Personal Project",
    accent: "#be185d",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&auto=format&q=85",
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
];

export const experience: Experience[] = [
  {
    title: "Junior Full-Stack Developer",
    organization: "BusinessUp",
    period: "Şubat 2026 — Haziran 2026",
    description: "Şubat 2026'da Full-Stack Developer stajyeri olarak başladığım BusinessUp'ta, Haziran 2026'da tamamladığım başarılı staj sürecimin ardından Junior Full-Stack Developer olarak çalışmaya devam ediyorum. Shopify tema ve Liquid geliştirme, responsive arayüzler, UI/UX ve performans iyileştirmeleri, özel section ve component geliştirme, Figma tasarımlarını koda dönüştürme, Git ve Agile süreçlerinde görev alıyorum.",
  },
  {
    title: "Bilgisayar Mühendisliği (Lisans)",
    organization: "Manisa Celal Bayar Üniversitesi · Manisa, Türkiye",
    period: "Mezuniyet: Haziran 2025",
    description: "Yazılım geliştirme, algoritmalar, veri yapıları, nesne yönelimli programlama, veritabanı sistemleri, yapay zekâ, veri madenciliği, bilgisayar ağları, işletim sistemleri ve mikroişlemciler alanlarında eğitim aldım. Teorik bilgilerimi Java, Python, Spring Boot, PostgreSQL, SvelteKit, FastAPI ve Shopify ile geliştirdiğim projelerle pekiştirdim.",
  },
];
