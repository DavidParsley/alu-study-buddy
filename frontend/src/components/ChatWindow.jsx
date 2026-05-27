import { useEffect, useRef } from "react"
import { GraduationCap, Sparkles, BookOpen, ListChecks } from "lucide-react"
import MessageBubble from "./MessageBubble"

const SUGGESTIONS = [
  { icon: BookOpen, text: "Explain the key concepts in my notes" },
  { icon: ListChecks, text: "Generate 5 practice questions" },
  { icon: Sparkles, text: "Summarise my notes into bullet points" },
]

function ChatWindow({ messages, isLoading, onSend }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">

      {/* Empty state */}
      {messages.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
          <div className="w-16 h-16 bg-alu-blue rounded-2xl flex items-center justify-center mb-4 shadow-lg"
            style={{ boxShadow: "0 4px 24px rgba(0,46,109,0.15)" }}>
            <GraduationCap size={32} className="text-white" />
          </div>
          <h3 className="font-bold text-alu-blue text-xl tracking-tight">Ready to study?</h3>
          <p className="text-alu-light text-sm mt-2 max-w-xs leading-relaxed">
            Paste your notes on the left, pick a mode above, and start chatting with your AI study buddy.
          </p>

          <div className="mt-6 flex flex-col gap-2 w-full max-w-sm">
            {SUGGESTIONS.map(({ icon: Icon, text }) => (
              <button
                key={text}
                onClick={() => onSend(text)}
                className="flex items-center gap-3 text-left text-sm px-4 py-3 rounded-xl border border-alu-border bg-alu-surface text-alu-muted hover:border-alu-blue hover:text-alu-blue hover:bg-blue-50 transition-all duration-200 group"
              >
                <Icon size={15} className="shrink-0 text-alu-light group-hover:text-alu-blue transition-colors duration-200" />
                {text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      {messages.map((message, index) => (
        <MessageBubble key={index} message={message} />
      ))}

      {/* Loading indicator */}
      {isLoading && (
        <div className="flex gap-3 flex-row">
          <div className="w-8 h-8 rounded-full bg-alu-blue text-white flex items-center justify-center shrink-0">
            <GraduationCap size={14} />
          </div>
          <div className="bg-alu-surface border border-alu-border rounded-2xl rounded-tl-none px-4 py-3">
            <div className="flex gap-1 items-center h-4">
              <div className="w-2 h-2 bg-alu-blue rounded-full animate-bounce [animation-delay:0ms]"></div>
              <div className="w-2 h-2 bg-alu-blue rounded-full animate-bounce [animation-delay:150ms]"></div>
              <div className="w-2 h-2 bg-alu-blue rounded-full animate-bounce [animation-delay:300ms]"></div>
            </div>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  )
}

export default ChatWindow