'use client'

import { useState, useEffect } from 'react'
import { 
  analyzeWebElements, 
  createWebElementFromDOM, 
  WebElement, 
  EmojiAnalysis,
  getEmojiSuggestions
} from '@/lib/emoji-analyzer'

interface EmojiAnalyzerDemoProps {
  targetElements?: string[] // CSS selectors for target elements
  autoAnalyze?: boolean
  showDebug?: boolean
}

export default function EmojiAnalyzerDemo({
  targetElements = ['span'], // Default to all span elements
  autoAnalyze = true,
  showDebug: initialShowDebug = false
}: EmojiAnalyzerDemoProps) {
  const [analyses, setAnalyses] = useState<EmojiAnalysis[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [selectedAnalysis, setSelectedAnalysis] = useState<EmojiAnalysis | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showDebug, setShowDebug] = useState(initialShowDebug)

  // Function to analyze specific web elements
  const analyzeWebPageElements = async () => {
    setIsAnalyzing(true)
    setError(null)

    try {
      const elementGroups: WebElement[][] = []

      // Analyze each target element
      targetElements.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        const webElements: WebElement[] = []

        elements.forEach((element, index) => {
          try {
            const webElement = createWebElementFromDOM(element)
            webElement.children = getChildElements(element)
            webElement.parent = getParentElement(element)
            
            // Add metadata for analysis
            webElement.isVisible = isElementVisible(element)
            webElement.isAccessible = isElementAccessible(element)
            
            webElements.push(webElement)
          } catch (err) {
            console.warn(`Error processing element ${index}:`, err)
          }
        })

        if (webElements.length > 0) {
          elementGroups.push(webElements)
        }
      })

      // Analyze the collected elements
      const results = elementGroups.map(group => analyzeWebElements(group))
      setAnalyses(results)

      // Set the first analysis as selected by default
      if (results.length > 0) {
        setSelectedAnalysis(results[0])
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
    } finally {
      setIsAnalyzing(false)
    }
  }

  // Helper functions for element analysis
  function getChildElements(element: Element): WebElement[] {
    const children: WebElement[] = []
    Array.from(element.children).forEach((child: Element) => {
      try {
        children.push(createWebElementFromDOM(child))
      } catch (err) {
        console.warn('Error processing child element:', err)
      }
    })
    return children
  }

  function getParentElement(element: Element): WebElement | undefined {
    const parent = element.parentElement
    if (parent) {
      try {
        return createWebElementFromDOM(parent)
      } catch (err) {
        console.warn('Error processing parent element:', err)
      }
    }
    return undefined
  }

  function isElementVisible(element: Element): boolean {
    const rect = element.getBoundingClientRect()
    const style = window.getComputedStyle(element)
    
    return (
      rect.width > 0 &&
      rect.height > 0 &&
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      style.opacity !== '0'
    )
  }

  function isElementAccessible(element: Element): boolean {
    const style = window.getComputedStyle(element)
    
    return (
      style.visibility !== 'hidden' &&
      style.opacity !== '0' &&
      !element.hasAttribute('aria-hidden')
    )
  }

  // Fix corrupted emojis in the DOM
  const fixCorruptedEmojis = () => {
    const corruptedEmojiMap: Record<string, string> = {
      'ðŸ“': '📍',
      'ðŸ“…': '📅',
      'ðŸŽµ': '🎵',
      'ðŸ¤': '🤝'
    }

    Object.entries(corruptedEmojiMap).forEach(([corrupted, correct]) => {
      const elements = document.querySelectorAll('span')
      elements.forEach(element => {
        if (element.textContent?.includes(corrupted)) {
          element.textContent = element.textContent.replace(corrupted, correct)
        }
      })
    })
  }

  // Auto-analyze on component mount
  useEffect(() => {
    if (autoAnalyze) {
      // Fix corrupted emojis first
      fixCorruptedEmojis()
      
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        analyzeWebPageElements()
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [autoAnalyze])

  // Handle manual re-analysis
  const handleReanalyze = () => {
    fixCorruptedEmojis()
    analyzeWebPageElements()
  }

  // Get emoji suggestions for current context
  const getContextualSuggestions = (analysis: EmojiAnalysis): string[] => {
    const context = determineContextFromAnalysis(analysis)
    return getEmojiSuggestions(context, 8)
  }

  function determineContextFromAnalysis(analysis: EmojiAnalysis): string {
    const data = analysis.extractedData
    
    if (data.categories?.location && data.categories.location.length > 0) return 'location'
    if (data.categories?.experience && data.categories.experience.length > 0) return 'experience'
    if (data.categories?.music && data.categories.music.length > 0) return 'music'
    if (data.categories?.technology && data.categories.technology.length > 0) return 'technology'
    if (data.categories?.progress && data.categories.progress.length > 0) return 'progress'
    
    return 'general'
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          🔍 Web Element Emoji Analyzer
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Analyzing web elements and returning contextually appropriate emojis
        </p>
        
        <div className="flex gap-4 mb-4">
          <button
            onClick={handleReanalyze}
            disabled={isAnalyzing}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-colors"
          >
            {isAnalyzing ? 'Analyzing...' : 'Re-analyze Elements'}
          </button>
          
          <button
            onClick={() => setShowDebug(!showDebug)}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            {showDebug ? 'Hide Debug' : 'Show Debug'}
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Analysis Results */}
      {analyses.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {analyses.map((analysis, index) => (
              <div
                key={index}
                onClick={() => setSelectedAnalysis(analysis)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedAnalysis === analysis
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <div className="text-center mb-3">
                  <div className="text-4xl mb-2">{analysis.emoji}</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Confidence: {Math.round(analysis.confidence * 100)}%
                  </div>
                </div>
                
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                  {analysis.reasoning}
                </div>
                
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  Content: {analysis.originalContent.slice(0, 50)}...
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Analysis */}
          {selectedAnalysis && (
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Detailed Analysis: {selectedAnalysis.emoji}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Extracted Data</h4>
                  <pre className="text-xs bg-gray-200 dark:bg-gray-900 p-3 rounded overflow-x-auto">
                    {JSON.stringify(selectedAnalysis.extractedData, null, 2)}
                  </pre>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Contextual Suggestions</h4>
                  <div className="flex flex-wrap gap-2">
                    {getContextualSuggestions(selectedAnalysis).map((suggestion, index) => (
                      <span
                        key={index}
                        className="text-2xl p-2 bg-white dark:bg-gray-700 rounded-lg"
                        title={`Alternative ${index + 1}`}
                      >
                        {suggestion}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Analysis Reasoning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedAnalysis.reasoning}
                </p>
              </div>
              
              {selectedAnalysis.alternatives.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Alternative Emojis</h4>
                  <div className="flex gap-2">
                    {selectedAnalysis.alternatives.map((alt, index) => (
                      <span
                        key={index}
                        className="text-2xl p-2 bg-white dark:bg-gray-700 rounded-lg"
                        title={`Alternative ${index + 1}`}
                      >
                        {alt}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Debug Information */}
      {showDebug && (
        <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Debug Information</h3>
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <div>Target Elements: {targetElements.join(', ')}</div>
            <div>Analyses Count: {analyses.length}</div>
            <div>Auto Analyze: {autoAnalyze ? 'Enabled' : 'Disabled'}</div>
            <div>Corrupted Emoji Fix: Applied</div>
          </div>
        </div>
      )}

      {/* Usage Instructions */}
      <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">How It Works</h3>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• Automatically detects and fixes corrupted emoji characters</li>
          <li>• Analyzes text content, attributes, and element context</li>
          <li>• Applies business logic to determine the most appropriate emoji</li>
          <li>• Provides confidence scores and alternative suggestions</li>
          <li>• Handles missing or invalid elements gracefully</li>
        </ul>
      </div>
    </div>
  )
}