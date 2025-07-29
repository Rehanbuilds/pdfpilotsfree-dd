import { Button } from "@/components/ui/button"
import { ArrowRight, Upload } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
            Your Ultimate
            <span className="block">PDF Conversion Tool</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Convert, merge, split, and edit PDF files with ease. Support for Word, Excel, PowerPoint, and many other
            formats. Fast, secure, and completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/tools">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                <Upload className="mr-2 h-5 w-5" />
                Start Converting
              </Button>
            </Link>
            <Link href="/tools">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-black text-black hover:bg-black hover:text-white bg-transparent"
              >
                View All Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
