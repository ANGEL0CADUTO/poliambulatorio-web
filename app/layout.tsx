import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Poliambulatorio FKT Gemelli - Salute e Riabilitazione a Castenaso",
  description: "Fisioterapia, visite specialistiche e diagnostica a Castenaso. Centro accreditato SSN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${playfair.variable} ${jakarta.variable} font-sans antialiased bg-background-light text-text-dark`}>
        {children}
      </body>
    </html>
  );
}
