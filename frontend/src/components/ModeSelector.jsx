const MODES = [
  {
    id: "explain",
    label: "Explain",
    icon: "💡",
    description: "Understand concepts deeply"
  },
  {
    id: "quiz",
    label: "Quiz Me",
    icon: "✏️",
    description: "Test your knowledge"
  },
  {
    id: "summarise",
    label: "Summarise",
    icon: "📋",
    description: "Key points from your notes"
  },
]

function ModeSelector({ activeMode, onModeChange }) {
  return (
    <div className="flex gap-3 p-4 bg-white border-b border-alu-border">
      {MODES.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onModeChange(mode.id)}
          className={`flex-1 flex flex-col items-center gap-1 py-3 px-4 rounded-xl border-2 transition-all duration-200 cursor-pointer
            ${activeMode === mode.id
              ? "border-alu-blue bg-alu-blue text-white"
              : "border-alu-border bg-alu-surface text-alu-text hover:border-alu-blue hover:bg-blue-50"
            }`}
        >
          <span className="text-xl">{mode.icon}</span>
          <span className="font-semibold text-sm">{mode.label}</span>
          <span className={`text-xs ${activeMode === mode.id ? "text-blue-200" : "text-alu-light"}`}>
            {mode.description}
          </span>
        </button>
      ))}
    </div>
  )
}

export default ModeSelector