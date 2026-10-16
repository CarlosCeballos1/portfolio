import type { ExperienceEntry } from "@/lib/types";
import { localize, type Locale, type LocalizedSource } from "@/i18n/config";

const EXPERIENCE: LocalizedSource<ExperienceEntry>[] = [
  {
    hash: "e4f7a20",
    company: { en: "Independent — CATOCA and Pargo", es: "Independiente — CATOCA y Pargo" },
    role: { en: "Full Stack Developer — Freelance and own product", es: "Desarrollador Full Stack — Freelance y producto propio" },
    period: { en: "Jul 2026 — present", es: "Jul 2026 — actualidad" },
    branch: "feature/freelance",
    tags: ["NestJS", "React", "PostgreSQL", "Wompi", "Vercel", { en: "AI", es: "IA" }],
    bullets: [
      {
        en: "Built and maintain CATOCA's online store (catoca.cafe), in production: Wompi checkout signed in Vercel serverless functions, emails through the Gmail API and images optimized from 33.8 MB to 1.4 MB.",
        es: "Desarrollé y mantengo la tienda en línea de CATOCA (catoca.cafe), en producción: checkout con Wompi firmado en funciones serverless de Vercel, correos con Gmail API e imágenes optimizadas de 33,8 MB a 1,4 MB.",
      },
      {
        en: "Building CATOCA's internal sales system: batch inventory with a FIFO stock ledger, commissions, pre-invoices with DIAN fields and an export for Siigo Nube, with 100% test coverage.",
        es: "Construyo el sistema interno de ventas de CATOCA: inventario por lotes con kardex FIFO, comisiones, prefacturas con campos DIAN y exporte para Siigo Nube, con 100 % de cobertura de pruebas.",
      },
      {
        en: "Designing and developing Pargo, my personal project built with AI-assisted development, a multi-tenant SaaS POS for restaurants: PostgreSQL with RLS, a POS that sells without internet using signed events, recipe-based inventory, electronic invoicing and multi-provider AI, with 751 automated tests.",
        es: "Diseño y desarrollo Pargo, mi proyecto personal construido con desarrollo asistido por IA, un SaaS POS multi-tenant para restaurantes: PostgreSQL con RLS, caja que vende sin internet con eventos firmados, inventario por receta, facturación electrónica e IA multiproveedor, con 751 tests automatizados.",
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
        en: "Booking Connect: scaled and maintained the API of the company's B2B hotel booking platform (NestJS + MongoDB), used by more than 1,000 travel agencies and 1,400 active users, and built its complete flight booking API.",
        es: "Booking Connect: escalé y mantuve la API de la plataforma B2B de reservas hoteleras de la empresa (NestJS + MongoDB), usada por más de 1.000 agencias de viaje y 1.400 usuarios activos, y construí su API completa de reservas de vuelos.",
      },
      {
        en: "Booking Connect mobile: rebuilt the entire Booking Connect frontend as a Flutter app (iOS/Android) for booking and managing reservations quickly from the phone, reusing the existing API.",
        es: "Booking Connect móvil: reconstruí todo el frontend de Booking Connect como una app en Flutter (iOS/Android) para reservar y gestionar reservas de forma ágil desde el teléfono, reutilizando la API existente.",
      },
      {
        en: "Petty cash: built the API (Django REST Framework + PostgreSQL) and frontend that centralized petty cash across the chain's 13 hotels, with tighter control, faster cash closings, automated reports and statistics, and a full history of cash flow and cash purchases per hotel.",
        es: "Caja menor: construí la API (Django REST Framework + PostgreSQL) y el frontend que centralizaron la caja menor de los 13 hoteles de la cadena, con más control, cierres de caja más ágiles, reportes y estadísticas automáticos y un histórico completo del flujo de caja y de las compras en efectivo de cada hotel.",
      },
      {
        en: "Lucía, Booking Connect's AI agent (OpenAI API + MCP): created, managed and cancelled bookings and analyzed booking data in real time for agencies and internal staff, handling more than 4,000 reservations under a strict permission model that kept sensitive data from unauthorized users.",
        es: "Lucía, el agente de IA de Booking Connect (API de OpenAI + MCP): creaba, gestionaba y cancelaba reservas y analizaba en tiempo real los datos de reservas para las agencias y para uso interno; gestionó más de 4.000 reservas con un modelo de permisos estricto que impedía que usuarios no autorizados vieran información sensible.",
      },
      {
        en: "Federico, accounting and petty cash assistant (OpenCLAW): analyzed purchase patterns across all purchase orders and generated accounting reports and summaries for the chain's accounting department.",
        es: "Federico, asistente contable y de caja menor (OpenCLAW): analizaba patrones de compra sobre todas las órdenes de compra y generaba reportes y resúmenes contables para el departamento contable de la cadena.",
      },
      {
        en: "Orchestrator agent (OpenCLAW), restricted to the CEO and me: assigned tasks to the other agents, collected their results and verified the quality of their work.",
        es: "Agente orquestador (OpenCLAW), al que solo teníamos acceso el CEO y yo: asignaba tareas a los otros agentes, recogía sus resultados y verificaba la calidad de su trabajo.",
      },
      {
        en: "Hotel IPTV app: replaced a different traditional TV provider at each hotel with a single IPTV solution, building a Flutter Android TV app on the provider's API with live channels, hotel information, room service, the restaurant menu and the chain's other hotels, plus a virtual intercom: guests scanned a QR code with their phone to call reception through a web tool.",
        es: "App de IPTV para los hoteles: reemplacé el proveedor de TV tradicional distinto de cada hotel por una sola solución IPTV, con una app en Flutter para Android TV sobre la API del proveedor: canales en vivo, información del hotel, room service, menú del restaurante y los demás hoteles de la cadena, además de una citofonía virtual: el huésped escaneaba un código QR con su teléfono y llamaba a recepción mediante una herramienta web.",
      },
      {
        en: "Automation: built an invoicing RPA bot (email extraction, Bitrix24 CRM registration, document upload) that cut operational time by 40%, and daily Python + PostgreSQL ETL processes for hotel occupancy reporting.",
        es: "Automatización: construí un bot RPA de facturación (extracción desde el correo, registro en el CRM Bitrix24 y carga de soportes) que redujo los tiempos operativos en un 40 %, y procesos ETL diarios en Python + PostgreSQL para los reportes de ocupación hotelera.",
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
