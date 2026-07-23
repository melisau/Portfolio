import { socials } from "../../data/portfolio";

export function SocialLinks({ boxed = false }: { boxed?: boolean }) {
  return (
    <div className="social-links">
      {socials.map(({ icon: Icon, label, url }) => (
        <a className={boxed ? "social-link social-link--boxed" : "social-link"} href={url} key={label} target="_blank" rel="noreferrer" aria-label={label}>
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}

