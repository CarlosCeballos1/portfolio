import type { Metadata } from "next";
import { ProjectCard } from "@/components/case-study/ProjectCard";
import { PROJECTS } from "@/content/projects";

export const metadata: Metadata = {
  title: "Proyectos — Carlos Ceballos",
  description: "Case studies técnicos de Carlos Ceballos: Booking Connect, gestión de caja menor, CATOCA y Caminante.",
};

export default function ProyectosPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="mb-2 font-mono text-[13px] text-accent">{"// proyectos/"}</p>
      <h1 className="text-3xl font-semibold text-ink sm:text-4xl">Proyectos</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
        Trabajo profesional en repos privados de empleadores (documentado a fondo, sin exponer código
        propietario), un proyecto en curso para un cliente real, y un proyecto propio. Cada archivo
        lleva la extensión del stack que usé para construirlo.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
