import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
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
import { SafeImage } from './components/atoms/SafeImage';
import { ResumeLink } from './components/atoms/ResumeLink';
import { useMediaQuery } from './hooks/useMediaQuery';
import { useMetadata } from './hooks/useMetadata';
import { initialLanguage, isLanguage, savePreference } from './utils/preferences';
import { projectDetails } from './data/projectDetails.mjs';
import { detailLabels } from './data/detailLabels';
import { homePath, projectPath, parseRoute } from './utils/routes.mjs';
import { ProjectDetail, ProjectNotFound } from './components/ProjectDetail';

type Copy = (typeof translations)[Language];

function Header({ language, setLanguage, copy, detail = false }: { language: Language; setLanguage: (language: Language) => void; copy: Copy; detail?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const mobile = useMediaQuery('(max-width: 900px)');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobile) setOpen(false);
  }, [mobile]);

  useEffect(() => {
    if (!open || !mobile) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const outside = Array.from(document.querySelectorAll<HTMLElement>('main, footer, .skip-link'));
    const previousInert = outside.map(element => element.inert);
    outside.forEach(element => { element.inert = true; });
    const focusFrame = requestAnimationFrame(() => {
      const firstLink = headerRef.current?.querySelector<HTMLAnchorElement>('.nav-links a');
      // Flush the newly visible mobile menu before moving focus into it.
      if (firstLink && getComputedStyle(firstLink).visibility === 'visible') firstLink.focus({ preventScroll: true });
    });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); return; }
      if (event.key !== 'Tab') return;
      const focusable = Array.from(headerRef.current?.querySelectorAll<HTMLElement>('a[href], button, select') ?? [])
        .filter(element => element.getClientRects().length > 0 && getComputedStyle(element).visibility !== 'hidden');
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      cancelAnimationFrame(focusFrame);
      outside.forEach((element, index) => { element.inert = previousInert[index]; });
      document.removeEventListener('keydown', onKeyDown);
      menuRef.current?.focus();
    };
  }, [open, mobile]);

  function navigate(href: string) {
    setOpen(false);
    if (!href.startsWith('#')) return;
    requestAnimationFrame(() => {
      const target = document.querySelector<HTMLElement>(href);
      if (target) { target.tabIndex = -1; target.focus({ preventScroll: true }); }
    });
  }

  return (
    <header ref={headerRef} className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container nav">
        <a className="logo" href={detail ? homePath(language) : '#top'} aria-label={copy.homeLabel} onClick={() => navigate(detail ? homePath(language) : '#top')}>Melisa <span>Uyar</span></a>
        <nav id="main-navigation" className={`nav-links ${open ? "nav-links--open" : ""}`} aria-label={copy.navigationLabel} aria-hidden={mobile && !open ? true : undefined}>
          {navigation.map((item, index) => { const href = detail ? `${homePath(language)}${item.href}` : item.href; return <a href={href} key={item.href} onClick={() => navigate(href)}>{copy.nav[index]}</a>; })}
        </nav>
        <div className="nav-actions">
          <label className="language-picker"><span className="sr-only">{copy.languageLabel}</span><select value={language} onChange={(event) => { if (isLanguage(event.target.value)) setLanguage(event.target.value); }} aria-label={copy.languageLabel}>{languageOptions.map((option) => <option value={option.value} key={option.value}>{option.value.toUpperCase()}</option>)}</select></label>
          <button className="icon-button" onClick={toggleTheme} aria-label={`${theme === "dark" ? copy.themeLight : copy.themeDark}`}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="button button--small header-contact" href={detail ? `${homePath(language)}#contact` : '#contact'} onClick={() => navigate(detail ? `${homePath(language)}#contact` : '#contact')}>{copy.workTogether} <ArrowUpRight size={15} /></a>
          <button ref={menuRef} className="icon-button menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="main-navigation" aria-label={copy.menu}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ copy }: { copy: Copy }) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
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
    if (reducedMotion) return;
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
  }, [copy.heroEyebrows.length, deleting, phrase, visibleCharacters, reducedMotion]);

  return (
    <section className="hero container" id="top">
      <div className="hero__copy">
        <p className="hero__eyebrow">
          <span>{reducedMotion ? copy.heroEyebrows[0] : phrase.slice(0, visibleCharacters)}</span>{!reducedMotion && <i aria-hidden="true" />}
        </p>
        <h1 className="hero__name"><span>{firstName}</span> <strong>{surname}</strong></h1>
        <h2 className="hero__title">{copy.headline}</h2>
        <p className="hero__summary">{copy.summary}</p>
        <div className="hero__actions">
          <a className="button" href="#projects">{copy.projectsCta} <ArrowDown size={16} /></a>
          <ResumeLink label={copy.resume} requestLabel={copy.resumeRequest} unavailableLabel={copy.resumeMissing} />
        </div>
        <div className="hero__meta"><SocialLinks /><span /> <p>{copy.location}</p></div>
      </div>
      <div className="portrait-wrap">
        <div className="portrait-frame">
          <SafeImage src="/profile.webp" alt={copy.portraitAlt} fallbackLabel={copy.imageUnavailable} fetchPriority="high" />
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

function Projects({ copy, language }: { copy: Copy; language: Language }) {
  return (
    <section className="section container" id="projects">
      <SectionHeading index="03" eyebrow={copy.section.projects[0]} title={copy.section.projects[1]} description={copy.sectionDescriptions[1]} />
      <div className="project-list">
        {projects.map((project, index) => (
          <article className={`project-card ${project.imageFit === "contain" ? "project-card--contain" : ""}`} key={project.title} style={{ "--project-accent": project.accent } as CSSProperties}>
            <div className="project-card__image"><SafeImage src={project.image} alt={`${project.title} — ${copy.projectImage}`} fallbackLabel={copy.imageUnavailable} loading="lazy" /><span>0{index + 1}</span></div>
            <div className="project-card__content">
              <div className="project-card__meta"><span>{copy.projectCategories[index] ?? project.category}</span><span>{copy.projectYears[index] ?? project.year}</span></div>
              <h3><a className="project-detail-link" href={projectPath(project.slug, language)}>{project.title}</a></h3><p>{copy.projectSummaries[index] ?? project.summary}</p>
              <ul>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="project-card__links">
                <a href={projectPath(project.slug, language)}>{detailLabels[language].detail}<ArrowUpRight size={14} /></a>
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
    const subject = encodeURIComponent(`${copy.contactSubject}: ${String(form.get("name"))}`);
    const body = encodeURIComponent(`${copy.senderLabel}: ${String(form.get("name"))}\n${copy.email}: ${String(form.get("email"))}\n\n${String(form.get("message"))}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <section className="section contact container" id="contact">
      <div className="contact__copy"><p className="section-kicker"><span>05</span>{copy.section.contact[0]}</p><h2>{copy.section.contact[1]}</h2><p>{copy.contactText}</p><a href={`mailto:${profile.email}`}><Mail size={17} />{profile.email}</a><a href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone size={17} />{profile.phone}</a><span><MapPin size={17} />{copy.location}</span><SocialLinks boxed /></div>
      <form className="contact-form" onSubmit={submit}><div className="field-row"><label>{copy.name}<input name="name" required placeholder={copy.namePh} /></label><label>{copy.email}<input name="email" type="email" required placeholder="mail@example.com" /></label></div><label>{copy.message}<textarea name="message" required rows={6} placeholder={copy.messagePh} /></label><button className="button" type="submit">{sent ? copy.sent : copy.send}{sent ? <CheckCircle2 size={17} /> : <Send size={17} />}</button></form>
    </section>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const copy = translations[language];
  const route = parseRoute(window.location.pathname);
  const detailProject = projectDetails.find(project => project.slug === route.slug);
  const notFound = route.notFound || Boolean(route.slug && !detailProject);
  useMetadata(language, detailProject, notFound);
  function changeLanguage(next: Language) {
    setLanguage(next);
    const url = new URL(window.location.href);
    url.pathname = route.slug ? projectPath(route.slug, next) : homePath(next);
    window.history.pushState({}, '', url);
  }
  useEffect(() => {
    savePreference('portfolio-language', language);
    const url = new URL(window.location.href);
    if (notFound) return;
    const path = route.slug ? projectPath(route.slug, language) : homePath(language);
    if (url.pathname !== path) { url.pathname = path; window.history.replaceState({}, '', url); }
  }, [language, route.slug, notFound]);
  useEffect(() => {
    const onPopState = () => {
      const route = window.location.pathname.split('/')[1];
      setLanguage(isLanguage(route) ? route : 'tr');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);
  const detail = Boolean(detailProject || notFound);
  return <><a className="skip-link" href="#main-content">{copy.skipLink}</a><Header language={language} setLanguage={changeLanguage} copy={copy} detail={detail} /><main id="main-content" tabIndex={-1}>{notFound ? <ProjectNotFound language={language} /> : detailProject ? <ProjectDetail key={detailProject.slug} project={detailProject} language={language} /> : <><Hero copy={copy} /><About copy={copy} /><Skills copy={copy} /><Projects copy={copy} language={language} /><Experience copy={copy} /><Contact copy={copy} /></>}</main><footer><div className="container"><a className="logo" href={detail ? homePath(language) : '#top'} aria-label={copy.homeLabel}>Melisa <span>Uyar</span></a><p>© {new Date().getFullYear()} {profile.name}. {copy.footer}</p><a href={detail ? '#main-content' : '#top'}>{copy.backTop}</a></div></footer></>;
}
