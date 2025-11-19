import type { Metadata } from "next";
import Landing from "./landing";

export const metadata: Metadata = {
  title: "Ramen Izanami – Ramen japonés auténtico en Buenos Aires",
  description:
    "Ramen Izanami ofrece ramen artesanal en Buenos Aires: caldos cocidos por horas, fideos hechos a mano y una experiencia inspirada en los izakaya de Tokio.",
  icons: {
    icon: "/ramen-logo.svg",
    shortcut: "/ramen-logo.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ramen Izanami – Ramen japonés auténtico en Buenos Aires",
    description:
      "Descubrí el verdadero ramen japonés en Buenos Aires. Caldos profundos, fideos frescos y ambientación inspirada en Japón.",
    url: "https://nahuelfb.dev/landing/ramen",
    siteName: "Ramen Izanami",
    images: [
      {
        url: "/ramen-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Ramen Izanami – ramen japonés en Buenos Aires",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramen Izanami – Ramen japonés auténtico en Buenos Aires",
    description:
      "Caldos cocidos por horas, fideos hechos a mano y ambientación japonesa en Buenos Aires.",
    images: ["/ramen-bg.jpg"],
  },
};
 
export default function Page() {
  return <Landing />;
}
