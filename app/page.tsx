import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"
import ProjectCard from "@/components/project-card"
import ClickableAnimatedHeading from "@/components/clickable-animated-heading"
import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  const projects = [
    {
      title: "Walletly — Multi‑account mobile banking",
      subtitle: "End‑to‑end product design",
      imageSrc: "/images/project-1.webp",
      tags: ["Mobile", "Fintech", "UI/UX"],
      href: "#project-1",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "Nimbus — SaaS analytics",
      subtitle: "Design automation systems & web app",
      imageSrc: "/images/project-2.webp",
      tags: ["SaaS", "Design Automation Systems", "Web"],
      href: "#project-2",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Arcade — E‑commerce for streetwear",
      subtitle: "Mobile‑first storefront",
      imageSrc: "/images/project-3.webp",
      tags: ["Commerce", "Mobile", "Brand"],
      href: "#project-3",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    {
      title: "CareConnect — Patient portal",
      subtitle: "Accessibility‑first UI",
      imageSrc: "/images/project-4.webp",
      tags: ["A11y", "Web App", "Health"],
      href: "#project-4",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
    {
      title: "Aurora — Creative portfolio",
      subtitle: "Motion & interaction design",
      imageSrc: "/images/project-5.webp",
      tags: ["Portfolio", "Animation", "UI/UX"],
      href: "#project-5",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#8b5cf6",
    },
    {
      title: "Hydra — AI assistant",
      subtitle: "Conversational product UX",
      imageSrc: "/images/project-6.webp",
      tags: ["AI", "SaaS", "Product"],
      href: "#project-6",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#10b981",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="container-hero relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-2 border-solid border-white rounded border border-white/10 bg-neutral-900/60 p-dynamic-md sm:p-dynamic-lg"
              staggerChildren
            >
              {/* Subtle pink gradient background overlay (restored) */}
              <div
                className="pointer-events-none absolute inset-0 rounded bg-gradient-to-br from-pink-500/30 via-fuchsia-500/20 to-rose-500/30"
                aria-hidden="true"
                data-no-animate
              />
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div className="pr-24 md:pr-28 flex flex-col min-h-full">
                {/* Wordmark - positioned at top with increased prominence */}
                <div className="flex justify-start items-start mb-dynamic-md">
                  <div className="flex items-center gap-dynamic-sm">
                    <div className="text-dynamic-3xl font-extrabold tracking-tight text-fit">Ivan Smirnov</div>
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>
                </div>

                {/* Social Media Icons - Right Side Positioning */}
                <div className="absolute right-4 top-1/2 z-50">
                  <div className="-translate-y-1/2">
                    <div className="social-icons-slide-in-right flex flex-col gap-3 bg-black/30 backdrop-blur-md rounded-2xl p-3 border border-white/15 shadow-lg">
                    {/* LinkedIn Icon */}
                    <a
                      href="https://linkedin.com/in/ivansmirnov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-white/20 group"
                      aria-label="LinkedIn profile"
                      style={{ minWidth: '40px', minHeight: '40px' }}
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>

                    {/* GitHub Icon */}
                    <a
                      href="https://github.com/ivansmirnov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-white/20 group"
                      aria-label="GitHub profile"
                      style={{ minWidth: '40px', minHeight: '40px' }}
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>

                    {/* Gmail Icon */}
                    <a
                      href="mailto:ivan.smirnov@example.com"
                      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-white/20 group"
                      aria-label="Send email"
                      style={{ minWidth: '40px', minHeight: '40px' }}
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-white transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-20.727c-.904 0-1.636-.732-1.636-1.636v-13.909c0-.904.732-1.636 1.636-1.636h20.727c.904 0 1.636.732 1.636 1.636zM12 12.545l-11.636-7.091v12.003h23.272v-12.003l-11.636 7.091zM12 14.182l11.636-7.091v12.003h-23.272v-12.003l11.636 7.091z"/>
                      </svg>
                    </a>
                    </div>
                  </div>
                </div>

                <ClickableAnimatedHeading
                  className="hero-title font-black leading-[1.05] tracking-tight text-fit"
                  lines={[
                    "UI/UX Designer",
                    "+ AI/ML Engineer",
                  ]}
                />

                <p className="mt-dynamic-sm max-w-[50ch] text-dynamic-lg text-fit" style={{ color: '#FFFFFF' }}>
                  Building and shipping a variety of great product experiences
                </p>

                {/* CTAs */}
                <div className="mt-dynamic-md flex flex-wrap items-center gap-dynamic-sm">
                  {/* Contact Me Button - Glass morphism style */}
                  <div className="group relative">
                    <Button asChild size="lg" className="relative rounded-full text-dynamic-base bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/40 hover:shadow-xl">
                      <Link href="/contact" className="flex items-center">
                        Contact me
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 " />
                      </Link>
                    </Button>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>


                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
