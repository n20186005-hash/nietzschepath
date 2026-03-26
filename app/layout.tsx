import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nietzschepath.com'),
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
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/',
      'en': '/en',
      'zh': '/zh',
      'x-default': '/',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}