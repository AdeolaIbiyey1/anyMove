import type { Metadata } from "next"
import { Shield, Award, Users, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About AnyMove Ireland - Professional Moving Company | Lucan, Dublin",
  description:
    "Learn about AnyMove Ireland, your trusted moving partner. Over 4 years of experience serving families and businesses across Ireland with professional moving services.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "We build lasting relationships through consistent, dependable service and transparent communication.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every move, continuously improving our services and training our team.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We listen, adapt, and deliver solutions that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Care & Respect",
      description: "We treat your belongings as our own and respect your home, office, and personal space.",
    },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">About AnyMove Ireland</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted moving partner for over a decade, serving families and businesses across Ireland with
            professional, reliable, and stress-free moving services.
          </p>
        </div>

        {/* Our Story with Marketing Design on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2021 in Drogheda, Co. Louth, AnyMove Ireland began with a simple mission: to make moving
                stress-free for everyone. What started as a small family business has grown into one of Ireland's most
                trusted moving companies.
              </p>
              <p>
                Over the years, we've helped thousands of families and businesses relocate across Ireland and beyond.
                Our commitment to excellence, combined with our personal touch, has earned us a reputation as the go-to
                moving company for those who value quality and reliability.
              </p>
              <p>
                Today, we're proud to serve customers nationwide with a full range of moving, logistics, and storage
                services, always staying true to our founding principles of trust, care, and exceptional service.
              </p>
            </div>
          </div>

          {/* Marketing Design positioned on the right */}
          <div className="flex items-center justify-center">
            <div
              className="w-full h-96 bg-contain bg-no-repeat opacity-90 rounded-2xl"
              style={{
                backgroundImage: "url('/images/your-move-our-mission.jpeg')",
                backgroundPosition: "center center",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
        </div>

        {/* By the Numbers Section */}
        <div className="bg-gray-50 p-8 rounded-lg mb-20">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">By the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">32</div>
              <div className="text-gray-600">Counties Served</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-navy-900">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To provide exceptional moving, logistics, and storage services that exceed our customers' expectations
                while treating every move with the care and attention it deserves. We're committed to making your moving
                experience as smooth and stress-free as possible.
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl text-navy-900">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To be Ireland's most trusted and recommended moving company, known for our reliability, professionalism,
                and customer-first approach. We envision a future where every move is a positive experience that marks
                the beginning of a new chapter in our customers' lives.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Licensed & Certified</h2>
            <p className="text-xl text-gray-600">
              We maintain all necessary licenses and certifications to provide you with professional, compliant moving
              services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-navy-900 mb-2">Fully Insured</h3>
                <p className="text-gray-600 text-sm">Comprehensive liability and goods in transit insurance</p>
              </div>
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-navy-900 mb-2">Licensed Operator</h3>
                <p className="text-gray-600 text-sm">Authorized commercial transport operator</p>
              </div>
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-navy-900 mb-2">Trained Team</h3>
                <p className="text-gray-600 text-sm">All staff trained in safe handling and customer service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
