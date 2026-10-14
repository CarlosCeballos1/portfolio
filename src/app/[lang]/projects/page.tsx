import type { Metadata } from "next";
import { ProjectCard } from "@/components/case-study/ProjectCard";
import { getProjects } from "@/content/projects";
import { localizedHref, toLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { SITE } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const locale = toLocale((await params).lang);
  const t = getDictionary(locale);
  return {
    title: `${t.projects.metaTitle} — ${SITE.name}`,
    description: t.projects.metaDescription,
    alternates: { languages: { en: localizedHref("en", "/projects"), es: localizedHref("es", "/projects") } },
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const locale = toLocale((await params).lang);
  const t = getDictionary(locale);

  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="mb-2 font-mono text-[13px] text-accent">{`// ${t.nav.projects.fileName}`}</p>
      <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{t.projects.title}</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-secondary">{t.projects.intro}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {getProjects(locale).map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>
    </div>
  );
}
