"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Users, Coffee, Car, Building, MapPin, Info, RotateCcw, Maximize, Volume2, VolumeX } from "lucide-react"

export default function VirtualTour() {
  const [currentView, setCurrentView] = useState("reception")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(true)

  const tourStops = [
    {
      id: "reception",
      name: "Reception Area",
      icon: Building,
      description: "Welcome to our professional reception area where we greet all our clients.",
      features: ["Professional reception desk", "Comfortable seating area", "Company information displays"],
    },
    {
      id: "consultation",
      name: "Consultation Room",
      icon: Users,
      description: "Private consultation room where we discuss your moving needs and create custom solutions.",
      features: ["Private meeting space", "Moving planning materials", "Comfortable seating for families"],
    },
    {
      id: "office",
      name: "Main Office",
      icon: Coffee,
      description: "Our main office space where our team coordinates moves and provides customer support.",
      features: ["Open office layout", "Customer service desks", "Planning and coordination area"],
    },
    {
      id: "storage",
      name: "Storage Display",
      icon: MapPin,
      description: "See examples of our storage solutions and packing materials.",
      features: ["Storage unit examples", "Packing material displays", "Security system showcase"],
    },
    {
      id: "parking",
      name: "Parking Area",
      icon: Car,
      description: "Convenient parking area with easy access to our office entrance.",
      features: ["Ample parking spaces", "Easy office access", "Loading area for consultations"],
    },
  ]

  const currentStop = tourStops.find((stop) => stop.id === currentView) || tourStops[0]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tour Navigation */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="h-5 w-5 text-primary" />
            <span>Tour Navigation</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tourStops.map((stop) => (
              <Button
                key={stop.id}
                variant={currentView === stop.id ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentView(stop.id)}
                className={`flex items-center space-x-2 ${
                  currentView === stop.id ? "bg-primary text-black" : "bg-transparent"
                }`}
              >
                <stop.icon className="h-4 w-4" />
                <span>{stop.name}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Tour Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 360° Viewer */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <currentStop.icon className="h-5 w-5 text-primary" />
                  <span>{currentStop.name}</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAudioEnabled(!audioEnabled)}
                    className="bg-transparent"
                  >
                    {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="bg-transparent"
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* 360° Viewer Container */}
              <div
                className={`relative bg-gray-100 rounded-lg overflow-hidden ${
                  isFullscreen ? "fixed inset-0 z-50 rounded-none" : "aspect-video"
                }`}
              >
                {/* Simulated 360° viewer - In production, this would be replaced with actual 360° viewer */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="text-center p-8">
                    <currentStop.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{currentStop.name}</h3>
                    <p className="text-gray-600 mb-4">{currentStop.description}</p>
                    <Badge variant="secondary" className="mb-4">
                      360° Interactive View
                    </Badge>
                    <div className="text-sm text-gray-500">
                      <p>Click and drag to look around</p>
                      <p>Use mouse wheel to zoom</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Hotspots Simulation */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-pulse cursor-pointer"></div>
                <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary rounded-full animate-pulse cursor-pointer"></div>
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-primary rounded-full animate-pulse cursor-pointer"></div>

                {/* Fullscreen Exit Button */}
                {isFullscreen && (
                  <Button
                    className="absolute top-4 right-4 z-10"
                    variant="secondary"
                    onClick={() => setIsFullscreen(false)}
                  >
                    Exit Fullscreen
                  </Button>
                )}
              </div>

              {/* Tour Controls */}
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <span>
                    View {tourStops.findIndex((s) => s.id === currentView) + 1} of {tourStops.length}
                  </span>
                  <Badge variant="outline">Interactive</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Info className="h-4 w-4" />
                  <span>Click hotspots for more information</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tour Information Panel */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Location Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">About This Area</h4>
                  <p className="text-gray-600 text-sm">{currentStop.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">Features</h4>
                  <ul className="space-y-1">
                    {currentStop.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold text-navy-900 mb-2">Navigation Tips</h4>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>• Click and drag to look around</li>
                    <li>• Use mouse wheel to zoom in/out</li>
                    <li>• Click yellow hotspots for details</li>
                    <li>• Use navigation buttons to move between areas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="font-semibold text-navy-900">Citygate Business Centre</p>
                  <p className="text-gray-600">Hills Industrial Estate</p>
                  <p className="text-gray-600">Laraghcon, Lucan, Co. Dublin</p>
                </div>
                <div className="space-y-2">
                  <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90 text-black">
                    <a href="tel:+353831673653">Call to Schedule Visit</a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Citygate+Business+Centre,+Hills+Industrial+Estate,+Laraghcon,+Lucan,+Co.+Dublin,+Ireland"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tour Information */}
      <Card className="mt-6">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Building className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-navy-900 mb-1">Professional Facility</h4>
              <p className="text-gray-600 text-sm">Modern office space in prime business location</p>
            </div>
            <div>
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-navy-900 mb-1">Expert Team</h4>
              <p className="text-gray-600 text-sm">Experienced professionals ready to help with your move</p>
            </div>
            <div>
              <Car className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-navy-900 mb-1">Easy Access</h4>
              <p className="text-gray-600 text-sm">Convenient parking and accessible location</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
