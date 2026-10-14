"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Architecture } from "@/lib/types";

const COL_WIDTH = 208;
const ROW_HEIGHT = 84;
const PADDING = 28;
const NODE_W = 172;
const NODE_H = 58;

function center(col: number, row: number) {
  return {
    x: PADDING + col * COL_WIDTH + NODE_W / 2,
    y: PADDING + row * ROW_HEIGHT + NODE_H / 2,
  };
}

export function ArchitectureDiagram({ architecture }: { architecture: Architecture }) {
  const reduceMotion = useReducedMotion();
  const maxCol = Math.max(...architecture.nodes.map((n) => n.col));
  const maxRow = Math.max(...architecture.nodes.map((n) => n.row));
  const width = PADDING * 2 + (maxCol + 1) * COL_WIDTH;
  const height = PADDING * 2 + (maxRow + 1) * ROW_HEIGHT;

  const nodeById = Object.fromEntries(architecture.nodes.map((n) => [n.id, n]));

  return (
    <div className="rounded-md border border-white/8 bg-panel/60 p-3">
      <div className="overflow-x-auto">
        <div className="relative" style={{ width, height, minWidth: width }}>
          <svg width={width} height={height} className="absolute inset-0" aria-hidden="true">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--color-ink-muted)" />
              </marker>
            </defs>
            {architecture.edges.map((edge, i) => {
              const from = nodeById[edge.from];
              const to = nodeById[edge.to];
              if (!from || !to) return null;
              const p1 = center(from.col, from.row);
              const p2 = center(to.col, to.row);
              const dx = Math.max(60, Math.abs(p2.x - p1.x) * 0.5);
              const path = `M ${p1.x + NODE_W / 2 - 6} ${p1.y} C ${p1.x + NODE_W / 2 - 6 + dx} ${p1.y}, ${
                p2.x - NODE_W / 2 + 6 - dx
              } ${p2.y}, ${p2.x - NODE_W / 2 + 6} ${p2.y}`;
              const midX = (p1.x + p2.x) / 2;
              const midY = (p1.y + p2.y) / 2 - 8;
              const delay = 0.15 + Math.max(from.col, to.col) * 0.12;
              return (
                <g key={`${edge.from}-${edge.to}-${i}`}>
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="var(--color-ink-muted)"
                    strokeOpacity={0.55}
                    strokeWidth={1.5}
                    strokeDasharray={edge.dashed ? "4 4" : undefined}
                    markerEnd="url(#arrow)"
                    initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
                    whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay, ease: "easeInOut" }}
                  />
                  {edge.label && (
                    <text
                      x={midX}
                      y={midY}
                      textAnchor="middle"
                      className="font-mono"
                      style={{ fontSize: 10, fill: "var(--color-ink-muted)" }}
                    >
                      {edge.label}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {architecture.nodes.map((node) => {
            const c = center(node.col, node.row);
            const delay = node.col * 0.12;
            return (
              <motion.div
                key={node.id}
                className="absolute flex flex-col items-center justify-center rounded-md border border-white/12 bg-panel-2 px-3 text-center shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"
                style={{
                  left: c.x - NODE_W / 2,
                  top: c.y - NODE_H / 2,
                  width: NODE_W,
                  height: NODE_H,
                }}
                initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay }}
              >
                <span className="font-mono text-[12.5px] font-semibold text-ink">{node.label}</span>
                {node.sublabel && (
                  <span className="mt-0.5 font-mono text-[10.5px] text-ink-muted">{node.sublabel}</span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      {architecture.note && <p className="mt-3 text-[11px] text-ink-muted">{architecture.note}</p>}
    </div>
  );
}
