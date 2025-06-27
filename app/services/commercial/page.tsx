import type { Metadata } from "next"
import Link from "next/link"
import { Building, CheckCircle, Clock, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Commercial Moving Services Ireland - Office Relocations | AnyMove",
  description:
    "Professional commercial moving services across Ireland. Office relocations, business moves with minimal downtime. Free quotes available.",
}

export default function CommercialMovesPage() {
  const processSteps = [
    {
      step: 1,
      title: "Business Assessment",
      description: "We evaluate your office space, equipment, and specific business requirements.",
    },
    {
      step: 2,
      title: "Relocation Planning",
      description: "Detailed timeline and logistics plan to minimize business disruption.",
    },
    {
      step: 3,
      title: "After-Hours Execution",
      description: "Most moves completed outside business hours to maintain operations.",
    },
    {
      step: 4,
      title: "Secure Transport",
      description: "Professional handling of sensitive equipment and confidential documents.",
    },
    {
      step: 5,
      title: "Setup & Testing",
      description: "Complete setup and testing of equipment at your new location.",
    },
  ]

  const features = [
    "Free business consultations",
    "After-hours and weekend moves",
    "IT equipment handling",
    "Confidential document security",
    "Furniture disassembly/assembly",
    "Minimal business disruption",
    "Project management included",
    "Insurance for business assets",
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Building className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Commercial Moving Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Minimize downtime and maximize efficiency with our professional commercial moving services. We understand
            that time is money in business, and we're here to keep you operational.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Fully Licensed</h3>
            <p className="text-gray-600 text-sm">Authorized for commercial operations</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Minimal Downtime</h3>
            <p className="text-gray-600 text-sm">Strategic planning to keep you operational</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Secure Handling</h3>
            <p className="text-gray-600 text-sm">Confidential and sensitive item protection</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Users className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Expert Team</h3>
            <p className="text-gray-600 text-sm">Specialized in commercial relocations</p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Commercial Moving Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've perfected our process to ensure your business move is efficient and disruption-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-black rounded-full font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Included */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Types of Businesses We Move</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Small to medium offices</li>
              <li>• Corporate headquarters</li>
              <li>• Medical and dental practices</li>
              <li>• Law firms and professional services</li>
              <li>• Retail stores and showrooms</li>
              <li>• Warehouses and distribution centers</li>
              <li>• Manufacturing facilities</li>
            </ul>
          </div>
        </div>

        {/* Pricing Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-navy-900">Commercial Moving Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Small Office</h4>
                <p className="text-3xl font-bold text-primary mb-2">From €500</p>
                <p className="text-gray-600 text-sm">Up to 10 workstations</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Medium Office</h4>
                <p className="text-3xl font-bold text-primary mb-2">From €1,200</p>
                <p className="text-gray-600 text-sm">10-50 workstations</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Large Office</h4>
                <p className="text-3xl font-bold text-primary mb-2">Custom Quote</p>
                <p className="text-gray-600 text-sm">50+ workstations</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              *Prices vary based on complexity, timing, and specific requirements. Free consultations available.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Relocate Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get your free commercial moving consultation today and let us handle your business relocation with minimal
            disruption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white bg-transparent"
            >
              <Link href="tel:+353831673653">Call Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
