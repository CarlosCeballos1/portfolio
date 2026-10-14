import type { Metadata } from "next";
import { DependencyList } from "@/components/terminal/DependencyList";
import { SKILLS } from "@/content/skills";

export const metadata: Metadata = {
  title: "Skills — Carlos Ceballos",
  description: "Stack técnico de Carlos Ceballos: frontend, backend, mobile, datos, IA y herramientas.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="mb-2 font-mono text-[13px] text-accent">{"// skills.json"}</p>
      <h1 className="text-3xl font-semibold text-ink sm:text-4xl">Skills</h1>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-secondary">
        El stack con el que construyo en producción, agrupado como si fuera un manifiesto de dependencias.
      </p>

      <div className="mt-10">
        <DependencyList categories={SKILLS} />
      </div>

      <div className="mt-8 rounded-md border border-white/8 bg-panel px-5 py-4">
        <h2 className="font-mono text-[12.5px] text-ink-muted">{"// educación"}</h2>
        <ul className="mt-2 flex flex-col gap-1.5 text-[13.5px] text-ink-secondary">
          <li>Ingeniería de Sistemas (en curso) — Universidad de Cartagena</li>
          <li>Gestión de Estrategia de Negocios en la Era Digital — Universidad Tecnológica de Bolívar, 2021</li>
          <li>Desarrollo Full Stack — edX, 2023</li>
          <li>Introducción al Machine Learning — Udemy, 2024</li>
        </ul>
      </div>
    </div>
  );
}
