import type { Metadata } from "next"
import Link from "next/link"
import { Truck, CheckCircle, MapPin, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Long-Distance Moving Services Ireland - Nationwide Moves | AnyMove",
  description:
    "Professional long-distance moving services across Ireland. Nationwide relocations with GPS tracking and secure transport. Free quotes available.",
}

export default function LongDistanceMovesPage() {
  const processSteps = [
    {
      step: 1,
      title: "Route Planning",
      description: "Optimal route planning for efficient and timely long-distance transport.",
    },
    {
      step: 2,
      title: "Secure Packing",
      description: "Extra protection and securing for long-distance transport requirements.",
    },
    {
      step: 3,
      title: "GPS Tracking",
      description: "Real-time tracking so you know exactly where your belongings are.",
    },
    {
      step: 4,
      title: "Safe Transport",
      description: "Professional drivers and modern vehicles for secure long-distance moves.",
    },
    {
      step: 5,
      title: "Delivery & Setup",
      description: "Careful unloading and setup at your new destination anywhere in Ireland.",
    },
  ]

  const features = [
    "GPS tracking included",
    "Nationwide coverage",
    "Secure transport vehicles",
    "Professional drivers",
    "Flexible scheduling",
    "Insurance coverage",
    "Real-time updates",
    "Door-to-door service",
  ]

  const destinations = [
    "Dublin to Cork",
    "Galway to Dublin",
    "Limerick to Belfast",
    "Waterford to Derry",
    "Cork to Galway",
    "Dublin to Donegal",
    "Any Irish destination",
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Truck className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Long-Distance Moving Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Moving across Ireland? Our long-distance moving services ensure your belongings arrive safely and on time,
            no matter the distance. From Dublin to Cork, Galway to Belfast - we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">GPS Tracking</h3>
            <p className="text-gray-600 text-sm">Real-time location updates</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">On-Time Delivery</h3>
            <p className="text-gray-600 text-sm">Reliable scheduling and delivery</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Secure Transport</h3>
            <p className="text-gray-600 text-sm">Professional vehicles and drivers</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Nationwide</h3>
            <p className="text-gray-600 text-sm">All 32 counties covered</p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Long-Distance Moving Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've perfected our long-distance moving process to ensure your belongings arrive safely and on time.
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
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Popular Routes</h3>
            <ul className="space-y-3 text-gray-600">
              {destinations.map((destination, index) => (
                <li key={index}>• {destination}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Distance-Based Pricing */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-navy-900">Distance-Based Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Short Distance</h4>
                <p className="text-3xl font-bold text-primary mb-2">€2.50/km</p>
                <p className="text-gray-600 text-sm">Up to 100km</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Medium Distance</h4>
                <p className="text-3xl font-bold text-primary mb-2">€2.00/km</p>
                <p className="text-gray-600 text-sm">100-300km</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-navy-900 mb-2">Long Distance</h4>
                <p className="text-3xl font-bold text-primary mb-2">€1.75/km</p>
                <p className="text-gray-600 text-sm">300km+</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              *Base rates plus volume charges. Minimum charges apply. Free quotes available.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Long-Distance Move?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get your free long-distance moving quote today. We'll handle the logistics so you can focus on your new
            beginning.
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
