import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Sun,
  X,
} from "lucide-react";
import { SectionHeading } from "./components/atoms/SectionHeading";
import { SocialLinks } from "./components/atoms/SocialLinks";
import {
  experience,
  navigation,
  profile,
  projects,
  skillGroups,
} from "./data/portfolio";
import { useTheme } from "./hooks/useTheme";
import { languageOptions, translations, type Language } from "./data/i18n";

type Copy = (typeof translations)[Language];

function Header({ language, setLanguage, copy }: { language: Language; setLanguage: (language: Language) => void; copy: Copy }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container nav">
        <a className="logo" href="#top" aria-label="Ana sayfa">{profile.shortName}<span>.</span></a>
        <nav className={`nav-links ${open ? "nav-links--open" : ""}`} aria-label="Ana navigasyon">
          {navigation.map((item, index) => <a href={item.href} key={item.href} onClick={() => setOpen(false)}>{copy.nav[index]}</a>)}
        </nav>
        <div className="nav-actions">
          <label className="language-picker"><span className="sr-only">Language</span><select value={language} onChange={(event) => setLanguage(event.target.value as Language)} aria-label="Language">{languageOptions.map((option) => <option value={option.value} key={option.value}>{option.value.toUpperCase()}</option>)}</select></label>
          <button className="icon-button" onClick={toggleTheme} aria-label={`${theme === "dark" ? copy.themeLight : copy.themeDark}`}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="button button--small header-contact" href="#contact">{copy.workTogether} <ArrowUpRight size={15} /></a>
          <button className="icon-button menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={copy.menu}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ copy }: { copy: Copy }) {
  const [firstName, ...surnameParts] = profile.name.split(" ");
  const surname = surnameParts.join(" ");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const phrase = copy.heroEyebrows[phraseIndex % copy.heroEyebrows.length];

  useEffect(() => {
    setPhraseIndex(0);
    setVisibleCharacters(0);
    setDeleting(false);
  }, [copy]);

  useEffect(() => {
    const atEnd = visibleCharacters === phrase.length;
    const atStart = visibleCharacters === 0;
    const delay = atEnd && !deleting ? 1400 : deleting ? 45 : 85;
    const timer = window.setTimeout(() => {
      if (!deleting && atEnd) setDeleting(true);
      else if (deleting && atStart) {
        setDeleting(false);
        setPhraseIndex((index) => (index + 1) % copy.heroEyebrows.length);
      } else setVisibleCharacters((count) => count + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [copy.heroEyebrows.length, deleting, phrase, visibleCharacters]);

  return (
    <section className="hero container" id="top">
      <div className="hero__copy">
        <p className="hero__eyebrow" aria-label={phrase}>
          <span>{phrase.slice(0, visibleCharacters)}</span><i aria-hidden="true" />
        </p>
        <h1 className="hero__name"><span>{firstName}</span> <strong>{surname}</strong></h1>
        <h2 className="hero__title">{copy.headline}</h2>
        <p className="hero__summary">{copy.summary}</p>
        <div className="hero__actions">
          <a className="button" href="#projects">{copy.projectsCta} <ArrowDown size={16} /></a>
          <a className="text-link" href={profile.resumeUrl} download><Download size={17} /> {copy.resume}</a>
        </div>
        <div className="hero__meta"><SocialLinks /><span /> <p>{copy.location}</p></div>
      </div>
      <div className="portrait-wrap">
        <div className="portrait-frame">
          <img src="/profile.jpg" alt={`${profile.name} profil fotoğrafı`} />
          <div className="portrait-caption"><span className="status-dot" /><div><strong>{copy.availability}</strong><small>{copy.role}</small></div></div>
        </div>
        <span className="portrait-mark portrait-mark--top">✦</span>
        <span className="portrait-mark portrait-mark--bottom">{profile.shortName}</span>
      </div>
    </section>
  );
}

function About({ copy }: { copy: Copy }) {
  return (
    <section className="section container" id="about">
      <SectionHeading index="01" eyebrow={copy.section.about[0]} title={copy.section.about[1]} />
      <div className="about-grid">
        <p className="about-lead">{copy.aboutLead[0]}<em>{copy.aboutLead[1]}</em>{copy.aboutLead[2]}</p>
        <div className="about-copy"><p>{copy.about}</p><p>{copy.aboutExtra}</p></div>
      </div>
    </section>
  );
}

function Skills({ copy }: { copy: Copy }) {
  return (
    <section className="section section--tinted" id="skills"><div className="container">
      <SectionHeading index="02" eyebrow={copy.section.skills[0]} title={copy.section.skills[1]} description={copy.sectionDescriptions[0]} />
      <div className="skill-grid">
        {skillGroups.map(({ icon: Icon, title, description, skills }, index) => (
          <article className="skill-card" key={title}>
            <div className="skill-card__top"><span>0{index + 1}</span><Icon /></div>
            <h3>{copy.skillTitles[index] ?? title}</h3><p>{copy.skillDescriptions[index] ?? description}</p>
            <ul>{skills.map((skill) => <li key={skill}><CheckCircle2 size={14} />{skill}</li>)}</ul>
          </article>
        ))}
      </div>
    </div></section>
  );
}

function Projects({ copy }: { copy: Copy }) {
  return (
    <section className="section container" id="projects">
      <SectionHeading index="03" eyebrow={copy.section.projects[0]} title={copy.section.projects[1]} description={copy.sectionDescriptions[1]} />
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title} style={{ "--project-accent": project.accent } as CSSProperties}>
            <div className="project-card__image"><img src={project.image} alt={`${project.title} proje görseli`} loading="lazy" /><span>0{index + 1}</span></div>
            <div className="project-card__content">
              <div className="project-card__meta"><span>{copy.projectCategories[index] ?? project.category}</span><span>{copy.projectYears[index] ?? project.year}</span></div>
              <h3>{project.title}</h3><p>{copy.projectSummaries[index] ?? project.summary}</p>
              <ul>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="project-card__links">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">{copy.live} <ExternalLink size={14} /></a>}
                {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer">{copy.source} <Github size={14} /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience({ copy }: { copy: Copy }) {
  return (
    <section className="section section--tinted" id="experience"><div className="container experience-layout">
      <SectionHeading index="04" eyebrow={copy.section.experience[0]} title={copy.section.experience[1]} />
      <div className="timeline">
        {experience.map((item, index) => <article className="timeline-item" key={`${item.title}-${item.period}`}><span className="timeline-dot" /><div className="timeline-item__meta"><span>{copy.experiencePeriods[index] ?? item.period}</span><small>{copy.experienceOrganizations[index] ?? item.organization}</small></div><div><h3>{copy.experienceTitles[index] ?? item.title}</h3><p>{copy.experienceDescriptions[index] ?? item.description}</p></div></article>)}
      </div>
    </div></section>
  );
}

function Contact({ copy }: { copy: Copy }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolyo iletişim: ${String(form.get("name"))}`);
    const body = encodeURIComponent(`Gönderen: ${String(form.get("name"))}\nE-posta: ${String(form.get("email"))}\n\n${String(form.get("message"))}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <section className="section contact container" id="contact">
      <div className="contact__copy"><p className="section-kicker"><span>05</span>{copy.section.contact[0]}</p><h2>{copy.section.contact[1]}</h2><p>{copy.contactText}</p><a href={`mailto:${profile.email}`}><Mail size={17} />{profile.email}</a><span><MapPin size={17} />{copy.location}</span><SocialLinks boxed /></div>
      <form className="contact-form" onSubmit={submit}><div className="field-row"><label>{copy.name}<input name="name" required placeholder={copy.namePh} /></label><label>{copy.email}<input name="email" type="email" required placeholder="mail@example.com" /></label></div><label>{copy.message}<textarea name="message" required rows={6} placeholder={copy.messagePh} /></label><button className="button" type="submit">{sent ? copy.sent : copy.send}{sent ? <CheckCircle2 size={17} /> : <Send size={17} />}</button></form>
    </section>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem("portfolio-language") as Language | null) ?? "tr");
  const copy = translations[language];
  useEffect(() => { document.documentElement.lang = language; localStorage.setItem("portfolio-language", language); }, [language]);
  return <><Header language={language} setLanguage={setLanguage} copy={copy} /><main><Hero copy={copy} /><About copy={copy} /><Skills copy={copy} /><Projects copy={copy} /><Experience copy={copy} /><Contact copy={copy} /></main><footer><div className="container"><a className="logo" href="#top">{profile.shortName}<span>.</span></a><p>© {new Date().getFullYear()} {profile.name}. {copy.footer}</p><a href="#top">{copy.backTop}</a></div></footer></>;
}
