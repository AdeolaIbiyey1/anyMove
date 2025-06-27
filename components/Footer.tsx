import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/anymove-logo-final.png"
                alt="AnyMove Ireland - Effortless Moving and Deliveries"
                className="h-14 w-auto"
              />
            </div>
            {/* <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer" />
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/residential" className="hover:text-white">
                  Residential Moves
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="hover:text-white">
                  Commercial Moves
                </Link>
              </li>
              <li>
                <Link href="/services/long-distance" className="hover:text-white">
                  Long-Distance Moves
                </Link>
              </li>
              <li>
                <Link href="/services/packing" className="hover:text-white">
                  Packing Services
                </Link>
              </li>
              <li>
                <Link href="/services/storage" className="hover:text-white">
                  Storage Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/specialty" className="hover:text-white">
                  Specialty Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-white">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>
                  Citygate Business Centre
                  <br />
                  Hills Industrial Estate
                  <br />
                  Laraghcon, Lucan
                  <br />
                  Co. Dublin, Ireland
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+353831673653</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@anymove.ie</span>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-gray-300 text-sm">
                Mon - Fri: 8:00 AM - 6:00 PM
                <br />
                Sat: 9:00 AM - 4:00 PM
                <br />
                Sun: Emergency calls only
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} AnyMove Ireland. All rights reserved. Licensed & Insured Moving Company.
          </p>
        </div>
      </div>
    </footer>
  )
}
