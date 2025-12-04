'use client'

import { useState, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function MusicSound() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)

  const playMusicNote = async () => {
    try {
      // Create audio context if it doesn't exist
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }

      const audioContext = audioContextRef.current

      // Resume audio context if it's suspended (required by some browsers)
      if (audioContext.state === 'suspended') {
        await audioContext.resume()
      }

      setIsPlaying(true)

      // Create a pleasant musical chord (C major)
      const frequencies = [261.63, 329.63, 392.00] // C4, E4, G4
      const duration = 1.5

      frequencies.forEach((frequency, index) => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)
        oscillator.type = 'sine'

        // Create a nice envelope
        gainNode.gain.setValueAtTime(0, audioContext.currentTime)
        gainNode.gain.linearRampToValueAtTime(0.1 / frequencies.length, audioContext.currentTime + 0.1)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

        oscillator.start(audioContext.currentTime + index * 0.1)
        oscillator.stop(audioContext.currentTime + duration)
      })

      // Reset playing state after sound finishes
      setTimeout(() => setIsPlaying(false), duration * 1000)

    } catch (error) {
      console.log('Audio playback not supported or failed:', error)
      setIsPlaying(false)
    }
  }

  return (
    <button
      onClick={playMusicNote}
      disabled={isPlaying}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      title="Play music note"
    >
      {isPlaying ? (
        <>
          <VolumeX className="h-4 w-4 animate-pulse" />
          <span>Playing...</span>
        </>
      ) : (
        <>
          <Volume2 className="h-4 w-4" />
          <span>🎵 Play Sound</span>
        </>
      )}
    </button>
  )
}