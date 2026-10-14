export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

/** English is the primary language and lives at the root; Spanish lives under /es. */
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** The layout already rejects unknown languages, so pages only need a typed value. */
export function toLocale(value: string): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/** Builds a public URL for a route path ("/projects") in the given locale. */
export function localizedHref(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Strips the locale prefix from a pathname, so "/es/projects" and "/en/projects" become "/projects". */
export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|es)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

/** Text written in both languages. */
export interface Localized {
  en: string;
  es: string;
}

/** A content type where any string may be written once or in both languages. */
export type LocalizedSource<T> = T extends string
  ? string | Localized
  : T extends readonly (infer U)[]
    ? LocalizedSource<U>[]
    : T extends object
      ? { [K in keyof T]: LocalizedSource<T[K]> }
      : T;

function isLocalized(value: unknown): value is Localized {
  return (
    typeof value === "object" &&
    value !== null &&
    Object.keys(value).length === 2 &&
    typeof (value as Localized).en === "string" &&
    typeof (value as Localized).es === "string"
  );
}

/** Resolves every `{ en, es }` pair inside a content tree to the given locale. */
export function localize<T>(source: LocalizedSource<T>, locale: Locale): T {
  const walk = (value: unknown): unknown => {
    if (isLocalized(value)) return value[locale];
    if (Array.isArray(value)) return value.map(walk);
    if (typeof value === "object" && value !== null) {
      return Object.fromEntries(Object.entries(value).map(([key, inner]) => [key, walk(inner)]));
    }
    return value;
  };
  return walk(source) as T;
}
