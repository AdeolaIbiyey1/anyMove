"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Reviews", href: "/reviews" },
    { name: "Get Quote", href: "/quote" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with scrolling animation */}
      <div className="bg-navy-900 text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+353831673653</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@anymove.ie</span>
              </div>
              <span>Serving all of Ireland • Licensed & Insured</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-8 text-sm ml-8">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+353831673653</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@anymove.ie</span>
              </div>
              <span>Serving all of Ireland • Licensed & Insured</span>
            </div>
            {/* Third duplicate for longer screens */}
            <div className="flex items-center space-x-8 text-sm ml-8">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+353831673653</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@anymove.ie</span>
              </div>
              <span>Serving all of Ireland • Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/anymove-logo-final.png"
              alt="AnyMove Ireland - Effortless Moving and Deliveries"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
            >
              <Link href="/quote">Get Quote</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-black">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-black bg-transparent"
                >
                  <Link href="/quote">Get Quote</Link>
                </Button>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-black">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
