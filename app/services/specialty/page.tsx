import type { Metadata } from "next"
import Link from "next/link"
import { Wrench, CheckCircle, Shield, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Specialty Moving Services Ireland - Piano, Art & Antiques | AnyMove",
  description:
    "Specialty moving services across Ireland. Piano moving, art handling, antique transport, and furniture assembly. Expert care for your precious items.",
}

export default function SpecialtyServicesPage() {
  const processSteps = [
    {
      step: 1,
      title: "Specialist Assessment",
      description: "Expert evaluation of your specialty items and their specific handling requirements.",
    },
    {
      step: 2,
      title: "Custom Planning",
      description: "Tailored moving plan with specialized equipment and techniques for each item.",
    },
    {
      step: 3,
      title: "Expert Handling",
      description: "Trained specialists handle your precious items with the utmost care and precision.",
    },
    {
      step: 4,
      title: "Secure Transport",
      description: "Climate-controlled vehicles and custom protection for safe transportation.",
    },
    {
      step: 5,
      title: "Professional Setup",
      description: "Careful placement and setup at your new location, including assembly if needed.",
    },
  ]

  const features = [
    "Piano moving specialists",
    "Art and antique handling",
    "Custom crating services",
    "Climate-controlled transport",
    "Furniture assembly/disassembly",
    "Appliance installation",
    "Specialized equipment",
    "Insurance coverage",
  ]

  const specialtyServices = [
    {
      title: "Piano Moving",
      description: "Grand pianos, uprights, and digital pianos moved with specialized equipment",
      icon: "🎹",
    },
    {
      title: "Art & Antiques",
      description: "Museum-quality handling for paintings, sculptures, and valuable antiques",
      icon: "🎨",
    },
    {
      title: "Furniture Assembly",
      description: "Professional assembly and disassembly of all furniture types",
      icon: "🔧",
    },
    {
      title: "Appliance Moving",
      description: "Safe disconnection, transport, and reconnection of appliances",
      icon: "🏠",
    },
    {
      title: "Safe Moving",
      description: "Specialized equipment for moving heavy safes and security equipment",
      icon: "🔒",
    },
    {
      title: "Pool Tables",
      description: "Expert disassembly, transport, and reassembly of pool tables",
      icon: "🎱",
    },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Wrench className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Specialty Moving Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your most precious and challenging items deserve expert care. Our specialty moving services handle pianos,
            artwork, antiques, and other valuable items with the precision and care they require.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Award className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Expert Specialists</h3>
            <p className="text-gray-600 text-sm">Trained in specialized handling</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Custom Protection</h3>
            <p className="text-gray-600 text-sm">Tailored protection for each item</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Precious Care</h3>
            <p className="text-gray-600 text-sm">Treating your valuables like our own</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Specialized Equipment</h3>
            <p className="text-gray-600 text-sm">Professional tools for every job</p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Specialty Moving Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a meticulous process to ensure your specialty items receive the expert care they deserve.
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

        {/* Specialty Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Specialty Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From grand pianos to priceless artwork, we have the expertise to handle your most challenging moves.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 transition-colors">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold text-navy-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
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
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Why Choose Our Specialists?</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Years of specialized training and experience</li>
              <li>• Professional-grade equipment and tools</li>
              <li>• Comprehensive insurance coverage</li>
              <li>• Custom solutions for unique items</li>
              <li>• Climate-controlled transport vehicles</li>
              <li>• White-glove service from start to finish</li>
              <li>• Satisfaction guarantee on all work</li>
            </ul>
          </div>
        </div>

        {/* Pricing Information */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-navy-900">Specialty Service Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Piano Moving</h4>
                <p className="text-3xl font-bold text-primary mb-2">From €300</p>
                <p className="text-gray-600 text-sm">Upright pianos, local moves</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Art & Antiques</h4>
                <p className="text-3xl font-bold text-primary mb-2">From €150</p>
                <p className="text-gray-600 text-sm">Per item, includes custom crating</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Furniture Assembly</h4>
                <p className="text-3xl font-bold text-primary mb-2">From €80</p>
                <p className="text-gray-600 text-sm">Per hour, minimum 2 hours</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              *Prices vary based on item complexity, distance, and specific requirements. Free assessments available.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Specialty Moving Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Trust your most precious items to our specialists. Get your free specialty moving consultation today.
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
