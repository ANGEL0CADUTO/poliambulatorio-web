import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
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
  title: "Poliambulatorio FKT Gemelli - Visite e Diagnostica a Castenaso",
  description: "Poliambulatorio privato e accreditato SSN a Castenaso (BO). Visite specialistiche, Ecocolordoppler, Elettromiografie, DXA, Cardiologia e Fisioterapia.",
  keywords: [
    "Poliambulatorio Castenaso",
    "Fisiatra Bologna",
    "Ecografia Castenaso",
    "Visita Neurologica Bologna",
    "Cardiologo Castenaso",
    "Ecocolordoppler Bologna",
    "Elettromiografia arti Bologna",
    "DXA MOC Castenaso",
    "Tecarterapia Bologna",
    "Ionoforesi",
    "Visita Dietologica",
    "Terapia del dolore",
    "Esami SSN Bologna",
    "Medicina Estetica Castenaso",
    "Filler Bologna",
    "Mesoterapia",
    "Pressoterapia",
    "Trattamenti cellulite Bologna"
  ],
  alternates: {
    canonical: "https://www.poliambulatorioprofgemelli.it",
  },
  openGraph: {
    title: "Poliambulatorio FKT Gemelli | Castenaso",
    description: "Visite specialistiche, Ecografie, Cardiologia e Riabilitazione a Castenaso. Accreditato SSN.",
    url: "https://www.poliambulatorioprofgemelli.it",
    siteName: "Poliambulatorio FKT Gemelli",
    images: [
      {
        url: "https://www.poliambulatorioprofgemelli.it/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Poliambulatorio FKT Gemelli Castenaso",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  verification: {
    google: "t4qgY3sESKUL7BrRi7I0TX8cZ9knT-oxj5kqbnBXyxk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Poliambulatorio Privato di FKT S.A.S.",
    "url": "https://www.poliambulatorioprofgemelli.it",
    "image": "https://www.poliambulatorioprofgemelli.it/opengraph-image.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via di Fiesso 6/6",
      "addressLocality": "Castenaso",
      "addressRegion": "BO",
      "postalCode": "40055",
      "addressCountry": "IT"
    },
    "telephone": "+39051787359",
    "email": "poliamb.gemelli@tiscali.it",
    "medicalSpecialty": ["Physiotherapy", "Cardiovascular", "Neurologic", "Ultrasound"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${playfair.variable} ${jakarta.variable} font-sans antialiased bg-background-light text-text-dark`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Script type="text/javascript" src="https://embeds.iubenda.com/widgets/318d8ac6-5ac7-4e37-8994-bfd20c0da0ca.js" />
        <Script type="text/javascript" src="https://cdn.iubenda.com/iubenda.js" />
      </body>
    </html>
  );
}
