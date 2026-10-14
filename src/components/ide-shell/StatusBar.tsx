"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "@/i18n/LocaleProvider";

export function StatusBar() {
  const pathname = usePathname();
  const { t } = useLocale();

  return (
    <footer className="flex h-7 shrink-0 items-center justify-between border-t border-white/8 bg-panel px-3 font-mono text-[11px] text-ink-muted">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-status-good" />
          {t.shell.available}
        </span>
        <span className="hidden sm:inline">main</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline">UTF-8</span>
        <span className="hidden sm:inline">TypeScript</span>
        <span>{pathname}</span>
      </div>
    </footer>
  );
}
