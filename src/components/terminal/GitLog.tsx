"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/lib/types";

export function GitLog({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <div className="flex flex-col">
      {entries.map((entry, index) => (
        <LogEntry key={entry.hash} entry={entry} defaultOpen={index === 0} isLast={index === entries.length - 1} />
      ))}
    </div>
  );
}

function LogEntry({ entry, defaultOpen, isLast }: { entry: ExperienceEntry; defaultOpen: boolean; isLast: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="relative flex gap-4 pb-8"
    >
      <div className="flex w-6 flex-col items-center">
        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-accent bg-bg" />
        {!isLast && <span className="mt-1 w-px flex-1 bg-white/10" />}
      </div>

      <div className="min-w-0 flex-1 pb-1">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full flex-wrap items-baseline gap-x-3 gap-y-1 text-left"
        >
          <span className="font-mono text-accent">{entry.hash}</span>
          <span className="font-semibold text-ink">{entry.role}</span>
          <span className="text-ink-secondary">@ {entry.company}</span>
          <span className="ml-auto font-mono text-[12px] text-ink-muted">{entry.period}</span>
        </button>

        <div className="mt-1 flex flex-wrap gap-1.5">
          <span className="rounded-sm bg-panel-2 px-1.5 py-0.5 font-mono text-[10.5px] text-ink-muted">
            branch: {entry.branch}
          </span>
          {entry.tags.map((tag) => (
            <span key={tag} className="rounded-sm bg-panel-2 px-1.5 py-0.5 font-mono text-[10.5px] text-ink-muted">
              {tag}
            </span>
          ))}
        </div>

        {open && (
          <ul className="mt-3 flex flex-col gap-2 border-l border-white/10 pl-4">
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="text-[14px] leading-relaxed text-ink-secondary">
                <span className="mr-2 text-accent">+</span>
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-2 font-mono text-[12px] text-ink-muted underline decoration-dotted underline-offset-4 hover:text-accent"
          >
            git show --stat ({entry.bullets.length} cambios)
          </button>
        )}
      </div>
    </motion.div>
  );
}
