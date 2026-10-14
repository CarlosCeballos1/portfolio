"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  onDone?: () => void;
  className?: string;
  cursor?: boolean;
}

export function TypingText({ text, speed = 28, startDelay = 0, onDone, className, cursor = false }: TypingTextProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      const id = setTimeout(() => {
        setCount(text.length);
        onDone?.();
      }, 0);
      return () => clearTimeout(id);
    }

    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          if (interval) clearInterval(interval);
          onDone?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {text.slice(0, count)}
      {cursor && <span className="blink-caret text-accent">▍</span>}
    </span>
  );
}
