import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import { Phone, Mail, MapPin, Clock, MessageCircle, Eye, Navigation, Camera } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact AnyMove Ireland - Get in Touch | Lucan, Dublin",
  description:
    "Contact AnyMove Ireland for all your moving needs. Call, email, or visit us at Citygate Business Centre, Lucan, Co. Dublin. Free quotes and friendly service.",
}

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to move? Have questions? We're here to help. Contact us today for your free quote and let's make your
            move stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                  <a href="tel:+353831673653" className="text-lg font-semibold text-primary hover:underline">
                    +353 831673653
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Send us your questions</p>
                  <a href="mailto:info@anymove.ie" className="text-lg font-semibold text-primary hover:underline">
                    info@anymove.ie
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Visit our office</p>
                  <p className="font-semibold">
                    Citygate Business Centre
                    <br />
                    Hills Industrial Estate
                    <br />
                    Laraghcon, Lucan
                    <br />
                    Co. Dublin, Ireland
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-gray-600">
                    <p>
                      <span className="font-semibold">Mon - Fri:</span> 8:00 AM - 6:00 PM
                    </p>
                    <p>
                      <span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM
                    </p>
                    <p>
                      <span className="font-semibold">Sunday:</span> Emergency calls only
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 opacity-90">Get instant responses on WhatsApp</p>
                  <Button asChild variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100">
                    <a href="https://wa.me/353831673653" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Google Maps & Street View Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-primary" />
                <span>Find Us</span>
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Located at Citygate Business Centre in Lucan, Co. Dublin - easily accessible from all major routes
              </p>
            </CardHeader>
            <CardContent>
              {/* Map and Street View Tabs */}
              <Tabs defaultValue="map" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="map" className="flex items-center space-x-2">
                    <Navigation className="h-4 w-4" />
                    <span>Map View</span>
                  </TabsTrigger>
                  <TabsTrigger value="streetview" className="flex items-center space-x-2">
                    <Eye className="h-4 w-4" />
                    <span>Street View</span>
                  </TabsTrigger>
                  <TabsTrigger value="virtualtour" className="flex items-center space-x-2">
                    <Camera className="h-4 w-4" />
                    <span>Virtual Tour</span>
                  </TabsTrigger>
                </TabsList>

                {/* Map View Tab */}
                <TabsContent value="map">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.5!2d-6.4477!3d53.3498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e99a9c5c5c5%3A0x1234567890abcdef!2sCitygate%20Business%20Centre%2C%20Hills%20Industrial%20Estate%2C%20Laraghcon%2C%20Lucan%2C%20Co.%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sie!4v1234567890123!5m2!1sen!2sie"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AnyMove Ireland Location - Citygate Business Centre, Lucan"
                    ></iframe>
                  </div>
                </TabsContent>

                {/* Street View Tab */}
                <TabsContent value="streetview">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1234567890123!6m8!1m7!1sCAoSLEFGMVFpcE9fVjVkVjVkVjVkVjVkVjVkVjVkVjVkVjVkVjVkVjVkVjVk!2m2!1d53.3498!2d-6.4477!3f0!4f0!5f0!7i16384!8i8192"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AnyMove Ireland Street View - Citygate Business Centre, Lucan"
                    ></iframe>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <Eye className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Street View Benefits</h4>
                        <p className="text-blue-700 text-sm">
                          Use Street View to familiarize yourself with our location before your visit. You can see the
                          building entrance, parking areas, and surrounding landmarks to make finding us even easier.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Virtual Tour Tab */}
                <TabsContent value="virtualtour">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Camera className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-navy-900 mb-4">360° Virtual Office Tour</h3>
                      <p className="text-gray-600 mb-6 max-w-md">
                        Take an interactive 360° tour of our professional office space. See our reception area,
                        consultation rooms, and facilities before your visit.
                      </p>
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-black">
                        <Link href="/virtual-tour">Start Virtual Tour</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-start space-x-3">
                      <Camera className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">Virtual Tour Features</h4>
                        <p className="text-green-700 text-sm">
                          Explore our reception area, consultation rooms, main office, and parking facilities.
                          Interactive hotspots provide detailed information about each area.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Directions and Additional Info */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-navy-900 mb-3">Getting Here</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Easy access from M50 motorway (Exit 7)</li>
                    <li>• 15 minutes from Dublin city center</li>
                    <li>• Ample parking available on-site</li>
                    <li>• Public transport links nearby</li>
                    <li>• Look for the Citygate Business Centre sign</li>
                    <li>• We're in the Hills Industrial Estate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-3">Quick Actions</h4>
                  <div className="space-y-2">
                    <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Citygate+Business+Centre,+Hills+Industrial+Estate,+Laraghcon,+Lucan,+Co.+Dublin,+Ireland"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                      <a href="tel:+353831673653">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Before Visiting
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                      <Link href="/virtual-tour">
                        <Camera className="h-4 w-4 mr-2" />
                        Take Virtual Tour
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Landmark Information */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-navy-900 mb-3">Nearby Landmarks</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Business Area:</p>
                    <ul className="space-y-1">
                      <li>• Hills Industrial Estate</li>
                      <li>• Multiple business units</li>
                      <li>• Professional office complex</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">Transport Links:</p>
                    <ul className="space-y-1">
                      <li>• M50 motorway access</li>
                      <li>• Dublin Bus routes nearby</li>
                      <li>• Lucan village center close</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
