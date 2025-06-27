import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Move? Let's Get Started!</h2>
        <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
          Get your free quote today and experience the AnyMove difference. Professional, reliable, and stress-free
          moving services.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            <Link href="/quote">Get Free Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
          >
            <Link href="/contact" className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
          >
            <Link href="https://wa.me/353831673653" className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
