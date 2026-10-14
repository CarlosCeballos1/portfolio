import type { SkillCategory } from "@/lib/types";

export const SKILLS: SkillCategory[] = [
  {
    key: "frontend",
    label: "frontend",
    version: "^3.0.0",
    items: ["React", "Next.js", "Vue.js", "Astro", "Tailwind CSS", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    key: "backend",
    label: "backend",
    version: "^3.0.0",
    items: ["Python", "Django", "Django REST Framework", "NestJS", "Node.js", "APIs RESTful"],
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
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Modelado relacional", "ETL", "Indexación"],
  },
  {
    key: "ai-automation",
    label: "ai-automation",
    version: "^1.0.0",
    items: ["Agentes de IA", "Protocolo MCP", "OpenCLAW", "RPA", "Machine Learning (fundamentos)"],
  },
  {
    key: "tools",
    label: "tools",
    version: "^1.0.0",
    items: ["Git", "GitHub", "Docker", "AWS", "Metodologías ágiles", "Reportes PDF/Excel"],
  },
];
