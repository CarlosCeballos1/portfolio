// Builds the CV variants as one-page PDFs with selectable text (ATS friendly).
// Usage: node cv/build.mjs   (needs chromium or google-chrome on PATH, or CHROME=/path/to/chrome)
//
// Every variant shares the same experience, dates and facts. Only the title, the summary,
// the order of the GEH Suites bullets and the highlighted skills change.

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "cv", "dist");

// ---------------------------------------------------------------- content (EN)

const en = {
  lang: "en",
  labels: {
    summary: "Summary",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education & languages",
  },
  contact: [
    "Cartagena, Colombia · Remote (UTC-5, overlaps US hours)",
    "carlosdceballos30@gmail.com",
    "+57 320 319 8734",
  ],
  links: ["carlosceballos.dev", "linkedin.com/in/carlosceballosamor", "github.com/CarlosCeballos1"],
  geh: {
    role: "Full Stack Web Developer",
    company: "GEH Suites",
    dates: "Feb 2025 – Jun 2026",
    about: "Hotel chain with 13 properties in Cartagena, Santa Marta and Bogotá, Colombia",
    bullets: {
      lucia:
        "Built <b>Lucía</b>, an AI booking agent (<b>OpenAI API + MCP</b>) that created, managed and cancelled reservations and analyzed booking data for agencies and internal staff under the platform's permission model; handled <b>4,000+ bookings</b>.",
      api: "Designed, scaled and maintained the <b>NestJS + MongoDB</b> API of Booking Connect, a B2B booking platform used by <b>1,000+ travel agencies</b> and 1,400+ active users.",
      providers:
        "Integrated <b>5 providers</b> (Autocore, My Tool, Amadeus, MaarLab, Cobre), including a dual-provider fallback so agencies never saw an outage of the main inventory provider.",
      mobile:
        "Built the complete flight booking module and rebuilt the frontend as a <b>Flutter</b> mobile app (iOS/Android) on top of the existing API.",
      petty:
        "Built the petty cash and purchase-request system for the accounting team of <b>13 hotels</b> (Django REST Framework + PostgreSQL) and an invoicing RPA bot (email → Bitrix24 CRM → documents) that cut the team's operational time by <b>40%</b>.",
      agents:
        "Built two more production agents (OpenCLAW): Federico, an accounting assistant that analyzed purchase patterns and generated reports, and an orchestrator that assigned tasks to the other agents and checked their work.",
      iptv: "Replaced a different TV provider at each hotel with one IPTV solution: a Flutter Android TV app with live channels, room service, the restaurant menu and a QR virtual intercom to call reception.",
    },
  },
  freelance: {
    role: "Full Stack Developer (Freelance)",
    company: "CATOCA",
    dates: "Jul 2026 – Present",
    about: "Client work for a Colombian coffee exporter · catoca.cafe",
    bullets: [
      "Built and maintain the online store, live at catoca.cafe (React, Vite, Vercel Functions): Wompi checkout signed on the server, verified payment webhooks and Gmail API emails.",
      "Building, in phases with the client, their internal sales system (NestJS, Drizzle, PostgreSQL, React): FIFO batch inventory, commissions, DIAN pre-invoices and a Siigo export; 100% test coverage.",
    ],
  },
  caritech: {
    role: "Full Stack Web Developer",
    company: "Caritech",
    dates: "Jan 2023 – Jan 2025",
    about: "Software development for the company's clients",
    bullets: [
      "Built client web applications end to end, from requirements and data model to deployment: REST APIs (Django REST Framework, Node.js), PostgreSQL/MySQL/MongoDB, React admin panels and Flutter apps."
    ],
  },
  pargo: {
    title: "Pargo — multi-tenant POS SaaS for restaurants",
    dates: "Jul 2026 – Present",
    about: "Own product · MVP in client demos · built with AI-assisted development",
    bullets: [
      "NestJS modular monolith on PostgreSQL with Row-Level Security tenant isolation; offline POS with signed sync, DIAN e-invoicing and recipe-based inventory ledger.",
      "Multi-provider AI (OpenAI, Anthropic, Gemini) with Zod-validated structured outputs and a prompt-injection eval suite; 11 ADRs and 751 automated tests (Testcontainers + Playwright).",
    ],
  },
  caminante:
    "<b>Caminante</b> — Flutter tourism app for Cartagena (2023), tech lead. Recognized as a high-impact project by SENA's Fondo Emprender.",
  education: [
    "Systems Engineering — Universidad de Cartagena (7 semesters completed) · Spanish: native · English: B2 (upper-intermediate)",
  ],
};

const skillsEn = {
  ai: ["AI & agents", "OpenAI API, MCP, tool calling, multi-provider LLMs (OpenAI, Anthropic, Gemini), structured outputs, prompt-injection evals, OpenCLAW, RPA"],
  integrations: ["Integrations", "Amadeus, Autocore, MaarLab (booking/flights) · Cobre, Wompi (payments) · Siigo, DIAN (accounting, e-invoicing) · Bitrix24, Monday (CRM) · webhooks"],
  backend: ["Backend", "TypeScript, NestJS, Fastify, Node.js, Python, Django REST Framework, PostgreSQL (RLS), MongoDB, MySQL, Redis/Valkey, Drizzle, REST, WebSockets"],
  frontend: ["Frontend & mobile", "React, Next.js, TanStack, Astro, Tailwind CSS, Flutter (iOS/Android, Android TV), PWA"],
  cloud: ["Cloud & DevOps", "AWS (EC2, S3, Lambda), Docker, Docker Compose, Nginx, Vercel"],
  testing: ["Testing & tooling", "Vitest, Testcontainers, Playwright, Git/GitHub, OpenTelemetry"],
};

// ---------------------------------------------------------------- content (ES)

const es = {
  lang: "es",
  labels: {
    summary: "Perfil",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    education: "Educación e idiomas",
  },
  contact: [
    "Cartagena, Colombia · Remoto (UTC-5, coincide con horario de EE. UU.)",
    "carlosdceballos30@gmail.com",
    "+57 320 319 8734",
  ],
  links: en.links,
  geh: {
    role: "Desarrollador Web Full Stack",
    company: "GEH Suites",
    dates: "Feb 2025 – Jun 2026",
    about: "Cadena hotelera con 13 propiedades en Cartagena, Santa Marta y Bogotá, Colombia",
    bullets: {
      lucia:
        "Construí a <b>Lucía</b>, un agente de reservas con IA (<b>API de OpenAI + MCP</b>) que creaba, gestionaba, cancelaba y analizaba reservas para agencias y equipo interno con el modelo de permisos de la plataforma; gestionó <b>más de 4.000 reservas</b>.",
      api: "Diseñé, escalé y mantuve la API <b>NestJS + MongoDB</b> de Booking Connect, una plataforma B2B de reservas usada por <b>más de 1.000 agencias</b> de viaje y 1.400 usuarios activos.",
      providers:
        "Integré <b>5 proveedores</b> (Autocore, My Tool, Amadeus, MaarLab, Cobre), incluido un fallback de doble proveedor para que las agencias nunca vieran una caída del proveedor principal de inventario.",
      mobile:
        "Construí el módulo completo de reservas de vuelos y reconstruí el frontend como una app móvil en <b>Flutter</b> (iOS/Android) sobre la API existente.",
      petty:
        "Construí el sistema de caja menor y requisiciones para el equipo contable de <b>13 hoteles</b> (Django REST Framework + PostgreSQL) y un bot RPA de facturación (correo → CRM Bitrix24 → soportes) que redujo en un <b>40 %</b> su tiempo operativo.",
      agents:
        "Construí otros dos agentes en producción (OpenCLAW): Federico, asistente contable que analizaba patrones de compra y generaba reportes, y un orquestador que asignaba tareas a los demás agentes y verificaba su trabajo.",
      iptv: "Reemplacé el proveedor de TV distinto de cada hotel por una sola solución IPTV: app Flutter para Android TV con canales en vivo, room service y citofonía virtual por QR.",
    },
  },
  freelance: {
    role: "Desarrollador Full Stack (Freelance)",
    company: "CATOCA",
    dates: "Jul 2026 – Actualidad",
    about: "Trabajo con cliente: exportadora colombiana de café · catoca.cafe",
    bullets: [
      "Desarrollé y mantengo la tienda en línea, en producción en catoca.cafe (React, Vite, Vercel Functions): checkout con Wompi firmado en el servidor, webhooks de pago verificados y correos con Gmail API.",
      "Construyo por fases con el cliente su sistema interno de ventas (NestJS, Drizzle, PostgreSQL, React): inventario FIFO por lotes, comisiones, prefacturas DIAN y exporte a Siigo; 100 % de cobertura de pruebas.",
    ],
  },
  caritech: {
    role: "Desarrollador Web Full Stack",
    company: "Caritech",
    dates: "Ene 2023 – Ene 2025",
    about: "Desarrollo de software para los clientes de la empresa",
    bullets: [
      "Desarrollé aplicaciones web de punta a punta para clientes, desde requerimientos y modelo de datos hasta el despliegue: APIs REST (Django REST Framework, Node.js), PostgreSQL/MySQL/MongoDB, paneles en React y apps Flutter."
    ],
  },
  pargo: {
    title: "Pargo — SaaS POS multi-tenant para restaurantes",
    dates: "Jul 2026 – Actualidad",
    about: "Producto propio · MVP en demos con clientes · desarrollo asistido por IA",
    bullets: [
      "Monolito modular NestJS sobre PostgreSQL con aislamiento por Row-Level Security; caja offline con sincronización firmada, facturación electrónica DIAN e inventario por receta como ledger.",
      "IA multiproveedor (OpenAI, Anthropic, Gemini) con salidas estructuradas validadas con Zod y suite de evaluación contra prompt injection; 11 ADRs y 751 tests automatizados (Testcontainers + Playwright).",
    ],
  },
  caminante:
    "<b>Caminante</b> — app Flutter de turismo para Cartagena (2023), líder técnico. Proyecto de alto impacto, Fondo Emprender (SENA).",
  education: [
    "Ingeniería de Sistemas — Universidad de Cartagena (7 semestres cursados) · Español: nativo · Inglés: B2 (intermedio-alto)",
  ],
};

const skillsEs = {
  ai: ["IA y agentes", "API de OpenAI, MCP, tool calling, LLMs multiproveedor (OpenAI, Anthropic, Gemini), salidas estructuradas, evals, OpenCLAW, RPA"],
  integrations: ["Integraciones", "Amadeus, Autocore, MaarLab (reservas/vuelos) · Cobre, Wompi (pagos) · Siigo, DIAN (contabilidad) · Bitrix24, Monday (CRM)"],
  backend: ["Backend", "TypeScript, NestJS, Fastify, Node.js, Python, Django REST, PostgreSQL (RLS), MongoDB, MySQL, Redis, Drizzle, WebSockets"],
  frontend: ["Frontend y mobile", "React, Next.js, TanStack, Astro, Tailwind CSS, Flutter (iOS/Android, Android TV), PWA"],
  cloud: ["Cloud y DevOps", "AWS (EC2, S3, Lambda), Docker, Docker Compose, Nginx, Vercel"],
  testing: ["Testing y herramientas", "Vitest, Testcontainers, Playwright, Git/GitHub, OpenTelemetry"],
};

// ---------------------------------------------------------------- variants

const VARIANTS = [
  {
    file: "CV_Carlos_Ceballos_Amor_EN.pdf", // default English CV on the site
    copyTo: ["public/cv/CV_Carlos_Ceballos_Amor_EN.pdf", "CV_Carlos_Ceballos_Amor_EN.pdf"],
    c: en,
    skills: skillsEn,
    title: "Full Stack Engineer · AI Agents & Integrations",
    summary:
      "Full stack engineer who builds AI agents and integrations that take real actions in B2B platforms. Built Lucía, an OpenAI + MCP booking agent that handled 4,000+ bookings under a real permission model, and integrated booking, payment, accounting and CRM providers into a platform used by 1,000+ travel agencies.",
    order: ["lucia", "providers", "api", "mobile", "petty", "agents", "iptv"],
    skillOrder: ["ai", "integrations", "backend", "frontend", "cloud", "testing"],
  },
  {
    file: "CV_Carlos_Ceballos_Amor.pdf", // default Spanish CV on the site
    copyTo: ["public/cv/CV_Carlos_Ceballos_Amor.pdf", "CV_Carlos_Ceballos_Amor.pdf"],
    c: es,
    skills: skillsEs,
    title: "Full Stack Engineer · Agentes de IA e integraciones",
    summary:
      "Ingeniero full stack que construye agentes de IA e integraciones que ejecutan acciones reales en plataformas B2B. Construí a Lucía, un agente OpenAI + MCP que gestionó más de 4.000 reservas con permisos reales, e integré proveedores de reservas, pagos, contabilidad y CRM en una plataforma usada por más de 1.000 agencias.",
    order: ["lucia", "providers", "api", "mobile", "petty", "agents", "iptv"],
    skillOrder: ["ai", "integrations", "backend", "frontend", "cloud", "testing"],
  },
  {
    file: "CV_Carlos_Ceballos_Amor_EN_FullStack.pdf",
    c: en,
    skills: skillsEn,
    title: "Full Stack Engineer",
    summary:
      "Full stack engineer who builds B2B platforms end to end: API, database, web and mobile. Scaled the NestJS API of a booking platform used by 1,000+ travel agencies, built its flight module and Flutter app, and shipped AI agents and integrations on top of it.",
    order: ["api", "mobile", "providers", "lucia", "petty", "agents", "iptv"],
    skillOrder: ["backend", "frontend", "cloud", "testing", "integrations", "ai"],
  },
  {
    file: "CV_Carlos_Ceballos_Amor_EN_CustomerFacing.pdf",
    c: en,
    skills: skillsEn,
    title: "Software Engineer · Customer-facing builds",
    summary:
      "Software engineer who works with operations teams and clients to turn their workflows into production software. Automated petty cash and invoicing for the accounting team of 13 hotels, built an AI booking agent used by travel agencies, and delivers client systems end to end as a freelancer.",
    order: ["petty", "lucia", "providers", "api", "mobile", "agents", "iptv"],
    skillOrder: ["integrations", "ai", "backend", "frontend", "cloud", "testing"],
  },
];

// ---------------------------------------------------------------- template

const esc = (s) => s.replace(/&(?![a-z]+;)/g, "&amp;");

function job({ role, company, dates, about }, bullets) {
  return `
  <div class="item">
    <div class="row"><span><b>${esc(role)}</b> — ${esc(company)}</span><span class="dates">${dates}</span></div>
    <div class="about">${esc(about)}</div>
    <ul>${bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
  </div>`;
}

function render(v) {
  const { c } = v;
  const geh = job(c.geh, v.order.map((k) => c.geh.bullets[k]));
  return `<!doctype html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8">
<title>Carlos Ceballos — ${esc(v.title)}</title>
<style>
  @page { size: Letter; margin: 0.38in 0.48in; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: "Inter", "Helvetica Neue", Arial, sans-serif; font-size: 9pt; line-height: 1.28; color: #1a1a1a; }
  header { text-align: center; margin-bottom: 6pt; }
  h1 { font-size: 17pt; letter-spacing: 0.04em; margin: 0; }
  .title { font-size: 10.5pt; font-weight: 600; color: #0b5c7a; margin-top: 1pt; }
  .contact { font-size: 8.6pt; color: #444; margin-top: 2pt; }
  h2 { font-size: 9.6pt; text-transform: uppercase; letter-spacing: 0.06em; color: #0b5c7a; border-bottom: 1px solid #c9d6dc; margin: 6pt 0 2.5pt; padding-bottom: 1pt; }
  p { margin: 0; }
  .item { margin-bottom: 4pt; }
  .row { display: flex; justify-content: space-between; gap: 8pt; }
  .dates { white-space: nowrap; color: #444; }
  .about { font-style: italic; color: #555; font-size: 8.6pt; }
  ul { margin: 1.5pt 0 0; padding-left: 12pt; }
  li { margin-bottom: 1.2pt; }
  .skills p { margin-bottom: 1.5pt; }
  .small { font-size: 8.6pt; color: #444; }
</style>
</head>
<body>
<header>
  <h1>CARLOS DANIEL CEBALLOS AMOR</h1>
  <div class="title">${esc(v.title)}</div>
  <div class="contact">${c.contact.map(esc).join(" | ")}</div>
  <div class="contact">${c.links.join(" | ")}</div>
</header>

<h2>${c.labels.summary}</h2>
<p>${esc(v.summary)}</p>

<h2>${c.labels.experience}</h2>
${job(c.freelance, c.freelance.bullets)}
${geh}
${job(c.caritech, c.caritech.bullets)}

<h2>${c.labels.projects}</h2>
${job({ role: c.pargo.title, company: "", dates: c.pargo.dates, about: c.pargo.about }, c.pargo.bullets).replace("</b> — </span>", "</b></span>")}
<p class="small">${esc(c.caminante)}</p>

<h2>${c.labels.skills}</h2>
<div class="skills">${v.skillOrder.map((k) => `<p><b>${esc(v.skills[k][0])}:</b> ${esc(v.skills[k][1])}</p>`).join("")}</div>

<h2>${c.labels.education}</h2>
${c.education.map((e) => `<p>${esc(e)}</p>`).join("")}
</body>
</html>`;
}

// ---------------------------------------------------------------- build

const chrome = process.env.CHROME ?? ["chromium", "google-chrome", "chromium-browser"].find((bin) => {
  try {
    execFileSync("which", [bin], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
});
if (!chrome) throw new Error("Chromium/Chrome not found. Set CHROME=/path/to/chrome.");

mkdirSync(DIST, { recursive: true });
for (const v of VARIANTS) {
  const html = join(DIST, v.file.replace(/\.pdf$/, ".html"));
  const pdf = join(DIST, v.file);
  writeFileSync(html, render(v));
  execFileSync(chrome, [
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdf}`,
    pathToFileURL(html).href,
  ], { stdio: "ignore" });
  for (const target of v.copyTo ?? []) copyFileSync(pdf, join(ROOT, target));
  console.log(`✓ ${v.file}`);
}
