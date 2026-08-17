import type { Metadata, Viewport } from "next";
import "@fontsource/caveat/500.css";
import "@fontsource/special-elite";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prépositions françaises",
  description: "Un cahier interactif pour pratiquer les prépositions françaises.",
  other: { "codex-preview": "development" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
