"use client";

import { useEffect } from "react";

// Keeps <html lang> in sync with the active locale (screen readers, translation tools, SEO).
export function LangSync({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
