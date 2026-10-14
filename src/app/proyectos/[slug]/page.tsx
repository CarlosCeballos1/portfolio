import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/content/projects";
import { StatusBadge } from "@/components/case-study/StatusBadge";
import { StackChips } from "@/components/case-study/StackChips";
import { StatRow } from "@/components/case-study/StatRow";
import { Gallery } from "@/components/case-study/Gallery";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Carlos Ceballos`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <Link href="/proyectos" className="font-mono text-[12.5px] text-ink-muted hover:text-accent">
        ← proyectos/
      </Link>

      <header className="mt-4 border-b border-white/8 pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[13px] text-ink-muted">{project.fileName}</span>
          <StatusBadge status={project.status} label={project.statusLabel} />
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{project.name}</h1>
        <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-ink-secondary">{project.tagline}</p>

        <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[12.5px] text-ink-muted">
          {project.employer && (
            <div className="flex gap-2">
              <dt>empresa:</dt>
              <dd className="text-ink-secondary">{project.employer}</dd>
            </div>
          )}
          <div className="flex gap-2">
            <dt>periodo:</dt>
            <dd className="text-ink-secondary">{project.period}</dd>
          </div>
          {project.liveUrl && (
            <div className="flex gap-2">
              <dt>enlace:</dt>
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                {project.liveUrl}
              </a>
            </div>
          )}
        </dl>

        <div className="mt-5">
          <StackChips stack={project.stack} />
        </div>
      </header>

      <section className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <SectionLabel>{"// problema"}</SectionLabel>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-secondary">{project.problem}</p>
        </div>
        <div>
          <SectionLabel>{"// mi rol"}</SectionLabel>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-secondary">{project.myRole}</p>
        </div>
      </section>

      {project.architecture && (
        <section className="mt-10">
          <SectionLabel>{"// arquitectura"}</SectionLabel>
          <div className="mt-3">
            <ArchitectureDiagram architecture={project.architecture} />
          </div>
        </section>
      )}

      <section className="mt-10">
        <SectionLabel>{"// decisiones técnicas"}</SectionLabel>
        <div className="mt-3 flex flex-col gap-4">
          {project.decisions.map((decision) => (
            <div key={decision.title} className="rounded-md border border-white/8 bg-panel p-4">
              <h3 className="font-mono text-[13.5px] font-semibold text-accent">{decision.title}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-secondary">{decision.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionLabel>{"// impacto"}</SectionLabel>
        <div className="mt-3">
          <StatRow metrics={project.metrics} />
        </div>
      </section>

      {project.gallery && (
        <section className="mt-10">
          <SectionLabel>{"// capturas"}</SectionLabel>
          <div className="mt-3">
            <Gallery images={project.gallery} />
          </div>
        </section>
      )}

      <footer className="mt-12 rounded-md border border-dashed border-white/12 bg-panel/40 px-4 py-3">
        <p className="font-mono text-[11.5px] leading-relaxed text-ink-muted">{project.codeNote}</p>
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="font-mono text-[13px] text-accent">{children}</h2>;
}
