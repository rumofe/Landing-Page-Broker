import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/logo.png", apple: "/logo.png" },
  title: "Wrap — El broker más transparente",
  description:
    "Invierte sin letra pequeña. Ve exactamente cuánto ganas, cuánto arriesgas y cuándo — antes de ejecutar. Únete a la lista de acceso anticipado.",
  keywords: [
    "broker opciones",
    "broker transparente",
    "broker sin comisiones ocultas",
    "inversión simple",
    "cobertura posiciones",
    "broker acceso anticipado",
  ],
  openGraph: {
    title: "Wrap — El broker más transparente",
    description:
      "Invierte sin letra pequeña. Protege tus posiciones con claridad total — sin comisiones ocultas, sin jerga innecesaria.",
    type: "website",
    locale: "es_ES",
    siteName: "Wrap",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrap — El broker más transparente",
    description:
      "Invierte sin letra pequeña. Protege tus posiciones con claridad total.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
