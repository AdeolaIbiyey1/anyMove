"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarDays, MapPin, Package, User, CheckCircle, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { sendQuoteEmail } from "@/app/actions/email-actions";

export default function QuoteForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    moveType: "",
    fromAddress: "",
    toAddress: "",
    moveDate: "",
    homeSize: "",
    additionalServices: [] as string[],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialInstructions: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter((s) => s !== service)
        : [...prev.additionalServices, service],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendQuoteEmail(formData)

      if (result.success) {
        setShowSuccess(true)

        // Optionally reset the form or redirect to a thank you page
        // setStep(1);
        // setFormData({ ...initialFormData });
      } else {
        toast({
          title: "Failed to send",
          description: `There was an error sending your quote: ${result.error}. Please try again later.`,
          variant: "destructive",
        })
      }
    } catch (err) {
      console.error(err)
      toast({
        title: "Connection Error",
        description: "Failed to connect to the server. Please check your internet connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNumber ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 4 && (
                <div className={`w-full h-1 mx-4 ${step > stepNumber ? "bg-primary" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Move Details</span>
          <span>Location</span>
          <span>Services</span>
          <span>Contact Info</span>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {step === 1 && <Package className="h-5 w-5" />}
            {step === 2 && <MapPin className="h-5 w-5" />}
            {step === 3 && <CalendarDays className="h-5 w-5" />}
            {step === 4 && <User className="h-5 w-5" />}
            <span>
              {step === 1 && "Move Details"}
              {step === 2 && "Locations"}
              {step === 3 && "Additional Services"}
              {step === 4 && "Contact Information"}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Move Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="moveType">Type of Move</Label>
                  <Select
                    value={formData.moveType}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, moveType: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select move type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Residential Move">Residential Move</SelectItem>
                      <SelectItem value="Commercial Move">Commercial Move</SelectItem>
                      <SelectItem value="Long-Distance Move">Long-Distance Move</SelectItem>
                      <SelectItem value="Storage Only">Storage Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="homeSize">Home/Office Size</Label>
                  <Select
                    value={formData.homeSize}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, homeSize: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Studio/1 Bedroom">Studio/1 Bedroom</SelectItem>
                      <SelectItem value="2 Bedroom">2 Bedroom</SelectItem>
                      <SelectItem value="3 Bedroom">3 Bedroom</SelectItem>
                      <SelectItem value="4+ Bedroom">4+ Bedroom</SelectItem>
                      <SelectItem value="Small Office">Small Office</SelectItem>
                      <SelectItem value="Large Office">Large Office</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="moveDate">Preferred Move Date</Label>
                  <Input
                    type="date"
                    value={formData.moveDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, moveDate: e.target.value }))}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Locations */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="fromAddress">Moving From</Label>
                  <Input
                    placeholder="Enter your current address"
                    value={formData.fromAddress}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fromAddress: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="toAddress">Moving To</Label>
                  <Input
                    placeholder="Enter your destination address"
                    value={formData.toAddress}
                    onChange={(e) => setFormData((prev) => ({ ...prev, toAddress: e.target.value }))}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Additional Services */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-semibold">Additional Services</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {[
                      "Packing Services",
                      "Unpacking Services",
                      "Furniture Assembly",
                      "Storage Services",
                      "Piano Moving",
                      "Appliance Installation",
                      "Cleaning Services",
                      "Insurance Coverage",
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.additionalServices.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <Label htmlFor={service} className="text-sm">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="specialInstructions">Special Instructions</Label>
                  <Textarea
                    placeholder="Any special requirements or items that need extra care?"
                    value={formData.specialInstructions}
                    onChange={(e) => setFormData((prev) => ({ ...prev, specialInstructions: e.target.value }))}
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    placeholder="+353 1 234 5678"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                </div>

                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">What happens next:</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Click "Get My Quote" to submit your request</li>
                    <li>Your information will be sent directly to our team</li>
                    <li>We'll review the details and calculate your estimate</li>
                    <li>We'll respond within 24 hours with a detailed quote</li>
                  </ol>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button type="button" variant="outline" onClick={handlePrev} disabled={step === 1}>
                Previous
              </Button>
              {step < 4 ? (
                <Button type="button" onClick={handleNext}>
                  Next Step
                </Button>
              ) : (
                <Button type="submit" className="bg-primary hover:bg-primary/90 min-w-[140px]" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Get My Quote"
                  )}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Quote Summary */}
      {step === 4 && (
        <Card className="mt-8 bg-gray-50">
          <CardHeader>
            <CardTitle>Quote Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Move Type:</span>
                <span className="font-semibold">{formData.moveType || "Not selected"}</span>
              </div>
              <div className="flex justify-between">
                <span>Home Size:</span>
                <span className="font-semibold">{formData.homeSize || "Not selected"}</span>
              </div>
              <div className="flex justify-between">
                <span>Move Date:</span>
                <span className="font-semibold">{formData.moveDate || "Not selected"}</span>
              </div>
              <div className="flex justify-between">
                <span>Additional Services:</span>
                <span className="font-semibold">{formData.additionalServices.length} selected</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader className="items-center">
            <CheckCircle className="text-green-500 w-14 h-14 mb-2" />
            <DialogTitle className="text-xl">Quote Request Received!</DialogTitle>
            <DialogDescription className="text-base mt-2">
              Thank you, <strong>{formData.firstName}</strong>! Our team will review your request and reach out to you within <strong>24 hours</strong> at <strong>{formData.email}</strong>.
            </DialogDescription>
          </DialogHeader>
          <Button className="mt-4 w-full" onClick={() => setShowSuccess(false)}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
