import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"

type Props = {
  title?: string
  subtitle?: string
  imageSrc?: string
  tags?: string[]
  href?: string
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
  imageContainerClassName?: string
  containerClassName?: string
  revealDelay?: number
}

// Server Component (no client hooks)
export default function ProjectCard({
  title = "Project title",
  subtitle = "Project subtitle",
  imageSrc = "/placeholder.svg?height=720&width=1280",
  tags = ["Design", "Web"],
  href = "#",
  priority = false,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  imageContainerClassName,
  containerClassName,
  revealDelay = 0,
}: Props) {
  return (
    <article className={cn("group relative", containerClassName)}>
      <RevealOnView
        delay={revealDelay}
        className="container-card rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)] lg:h-full"
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <div className="relative overflow-hidden rounded-[1.35rem] bg-black lg:h-full">
          {/* Image */}
          <div
            className={cn(
              "relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full",
              imageContainerClassName,
            )}
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority={priority}
              className="object-cover"
            />
            {/* Subtle vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/30" />
          </div>

          {/* Top-left tags */}
          <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-dynamic-xs">
            {tags.map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="pointer-events-auto !bg-black/30 !text-white !border-transparent backdrop-blur-sm text-dynamic-xs text-fit"
              >
                {t}
              </Badge>
            ))}
          </div>

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-dynamic-sm sm:p-dynamic-md">
            <div className="flex flex-col gap-dynamic-sm sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0 flex-1">
                <h3 className="card-title font-semibold text-fit">{title}</h3>
                <p className="card-subtitle text-white/70 text-fit">{subtitle}</p>
              </div>
              <Link
                href={href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black/40 px-4 py-2.5 text-sm font-medium backdrop-blur transition-all duration-200 hover:bg-black/60 hover:scale-105 self-start sm:self-auto text-fit-strict min-w-fit whitespace-nowrap"
                aria-label={`Check out: ${title}`}
              >
                <span className="leading-none">Check out</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0 ml-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </RevealOnView>
    </article>
  )
}
