import type { Metadata } from "next"
import VirtualTour from "@/components/VirtualTour"
import Link from "next/link"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Virtual Office Tour - AnyMove Ireland | Citygate Business Centre",
  description:
    "Take a 360° virtual tour of our professional office at Citygate Business Centre, Lucan. See our facilities before you visit.",
}

export default function VirtualTourPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Button asChild variant="outline" className="mr-4 bg-transparent">
              <Link href="/contact" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Contact</span>
              </Link>
            </Button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Virtual Office Tour</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a 360° tour of our professional office at Citygate Business Centre. Get familiar with our facilities
            before your visit.
          </p>
        </div>

        {/* Virtual Tour Component */}
        <VirtualTour />

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Ready to Visit Us?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Now that you've seen our office, we'd love to meet you in person. Contact us to schedule your free moving
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-black">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+353831673653" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:info@anymove.ie" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email Us</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
