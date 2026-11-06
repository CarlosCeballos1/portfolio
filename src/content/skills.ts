import type { SkillCategory } from "@/lib/types";
import { localize, type Locale, type LocalizedSource } from "@/i18n/config";

const SKILLS: LocalizedSource<SkillCategory>[] = [
  {
    key: "ai-agents",
    label: "ai-agents",
    version: "^2.0.0",
    items: [
      { en: "AI agents that take actions", es: "Agentes de IA que ejecutan acciones" },
      { en: "MCP (Model Context Protocol)", es: "MCP (Model Context Protocol)" },
      "OpenAI API",
      { en: "Tool calling", es: "Tool calling" },
      { en: "Multi-provider LLMs (OpenAI, Anthropic, Gemini)", es: "LLMs multiproveedor (OpenAI, Anthropic, Gemini)" },
      { en: "Structured outputs (Zod)", es: "Salidas estructuradas (Zod)" },
      { en: "Prompt-injection evals", es: "Evals contra prompt injection" },
      "OpenCLAW",
      "RPA",
    ],
  },
  {
    key: "integrations",
    label: "integrations",
    version: "^2.0.0",
    items: [
      { en: "Booking providers (Amadeus, Autocore, My Tool, MaarLab)", es: "Proveedores de reservas (Amadeus, Autocore, My Tool, MaarLab)" },
      { en: "Payments (Cobre, Wompi)", es: "Pagos (Cobre, Wompi)" },
      { en: "Accounting & e-invoicing (Siigo, DIAN)", es: "Contabilidad y facturación electrónica (Siigo, DIAN)" },
      { en: "CRM (Bitrix24, Monday)", es: "CRM (Bitrix24, Monday)" },
      "Gmail API",
      { en: "IPTV APIs", es: "APIs de IPTV" },
      { en: "Signed webhooks (HMAC)", es: "Webhooks firmados (HMAC)" },
      { en: "Provider fallback", es: "Fallback entre proveedores" },
    ],
  },
  {
    key: "backend",
    label: "backend",
    version: "^3.0.0",
    items: [
      "NestJS",
      "Fastify",
      "Node.js",
      "TypeScript",
      "Python",
      "Django / DRF",
      "PostgreSQL (Row Level Security)",
      "MongoDB",
      "MySQL",
      "Redis / Valkey",
      "Drizzle ORM",
      { en: "RESTful APIs", es: "APIs RESTful" },
      "WebSockets",
      "ETL",
    ],
  },
  {
    key: "frontend-mobile",
    label: "frontend-mobile",
    version: "^3.0.0",
    items: [
      "React",
      "Next.js",
      "TanStack Query/Router",
      "Astro",
      "Vite",
      "Tailwind CSS",
      "Flutter",
      "Dart (iOS/Android)",
      "Android TV",
      "PWA (offline)",
    ],
  },
  {
    key: "testing",
    label: "testing",
    version: "^1.0.0",
    items: [
      "Vitest",
      { en: "Testcontainers (real PostgreSQL)", es: "Testcontainers (PostgreSQL real)" },
      { en: "Playwright E2E", es: "Playwright E2E" },
      { en: "Multi-tenant isolation tests", es: "Tests de aislamiento multi-tenant" },
      { en: "100% coverage gates", es: "Umbral de cobertura del 100 %" },
    ],
  },
  {
    key: "cloud",
    label: "cloud",
    version: "^1.0.0",
    items: ["AWS EC2", "AWS S3", "AWS Lambda", "Docker / Compose", "Nginx", "Vercel"],
  },
  {
    key: "tooling",
    label: "tooling",
    version: "^1.0.0",
    items: [
      "Git / GitHub",
      "Turborepo + pnpm",
      "OpenTelemetry",
      { en: "Agile", es: "Metodologías ágiles" },
    ],
  },
];

export function getSkills(locale: Locale): SkillCategory[] {
  return localize<SkillCategory[]>(SKILLS, locale);
}
