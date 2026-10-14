import Link from "next/link";
import { HeroTerminal } from "@/components/terminal/HeroTerminal";
import { ProjectCard } from "@/components/case-study/ProjectCard";
import { getProjects } from "@/content/projects";
import { localizedHref, toLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { SITE } from "@/lib/site";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const locale = toLocale((await params).lang);
  const t = getDictionary(locale);
  const featured = getProjects(locale).filter((p) => p.featured);

  const highlights = [
    { label: t.home.highlights.years, value: `${SITE.yearsExperience}+` },
    { label: t.home.highlights.agencies, value: locale === "en" ? "1,000+" : "+1.000" },
    { label: t.home.highlights.rpa, value: "-40%" },
    { label: t.home.highlights.hotels, value: "13" },
  ];

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-5 py-14 sm:px-8 sm:py-20">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="mb-3 font-mono text-[13px] text-accent">{"// portfolio.tsx"}</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {t.home.headline} <span className="text-glow text-accent">{t.home.headlineAccent}</span>
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-secondary">
            {t.home.intro(SITE.fullName.split(" ")[0])}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={localizedHref(locale, "/projects")}
              className="rounded-md bg-accent px-5 py-2.5 font-mono text-[13.5px] font-medium text-bg transition-colors hover:bg-accent-strong"
            >
              {t.home.viewProjects}
            </Link>
            <a
              href={SITE.cvHref}
              download
              className="rounded-md border border-white/15 px-5 py-2.5 font-mono text-[13.5px] text-ink-secondary transition-colors hover:border-accent/40 hover:text-accent"
            >
              {t.shell.downloadCv}
            </a>
          </div>
        </div>
        <HeroTerminal />
      </section>

      <section>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-white/8 bg-white/8 sm:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5 bg-panel px-4 py-4">
              <dt className="text-[11.5px] leading-snug text-ink-muted">{item.label}</dt>
              <dd className="font-mono text-2xl font-semibold text-accent">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <div className="mb-5 flex items-baseline justify-between">
          <h2 className="font-mono text-[13px] text-ink-muted">{t.home.featured}</h2>
          <Link href={localizedHref(locale, "/projects")} className="font-mono text-[12.5px] text-accent hover:underline">
            {t.home.viewAll}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </section>
    </div>
  );
}
