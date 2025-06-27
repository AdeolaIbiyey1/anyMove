"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      console.error(
        "Formspree endpoint is not defined in environment variables."
      );
      alert("There was a configuration error. Please try again later.");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a Message</CardTitle>
        <p className="text-gray-600">
          Fill out the form below and we'll prepare an email for you to send.
          Your default email client will open with all the details pre-filled.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+353 1 234 5678"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Select
              value={formData.subject}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, subject: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Request Quote">Request Quote</SelectItem>
                <SelectItem value="Booking Inquiry">Booking Inquiry</SelectItem>
                <SelectItem value="Residential Move">
                  Residential Move
                </SelectItem>
                <SelectItem value="Commercial Move">Commercial Move</SelectItem>
                <SelectItem value="Storage Inquiry">Storage Inquiry</SelectItem>
                <SelectItem value="Packing Services">
                  Packing Services
                </SelectItem>
                <SelectItem value="Complaint">Complaint</SelectItem>
                <SelectItem value="Compliment">Compliment</SelectItem>
                <SelectItem value="General Question">
                  General Question
                </SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell us how we can help you..."
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              rows={6}
              required
            />
          </div>

          {/* Keep this part unchanged as requested */}
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? "Preparing Email..." : "Send Message"}
          </Button>

          <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold mb-2">How it works:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Fill out the form above with your details</li>
              <li>Click "Send Message" to prepare your email</li>
              <li>Your email client will open with a pre-filled message</li>
              <li>Click send in your email client to complete your inquiry</li>
            </ol>
            <p className="mt-2 text-xs">
              <strong>Alternative:</strong> You can also Email us directly at{" "}
              <a
                href="mailto:info@anymove.ie"
                className="text-primary hover:underline"
              >
                info@anymove.ie
              </a>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
