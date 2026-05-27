// frontend/src/components/SplashScreen.jsx
import { useEffect, useState } from "react"
import { GraduationCap } from "lucide-react"

function SplashScreen({ onComplete }) {
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1800)
    const doneTimer = setTimeout(() => onComplete(), 2300)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-alu-blue transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}>

      {/* Spinner ring */}
      <div className="relative flex items-center justify-center mb-8">
        <div className="w-24 h-24 rounded-full border-4 border-white/20 border-t-white animate-spin" />
        <div className="absolute w-16 h-16 bg-alu-red rounded-2xl flex items-center justify-center shadow-xl">
          <GraduationCap size={32} className="text-white" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-white text-3xl font-bold tracking-tight">ALU Study Buddy</h1>
      <p className="mt-2 text-sm font-medium tracking-wide" style={{ color: "#D97757" }}>
        ✦ Powered by Anthropic Claude
      </p>

      {/* Tagline */}
      <p className="mt-6 text-white/50 text-xs text-center max-w-xs leading-relaxed">
        Your AI-powered study companion built for ALU students
      </p>

    </div>
  )
}

export default SplashScreen