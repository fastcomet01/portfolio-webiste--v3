"use client"

import { EmojiWithAccessibility } from '@/components/emoji-accessibility'

export default function InteractiveEmojiWrapper() {
  return (
    <div className="space-y-4">
      <EmojiWithAccessibility
        emoji="👋"
        label="Hello! Click me!"
        className="text-3xl hover:scale-110 transition-transform cursor-pointer"
        onClick={() => alert('Hello! You clicked the waving hand emoji!')}
      />
      
      <EmojiWithAccessibility
        emoji="❤️"
        label="Like this content"
        className="text-3xl hover:scale-110 transition-transform cursor-pointer"
        onClick={() => alert('Thank you for liking!')}
      />
      
      <EmojiWithAccessibility
        emoji="⭐"
        label="Rate with stars"
        className="text-3xl hover:scale-110 transition-transform cursor-pointer"
        onClick={() => alert('Thanks for rating!')}
      />
    </div>
  )
}