import type { SkillCategory } from "@/lib/types";
import { localize, type Locale, type LocalizedSource } from "@/i18n/config";

const SKILLS: LocalizedSource<SkillCategory>[] = [
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
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "NestJS",
      "Fastify",
      "Node.js",
      "Zod",
      { en: "RESTful APIs", es: "APIs RESTful" },
      { en: "Payments (Wompi)", es: "Pagos (Wompi)" },
    ],
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
    items: [
      "PostgreSQL",
      "Row Level Security",
      "Drizzle ORM",
      "MongoDB",
      "MySQL",
      "Redis / Valkey",
      { en: "Relational modeling", es: "Modelado relacional" },
      "ETL",
      { en: "Indexing", es: "Indexación" },
    ],
  },
  {
    key: "ai-automation",
    label: "ai-automation",
    version: "^1.0.0",
    items: [
      { en: "AI agents", es: "Agentes de IA" },
      { en: "MCP protocol", es: "Protocolo MCP" },
      "OpenCLAW",
      { en: "Multi-provider LLMs", es: "LLMs multiproveedor" },
      "RPA",
      { en: "Machine Learning (fundamentals)", es: "Machine Learning (fundamentos)" },
    ],
  },
  {
    key: "tools",
    label: "tools",
    version: "^1.0.0",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Turborepo + pnpm",
      "Vitest",
      "Playwright",
      "Testcontainers",
      "OpenTelemetry",
      "Vercel",
      "AWS",
      { en: "Agile methodologies", es: "Metodologías ágiles" },
      { en: "PDF/Excel reports", es: "Reportes PDF/Excel" },
    ],
  },
];

export function getSkills(locale: Locale): SkillCategory[] {
  return localize<SkillCategory[]>(SKILLS, locale);
}
