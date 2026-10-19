import { ImageResponse } from "next/og";
import { LOCALES, toLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { SITE } from "@/lib/site";

// Link preview card (LinkedIn, WhatsApp, Slack...). Same palette as globals.css.
const COLORS = {
  bg: "#0a0e14",
  panel: "#10151d",
  ink: "#eef2f6",
  inkSecondary: "#a6b0bd",
  inkMuted: "#6b7686",
  accent: "#5eead4",
};

const STATS = {
  en: [
    { value: "1,000+", label: "travel agencies on Booking Connect" },
    { value: "4,000+", label: "bookings handled by my AI agent" },
    { value: "3+", label: "years shipping production systems" },
  ],
  es: [
    { value: "+1.000", label: "agencias de viaje en Booking Connect" },
    { value: "+4.000", label: "reservas gestionadas por mi agente de IA" },
    { value: "+3", label: "años construyendo sistemas en producción" },
  ],
};

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const locale = toLocale((await params).lang);
  const t = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: COLORS.bg,
          color: COLORS.ink,
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: "#fa5f57" }} />
          <div style={{ width: 16, height: 16, borderRadius: 8, background: "#fdbc40" }} />
          <div style={{ width: 16, height: 16, borderRadius: 8, background: "#33c749" }} />
          <div style={{ marginLeft: 16, fontSize: 24, color: COLORS.inkMuted }}>carlos@portfolio: ~</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, color: COLORS.accent }}>{"$ whoami"}</div>
          <div style={{ marginTop: 12, fontSize: 76, fontWeight: 700, letterSpacing: -1 }}>{SITE.fullName}</div>
          <div style={{ marginTop: 8, fontSize: 34, color: COLORS.inkSecondary }}>{t.meta.roleLong}</div>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          {STATS[locale].map((stat) => (
            <div
              key={stat.value}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "20px 24px",
                borderRadius: 12,
                background: COLORS.panel,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ fontSize: 44, fontWeight: 700, color: COLORS.accent }}>{stat.value}</div>
              <div style={{ marginTop: 4, fontSize: 22, color: COLORS.inkSecondary }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: COLORS.inkMuted }}>
          <div>{SITE.location}</div>
          <div style={{ color: COLORS.ink }}>{SITE.domain}</div>
        </div>
      </div>
    ),
    size,
  );
}
