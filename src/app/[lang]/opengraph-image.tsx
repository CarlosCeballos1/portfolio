import { ImageResponse } from "next/og";
import { LOCALES, toLocale } from "@/i18n/config";
import { SITE } from "@/lib/site";

// Link preview card (LinkedIn, WhatsApp, Slack...). Same palette as globals.css.
// LinkedIn shows it at roughly a third of its size, so every text is large and short.
const COLORS = {
  bg: "#0a0e14",
  panel: "#10151d",
  ink: "#eef2f6",
  inkSecondary: "#a6b0bd",
  accent: "#5eead4",
};

const COPY = {
  en: {
    role: "Full Stack Developer · AI Agents",
    stats: [
      { value: "1,000+", label: "travel agencies" },
      { value: "4,000+", label: "AI agent bookings" },
      { value: "3+", label: "years shipping" },
    ],
  },
  es: {
    role: "Desarrollador Full Stack · Agentes de IA",
    stats: [
      { value: "+1.000", label: "agencias de viaje" },
      { value: "+4.000", label: "reservas con IA" },
      { value: "+3", label: "años creando" },
    ],
  },
};

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const copy = COPY[toLocale((await params).lang)];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 76px",
          background: COLORS.bg,
          color: COLORS.ink,
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 34, color: COLORS.accent }}>{`$ ${SITE.domain}`}</div>
          <div style={{ marginTop: 18, fontSize: 92, letterSpacing: -2, lineHeight: 1 }}>{SITE.name}</div>
          <div style={{ marginTop: 18, fontSize: 46, color: COLORS.inkSecondary }}>{copy.role}</div>
        </div>

        <div style={{ display: "flex", gap: 24 }}>
          {copy.stats.map((stat) => (
            <div
              key={stat.value}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "24px 30px",
                borderRadius: 16,
                background: COLORS.panel,
                border: "2px solid rgba(94,234,212,0.25)",
              }}
            >
              <div style={{ fontSize: 76, color: COLORS.accent, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ marginTop: 10, fontSize: 32, color: COLORS.ink }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
