import type { Metadata } from "next";
import { GitLog } from "@/components/terminal/GitLog";
import { EXPERIENCE } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experiencia — Carlos Ceballos",
  description: "Historial profesional de Carlos Ceballos, en formato de git log.",
};

export default function ExperienciaPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="mb-2 font-mono text-[13px] text-accent">{"// experiencia.log"}</p>
      <h1 className="text-3xl font-semibold text-ink sm:text-4xl">Experiencia</h1>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-secondary">
        <code className="text-ink-muted">git log --oneline --graph</code> de mi historial profesional.
        Clic en cada entrada para expandir los detalles.
      </p>

      <div className="mt-10">
        <GitLog entries={EXPERIENCE} />
      </div>
    </div>
  );
}
