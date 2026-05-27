import { Lightbulb, PenLine, FileText } from "lucide-react"

const MODES = [
  {
    id: "explain",
    label: "Explain",
    icon: Lightbulb,
    description: "Understand concepts deeply"
  },
  {
    id: "quiz",
    label: "Quiz Me",
    icon: PenLine,
    description: "Test your knowledge"
  },
  {
    id: "summarise",
    label: "Summarise",
    icon: FileText,
    description: "Key points from your notes"
  },
]

function ModeSelector({ activeMode, onModeChange }) {
  return (
    <div className="flex gap-3 p-4 bg-white border-b border-alu-border">
      {MODES.map((mode) => {
        const Icon = mode.icon
        return (
          <button
            key={mode.id}
            onClick={() => onModeChange(mode.id)}
            className={`flex-1 flex flex-col items-center gap-1 py-3 px-4 rounded-xl border-2 transition-all duration-200 cursor-pointer
              ${activeMode === mode.id
                ? "border-alu-blue bg-alu-blue text-white"
                : "border-alu-border bg-alu-surface text-alu-text hover:border-alu-blue hover:bg-blue-50"
              }`}
          >
            <Icon size={20} />
            <span className="font-semibold text-sm">{mode.label}</span>
            <span className={`text-xs ${activeMode === mode.id ? "text-blue-200" : "text-alu-light"}`}>
              {mode.description}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default ModeSelector