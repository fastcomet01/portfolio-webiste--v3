/**
 * Emoji Analyzer - Web Element Analysis and Emoji Response System
 * 
 * This module provides comprehensive functionality to analyze web elements
 * and return appropriate emoji responses based on content, context, and attributes.
 */

export interface WebElement {
  tagName: string
  textContent?: string
  attributes?: Record<string, string>
  className?: string
  id?: string
  children?: WebElement[]
  parent?: WebElement
  isVisible?: boolean
  isAccessible?: boolean
}

export interface EmojiAnalysis {
  originalContent: string
  extractedData: Record<string, any>
  confidence: number
  emoji: string
  reasoning: string
  alternatives: string[]
}

export interface EmojiMapping {
  keywords: string[]
  emojis: string[]
  priority: number
  category: string
}

// Comprehensive emoji mapping database
const EMOJI_DATABASE: EmojiMapping[] = [
  // Location-based
  {
    keywords: ['london', 'uk', 'england', 'british', 'gb'],
    emojis: ['🇬🇧', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🏙️', '📍'],
    priority: 10,
    category: 'location'
  },
  {
    keywords: ['location', 'place', 'map', 'pin', 'address', 'where'],
    emojis: ['📍', '🗺️', '🏠', '🌍'],
    priority: 8,
    category: 'location'
  },
  
  // Experience/Time-based
  {
    keywords: ['experience', 'years', 'time', 'duration', 'period'],
    emojis: ['⏰', '📅', '📆', '⏳', '⌛'],
    priority: 9,
    category: 'time'
  },
  {
    keywords: ['3+', 'three', '3 years', 'senior'],
    emojis: ['👔', '💼', '🎯', '⭐'],
    priority: 8,
    category: 'experience'
  },
  
  // Music/Audio-based
  {
    keywords: ['music', 'sound', 'audio', 'producer', 'beat', 'song'],
    emojis: ['🎵', '🎶', '🎧', '🎤', '🎹', '🎸'],
    priority: 10,
    category: 'music'
  },
  {
    keywords: ['play', 'listen', 'hear'],
    emojis: ['▶️', '🔊', '🎵', '🎧'],
    priority: 7,
    category: 'music'
  },
  
  // Technology-based
  {
    keywords: ['computer', 'laptop', 'pc', 'mac', 'technology'],
    emojis: ['💻', '🖥️', '⌨️', '🖱️'],
    priority: 9,
    category: 'technology'
  },
  {
    keywords: ['tools', 'development', 'coding', 'programming'],
    emojis: ['🛠️', '🔧', '⚙️', '💻'],
    priority: 9,
    category: 'technology'
  },
  
  // Progress/Achievement-based
  {
    keywords: ['rocket', 'launch', 'start', 'go', 'progress'],
    emojis: ['🚀', '🛫', '✈️', '🎯'],
    priority: 8,
    category: 'progress'
  },
  {
    keywords: ['success', 'achievement', 'win', 'complete'],
    emojis: ['✅', '🎉', '🏆', '⭐'],
    priority: 8,
    category: 'achievement'
  },
  
  // Default/Generic
  {
    keywords: ['default', 'unknown', 'missing', 'error'],
    emojis: ['❓', '❔', '⚠️', '🤔'],
    priority: 1,
    category: 'default'
  }
]

// Emoji variation mappings for different contexts
const EMOJI_VARIATIONS: Record<string, string[]> = {
  '💻': ['💻', '🖥️', '⌨️', '🖱️', '🧑‍💻'],
  '🛠️': ['🛠️', '🔧', '⚙️', '🔨', '🧰'],
  '🚀': ['🚀', '🛫', '✈️', '🚁', '🛸'],
  '📍': ['📍', '🗺️', '🧭', '🏠', '🏙️'],
  '📅': ['📅', '📆', '🗓️', '⏰', '⏳'],
  '🎵': ['🎵', '🎶', '🎧', '🎤', '🎹']
}

/**
 * Main function to analyze web elements and return appropriate emoji
 */
export function analyzeWebElements(elements: WebElement[]): EmojiAnalysis {
  try {
    // Validate input
    if (!elements || elements.length === 0) {
      return createDefaultAnalysis('No elements provided')
    }

    // Process each element
    const processedElements = elements.map(element => processElement(element))
    
    // Extract meaningful data
    const extractedData = extractMeaningfulData(processedElements)
    
    // Determine context and category
    const context = determineContext(extractedData)
    
    // Select appropriate emoji
    const emojiSelection = selectEmoji(extractedData, context)
    
    return {
      originalContent: elements.map(el => el.textContent || '').join(' '),
      extractedData,
      confidence: emojiSelection.confidence,
      emoji: emojiSelection.emoji,
      reasoning: emojiSelection.reasoning,
      alternatives: emojiSelection.alternatives
    }
  } catch (error) {
    console.error('Error analyzing web elements:', error)
    return createDefaultAnalysis(`Analysis error: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Process individual web element
 */
function processElement(element: WebElement): ProcessedElement {
  const result: ProcessedElement = {
    original: element,
    text: '',
    keywords: [],
    category: 'unknown',
    confidence: 0,
    isValid: false
  }

  try {
    // Check if element is accessible
    if (!element.isAccessible || !element.isVisible) {
      return result
    }

    // Extract text content
    result.text = cleanTextContent(element.textContent || '')
    
    // Extract keywords
    result.keywords = extractKeywords(result.text, element.attributes)
    
    // Determine category
    result.category = categorizeElement(element, result.keywords)
    
    // Calculate confidence
    result.confidence = calculateConfidence(element, result)
    
    result.isValid = result.confidence > 0.3 // Minimum confidence threshold
    
  } catch (error) {
    console.warn('Error processing element:', error)
  }

  return result
}

/**
 * Clean and normalize text content
 */
function cleanTextContent(text: string): string {
  return text
    .replace(/[ðŸ""]/g, '') // Remove corrupted emoji characters
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim()
    .toLowerCase()
}

/**
 * Extract keywords from text and attributes
 */
function extractKeywords(text: string, attributes?: Record<string, string>): string[] {
  const keywords: string[] = []
  
  // From text content
  const words = text.split(/\s+/).filter(word => word.length > 1)
  keywords.push(...words)
  
  // From attributes
  if (attributes) {
    Object.values(attributes).forEach(value => {
      const attrWords = value.toLowerCase().split(/\s+/).filter(word => word.length > 1)
      keywords.push(...attrWords)
    })
  }
  
  return [...new Set(keywords)] // Remove duplicates
}

/**
 * Categorize element based on content and context
 */
function categorizeElement(element: WebElement, keywords: string[]): string {
  const text = element.textContent?.toLowerCase() || ''
  
  // Check for specific patterns
  if (text.includes('london') || text.includes('📍')) return 'location'
  if (text.includes('years') || text.includes('experience') || text.includes('📅')) return 'experience'
  if (text.includes('music') || text.includes('producer') || text.includes('🎵')) return 'music'
  if (text.includes('computer') || text.includes('laptop') || text.includes('💻')) return 'technology'
  if (text.includes('tools') || text.includes('development') || text.includes('🛠️')) return 'tools'
  if (text.includes('rocket') || text.includes('launch') || text.includes('🚀')) return 'progress'
  
  // Check class names
  if (element.className?.includes('location')) return 'location'
  if (element.className?.includes('experience')) return 'experience'
  if (element.className?.includes('music')) return 'music'
  if (element.className?.includes('tech')) return 'technology'
  
  return 'unknown'
}

/**
 * Calculate confidence score for processed element
 */
function calculateConfidence(element: WebElement, result: ProcessedElement): number {
  let confidence = 0
  
  // Text content confidence
  if (result.text.length > 0) confidence += 0.3
  if (result.text.length > 5) confidence += 0.2
  
  // Keyword confidence
  confidence += Math.min(result.keywords.length * 0.1, 0.3)
  
  // Category confidence
  if (result.category !== 'unknown') confidence += 0.2
  
  // Accessibility confidence
  if (element.isAccessible) confidence += 0.1
  if (element.isVisible) confidence += 0.1
  
  return Math.min(confidence, 1.0)
}

/**
 * Extract meaningful data from processed elements
 */
function extractMeaningfulData(processedElements: ProcessedElement[]): Record<string, any> {
  const data: Record<string, any> = {
    categories: {},
    keywords: [],
    locations: [],
    experiences: [],
    technologies: [],
    music: [],
    confidenceScores: [],
    validElements: 0
  }

  processedElements.forEach(element => {
    if (!element.isValid) return
    
    data.validElements++
    data.confidenceScores.push(element.confidence)
    
    // Categorize by type
    if (!data.categories[element.category]) {
      data.categories[element.category] = []
    }
    data.categories[element.category].push(element.text)
    
    // Extract specific data types
    switch (element.category) {
      case 'location':
        data.locations.push(...extractLocationData(element.text))
        break
      case 'experience':
        data.experiences.push(...extractExperienceData(element.text))
        break
      case 'technology':
        data.technologies.push(...extractTechnologyData(element.text))
        break
      case 'music':
        data.music.push(...extractMusicData(element.text))
        break
    }
    
    // Collect all keywords
    data.keywords.push(...element.keywords)
  })

  // Remove duplicates
  data.keywords = [...new Set(data.keywords)]
  data.locations = [...new Set(data.locations)]
  data.experiences = [...new Set(data.experiences)]
  data.technologies = [...new Set(data.technologies)]
  data.music = [...new Set(data.music)]

  return data
}

/**
 * Extract location-specific data
 */
function extractLocationData(text: string): string[] {
  const locations: string[] = []
  
  if (text.includes('london')) locations.push('london')
  if (text.includes('uk')) locations.push('uk')
  if (text.includes('england')) locations.push('england')
  
  return locations
}

/**
 * Extract experience-specific data
 */
function extractExperienceData(text: string): string[] {
  const experiences: string[] = []
  
  // Look for year patterns
  const yearMatch = text.match(/(\d+)\+?\s*years?/)
  if (yearMatch) {
    experiences.push(`${yearMatch[1]} years`)
  }
  
  return experiences
}

/**
 * Extract technology-specific data
 */
function extractTechnologyData(text: string): string[] {
  const technologies: string[] = []
  
  if (text.includes('computer')) technologies.push('computer')
  if (text.includes('laptop')) technologies.push('laptop')
  if (text.includes('development')) technologies.push('development')
  
  return technologies
}

/**
 * Extract music-specific data
 */
function extractMusicData(text: string): string[] {
  const music: string[] = []
  
  if (text.includes('music')) music.push('music')
  if (text.includes('producer')) music.push('producer')
  if (text.includes('sound')) music.push('sound')
  
  return music
}

/**
 * Determine overall context from extracted data
 */
function determineContext(data: Record<string, any>): string {
  const categories = Object.keys(data.categories)
  
  if (categories.includes('location') && data.locations.length > 0) return 'location'
  if (categories.includes('experience') && data.experiences.length > 0) return 'experience'
  if (categories.includes('music') && data.music.length > 0) return 'music'
  if (categories.includes('technology') && data.technologies.length > 0) return 'technology'
  if (categories.includes('progress')) return 'progress'
  
  return 'general'
}

/**
 * Select appropriate emoji based on extracted data and context
 */
function selectEmoji(data: Record<string, any>, context: string): {
  emoji: string
  confidence: number
  reasoning: string
  alternatives: string[]
} {
  let bestMatch: EmojiMapping | undefined
  let maxScore = 0
  let reasoning = ''

  // Score each emoji mapping
  EMOJI_DATABASE.forEach(mapping => {
    let score = mapping.priority
    let matchedKeywords: string[] = []

    // Check against all keywords
    data.keywords.forEach((keyword: string) => {
      mapping.keywords.forEach(mappingKeyword => {
        if (keyword.includes(mappingKeyword) || mappingKeyword.includes(keyword)) {
          score += 5
          matchedKeywords.push(keyword)
        }
      })
    })

    // Check against specific data
    if (context === mapping.category) {
      score += 10
    }

    if (score > maxScore) {
      maxScore = score
      bestMatch = mapping
      reasoning = `Matched keywords: ${matchedKeywords.join(', ')} in ${mapping.category} context`
    }
  })

  if (bestMatch) {
    const primaryEmoji = bestMatch.emojis[0]
    const alternatives = bestMatch.emojis.slice(1)
    
    return {
      emoji: primaryEmoji,
      confidence: Math.min(maxScore / 20, 1), // Normalize confidence
      reasoning,
      alternatives
    }
  }

  // Default fallback
  return {
    emoji: '❓',
    confidence: 0.1,
    reasoning: 'No suitable match found, using default',
    alternatives: ['❔', '⚠️', '🤔']
  }
}

/**
 * Create default analysis for error cases
 */
function createDefaultAnalysis(reason: string): EmojiAnalysis {
  return {
    originalContent: '',
    extractedData: {},
    confidence: 0,
    emoji: '❓',
    reasoning: reason,
    alternatives: ['❔', '⚠️', '🤔']
  }
}

// Helper interfaces
interface ProcessedElement {
  original: WebElement
  text: string
  keywords: string[]
  category: string
  confidence: number
  isValid: boolean
}

/**
 * Utility function to create WebElement from DOM element
 */
export function createWebElementFromDOM(element: Element): WebElement {
  const rect = element.getBoundingClientRect()
  const computedStyle = window.getComputedStyle(element)
  
  return {
    tagName: element.tagName.toLowerCase(),
    textContent: element.textContent || '',
    attributes: Array.from(element.attributes).reduce((acc, attr) => {
      acc[attr.name] = attr.value
      return acc
    }, {} as Record<string, string>),
    className: element.className,
    id: element.id,
    isVisible: rect.width > 0 && rect.height > 0 && computedStyle.display !== 'none',
    isAccessible: computedStyle.visibility !== 'hidden' && computedStyle.opacity !== '0'
  }
}

/**
 * Batch analysis function for multiple element groups
 */
export function batchAnalyzeElements(elementGroups: WebElement[][]): EmojiAnalysis[] {
  return elementGroups.map(group => analyzeWebElements(group))
}

/**
 * Get emoji suggestions for specific context
 */
export function getEmojiSuggestions(context: string, count: number = 5): string[] {
  const relevantMappings = EMOJI_DATABASE.filter(mapping => 
    mapping.category === context || mapping.keywords.some(keyword => context.includes(keyword))
  )
  
  const suggestions = relevantMappings.flatMap(mapping => mapping.emojis)
  return [...new Set(suggestions)].slice(0, count)
}