import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - AnyMove Ireland | Data Protection",
  description:
    "Read our privacy policy to understand how AnyMove Ireland collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you request a quote, book our services, or
              contact us. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Name and contact information (email, phone, address)</li>
              <li>Moving details (dates, locations, inventory)</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide and improve our moving services</li>
              <li>Process quotes and bookings</li>
              <li>Communicate with you about your move</li>
              <li>Send service updates and promotional materials (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except as
              described in this policy. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Insurance companies when necessary for claims</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
              100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">6. Contact Us</h2>
            <p className="text-gray-600">If you have questions about this Privacy Policy, please contact us at:</p>
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
