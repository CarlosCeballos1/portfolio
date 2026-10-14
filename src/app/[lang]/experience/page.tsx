import type { Metadata } from "next";
import { GitLog } from "@/components/terminal/GitLog";
import { getExperience } from "@/content/experience";
import { localizedHref, toLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { SITE } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const t = getDictionary(toLocale((await params).lang));
  return {
    title: `${t.experience.metaTitle} — ${SITE.name}`,
    description: t.experience.metaDescription,
    alternates: { languages: { en: localizedHref("en", "/experience"), es: localizedHref("es", "/experience") } },
  };
}

export default async function ExperiencePage({ params }: { params: Promise<{ lang: string }> }) {
  const locale = toLocale((await params).lang);
  const t = getDictionary(locale);

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="mb-2 font-mono text-[13px] text-accent">{`// ${t.nav.experience.fileName}`}</p>
      <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{t.experience.title}</h1>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-secondary">
        <code className="text-ink-muted">git log --oneline --graph</code>
        {t.experience.introAfter}
      </p>

      <div className="mt-10">
        <GitLog entries={getExperience(locale)} />
      </div>
    </div>
  );
}
