"use client"

import type React from "react"

import { useState } from "react"
import { Star, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ReviewSubmissionForm() {
  const [step, setStep] = useState(1) // 1: Login, 2: Review Form, 3: Success
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    name: "",
    address: "",
  })
  const [reviewData, setReviewData] = useState({
    service: "",
    rating: 0,
    title: "",
    review: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginData.email && loginData.name && loginData.address) {
      setStep(2)
    }
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (reviewData.service && reviewData.rating && reviewData.title && reviewData.review) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        // Save to admin reviews with pending status
        const newReview = {
          id: Date.now().toString(),
          ...loginData,
          ...reviewData,
          date: new Date().toISOString().split("T")[0],
          verified: true,
          status: "pending", // All new reviews start as pending
        }

        const existingAdminReviews = JSON.parse(localStorage.getItem("anymove-admin-reviews") || "[]")
        existingAdminReviews.push(newReview)
        localStorage.setItem("anymove-admin-reviews", JSON.stringify(existingAdminReviews))

        setIsSubmitting(false)
        setStep(3)
      }, 2000)
    }
  }

  const renderStars = (rating: number, interactive = false) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-6 w-6 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
        onClick={interactive ? () => setReviewData({ ...reviewData, rating: i + 1 }) : undefined}
      />
    ))
  }

  if (step === 3) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardContent className="text-center py-12">
            <Clock className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Thank You for Your Review!</h2>
            <p className="text-blue-700 mb-6">
              Your review has been submitted successfully and is now pending approval. Our team will review it within
              24-48 hours, and once approved, it will appear on our reviews page. We appreciate your feedback!
            </p>
            <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 mb-6">
              <div className="flex items-center justify-center space-x-2 text-blue-800">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Status: Pending Review</span>
              </div>
              <p className="text-blue-700 text-sm mt-2">
                You'll receive an email notification once your review is approved and published.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  setStep(1)
                  setLoginData({ email: "", name: "", address: "" })
                  setReviewData({ service: "", rating: 0, title: "", review: "" })
                }}
                variant="outline"
                className="bg-transparent"
              >
                Submit Another Review
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 text-black">
                <a href="/reviews">View Published Reviews</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
              step >= 1 ? "bg-primary text-black" : "bg-gray-200 text-gray-600"
            }`}
          >
            1
          </div>
          <div className={`w-16 h-1 ${step >= 2 ? "bg-primary" : "bg-gray-200"}`} />
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
              step >= 2 ? "bg-primary text-black" : "bg-gray-200 text-gray-600"
            }`}
          >
            2
          </div>
        </div>
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Customer Login</CardTitle>
            <p className="text-gray-600">
              Please provide your details to verify your identity before submitting a review.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  This should be the email you used when booking our services
                </p>
              </div>

              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={loginData.name}
                  onChange={(e) => setLoginData({ ...loginData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="address">Address/Location *</Label>
                <Input
                  id="address"
                  placeholder="City, County (e.g., Dublin, Co. Dublin)"
                  value={loginData.address}
                  onChange={(e) => setLoginData({ ...loginData, address: e.target.value })}
                  required
                />
                <p className="text-sm text-gray-500 mt-1">This will be displayed publicly with your review</p>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-black">
                Continue to Review
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Write Your Review</CardTitle>
            <p className="text-gray-600">
              Share your experience with AnyMove Ireland to help other customers make informed decisions.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleReviewSubmit} className="space-y-6">
              <div>
                <Label htmlFor="service">Service Used *</Label>
                <Select
                  value={reviewData.service}
                  onValueChange={(value) => setReviewData({ ...reviewData, service: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select the service you used" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Residential Move">Residential Move</SelectItem>
                    <SelectItem value="Commercial Move">Commercial Move</SelectItem>
                    <SelectItem value="Long-Distance Move">Long-Distance Move</SelectItem>
                    <SelectItem value="Packing Services">Packing Services</SelectItem>
                    <SelectItem value="Storage Solutions">Storage Solutions</SelectItem>
                    <SelectItem value="Specialty Services">Specialty Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Overall Rating *</Label>
                <div className="flex items-center space-x-1 mt-2">{renderStars(reviewData.rating, true)}</div>
                <p className="text-sm text-gray-500 mt-1">Click on the stars to rate your experience</p>
              </div>

              <div>
                <Label htmlFor="title">Review Title *</Label>
                <Input
                  id="title"
                  placeholder="Summarize your experience in a few words"
                  value={reviewData.title}
                  onChange={(e) => setReviewData({ ...reviewData, title: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="review">Your Review *</Label>
                <Textarea
                  id="review"
                  placeholder="Tell us about your experience with AnyMove Ireland. What went well? What could be improved?"
                  value={reviewData.review}
                  onChange={(e) => setReviewData({ ...reviewData, review: e.target.value })}
                  rows={6}
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Minimum 50 characters</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="bg-transparent">
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting || reviewData.review.length < 50}
                  className="flex-1 bg-primary hover:bg-primary/90 text-black"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Review Guidelines */}
      <Card className="mt-6 bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <h4 className="font-semibold text-blue-900 mb-3">Review Guidelines & Moderation</h4>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• Be honest and specific about your experience</li>
            <li>• Focus on the service quality and customer experience</li>
            <li>• Avoid personal information or inappropriate language</li>
            <li>
              • <strong>All reviews are moderated before publication</strong>
            </li>
            <li>• Reviews typically appear within 24-48 hours after approval</li>
            <li>• Only customers who have used our services can submit reviews</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
