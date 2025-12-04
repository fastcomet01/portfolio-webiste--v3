import EmojiAnalyzerDemo from '@/components/emoji-analyzer-demo'
import { EmojiWithAccessibility, EmojiWithDescription } from '@/components/emoji-accessibility'

export default function EmojiAnalyzerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🧪 Emoji Analyzer Testing Lab
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive testing environment for emoji analysis, web element processing, 
            and intelligent emoji selection based on content and context.
          </p>
        </div>

        {/* Demo Section */}
        <div className="mb-12">
          <EmojiAnalyzerDemo 
            targetElements={['span']}
            autoAnalyze={true}
            showDebug={true}
          />
        </div>

        {/* Test Elements Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Test Elements for Analysis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location Element */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📍</span>
                <span className="font-semibold text-gray-900 dark:text-white">Location</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                <span>London, UK</span>
              </div>
            </div>

            {/* Experience Element */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📅</span>
                <span className="font-semibold text-gray-900 dark:text-white">Experience</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                <span>5+ years professional experience</span>
              </div>
            </div>

            {/* Music Element */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎵</span>
                <span className="font-semibold text-gray-900 dark:text-white">Music</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                <span>Music Producer & Audio Engineer</span>
              </div>
            </div>

            {/* Technology Element */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💻</span>
                <span className="font-semibold text-gray-900 dark:text-white">Technology</span>
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                <span>Full-stack Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Features Demo */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            ♿ Accessibility Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Accessible Emoji Components
              </h3>
              
              <div className="space-y-4">
                <EmojiWithDescription
                  emoji="🚀"
                  description="Rocket Launch"
                  detailedDescription="Project launch and deployment"
                />
                
                <EmojiWithDescription
                  emoji="🛠️"
                  description="Tools & Development"
                  detailedDescription="Development and maintenance tools"
                />
                
                <EmojiWithDescription
                  emoji="🎯"
                  description="Target Achievement"
                  detailedDescription="Goals and objectives tracking"
                />
              </div>
            </div>

import InteractiveEmojiWrapper from '@/components/interactive-emoji-wrapper'

// ... existing code ...

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Interactive Emoji Elements
              </h3>
              
              <InteractiveEmojiWrapper />
            </div>
          </div>
        </div>

        {/* Performance Testing Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            ⚡ Performance & Compatibility
          </h2>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                <div className="text-3xl mb-2">✅</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cross-Platform</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Works consistently across all modern browsers and devices
                </p>
              </div>
              
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">High Performance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Optimized for fast rendering and minimal memory usage
                </p>
              </div>
              
              <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <div className="text-3xl mb-2">🔧</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Easy Integration</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Simple API for seamless integration into existing projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Unicode Standards Compliance */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            📋 Unicode Standards Compliance
          </h2>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="text-4xl mb-2">😀</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Basic Emoji</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Unicode 6.0+</div>
              </div>
              
              <div className="p-4">
                <div className="text-4xl mb-2">👋🏽</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Modifiers</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Unicode 8.0+</div>
              </div>
              
              <div className="p-4">
                <div className="text-4xl mb-2">🧑‍💻</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">ZWJ Sequences</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Unicode 9.0+</div>
              </div>
              
              <div className="p-4">
                <div className="text-4xl mb-2">🇺🇸</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Flag Sequences</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Unicode 6.0+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Implement?</h2>
            <p className="text-lg mb-6">
              Integrate intelligent emoji analysis into your web applications today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                🚀 Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                📖 Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}