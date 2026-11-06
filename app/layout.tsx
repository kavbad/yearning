import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Yearning — For a world that’s yours.",
  description: "A quiet beginning. A world that is yours.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
