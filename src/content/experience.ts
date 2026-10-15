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
    tags: ["Django", "NestJS", "React", "Flutter", "PostgreSQL", "MongoDB", { en: "AI/MCP", es: "IA/MCP" }],
    bullets: [
      {
        en: "Scaled and maintained the API of Booking Connect, the B2B booking platform (NestJS + MongoDB) used by more than 1,000 travel agencies and 1,400 active users.",
        es: "Escalé y mantuve la API de Booking Connect, la plataforma B2B de reservas (NestJS + MongoDB) usada por más de 1.000 agencias de viaje y 1.400 usuarios activos.",
      },
      {
        en: "Designed, modeled and optimized relational PostgreSQL databases (schemas, advanced queries, indexing) for the company's internal systems: expense management and hotel occupancy ETL.",
        es: "Diseñé, modelé y optimicé bases de datos relacionales en PostgreSQL (esquemas, consultas avanzadas, indexación) para los sistemas internos de la empresa: gestión de gastos y ETL de ocupación hotelera.",
      },
      {
        en: "Built robust RESTful APIs with Django REST Framework and NestJS, including a complete flight booking API.",
        es: "Desarrollé APIs RESTful robustas con Django REST Framework y NestJS, incluida una API completa de reservas de vuelos.",
      },
      {
        en: "Built daily ETL processes in Python and PostgreSQL for hotel occupancy data, with real-time statistical reports.",
        es: "Construí procesos ETL diarios en Python y PostgreSQL para datos de ocupación hotelera, con reportes estadísticos en tiempo real.",
      },
      {
        en: "Designed and implemented a multi-hotel expense management system (13 properties) with automatic PDF and Excel reports.",
        es: "Diseñé e implementé un sistema de gestión de gastos financieros multi-hotel (13 propiedades) con reportes automáticos en PDF y Excel.",
      },
      {
        en: "Automated invoicing with an RPA bot (email extraction, CRM registration, document upload), cutting operational time by 40%.",
        es: "Automaticé la facturación con un bot RPA (extracción de correos, registro en CRM, carga de soportes), reduciendo los tiempos operativos en un 40 %.",
      },
      {
        en: "Developed responsive interfaces with React, Astro and Tailwind CSS for Booking Connect and the internal systems.",
        es: "Desarrollé interfaces responsivas con React, Astro y Tailwind CSS para Booking Connect y los sistemas internos.",
      },
      {
        en: "Designed a cross-platform Flutter app for agencies on the go, and an Android TV app with virtual intercom, room service and IPTV.",
        es: "Diseñé una app multiplataforma en Flutter para agencias en movilidad, y una app para Android TV con citofonía virtual, room service e IPTV.",
      },
      {
        en: "Designed and deployed AI agents (MCP protocol and OpenCLAW) to automate accounting, sales, customer service and HR processes.",
        es: "Diseñé y desplegué agentes de IA (protocolo MCP y OpenCLAW) para automatizar procesos contables, comerciales, de atención al cliente y de RR. HH.",
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
