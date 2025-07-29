import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Documents?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join thousands of users who trust PDF Pilot for their document conversion needs. Start converting your files
          today - it's fast, secure, and completely free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/tools">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Start Converting Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/#features-list">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              View All Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
