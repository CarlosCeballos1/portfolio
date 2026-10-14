export const SITE = {
  name: "Carlos Ceballos",
  fullName: "Carlos Daniel Ceballos Amor",
  role: "Full Stack Developer",
  location: "Cartagena, Colombia",
  email: "carlosdceballos30@gmail.com",
  phoneDisplay: "+57 320 319 8734",
  whatsapp: "https://wa.me/573203198734",
  github: "https://github.com/CarlosCeballos1",
  linkedin: "https://www.linkedin.com/in/carlosceballosamor",
  cvHref: "/cv/CV_Carlos_Ceballos_Amor.pdf",
  yearsExperience: 3,
} as const;

export type NavKey = "home" | "projects" | "experience" | "skills" | "contact";

/** Route paths shared by both languages; labels and file names live in the dictionary. */
export const NAV_ITEMS: { key: NavKey; path: string }[] = [
  { key: "home", path: "/" },
  { key: "projects", path: "/projects" },
  { key: "experience", path: "/experience" },
  { key: "skills", path: "/skills" },
  { key: "contact", path: "/contact" },
];
