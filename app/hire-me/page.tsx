import Link from "next/link"
import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"
import RevealOnView from "@/components/reveal-on-view"
import AnimatedHeading from "@/components/animated-heading"
import { Mail, Calendar, MessageCircle, Download } from "lucide-react"

export default function HireMePage() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that enhance user experience",
      price: "Starting at $2,500"
    },
    {
      title: "Product Design",
      description: "End-to-end product design from concept to final implementation",
      price: "Starting at $5,000"
    },
    {
      title: "Design Automation Systems",
      description: "Building scalable design automation systems for consistent brand experience",
      price: "Starting at $3,500"
    },
    {
      title: "AI/ML Integration",
      description: "Implementing AI-powered features and machine learning solutions",
      price: "Starting at $4,000"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We'll discuss your project goals, timeline, and requirements"
    },
    {
      step: "02", 
      title: "Proposal & Planning",
      description: "I'll create a detailed proposal with timeline and deliverables"
    },
    {
      step: "03",
      title: "Design & Development", 
      description: "Collaborative design process with regular check-ins and feedback"
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final delivery with documentation and ongoing support"
    }
  ]

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      <DotGridShader />
      
      <section className="px-4 pt-4 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-dynamic-md">
            <Button asChild variant="ghost" size="sm" className="text-white/70 hover:text-white text-dynamic-sm">
              <Link href="/">← Back to Portfolio</Link>
            </Button>
          </div>

          <RevealOnView className="text-center mb-dynamic-xl">
            <AnimatedHeading
              className="hero-title font-black leading-[1.05] tracking-tight text-fit mb-dynamic-md"
              lines={[
                "Let's work together",
                "and create something amazing"
              ]}
            />
            <p className="text-dynamic-lg text-white/70 max-w-2xl mx-auto text-fit">
              Ready to bring your ideas to life? I'm available for freelance projects and full-time opportunities.
            </p>
          </RevealOnView>

          {/* Contact Section */}
          <RevealOnView delay={200} className="mb-dynamic-xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-dynamic-lg text-center">
              <h2 className="text-dynamic-xl font-bold mb-dynamic-md text-fit">Get In Touch</h2>
              <div className="flex flex-col sm:flex-row gap-dynamic-md justify-center items-center">
                <a 
                  href="mailto:nme3015@gmail.com"
                  className="inline-flex items-center gap-dynamic-xs bg-white text-black px-dynamic-lg py-dynamic-sm rounded-full font-medium hover:bg-white/90 transition-colors text-fit"
                >
                  <Mail className="h-5 w-5" />
                  nme3015@gmail.com
                </a>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </RevealOnView>

          {/* Services Section */}
          <RevealOnView delay={300} className="mb-dynamic-xl">
            <h2 className="text-dynamic-2xl font-bold text-center mb-dynamic-lg text-fit">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-dynamic-md">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-dynamic-lg">
                  <h3 className="text-dynamic-lg font-semibold mb-dynamic-sm text-fit">{service.title}</h3>
                  <p className="text-white/70 mb-dynamic-md text-fit">{service.description}</p>
                  <div className="text-dynamic-md font-medium text-white text-fit">{service.price}</div>
                </div>
              ))}
            </div>
          </RevealOnView>

          {/* Process Section */}
          <RevealOnView delay={400} className="mb-dynamic-xl">
            <h2 className="text-dynamic-2xl font-bold text-center mb-dynamic-lg text-fit">How We'll Work Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-dynamic-md">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-dynamic-sm">
                    <span className="text-dynamic-lg font-bold text-fit">{item.step}</span>
                  </div>
                  <h3 className="text-dynamic-md font-semibold mb-dynamic-xs text-fit">{item.title}</h3>
                  <p className="text-white/70 text-dynamic-sm text-fit">{item.description}</p>
                </div>
              ))}
            </div>
          </RevealOnView>

          {/* Availability Section */}
          <RevealOnView delay={500} className="mb-dynamic-xl">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-dynamic-lg text-center">
              <h2 className="text-dynamic-xl font-bold mb-dynamic-sm text-fit">Current Availability</h2>
              <p className="text-white/70 mb-dynamic-md text-fit">
                I'm currently available for new projects starting in January 2024
              </p>
              <div className="flex flex-col sm:flex-row gap-dynamic-sm justify-center">
                <Button className="bg-white text-black hover:bg-white/90">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start a Project
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </RevealOnView>

          {/* FAQ Section */}
          <RevealOnView delay={600}>
            <h2 className="text-dynamic-2xl font-bold text-center mb-dynamic-lg text-fit">Frequently Asked Questions</h2>
            <div className="space-y-dynamic-md max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-dynamic-lg">
                <h3 className="text-dynamic-lg font-semibold mb-dynamic-sm text-fit">What's your typical project timeline?</h3>
                <p className="text-white/70 text-fit">Most projects take 2-8 weeks depending on scope and complexity. I'll provide a detailed timeline during our initial consultation.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-dynamic-lg">
                <h3 className="text-dynamic-lg font-semibold mb-dynamic-sm text-fit">Do you work with startups?</h3>
                <p className="text-white/70 text-fit">Absolutely! I love working with startups and early-stage companies. I offer flexible pricing and payment plans for qualifying startups.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-dynamic-lg">
                <h3 className="text-dynamic-lg font-semibold mb-dynamic-sm text-fit">What's included in your design process?</h3>
                <p className="text-white/70 text-fit">Research, wireframing, visual design, prototyping, and handoff documentation. I also provide revisions and support during development.</p>
              </div>
            </div>
          </RevealOnView>
        </div>
      </section>
    </main>
  )
}