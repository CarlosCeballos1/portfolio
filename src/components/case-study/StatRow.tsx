import type { ProjectMetric } from "@/lib/types";

export function StatRow({ metrics }: { metrics: ProjectMetric[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-white/8 bg-white/8 sm:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="flex flex-col gap-1.5 bg-panel px-4 py-4">
          <dt className="text-[12px] leading-snug text-ink-muted">{metric.label}</dt>
          <dd className="font-mono text-2xl font-semibold text-accent">{metric.value}</dd>
          {metric.hint && <p className="text-[11px] text-ink-muted">{metric.hint}</p>}
        </div>
      ))}
    </dl>
  );
}
