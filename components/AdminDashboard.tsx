"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Star, CheckCircle, XCircle, User, MapPin, Calendar, MessageSquare, LogOut, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
  status: "pending" | "approved" | "rejected"
  adminNotes?: string
  moderatedBy?: string
  moderatedAt?: string
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [reviews, setReviews] = useState<Review[]>([])
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([])
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterService, setFilterService] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [adminNotes, setAdminNotes] = useState("")
  const [activeTab, setActiveTab] = useState("pending")
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const session = localStorage.getItem("anymove-admin-session")
    if (session !== "authenticated") {
      router.push("/admin/login")
      return
    }
    setIsAuthenticated(true)

    // Load reviews
    loadReviews()
  }, [router])

  useEffect(() => {
    filterReviews()
  }, [reviews, filterStatus, filterService, searchTerm])

  const loadReviews = () => {
    // Load from localStorage (in production, this would be an API call)
    const storedReviews = JSON.parse(localStorage.getItem("anymove-reviews") || "[]")
    const adminReviews = JSON.parse(localStorage.getItem("anymove-admin-reviews") || "[]")

    // Combine and set default status for new reviews
    const allReviews = [...storedReviews, ...adminReviews].map((review) => ({
      ...review,
      status: review.status || "pending",
    }))

    setReviews(allReviews)
  }

  const filterReviews = () => {
    let filtered = reviews

    if (filterStatus !== "all") {
      filtered = filtered.filter((review) => review.status === filterStatus)
    }

    if (filterService !== "all") {
      filtered = filtered.filter((review) => review.service === filterService)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (review) =>
          review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.review.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    setFilteredReviews(filtered)
  }

  const handleReviewAction = (reviewId: string, action: "approve" | "reject", notes?: string) => {
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return {
          ...review,
          status: action === "approve" ? "approved" : "rejected",
          adminNotes: notes || "",
          moderatedBy: "admin",
          moderatedAt: new Date().toISOString(),
        }
      }
      return review
    })

    setReviews(updatedReviews)

    // Save to localStorage
    localStorage.setItem("anymove-admin-reviews", JSON.stringify(updatedReviews))

    // Update published reviews (only approved ones)
    const approvedReviews = updatedReviews.filter((review) => review.status === "approved")
    localStorage.setItem("anymove-reviews", JSON.stringify(approvedReviews))

    setSelectedReview(null)
    setAdminNotes("")
  }

  const handleDeleteReview = (reviewId: string) => {
    if (confirm("Are you sure you want to delete this review? This action cannot be undone.")) {
      const updatedReviews = reviews.filter((review) => review.id !== reviewId)
      setReviews(updatedReviews)
      localStorage.setItem("anymove-admin-reviews", JSON.stringify(updatedReviews))

      // Update published reviews
      const approvedReviews = updatedReviews.filter((review) => review.status === "approved")
      localStorage.setItem("anymove-reviews", JSON.stringify(approvedReviews))

      setSelectedReview(null)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("anymove-admin-session")
    localStorage.removeItem("anymove-admin-user")
    router.push("/admin/login")
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
      default:
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
    }
  }

  const getStats = () => {
    const total = reviews.length
    const pending = reviews.filter((r) => r.status === "pending").length
    const approved = reviews.filter((r) => r.status === "approved").length
    const rejected = reviews.filter((r) => r.status === "rejected").length
    const avgRating =
      reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : "0"

    return { total, pending, approved, rejected, avgRating }
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  const stats = getStats()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/images/anymove-logo-final.png" alt="AnyMove Ireland" className="h-12 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-navy-900">Admin Dashboard</h1>
                <p className="text-gray-600">Review Management System</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline" className="bg-transparent">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-navy-900">{stats.total}</div>
              <p className="text-gray-600 text-sm">Total Reviews</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
              <p className="text-gray-600 text-sm">Pending</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
              <p className="text-gray-600 text-sm">Approved</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
              <p className="text-gray-600 text-sm">Rejected</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{stats.avgRating}</div>
              <p className="text-gray-600 text-sm">Avg Rating</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Review Management</span>
                </CardTitle>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search reviews..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-full sm:w-40">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={filterService} onValueChange={setFilterService}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Service" />
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
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="pending">Pending ({stats.pending})</TabsTrigger>
                    <TabsTrigger value="approved">Approved ({stats.approved})</TabsTrigger>
                    <TabsTrigger value="rejected">Rejected ({stats.rejected})</TabsTrigger>
                  </TabsList>

                  <TabsContent value={activeTab} className="mt-6">
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {filteredReviews
                        .filter((review) =>
                          activeTab === "pending"
                            ? review.status === "pending"
                            : activeTab === "approved"
                              ? review.status === "approved"
                              : review.status === "rejected",
                        )
                        .map((review) => (
                          <div
                            key={review.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                              selectedReview?.id === review.id
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() => setSelectedReview(review)}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-semibold text-navy-900">{review.name}</h4>
                                <p className="text-sm text-gray-600">{review.email}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                {getStatusBadge(review.status)}
                                <div className="flex">{renderStars(review.rating)}</div>
                              </div>
                            </div>
                            <p className="text-sm font-medium text-gray-800 mb-1">{review.title}</p>
                            <p className="text-sm text-gray-600 line-clamp-2">{review.review}</p>
                            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                              <span>{review.service}</span>
                              <span>{new Date(review.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        ))}

                      {filteredReviews.filter((review) =>
                        activeTab === "pending"
                          ? review.status === "pending"
                          : activeTab === "approved"
                            ? review.status === "approved"
                            : review.status === "rejected",
                      ).length === 0 && (
                        <div className="text-center py-8 text-gray-500">No {activeTab} reviews found.</div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Review Details */}
          <div className="lg:col-span-1">
            {selectedReview ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Review Details</span>
                    <Button
                      onClick={() => handleDeleteReview(selectedReview.id)}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700 bg-transparent"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Customer Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span>{selectedReview.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{selectedReview.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>{new Date(selectedReview.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Review Details</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Service:</span>
                        <Badge variant="outline">{selectedReview.service}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Rating:</span>
                        <div className="flex">{renderStars(selectedReview.rating)}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Status:</span>
                        {getStatusBadge(selectedReview.status)}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Review Content</h4>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h5 className="font-medium mb-1">{selectedReview.title}</h5>
                      <p className="text-sm text-gray-700">{selectedReview.review}</p>
                    </div>
                  </div>

                  {selectedReview.status === "pending" && (
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">Admin Notes (Optional)</h4>
                      <Textarea
                        placeholder="Add internal notes about this review..."
                        value={adminNotes}
                        onChange={(e) => setAdminNotes(e.target.value)}
                        rows={3}
                      />
                    </div>
                  )}

                  {selectedReview.adminNotes && (
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">Admin Notes</h4>
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-800">{selectedReview.adminNotes}</p>
                        {selectedReview.moderatedBy && (
                          <p className="text-xs text-blue-600 mt-2">
                            Moderated by {selectedReview.moderatedBy} on{" "}
                            {new Date(selectedReview.moderatedAt!).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {selectedReview.status === "pending" && (
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleReviewAction(selectedReview.id, "approve", adminNotes)}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                      <Button
                        onClick={() => handleReviewAction(selectedReview.id, "reject", adminNotes)}
                        variant="outline"
                        className="flex-1 text-red-600 hover:text-red-700 bg-transparent"
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8 text-gray-500">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Select a review to view details and take action</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
