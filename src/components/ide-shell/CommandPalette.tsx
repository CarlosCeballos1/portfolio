"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { localizedHref } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const { locale, t, projects } = useLocale();

  function go(href: string) {
    onOpenChange(false);
    router.push(href);
  }

  function goExternal(href: string) {
    onOpenChange(false);
    window.open(href, "_blank", "noreferrer");
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label={t.palette.label}
      overlayClassName="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
      className="fixed left-1/2 top-24 z-50 w-[92vw] max-w-lg -translate-x-1/2 overflow-hidden rounded-lg border border-white/12 bg-panel shadow-2xl shadow-black/60"
    >
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3 font-mono text-[13px] text-ink-muted">
        <span className="text-accent">$</span>
        <Command.Input
          autoFocus
          placeholder={t.palette.placeholder}
          className="w-full bg-transparent text-ink outline-none placeholder:text-ink-muted"
        />
      </div>
      <Command.List className="max-h-80 overflow-y-auto px-2 py-2 font-mono text-[13px]">
        <Command.Empty className="px-3 py-6 text-center text-ink-muted">{t.palette.empty}</Command.Empty>

        <Command.Group heading={t.palette.sections} className="px-2 py-1 text-[11px] text-ink-muted [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-1">
          {NAV_ITEMS.map((item) => (
            <Command.Item
              key={item.path}
              onSelect={() => go(localizedHref(locale, item.path))}
              className="cursor-pointer rounded-sm px-3 py-2 text-ink-secondary data-[selected=true]:bg-panel-2 data-[selected=true]:text-accent"
            >
              {t.nav[item.key].label} <span className="text-ink-muted">— {t.nav[item.key].fileName}</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading={t.palette.projects} className="px-2 py-1 text-[11px] text-ink-muted [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-1">
          {projects.map((project) => (
            <Command.Item
              key={project.slug}
              onSelect={() => go(localizedHref(locale, `/projects/${project.slug}`))}
              className="cursor-pointer rounded-sm px-3 py-2 text-ink-secondary data-[selected=true]:bg-panel-2 data-[selected=true]:text-accent"
            >
              {project.name} <span className="text-ink-muted">— {project.tagline}</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading={t.palette.links} className="px-2 py-1 text-[11px] text-ink-muted [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-1">
          <Command.Item
            onSelect={() => goExternal(SITE.github)}
            className="cursor-pointer rounded-sm px-3 py-2 text-ink-secondary data-[selected=true]:bg-panel-2 data-[selected=true]:text-accent"
          >
            GitHub <span className="text-ink-muted">— CarlosCeballos1</span>
          </Command.Item>
          <Command.Item
            onSelect={() => goExternal(SITE.linkedin)}
            className="cursor-pointer rounded-sm px-3 py-2 text-ink-secondary data-[selected=true]:bg-panel-2 data-[selected=true]:text-accent"
          >
            LinkedIn <span className="text-ink-muted">— carlosceballosamor</span>
          </Command.Item>
          <Command.Item
            onSelect={() => goExternal(`mailto:${SITE.email}`)}
            className="cursor-pointer rounded-sm px-3 py-2 text-ink-secondary data-[selected=true]:bg-panel-2 data-[selected=true]:text-accent"
          >
            {t.palette.sendEmail} <span className="text-ink-muted">— {SITE.email}</span>
          </Command.Item>
          <Command.Item
            onSelect={() => goExternal(SITE.cvHref[locale])}
            className="cursor-pointer rounded-sm px-3 py-2 text-ink-secondary data-[selected=true]:bg-panel-2 data-[selected=true]:text-accent"
          >
            {t.palette.downloadCv}
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
