import { Shield, Star, Award, Users } from "lucide-react"

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive coverage",
    },
    {
      icon: Award,
      title: "Licensed",
      description: "Certified professionals",
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "500+ happy customers",
    },
    {
      icon: Users,
      title: "Trusted",
      description: "4+ years experience",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <badge.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-navy-900 mb-1">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
