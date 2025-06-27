import type { Metadata } from "next"
import ReviewSubmissionForm from "@/components/ReviewSubmissionForm"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Submit Review - AnyMove Ireland | Share Your Experience",
  description:
    "Share your moving experience with AnyMove Ireland. Help other customers by writing an honest review of our services.",
}

export default function SubmitReviewPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Button asChild variant="outline" className="mr-4 bg-transparent">
              <Link href="/reviews" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Reviews</span>
              </Link>
            </Button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Share Your Experience</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We value your feedback! Please take a moment to share your experience with AnyMove Ireland. Your review
            helps us improve and helps other customers make informed decisions.
          </p>
        </div>

        {/* Review Submission Form */}
        <ReviewSubmissionForm />
      </div>
    </div>
  )
}
