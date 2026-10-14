import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Shell } from "@/components/ide-shell/Shell";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.role}`,
  description:
    "Portfolio de Carlos Ceballos, desarrollador web full stack. Booking Connect, gestión de caja menor multi-hotel, CATOCA y más proyectos reales.",
  metadataBase: new URL("https://carlosceballos.dev"),
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.roleLong,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jbMono.variable}`}>
      <body className="antialiased">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
