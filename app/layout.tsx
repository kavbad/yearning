import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Yearning — For a world that’s yours.",
  description: "A quiet beginning. A world that is yours.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/materials/yearning-ink.webp" as="image" />
        <link
          rel="preload"
          href="/materials/watercolor-bloom.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/materials/cotton-paper.webp"
          as="image"
          media="(min-width: 601px)"
        />
        <link
          rel="preload"
          href="/materials/cotton-paper-mobile.webp"
          as="image"
          media="(max-width: 600px)"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
