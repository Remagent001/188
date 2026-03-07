"use client";

import { useEffect, useState } from "react";

interface MapLinkProps {
  mapsUrl: string;
  appleMapsUrl: string;
  className?: string;
  children: React.ReactNode;
}

export function MapLink({ mapsUrl, appleMapsUrl, className, children }: MapLinkProps) {
  const [href, setHref] = useState(mapsUrl);

  useEffect(() => {
    if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
      setHref(appleMapsUrl);
    }
  }, [appleMapsUrl]);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
