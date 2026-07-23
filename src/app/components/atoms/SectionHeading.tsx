type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="section-kicker"><span>{index}</span>{eyebrow}</p>
      <div className="section-heading__row">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </header>
  );
}

