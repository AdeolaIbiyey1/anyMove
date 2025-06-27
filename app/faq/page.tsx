import type { Metadata } from "next"
import FAQAccordion from "@/components/FAQAccordion"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - AnyMove Ireland | Moving FAQ",
  description:
    "Get answers to common questions about our moving services. Learn about pricing, insurance, booking, and what to expect on moving day.",
}

export default function FAQPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our moving services. Can't find what you're looking for?
            Contact us directly.
          </p>
        </div>
        <FAQAccordion />
      </div>
    </div>
  )
}
