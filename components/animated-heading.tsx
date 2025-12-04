"use client"

import { useEffect, useMemo, useRef } from "react"
import { cn } from "@/lib/utils"

type AnimatedHeadingProps = {
  className?: string
  /** Lines of text. Each string will be rendered on its own line. */
  lines: string[]
  /** Delay before the streaming effect starts */
  startDelay?: number
  /** Duration of each word's animation */
  durationPerWord?: number
  /** Stagger between words within a line */
  staggerPerWord?: number
  /** Additional delay between lines */
  lineDelay?: number
  /** Starting blur amount in px */
  fromBlurPx?: number
  /** Starting translateY in px */
  fromTranslateYPx?: number
}

export default function AnimatedHeading({
  className,
  lines,
  startDelay = 0,
  durationPerWord = 0.9,
  staggerPerWord = 0.08,
  lineDelay = 0.3,
  fromBlurPx = 16,
  fromTranslateYPx = 14,
}: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null)

  const tokensPerLine = useMemo(() => {
    // Split each line into words and spaces (keep spaces as separate tokens)
    // Example: "Hello world" => ["Hello", " ", "world"]
    return lines.map((line) => line.split(/(\s+)/))
  }, [lines])

  useEffect(() => {
    if (!headingRef.current) return
    const wordSpans = headingRef.current.querySelectorAll<HTMLSpanElement>("[data-word]")

    // Initialize all words to the starting state
    wordSpans.forEach((el, index) => {
      el.style.opacity = "0"
      el.style.filter = `blur(${fromBlurPx}px)`
      el.style.transform = `translateY(${fromTranslateYPx}px)`
      el.style.transition = `all ${durationPerWord}s cubic-bezier(0.22, 1, 0.36, 1)`

      // Calculate delay based on line and word position
      const lineIndexAttr = el.getAttribute("data-line-index")
      const lineIndex = lineIndexAttr ? Number(lineIndexAttr) : 0
      const delay = startDelay + lineIndex * lineDelay + (index % 10) * staggerPerWord

      // Animate with delay
      setTimeout(() => {
        el.style.opacity = "1"
        el.style.filter = "blur(0px)"
        el.style.transform = "translateY(0)"
      }, delay * 1000)
    })
  }, [startDelay, durationPerWord, staggerPerWord, lineDelay, fromBlurPx, fromTranslateYPx])

  return (
    <h1 ref={headingRef} className={cn(className)} aria-label={lines.join(" ")}>
      {/* Visual characters for animation; hidden from screen readers */}
      <span aria-hidden>
        {tokensPerLine.map((tokens, lineIdx) => (
          <span key={`line-${lineIdx}`} className="block">
            {tokens.map((token, idx) => {
              const isSpace = /^\s+$/.test(token)
              if (isSpace) {
                return <span key={`s-${lineIdx}-${idx}`}>{"\u00A0"}</span>
              }
              return (
                <span
                  key={`w-${lineIdx}-${idx}`}
                  data-word
                  data-line-index={lineIdx}
                  className="inline-block will-change-transform"
                >
                  {token}
                </span>
              )
            })}
          </span>
        ))}
      </span>
    </h1>
  )
}
