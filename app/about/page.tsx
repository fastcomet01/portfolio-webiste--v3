import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import DotGridShader from "@/components/DotGridShader"
import RevealOnView from "@/components/reveal-on-view"
import AnimatedHeading from "@/components/animated-heading"

export default function AboutPage() {
  const skills = [
    "Product Design",
    "UI/UX Design",
    "Design Automation Systems",
    "AI models",
    "CI/CD",
    "User Research",
    "Figma Design",
    "Algorithms&Data Structures",
    "React",
    "Node.js",
  ]

  const experience = [
    {
      company: "VTB bank",
      role: "Figma Designer",
      period: "10.9.2022-15.11.2022",
      description: "Constructing design for a new mobile app feature while integrating and testing",
    },
    {
      company: "Cloud.ru",
      role: "AI engineer intern",
      period: "17.07.2025-19.10.2025",
      description: "Deepdive on AI models and machine learning algorithms, while improving knowledge on cloud architecture",
    },
    {
      company: "freelance",
      role: "UI/UX Designer",
      period: "current",
      description: "Creating personal UI/UX projects and improving my core AI/ML knowledge to boost my understanding and skills. Also creating automation systems through 8n8.",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      <section className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-dynamic-md">
            <Button asChild variant="ghost" size="sm" className="text-white/70 hover:text-white text-dynamic-sm">
              <Link href="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Portfolio
              </Link>
            </Button>
          </div>

          <RevealOnView
            as="header"
            intensity="hero"
            className="container-hero relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-950/90 via-slate-900/80 to-emerald-950/70 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 mb-dynamic-md"
             staggerChildren
           >
             {/* Subtle accent gradient overlay */}
 <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-400/10 rounded-3xl white-glow"></div>
            
            <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
              <DotGridShader />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-8 md:px-16 lg:px-20">
              <AnimatedHeading
                className="hero-title font-black leading-tight md:leading-[0.9] tracking-tight mb-dynamic-md md:mb-dynamic-lg text-white drop-shadow-lg"
                lines={["About"]}
                startDelay={0.2}
              />

              <RevealOnView
                as="h2"
                className="text-dynamic-base sm:text-dynamic-lg md:text-dynamic-xl font-bold text-white mb-dynamic-md drop-shadow-md leading-snug break-words whitespace-normal"
                delay={0.6}
              >
                Ready to bring your ideas to life?
              </RevealOnView>

              <RevealOnView
                as="p"
                className="hero-subtitle text-white/90 max-w-3xl mx-auto mb-dynamic-md md:mb-dynamic-lg leading-relaxed text-fit drop-shadow-sm"
                delay={0.8}
              >
                Who believes great design should be both beautiful and functional, creating digital experiences that truly make a difference
              </RevealOnView>

              <RevealOnView
                as="div"
                className="info-row flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 md:gap-4 space-y-2 sm:space-y-0 text-dynamic-sm md:text-dynamic-base text-slate-100/80"
                delay={1.0}
              >
                <div className="flex items-center gap-2 sm:gap-3 whitespace-normal break-words w-full sm:w-auto justify-center sm:justify-start">
                  <span>📍</span>
                  <span>London</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 whitespace-normal break-words w-full sm:w-auto justify-center sm:justify-start">
                  <span>📅</span>
                  <span>3+ years experience</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 whitespace-normal break-words w-full sm:w-auto justify-center sm:justify-start">
                   <span>🎵</span>
                   <span>Music producer</span>
                 </div>
              </RevealOnView>
            </div>
          </RevealOnView>

          <div className="grid gap-dynamic-md lg:grid-cols-2 lg:gap-dynamic-lg xl:gap-dynamic-xl mb-dynamic-lg lg:mb-dynamic-xl">
            {/* Story */}
            <RevealOnView
              as="section"
              className="container-text relative overflow-hidden rounded-3xl border border-gray-400/30 bg-gradient-to-br from-gray-900/90 via-slate-900/80 to-gray-950/70 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20"
                delay={0.2}
              >
                {/* Subtle accent gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-transparent to-gray-400/10 rounded-3xl"></div>
                
                {/* Enhanced border effect for glow */}
                <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-r from-gray-400/20 via-gray-500/10 to-gray-400/20 blur-sm opacity-60"></div>
                
                <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                  <DotGridShader />
                </div>

              <div className="relative">
                <div className="flex items-center gap-dynamic-sm mb-dynamic-sm md:mb-dynamic-md">
                  <span className="text-dynamic-xl filter drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-110" aria-hidden="true" data-no-animate>💻</span>
                  <h2 className="text-dynamic-xl md:text-dynamic-2xl lg:text-dynamic-3xl font-bold text-white drop-shadow-lg text-fit">
                    My Story
                  </h2>
                </div>

                <div className="space-y-dynamic-sm md:space-y-dynamic-md text-slate-100/90 text-container-responsive leading-relaxed px-2 sm:px-4">
                  <p className="text-fit drop-shadow-sm">
                    I'm currently a university student pursuing Computer Systems Engineering, where my journey began with coding in Python, focusing on algorithms and data structures.
                  </p>
                  <p className="text-fit drop-shadow-sm">
                    During my internships I picked up practical knowledge of system design, cloud architecture, and the use of different development frameworks, which gave me a broader perspective on building scalable and efficient solutions.
                  </p>
                  <p className="text-fit drop-shadow-sm">
                    I also grew curious about UI/UX design and startups, interested by how functionality and simplicity can be combined to create meaningful user experiences while also proving the idea on the market. With a long-standing interest in ai and machine learning development, in my free time I read and watch on those topics.
                  </p>
                  <p className="text-fit drop-shadow-sm">
                    Looking ahead, I'm deeply intrigued by the future of AI and the potential of emerging tools to reshape how we interact with technology.
                  </p>
                </div>
              </div>
            </RevealOnView>

            {/* Skills */}
            <RevealOnView
                as="section"
               className="container-text relative overflow-hidden rounded-3xl border border-gray-400/30 bg-gradient-to-br from-gray-900/90 via-slate-900/80 to-gray-950/70 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20"
                 delay={0.4}
               >
                 {/* Subtle accent gradient overlay */}
                 <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-transparent to-gray-400/10 rounded-3xl"></div>
                 
                 {/* Enhanced border effect for glow */}
                 <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-r from-gray-400/20 via-gray-500/10 to-gray-400/20 blur-sm opacity-60"></div>
                 
                 <div className="pointer-events-none absolute inset-0 opacity-8 mix-blend-soft-light">
                   <DotGridShader />
                 </div>

              <div className="relative">
                <div className="flex items-center gap-dynamic-sm mb-dynamic-sm md:mb-dynamic-md">
                  <span className="text-dynamic-xl filter drop-shadow-lg transition-transform duration-300 ease-in-out hover:scale-110" aria-hidden="true" data-no-animate>🛠️</span>
                  <h2 className="text-dynamic-xl md:text-dynamic-2xl lg:text-dynamic-3xl font-bold text-white drop-shadow-lg text-fit">
                    Skills & Tools
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-dynamic-xs md:gap-dynamic-sm px-2 sm:px-4">
                  {skills.map((skill, index) => (
                    <RevealOnView
                      key={skill}
                      as="div"
                      className="group relative h-16 md:h-20 flex items-center justify-center p-dynamic-sm md:p-dynamic-md rounded-xl cursor-pointer overflow-hidden m-1 sm:m-2 transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1"
                      delay={0.6 + index * 0.05}
                    >
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-600/25 via-emerald-600/20 to-blue-500/25 opacity-70 transition-opacity duration-500 group-hover:opacity-100"></div>
                      
                      {/* Animated Border Gradient */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/60 via-emerald-500/50 to-blue-400/60 p-[1px] transition-all duration-500 group-hover:from-green-400 group-hover:via-emerald-400 group-hover:to-blue-300">
                        <div className="h-full w-full rounded-xl bg-slate-900/70 backdrop-blur-sm transition-all duration-500 group-hover:bg-slate-900/50"></div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/0 via-emerald-500/0 to-blue-400/0 blur-xl transition-all duration-500 group-hover:from-green-500/40 group-hover:via-emerald-500/30 group-hover:to-blue-400/40 group-hover:scale-110"></div>
                      
                      {/* Floating Particles */}
                      <div className="absolute top-2 left-2 w-1 h-1 bg-green-400 rounded-full opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:animate-ping"></div>
                      <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 transition-all duration-700 delay-100 group-hover:opacity-100 group-hover:animate-pulse"></div>
                      <div className="absolute bottom-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 transition-all duration-700 delay-200 group-hover:opacity-100 group-hover:animate-bounce"></div>
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
                      
                      {/* Content */}
                      <span className="relative z-10 px-2 py-1 leading-tight text-dynamic-xs md:text-dynamic-sm text-slate-100 font-medium text-center text-fit transition-all duration-300 group-hover:text-white group-hover:font-semibold group-hover:drop-shadow-lg">
                        {skill}
                      </span>
                      
                      {/* Hover Icon */}
                      <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </RevealOnView>
                  ))}
                </div>
              </div>
            </RevealOnView>
          </div>

          <RevealOnView
            as="section"
            className="container-text relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-green-950/80 via-slate-900/70 to-emerald-950/60 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 mb-dynamic-lg lg:mb-dynamic-xl"
             delay={0.6}
           >
             <div className="pointer-events-none absolute inset-0 opacity-8 mix-blend-soft-light">
               <DotGridShader />
             </div>
 
             {/* Subtle accent gradient overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-400/5 rounded-3xl"></div>

            <div className="relative max-w-4xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
              <div className="flex items-center gap-dynamic-sm mb-dynamic-md md:mb-dynamic-lg lg:mb-dynamic-xl">
                <h2 className="text-dynamic-2xl md:text-dynamic-3xl lg:text-dynamic-4xl font-bold text-white drop-shadow-lg text-center lg:text-left text-fit px-4 sm:px-6 md:px-8 mx-2 sm:mx-4">
                  Experience
                </h2>
              </div>

              <div className="space-y-dynamic-md md:space-y-dynamic-lg px-4 sm:px-6 md:px-8 mx-2 sm:mx-4">
                {experience.map((job, index) => (
                  <RevealOnView
                    key={index}
                    as="div"
                    className="border-l-2 border-cyan-400/40 pl-dynamic-md md:pl-dynamic-lg pb-dynamic-md md:pb-dynamic-lg last:pb-0 ml-2 sm:ml-4 relative"
                    delay={0.8 + index * 0.1}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-2 top-2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full shadow-lg"></div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-dynamic-xs md:mb-dynamic-sm px-2 sm:px-4">
                      <h3 className="text-dynamic-lg md:text-dynamic-xl lg:text-dynamic-2xl font-semibold text-white drop-shadow-sm text-fit">
                        {job.role}
                      </h3>
                      <span className="text-cyan-200/80 text-dynamic-xs md:text-dynamic-sm lg:text-dynamic-base mt-1 lg:mt-0 text-fit font-medium">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-slate-100/90 font-medium mb-dynamic-xs md:mb-dynamic-sm text-dynamic-sm md:text-dynamic-base lg:text-dynamic-lg text-fit px-2 sm:px-4 drop-shadow-sm">
                      {job.company}
                    </p>
                    <p className="text-slate-200/85 text-dynamic-sm md:text-dynamic-base lg:text-dynamic-lg leading-relaxed text-fit px-2 sm:px-4 drop-shadow-sm">
                      {job.description}
                    </p>
                  </RevealOnView>
                ))}
              </div>
            </div>
          </RevealOnView>

          <RevealOnView 
            as="section" 
            className="container-text relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-950/80 via-slate-900/70 to-emerald-950/60 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center max-w-4xl mx-auto" 
             delay={1.0}
           >
            <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 mx-2 sm:mx-4">
              <div className="flex items-center justify-center gap-dynamic-sm mb-dynamic-sm md:mb-dynamic-md">
                <span className="text-dynamic-xl">🤝</span>
                <h2 className="text-dynamic-2xl md:text-dynamic-3xl lg:text-dynamic-4xl font-bold text-white text-fit px-4 sm:px-6 mx-2 sm:mx-4">
                  Let's work together
                </h2>
              </div>
              <p className="text-slate-100/90 mb-dynamic-md md:mb-dynamic-lg max-w-2xl mx-auto text-container-responsive leading-relaxed px-8 sm:px-10 md:px-14 text-fit mx-4 sm:mx-6">
                I'm always interested in new opportunities and exciting projects. Let's chat about creating something
                amazing together.
              </p>
              <div className="px-4 sm:px-6">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full text-dynamic-base md:text-dynamic-lg p-dynamic-md md:p-dynamic-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold transition-all duration-300 border-0"
                >
                  <Link href="/contact">Get in touch</Link>
                </Button>
              </div>
            </div>
          </RevealOnView>
        </div>
      </section>
    </main>
  )
}


