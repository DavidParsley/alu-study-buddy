function InputBar({ onSend, isLoading, disabled }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !isLoading && !disabled) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleSend = () => {
    const textarea = document.getElementById("chat-input")
    const value = textarea.value.trim()
    if (!value || isLoading || disabled) return
    onSend(value)
    textarea.value = ""
  }

  return (
    <div className="p-4 border-t border-alu-border bg-white">

      {/* Disabled notice — shown when no notes pasted yet */}
      {disabled && (
        <div className="mb-3 px-4 py-2 bg-blue-50 border border-alu-blue rounded-lg">
          <p className="text-alu-blue text-xs font-medium">
            📝 Paste your notes on the left to get started
          </p>
        </div>
      )}

      <div className={`flex gap-3 items-end rounded-xl border-2 p-3 transition-all duration-200
        ${disabled
          ? "border-alu-border bg-alu-surface"
          : "border-alu-blue bg-white shadow-sm"
        }`}>

        {/* Text input */}
        <textarea
          id="chat-input"
          rows={1}
          disabled={disabled || isLoading}
          onKeyDown={handleKeyDown}
          placeholder={disabled ? "Add notes first..." : "Ask a question about your notes..."}
          className="flex-1 resize-none outline-none text-sm text-alu-text placeholder-alu-light bg-transparent leading-relaxed max-h-32 overflow-y-auto"
        />

        {/* Send button */}
        <button
          onClick={handleSend}
          disabled={disabled || isLoading}
          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200
            ${disabled || isLoading
              ? "bg-alu-border text-alu-light cursor-not-allowed"
              : "bg-alu-red text-white hover:bg-red-700 cursor-pointer"
            }`}
        >
          {isLoading
            ? <span className="text-xs">...</span>
            : <span className="text-lg">↑</span>
          }
        </button>

      </div>

      {/* Hint */}
      <p className="text-xs text-alu-light mt-2 text-center">
        Press <kbd className="px-1 py-0.5 bg-alu-surface border border-alu-border rounded text-xs">Enter</kbd> to send · <kbd className="px-1 py-0.5 bg-alu-surface border border-alu-border rounded text-xs">Shift + Enter</kbd> for new line
      </p>

    </div>
  )
}

export default InputBar