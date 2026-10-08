import { useState, type ImgHTMLAttributes } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & { fallbackLabel: string };

export function SafeImage({ src, alt, fallbackLabel, ...props }: Props) {
  const [failedSource, setFailedSource] = useState<string>();
  if (failedSource === src) {
    return <div className="image-fallback" role="img" aria-label={`${alt}. ${fallbackLabel}`}><span aria-hidden="true">MU.</span><small>{fallbackLabel}</small></div>;
  }
  return <img {...props} src={src} alt={alt} onError={() => setFailedSource(src)} />;
}
