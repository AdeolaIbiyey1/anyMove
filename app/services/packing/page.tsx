import type { Metadata } from "next"
import Link from "next/link"
import { Package, CheckCircle, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Professional Packing Services Ireland - Expert Packers | AnyMove",
  description:
    "Professional packing and unpacking services across Ireland. Quality materials, expert techniques, fragile item protection. Free quotes available.",
}

export default function PackingServicesPage() {
  const processSteps = [
    {
      step: 1,
      title: "Assessment",
      description: "We assess your items and determine the best packing approach and materials needed.",
    },
    {
      step: 2,
      title: "Material Preparation",
      description: "High-quality packing materials are prepared and organized for efficient packing.",
    },
    {
      step: 3,
      title: "Expert Packing",
      description: "Our trained team carefully packs each item using professional techniques.",
    },
    {
      step: 4,
      title: "Labeling System",
      description: "Comprehensive labeling system for easy identification and unpacking.",
    },
    {
      step: 5,
      title: "Unpacking Service",
      description: "Complete unpacking and setup service at your new location if requested.",
    },
  ]

  const features = [
    "Quality packing materials",
    "Fragile item protection",
    "Professional techniques",
    "Comprehensive labeling",
    "Unpacking services",
    "Custom crating available",
    "Eco-friendly options",
    "Insurance coverage",
  ]

  const packingMaterials = [
    "Moving boxes (all sizes)",
    "Bubble wrap",
    "Packing paper",
    "Protective foam",
    "Wardrobe boxes",
    "Dish packs",
    "Custom crates",
    "Packing tape",
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Package className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Professional Packing Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let our expert packers handle the delicate work. We use professional techniques and quality materials to
            ensure your belongings are perfectly protected for the move.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Award className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Expert Packers</h3>
            <p className="text-gray-600 text-sm">Trained in professional techniques</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Fragile Protection</h3>
            <p className="text-gray-600 text-sm">Specialized handling for delicate items</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Time Saving</h3>
            <p className="text-gray-600 text-sm">Efficient packing saves you time</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Quality Materials</h3>
            <p className="text-gray-600 text-sm">Premium packing supplies included</p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Packing Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure every item is properly protected and organized.
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
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Packing Materials</h3>
            <ul className="space-y-3 text-gray-600">
              {packingMaterials.map((material, index) => (
                <li key={index}>• {material}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Options */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-navy-900">Packing Service Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Partial Packing</h4>
                <p className="text-3xl font-bold text-primary mb-2">From €150</p>
                <p className="text-gray-600 text-sm">Fragile items and valuables only</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Full Packing</h4>
                <p className="text-3xl font-bold text-primary mb-2">From €400</p>
                <p className="text-gray-600 text-sm">Complete home packing service</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Pack & Unpack</h4>
                <p className="text-3xl font-bold text-primary mb-2">From €600</p>
                <p className="text-gray-600 text-sm">Full service including unpacking</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              *Prices vary based on home size and specific requirements. Materials included in all packages.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Professional Packing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Save time and ensure your belongings are perfectly protected. Get your free packing service quote today.
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
