import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const BASE_URL = "https://www.anymoveireland.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AnyMove Ireland - Professional Moving & Storage Services | Lucan, Dublin",
    template: "%s | AnyMove Ireland",
  },
  description:
    "Effortless Moving and Deliveries across Ireland. Based in Lucan, Co. Dublin. Residential, commercial, and long-distance moves. Get your free instant quote today!",
  keywords: [
    "moving company Ireland",
    "removals Dublin",
    "house removals Lucan",
    "storage Lucan Dublin",
    "office removals Ireland",
    "long distance moving Ireland",
    "professional movers Dublin",
    "furniture removal Ireland",
    "packing services Dublin",
  ],
  authors: [{ name: "AnyMove Ireland", url: BASE_URL }],
  creator: "AnyMove Ireland",
  publisher: "AnyMove Ireland",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "AnyMove Ireland - Effortless Moving and Deliveries",
    description:
      "Professional moving and storage services across Ireland. Based in Lucan, Co. Dublin. Get your free quote today!",
    url: BASE_URL,
    siteName: "AnyMove Ireland",
    type: "website",
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnyMove Ireland - Professional Moving & Storage Services",
    description:
      "Professional moving and storage services across Ireland. Based in Lucan, Co. Dublin. Get your free quote today!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "AnyMove Ireland",
  url: BASE_URL,
  description:
    "Professional moving and storage services across Ireland. Residential, commercial, and long-distance moves.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Citygate Business Centre",
    addressLocality: "Lucan",
    addressRegion: "Co. Dublin",
    addressCountry: "IE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.3593,
    longitude: -6.4484,
  },
  areaServed: {
    "@type": "Country",
    name: "Ireland",
  },
  serviceArea: {
    "@type": "AdministrativeArea",
    name: "Ireland",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Toaster />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
