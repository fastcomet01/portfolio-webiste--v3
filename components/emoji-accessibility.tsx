'use client'

import { useState, useEffect } from 'react'

interface EmojiAccessibilityProps {
  emoji: string
  label: string
  role?: string
  ariaLabel?: string
  ariaHidden?: boolean
  className?: string
  onClick?: () => void
  onKeyDown?: (event: React.KeyboardEvent) => void
  tabIndex?: number
}

export function EmojiWithAccessibility({
  emoji,
  label,
  role = 'img',
  ariaLabel,
  ariaHidden = false,
  className = '',
  onClick,
  onKeyDown,
  tabIndex = 0
}: EmojiAccessibilityProps) {
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    // Check for accessibility preferences - only run on client side
    if (typeof window !== 'undefined') {
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)')
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      
      setIsHighContrast(highContrastQuery.matches)
      setPrefersReducedMotion(reducedMotionQuery.matches)

      // Listen for changes
      const handleHighContrastChange = (e: MediaQueryListEvent) => setIsHighContrast(e.matches)
      const handleReducedMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
      
      highContrastQuery.addEventListener('change', handleHighContrastChange)
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange)

      return () => {
        highContrastQuery.removeEventListener('change', handleHighContrastChange)
        reducedMotionQuery.removeEventListener('change', handleReducedMotionChange)
      }
    }
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onKeyDown) {
      onKeyDown(event)
    }
    
    // Handle keyboard navigation
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (onClick) {
        onClick()
      }
    }
  }

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  // Enhanced styles for accessibility
  const accessibilityStyles = {
    outline: isFocused ? '2px solid #0066cc' : 'none',
    outlineOffset: '2px',
    cursor: onClick ? 'pointer' : 'default',
    transition: prefersReducedMotion ? 'none' : 'all 0.2s ease-in-out',
    filter: isHighContrast ? 'contrast(1.5) brightness(1.2)' : 'none',
    transform: isFocused ? 'scale(1.1)' : 'scale(1)'
  }

  return (
    <span
      role={role}
      aria-label={ariaLabel || label}
      aria-hidden={ariaHidden}
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={accessibilityStyles}
      tabIndex={onClick ? tabIndex : -1}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
    >
      {emoji}
      
      {/* Screen reader only text */}
      <span className="sr-only">{label}</span>
      
      {/* High contrast mode indicator */}
      {isHighContrast && (
        <span className="absolute -inset-1 border-2 border-current rounded" aria-hidden="true" />
      )}
    </span>
  )
}

// Emoji with descriptive text for better context
interface EmojiWithDescriptionProps {
  emoji: string
  description: string
  detailedDescription?: string
  className?: string
}

export function EmojiWithDescription({
  emoji,
  description,
  detailedDescription,
  className = ''
}: EmojiWithDescriptionProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <EmojiWithAccessibility
        emoji={emoji}
        label={description}
        className="text-2xl"
      />
      <div className="flex-1">
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {description}
        </span>
        {detailedDescription && (
          <span className="block text-sm text-gray-600 dark:text-gray-400">
            {detailedDescription}
          </span>
        )}
      </div>
    </div>
  )
}

// Screen reader announcement component
interface ScreenReaderAnnouncementProps {
  message: string
  priority?: 'polite' | 'assertive'
}

export function ScreenReaderAnnouncement({
  message,
  priority = 'polite'
}: ScreenReaderAnnouncementProps) {
  return (
    <div
      className="sr-only"
      role="status"
      aria-live={priority}
      aria-atomic="true"
    >
      {message}
    </div>
  )
}