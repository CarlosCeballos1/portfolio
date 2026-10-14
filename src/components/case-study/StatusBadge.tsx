import clsx from "clsx";
import type { ProjectStatus } from "@/lib/types";

const STATUS_STYLES: Record<ProjectStatus, { dot: string; text: string; bg: string; border: string; icon: string }> = {
  production: {
    dot: "bg-status-good",
    text: "text-status-good-ink",
    bg: "bg-status-good/10",
    border: "border-status-good/30",
    icon: "●",
  },
  "in-development": {
    dot: "bg-status-warning",
    text: "text-status-warning",
    bg: "bg-status-warning/10",
    border: "border-status-warning/30",
    icon: "◐",
  },
  closed: {
    dot: "bg-status-neutral",
    text: "text-status-neutral",
    bg: "bg-status-neutral/10",
    border: "border-status-neutral/30",
    icon: "○",
  },
};

export function StatusBadge({ status, label }: { status: ProjectStatus; label: string }) {
  const styles = STATUS_STYLES[status];
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-wide",
        styles.bg,
        styles.border,
        styles.text
      )}
    >
      <span aria-hidden="true">{styles.icon}</span>
      {label}
    </span>
  );
}

export function StatusDot({ status, title, className }: { status: ProjectStatus; title: string; className?: string }) {
  const styles = STATUS_STYLES[status];
  return (
    <span
      title={title}
      aria-hidden="true"
      className={clsx("inline-block h-1.5 w-1.5 rounded-full", styles.dot, className)}
    />
  );
}
