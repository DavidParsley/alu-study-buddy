import useChat from "./hooks/useChat"
import ModeSelector from "./components/ModeSelector"
import NotesPad from "./components/NotesPad"
import ChatWindow from "./components/ChatWindow"
import InputBar from "./components/InputBar"

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
    <div className="h-screen flex flex-col bg-white overflow-hidden">

      {/* Top Header */}
      <header className="flex items-center justify-between px-6 py-3 bg-alu-blue shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-alu-red rounded-lg flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-none">ALU Study Buddy</h1>
            <p className="text-orange-200 text-xs">Powered by Claude AI</p>
          </div>
        </div>
        <button
          onClick={handleClear}
          className="text-blue-200 hover:text-white text-sm border border-blue-400 hover:border-white px-3 py-1 rounded-lg transition-all duration-200"
        >
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

          {/* Error banner */}
          {error && (
            <div className="mx-4 mt-3 px-4 py-2 bg-red-50 border border-alu-red rounded-lg">
              <p className="text-alu-red text-sm">{error}</p>
            </div>
          )}

          <ChatWindow messages={messages} isLoading={isLoading} />
          <InputBar
            onSend={handleSend}
            isLoading={isLoading}
            disabled={notes.trim().length === 0}
          />

        </div>
      </div>

    </div>
  )
}

export default App