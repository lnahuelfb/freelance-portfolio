import FinanzasLanding from "./landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinanzApp – Landing quirúrgica",
  description: "Visualizá tus finanzas con precisión. Sin filtros. Sin marketing.",
  icons: {
    icon: "./logo.svg",
    shortcut: "./logo.svg",
    apple: "/apple-touch-icon.png",
  }
};

export default function Page() {
  return <FinanzasLanding />;
}
