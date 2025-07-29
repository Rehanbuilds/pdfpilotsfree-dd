import { Shield, Zap, Globe, Lock } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your files are processed securely and deleted automatically after conversion.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Convert your files in seconds with our optimized conversion engine.",
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description: "Access PDF Pilot from any device, anywhere in the world.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "We don't store your files. Complete privacy and data protection guaranteed.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Why Choose PDF Pilot?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the most comprehensive PDF toolkit that handles all your document conversion needs with
            unmatched speed, security, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
