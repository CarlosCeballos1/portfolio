"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypingText } from "./TypingText";
import { SITE } from "@/lib/site";
import { useLocale } from "@/i18n/LocaleProvider";

export function HeroTerminal() {
  const { t } = useLocale();
  const lines = [
    { cmd: "whoami", output: SITE.fullName },
    { cmd: "cat role.txt", output: t.meta.roleLong },
    { cmd: "cat status.txt", output: t.terminal.status(SITE.yearsExperience) },
  ];
  const [revealed, setRevealed] = useState(0);
  const [outputShown, setOutputShown] = useState(false);

  useEffect(() => {
    if (!outputShown) return;
    const timeout = setTimeout(() => {
      setRevealed((r) => r + 1);
      setOutputShown(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [outputShown]);

  const done = revealed >= lines.length;

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-panel shadow-xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-white/8 bg-panel-2 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#fa5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fdbc40]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#33c749]" />
        <span className="ml-3 font-mono text-[12px] text-ink-muted">carlos@portfolio: ~</span>
      </div>
      <div className="min-h-[168px] px-5 py-5 font-mono text-[13.5px] leading-relaxed sm:text-[14.5px]">
        {lines.map((line, i) => {
          if (i > revealed) return null;
          const isCurrent = i === revealed && !done;
          return (
            <div key={line.cmd} className="mb-2">
              <p>
                <span className="text-accent">➜ ~ </span>
                {isCurrent ? <TypingText text={line.cmd} onDone={() => setOutputShown(true)} /> : line.cmd}
              </p>
              {(i < revealed || (isCurrent && outputShown)) && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pl-4 text-ink-secondary"
                >
                  {line.output}
                </motion.p>
              )}
            </div>
          );
        })}
        {done && <span className="blink-caret text-accent">▍</span>}
      </div>
    </div>
  );
}
