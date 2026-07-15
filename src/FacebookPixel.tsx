"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function FacebookPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip the first mount — the inline script in layout.tsx already
    // sends the initial fbq('track', 'PageView').
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Only fire on subsequent client-side navigations
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}