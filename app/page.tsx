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
              className="container-hero relative flex h-full flex-col justify-between overflow-hidden rounded border-2 border-solid border-white rounded border border-white/10 bg-neutral-900/60 p-dynamic-md sm:p-dynamic-lg"
              staggerChildren
            >
              {/* Subtle pink gradient background overlay (restored) */}
              <div
                className="pointer-events-none absolute inset-0 rounded bg-gradient-to-br from-pink-500/15 via-fuchsia-500/10 to-rose-500/15"
                aria-hidden="true"
                data-no-animate
              />
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div>
                {/* Wordmark */}
                <div className="mb-dynamic-md flex items-center gap-dynamic-sm">
                  <div className="text-dynamic-2xl font-extrabold tracking-tight text-fit">Ivan Smirnov</div>
                  <div className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                </div>

                <ClickableAnimatedHeading
                  className="hero-title font-black leading-[1.05] tracking-tight text-fit"
                  lines={[
                    "Improving user experience",
                    "and making better products",
                  ]}
                />

                <p className="mt-dynamic-sm max-w-[50ch] text-dynamic-lg text-fit" style={{ color: '#FFFFFF' }}>
                  I'm a UI/UX Designer and emerging AI/ML Engineering Specialist, seamlessly merging cutting-edge design with transformative technology. My dual expertise enables me to craft visually stunning, intuitive interfaces while leveraging artificial intelligence to revolutionize user experiences. This powerful combination delivers next-generation digital solutions where exceptional aesthetics meet intelligent functionality.
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

                  {/* About Me Button - Glass morphism style */}
                  <div className="group relative">
                    <Button asChild size="lg" className="relative rounded-full text-dynamic-base bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/40 hover:shadow-xl">
                      <Link href="/about" className="flex items-center">
                        About me
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


