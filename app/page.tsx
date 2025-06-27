import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      <h1>Hello</h1>
      <Hero />
      <TrustBadges />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
