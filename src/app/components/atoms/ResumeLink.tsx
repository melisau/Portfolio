import { useEffect, useState } from 'react';
import { Download, Mail } from 'lucide-react';
import { profile } from '../../data/portfolio';

export function ResumeLink({ label, requestLabel, unavailableLabel }: { label: string; requestLabel: string; unavailableLabel: string }) {
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    // Vite may return index.html with status 200 for a missing file: validate the PDF signature too.
    fetch(profile.resumeUrl, { signal: controller.signal })
      .then(async response => response.ok && (await response.text()).startsWith('%PDF-'))
      .then(valid => { if (!controller.signal.aborted) setAvailable(valid); })
      .catch(() => {});
    return () => controller.abort();
  }, []);
  return available
    ? <a className="text-link" href={profile.resumeUrl} download><Download size={17} />{label}</a>
    : <a className="text-link" href={`mailto:${profile.email}`} title={unavailableLabel}><Mail size={17} />{requestLabel}</a>;
}
