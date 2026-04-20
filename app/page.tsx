import type { Metadata } from "next"
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "AnyMove Ireland - Professional Moving & Storage Services | Lucan, Dublin",
  description:
    "Effortless Moving and Deliveries across Ireland. Based in Lucan, Co. Dublin. Residential, commercial, and long-distance moves. Get your free instant quote today!",
  alternates: { canonical: "https://www.anymoveireland.com" },
  openGraph: {
    title: "AnyMove Ireland - Professional Moving & Storage Services",
    description:
      "Effortless Moving and Deliveries across Ireland. Based in Lucan, Co. Dublin. Get your free quote today!",
    url: "https://www.anymoveireland.com",
    type: "website",
  },
}
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
