import type { Metadata } from "next"
import Link from "next/link"
import { Star, Plus, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CustomerReviews from "@/components/CustomerReviews"

export const metadata: Metadata = {
  title: "Customer Reviews - AnyMove Ireland | Real Customer Experiences",
  description:
    "Read genuine reviews from our satisfied customers. See what people are saying about our moving services across Ireland.",
}

export default function ReviewsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Customer Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Read what our customers have to say about their moving experience with
            AnyMove Ireland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-black">
              <Link href="/submit-review" className="flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Write a Review</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <Link href="/quote" className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Get Your Quote</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Review Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">Average Rating</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">Total Reviews</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-gray-600">Recommend Us</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">24hr</div>
              <p className="text-gray-600">Avg Response Time</p>
            </CardContent>
          </Card>
        </div>

        {/* Customer Reviews Component */}
        <CustomerReviews />

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Share Your Experience</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have you used our services? We'd love to hear about your experience. Your feedback helps us improve and
            helps other customers make informed decisions.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-black">
            <Link href="/submit-review" className="flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span>Write Your Review</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
