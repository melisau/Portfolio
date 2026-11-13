import { useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Maximize2, X } from 'lucide-react';
import { projectDetails } from '../data/projectDetails.mjs';
import { projectHighlights } from '../data/projectHighlights';
import { projects } from '../data/portfolio';
import { detailLabels } from '../data/detailLabels';
import { translations, type Language } from '../data/i18n';
import { homePath, projectPath } from '../utils/routes.mjs';
import { SafeImage } from './atoms/SafeImage';

export type ProjectDetailData = (typeof projectDetails)[number];

/* "A → B → C. Notlar…" biçimindeki mimari metnini akış adımlarına ve açıklamaya ayırır. */
function splitArchitecture(text: string) {
  const end = text.indexOf('. ');
  const lead = end === -1 ? text.replace(/\.$/, '') : text.slice(0, end);
  if (!lead.includes(' → ')) return { flow: [] as string[], notes: text };
  return { flow: lead.split(' → '), notes: end === -1 ? '' : text.slice(end + 2) };
}

/* "Başlık: çözüm" kalıbındaki zorlukları başlık ve açıklamaya ayırır. */
function splitChallenge(text: string, language: Language) {
  const colon = text.indexOf(': ');
  if (colon < 1 || colon > 90) return { title: '', body: text };
  const body = text.slice(colon + 2);
  return { title: text.slice(0, colon), body: body.charAt(0).toLocaleUpperCase(language) + body.slice(1) };
}

export function ProjectDetail({ project, language }: { project: ProjectDetailData; language: Language }) {
  const content = project.copy[language];
  const labels = detailLabels[language];
  const copy = translations[language];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageButton = useRef<HTMLButtonElement | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const gallery = project.gallery ?? (project.image ? [{
    image: project.image,
    captions: { tr: project.copy.tr.caption, en: project.copy.en.caption, de: project.copy.de.caption },
  }] : []);
  const activeImage = gallery[activeImageIndex] ?? gallery[0];
  const index = projectDetails.findIndex(item => item.slug === project.slug);
  const next = projectDetails[(index + 1) % projectDetails.length];
  const cardIndex = projects.findIndex(item => item.slug === project.slug);
  const card = projects[cardIndex];
  const category = copy.projectCategories[cardIndex] ?? card?.category;
  const period = copy.projectYears[cardIndex] ?? card?.year;
  const nextCardIndex = projects.findIndex(item => item.slug === next.slug);
  const nextCategory = copy.projectCategories[nextCardIndex] ?? projects[nextCardIndex]?.category;
  const highlights = projectHighlights[project.slug] ?? [];
  const architecture = splitArchitecture(content.architecture);
  const sections = [
    ['purpose', labels.purpose], ['role', labels.role], ['features', labels.features], ['architecture', labels.architecture],
    ...(content.decisions.length ? [['decisions', labels.decisions]] : []),
    ...(content.challenges.length ? [['challenges', labels.challenges]] : []),
    ...(project.image ? [['media', labels.media]] : []),
  ];
  const number = (id: string) => String(sections.findIndex(([key]) => key === id) + 1).padStart(2, '0');
  return <div className="project-detail container">
    <a className="detail-back text-link" href={`${homePath(language)}#projects`}><ArrowLeft size={16} />{labels.back}</a>
    <header className="detail-hero">
      {category && <p className="detail-kicker">{category}</p>}
      <h1>{project.title}</h1>
      <p>{content.tagline}</p>
      <div className="detail-actions">
        {project.liveUrl && <a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">{copy.live}<ExternalLink size={16} /></a>}
        {project.links.map(link => <a className="text-link" key={link.url} href={link.url} target="_blank" rel="noreferrer"><Github size={16} />{link.label === 'GitHub' ? copy.source : link.label}</a>)}
      </div>
    </header>
    <dl className="detail-facts">
      {category && <div><dt>{labels.category}</dt><dd>{category}</dd></div>}
      {period && <div><dt>{labels.period}</dt><dd>{period}</dd></div>}
      <div><dt>{labels.roleShort}</dt><dd>{content.role}</dd></div>
    </dl>
    {project.image && <figure className={`detail-cover${project.slug === 'luma' ? ' detail-cover--landing' : ''}`}><SafeImage src={project.image} alt={`${project.title} — ${copy.projectImage}`} fallbackLabel={copy.imageUnavailable} /><figcaption>{content.caption}</figcaption></figure>}
    {highlights.length > 0 && <section className="detail-highlights" aria-label={labels.highlights}>
      <h2>{labels.highlights}</h2>
      <dl>{highlights.map(item => <div key={item.label.en}><dd>{typeof item.value === 'string' ? item.value : item.value[language]}</dd><dt>{item.label[language]}</dt></div>)}</dl>
    </section>}
    <div className="detail-layout">
      <aside className="detail-aside">
        <nav aria-label={labels.overview}><ol>{sections.map(([id, label], position) => <li key={id}><a href={`#detail-${id}`}><span>{String(position + 1).padStart(2, '0')}</span>{label}</a></li>)}</ol></nav>
        <div className="detail-stack"><h2>{labels.stack}</h2><ul>{project.stack.map(item => <li key={item}>{item}</li>)}</ul></div>
        {project.sources.length > 0 && <div className="detail-sources"><h2>{labels.sources}</h2>{project.sources.map(source => <a href={source.url} key={source.url} target="_blank" rel="noreferrer">{source.label}<ArrowUpRight size={14} /></a>)}<small>{labels.reviewed}: {new Intl.DateTimeFormat(language, { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(`${project.reviewedAt}T00:00:00Z`))}</small></div>}
      </aside>
      <div className="detail-body">
        <section id="detail-purpose">
          <span className="detail-number" aria-hidden="true">{number('purpose')}</span><h2>{labels.purpose}</h2>
          <div className="detail-pair">
            <div className="detail-panel"><h3>{labels.problem}</h3><p>{content.problem}</p></div>
            <div className="detail-panel detail-panel--accent"><h3>{labels.goal}</h3><p>{content.goal}</p></div>
          </div>
        </section>
        <section id="detail-role">
          <span className="detail-number" aria-hidden="true">{number('role')}</span><h2>{labels.role}</h2>
          <h3 className="detail-role-title">{content.role}</h3><p>{content.scope}</p>
        </section>
        <section id="detail-features">
          <span className="detail-number" aria-hidden="true">{number('features')}</span><h2>{labels.features}</h2>
          <ul className="detail-feature-grid">{content.features.map(item => <li key={item}>{item}</li>)}</ul>
        </section>
        <section id="detail-architecture">
          <span className="detail-number" aria-hidden="true">{number('architecture')}</span><h2>{labels.architecture}</h2>
          {architecture.flow.length > 0 && <ol className="detail-flow" aria-label={labels.flow}>{architecture.flow.map(step => <li key={step}>{step}</li>)}</ol>}
          {architecture.notes && <p className="detail-architecture">{architecture.notes}</p>}
        </section>
        {content.decisions.length > 0 && <section id="detail-decisions">
          <span className="detail-number" aria-hidden="true">{number('decisions')}</span><h2>{labels.decisions}</h2>
          <ol className="detail-decisions">{content.decisions.map(item => <li key={item}>{item}</li>)}</ol>
        </section>}
        {content.challenges.length > 0 && <section id="detail-challenges">
          <span className="detail-number" aria-hidden="true">{number('challenges')}</span><h2>{labels.challenges}</h2>
          <div className="detail-challenges">{content.challenges.map(item => {
            const challenge = splitChallenge(item, language);
            return <article className="detail-challenge" key={item}>{challenge.title && <h3>{challenge.title}</h3>}<p>{challenge.body}</p></article>;
          })}</div>
        </section>}
        {gallery.length > 0 && <section id="detail-media">
          <span className="detail-number" aria-hidden="true">{number('media')}</span><h2>{labels.media}</h2>
          <div className="detail-gallery">
            {gallery.map((item, imageIndex) => <figure key={item.image}>
              <button type="button" className="detail-media-button" onClick={event => {
                imageButton.current = event.currentTarget;
                setActiveImageIndex(imageIndex);
                dialogRef.current?.showModal();
              }} aria-label={`${labels.expand}: ${project.title} — ${item.captions[language]}`}>
                <SafeImage src={item.image} alt={`${project.title} — ${item.captions[language]}`} fallbackLabel={copy.imageUnavailable} loading="lazy" />
                <span><Maximize2 size={16} />{labels.expand}</span>
              </button>
              <figcaption className="detail-caption">{item.captions[language]}</figcaption>
            </figure>)}
          </div>
        </section>}
        <div className="detail-talk"><div><h2>{labels.talk}</h2><p>{labels.talkText}</p></div><a className="button" href={`${homePath(language)}#contact`}>{copy.workTogether}<ArrowUpRight size={16} /></a></div>
        <a className="detail-next" href={projectPath(next.slug, language)}>
          <div><small>{labels.next}{nextCategory ? ` · ${nextCategory}` : ''}</small><span>{next.title}<ArrowUpRight /></span><p>{next.copy[language].tagline}</p></div>
          {next.image && <SafeImage src={next.image} alt="" fallbackLabel={copy.imageUnavailable} loading="lazy" />}
        </a>
      </div>
    </div>
    {activeImage && <dialog className="image-dialog" ref={dialogRef} onClose={() => imageButton.current?.focus()} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} aria-label={`${project.title} — ${labels.media}`}><button className="icon-button" type="button" aria-label={labels.close} onClick={() => dialogRef.current?.close()}><X /></button><SafeImage src={activeImage.image} alt={`${project.title} — ${activeImage.captions[language]}`} fallbackLabel={copy.imageUnavailable} /><p>{activeImage.captions[language]}</p></dialog>}
  </div>;
}

export function ProjectNotFound({ language }: { language: Language }) {
  const labels = detailLabels[language];
  return <section className="project-detail container"><h1>{labels.notFound}</h1><p>{labels.notFoundText}</p><a className="button" href={`${homePath(language)}#projects`}><ArrowLeft size={16} />{labels.back}</a></section>;
}
