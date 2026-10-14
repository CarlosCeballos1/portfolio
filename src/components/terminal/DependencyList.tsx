"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/lib/types";

export function DependencyList({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="overflow-hidden rounded-md border border-white/8 bg-panel">
      <div className="flex items-center gap-2 border-b border-white/8 bg-panel-2 px-4 py-2.5 font-mono text-[12px] text-ink-muted">
        <span className="h-2 w-2 rounded-full bg-status-warning/70" />
        skills.json
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-ink-muted">{"{"}</span>
          {"\n"}
          {categories.map((category, ci) => (
            <motion.span
              key={category.key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: ci * 0.08 }}
              className="block"
            >
              {"  "}
              <span className="text-accent">&quot;{category.label}&quot;</span>
              <span className="text-ink-muted">: {"{"}</span>
              {"\n"}
              {category.items.map((item, ii) => (
                <span key={item} className="block">
                  {"    "}
                  <span className="text-ink">&quot;{item}&quot;</span>
                  <span className="text-ink-muted">: &quot;{category.version}&quot;{ii < category.items.length - 1 ? "," : ""}</span>
                </span>
              ))}
              <span className="text-ink-muted">
                {"  }"}
                {ci < categories.length - 1 ? "," : ""}
              </span>
            </motion.span>
          ))}
          <span className="text-ink-muted">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}
