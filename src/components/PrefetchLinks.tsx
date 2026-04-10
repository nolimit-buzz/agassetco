"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface PrefetchLinksProps {
  hrefs: string[];
}

/**
 * Silently prefetches a list of internal page hrefs after the component mounts.
 * Renders nothing — purely a side-effect component.
 */
export default function PrefetchLinks({ hrefs }: PrefetchLinksProps) {
  const router = useRouter();

  useEffect(() => {
    hrefs.forEach((href) => {
      router.prefetch(href);
    });
  }, [hrefs, router]);

  return null;
}
