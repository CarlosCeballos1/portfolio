import type { ExperienceEntry } from "@/lib/types";
import { localize, type Locale, type LocalizedSource } from "@/i18n/config";

const EXPERIENCE: LocalizedSource<ExperienceEntry>[] = [
  {
    hash: "e4f7a20",
    company: { en: "Freelance — client work (CATOCA) and own product (Pargo)", es: "Freelance — trabajo con clientes (CATOCA) y producto propio (Pargo)" },
    role: { en: "Full Stack Developer — Freelance", es: "Desarrollador Full Stack — Freelance" },
    period: { en: "Jul 2026 — present", es: "Jul 2026 — actualidad" },
    branch: "feature/freelance",
    tags: ["NestJS", "React", "PostgreSQL", "Wompi", "Vercel", { en: "AI", es: "IA" }],
    bullets: [
      {
        en: "Client work for CATOCA, a coffee exporter: built and maintain their online store (catoca.cafe), in production: Wompi checkout signed in Vercel serverless functions, emails through the Gmail API and images optimized from 33.8 MB to 1.4 MB.",
        es: "Trabajo con CATOCA, una exportadora de café: desarrollé y mantengo su tienda en línea (catoca.cafe), en producción: checkout con Wompi firmado en funciones serverless de Vercel, correos con Gmail API e imágenes optimizadas de 33,8 MB a 1,4 MB.",
      },
      {
        en: "Building, in phases with the client, CATOCA's internal sales system: batch inventory with a FIFO stock ledger, commissions, pre-invoices with DIAN fields and an export for Siigo Nube, with 100% test coverage.",
        es: "Construyo por fases con el cliente el sistema interno de ventas de CATOCA: inventario por lotes con kardex FIFO, comisiones, prefacturas con campos DIAN y exporte para Siigo Nube, con 100 % de cobertura de pruebas.",
      },
      {
        en: "Own product, MVP stage: designing and developing Pargo, built with AI-assisted development, a multi-tenant SaaS POS for restaurants: PostgreSQL with RLS, a POS that sells without internet using signed events, recipe-based inventory, electronic invoicing and multi-provider AI, with 751 automated tests.",
        es: "Producto propio, en etapa de MVP: diseño y desarrollo Pargo, construido con desarrollo asistido por IA, un SaaS POS multi-tenant para restaurantes: PostgreSQL con RLS, caja que vende sin internet con eventos firmados, inventario por receta, facturación electrónica e IA multiproveedor, con 751 tests automatizados.",
      },
    ],
  },
  {
    hash: "a1b2c9f",
    company: "GEH Suites",
    role: { en: "Full Stack Web Developer", es: "Desarrollador Web Full Stack" },
    period: { en: "Feb 2025 — Jun 2026", es: "Feb 2025 — Jun 2026" },
    branch: "main",
    tags: ["NestJS", "Django REST Framework", "PostgreSQL", "MongoDB", "React", "Flutter", "OpenAI + MCP", "OpenCLAW"],
    bullets: [
      {
        en: "Built Lucía, an AI booking agent (OpenAI API + MCP) that created, managed and cancelled reservations and analyzed booking data for agencies and internal staff under the platform's permission model; it handled 4,000+ bookings.",
        es: "Construí a Lucía, un agente de reservas con IA (API de OpenAI + MCP) que creaba, gestionaba y cancelaba reservas y analizaba datos de reservas para las agencias y el equipo interno con el modelo de permisos de la plataforma; gestionó más de 4.000 reservas.",
      },
      {
        en: "Designed, scaled and maintained the NestJS + MongoDB API of Booking Connect, a B2B booking platform used by 1,000+ travel agencies and 1,400+ active users.",
        es: "Diseñé, escalé y mantuve la API NestJS + MongoDB de Booking Connect, una plataforma B2B de reservas usada por más de 1.000 agencias de viaje y 1.400 usuarios activos.",
      },
      {
        en: "Integrated 5 providers (Autocore, My Tool, Amadeus, MaarLab, Cobre), including a dual-provider fallback so agencies never saw an outage of the main inventory provider.",
        es: "Integré 5 proveedores (Autocore, My Tool, Amadeus, MaarLab, Cobre), incluido un fallback de doble proveedor para que las agencias nunca vieran una caída del proveedor principal de inventario.",
      },
      {
        en: "Built the complete flight booking module and rebuilt the frontend as a Flutter mobile app (iOS/Android) on top of the existing API.",
        es: "Construí el módulo completo de reservas de vuelos y reconstruí el frontend como una app móvil en Flutter (iOS/Android) sobre la API existente.",
      },
      {
        en: "Built the petty cash and purchase-request system for the accounting team of 13 hotels (Django REST Framework + PostgreSQL) and an invoicing RPA bot (email → Bitrix24 CRM → supporting documents) that cut the team's operational time by 40%.",
        es: "Construí el sistema de caja menor y requisiciones para el equipo contable de 13 hoteles (Django REST Framework + PostgreSQL) y un bot RPA de facturación (correo → CRM Bitrix24 → soportes) que redujo en un 40 % el tiempo operativo del equipo.",
      },
      {
        en: "Built Federico, an accounting assistant (OpenCLAW) that analyzed purchase patterns and generated accounting reports, and an orchestrator agent, restricted to the CEO and me, that assigned tasks to the other agents and checked their work.",
        es: "Construí a Federico, un asistente contable (OpenCLAW) que analizaba patrones de compra y generaba reportes contables, y un agente orquestador, al que solo teníamos acceso el CEO y yo, que asignaba tareas a los otros agentes y verificaba su trabajo.",
      },
      {
        en: "Replaced a different TV provider at each hotel with a single IPTV solution: a Flutter Android TV app on the provider's API with live channels, room service, the restaurant menu and a QR virtual intercom to call reception.",
        es: "Reemplacé el proveedor de TV distinto de cada hotel por una sola solución IPTV: una app Flutter para Android TV sobre la API del proveedor con canales en vivo, room service, menú del restaurante y una citofonía virtual por QR para llamar a recepción.",
      },
      {
        en: "Built daily Python + PostgreSQL ETL processes for hotel occupancy reporting.",
        es: "Construí procesos ETL diarios en Python + PostgreSQL para los reportes de ocupación hotelera.",
      },
    ],
  },
  {
    hash: "7fd41ea",
    company: "Caritech",
    role: { en: "Full Stack Web Developer", es: "Desarrollador Web Full Stack" },
    period: { en: "Jan 2023 — Jan 2025", es: "Ene 2023 — Ene 2025" },
    branch: "main",
    tags: ["Python", "Django REST Framework", "Node.js", "React", "PostgreSQL", "MySQL", "MongoDB", "Flutter"],
    bullets: [
      {
        en: "Built full stack web applications for the company's clients end to end, from requirements and data model to deployment and maintenance.",
        es: "Desarrollé aplicaciones web full stack de punta a punta para los clientes de la empresa, desde los requerimientos y el modelo de datos hasta el despliegue y el mantenimiento.",
      },
      {
        en: "Designed, modeled and optimized relational and NoSQL databases (PostgreSQL, MySQL, MongoDB) per client: schemas, queries and indexing.",
        es: "Diseñé, modelé y optimicé bases de datos relacionales y NoSQL (PostgreSQL, MySQL, MongoDB) para cada cliente: esquemas, consultas e indexación.",
      },
      {
        en: "Developed RESTful APIs with Python (Django REST Framework) and Node.js to integrate client systems with internal and third-party services.",
        es: "Desarrollé APIs RESTful con Python (Django REST Framework) y Node.js para integrar los sistemas de los clientes con servicios internos y de terceros.",
      },
      {
        en: "Built responsive interfaces with React, JavaScript, HTML and CSS for client web platforms and administrative panels.",
        es: "Construí interfaces responsivas con React, JavaScript, HTML y CSS para plataformas web y paneles administrativos de los clientes.",
      },
      {
        en: "Automated data processes and reporting with Python scripts (ETL, PDF and Excel reports) for client operations.",
        es: "Automaticé procesos de datos y reportes con scripts en Python (ETL, reportes en PDF y Excel) para la operación de los clientes.",
      },
      {
        en: "Developed cross-platform mobile apps with Flutter for clients that needed a mobile channel.",
        es: "Desarrollé apps móviles multiplataforma en Flutter para clientes que necesitaban un canal móvil.",
      },
    ],
  },
  {
    hash: "3c08d17",
    company: { en: "Caminante Project", es: "Proyecto Caminante" },
    role: { en: "Flutter Development Lead — Independent", es: "Líder de Desarrollo Flutter — Independiente" },
    period: { en: "Jan 2023 — Dec 2023", es: "Ene 2023 — Dic 2023" },
    branch: "feature/turismo-cartagena",
    tags: ["Flutter", "Dart", "UX"],
    bullets: [
      {
        en: "Led the development of a Flutter mobile app focused on tourism in Cartagena de Indias, coordinating the technical work end to end.",
        es: "Lideré el desarrollo de una app móvil en Flutter enfocada en turismo en Cartagena de Indias, coordinando el trabajo técnico de principio a fin.",
      },
      {
        en: "Designed a tourist-centered user experience, with features adapted to the local environment and context.",
        es: "Diseñé la experiencia de usuario centrada en el turista, con funcionalidades adaptadas al entorno y contexto local.",
      },
      {
        en: "SENA's Fondo Emprender recognized it as a high-impact project, and it took part in a public tender held by the city of Cartagena.",
        es: "El Fondo Emprender del SENA lo reconoció como proyecto de alto impacto, y participó en una licitación pública de la ciudad de Cartagena.",
      },
    ],
  },
];

export function getExperience(locale: Locale): ExperienceEntry[] {
  return localize<ExperienceEntry[]>(EXPERIENCE, locale);
}
