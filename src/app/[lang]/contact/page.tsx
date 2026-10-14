import type { Metadata } from "next";
import { localizedHref, toLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { SITE } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const t = getDictionary(toLocale((await params).lang));
  return {
    title: `${t.contact.metaTitle} — ${SITE.name}`,
    description: t.contact.metaDescription,
    alternates: { languages: { en: localizedHref("en", "/contact"), es: localizedHref("es", "/contact") } },
  };
}

const CHANNELS = [
  { cmd: `mail --to=${SITE.email}`, label: SITE.email, href: `mailto:${SITE.email}` },
  { cmd: `open whatsapp ${SITE.phoneDisplay}`, label: "WhatsApp", href: SITE.whatsapp },
  { cmd: "open github.com/CarlosCeballos1", label: "GitHub", href: SITE.github },
  { cmd: "open linkedin.com/in/carlosceballosamor", label: "LinkedIn", href: SITE.linkedin },
];

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const t = getDictionary(toLocale((await params).lang));

  return (
    <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="mb-2 font-mono text-[13px] text-accent">{`// ${t.nav.contact.fileName}`}</p>
      <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{t.contact.title}</h1>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
        {t.contact.intro(SITE.location)}
      </p>

      <div className="mt-8 overflow-hidden rounded-md border border-white/8 bg-panel">
        <div className="flex items-center gap-2 border-b border-white/8 bg-panel-2 px-4 py-2.5 font-mono text-[12px] text-ink-muted">
          <span className="h-2 w-2 rounded-full bg-status-good" />
          {t.nav.contact.fileName}
        </div>
        <div className="flex flex-col divide-y divide-white/8">
          {CHANNELS.map((channel) => (
            <a
              key={channel.href}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 px-4 py-3.5 font-mono text-[13px] transition-colors hover:bg-panel-2"
            >
              <span className="text-ink-secondary">
                <span className="text-accent">$ </span>
                {channel.cmd}
              </span>
              <span className="shrink-0 text-ink-muted transition-colors group-hover:text-accent">
                {channel.label} ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <a
        href={SITE.cvHref}
        download
        className="mt-6 inline-flex items-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-5 py-2.5 font-mono text-[13.5px] text-accent transition-colors hover:bg-accent/20"
      >
        {t.contact.downloadCv}
      </a>
    </div>
  );
}
