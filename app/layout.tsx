import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nietzschepath.com"),
  title: {
    default: "Nietzsche Path",
    template: "%s | Nietzsche Path",
  },
  description: "Independent visitor guide to the Chemin de Nietzsche in Eze, France.",
  openGraph: {
    title: "Nietzsche Path",
    description: "Independent visitor guide to the Chemin de Nietzsche in Eze, France.",
    url: "https://www.nietzschepath.com/",
    siteName: "Nietzsche Path",
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
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
