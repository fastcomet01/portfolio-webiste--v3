"use client"

import React, { useEffect, useRef } from "react"

type StripDotsProps = {
  className?: string
  children: React.ReactNode
  includeAttributes?: string[]
}

export default function StripDots({ className, children, includeAttributes = ["aria-label", "title"] }: StripDotsProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    // Replace dots in text nodes
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
    const textNodes: Node[] = []
    let node: Node | null = walker.nextNode()
    while (node) {
      textNodes.push(node)
      node = walker.nextNode()
    }
    for (const tn of textNodes) {
      const val = tn.nodeValue ?? ""
      if (val.includes(".")) tn.nodeValue = val.replace(/\./g, "")
    }

    // Replace dots in selected attributes (e.g., aria-label, title)
    const elements = root.querySelectorAll<HTMLElement>("*")
    for (const el of elements) {
      for (const attr of includeAttributes) {
        const v = el.getAttribute(attr)
        if (v && v.includes(".")) {
          el.setAttribute(attr, v.replace(/\./g, ""))
        }
      }
    }
  }, [includeAttributes])

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  )
}