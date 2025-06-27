"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How much does a move cost?",
      answer:
        "Moving costs depend on several factors including distance, size of your home, additional services, and time of year. We offer free, no-obligation quotes to give you an accurate estimate. Local moves typically start from €200, while long-distance moves vary based on distance and volume.",
    },
    {
      question: "How far in advance should I book my move?",
      answer:
        "We recommend booking at least 2-3 weeks in advance, especially during peak moving season (May-September). However, we can often accommodate last-minute moves depending on availability. The earlier you book, the more likely you are to get your preferred date and time.",
    },
    {
      question: "Are my belongings insured during the move?",
      answer:
        "Yes, we carry comprehensive insurance coverage for all moves. Our basic coverage is included at no extra cost, and we offer additional insurance options for high-value items. We'll explain all coverage options during your quote consultation.",
    },
    {
      question: "What should I do to prepare for moving day?",
      answer:
        "Start packing non-essential items early, label boxes clearly, and create an inventory list. Confirm parking arrangements for our truck, disconnect appliances, and pack a 'first day' box with essentials. We'll provide a detailed moving day checklist when you book.",
    },
    {
      question: "Do you provide packing materials?",
      answer:
        "Yes, we offer a full range of high-quality packing materials including boxes, bubble wrap, packing paper, and tape. You can purchase these separately or as part of our full packing service. We also offer eco-friendly packing options.",
    },
    {
      question: "Can you move specialty items like pianos or artwork?",
      answer:
        "We specialize in moving delicate and valuable items including pianos, artwork, antiques, and fragile collectibles. Our team has specialized training and equipment for these items. Additional charges may apply for specialty item handling.",
    },
    {
      question: "What happens if there are delays on moving day?",
      answer:
        "While we strive to stay on schedule, sometimes delays occur due to traffic, weather, or unforeseen circumstances. We'll keep you informed throughout the process and adjust our timeline accordingly. Our team works efficiently to minimize any delays.",
    },
    {
      question: "Do you offer storage services?",
      answer:
        "Yes, we have secure, climate-controlled storage facilities available for both short-term and long-term needs. Our storage units are monitored 24/7 and we offer flexible rental terms. Perfect for when there's a gap between your move-out and move-in dates.",
    },
    {
      question: "Can I pack some items myself and have you pack others?",
      answer:
        "Many customers choose a hybrid approach where they pack personal items and we handle fragile or bulky items. We can customize our packing services to meet your specific needs and budget.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, bank transfers, and all major credit/debit cards. Payment is typically due upon completion of the move, though we may require a deposit for large or long-distance moves. We'll discuss payment terms when you book your move.",
    },
    {
      question: "Do you move during weekends and holidays?",
      answer:
        "Yes, we offer moving services seven days a week, including weekends and most holidays. Weekend and holiday moves may have different pricing. We understand that not everyone can move during weekdays, so we're flexible with scheduling.",
    },
    {
      question: "What if something gets damaged during the move?",
      answer:
        "While damage is rare, we take full responsibility when it occurs. Report any damage immediately and we'll work with you and our insurance company to resolve the issue quickly. We maintain detailed inventories and take photos to document the condition of your items.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="border-2 hover:border-primary/30 transition-colors">
            <CardContent className="p-0">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-navy-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-navy-900 mb-4">Still Have Questions?</h3>
        <p className="text-gray-600 mb-6">
          Our friendly team is here to help. Contact us for personalized answers to your moving questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+35312345678"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Call Us Now
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Send Message
          </a>
        </div>
      </div>
    </div>
  )
}
