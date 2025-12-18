'use client'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, onPointerDown, onFocus, onBlur, ...props }: React.ComponentProps<'input'>) {
  const timeoutRef = React.useRef<number | null>(null)

  const triggerGlow = (el: HTMLElement, duration = 400) => {
    try {
      el.classList.add('glow-red-click')
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = window.setTimeout(() => {
        el.classList.remove('glow-red-click')
        timeoutRef.current = null
      }, duration)
    } catch (err) {
      console.warn('Glow animation failed to trigger', err)
    }
  }

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
      onPointerDown={(e) => {
        onPointerDown?.(e)
        triggerGlow(e.currentTarget as HTMLElement)
      }}
      onFocus={(e) => {
        onFocus?.(e)
        triggerGlow(e.currentTarget as HTMLElement)
      }}
      onBlur={(e) => {
        onBlur?.(e)
        ;(e.currentTarget as HTMLElement).classList.remove('glow-red-click')
      }}
      {...props}
    />
  )
}

export { Input }
