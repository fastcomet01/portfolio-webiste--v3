import { SelectExamples } from '@/components/select-examples'

export default function SelectDemoPage() {
  return (
    <div 
      className="container mx-auto py-8 min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #84cc16 0%, #eab308 25%, #22c55e 50%, #16a34a 75%, #15803d 100%)',
      }}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">Select Component Demo</h1>
        <p className="text-white/80 mt-2 drop-shadow">
          Learn how to use the Select component in your portfolio
        </p>
      </div>
      <SelectExamples />
    </div>
  )
}