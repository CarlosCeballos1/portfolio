import type { Locale } from "./config";

const en = {
  meta: {
    description:
      "Full Stack Engineer in Cartagena, Colombia building AI agents and integrations for B2B platforms. An AI booking agent with 4,000+ bookings and a platform for 1,000+ agencies.",
    roleLong: "Full Stack Engineer · AI agents & integrations for B2B platforms",
  },
  nav: {
    home: { fileName: "home.tsx", label: "Home" },
    projects: { fileName: "projects/", label: "Projects" },
    experience: { fileName: "experience.log", label: "Experience" },
    skills: { fileName: "skills.json", label: "Skills" },
    contact: { fileName: "contact.sh", label: "Contact" },
  },
  shell: {
    toggleNav: "Show/hide navigation",
    explorer: "EXPLORER",
    connect: "CONNECT",
    downloadCv: "↓ Download CV",
    available: "open to new challenges",
    language: "Language",
    switchTo: "Ver en español",
    status: { production: "In production", "in-development": "In development", closed: "Archived" },
  },
  palette: {
    label: "Command palette",
    placeholder: "Search projects, sections, skills...",
    empty: "No results.",
    sections: "Sections",
    projects: "Projects",
    links: "Links",
    sendEmail: "Send email",
    downloadCv: "Download CV (PDF)",
  },
  home: {
    headline: "I build B2B platforms, integrations and AI agents",
    headlineAccent: "that run real business operations.",
    intro: (name: string) =>
      `I'm ${name}, a full stack engineer based in Cartagena, Colombia. I design APIs, databases and frontends for real B2B products — from a hotel booking platform used by 1,000+ travel agencies to a multi-tenant POS that keeps selling without internet and AI agents that automate business processes. I work directly with the operations teams and clients who use what I build.`,
    availability: "Remote · English B2 · Colombia (UTC-5), overlaps US hours · Full-time or contract",
    viewProjects: "View projects →",
    highlights: {
      lucia: "Bookings handled by Lucía, an AI agent I built",
      agencies: "Agencies on the platform I scaled",
      providers: "Providers integrated (booking, flights, payments)",
      rpa: "Accounting team's operational time (RPA)",
    },
    featured: "// featured projects",
    viewAll: "view all →",
  },
  terminal: {
    status: "Cartagena, Colombia · remote · English B2 · open to work",
  },
  projects: {
    metaTitle: "Projects",
    metaDescription:
      "Case studies by Carlos Ceballos: Lucía (AI booking agent), Booking Connect, petty cash for 13 hotels, Pargo, CATOCA, CATOCA's sales system and Caminante.",
    title: "Projects",
    intro:
      "Each case is written as a deployment: who the client was, what their operation needed, what I built, how it reached production and what happened next. Employer work lives in private repos (documented without exposing proprietary code); there are also two projects for a real client and my own products. Each file carries the extension of the stack I built it with.",
    back: "← projects/",
    employer: "company:",
    period: "period:",
    link: "link:",
    problem: "// client context",
    role: "// what I built",
    architecture: "// architecture",
    decisions: "// technical decisions",
    impact: "// impact",
    outcome: "// what happened next",
    demo: "// demo",
    screenshots: "// screenshots",
    screenshotsSoon: "screenshots on the way — added once the site is deployed",
  },
  experience: {
    metaTitle: "Experience",
    metaDescription: "Professional history of Carlos Ceballos, formatted as a git log.",
    title: "Experience",
    introAfter: " of my professional history. Click each entry to expand the details.",
    showStat: (n: number) => `git show --stat (${n} changes)`,
  },
  skills: {
    metaTitle: "Skills",
    metaDescription: "Capabilities of Carlos Ceballos: AI agents, integrations, backend, frontend and mobile, testing.",
    title: "Skills",
    intro: "Grouped by what I can do for a team, not by technology — written as if it were a dependency manifest.",
    education: "// education",
    educationItems: [
      "Systems Engineering — Universidad de Cartagena (7 semesters completed)",
      "Business Strategy Management in the Digital Era — Universidad Tecnológica de Bolívar, 2021",
      "Full Stack Development — edX, 2023",
      "Introduction to Machine Learning — Udemy, 2024",
    ],
  },
  contact: {
    metaTitle: "Contact",
    metaDescription: "Contact Carlos Ceballos by email, WhatsApp, GitHub or LinkedIn.",
    title: "Let's talk",
    intro: (location: string) =>
      `Open to Applied AI, AI integrations and full stack roles with B2B product teams. ${location} — remote, English B2, overlapping US hours. Full-time or contract.`,
    downloadCv: "↓ Download CV (PDF)",
  },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  meta: {
    description:
      "Full Stack Engineer en Cartagena, Colombia: agentes de IA e integraciones para plataformas B2B. Un agente de reservas con IA con +4.000 reservas y una plataforma para +1.000 agencias.",
    roleLong: "Full Stack Engineer · agentes de IA e integraciones para plataformas B2B",
  },
  nav: {
    home: { fileName: "home.tsx", label: "Inicio" },
    projects: { fileName: "proyectos/", label: "Proyectos" },
    experience: { fileName: "experiencia.log", label: "Experiencia" },
    skills: { fileName: "skills.json", label: "Skills" },
    contact: { fileName: "contacto.sh", label: "Contacto" },
  },
  shell: {
    toggleNav: "Mostrar/ocultar navegación",
    explorer: "EXPLORADOR",
    connect: "CONECTAR",
    downloadCv: "↓ Descargar CV",
    available: "disponible para nuevos retos",
    language: "Idioma",
    switchTo: "View in English",
    status: { production: "En producción", "in-development": "En desarrollo", closed: "Archivado" },
  },
  palette: {
    label: "Paleta de comandos",
    placeholder: "Buscar proyectos, secciones, skills...",
    empty: "Sin resultados.",
    sections: "Secciones",
    projects: "Proyectos",
    links: "Enlaces",
    sendEmail: "Enviar email",
    downloadCv: "Descargar CV (PDF)",
  },
  home: {
    headline: "Construyo plataformas B2B, integraciones y agentes de IA",
    headlineAccent: "que mueven operaciones reales.",
    intro: (name: string) =>
      `Soy ${name}, ingeniero full stack en Cartagena, Colombia. Diseño APIs, bases de datos y frontends para productos B2B reales — desde una plataforma de reservas hoteleras con más de 1.000 agencias hasta un POS multi-tenant que sigue vendiendo sin internet y agentes de IA que automatizan procesos de negocio. Trabajo directamente con los equipos de operaciones y los clientes que usan lo que construyo.`,
    availability: "Remoto · inglés B2 · Colombia (UTC-5), coincide con horario de EE. UU. · Tiempo completo o contrato",
    viewProjects: "Ver proyectos →",
    highlights: {
      lucia: "Reservas gestionadas por Lucía, un agente de IA que construí",
      agencies: "Agencias en la plataforma que escalé",
      providers: "Proveedores integrados (reservas, vuelos, pagos)",
      rpa: "Tiempo operativo del equipo contable (RPA)",
    },
    featured: "// proyectos destacados",
    viewAll: "ver todos →",
  },
  terminal: {
    status: "Cartagena, Colombia · remoto · inglés B2 · disponible",
  },
  projects: {
    metaTitle: "Proyectos",
    metaDescription:
      "Casos de estudio de Carlos Ceballos: Lucía (agente de reservas con IA), Booking Connect, caja menor para 13 hoteles, Pargo, CATOCA, el sistema de ventas de CATOCA y Caminante.",
    title: "Proyectos",
    intro:
      "Cada caso está escrito como un despliegue: quién era el cliente, qué necesitaba su operación, qué construí, cómo llegó a producción y qué pasó después. El trabajo para empleadores vive en repos privados (documentado sin exponer código propietario); también hay dos proyectos para un cliente real y productos propios. Cada archivo lleva la extensión del stack que usé para construirlo.",
    back: "← proyectos/",
    employer: "empresa:",
    period: "periodo:",
    link: "enlace:",
    problem: "// contexto del cliente",
    role: "// qué construí",
    architecture: "// arquitectura",
    decisions: "// decisiones técnicas",
    impact: "// impacto",
    outcome: "// qué pasó después",
    demo: "// demo",
    screenshots: "// capturas",
    screenshotsSoon: "capturas en camino — se agregan cuando el sitio esté desplegado",
  },
  experience: {
    metaTitle: "Experiencia",
    metaDescription: "Historial profesional de Carlos Ceballos, en formato de git log.",
    title: "Experiencia",
    introAfter: " de mi historial profesional. Haz clic en cada entrada para ver los detalles.",
    showStat: (n: number) => `git show --stat (${n} cambios)`,
  },
  skills: {
    metaTitle: "Skills",
    metaDescription: "Capacidades de Carlos Ceballos: agentes de IA, integraciones, backend, frontend y mobile, testing.",
    title: "Skills",
    intro: "Agrupado por lo que puedo hacer por un equipo, no por tecnología — escrito como si fuera un manifiesto de dependencias.",
    education: "// educación",
    educationItems: [
      "Ingeniería de Sistemas — Universidad de Cartagena (7 semestres cursados)",
      "Gestión de Estrategia de Negocios en la Era Digital — Universidad Tecnológica de Bolívar, 2021",
      "Desarrollo Full Stack — edX, 2023",
      "Introducción al Machine Learning — Udemy, 2024",
    ],
  },
  contact: {
    metaTitle: "Contacto",
    metaDescription: "Contacta a Carlos Ceballos por email, WhatsApp, GitHub o LinkedIn.",
    title: "Hablemos",
    intro: (location: string) =>
      `Disponible para roles de Applied AI, integraciones con IA y full stack en equipos de producto B2B. ${location} — remoto, inglés B2, con horario que coincide con EE. UU. Tiempo completo o contrato.`,
    downloadCv: "↓ Descargar CV (PDF)",
  },
};

const DICTIONARIES: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
