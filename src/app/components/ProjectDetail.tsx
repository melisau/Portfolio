import { useRef } from 'react';
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Maximize2, X } from 'lucide-react';
import { projectDetails } from '../data/projectDetails.mjs';
import { detailLabels } from '../data/detailLabels';
import { translations, type Language } from '../data/i18n';
import { homePath, projectPath } from '../utils/routes.mjs';
import { SafeImage } from './atoms/SafeImage';

export type ProjectDetailData = (typeof projectDetails)[number];

export function ProjectDetail({ project, language }: { project: ProjectDetailData; language: Language }) {
  const content = project.copy[language];
  const labels = detailLabels[language];
  const copy = translations[language];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageButton = useRef<HTMLButtonElement>(null);
  const index = projectDetails.findIndex(item => item.slug === project.slug);
  const next = projectDetails[(index + 1) % projectDetails.length];
  const sections = [
    ['purpose', labels.purpose], ['role', labels.role], ['features', labels.features], ['architecture', labels.architecture],
    ...(content.decisions.length ? [['decisions', labels.decisions]] : []),
    ...(content.challenges.length ? [['challenges', labels.challenges]] : []),
    ...(project.image ? [['media', labels.media]] : []),
  ];
  return <div className="project-detail container">
    <a className="detail-back text-link" href={`${homePath(language)}#projects`}><ArrowLeft size={16} />{labels.back}</a>
    <header className="detail-hero">
      <h1>{project.title}</h1>
      <p>{content.tagline}</p>
      <div className="detail-actions">
        {project.liveUrl && <a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">{copy.live}<ExternalLink size={16} /></a>}
        {project.links.map(link => <a className="text-link" key={link.url} href={link.url} target="_blank" rel="noreferrer"><Github size={16} />{link.label === 'GitHub' ? copy.source : link.label}</a>)}
      </div>
    </header>
    {project.image && <figure className={`detail-cover${project.slug === 'luma' ? ' detail-cover--landing' : ''}`}><SafeImage src={project.image} alt={`${project.title} — ${copy.projectImage}`} fallbackLabel={copy.imageUnavailable} /><figcaption>{content.caption}</figcaption></figure>}
    <div className="detail-layout">
      <aside className="detail-aside">
        <nav aria-label={labels.overview}><ol>{sections.map(([id, label], number) => <li key={id}><a href={`#detail-${id}`}><span>{String(number + 1).padStart(2, '0')}</span>{label}</a></li>)}</ol></nav>
        <div className="detail-stack"><h2>{labels.stack}</h2><ul>{project.stack.map(item => <li key={item}>{item}</li>)}</ul></div>
        {project.sources.length > 0 && <div className="detail-sources"><h2>{labels.sources}</h2>{project.sources.map(source => <a href={source.url} key={source.url} target="_blank" rel="noreferrer">{source.label}<ArrowUpRight size={14} /></a>)}<small>{labels.reviewed}: {new Intl.DateTimeFormat(language, { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(`${project.reviewedAt}T00:00:00Z`))}</small></div>}
      </aside>
      <div className="detail-body">
        <section id="detail-purpose"><h2>{labels.purpose}</h2><h3>{labels.problem}</h3><p>{content.problem}</p><h3>{labels.goal}</h3><p>{content.goal}</p></section>
        <section id="detail-role"><h2>{labels.role}</h2><h3>{content.role}</h3><p>{content.scope}</p></section>
        <section id="detail-features"><h2>{labels.features}</h2><ul className="detail-list">{content.features.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section id="detail-architecture"><h2>{labels.architecture}</h2><p className="detail-architecture">{content.architecture}</p></section>
        {content.decisions.length > 0 && <section id="detail-decisions"><h2>{labels.decisions}</h2><ul className="detail-list">{content.decisions.map(item => <li key={item}>{item}</li>)}</ul></section>}
        {content.challenges.length > 0 && <section id="detail-challenges"><h2>{labels.challenges}</h2>{content.challenges.map(item => <p className="detail-challenge" key={item}>{item}</p>)}</section>}
        {project.image && <section id="detail-media"><h2>{labels.media}</h2><button ref={imageButton} type="button" className="detail-media-button" onClick={() => dialogRef.current?.showModal()} aria-label={`${labels.expand}: ${project.title}`}><SafeImage src={project.image} alt={`${project.title} — ${copy.projectImage}`} fallbackLabel={copy.imageUnavailable} loading="lazy" /><span><Maximize2 size={16} />{labels.expand}</span></button><p className="detail-caption">{content.caption}</p></section>}
        <a className="detail-next" href={projectPath(next.slug, language)}><small>{labels.next}</small><span>{next.title}<ArrowUpRight /></span></a>
      </div>
    </div>
    {project.image && <dialog className="image-dialog" ref={dialogRef} onClose={() => imageButton.current?.focus()} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} aria-label={`${project.title} — ${labels.media}`}><button className="icon-button" type="button" aria-label={labels.close} onClick={() => dialogRef.current?.close()}><X /></button><SafeImage src={project.image} alt={`${project.title} — ${copy.projectImage}`} fallbackLabel={copy.imageUnavailable} /><p>{content.caption}</p></dialog>}
  </div>;
}

export function ProjectNotFound({ language }: { language: Language }) {
  const labels = detailLabels[language];
  return <section className="project-detail container"><h1>{labels.notFound}</h1><p>{labels.notFoundText}</p><a className="button" href={`${homePath(language)}#projects`}><ArrowLeft size={16} />{labels.back}</a></section>;
}
