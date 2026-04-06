import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "El broker más transparente — Lista de espera",
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
    title: "El broker más transparente — Lista de espera",
    description:
      "Invierte sin letra pequeña. Protege tus posiciones con claridad total — sin comisiones ocultas, sin jerga innecesaria.",
    type: "website",
    locale: "es_ES",
    siteName: "ApexTrade",
  },
  twitter: {
    card: "summary_large_image",
    title: "El broker más transparente — Lista de espera",
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
      <body className="min-h-screen bg-[#0c0c0d] text-[#f0f0f0]">{children}</body>
    </html>
  );
}
