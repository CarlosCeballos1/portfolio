import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Shell } from "@/components/ide-shell/Shell";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { LOCALES, isLocale, localizedHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { getProjects } from "@/content/projects";
import { SITE } from "@/lib/site";
import "../globals.css";

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

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: `${SITE.name} — ${SITE.role}`,
    description: t.meta.description,
    metadataBase: new URL("https://carlosceballos.dev"),
    alternates: {
      canonical: localizedHref(lang, "/"),
      languages: { en: localizedHref("en", "/"), es: localizedHref("es", "/") },
    },
    openGraph: {
      title: `${SITE.name} — ${SITE.role}`,
      description: t.meta.roleLong,
      type: "website",
      locale: lang === "en" ? "en_US" : "es_CO",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${inter.variable} ${jbMono.variable}`}>
      <body className="antialiased">
        <LocaleProvider locale={lang} projects={getProjects(lang)}>
          <Shell>{children}</Shell>
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
