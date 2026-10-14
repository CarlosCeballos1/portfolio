import type { Project } from "@/lib/types";

export const PROJECTS: Project[] = [
  {
    slug: "booking-connect",
    fileName: "booking-connect.nest.ts",
    extensionLabel: "NestJS · MongoDB",
    name: "Booking Connect",
    tagline: "Plataforma B2B de reservas hoteleras para agencias de viaje",
    status: "production",
    statusLabel: "En producción",
    employer: "GEH Suites",
    period: "Feb 2025 — actualidad",
    featured: true,
    summary:
      "Plataforma B2B de consulta de disponibilidad, cotización y reserva hotelera usada por más de 1.000 agencias de viaje y 1.400 usuarios activos. Escalé, administré y mantuve el sistema, y desarrollé la API completa de reservas de vuelos y hoteles.",
    problem:
      "GEH Suites necesitaba un canal digital único para que agencias de viaje externas consultaran disponibilidad, cotizaran y reservaran habitaciones y vuelos en tiempo real, con reglas de crédito y comisión distintas por agencia, y sin depender de un solo proveedor de inventario.",
    myRole:
      "Diseñé, escalé y mantuve la API (NestJS + MongoDB), construí el módulo completo de reservas de vuelos, e integré los agentes de IA que automatizan tareas comerciales y de atención al cliente sobre la misma plataforma.",
    stack: [
      "NestJS",
      "TypeScript",
      "MongoDB / Mongoose",
      "Passport JWT",
      "Swagger / OpenAPI",
      "Pino (logging)",
      "Throttler (rate limiting)",
      "React",
      "Astro",
      "Tailwind CSS",
      "Flutter",
      "Protocolo MCP",
    ],
    decisions: [
      {
        title: "Fallback de doble proveedor en reservas",
        body: "El motor de reservas intenta primero My Tool para los hoteles mapeados y cae automáticamente a Autocore si el proveedor falla, evitando caídas visibles para las agencias en el proveedor principal de inventario.",
      },
      {
        title: "Multi-agencia con políticas y límites propios",
        body: "Cada agencia tiene roles, políticas de crédito y límites de usuario independientes. Las credenciales del proveedor de vuelos se resuelven en cascada: por agencia, por nombre exacto de hotel, o por clave heredada.",
      },
      {
        title: "Agentes de IA sobre el protocolo MCP",
        body: "Diseñé y desplegué agentes que exponen disponibilidad, reservas y cotizaciones a través de MCP, permitiendo automatizar procesos comerciales y de atención al cliente sin tocar la API pública.",
      },
    ],
    metrics: [
      { label: "Agencias de viaje activas", value: "+1.000" },
      { label: "Usuarios activos", value: "+1.400" },
      { label: "Ingresos generados", value: "+$2M USD" },
      { label: "Disponibilidad hotelera", value: "Fallback dual", hint: "Autocore ⇄ My Tool" },
    ],
    architecture: {
      note: "Vista simplificada del sistema real, reconstruida a partir de documentación técnica interna — sin exponer código propietario.",
      nodes: [
        { id: "fe", label: "Frontend B2B", sublabel: "React + Astro", col: 0, row: 0 },
        { id: "mobile", label: "App agencias", sublabel: "Flutter (iOS/Android)", col: 0, row: 2 },
        { id: "api", label: "API Gateway", sublabel: "NestJS · JWT · Swagger", col: 1, row: 1 },
        { id: "reservas", label: "Reservas", sublabel: "Autocore ⇄ My Tool", col: 2, row: 0 },
        { id: "vuelos", label: "Vuelos", sublabel: "Amadeus · MaarLab", col: 2, row: 1 },
        { id: "pagos", label: "Pagos", sublabel: "Cobre", col: 2, row: 2 },
        { id: "bot", label: "Bot RPA", sublabel: "reservas pendientes", col: 2, row: 3 },
        { id: "ia", label: "Agentes IA", sublabel: "protocolo MCP", col: 2, row: 4 },
        { id: "db", label: "MongoDB", sublabel: "multi-tenant", col: 3, row: 2 },
      ],
      edges: [
        { from: "fe", to: "api" },
        { from: "mobile", to: "api" },
        { from: "api", to: "reservas" },
        { from: "api", to: "vuelos" },
        { from: "api", to: "pagos" },
        { from: "api", to: "bot", label: "cron", dashed: true },
        { from: "api", to: "ia", label: "MCP", dashed: true },
        { from: "reservas", to: "db" },
        { from: "vuelos", to: "db" },
        { from: "pagos", to: "db" },
        { from: "bot", to: "db", dashed: true },
      ],
    },
    codeNote:
      "Código propietario de GEH Suites — ya no tengo acceso al repositorio tras dejar la empresa. Este case study se reconstruyó a partir de documentación técnica que sí conservo.",
  },
  {
    slug: "gestion-caja-menor",
    fileName: "caja-menor.django.py",
    extensionLabel: "Django REST · Astro",
    name: "Gestión de Caja Menor",
    tagline: "Sistema financiero multi-hotel: gastos, caja menor y requisiciones",
    status: "production",
    statusLabel: "En producción",
    employer: "GEH Suites",
    period: "Feb 2025 — actualidad",
    featured: true,
    summary:
      "Sistema de gestión de gastos financieros para 13 propiedades hoteleras: registro de gastos, manejo de caja menor, requisiciones y compras, estadísticas en tiempo real y generación automática de reportes en PDF y Excel.",
    problem:
      "Cada hotel del grupo llevaba su caja menor y sus gastos administrativos de forma manual, sin trazabilidad centralizada ni reportes consolidados, y la conciliación de facturas de proveedores era un proceso manual propenso a errores.",
    myRole:
      "Diseñé y modelé la base de datos, construí la API con Django REST Framework, definí la arquitectura por capas del backend, desarrollé el frontend con Astro/React, y automaticé la ingesta de facturas con un bot RPA.",
    stack: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Astro",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "Bitrix24 API",
    ],
    decisions: [
      {
        title: "Servicios como única fuente de lógica de negocio",
        body: "Las vistas de DRF solo traducen HTTP; todo cálculo de saldos, validación y asignación de caja vive en una capa de servicios independiente, lo que mantuvo el sistema testeable al escalar a 13 hoteles.",
      },
      {
        title: "Enrutamiento a múltiples bases de datos",
        body: "Separé caja menor, requisiciones y facturas procesadas en tres bases PostgreSQL distintas con un router dedicado, para que el crecimiento de un módulo no degradara el rendimiento de los otros.",
      },
      {
        title: "RPA para automatizar facturación",
        body: "Un bot lee facturas desde correo electrónico, las registra en el CRM (Bitrix24) y adjunta los soportes automáticamente, reduciendo en 40% el tiempo operativo del equipo contable.",
      },
    ],
    metrics: [
      { label: "Hoteles gestionados", value: "13" },
      { label: "Reducción de tiempos (RPA)", value: "-40%" },
      { label: "Bases de datos", value: "3", hint: "PostgreSQL enrutadas por dominio" },
      { label: "Roles de acceso", value: "5", hint: "admin · gerente · cajero · contador · compras" },
    ],
    architecture: {
      note: "Vista simplificada del sistema real, reconstruida a partir de documentación técnica interna — sin exponer código propietario.",
      nodes: [
        { id: "fe", label: "Frontend", sublabel: "Astro + React + TS", col: 0, row: 1 },
        { id: "api", label: "API Django", sublabel: "DRF · Views", col: 1, row: 1 },
        { id: "svc", label: "Capa de servicios", sublabel: "lógica de negocio", col: 2, row: 1 },
        { id: "cache", label: "Redis", sublabel: "cache de queries", col: 2, row: 0 },
        { id: "bot", label: "Bot RPA", sublabel: "facturas por email", col: 1, row: 3 },
        { id: "bitrix", label: "Bitrix24", sublabel: "CRM externo", col: 3, row: 3 },
        { id: "dbDefault", label: "PostgreSQL", sublabel: "caja_menor", col: 3, row: 0 },
        { id: "dbReq", label: "PostgreSQL", sublabel: "requisiciones", col: 3, row: 1 },
        { id: "dbFact", label: "PostgreSQL", sublabel: "facturas", col: 3, row: 2 },
      ],
      edges: [
        { from: "fe", to: "api" },
        { from: "api", to: "svc" },
        { from: "svc", to: "cache", label: "cache", dashed: true },
        { from: "svc", to: "dbDefault" },
        { from: "svc", to: "dbReq" },
        { from: "svc", to: "dbFact" },
        { from: "api", to: "bot", label: "cron", dashed: true },
        { from: "bot", to: "bitrix", label: "sync" },
        { from: "bot", to: "dbFact" },
      ],
    },
    codeNote:
      "Código propietario de GEH Suites — conservo acceso vigente al repositorio, pero debe permanecer privado. Este case study usa solo documentación técnica y no reproduce código real.",
  },
  {
    slug: "catoca",
    fileName: "catoca.tsx",
    extensionLabel: "React · Vite · Tailwind",
    name: "CATOCA",
    tagline: "Sitio de marca y tienda en línea para una exportadora de café",
    status: "in-development",
    statusLabel: "En desarrollo",
    period: "2026 — en curso",
    featured: true,
    summary:
      "Sitio web para CATOCA (\"Más que un café, una conversación que despierta\"): landing de marca, historia de origen, tienda de café en línea, carrito, checkout con pasarela de pagos colombiana y formulario de contacto.",
    problem:
      "La empresa necesitaba un sitio que funcionara a la vez como vitrina de marca — contar el origen y la historia del café — y como canal de venta directa en línea, con un checkout confiable y pensado para el mercado colombiano.",
    myRole:
      "Desarrollo full stack del sitio: frontend (React + Vite + Tailwind), servidor propio (Express) para checkout y correo, integración de la pasarela de pagos Wompi, y manejo de contenido/imágenes del catálogo.",
    stack: [
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind CSS v4",
      "anime.js",
      "Express",
      "Wompi (pagos)",
      "Google APIs",
      "React Router",
    ],
    decisions: [
      {
        title: "Checkout propio con Wompi",
        body: "Integré la pasarela de pagos colombiana Wompi directamente en el flujo de carrito/checkout, con confirmación del lado del servidor (Express) en lugar de confiar solo en el cliente.",
      },
      {
        title: "Contenido de marca separado del catálogo",
        body: "Separé el storytelling de marca (\"Nuestro origen\") del catálogo de productos, para que el contenido y los precios se puedan actualizar sin tocar el diseño ni el checkout.",
      },
    ],
    metrics: [
      { label: "Estado del proyecto", value: "En desarrollo" },
      { label: "Módulos", value: "7", hint: "home · tienda · producto · carrito · checkout · origen · contacto" },
      { label: "Pasarela de pagos", value: "Wompi" },
    ],
    gallery: [],
    codeNote:
      "Proyecto activo para un cliente real — el repositorio permanece privado mientras el sitio está en desarrollo; se agregará el enlace en vivo al desplegarse en catoca.cafe.",
  },
  {
    slug: "caminante",
    fileName: "caminante.dart",
    extensionLabel: "Flutter · Dart",
    name: "Caminante",
    tagline: "App móvil de turismo para Cartagena de Indias",
    status: "closed",
    statusLabel: "Archivado",
    employer: "Proyecto independiente",
    period: "Ene 2023 — Dic 2023",
    summary:
      "Aplicación móvil multiplataforma enfocada en turismo en Cartagena de Indias, con favoritos, calendario de actividades y rutas para compartir. Lideré el desarrollo técnico de principio a fin como proyecto independiente.",
    problem:
      "Los turistas que visitan Cartagena no tenían una app centrada en su experiencia (favoritos, planeación por fechas, recomendaciones locales) en lugar de un panel pensado para el negocio turístico.",
    myRole:
      "Lideré el desarrollo Flutter de punta a punta: arquitectura de la app, diseño de UX centrado en el turista y coordinación técnica del proyecto.",
    stack: ["Flutter", "Dart", "iOS", "Android", "Diseño UX"],
    decisions: [
      {
        title: "UX centrada en el turista, no en el negocio",
        body: "Diseñé los flujos (favoritos, calendario, compartir rutas) pensando en cómo un turista descubre Cartagena, en vez de un panel administrativo típico de reservas.",
      },
      {
        title: "Liderazgo técnico end-to-end",
        body: "Coordiné el desarrollo desde cero como proyecto independiente, tomando las decisiones de arquitectura Flutter y de alcance de producto.",
      },
    ],
    metrics: [
      { label: "Plataformas", value: "iOS + Android" },
      { label: "Rol", value: "Líder técnico" },
      { label: "Enfoque", value: "Turismo en Cartagena" },
    ],
    gallery: [
      { src: "/screenshots/caminante/cover.png", alt: "Pantalla de bienvenida de Caminante" },
      { src: "/screenshots/caminante/1.png", alt: "Exploración de lugares en Caminante" },
      { src: "/screenshots/caminante/2.png", alt: "Detalle de un lugar turístico" },
      { src: "/screenshots/caminante/3.png", alt: "Recomendaciones en Caminante" },
      { src: "/screenshots/caminante/calendario.png", alt: "Calendario de actividades" },
      { src: "/screenshots/caminante/favoritos.png", alt: "Lugares favoritos guardados" },
    ],
    codeNote:
      "Proyecto propio, sin código de un empleador de por medio — el repositorio se mantiene privado por ahora; capturas reales de la app en la galería.",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
