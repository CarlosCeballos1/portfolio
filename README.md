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


## Idiomas

El sitio es bilingüe: **inglés es el idioma principal** (en `/`) y el español vive bajo `/es`
(`/es/projects/pargo`, por ejemplo). El selector `EN | ES` de la barra superior cambia de idioma
en la misma página.

- `src/proxy.ts` sirve el inglés sin prefijo (reescribe `/projects` → `/en/projects`) y
  redirige `/en/...` a la URL sin prefijo.
- Las URLs viejas en español (`/proyectos`, `/experiencia`, `/contacto`) redirigen a su
  equivalente bajo `/es` (ver `next.config.ts`).
- Textos de la interfaz: `src/i18n/dictionary.ts`. Contenido: `src/content/`, donde cada texto
  se escribe como string (igual en ambos idiomas) o como `{ en: "...", es: "..." }`.

## Estructura

```
src/
├── proxy.ts                # idioma por URL (inglés en la raíz, español en /es)
├── app/
│   ├── globals.css
│   └── [lang]/              # todas las rutas, una vez por idioma
│       ├── layout.tsx       # <html lang>, fuentes, <LocaleProvider> + <Shell>
│       ├── page.tsx         # Home (hero tipo terminal)
│       ├── projects/        # índice + [slug] con la plantilla de case study
│       ├── experience/      # timeline estilo `git log --graph`
│       ├── skills/          # stack como `skills.json`
│       └── contact/
├── components/
│   ├── ide-shell/           # TopBar, LanguageSwitch, Sidebar, CommandPalette, StatusBar, Shell
│   ├── terminal/            # TypingText, HeroTerminal, GitLog, DependencyList
│   └── case-study/          # StatusBadge, StackChips, StatRow, ArchitectureDiagram, Gallery, ProjectCard
├── content/                 # DATA de cada sección (texto/métricas) en ambos idiomas
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
├── i18n/
│   ├── config.ts            # idiomas, URLs por idioma y `localize()`
│   ├── dictionary.ts        # textos de la interfaz en/es
│   └── LocaleProvider.tsx   # idioma, textos y proyectos para los componentes cliente
└── lib/
    ├── site.ts              # nombre, contacto, rutas del nav, link del CV
    └── types.ts
public/
├── cv/CV_Carlos_Ceballos_Amor.pdf
└── screenshots/             # capturas reales (pargo, catoca, ventas) en WebP
```

Para editar textos, métricas o el stack de un proyecto: **solo tocar los archivos en
`src/content/`** (y `src/i18n/dictionary.ts` para la interfaz), sin tocar los componentes.

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
