import Link from "next/link";
import type { Project } from "@/lib/types";
import { StatusBadge } from "./StatusBadge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group flex flex-col gap-3 rounded-md border border-white/8 bg-panel p-5 transition-colors hover:border-accent/40 hover:bg-panel-2"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[12px] text-ink-muted">{project.fileName}</span>
        <StatusBadge status={project.status} label={project.statusLabel} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">{project.name}</h3>
        <p className="mt-1 text-[13.5px] leading-relaxed text-ink-secondary">{project.tagline}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.stack.slice(0, 4).map((item) => (
          <span key={item} className="rounded-sm bg-panel-2 px-2 py-0.5 font-mono text-[10.5px] text-ink-muted">
            {item}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="rounded-sm px-2 py-0.5 font-mono text-[10.5px] text-ink-muted">
            +{project.stack.length - 4}
          </span>
        )}
      </div>
    </Link>
  );
}
