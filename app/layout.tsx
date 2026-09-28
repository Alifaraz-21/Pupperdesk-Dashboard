import type { Metadata } from "next";
import { Nunito, Fraunces } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pupper Desk Dashboard",
  description: "Pupper Desk admin dashboard — static frontend preview.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${fraunces.variable} antialiased`}>
      <body className="bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
