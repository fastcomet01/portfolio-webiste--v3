"use client"
import { MeshGradient } from "@paper-design/shaders-react"
import type React from "react"

type MeshPatternShaderProps = React.ComponentProps<typeof MeshGradient>

export default function DotGridShader(props: MeshPatternShaderProps) {
  return (
    <MeshGradient
      colors={["#1a1a1a", "#2a2a2a", "#0a0a0a", "#1f1f1f"]}
      speed={0.02}
      {...props}
      style={{
        backgroundColor: "#000000",
        width: "100%",
        height: "100%",
        ...(props?.style || {}),
      }}
    />
  )
}
