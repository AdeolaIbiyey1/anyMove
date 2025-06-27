import { CheckCircle, Clock, Shield, Users, Award, Headphones } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Reliable & Professional",
      description: "Our trained team ensures your belongings are handled with care and professionalism.",
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "We respect your schedule and guarantee punctual service for all appointments.",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive insurance coverage gives you peace of mind during your move.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Over 4 years of experience serving families and businesses across Ireland.",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We stand behind our work with a satisfaction guarantee on all services.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our customer support team is available around the clock for your peace of mind.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Why Choose AnyMove Ireland?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another moving company. Here's what sets us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
