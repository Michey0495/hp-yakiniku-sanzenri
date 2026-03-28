import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";

const BASE_URL = "https://hp-yakiniku-sanzenri.vercel.app";

export const metadata: Metadata = {
  title: "炭火焼肉 三千里 | 北海道釧路市の焼肉店",
  description:
    "北海道釧路市益浦の炭火焼肉 三千里。炭火で丁寧に焼き上げる本格焼肉。35席、全席禁煙、駐車場10台完備。水曜〜日曜 17:00-21:00営業。",
  keywords: ["焼肉", "炭火焼肉", "三千里", "釧路", "北海道", "益浦"],
  openGraph: {
    title: "炭火焼肉 三千里 | 北海道釧路市の焼肉店",
    description:
      "炭火で丁寧に焼き上げる本格焼肉。35席、全席禁煙、駐車場10台完備。",
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    images: [
      {
        url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "炭火焼肉 三千里",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "炭火焼肉 三千里 | 北海道釧路市の焼肉店",
    description:
      "炭火で丁寧に焼き上げる本格焼肉。35席、全席禁煙、駐車場10台完備。",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=630&fit=crop&q=80",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "炭火焼肉 三千里",
  image:
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=630&fit=crop&q=80",
  url: BASE_URL,
  telephone: "0154-91-3695",
  address: {
    "@type": "PostalAddress",
    streetAddress: "益浦2-18-5",
    addressLocality: "釧路市",
    addressRegion: "北海道",
    postalCode: "",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.955,
    longitude: 144.381,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:00",
      closes: "21:00",
    },
  ],
  servesCuisine: "焼肉",
  priceRange: "$$",
  smokingAllowed: false,
  acceptsReservations: true,
  hasMenu: `${BASE_URL}/menu`,
  numberOfEmployees: { "@type": "QuantitativeValue" },
  maximumAttendeeCapacity: 35,
  parkingFacility: {
    "@type": "ParkingFacility",
    totalCapacity: { "@type": "QuantitativeValue", value: 10 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
