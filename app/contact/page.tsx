import Link from "next/link"
import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"
import RevealOnView from "@/components/reveal-on-view"
import AnimatedHeading from "@/components/animated-heading"
import { Mail, Phone, Linkedin, Github, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import GlowOnClick from "@/components/GlowOnClick"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "nme3015@gmail.com",
      href: "mailto:nme3015@gmail.com",
      description: "Best for project inquiries"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 7311 609905",
      href: "tel:+447311609905",
      description: "Prefer message first. Available Mon-Fri, 9AM-6PM"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ivansmirnov",
      href: "https://linkedin.com/in/ivansmirnov",
      description: "Professional networking"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/fastcomet01",
      href: "https://github.com/fastcomet01",
      description: "View my code and projects"
    }
  ]

  const services = [
    "UI/UX Design",
    "Product Design", 
    "Design Automation Systems",
    "AI/ML Integration",
    "Prototyping",
    "User Research"
  ]

  const faqs = [
    {
      question: "What's your typical response time?",
      answer: "I typically respond to emails within 24 hours during business days. For urgent matters, feel free to call or text."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones and remote collaboration."
    },
    {
      question: "What information should I include in my initial contact?",
      answer: "Please include your project timeline, budget range, and a brief description of what you're looking to achieve."
    }
  ]

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      <section className="px-4 pt-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-dynamic-md">
            <Button asChild variant="ghost" size="sm" className="text-white/70 hover:text-white text-dynamic-sm">
              <Link href="/">← Back to Portfolio</Link>
            </Button>
          </div>

          <RevealOnView
            as="header"
            intensity="hero"
            className="container-hero relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-dynamic-md md:p-dynamic-lg lg:p-dynamic-xl mb-dynamic-md"
            staggerChildren
          >
            {/* Gradient Background Image */}
            <div 
              className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage: 'url(/images/gradient-background.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            
            {/* Dot Grid Overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
              <DotGridShader />
            </div>
            
            {/* Dark overlay to ensure text readability */}
            <div className="pointer-events-none absolute inset-0 bg-black/20" />

            <div className="relative max-w-4xl mx-auto text-center">
              {/* Main animated heading */}
              <div className="relative mb-dynamic-md md:mb-dynamic-lg">

                
                {/* Creative background animations */}
                <div className="absolute inset-0 -z-10">
                  {/* Floating gradient orbs */}
                  <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-0 w-20 h-20 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full blur-xl animate-bounce delay-500"></div>
                  
                  {/* Animated particles */}
                  <div className="absolute top-4 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-700"></div>
                  <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1200"></div>
                  
                  {/* Glowing text shadow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 blur-2xl opacity-0 animate-pulse delay-500"></div>
                </div>
              </div>

              <RevealOnView
                  as="p"
                  className="hero-subtitle text-white max-w-3xl mx-auto mb-dynamic-md md:mb-dynamic-lg leading-relaxed text-dynamic-lg font-medium"
                  delay={0.8}
                >
                  I'm here to help you create digital experiences that make an impact
                </RevealOnView>

              <RevealOnView
                as="div"
                className="flex flex-wrap justify-center items-center gap-dynamic-sm md:gap-dynamic-md text-dynamic-sm md:text-dynamic-base text-white/60"
                delay={1.0}
              >
                <div className="flex items-center gap-dynamic-xs text-fit">
                  <MapPin className="h-4 w-4" />
                  <span>London</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-white/40" />
                <div className="flex items-center gap-dynamic-xs text-fit">
                  <Clock className="h-4 w-4" />
                  <span>GMT Timezone</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-white/40" />
                <div className="flex items-center gap-dynamic-xs text-fit">
                  <span className="h-2 w-2 rounded-full bg-green-400"></span>
                  <span>Available for new projects</span>
                </div>
              </RevealOnView>
            </div>
          </RevealOnView>

          {/* Contact Methods */}
          <RevealOnView delay={0.2} className="mb-dynamic-lg lg:mb-dynamic-xl">
            <h2 className="text-dynamic-2xl md:text-dynamic-3xl font-bold text-center mb-dynamic-md lg:mb-dynamic-lg text-fit">
              Get In Touch
            </h2>
            <div className="grid gap-dynamic-md sm:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method, index) => (
                <RevealOnView
                  key={method.label}
                  delay={0.3 + index * 0.1}
                  className="group"
                >
                  <GlowOnClick>
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-dynamic-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-dynamic-sm group-hover:bg-white/20 transition-colors">
                          <method.icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold mb-dynamic-xs text-dynamic-base text-fit">{method.label}</h3>
                        <p className="text-white/70 text-dynamic-sm mb-dynamic-xs text-fit break-all">{method.value}</p>
                        <p className="text-white/50 text-dynamic-xs text-fit">{method.description}</p>
                      </div>
                    </a>
                  </GlowOnClick>
                </RevealOnView>
              ))}
            </div>
          </RevealOnView>

          {/* My Story */}
          <RevealOnView delay={0.5} className="mb-dynamic-lg lg:mb-dynamic-xl">
            <h2 className="text-dynamic-2xl md:text-dynamic-3xl font-bold text-center mb-dynamic-md lg:mb-dynamic-lg text-fit">
              My Story
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-dynamic-lg md:p-dynamic-xl my-story-animated">
              <div className="space-y-dynamic-md text-white/90 leading-relaxed">
                <p className="text-fit">
                  I'm currently a university student pursuing Computer Systems Engineering, where my journey began with coding in Python, focusing on algorithms and data structures.
                </p>
                <p className="text-fit">
                  During my internships I picked up practical knowledge of system design, cloud architecture, and the use of different development frameworks, which gave me a broader perspective on building scalable and efficient solutions.
                </p>
                <p className="text-fit">
                  I also grew curious about UI/UX design and startups, interested by how functionality and simplicity can be combined to create meaningful user experiences while also proving the idea on the market. With a long-standing interest in ai and machine learning development, in my free time I read and watch on those topics.
                </p>
                <p className="text-fit">
                  Looking ahead, I'm deeply intrigued by the future of AI and the potential of emerging tools to reshape how we interact with technology.
                </p>
              </div>
            </div>
          </RevealOnView>

          



          {/* Services */}
          <RevealOnView delay={0.8} className="mb-dynamic-lg lg:mb-dynamic-xl">
            <h2 className="text-dynamic-2xl md:text-dynamic-3xl font-bold text-center mb-dynamic-md lg:mb-dynamic-lg text-fit">
              What I Can Help With
            </h2>
            <div className="grid gap-dynamic-lg sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto px-4">
              {services.map((service, index) => (
                <RevealOnView
                  key={service}
                  delay={0.9 + index * 0.1}
                  className="group relative p-2"
                >
                  <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-dynamic-lg text-center transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-red-500/40 hover:bg-gradient-to-br hover:from-red-500/20 hover:via-red-600/10 hover:to-red-700/10 cursor-pointer transform-gpu will-change-transform">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-600/0 to-red-700/0 group-hover:from-red-500/10 group-hover:via-red-600/5 group-hover:to-red-700/10 transition-all duration-700 rounded-2xl"></div>
                    
                    {/* Glowing border effect - contained within padding */}
                    <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-r from-red-500/0 via-red-600/0 to-red-700/0 group-hover:from-red-500/30 group-hover:via-red-600/25 group-hover:to-red-700/30 blur-sm transition-all duration-500 -z-10 opacity-0 group-hover:opacity-100"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <span className="text-dynamic-base font-semibold text-fit group-hover:text-white transition-colors duration-300">{service}</span>
                      
                      {/* Animated accent line */}
                      <div className="mt-dynamic-xs h-0.5 w-0 bg-gradient-to-r from-red-500 to-red-600 mx-auto group-hover:w-full transition-all duration-500 ease-out"></div>
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-opacity duration-500 delay-100"></div>
                    <div className="absolute top-1/2 right-1 w-0.5 h-0.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-400 delay-200"></div>
                  </div>
                </RevealOnView>
              ))}
            </div>
          </RevealOnView>

          {/* FAQ */}
          <RevealOnView delay={1.0}>
            <h2 className="text-dynamic-2xl md:text-dynamic-3xl font-bold text-center mb-dynamic-md lg:mb-dynamic-lg text-fit">
              Frequently Asked Questions
            </h2>
            <div className="space-y-dynamic-md max-w-3xl mx-auto px-4">
              {faqs.map((faq, index) => (
                <RevealOnView
                  key={index}
                  delay={1.1 + index * 0.1}
                  className="group relative p-2"
                >
                  <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-dynamic-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-red-500/40 hover:bg-gradient-to-br hover:from-red-500/20 hover:via-red-600/10 hover:to-red-700/10 cursor-pointer transform-gpu will-change-transform">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-600/0 to-red-700/0 group-hover:from-red-500/10 group-hover:via-red-600/5 group-hover:to-red-700/10 transition-all duration-700 rounded-2xl"></div>
                    
                    {/* Glowing border effect */}
                    <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-r from-red-500/0 via-red-600/0 to-red-700/0 group-hover:from-red-500/30 group-hover:via-red-600/25 group-hover:to-red-700/30 blur-sm transition-all duration-500 -z-10 opacity-0 group-hover:opacity-100"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-dynamic-lg font-semibold mb-dynamic-sm text-fit group-hover:text-white transition-colors duration-300">{faq.question}</h3>
                      
                      {/* Animated accent line */}
                      <div className="mb-dynamic-sm h-0.5 w-0 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                      
                      <p className="text-white/70 text-fit group-hover:text-white/90 transition-colors duration-300">{faq.answer}</p>
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-4 right-4 w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-opacity duration-500 delay-100"></div>
                    <div className="absolute top-1/2 right-2 w-0.5 h-0.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-400 delay-200"></div>
                    
                    {/* Question mark icon animation */}
                    <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12">
                      <span className="text-red-400 text-xs font-bold">?</span>
                    </div>
                  </div>
                </RevealOnView>
              ))}
            </div>
          </RevealOnView>
        </div>
      </section>
    </main>
  )
}
