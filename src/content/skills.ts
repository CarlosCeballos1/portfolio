import type { SkillCategory } from "@/lib/types";

export const SKILLS: SkillCategory[] = [
  {
    key: "frontend",
    label: "frontend",
    version: "^3.0.0",
    items: ["React", "Next.js", "Vite", "TanStack Query/Router", "Vue.js", "Astro", "Tailwind CSS", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    key: "backend",
    label: "backend",
    version: "^3.0.0",
    items: ["Python", "Django", "Django REST Framework", "NestJS", "Fastify", "Node.js", "Zod", "APIs RESTful", "Pagos (Wompi)"],
  },
  {
    key: "mobile",
    label: "mobile",
    version: "^2.0.0",
    items: ["Flutter", "Dart", "iOS/Android", "Android TV"],
  },
  {
    key: "data",
    label: "data",
    version: "^3.0.0",
    items: ["PostgreSQL", "Row Level Security", "Drizzle ORM", "MongoDB", "MySQL", "Redis / Valkey", "Modelado relacional", "ETL", "Indexación"],
  },
  {
    key: "ai-automation",
    label: "ai-automation",
    version: "^1.0.0",
    items: ["Agentes de IA", "Protocolo MCP", "OpenCLAW", "LLMs multiproveedor", "RPA", "Machine Learning (fundamentos)"],
  },
  {
    key: "tools",
    label: "tools",
    version: "^1.0.0",
    items: ["Git", "GitHub", "Docker", "Turborepo + pnpm", "Vitest", "Playwright", "Testcontainers", "OpenTelemetry", "Vercel", "AWS", "Metodologías ágiles", "Reportes PDF/Excel"],
  },
];
