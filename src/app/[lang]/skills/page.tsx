import type { Metadata } from "next";
import { DependencyList } from "@/components/terminal/DependencyList";
import { getSkills } from "@/content/skills";
import { localizedHref, toLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { SITE } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const t = getDictionary(toLocale((await params).lang));
  return {
    title: `${t.skills.metaTitle} — ${SITE.name}`,
    description: t.skills.metaDescription,
    alternates: { languages: { en: localizedHref("en", "/skills"), es: localizedHref("es", "/skills") } },
  };
}

export default async function SkillsPage({ params }: { params: Promise<{ lang: string }> }) {
  const locale = toLocale((await params).lang);
  const t = getDictionary(locale);

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="mb-2 font-mono text-[13px] text-accent">{`// ${t.nav.skills.fileName}`}</p>
      <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{t.skills.title}</h1>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-secondary">{t.skills.intro}</p>

      <div className="mt-10">
        <DependencyList categories={getSkills(locale)} />
      </div>

      <div className="mt-8 rounded-md border border-white/8 bg-panel px-5 py-4">
        <h2 className="font-mono text-[12.5px] text-ink-muted">{t.skills.education}</h2>
        <ul className="mt-2 flex flex-col gap-1.5 text-[13.5px] text-ink-secondary">
          {t.skills.educationItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
