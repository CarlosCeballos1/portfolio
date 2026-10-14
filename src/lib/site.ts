export const SITE = {
  name: "Carlos Ceballos",
  fullName: "Carlos Daniel Ceballos Amor",
  role: "Full Stack Developer",
  roleLong: "Desarrollador Web Full Stack — Frontend · Backend · Mobile",
  location: "Cartagena, Colombia",
  email: "carlosdceballos30@gmail.com",
  phoneDisplay: "+57 320 319 8734",
  whatsapp: "https://wa.me/573203198734",
  github: "https://github.com/CarlosCeballos1",
  linkedin: "https://www.linkedin.com/in/carlosceballosamor",
  cvHref: "/cv/CV_Carlos_Ceballos_Amor.pdf",
  yearsExperience: 3,
} as const;

export interface NavTab {
  href: string;
  fileName: string;
  label: string;
}

export const NAV_TABS: NavTab[] = [
  { href: "/", fileName: "home.tsx", label: "Inicio" },
  { href: "/proyectos", fileName: "proyectos/", label: "Proyectos" },
  { href: "/experiencia", fileName: "experiencia.log", label: "Experiencia" },
  { href: "/skills", fileName: "skills.json", label: "Skills" },
  { href: "/contacto", fileName: "contacto.sh", label: "Contacto" },
];
