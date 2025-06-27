import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Effortless Moving
            <span className="block text-primary">and Deliveries</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Professional moving, logistics, and storage services across Ireland. Licensed, insured, and trusted by
            thousands of families and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 text-lg"
            >
              <Link href="/quote" className="flex items-center space-x-2">
                <span>Get Instant Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-sm text-gray-300">
            <p>✓ Free Quotes ✓ Same Day Service ✓ Fully Insured ✓ 5-Star Rated</p>
          </div>
        </div>
      </div>
    </section>
  )
}
