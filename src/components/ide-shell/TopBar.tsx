"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_ITEMS } from "@/lib/site";
import { localizedHref, stripLocale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";
import { LanguageSwitch } from "./LanguageSwitch";

interface TopBarProps {
  onToggleSidebar: () => void;
  onOpenPalette: () => void;
}

export function TopBar({ onToggleSidebar, onOpenPalette }: TopBarProps) {
  const pathname = stripLocale(usePathname());
  const { locale, t } = useLocale();

  return (
    <header className="flex h-11 shrink-0 items-stretch border-b border-white/8 bg-panel">
      <button
        type="button"
        onClick={onToggleSidebar}
        aria-label={t.shell.toggleNav}
        className="flex w-11 shrink-0 items-center justify-center border-r border-white/8 text-ink-secondary transition-colors hover:bg-panel-2 hover:text-accent lg:hidden"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M1 3h14M1 8h14M1 13h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>

      <div className="hidden shrink-0 items-center gap-1.5 border-r border-white/8 px-4 sm:flex">
        <span className="h-2.5 w-2.5 rounded-full bg-[#fa5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fdbc40]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#33c749]" />
      </div>

      <nav className="flex min-w-0 flex-1 items-stretch overflow-x-auto">
        {NAV_ITEMS.map((item) => {
          const active = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              href={localizedHref(locale, item.path)}
              className={clsx(
                "group flex shrink-0 items-center gap-2 border-r border-white/8 px-4 font-mono text-[13px] transition-colors",
                active
                  ? "bg-bg text-ink"
                  : "text-ink-muted hover:bg-panel-2 hover:text-ink-secondary"
              )}
            >
              <span
                className={clsx(
                  "h-1.5 w-1.5 rounded-full transition-colors",
                  active ? "bg-accent" : "bg-transparent group-hover:bg-ink-muted"
                )}
              />
              {t.nav[item.key].fileName}
            </Link>
          );
        })}
      </nav>

      <LanguageSwitch className="shrink-0 border-l border-white/8 px-3" />

      <button
        type="button"
        onClick={onOpenPalette}
        className="hidden shrink-0 items-center gap-2 border-l border-white/8 px-4 font-mono text-xs text-ink-muted transition-colors hover:bg-panel-2 hover:text-accent sm:flex"
      >
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="5.2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span>Ctrl K</span>
      </button>
    </header>
  );
}
