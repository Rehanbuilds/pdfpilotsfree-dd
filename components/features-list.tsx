import { Shield, Zap, Cloud, Lock, Users, Smartphone } from "lucide-react"

export function FeaturesList() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your files are encrypted with 256-bit SSL encryption and automatically deleted after processing.",
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Convert files in seconds with our optimized servers and advanced compression algorithms.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based Processing",
      description: "No software installation required. Process files directly in your browser from anywhere.",
    },
    {
      icon: Lock,
      title: "Complete Privacy",
      description: "We don't store, share, or access your files. Your documents remain completely private.",
    },
    {
      icon: Users,
      title: "Batch Processing",
      description: "Convert multiple files at once to save time and increase your productivity.",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Works perfectly on all devices - desktop, tablet, and mobile. Convert files on the go.",
    },
  ]

  return (
    <section id="features-list" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Advanced Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make PDF Pilot the preferred choice for professionals and individuals
            worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-black text-white rounded-xl mb-6">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-200 gap-4 sm:gap-0">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">500+</div>
              <div className="text-xs sm:text-sm text-gray-600">Files converted daily</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200 mx-8"></div>
            <div className="block sm:hidden w-12 h-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">99.9%</div>
              <div className="text-xs sm:text-sm text-gray-600">Uptime guarantee</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200 mx-8"></div>
            <div className="block sm:hidden w-12 h-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black mb-1">4.9/5</div>
              <div className="text-xs sm:text-sm text-gray-600">User satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
