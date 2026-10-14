"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { localizedHref, stripLocale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";
import { StatusDot } from "@/components/case-study/StatusBadge";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = stripLocale(usePathname());
  const { locale, t, projects } = useLocale();

  const content = (
    <div className="flex h-full w-64 shrink-0 flex-col bg-panel font-mono text-[13px]">
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <p className="mb-2 px-2 text-[11px] tracking-wider text-ink-muted">{t.shell.explorer}</p>

        <div className="mb-1">
          {NAV_ITEMS.map((item) => {
            const active = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path) && item.path !== "/projects";
            return (
              <Link
                key={item.path}
                href={localizedHref(locale, item.path)}
                onClick={onClose}
                className={clsx(
                  "flex items-center gap-2 rounded-sm px-2 py-1.5 transition-colors",
                  active ? "bg-panel-2 text-accent" : "text-ink-secondary hover:bg-panel-2 hover:text-ink"
                )}
              >
                <FileIcon />
                {t.nav[item.key].fileName}
              </Link>
            );
          })}
        </div>

        <p className="mb-1 mt-4 flex items-center gap-1.5 px-2 text-ink-secondary">
          <ChevronDown /> {t.nav.projects.fileName}
        </p>
        <div className="ml-3 flex flex-col gap-0.5 border-l border-white/8 pl-2">
          {projects.map((project) => {
            const path = `/projects/${project.slug}`;
            const active = pathname === path;
            return (
              <Link
                key={project.slug}
                href={localizedHref(locale, path)}
                onClick={onClose}
                className={clsx(
                  "flex items-center gap-2 rounded-sm px-2 py-1.5 transition-colors",
                  active ? "bg-panel-2 text-accent" : "text-ink-secondary hover:bg-panel-2 hover:text-ink"
                )}
              >
                <FileIcon />
                <span className="truncate">{project.fileName}</span>
                <StatusDot status={project.status} title={t.shell.status[project.status]} className="ml-auto shrink-0" />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="shrink-0 border-t border-white/8 px-3 py-3">
        <p className="mb-2 px-2 text-[11px] tracking-wider text-ink-muted">{t.shell.connect}</p>
        <div className="flex flex-col gap-0.5">
          <SidebarLink href={SITE.github} label="GitHub" />
          <SidebarLink href={SITE.linkedin} label="LinkedIn" />
          <SidebarLink href={`mailto:${SITE.email}`} label="Email" />
        </div>
        <a
          href={SITE.cvHref}
          download
          className="mt-3 flex items-center justify-center gap-2 rounded-sm border border-accent/30 bg-accent/10 px-3 py-2 text-[12px] text-accent transition-colors hover:bg-accent/20"
        >
          {t.shell.downloadCv}
        </a>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden lg:block">{content}</div>

      {open && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
          <div className="relative z-10 h-full shadow-2xl">{content}</div>
        </div>
      )}
    </>
  );
}

function SidebarLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center gap-2 rounded-sm px-2 py-1.5 text-ink-secondary transition-colors hover:bg-panel-2 hover:text-accent"
    >
      <span className="text-ink-muted">↗</span>
      {label}
    </a>
  );
}

function FileIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 text-ink-muted" aria-hidden="true">
      <path
        d="M3 1.5h6l4 4V14a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 3 14V2a.5.5 0 0 1 .5-.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M9 1.5V5a.5.5 0 0 0 .5.5H13" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
