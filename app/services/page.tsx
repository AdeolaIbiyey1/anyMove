import type { Metadata } from "next"
import Link from "next/link"
import { Home, Building, Truck, Package, Warehouse, Wrench, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Moving Services Ireland - Residential, Commercial & Storage | AnyMove",
  description:
    "Comprehensive moving services across Ireland. Residential moves, commercial relocations, packing, storage, and specialty item handling. Get your free quote today.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Residential Moves",
      description:
        "Complete home moving services for families and individuals. From apartments to large family homes, we handle moves of all sizes with care and professionalism.",
      features: [
        "Free in-home estimates",
        "Packing and unpacking",
        "Furniture disassembly/assembly",
        "Secure transport",
      ],
      href: "/services/residential",
    },
    {
      icon: Building,
      title: "Commercial Moves",
      description:
        "Office relocations and business moves designed to minimize downtime. We work around your schedule to ensure business continuity.",
      features: ["After-hours moving", "IT equipment handling", "Minimal business disruption", "Project management"],
      href: "/services/commercial",
    },
    {
      icon: Truck,
      title: "Long-Distance Moves",
      description:
        "Nationwide moving services with secure transport and real-time tracking. Moving across Ireland has never been easier.",
      features: ["GPS tracking", "Secure transport", "Flexible scheduling", "Insurance coverage"],
      href: "/services/long-distance",
    },
    {
      icon: Package,
      title: "Packing Services",
      description:
        "Professional packing and unpacking services using high-quality materials. Let our experts handle the delicate work.",
      features: ["Quality packing materials", "Fragile item protection", "Labeling system", "Unpacking services"],
      href: "/services/packing",
    },
    {
      icon: Warehouse,
      title: "Storage Solutions",
      description:
        "Secure, climate-controlled storage facilities for short and long-term needs. Your belongings are safe with us.",
      features: ["Climate controlled", "24/7 security", "Flexible terms", "Easy access"],
      href: "/services/storage",
    },
    {
      icon: Wrench,
      title: "Specialty Services",
      description:
        "Piano moving, art handling, antique transport, and furniture assembly. We handle your most precious items with expert care.",
      features: ["Piano moving", "Art & antiques", "Furniture assembly", "Custom crating"],
      href: "/services/specialty",
    },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Our Moving Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential moves to commercial relocations, we provide comprehensive moving solutions tailored to your
            specific needs across Ireland.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-semibold text-navy-900">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 text-base">{service.description}</CardDescription>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  <Link href={service.href} className="flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Every move is unique. If you don't see exactly what you need, contact us for a custom moving solution
            tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/quote">Get Custom Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
