"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./config";
import { getDictionary, type Dictionary } from "./dictionary";
import type { Project } from "@/lib/types";

interface LocaleContextValue {
  locale: Locale;
  t: Dictionary;
  projects: Project[];
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  projects,
  children,
}: {
  locale: Locale;
  projects: Project[];
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, t: getDictionary(locale), projects }}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside <LocaleProvider>");
  return value;
}
