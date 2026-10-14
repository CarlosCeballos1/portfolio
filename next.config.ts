import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // The site used to live in Spanish at the root: keep those links working.
  async redirects() {
    return [
      { source: "/proyectos", destination: "/es/projects", permanent: true },
      { source: "/proyectos/:slug", destination: "/es/projects/:slug", permanent: true },
      { source: "/experiencia", destination: "/es/experience", permanent: true },
      { source: "/contacto", destination: "/es/contact", permanent: true },
    ];
  },
};

export default nextConfig;
