import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chemin de Nietzsche | Nietzsche Path",
  description: "Guide to Chemin de Nietzsche (Nietzsche Trail) in Èze, France. A minimalist guide with essential info.",
  openGraph: {
    title: "Chemin de Nietzsche | Nietzsche Path",
    description: "Guide to Chemin de Nietzsche (Nietzsche Trail) in Èze, France.",
    url: "https://www.nietzschepath.com/",
    siteName: "Chemin de Nietzsche",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}