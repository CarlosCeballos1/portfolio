# Portfolio — Carlos Ceballos

Portfolio profesional con estética "IDE / terminal": todo el sitio vive dentro de un editor
de código simulado (tabs por sección, sidebar de explorador de archivos, paleta de comandos
con Ctrl/Cmd+K). Construido con Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 +
Framer Motion + cmdk.

## Cómo correrlo

```bash
npm install     # solo la primera vez
npm run dev     # http://localhost:3000
npm run build   # build de producción
npm run lint    # eslint
```


## Estructura

```
src/
├── app/                    # rutas (App Router)
│   ├── layout.tsx          # fuentes + <Shell> (topbar/sidebar/paleta de comandos)
│   ├── page.tsx             # Home (hero tipo terminal)
│   ├── proyectos/           # índice + [slug] con la plantilla de case study
│   ├── experiencia/         # timeline estilo `git log --graph`
│   ├── skills/               # stack como `skills.json`
│   └── contacto/
├── components/
│   ├── ide-shell/           # TopBar, Sidebar, CommandPalette, StatusBar, Shell
│   ├── terminal/             # TypingText, HeroTerminal, GitLog, DependencyList
│   └── case-study/          # StatusBadge, StackChips, StatRow, ArchitectureDiagram, Gallery, ProjectCard
├── content/                  # DATA de cada sección (texto/métricas), separada del layout
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
└── lib/
    ├── site.ts               # nombre, contacto, nav, link del CV
    └── types.ts
public/
├── cv/CV_Carlos_Ceballos_Amor.pdf
└── screenshots/              # capturas reales (caminante, pargo, catoca, ventas) en WebP
```

Para editar textos, métricas o el stack de un proyecto: **solo tocar los archivos en
`src/content/`**, no hace falta tocar los componentes visuales.

## Decisiones de diseño

- **Paleta**: fondo casi negro (`--color-bg`), accent cian (`--color-accent`) para todo lo
  interactivo, y colores de estado independientes (`status-good` = producción, `status-warning`
  = en desarrollo, `status-neutral` = archivado) para que un badge de estado nunca se confunda
  con un link. Definidos como tokens Tailwind v4 en `src/app/globals.css` (`@theme inline`).
- **Tipografía**: JetBrains Mono para el "chrome" de la UI (tabs, sidebar, labels, código) +
  Inter para el texto largo de los case studies — un portfolio 100% monoespaciado es difícil
  de leer en párrafos largos.
- **`prefers-reduced-motion`**: respetado tanto a nivel CSS global (`globals.css`) como en cada
  animación individual (`ArchitectureDiagram`, `TypingText`) — quien lo tenga activado ve el
  contenido completo sin las animaciones de tipeo/dibujo.
