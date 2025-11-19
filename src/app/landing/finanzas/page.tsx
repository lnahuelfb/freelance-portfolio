import FinanzasLanding from "./landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinanzApp – App de finanzas personales con trazabilidad real",
  description:
    "FinanzApp es la app de finanzas personales que te permite controlar ingresos, gastos y objetivos de ahorro con trazabilidad y privacidad real. Sin marketing, sin humo.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "FinanzApp – App de finanzas personales con trazabilidad real",
    description:
      "Controlá ingresos, gastos y objetivos de ahorro con FinanzApp. Privacidad garantizada.",
    url: "https://nahuelfb.dev/landing/finanzas",
    siteName: "FinanzApp",
    images: [
      {
        url: "/og-finanzapp.png",
        width: 1200,
        height: 630,
        alt: "FinanzApp – App de finanzas personales",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinanzApp – App de finanzas personales con trazabilidad real",
    description:
      "Visualizá tus finanzas con precisión y privacidad. Sin marketing.",
    images: ["/og-finanzapp.png"],
  },
};

export default function Page() {
  return <FinanzasLanding />;
}
