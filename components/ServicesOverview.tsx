import Link from "next/link"
import { Home, Building, Truck, Package, Warehouse, Wrench, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServicesOverview() {
  const services = [
    {
      icon: Home,
      title: "Residential Moves",
      description: "Complete home moving services for families and individuals across Ireland.",
      href: "/services/residential",
    },
    {
      icon: Building,
      title: "Commercial Moves",
      description: "Office relocations and business moves with minimal downtime.",
      href: "/services/commercial",
    },
    {
      icon: Truck,
      title: "Long-Distance Moves",
      description: "Nationwide moving services with secure transport and tracking.",
      href: "/services/long-distance",
    },
    {
      icon: Package,
      title: "Packing Services",
      description: "Professional packing and unpacking with quality materials.",
      href: "/services/packing",
    },
    {
      icon: Warehouse,
      title: "Storage Solutions",
      description: "Secure, climate-controlled storage facilities for short and long-term needs.",
      href: "/services/storage",
    },
    {
      icon: Wrench,
      title: "Specialty Services",
      description: "Piano moving, art handling, and furniture assembly services.",
      href: "/services/specialty",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Moving Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From residential moves to commercial relocations, we provide comprehensive moving solutions tailored to your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-navy-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6">{service.description}</CardDescription>
                <Button
                  asChild
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-colors bg-transparent"
                >
                  <Link href={service.href} className="flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-black">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
