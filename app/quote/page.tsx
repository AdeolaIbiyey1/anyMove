import type { Metadata } from "next"
import QuoteForm from "@/components/QuoteForm"

export const metadata: Metadata = {
  title: "Get Free Moving Quote - AnyMove Ireland | Instant Online Estimate",
  description:
    "Get your free moving quote instantly. Professional moving services across Ireland with transparent pricing. No hidden fees, just honest estimates.",
}

export default function QuotePage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Get Your Free Moving Quote</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your move. Our transparent pricing means no surprises - just honest, competitive
            rates for professional moving services.
          </p>
        </div>
        <QuoteForm />
      </div>
    </div>
  )
}
