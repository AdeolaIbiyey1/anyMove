import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "AnyMove Ireland - Professional Moving & Storage Services | Lucan, Dublin",
  description:
    "Effortless Moving and Deliveries across Ireland. Based in Lucan, Co. Dublin. Residential, commercial, and long-distance moves. Get your instant quote today!",
  keywords: "moving company Ireland, removals Dublin, storage Lucan, logistics Ireland, professional movers",
  authors: [{ name: "AnyMove Ireland" }],
  openGraph: {
    title: "AnyMove Ireland - Effortless Moving and Deliveries",
    description: "Effortless Moving and Deliveries. Professional moving services across Ireland.",
    type: "website",
    locale: "en_IE",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
