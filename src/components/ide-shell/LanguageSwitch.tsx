"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import { LOCALES, localizedHref, stripLocale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

export function LanguageSwitch({ className }: { className?: string }) {
  const { locale, t } = useLocale();
  const path = stripLocale(usePathname());

  return (
    <div role="group" aria-label={t.shell.language} className={clsx("flex items-center font-mono text-[11.5px]", className)}>
      {LOCALES.map((option, i) => (
        <span key={option} className="flex items-center">
          {i > 0 && <span className="px-1 text-ink-muted/60">|</span>}
          {option === locale ? (
            <span aria-current="true" className="text-accent">
              {option.toUpperCase()}
            </span>
          ) : (
            // A plain link: the other language uses another <html lang>, so it deserves a full load.
            <a
              href={localizedHref(option, path)}
              hrefLang={option}
              lang={option}
              title={t.shell.switchTo}
              className="text-ink-muted transition-colors hover:text-accent"
            >
              {option.toUpperCase()}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}
