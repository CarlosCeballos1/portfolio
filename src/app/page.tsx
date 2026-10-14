import Link from "next/link";
import { HeroTerminal } from "@/components/terminal/HeroTerminal";
import { ProjectCard } from "@/components/case-study/ProjectCard";
import { PROJECTS } from "@/content/projects";
import { SITE } from "@/lib/site";

const HIGHLIGHTS = [
  { label: "Años de experiencia", value: `${SITE.yearsExperience}+` },
  { label: "Agencias en Booking Connect", value: "+1.000" },
  { label: "Ingresos generados", value: "+$2M USD" },
  { label: "Hoteles con caja menor", value: "13" },
];

export default function HomePage() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-5 py-14 sm:px-8 sm:py-20">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="mb-3 font-mono text-[13px] text-accent">{"// portfolio.tsx"}</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Construyo software que escala,{" "}
            <span className="text-glow text-accent">de la base de datos a la interfaz.</span>
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-secondary">
            Soy {SITE.fullName.split(" ")[0]}, desarrollador full stack en Cartagena, Colombia.
            Diseño APIs, bases de datos y frontends para productos B2B reales — desde una plataforma
            de reservas hoteleras con más de 1.000 agencias hasta agentes de IA que automatizan
            procesos de negocio.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/proyectos"
              className="rounded-md bg-accent px-5 py-2.5 font-mono text-[13.5px] font-medium text-bg transition-colors hover:bg-accent-strong"
            >
              Ver proyectos →
            </Link>
            <a
              href={SITE.cvHref}
              download
              className="rounded-md border border-white/15 px-5 py-2.5 font-mono text-[13.5px] text-ink-secondary transition-colors hover:border-accent/40 hover:text-accent"
            >
              ↓ Descargar CV
            </a>
          </div>
        </div>
        <HeroTerminal />
      </section>

      <section>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-white/8 bg-white/8 sm:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5 bg-panel px-4 py-4">
              <dt className="text-[11.5px] leading-snug text-ink-muted">{item.label}</dt>
              <dd className="font-mono text-2xl font-semibold text-accent">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <div className="mb-5 flex items-baseline justify-between">
          <h2 className="font-mono text-[13px] text-ink-muted">{"// proyectos destacados"}</h2>
          <Link href="/proyectos" className="font-mono text-[12.5px] text-accent hover:underline">
            ver todos →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
