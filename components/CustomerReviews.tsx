"use client"

import { useState, useEffect } from "react"
import { Star, MapPin, Calendar, Filter } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Review {
  id: string
  name: string
  email: string
  address: string
  service: string
  rating: number
  title: string
  review: string
  date: string
  verified: boolean
  status?: string
}

export default function CustomerReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([])
  const [filterService, setFilterService] = useState<string>("all")
  const [filterRating, setFilterRating] = useState<string>("all")

  // Sample reviews for demonstration
  const sampleReviews: Review[] = [
    {
      id: "1",
      name: "Sarah O'Connor",
      email: "sarah.oconnor@email.com",
      address: "Rathmines, Dublin",
      service: "Residential Move",
      rating: 5,
      title: "Exceptional service from start to finish!",
      review:
        "AnyMove made our house move completely stress-free. The team arrived on time, were incredibly professional, and took great care of all our belongings. Nothing was damaged and they even helped us set up furniture in our new home. Highly recommend!",
      date: "2024-01-15",
      verified: true,
      status: "approved",
    },
    {
      id: "2",
      name: "Michael Walsh",
      email: "m.walsh@business.ie",
      address: "Cork City Centre",
      service: "Commercial Move",
      rating: 5,
      title: "Perfect office relocation",
      review:
        "We needed to relocate our office over a weekend to minimize business disruption. AnyMove delivered exactly what they promised. The team worked efficiently and professionally, and we were up and running Monday morning without any issues.",
      date: "2024-01-10",
      verified: true,
      status: "approved",
    },
    {
      id: "3",
      name: "Emma Kelly",
      email: "emma.kelly@gmail.com",
      address: "Galway",
      service: "Long-Distance Move",
      rating: 5,
      title: "Smooth long-distance move to Dublin",
      review:
        "Moving from Galway to Dublin was daunting, but AnyMove made it easy. The GPS tracking was great - I could see exactly where my belongings were. Everything arrived safely and on time. The packing service was fantastic too!",
      date: "2024-01-08",
      verified: true,
      status: "approved",
    },
    {
      id: "4",
      name: "David Murphy",
      email: "david.murphy@email.com",
      address: "Limerick",
      service: "Storage Solutions",
      rating: 5,
      title: "Excellent storage facility",
      review:
        "Needed storage for 6 months while we found our new home. The facility is clean, secure, and climate-controlled. Staff were helpful and the access hours are convenient. Great value for money.",
      date: "2024-01-05",
      verified: true,
      status: "approved",
    },
    {
      id: "5",
      name: "Lisa Thompson",
      email: "lisa.t@email.com",
      address: "Dún Laoghaire, Dublin",
      service: "Packing Services",
      rating: 4,
      title: "Professional packing service",
      review:
        "The packing team did an excellent job with our fragile items and artwork. Everything was carefully wrapped and labeled. Only minor issue was they ran a bit late, but the quality of work made up for it.",
      date: "2024-01-03",
      verified: true,
      status: "approved",
    },
    {
      id: "6",
      name: "John O'Brien",
      email: "john.obrien@email.com",
      address: "Waterford",
      service: "Specialty Services",
      rating: 5,
      title: "Piano moved with expert care",
      review:
        "Had my grand piano moved and was worried about potential damage. The specialty team knew exactly what they were doing. Used proper equipment and techniques. Piano arrived in perfect condition. Worth every penny!",
      date: "2023-12-28",
      verified: true,
      status: "approved",
    },
  ]

  useEffect(() => {
    // Load only approved reviews from localStorage
    const storedReviews = localStorage.getItem("anymove-reviews")
    if (storedReviews) {
      const parsedReviews = JSON.parse(storedReviews)
      // Filter to show only approved reviews
      const approvedReviews = parsedReviews.filter((review: Review) => !review.status || review.status === "approved")
      setReviews([...sampleReviews, ...approvedReviews])
    } else {
      setReviews(sampleReviews)
    }
  }, [])

  useEffect(() => {
    let filtered = reviews

    if (filterService !== "all") {
      filtered = filtered.filter((review) => review.service === filterService)
    }

    if (filterRating !== "all") {
      filtered = filtered.filter((review) => review.rating === Number.parseInt(filterRating))
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    setFilteredReviews(filtered)
  }, [reviews, filterService, filterRating])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Filter by:</span>
        </div>
        <Select value={filterService} onValueChange={setFilterService}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="All Services" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            <SelectItem value="Residential Move">Residential Move</SelectItem>
            <SelectItem value="Commercial Move">Commercial Move</SelectItem>
            <SelectItem value="Long-Distance Move">Long-Distance Move</SelectItem>
            <SelectItem value="Packing Services">Packing Services</SelectItem>
            <SelectItem value="Storage Solutions">Storage Solutions</SelectItem>
            <SelectItem value="Specialty Services">Specialty Services</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterRating} onValueChange={setFilterRating}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="All Ratings" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ratings</SelectItem>
            <SelectItem value="5">5 Stars</SelectItem>
            <SelectItem value="4">4 Stars</SelectItem>
            <SelectItem value="3">3 Stars</SelectItem>
            <SelectItem value="2">2 Stars</SelectItem>
            <SelectItem value="1">1 Star</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredReviews.map((review) => (
          <Card key={review.id} className="border-2 hover:border-primary/20 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-navy-900">{review.name}</h3>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                        Verified Customer
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{review.address}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(review.date)}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {review.service}
                  </Badge>
                </div>
                <div className="flex items-center space-x-1">{renderStars(review.rating)}</div>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-navy-900 mb-2">{review.title}</h4>
              <p className="text-gray-600 leading-relaxed">{review.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No reviews found matching your filters.</p>
          <Button
            onClick={() => {
              setFilterService("all")
              setFilterRating("all")
            }}
            variant="outline"
            className="mt-4 bg-transparent"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
