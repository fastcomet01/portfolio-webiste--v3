"use client"

import { useState } from "react"
import AnimatedHeading from "./animated-heading"

interface ClickableAnimatedHeadingProps {
  className?: string
  lines: string[]
}

export default function ClickableAnimatedHeading({ className, lines }: ClickableAnimatedHeadingProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleTextClick = () => {
    setIsZoomed(true)
    // Reset the animation after 300ms
    setTimeout(() => {
      setIsZoomed(false)
    }, 300)
  }

  return (
    <div 
      className={`cursor-pointer select-none transition-transform duration-300 ease-out ${
        isZoomed ? 'scale-110' : 'scale-100'
      } hover:scale-105 active:scale-95`}
      onClick={handleTextClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleTextClick()
        }
      }}
      aria-label="Click to animate text"
    >
      <AnimatedHeading
        className={className}
        lines={lines}
      />
    </div>
  )
}