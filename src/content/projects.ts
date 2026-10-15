import type { Project } from "@/lib/types";
import { localize, type Locale, type LocalizedSource } from "@/i18n/config";

// Every text can be written as a plain string (same in both languages) or as { en, es }.
const PROJECTS: LocalizedSource<Project>[] = [
  {
    slug: "booking-connect",
    fileName: "booking-connect.nest.ts",
    extensionLabel: "NestJS · MongoDB",
    name: "Booking Connect",
    tagline: {
      en: "B2B hotel booking platform for travel agencies",
      es: "Plataforma B2B de reservas hoteleras para agencias de viaje",
    },
    status: "production",
    statusLabel: { en: "In production", es: "En producción" },
    employer: "GEH Suites",
    period: { en: "Feb 2025 — Jun 2026", es: "Feb 2025 — Jun 2026" },
    featured: true,
    summary: {
      en: "B2B platform for checking availability, quoting and booking hotels, used by more than 1,000 travel agencies and 1,400 active users. I scaled, ran and maintained the system, and built the complete flight and hotel booking API.",
      es: "Plataforma B2B de consulta de disponibilidad, cotización y reserva hotelera usada por más de 1.000 agencias de viaje y 1.400 usuarios activos. Escalé, administré y mantuve el sistema, y desarrollé la API completa de reservas de vuelos y hoteles.",
    },
    problem: {
      en: "GEH Suites needed a single digital channel where external travel agencies could check availability, quote and book rooms and flights in real time, with different credit and commission rules per agency, and without depending on a single inventory provider.",
      es: "GEH Suites necesitaba un canal digital único para que agencias de viaje externas consultaran disponibilidad, cotizaran y reservaran habitaciones y vuelos en tiempo real, con reglas de crédito y comisión distintas por agencia, y sin depender de un solo proveedor de inventario.",
    },
    myRole: {
      en: "I designed, scaled and maintained the API (NestJS + MongoDB), built the complete flight booking module, and integrated the AI agents that automate sales and customer service tasks on top of the same platform.",
      es: "Diseñé, escalé y mantuve la API (NestJS + MongoDB), construí el módulo completo de reservas de vuelos, e integré los agentes de IA que automatizan tareas comerciales y de atención al cliente sobre la misma plataforma.",
    },
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
      { en: "MCP protocol", es: "Protocolo MCP" },
    ],
    decisions: [
      {
        title: { en: "Dual-provider booking fallback", es: "Fallback de doble proveedor en reservas" },
        body: {
          en: "The booking engine tries My Tool first for mapped hotels and automatically falls back to Autocore if the provider fails, so agencies never see an outage of the main inventory provider.",
          es: "El motor de reservas intenta primero My Tool para los hoteles mapeados y cae automáticamente a Autocore si el proveedor falla, evitando caídas visibles para las agencias en el proveedor principal de inventario.",
        },
      },
      {
        title: { en: "Multi-agency with its own policies and limits", es: "Multi-agencia con políticas y límites propios" },
        body: {
          en: "Each agency has independent roles, credit policies and user limits. Flight provider credentials are resolved in cascade: per agency, per exact hotel name, or by an inherited key.",
          es: "Cada agencia tiene roles, políticas de crédito y límites de usuario independientes. Las credenciales del proveedor de vuelos se resuelven en cascada: por agencia, por nombre exacto de hotel, o por clave heredada.",
        },
      },
      {
        title: { en: "AI agents over the MCP protocol", es: "Agentes de IA sobre el protocolo MCP" },
        body: {
          en: "I designed and deployed agents that expose availability, bookings and quotes through MCP, automating sales and customer service processes without touching the public API.",
          es: "Diseñé y desplegué agentes que exponen disponibilidad, reservas y cotizaciones a través de MCP, permitiendo automatizar procesos comerciales y de atención al cliente sin tocar la API pública.",
        },
      },
    ],
    metrics: [
      { label: { en: "Active travel agencies", es: "Agencias de viaje activas" }, value: { en: "1,000+", es: "+1.000" } },
      { label: { en: "Active users", es: "Usuarios activos" }, value: { en: "1,400+", es: "+1.400" } },
      {
        label: { en: "Integrated providers", es: "Proveedores integrados" },
        value: "5",
        hint: "Autocore · My Tool · Amadeus · MaarLab · Cobre",
      },
      {
        label: { en: "Hotel availability", es: "Disponibilidad hotelera" },
        value: { en: "Dual fallback", es: "Fallback dual" },
        hint: "Autocore ⇄ My Tool",
      },
    ],
    architecture: {
      note: {
        en: "Simplified view of the real system, rebuilt from internal technical documentation — without exposing proprietary code.",
        es: "Vista simplificada del sistema real, reconstruida a partir de documentación técnica interna — sin exponer código propietario.",
      },
      nodes: [
        { id: "fe", label: "Frontend B2B", sublabel: "React + Astro", col: 0, row: 0 },
        { id: "mobile", label: { en: "Agency app", es: "App agencias" }, sublabel: "Flutter (iOS/Android)", col: 0, row: 2 },
        { id: "api", label: "API Gateway", sublabel: "NestJS · JWT · Swagger", col: 1, row: 1 },
        { id: "reservas", label: { en: "Bookings", es: "Reservas" }, sublabel: "Autocore ⇄ My Tool", col: 2, row: 0 },
        { id: "vuelos", label: { en: "Flights", es: "Vuelos" }, sublabel: "Amadeus · MaarLab", col: 2, row: 1 },
        { id: "pagos", label: { en: "Payments", es: "Pagos" }, sublabel: "Cobre", col: 2, row: 2 },
        { id: "bot", label: { en: "RPA bot", es: "Bot RPA" }, sublabel: { en: "pending bookings", es: "reservas pendientes" }, col: 2, row: 3 },
        { id: "ia", label: { en: "AI agents", es: "Agentes IA" }, sublabel: { en: "MCP protocol", es: "protocolo MCP" }, col: 2, row: 4 },
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
    codeNote: {
      en: "Proprietary GEH Suites code — I no longer have access to the repository after leaving the company. This case study was rebuilt from technical documentation I kept.",
      es: "Código propietario de GEH Suites — ya no tengo acceso al repositorio tras dejar la empresa. Este case study se reconstruyó a partir de documentación técnica que sí conservo.",
    },
  },
  {
    slug: "pargo",
    fileName: "pargo.nest.ts",
    extensionLabel: "NestJS · React · PostgreSQL",
    name: "Pargo",
    tagline: {
      en: "Multi-tenant SaaS POS for restaurants and hotels on Colombia's Caribbean coast",
      es: "SaaS POS multi-tenant para restaurantes y hoteles de la Costa Caribe",
    },
    status: "in-development",
    statusLabel: { en: "MVP in demos", es: "MVP en demos" },
    employer: { en: "Own product", es: "Proyecto propio" },
    period: { en: "Jul 2026 — ongoing", es: "Jul 2026 — en curso" },
    featured: true,
    summary: {
      en: "SaaS platform for restaurants and hotels: a tablet POS that keeps selling without internet, floor plan by zones, real-time kitchen tickets, checkout with tips and split bills, cash closing with blind count and Z report, DIAN electronic invoicing, recipe-based inventory, QR digital menu and AI-powered reputation.",
      es: "Plataforma SaaS para restaurantes y hoteles: caja POS en tablet que sigue vendiendo sin internet, salón por zonas, comandas a cocina en tiempo real, cobro con propina y cuenta dividida, cierre de caja con conteo ciego y reporte Z, facturación electrónica DIAN, inventario descontado por receta, carta digital por QR y reputación con IA.",
    },
    problem: {
      en: "Restaurants on Colombia's Caribbean coast deal with frequent internet outages, mandatory electronic invoicing and generic POS systems that neither deduct inventory nor reconcile the cash drawer. The reference projects I analyzed had serious flaws: the client set the totals, anyone could sign up as admin and payment webhooks weren't idempotent.",
      es: "Los restaurantes de la Costa Caribe trabajan con cortes de internet frecuentes, facturación electrónica obligatoria y POS genéricos que no descuentan inventario ni cuadran la caja. Los proyectos de referencia que analicé tenían fallas graves: el cliente fijaba los totales, cualquiera podía registrarse como admin y los webhooks de pago no eran idempotentes.",
    },
    myRole: {
      en: "I design and build it end to end: technical plan, 11 ADRs, multi-tenant PostgreSQL data model, NestJS API, POS and back office in React, public site in Next.js, multi-provider AI package, hardened Docker infrastructure and a local verification pipeline that runs on every push.",
      es: "Lo diseño y construyo de punta a punta: plan técnico, 11 ADRs, modelo de datos PostgreSQL multi-tenant, API NestJS, caja POS y backoffice en React, web pública en Next.js, paquete de IA multiproveedor, infraestructura Docker endurecida y una verificación local que corre en cada push.",
    },
    stack: [
      "NestJS 12",
      "Fastify",
      "TypeScript",
      "PostgreSQL (RLS)",
      "Valkey",
      "React",
      "TanStack Query",
      "Next.js",
      "Turborepo + pnpm",
      "Zod",
      "OpenTelemetry",
      "Docker",
      "Testcontainers",
      "Playwright",
      "Anthropic / OpenAI / Gemini",
    ],
    decisions: [
      {
        title: {
          en: "Fail-closed multi-tenancy with Row Level Security",
          es: "Multi-tenancy con Row Level Security que falla cerrado",
        },
        body: {
          en: "Every table has RLS ENABLE + FORCE and composite foreign keys (tenant_id, id); database roles are not superusers and cannot bypass RLS, and the API refuses to start if its role could. Without a business context a query returns nothing, and there are A↔B isolation tests for reading, updating, deleting, inserting and referencing.",
          es: "Cada tabla tiene RLS ENABLE + FORCE y llaves foráneas compuestas (tenant_id, id); los roles de la base no son superusuarios ni pueden saltarse RLS, y la API se niega a arrancar si su rol podría hacerlo. Sin contexto de negocio una consulta no devuelve nada, y hay tests de aislamiento A↔B para leer, modificar, borrar, insertar y referenciar.",
        },
      },
      {
        title: { en: "Offline POS with a lease and signed events", es: "POS offline con concesión y eventos firmados" },
        body: {
          en: "While online, the POS requests a 24-hour lease with a snapshot of the catalog and a sales cap. Offline, each sale is an event signed with the device's non-exportable ECDSA key and stored encrypted in IndexedDB. On sync, the server verifies the signature and recalculates prices from the stored snapshot, never from what the tablet sends; suspicious cases are flagged for manager review instead of losing money that was actually collected.",
          es: "Con conexión, la caja pide una concesión de 24 h con una foto del catálogo y un tope de ventas. Sin conexión, cada venta es un evento firmado con una clave ECDSA no exportable del dispositivo, guardado cifrado en IndexedDB. Al sincronizar, el servidor verifica la firma y recalcula los precios con la foto guardada, nunca con los que envía la tablet; los casos sospechosos se marcan para revisión del gerente en vez de perder dinero que sí se cobró.",
        },
      },
      {
        title: {
          en: "Inventory as a ledger with recipes and average cost",
          es: "Inventario como ledger con recetas y costo promedio",
        },
        body: {
          en: "Each sale deducts ingredients according to the recipe of the variant and its modifiers (a large snapper with patacón doesn't use the same as a medium one with coconut rice). Purchases, waste, adjustments and physical counts are movements in a per-location ledger, so stock can always be rebuilt and audited.",
          es: "Cada venta descuenta insumos según la receta de la variante y sus modificadores (un pargo grande con patacón no consume lo mismo que uno mediano con arroz con coco). Compras, mermas, ajustes y conteos físicos son movimientos de un ledger por sede, así que el stock siempre se puede reconstruir y auditar.",
        },
      },
      {
        title: { en: "Multi-provider AI with a deterministic score", es: "IA multiproveedor con puntaje determinista" },
        body: {
          en: "Review analysis returns structured outputs validated with Zod on Anthropic, OpenAI or Gemini. The reputation score is computed deterministically from stored data, not estimated by the model; review replies always require human approval, each business has a budget and there is an evaluation suite against prompt injection.",
          es: "El análisis de reseñas devuelve salidas estructuradas validadas con Zod sobre Anthropic, OpenAI o Gemini. El puntaje de reputación se calcula de forma determinista con los datos guardados, no lo estima el modelo; las respuestas a reseñas siempre requieren aprobación humana, cada negocio tiene un presupuesto y hay una suite de evaluación contra prompt injection.",
        },
      },
    ],
    metrics: [
      {
        label: { en: "Automated tests", es: "Tests automatizados" },
        value: "751",
        hint: { en: "+ 8 Playwright E2E against the real stack", es: "+ 8 E2E con Playwright contra el stack real" },
      },
      { label: { en: "Documented decisions", es: "Decisiones documentadas" }, value: "11 ADRs" },
      {
        label: { en: "Selling without internet", es: "Venta sin internet" },
        value: "24 h",
        hint: { en: "signed lease with a sales cap", es: "concesión firmada con tope de ventas" },
      },
      { label: { en: "Processes", es: "Procesos" }, value: "3", hint: "api · public-api · worker" },
    ],
    architecture: {
      note: {
        en: "Modular monolith: the same codebase deployed as three processes with different database permissions. Electronic invoicing currently runs against a simulated provider while Factus is integrated.",
        es: "Monolito modular: un mismo código desplegado en tres procesos con permisos de base de datos distintos. La facturación electrónica corre hoy contra un proveedor simulado mientras se integra Factus.",
      },
      nodes: [
        { id: "pos", label: { en: "POS", es: "Caja POS" }, sublabel: { en: "PWA · signed offline", es: "PWA · offline firmado" }, col: 0, row: 0 },
        { id: "bo", label: "Backoffice", sublabel: "React · TanStack Query", col: 0, row: 1 },
        { id: "site", label: { en: "QR menu / web", es: "Carta QR / web" }, sublabel: "Next.js", col: 0, row: 2 },
        { id: "api", label: "API", sublabel: "NestJS 12 · Fastify", col: 1, row: 0 },
        { id: "public", label: "public-api", sublabel: { en: "read only", es: "solo lectura" }, col: 1, row: 2 },
        { id: "worker", label: "Worker", sublabel: { en: "invoices · AI · email", es: "facturas · IA · correo" }, col: 1, row: 3 },
        { id: "valkey", label: "Valkey", sublabel: { en: "rate limit · sessions", es: "rate limit · sesiones" }, col: 2, row: 0 },
        { id: "pg", label: "PostgreSQL", sublabel: "RLS multi-tenant", col: 2, row: 1 },
        { id: "factus", label: "Factus (DIAN)", sublabel: { en: "e-invoicing", es: "factura electrónica" }, col: 3, row: 2 },
        { id: "ai", label: { en: "Multi-provider AI", es: "IA multiproveedor" }, sublabel: { en: "reviews · reputation", es: "reseñas · reputación" }, col: 3, row: 3 },
      ],
      edges: [
        { from: "pos", to: "api" },
        { from: "bo", to: "api" },
        { from: "site", to: "public" },
        { from: "api", to: "valkey", dashed: true },
        { from: "api", to: "pg" },
        { from: "public", to: "pg" },
        { from: "worker", to: "pg" },
        { from: "worker", to: "factus", label: { en: "queue", es: "cola" } },
        { from: "worker", to: "ai", dashed: true },
      ],
    },
    gallery: [
      { src: "/screenshots/pargo/salon.webp", alt: { en: "POS: floor plan by zones with occupied tables", es: "Caja: plano del salón por zonas con mesas ocupadas" }, landscape: true },
      { src: "/screenshots/pargo/pedido.webp", alt: { en: "Order: configuring the snapper (size and side)", es: "Pedido: configurar el pargo (tamaño y acompañante)" }, landscape: true },
      { src: "/screenshots/pargo/cocina.webp", alt: { en: "Kitchen screen with real-time tickets", es: "Pantalla de cocina con las comandas en tiempo real" }, landscape: true },
      { src: "/screenshots/pargo/dividir-cuenta.webp", alt: { en: "Checkout: splitting the bill between diners", es: "Cobro: dividir la cuenta entre comensales" }, landscape: true },
      { src: "/screenshots/pargo/reporte-z.webp", alt: { en: "Cash closing: Z report that balances after the blind count", es: "Cierre de caja: reporte Z que cuadra tras el conteo ciego" }, landscape: true },
      { src: "/screenshots/pargo/factura.webp", alt: { en: "Accepted electronic invoice", es: "Facturación electrónica aceptada" }, landscape: true },
      { src: "/screenshots/pargo/recetas.webp", alt: { en: "Fried red snapper recipe per variant", es: "Receta del pargo rojo frito por variante" }, landscape: true },
      { src: "/screenshots/pargo/backoffice.webp", alt: { en: "Back office: daily summary and inventory alerts", es: "Backoffice: resumen del día y alertas de inventario" }, landscape: true },
      { src: "/screenshots/pargo/carta-qr.webp", alt: { en: "Public digital menu opened by scanning the QR", es: "Carta digital pública que abre el cliente con el QR" } },
    ],
    codeNote: {
      en: "Own product in a private repository. Screenshots come from the demo restaurant, with fictitious data.",
      es: "Proyecto propio en repositorio privado. Las capturas son del restaurante de demostración, con datos ficticios.",
    },
  },
  {
    slug: "catoca",
    fileName: "catoca.tsx",
    extensionLabel: "React · Vite · Vercel",
    name: "CATOCA",
    tagline: {
      en: "Online store and brand site for a single-origin coffee from the Sierra Nevada",
      es: "Tienda en línea y sitio de marca de un café de origen de la Sierra Nevada",
    },
    status: "production",
    statusLabel: { en: "In production", es: "En producción" },
    employer: { en: "CATOCA (client)", es: "CATOCA (cliente)" },
    period: { en: "Nov 2025 — present", es: "Nov 2025 — actualidad" },
    featured: true,
    liveUrl: "https://www.catoca.cafe",
    summary: {
      en: "Production site for CATOCA (“More than a coffee, a conversation that awakens”): brand landing page, origin story, store with filters by presentation, product page with sensory profile, side cart, Wompi checkout and automatic confirmation emails.",
      es: "Sitio en producción para CATOCA («Más que un café, una conversación que despierta»): landing de marca, historia de origen, tienda con filtros por presentación, ficha de producto con perfil sensorial, carrito lateral, checkout con Wompi y correos de confirmación automáticos.",
    },
    problem: {
      en: "The brand needed a site that was both a showcase, to tell the coffee's origin story, and a direct sales channel, with a reliable checkout for the Colombian market (card, PSE, Nequi or cash) and without paying for an e-commerce platform.",
      es: "La marca necesitaba un sitio que fuera a la vez vitrina, para contar el origen del café, y canal de venta directa, con un checkout confiable para el mercado colombiano (tarjeta, PSE, Nequi o efectivo) y sin pagar una plataforma de e-commerce.",
    },
    myRole: {
      en: "Full stack development: redesign of the interface and frontend architecture, Vercel serverless functions for checkout, Wompi and Gmail API integration, and image and animation optimization.",
      es: "Desarrollo full stack: rediseño de la interfaz y de la arquitectura del frontend, funciones serverless en Vercel para el checkout, integración de Wompi y de Gmail API, y optimización de imágenes y animaciones.",
    },
    stack: [
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind CSS v4",
      "anime.js",
      "React Router 7",
      "Vercel Functions",
      { en: "Wompi (payments)", es: "Wompi (pagos)" },
      "Gmail API",
    ],
    decisions: [
      {
        title: { en: "Amounts signed on the server, not in the browser", es: "Montos firmados en el servidor, no en el navegador" },
        body: {
          en: "The serverless function builds the order with the server's catalog prices and generates the SHA-256 integrity signature Wompi requires. The browser only sends which products and how many, so nobody can pay a price that isn't the store's.",
          es: "La función serverless arma el pedido con los precios del catálogo del servidor y genera la firma de integridad SHA-256 que exige Wompi. El navegador solo envía qué productos y cuántos, así que nadie puede pagar un precio que no es el de la tienda.",
        },
      },
      {
        title: { en: "Stateless checkout session with an HMAC token", es: "Sesión de compra sin estado con un token HMAC" },
        body: {
          en: "Vercel functions don't share memory, so the checkout session travels with the client as an HMAC-signed token; /api/wompi/confirm verifies it with a constant-time comparison before confirming the order and sending emails.",
          es: "Las funciones de Vercel no comparten memoria, así que la sesión de compra viaja con el cliente como un token firmado con HMAC; /api/wompi/confirm lo verifica con comparación en tiempo constante antes de confirmar el pedido y enviar los correos.",
        },
      },
      {
        title: { en: "Verified Wompi events and emails with retries", es: "Eventos de Wompi verificados y correos con reintentos" },
        body: {
          en: "The events webhook validates Wompi's checksum before accepting a payment. Emails to the customer and the store go out through the Gmail API, with backoff retries, token refresh and HTML escaping to prevent injection.",
          es: "El webhook de eventos valida el checksum de Wompi antes de aceptar un pago. Los correos al cliente y a la tienda salen por Gmail API, con reintentos con backoff, renovación del token y escape del HTML para evitar inyecciones.",
        },
      },
      {
        title: { en: "Performance and accessible motion", es: "Rendimiento y movimiento accesibles" },
        body: {
          en: "I converted the images to WebP (from 33.8 MB to 1.4 MB) and every anime.js animation respects prefers-reduced-motion.",
          es: "Pasé las imágenes a WebP (de 33,8 MB a 1,4 MB) y todas las animaciones de anime.js respetan prefers-reduced-motion.",
        },
      },
    ],
    metrics: [
      {
        label: { en: "Image weight", es: "Peso de imágenes" },
        value: "-96%",
        hint: { en: "33.8 MB → 1.4 MB in WebP", es: "33,8 MB → 1,4 MB en WebP" },
      },
      {
        label: { en: "Routes", es: "Rutas" },
        value: "7",
        hint: {
          en: "home · store · product · cart · checkout · origin · contact",
          es: "home · tienda · producto · carrito · checkout · origen · contacto",
        },
      },
      {
        label: { en: "Payment methods", es: "Medios de pago" },
        value: "4",
        hint: { en: "card · PSE · Nequi · cash (Wompi)", es: "tarjeta · PSE · Nequi · efectivo (Wompi)" },
      },
      { label: "Hosting", value: "Vercel", hint: { en: "SPA + serverless functions", es: "SPA + funciones serverless" } },
    ],
    gallery: [
      { src: "/screenshots/catoca/home.webp", alt: { en: "Home: coffee from the Sierra Nevada de Santa Marta", es: "Portada: café de la Sierra Nevada de Santa Marta" }, landscape: true },
      { src: "/screenshots/catoca/tienda.webp", alt: { en: "Store with filters by presentation and price sorting", es: "Tienda con filtros por presentación y orden por precio" }, landscape: true },
      { src: "/screenshots/catoca/producto.webp", alt: { en: "Product page with roast, acidity and body", es: "Ficha de producto con tueste, acidez y cuerpo" }, landscape: true },
      { src: "/screenshots/catoca/carrito-drawer.webp", alt: { en: "Side cart after adding a product", es: "Carrito lateral al añadir un producto" }, landscape: true },
      { src: "/screenshots/catoca/checkout.webp", alt: { en: "Checkout: shipping details and payment with Wompi", es: "Checkout: datos de envío y pago con Wompi" }, landscape: true },
      { src: "/screenshots/catoca/origen.webp", alt: { en: "“Our origin” page", es: "Página «Nuestro origen»" }, landscape: true },
      { src: "/screenshots/catoca/home-mobile.webp", alt: { en: "Home on mobile", es: "Portada en móvil" } },
    ],
    codeNote: {
      en: "Project for a real client. The repository is private; the site is live at catoca.cafe.",
      es: "Proyecto para un cliente real. El repositorio es privado; el sitio está en vivo en catoca.cafe.",
    },
  },
  {
    slug: "catoca-ventas",
    fileName: "catoca-ventas.nest.ts",
    extensionLabel: "NestJS · Drizzle · React",
    name: { en: "CATOCA · Sales system", es: "CATOCA · Sistema de ventas" },
    tagline: {
      en: "Sales, batch inventory, commissions and DIAN pre-invoicing for a coffee exporter",
      es: "Ventas, inventario por lotes, comisiones y prefacturación DIAN para una exportadora de café",
    },
    status: "in-development",
    statusLabel: { en: "In development", es: "En desarrollo" },
    employer: { en: "CATOCA (client)", es: "CATOCA (cliente)" },
    period: { en: "Sep 2026 — ongoing", es: "Sep 2026 — en curso" },
    featured: true,
    summary: {
      en: "Internal system to record sales from sales reps and the online store, track inventory by roast batch, calculate and pay out commissions, generate pre-invoices with DIAN fields and hand the accountant an Excel file ready for Siigo Nube.",
      es: "Sistema interno para registrar las ventas de los vendedores y de la tienda web, controlar inventario por lotes de tostión, calcular y liquidar comisiones, generar prefacturas con los campos de la DIAN y entregarle a la contadora un Excel listo para Siigo Nube.",
    },
    problem: {
      en: "Sales rep sales, inventory and commissions were tracked separately and by hand. The online store didn't deduct inventory, and the accountant had to rebuild every invoice to load it into Siigo.",
      es: "Las ventas de los vendedores, el inventario y las comisiones se llevaban por separado y a mano. La tienda en línea no descontaba inventario, y la contadora tenía que reconstruir cada factura para cargarla en Siigo.",
    },
    myRole: {
      en: "Architecture and full development in phases: data model, NestJS API with Drizzle on PostgreSQL 18, React web panel, integration with the online store and Wompi, and the testing strategy.",
      es: "Arquitectura y desarrollo completo por fases: modelo de datos, API NestJS con Drizzle sobre PostgreSQL 18, panel web en React, integración con la tienda en línea y con Wompi, y la estrategia de pruebas.",
    },
    stack: [
      "NestJS 12",
      "Fastify",
      "Drizzle ORM",
      "PostgreSQL 18",
      "React 19",
      "Vite 8",
      "TanStack Router / Query",
      "Tailwind CSS 4",
      { en: "Zod (shared contracts)", es: "Zod (contratos compartidos)" },
      "Vitest",
      "Testcontainers",
      "Playwright",
      "Docker + Nginx",
    ],
    decisions: [
      {
        title: { en: "Exact money and rates stored on every sale", es: "Dinero exacto y tarifas guardadas en cada venta" },
        body: {
          en: "Amounts in numeric(18,2), always in COP. VAT is calculated by accumulating the base per rate and rounding once on the total (ROUND_HALF_UP). Each sale stores the VAT rate and commission percentage it was calculated with, and only the admin can change those rates, with history.",
          es: "Montos en numeric(18,2), siempre en COP. El IVA se calcula acumulando la base por tarifa y redondeando una sola vez sobre el total (ROUND_HALF_UP). Cada venta guarda la tarifa de IVA y el porcentaje de comisión con que se calculó, y esas tarifas solo las cambia el admin, con historial.",
        },
      },
      {
        title: { en: "Batch inventory with a stock ledger and FIFO", es: "Inventario por lotes con kardex y salida FIFO" },
        body: {
          en: "Every stock entry requires a batch date and a roast date. Sales consume the oldest batches first, every movement is recorded in the stock ledger and the system won't sell without stock.",
          es: "Cada entrada exige fecha de lote y de tostión. Las ventas consumen los lotes más antiguos primero, cada movimiento queda en el kardex y el sistema no deja vender sin stock.",
        },
      },
      {
        title: { en: "Immutable, audited sales", es: "Ventas inmutables y auditadas" },
        body: {
          en: "The seller is always the authenticated user and can't edit a saved sale. Only the admin edits, with a mandatory reason and a before/after revision. A cancellation returns the inventory and voids the commission (with a negative adjustment if already paid); a return restores inventory but doesn't touch the commission.",
          es: "El vendedor siempre es el usuario autenticado y no puede editar una venta guardada. Solo el admin edita, con motivo obligatorio y revisión antes/después. Una anulación devuelve el inventario y anula la comisión (con ajuste negativo si ya se pagó); una devolución devuelve el inventario pero no toca la comisión.",
        },
      },
      {
        title: { en: "Tests as the specification", es: "Pruebas como especificación" },
        body: {
          en: "100% coverage is mandatory, API tests run against real PostgreSQL with Testcontainers and E2E with Playwright. A committed test is never changed to make the code pass: a hook blocks editing it and a script checks it against main.",
          es: "Cobertura del 100 % obligatoria, pruebas de API contra PostgreSQL real con Testcontainers y E2E con Playwright. Una prueba ya commiteada nunca se modifica para que el código pase: un hook bloquea su edición y un script lo verifica contra main.",
        },
      },
    ],
    metrics: [
      {
        label: { en: "Test coverage", es: "Cobertura de pruebas" },
        value: "100%",
        hint: { en: "mandatory Vitest threshold", es: "umbral obligatorio en Vitest" },
      },
      { label: { en: "Backend modules", es: "Módulos del backend" }, value: "14" },
      {
        label: { en: "Sales channels", es: "Canales de venta" },
        value: "3",
        hint: { en: "sales rep · online store · admin", es: "vendedor · tienda web · admin" },
      },
      {
        label: { en: "Accounting", es: "Contabilidad" },
        value: "Siigo",
        hint: { en: ".xlsx export by date range", es: "exporte .xlsx por rango de fechas" },
      },
    ],
    architecture: {
      note: {
        en: "The online store creates orders with an API key + HMAC and Wompi confirms payment through a signed webhook; both become sales in the web channel.",
        es: "La tienda en línea crea pedidos con API Key + HMAC y Wompi confirma el pago con un webhook firmado; ambos se convierten en ventas del canal web.",
      },
      nodes: [
        { id: "web", label: { en: "Web panel", es: "Panel web" }, sublabel: "React 19 · TanStack", col: 0, row: 0 },
        { id: "store", label: "catoca.cafe", sublabel: "API Key + HMAC", col: 0, row: 1 },
        { id: "wompi", label: "Wompi", sublabel: { en: "signed webhook", es: "webhook firmado" }, col: 0, row: 2 },
        { id: "nginx", label: "Nginx", sublabel: "TLS · rate limit · SPA", col: 1, row: 1 },
        { id: "api", label: "API", sublabel: "NestJS · Fastify · Drizzle", col: 2, row: 1 },
        { id: "pg", label: "PostgreSQL 18", sublabel: { en: "stock ledger · audit", es: "kardex · auditoría" }, col: 3, row: 0 },
        { id: "pre", label: { en: "Pre-invoices", es: "Prefacturas" }, sublabel: { en: "DIAN fields", es: "campos DIAN" }, col: 3, row: 1 },
        { id: "siigo", label: { en: "Siigo export", es: "Exporte Siigo" }, sublabel: { en: "accounting .xlsx", es: ".xlsx contable" }, col: 3, row: 2 },
      ],
      edges: [
        { from: "web", to: "nginx" },
        { from: "store", to: "nginx" },
        { from: "wompi", to: "nginx", dashed: true },
        { from: "nginx", to: "api", label: "/api" },
        { from: "api", to: "pg" },
        { from: "api", to: "pre" },
        { from: "api", to: "siigo", dashed: true },
      ],
    },
    gallery: [
      { src: "/screenshots/ventas/admin-inicio.webp", alt: { en: "Admin dashboard: sales by month and channel", es: "Dashboard del administrador: ventas por mes y por canal" }, landscape: true },
      { src: "/screenshots/ventas/vendedor-inicio.webp", alt: { en: "Sales rep dashboard: monthly sales and commission", es: "Dashboard del vendedor: ventas y comisión del mes" }, landscape: true },
      { src: "/screenshots/ventas/nueva-venta.webp", alt: { en: "Recording a sale with VAT calculated", es: "Registrar una venta con IVA calculado" }, landscape: true },
      { src: "/screenshots/ventas/ventas-lista.webp", alt: { en: "Recorded sales with payment status", es: "Ventas registradas con estado de pago" }, landscape: true },
      { src: "/screenshots/ventas/comisiones.webp", alt: { en: "Commissions: approval and payout per sales rep", es: "Comisiones: aprobación y liquidación por vendedor" }, landscape: true },
      { src: "/screenshots/ventas/inventario.webp", alt: { en: "Batch inventory with roast date", es: "Inventario por lotes con fecha de tostión" }, landscape: true },
    ],
    codeNote: {
      en: "Private repository. Screenshots taken from a local installation with demo data, not from real operations.",
      es: "Repositorio privado. Capturas tomadas de una instalación local con datos de demostración, no de la operación real.",
    },
  },
  {
    slug: "gestion-caja-menor",
    fileName: "caja-menor.django.py",
    extensionLabel: "Django REST · Astro",
    name: { en: "Petty Cash Management", es: "Gestión de Caja Menor" },
    tagline: {
      en: "Multi-hotel finance system: expenses, petty cash and purchase requests",
      es: "Sistema financiero multi-hotel: gastos, caja menor y requisiciones",
    },
    status: "production",
    statusLabel: { en: "In production", es: "En producción" },
    employer: "GEH Suites",
    period: { en: "Feb 2025 — Jun 2026", es: "Feb 2025 — Jun 2026" },
    summary: {
      en: "Expense management system for 13 hotel properties: expense tracking, petty cash, purchase requests and procurement, real-time statistics and automatic PDF and Excel reports.",
      es: "Sistema de gestión de gastos financieros para 13 propiedades hoteleras: registro de gastos, manejo de caja menor, requisiciones y compras, estadísticas en tiempo real y generación automática de reportes en PDF y Excel.",
    },
    problem: {
      en: "Each hotel in the group handled its petty cash and administrative expenses manually, with no centralized traceability or consolidated reports, and reconciling supplier invoices was an error-prone manual process.",
      es: "Cada hotel del grupo llevaba su caja menor y sus gastos administrativos de forma manual, sin trazabilidad centralizada ni reportes consolidados, y la conciliación de facturas de proveedores era un proceso manual propenso a errores.",
    },
    myRole: {
      en: "I designed and modeled the database, built the API with Django REST Framework, defined the layered backend architecture, developed the frontend with Astro/React, and automated invoice ingestion with an RPA bot.",
      es: "Diseñé y modelé la base de datos, construí la API con Django REST Framework, definí la arquitectura por capas del backend, desarrollé el frontend con Astro/React, y automaticé la ingesta de facturas con un bot RPA.",
    },
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
        title: { en: "Services as the single source of business logic", es: "Servicios como única fuente de lógica de negocio" },
        body: {
          en: "DRF views only translate HTTP; all balance calculations, validation and cash allocation live in an independent service layer, which kept the system testable while scaling to 13 hotels.",
          es: "Las vistas de DRF solo traducen HTTP; todo cálculo de saldos, validación y asignación de caja vive en una capa de servicios independiente, lo que mantuvo el sistema testeable al escalar a 13 hoteles.",
        },
      },
      {
        title: { en: "Routing to multiple databases", es: "Enrutamiento a múltiples bases de datos" },
        body: {
          en: "I split petty cash, purchase requests and processed invoices into three separate PostgreSQL databases with a dedicated router, so the growth of one module wouldn't degrade the performance of the others.",
          es: "Separé caja menor, requisiciones y facturas procesadas en tres bases PostgreSQL distintas con un router dedicado, para que el crecimiento de un módulo no degradara el rendimiento de los otros.",
        },
      },
      {
        title: { en: "RPA to automate invoicing", es: "RPA para automatizar facturación" },
        body: {
          en: "A bot reads invoices from email, records them in the CRM (Bitrix24) and attaches the supporting documents automatically, cutting the accounting team's operational time by 40%.",
          es: "Un bot lee facturas desde correo electrónico, las registra en el CRM (Bitrix24) y adjunta los soportes automáticamente, reduciendo en 40% el tiempo operativo del equipo contable.",
        },
      },
    ],
    metrics: [
      { label: { en: "Hotels managed", es: "Hoteles gestionados" }, value: "13" },
      { label: { en: "Time reduction (RPA)", es: "Reducción de tiempos (RPA)" }, value: "-40%" },
      {
        label: { en: "Databases", es: "Bases de datos" },
        value: "3",
        hint: { en: "PostgreSQL routed by domain", es: "PostgreSQL enrutadas por dominio" },
      },
      {
        label: { en: "Access roles", es: "Roles de acceso" },
        value: "5",
        hint: {
          en: "admin · manager · cashier · accountant · purchasing",
          es: "admin · gerente · cajero · contador · compras",
        },
      },
    ],
    architecture: {
      note: {
        en: "Simplified view of the real system, rebuilt from internal technical documentation — without exposing proprietary code.",
        es: "Vista simplificada del sistema real, reconstruida a partir de documentación técnica interna — sin exponer código propietario.",
      },
      nodes: [
        { id: "fe", label: "Frontend", sublabel: "Astro + React + TS", col: 0, row: 1 },
        { id: "api", label: "API Django", sublabel: "DRF · Views", col: 1, row: 1 },
        { id: "svc", label: { en: "Service layer", es: "Capa de servicios" }, sublabel: { en: "business logic", es: "lógica de negocio" }, col: 2, row: 1 },
        { id: "cache", label: "Redis", sublabel: { en: "query cache", es: "cache de queries" }, col: 2, row: 0 },
        { id: "bot", label: { en: "RPA bot", es: "Bot RPA" }, sublabel: { en: "invoices by email", es: "facturas por email" }, col: 1, row: 3 },
        { id: "bitrix", label: "Bitrix24", sublabel: { en: "external CRM", es: "CRM externo" }, col: 3, row: 3 },
        { id: "dbDefault", label: "PostgreSQL", sublabel: "caja_menor", col: 3, row: 0 },
        { id: "dbReq", label: "PostgreSQL", sublabel: { en: "purchase requests", es: "requisiciones" }, col: 3, row: 1 },
        { id: "dbFact", label: "PostgreSQL", sublabel: { en: "invoices", es: "facturas" }, col: 3, row: 2 },
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
    codeNote: {
      en: "Proprietary GEH Suites code — I still have access to the repository, but it must remain private. This case study uses only technical documentation and does not reproduce real code.",
      es: "Código propietario de GEH Suites — conservo acceso vigente al repositorio, pero debe permanecer privado. Este case study usa solo documentación técnica y no reproduce código real.",
    },
  },
  {
    slug: "caminante",
    fileName: "caminante.dart",
    extensionLabel: "Flutter · Dart",
    name: "Caminante",
    tagline: {
      en: "Tourism mobile app for Cartagena de Indias",
      es: "App móvil de turismo para Cartagena de Indias",
    },
    status: "closed",
    statusLabel: { en: "Archived", es: "Archivado" },
    employer: { en: "Independent project", es: "Proyecto independiente" },
    period: { en: "Jan 2023 — Dec 2023", es: "Ene 2023 — Dic 2023" },
    summary: {
      en: "Cross-platform mobile app focused on tourism in Cartagena de Indias, with favorites, an activity calendar and shareable routes. I led the technical development end to end as an independent project.",
      es: "Aplicación móvil multiplataforma enfocada en turismo en Cartagena de Indias, con favoritos, calendario de actividades y rutas para compartir. Lideré el desarrollo técnico de principio a fin como proyecto independiente.",
    },
    problem: {
      en: "Tourists visiting Cartagena had no app centered on their experience (favorites, planning by date, local recommendations) rather than a dashboard built for the tourism business.",
      es: "Los turistas que visitan Cartagena no tenían una app centrada en su experiencia (favoritos, planeación por fechas, recomendaciones locales) en lugar de un panel pensado para el negocio turístico.",
    },
    myRole: {
      en: "I led the Flutter development end to end: app architecture, tourist-centered UX design and technical coordination of the project.",
      es: "Lideré el desarrollo Flutter de punta a punta: arquitectura de la app, diseño de UX centrado en el turista y coordinación técnica del proyecto.",
    },
    stack: ["Flutter", "Dart", "iOS", "Android", { en: "UX design", es: "Diseño UX" }],
    decisions: [
      {
        title: { en: "UX centered on the tourist, not the business", es: "UX centrada en el turista, no en el negocio" },
        body: {
          en: "I designed the flows (favorites, calendar, sharing routes) around how a tourist discovers Cartagena, instead of a typical booking admin panel.",
          es: "Diseñé los flujos (favoritos, calendario, compartir rutas) pensando en cómo un turista descubre Cartagena, en vez de un panel administrativo típico de reservas.",
        },
      },
      {
        title: { en: "End-to-end technical leadership", es: "Liderazgo técnico end-to-end" },
        body: {
          en: "I coordinated development from scratch as an independent project, making the Flutter architecture and product scope decisions.",
          es: "Coordiné el desarrollo desde cero como proyecto independiente, tomando las decisiones de arquitectura Flutter y de alcance de producto.",
        },
      },
    ],
    metrics: [
      { label: { en: "Platforms", es: "Plataformas" }, value: "iOS + Android" },
      { label: { en: "Role", es: "Rol" }, value: { en: "Tech lead", es: "Líder técnico" } },
      { label: { en: "Focus", es: "Enfoque" }, value: { en: "Tourism in Cartagena", es: "Turismo en Cartagena" } },
    ],
    codeNote: {
      en: "Own project, with no employer code involved — the repository remains private for now.",
      es: "Proyecto propio, sin código de un empleador de por medio — el repositorio se mantiene privado por ahora.",
    },
  },
];

export function getProjects(locale: Locale): Project[] {
  return localize<Project[]>(PROJECTS, locale);
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}

export const PROJECT_SLUGS = PROJECTS.map((p) => p.slug as string);
