import type { Metadata } from "next"
import Link from "next/link"
import { Home, CheckCircle, Clock, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Residential Moving Services Ireland - Home Moves | AnyMove",
  description:
    "Professional residential moving services across Ireland. From apartments to family homes, we handle your move with care. Free quotes available.",
}

export default function ResidentialMovesPage() {
  const processSteps = [
    {
      step: 1,
      title: "Free Consultation",
      description: "We visit your home for a detailed assessment and provide a transparent quote.",
    },
    {
      step: 2,
      title: "Planning & Preparation",
      description: "We create a customized moving plan and schedule that works for your timeline.",
    },
    {
      step: 3,
      title: "Packing & Loading",
      description: "Our trained team carefully packs and loads your belongings with professional equipment.",
    },
    {
      step: 4,
      title: "Safe Transport",
      description: "Your items are securely transported in our modern, GPS-tracked vehicles.",
    },
    {
      step: 5,
      title: "Delivery & Setup",
      description: "We unload, unpack, and help set up your new home exactly as you want it.",
    },
  ]

  const features = [
    "Free in-home estimates",
    "Professional packing services",
    "Furniture disassembly/assembly",
    "Appliance disconnection/connection",
    "Fragile item protection",
    "Storage solutions available",
    "Same-day service available",
    "Weekend and evening moves",
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Home className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Residential Moving Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Moving home should be exciting, not stressful. Our professional residential moving services handle
            everything from studio apartments to large family homes across Ireland.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Fully Licensed</h3>
            <p className="text-gray-600 text-sm">Authorized and insured for your peace of mind</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">On-Time Service</h3>
            <p className="text-gray-600 text-sm">We respect your schedule and arrive punctually</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Fully Insured</h3>
            <p className="text-gray-600 text-sm">Comprehensive coverage for your belongings</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Users className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Expert Team</h3>
            <p className="text-gray-600 text-sm">Trained professionals with years of experience</p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Moving Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've perfected our process to ensure your residential move is smooth and stress-free.
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
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Types of Homes We Move</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Studio and 1-bedroom apartments</li>
              <li>• 2-3 bedroom houses and townhomes</li>
              <li>• Large family homes (4+ bedrooms)</li>
              <li>• Condominiums and penthouses</li>
              <li>• Senior living relocations</li>
              <li>• Student housing moves</li>
              <li>• Temporary housing transitions</li>
            </ul>
          </div>
        </div>

        {/* Pricing Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-navy-900">Transparent Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Studio/1 Bedroom</h4>
                <p className="text-3xl font-bold text-primary mb-2">From €200</p>
                <p className="text-gray-600 text-sm">Local moves within same county</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">2-3 Bedroom</h4>
                <p className="text-3xl font-bold text-primary mb-2">From €400</p>
                <p className="text-gray-600 text-sm">Local moves within same county</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">4+ Bedroom</h4>
                <p className="text-3xl font-bold text-primary mb-2">From €600</p>
                <p className="text-gray-600 text-sm">Local moves within same county</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              *Prices vary based on distance, services, and specific requirements. Free quotes available.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Move Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get your free, no-obligation quote today and let us make your residential move stress-free.
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
