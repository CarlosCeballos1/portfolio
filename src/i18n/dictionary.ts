import type { Locale } from "./config";

const en = {
  meta: {
    description:
      "Portfolio of Carlos Ceballos, full stack web developer. Booking Connect, Pargo, CATOCA and more real-world projects.",
    roleLong: "Full Stack Web Developer — Frontend · Backend · Mobile",
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
    headline: "I build software that scales,",
    headlineAccent: "from the database to the interface.",
    intro: (name: string) =>
      `I'm ${name}, a full stack developer based in Cartagena, Colombia. I design APIs, databases and frontends for real B2B products — from a hotel booking platform used by 1,000+ travel agencies to a multi-tenant POS that keeps selling without internet and AI agents that automate business processes.`,
    viewProjects: "View projects →",
    highlights: {
      years: "Years of experience",
      agencies: "Agencies on Booking Connect",
      rpa: "Operational time saved with RPA",
      hotels: "Hotels on the petty cash system",
    },
    featured: "// featured projects",
    viewAll: "view all →",
  },
  terminal: {
    status: (years: number) => `${years}+ years of experience · Cartagena, Colombia (remote)`,
  },
  projects: {
    metaTitle: "Projects",
    metaDescription:
      "Technical case studies by Carlos Ceballos: Booking Connect, Pargo, CATOCA, CATOCA's sales system, petty cash management and Caminante.",
    title: "Projects",
    intro:
      "Professional work in private employer repos (documented in depth, without exposing proprietary code), two projects for a real client (one already in production) and my own projects, including a SaaS POS in development. Each file carries the extension of the stack I built it with.",
    back: "← projects/",
    employer: "company:",
    period: "period:",
    link: "link:",
    problem: "// problem",
    role: "// my role",
    architecture: "// architecture",
    decisions: "// technical decisions",
    impact: "// impact",
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
    metaDescription: "Technical stack of Carlos Ceballos: frontend, backend, mobile, data, AI and tooling.",
    title: "Skills",
    intro: "The stack I build with in production, grouped as if it were a dependency manifest.",
    education: "// education",
    educationItems: [
      "Systems Engineering (in progress) — Universidad de Cartagena",
      "Business Strategy Management in the Digital Era — Universidad Tecnológica de Bolívar, 2021",
      "Full Stack Development — edX, 2023",
      "Introduction to Machine Learning — Udemy, 2024",
    ],
  },
  contact: {
    metaTitle: "Contact",
    metaDescription: "Contact Carlos Ceballos by email, WhatsApp, GitHub or LinkedIn.",
    title: "Let's talk",
    intro: (location: string) => `Available for full stack, backend or mobile roles. ${location} — remote work.`,
    downloadCv: "↓ Download CV (PDF)",
  },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  meta: {
    description:
      "Portafolio de Carlos Ceballos, desarrollador web full stack. Booking Connect, Pargo, CATOCA y más proyectos reales.",
    roleLong: "Desarrollador Web Full Stack — Frontend · Backend · Mobile",
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
    headline: "Construyo software que escala,",
    headlineAccent: "de la base de datos a la interfaz.",
    intro: (name: string) =>
      `Soy ${name}, desarrollador full stack en Cartagena, Colombia. Diseño APIs, bases de datos y frontends para productos B2B reales — desde una plataforma de reservas hoteleras con más de 1.000 agencias hasta un POS multi-tenant que sigue vendiendo sin internet y agentes de IA que automatizan procesos de negocio.`,
    viewProjects: "Ver proyectos →",
    highlights: {
      years: "Años de experiencia",
      agencies: "Agencias en Booking Connect",
      rpa: "Tiempo operativo ahorrado con RPA",
      hotels: "Hoteles con caja menor",
    },
    featured: "// proyectos destacados",
    viewAll: "ver todos →",
  },
  terminal: {
    status: (years: number) => `${years}+ años de experiencia · Cartagena, Colombia (remoto)`,
  },
  projects: {
    metaTitle: "Proyectos",
    metaDescription:
      "Casos de estudio técnicos de Carlos Ceballos: Booking Connect, Pargo, CATOCA, el sistema de ventas de CATOCA, gestión de caja menor y Caminante.",
    title: "Proyectos",
    intro:
      "Trabajo profesional en repos privados de empleadores (documentado a fondo, sin exponer código propietario), dos proyectos para un cliente real (uno ya en producción) y proyectos propios, entre ellos un SaaS POS en desarrollo. Cada archivo lleva la extensión del stack que usé para construirlo.",
    back: "← proyectos/",
    employer: "empresa:",
    period: "periodo:",
    link: "enlace:",
    problem: "// problema",
    role: "// mi rol",
    architecture: "// arquitectura",
    decisions: "// decisiones técnicas",
    impact: "// impacto",
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
    metaDescription: "Stack técnico de Carlos Ceballos: frontend, backend, mobile, datos, IA y herramientas.",
    title: "Skills",
    intro: "El stack con el que construyo en producción, agrupado como si fuera un manifiesto de dependencias.",
    education: "// educación",
    educationItems: [
      "Ingeniería de Sistemas (en curso) — Universidad de Cartagena",
      "Gestión de Estrategia de Negocios en la Era Digital — Universidad Tecnológica de Bolívar, 2021",
      "Desarrollo Full Stack — edX, 2023",
      "Introducción al Machine Learning — Udemy, 2024",
    ],
  },
  contact: {
    metaTitle: "Contacto",
    metaDescription: "Contacta a Carlos Ceballos por email, WhatsApp, GitHub o LinkedIn.",
    title: "Hablemos",
    intro: (location: string) => `Disponible para roles full stack, backend o mobile. ${location} — trabajo remoto.`,
    downloadCv: "↓ Descargar CV (PDF)",
  },
};

const DICTIONARIES: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
