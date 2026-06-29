import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: false,
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Hamster Software | Ingeniería de Datos y Soluciones de Software",
  description:
    "Arquitectamos e implementamos pipelines de datos robustos, aplicaciones móviles, ML y soluciones web personalizadas. Solicita tu cotización hoy.",
  openGraph: {
    title: "Hamster Software | Ingeniería de Datos y Soluciones de Software",
    description:
      "Desde Popayán, transformamos datos en decisiones. Pipelines robustos, ML, desarrollo web y móvil.",
    type: "website",
    locale: "es_MX",
  },
};

import ChatWidget from "@/components/ChatWidget";
import Script from "next/script";

import CustomCursor from "@/components/CustomCursor";
import ContextMenu from "@/components/ContextMenu";
import SplashScreen from "@/components/SplashScreen";
import ConsoleMessage from "@/components/ConsoleMessage";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fredoka.variable} ${nunito.variable}`} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        style={{
          fontFamily: "var(--font-body), 'Nunito', sans-serif",
        }}
      >
        <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `
<!-- 
  _    _                     _              _____        __ _                          
 | |  | |                   | |            / ____|      / _| |                         
 | |__| | __ _ _ __ ___  ___| |_ ___ _ __ | (___   ___ | |_| |___      ____ _ _ __ ___ 
 |  __  |/ _\` | '_ \` _ \\/ __| __/ _ \\ '__| \\___ \\ / _ \\|  _| __\\ \\ /\\ / / _\` | '__/ _ \\
 | |  | | (_| | | | | | \\__ \\ ||  __/ |    ____) | (_) | | | |_ \\ V  V / (_| | | |  __/
 |_|  |_|\\__,_|_| |_| |_|___/\\__\\___|_|   |_____/ \\___/|_|  \\__| \\_/\\_/ \\__,_|_|  \\___|
-->
        `}} />
        <ConsoleMessage />
        <SplashScreen />
        <CustomCursor />
        <ContextMenu />
        <div id="google_translate_element"></div>
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'es',
                  includedLanguages: 'es,en,pt,fr,de,ru,zh-CN',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
