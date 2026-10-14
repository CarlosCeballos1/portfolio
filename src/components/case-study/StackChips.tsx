export function StackChips({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <li
          key={item}
          className="rounded-sm border border-white/10 bg-panel-2 px-2.5 py-1 font-mono text-[12px] text-ink-secondary"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
