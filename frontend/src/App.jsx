import useChat from "./hooks/useChat"
import ModeSelector from "./components/ModeSelector"
import NotesPad from "./components/NotesPad"
import ChatWindow from "./components/ChatWindow"
import InputBar from "./components/InputBar"
import { RotateCcw, GraduationCap } from "lucide-react"

function App() {
  const {
    messages,
    notes,
    setNotes,
    mode,
    setMode,
    isLoading,
    error,
    handleSend,
    handleClear,
  } = useChat()

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden font-sans">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 bg-alu-blue shrink-0"
        style={{ boxShadow: "0 2px 12px rgba(0,46,109,0.18)" }}>

        {/* Left — Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-alu-red rounded-xl flex items-center justify-center shadow-md">
            <GraduationCap size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-tight tracking-tight">
              ALU Study Buddy
            </h1>
            <p className="text-xs font-medium tracking-wide"
              style={{ color: "#D97757" }}>
              ✦ Powered by Anthropic Claude
            </p>
          </div>
        </div>

        {/* Right — New Session */}
        <button
          onClick={handleClear}
          className="flex items-center gap-2 text-sm font-medium text-white border border-white/30 hover:border-white hover:bg-white/10 px-4 py-2 rounded-xl transition-all duration-200"
        >
          <RotateCcw size={14} />
          New Session
        </button>

      </header>

      {/* Mode Selector */}
      <ModeSelector activeMode={mode} onModeChange={setMode} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left Panel — Notes */}
        <div className="w-1/3 flex flex-col overflow-hidden border-r border-alu-border">
          <NotesPad notes={notes} onNotesChange={setNotes} />
        </div>

        {/* Right Panel — Chat */}
        <div className="w-2/3 flex flex-col overflow-hidden">

          {error && (
            <div className="mx-4 mt-3 px-4 py-2 bg-red-50 border border-alu-red rounded-lg">
              <p className="text-alu-red text-sm">{error}</p>
            </div>
          )}

          <ChatWindow
            messages={messages}
            isLoading={isLoading}
            onSend={handleSend}
          />
          <InputBar
            onSend={handleSend}
            isLoading={isLoading}
            disabled={notes.trim().length === 0}
          />

        </div>
      </div>

      {/* Ethics Footer */}
      <div className="bg-alu-surface border-t border-alu-border px-6 py-2 flex items-center justify-center gap-2">
        <span className="text-xs text-alu-light text-center">
          🎓 ALU Study Buddy is a learning tool. Use it to <span className="font-semibold text-alu-blue">understand</span> — not to copy. Academic integrity matters.
        </span>
      </div>

    </div>
  )
}

export default App