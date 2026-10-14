export type ProjectStatus = "production" | "in-development" | "closed";

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel?: string;
  col: number;
  row: number;
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
}

export interface Architecture {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  note?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  hint?: string;
}

export interface Decision {
  title: string;
  body: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  /** Captura de escritorio (16:10) en vez de pantalla de móvil (9:16). */
  landscape?: boolean;
}

export interface Project {
  slug: string;
  fileName: string;
  extensionLabel: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  statusLabel: string;
  employer?: string;
  period: string;
  summary: string;
  problem: string;
  myRole: string;
  stack: string[];
  decisions: Decision[];
  metrics: ProjectMetric[];
  architecture?: Architecture;
  gallery?: GalleryImage[];
  liveUrl?: string;
  codeNote: string;
  featured?: boolean;
}

export interface ExperienceEntry {
  hash: string;
  company: string;
  role: string;
  period: string;
  branch: string;
  bullets: string[];
  tags: string[];
}

export interface SkillCategory {
  key: string;
  label: string;
  version: string;
  items: string[];
}
