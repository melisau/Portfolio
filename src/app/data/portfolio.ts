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
import profilePhoto from "./meu.jpg";

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
  photo: profilePhoto,
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
  { value: "9", label: "Öne çıkan proje" },
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
    title: "BudgetBuddy", category: "Web Application",
    summary: "Kişisel ve aile bütçe yönetimi için geliştirilen web uygulaması.",
    technologies: ["SvelteKit", "Firebase", "JavaScript"], year: "Bireysel Proje", accent: "#00e5b0",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&q=85",
  },
  {
    title: "Offline Question & Answer Platform", category: "Full-Stack Platform",
    summary: "İnternet erişimi olmayan kurumlar için geliştirilen kurumsal soru-cevap ve dokümantasyon platformu.",
    technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Svelte"], year: "Kurumsal Proje", accent: "#7c3aed",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&q=85",
  },
  {
    title: "Shopify Theme Development", category: "E-Commerce Development",
    summary: "Shopify mağazaları için responsive tema geliştirme, Liquid özelleştirmeleri, performans ve UI/UX iyileştirmeleri ile özel section çalışmaları.",
    technologies: ["Shopify Liquid", "HTML", "CSS", "JavaScript"], year: "Profesyonel", accent: "#f59e0b",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&q=85",
  },
  {
    title: "FTP / SFTP Desktop Client", category: "Desktop Application",
    summary: "Dosya yönetimi sağlayan masaüstü FTP/SFTP istemcisi.",
    technologies: ["Python", "wxPython", "Paramiko"], year: "Akademik Proje", accent: "#ef4444",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&q=85",
  },
  {
    title: "Iris Decision Tree Classification", category: "Machine Learning",
    summary: "Makine öğrenmesi kullanılarak Iris veri seti üzerinde geliştirilen sınıflandırma uygulaması.",
    technologies: ["Python", "Scikit-learn"], year: "Akademik Proje", accent: "#06b6d4",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&q=85",
  },
  {
    title: "N-Queens Artificial Intelligence Solver", category: "Artificial Intelligence",
    summary: "BFS, DFS, Uniform Cost, Greedy Search, A*, Hill Climbing ve Genetic Algorithm kullanılarak N-Queens probleminin çözümü.",
    technologies: ["Python", "Search Algorithms", "Genetic Algorithm"], year: "Akademik Proje", accent: "#8b5cf6",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&q=85",
  },
  {
    title: "Numerical Methods API", category: "REST API",
    summary: "Sabit Nokta (Fixed Point Iteration) yöntemiyle kök bulan REST API.",
    technologies: ["Flask", "Python"], year: "Akademik Proje", accent: "#14b8a6",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&auto=format&q=85",
  },
  {
    title: "Party Simulation", category: "Concurrency",
    summary: "Java Thread kullanılarak geliştirilen eş zamanlılık simülasyonu.",
    technologies: ["Java", "Threads"], year: "Akademik Proje", accent: "#f97316",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&q=85",
  },
  {
    title: "Temperature Monitoring System", category: "Embedded Systems",
    summary: "PIC16F877A mikrodenetleyicisi ile geliştirilen sıcaklık ölçüm sistemi.",
    technologies: ["C", "MikroC", "Proteus", "PIC16F877A"], year: "Akademik Proje", accent: "#ec4899",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&auto=format&q=85",
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
