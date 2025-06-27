"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah O'Connor",
      location: "Dublin",
      rating: 5,
      text: "AnyMove made our house move stress-free. The team was professional, punctual, and took great care of our belongings. Highly recommended!",
      service: "Residential Move",
    },
    {
      name: "Michael Walsh",
      location: "Cork",
      rating: 5,
      text: "Excellent service for our office relocation. They completed the move over the weekend with minimal disruption to our business operations.",
      service: "Commercial Move",
    },
    {
      name: "Emma Kelly",
      location: "Galway",
      rating: 5,
      text: "The packing service was fantastic. They packed everything securely and nothing was damaged during the long-distance move to Dublin.",
      service: "Packing & Long-Distance",
    },
    {
      name: "David Murphy",
      location: "Limerick",
      rating: 5,
      text: "Great storage facility and helpful staff. Our items were kept safe and secure for 6 months while we found our new home.",
      service: "Storage Solutions",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="text-center">
              <div className="font-semibold text-navy-900 text-lg">{testimonials[currentIndex].name}</div>
              <div className="text-gray-600">
                {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full p-2 bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full p-2 bg-transparent">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
