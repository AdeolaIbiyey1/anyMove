import type { Metadata } from "next"
import Link from "next/link"
import { Warehouse, CheckCircle, Shield, Clock, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Storage Solutions Ireland - Secure Storage Facilities | AnyMove",
  description:
    "Secure, climate-controlled storage facilities across Ireland. Short and long-term storage solutions with 24/7 security. Free quotes available.",
}

export default function StorageSolutionsPage() {
  const processSteps = [
    {
      step: 1,
      title: "Storage Assessment",
      description: "We assess your storage needs and recommend the right unit size and type.",
    },
    {
      step: 2,
      title: "Unit Selection",
      description: "Choose from various unit sizes and features to match your requirements.",
    },
    {
      step: 3,
      title: "Secure Transport",
      description: "We transport your items directly to your storage unit with care.",
    },
    {
      step: 4,
      title: "Professional Storage",
      description: "Items are properly stored and organized in your climate-controlled unit.",
    },
    {
      step: 5,
      title: "Easy Access",
      description: "24/7 access to your belongings whenever you need them.",
    },
  ]

  const features = [
    "Climate controlled units",
    "24/7 security monitoring",
    "Flexible rental terms",
    "Easy access hours",
    "Various unit sizes",
    "Insurance options",
    "Professional storage",
    "Inventory management",
  ]

  const unitSizes = [
    { size: "Small (25 sq ft)", description: "Perfect for boxes and small items", price: "€50/month" },
    { size: "Medium (50 sq ft)", description: "Ideal for 1-bedroom apartment", price: "€80/month" },
    { size: "Large (100 sq ft)", description: "Suitable for 2-3 bedroom home", price: "€120/month" },
    { size: "Extra Large (200 sq ft)", description: "Perfect for large homes/offices", price: "€200/month" },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Warehouse className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Storage Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure, climate-controlled storage facilities for all your needs. Whether you need short-term storage during
            a move or long-term solutions, we've got the perfect space for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">24/7 Security</h3>
            <p className="text-gray-600 text-sm">Advanced security systems</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Climate Control</h3>
            <p className="text-gray-600 text-sm">Temperature and humidity controlled</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Key className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Easy Access</h3>
            <p className="text-gray-600 text-sm">Convenient access hours</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-navy-900 mb-2">Flexible Terms</h3>
            <p className="text-gray-600 text-sm">Short or long-term options</p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Storage Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make storage simple and secure, handling everything from assessment to access.
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
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Perfect For</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Temporary storage during moves</li>
              <li>• Downsizing and decluttering</li>
              <li>• Seasonal item storage</li>
              <li>• Business inventory storage</li>
              <li>• Document and archive storage</li>
              <li>• Furniture and appliance storage</li>
              <li>• Student storage solutions</li>
            </ul>
          </div>
        </div>

        {/* Unit Sizes and Pricing */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Storage Unit Sizes & Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect size for your storage needs with our flexible pricing options.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {unitSizes.map((unit, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg font-semibold text-navy-900">{unit.size}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">{unit.price}</p>
                  <p className="text-gray-600 text-sm">{unit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            *First month free with 6+ month contracts. Security deposit required.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Storage Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get your free storage consultation today and find the perfect secure storage solution for your needs.
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
