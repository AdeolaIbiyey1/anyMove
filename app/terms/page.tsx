import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions - AnyMove Ireland | Service Terms",
  description:
    "Read our terms and conditions for AnyMove Ireland moving services. Understand our policies and your rights as our customer.",
}

export default function TermsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">Terms & Conditions</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600">
              By using AnyMove Ireland's services, you agree to be bound by these Terms and Conditions. If you do not
              agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Services</h2>
            <p className="text-gray-600 mb-4">
              AnyMove Ireland provides professional moving, logistics, and storage services including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Residential and commercial moving</li>
              <li>Packing and unpacking services</li>
              <li>Storage solutions</li>
              <li>Specialty item handling</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Booking and Payment</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All bookings must be confirmed in writing</li>
              <li>Payment is due upon completion of services unless otherwise agreed</li>
              <li>Cancellations must be made at least 24 hours in advance</li>
              <li>Late cancellation fees may apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Customer Responsibilities</h2>
            <p className="text-gray-600 mb-4">Customers are responsible for:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Providing accurate information about the move</li>
              <li>Ensuring access to both pickup and delivery locations</li>
              <li>Declaring valuable or fragile items</li>
              <li>Obtaining necessary permits for parking or access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Liability and Insurance</h2>
            <p className="text-gray-600 mb-4">
              AnyMove Ireland carries comprehensive insurance coverage. Our liability is limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Repair or replacement of damaged items up to their current market value</li>
              <li>Maximum liability as specified in our insurance policy</li>
              <li>Claims must be reported within 7 days of delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Prohibited Items</h2>
            <p className="text-gray-600 mb-4">We cannot transport:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Hazardous materials or chemicals</li>
              <li>Perishable food items</li>
              <li>Live plants or animals</li>
              <li>Illegal substances</li>
              <li>Items of extraordinary value without prior arrangement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">7. Force Majeure</h2>
            <p className="text-gray-600">
              AnyMove Ireland is not liable for delays or inability to perform services due to circumstances beyond our
              control, including but not limited to weather conditions, traffic, or government restrictions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-600">For questions about these Terms and Conditions, contact us at:</p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p>
                <strong>AnyMove Ireland</strong>
              </p>
              <p>Email: info@anymove.ie</p>
              <p>Phone: +353831673653</p>
              <p>Address: Lucan, Co. Dublin, Ireland</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
