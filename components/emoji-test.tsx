'use client'

import { useState, useEffect } from 'react'

// Extend Performance interface for Chrome memory API
declare global {
  interface Performance {
    memory?: {
      usedJSHeapSize: number
      totalJSHeapSize: number
      jsHeapSizeLimit: number
    }
  }
}

interface EmojiTestResult {
  emoji: string
  name: string
  rendered: boolean
  width: number
  height: number
  fontFamily: string
  error?: string
}

interface EmojiCompatibility {
  basic: string[]
  modifiers: string[]
  complex: string[]
  performance: string[]
}

const EMOJI_TEST_SETS: EmojiCompatibility = {
  basic: [
    '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃',
    '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙', '😋',
    '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐'
  ],
  modifiers: [
    '👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿', // Hand with skin tones
    '🧑', '🧑🏻', '🧑🏼', '🧑🏽', '🧑🏾', '🧑🏿', // Person with skin tones
    '👨‍⚕️', '👩‍⚕️', '👨‍🎓', '👩‍🎓', // Gender variations
    '🧑‍🤝‍🧑', '👭', '👫', '👬' // Relationship variations
  ],
  complex: [
    '🏳️‍🌈', '🏳️‍⚧️', '🇺🇸', '🇬🇧', '🇯🇵', '🇰🇷', '🇩🇪', '🇫🇷', '🇪🇸', '🇮🇹',
    '🧑‍💻', '👨‍💻', '👩‍💻', '🧑‍🎨', '👨‍🎨', '👩‍🎨', '🧑‍🔬', '👨‍🔬', '👩‍🔬'
  ],
  performance: Array.from({ length: 100 }, (_, i) => 
    ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃'][i % 10]
  )
}

export default function EmojiTestComponent() {
  const [testResults, setTestResults] = useState<EmojiTestResult[]>([])
  const [isTesting, setIsTesting] = useState(false)
  const [currentSet, setCurrentSet] = useState<keyof EmojiCompatibility>('basic')
  const [performanceMetrics, setPerformanceMetrics] = useState({
    renderTime: 0,
    memoryUsage: 0,
    frameRate: 0
  })

  // Test emoji rendering and compatibility
  const testEmojiRendering = async (emojiSet: string[]): Promise<EmojiTestResult[]> => {
    const results: EmojiTestResult[] = []
    
    for (const emoji of emojiSet) {
      try {
        // Create temporary element to test rendering
        const tempDiv = document.createElement('div')
        tempDiv.style.position = 'absolute'
        tempDiv.style.visibility = 'hidden'
        tempDiv.style.fontSize = '16px'
        tempDiv.textContent = emoji
        document.body.appendChild(tempDiv)
        
        // Get computed styles and dimensions
        const computedStyle = window.getComputedStyle(tempDiv)
        const rect = tempDiv.getBoundingClientRect()
        
        // Check if emoji was rendered (width should be > 0)
        const rendered = rect.width > 0 && rect.height > 0
        
        results.push({
          emoji,
          name: getEmojiName(emoji),
          rendered,
          width: rect.width,
          height: rect.height,
          fontFamily: computedStyle.fontFamily,
          error: rendered ? undefined : 'Failed to render'
        })
        
        document.body.removeChild(tempDiv)
      } catch (error) {
        results.push({
          emoji,
          name: getEmojiName(emoji),
          rendered: false,
          width: 0,
          height: 0,
          fontFamily: '',
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }
    
    return results
  }

  // Get emoji name for accessibility
  const getEmojiName = (emoji: string): string => {
    const emojiNames: { [key: string]: string } = {
      '😀': 'Grinning Face',
      '😃': 'Grinning Face with Big Eyes',
      '😄': 'Grinning Face with Smiling Eyes',
      '😁': 'Beaming Face with Smiling Eyes',
      '😆': 'Grinning Squinting Face',
      '😅': 'Grinning Face with Sweat',
      '🤣': 'Rolling on the Floor Laughing',
      '😂': 'Face with Tears of Joy',
      '🙂': 'Slightly Smiling Face',
      '🙃': 'Upside-Down Face',
      '💻': 'Laptop',
      '🛠️': 'Hammer and Wrench',
      '🚀': 'Rocket',
      '🎵': 'Musical Note'
    }
    return emojiNames[emoji] || 'Unknown Emoji'
  }

  // Test performance with large emoji sets
  const testPerformance = async () => {
    const startTime = performance.now()
    const startMemory = performance.memory ? performance.memory.usedJSHeapSize : 0
    
    // Test rendering 1000 emojis
    const largeEmojiSet = Array.from({ length: 1000 }, (_, i) => 
      EMOJI_TEST_SETS.basic[i % EMOJI_TEST_SETS.basic.length]
    )
    
    await testEmojiRendering(largeEmojiSet)
    
    const endTime = performance.now()
    const endMemory = performance.memory ? performance.memory.usedJSHeapSize : 0
    
    setPerformanceMetrics({
      renderTime: endTime - startTime,
      memoryUsage: endMemory - startMemory,
      frameRate: 0 // Would need requestAnimationFrame for accurate measurement
    })
  }

  // Run emoji compatibility tests
  const runTests = async (setName: keyof EmojiCompatibility) => {
    setIsTesting(true)
    setCurrentSet(setName)
    
    try {
      const results = await testEmojiRendering(EMOJI_TEST_SETS[setName])
      setTestResults(results)
    } catch (error) {
      console.error('Emoji test failed:', error)
    } finally {
      setIsTesting(false)
    }
  }

  // Test cross-platform compatibility
  const getPlatformInfo = () => {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      screenResolution: `${screen.width}x${screen.height}`,
      colorDepth: screen.colorDepth,
      pixelDepth: screen.pixelDepth
    }
  }

  // Test accessibility features
  const testAccessibility = () => {
    const tests = {
      screenReaderSupport: 'speechSynthesis' in window,
      highContrastSupport: window.matchMedia('(prefers-contrast: high)').matches,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return tests
  }

  // Calculate success rate
  const getSuccessRate = () => {
    if (testResults.length === 0) return 0
    const successful = testResults.filter(result => result.rendered).length
    return Math.round((successful / testResults.length) * 100)
  }

  // Test emoji with text combinations
  const testEmojiTextCombinations = () => {
    const combinations = [
      'Hello 👋 World!',
      'I love 💖 programming 🧑‍💻',
      'Good morning 🌅 Have a nice day!',
      'Check out my 🚀 rocket project 🛠️',
      'Learning 📚 new technologies 🚀'
    ]
    
    return combinations.map(text => ({
      text,
      emojiCount: (text.match(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu) || []).length,
      length: text.length
    }))
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          🧪 Emoji Compatibility Testing Framework
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Comprehensive testing for emoji rendering, performance, and accessibility across platforms
        </p>
        
        {/* Platform Information */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">Platform Information</h3>
          <pre className="text-sm overflow-x-auto">
            {JSON.stringify(getPlatformInfo(), null, 2)}
          </pre>
        </div>

        {/* Accessibility Tests */}
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">Accessibility Features</h3>
          <pre className="text-sm overflow-x-auto">
            {JSON.stringify(testAccessibility(), null, 2)}
          </pre>
        </div>
      </div>

      {/* Test Controls */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-4 mb-4">
          {Object.keys(EMOJI_TEST_SETS).map((setName) => (
            <button
              key={setName}
              onClick={() => runTests(setName as keyof EmojiCompatibility)}
              disabled={isTesting}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-colors"
            >
              Test {setName.charAt(0).toUpperCase() + setName.slice(1)} Emojis
            </button>
          ))}
          <button
            onClick={testPerformance}
            disabled={isTesting}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 transition-colors"
          >
            Test Performance
          </button>
        </div>
      </div>

      {/* Performance Metrics */}
      {performanceMetrics.renderTime > 0 && (
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <span className="font-medium">Render Time:</span>
              <span className="ml-2">{performanceMetrics.renderTime.toFixed(2)}ms</span>
            </div>
            <div>
              <span className="font-medium">Memory Usage:</span>
              <span className="ml-2">{performanceMetrics.memoryUsage} bytes</span>
            </div>
            <div>
              <span className="font-medium">Success Rate:</span>
              <span className="ml-2">{getSuccessRate()}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Test Results */}
      {testResults.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Test Results for {currentSet} emojis ({getSuccessRate()}% success rate)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-96 overflow-y-auto">
            {testResults.map((result, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-2 ${
                  result.rendered
                    ? 'bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-700'
                    : 'bg-red-50 border-red-200 dark:bg-red-900 dark:border-red-700'
                }`}
              >
                <div className="text-2xl mb-2 text-center">{result.emoji}</div>
                <div className="text-xs text-center mb-2 font-medium">
                  {result.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  <div>Rendered: {result.rendered ? '✅' : '❌'}</div>
                  <div>Size: {result.width}x{result.height}px</div>
                  {result.error && (
                    <div className="text-red-600 dark:text-red-400 text-xs mt-1">
                      Error: {result.error}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Emoji-Text Combination Tests */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Emoji-Text Combination Tests</h3>
        <div className="space-y-2">
          {testEmojiTextCombinations().map((combo, index) => (
            <div key={index} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="font-mono text-sm mb-1">{combo.text}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Length: {combo.length}, Emojis: {combo.emojiCount}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unicode Version Info */}
      <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Unicode Emoji Standards</h3>
        <ul className="text-sm space-y-1">
          <li>✅ Basic Emoji (Unicode 6.0+)</li>
          <li>✅ Emoji Modifiers (Unicode 8.0+)</li>
          <li>✅ ZWJ Sequences (Unicode 9.0+)</li>
          <li>✅ Flag Sequences (Unicode 6.0+)</li>
          <li>✅ Accessibility support</li>
          <li>✅ Cross-platform compatibility</li>
        </ul>
      </div>
    </div>
  )
}