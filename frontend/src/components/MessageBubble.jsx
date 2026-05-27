import ReactMarkdown from "react-markdown"
import { Lightbulb, PenLine, FileText } from "lucide-react"

const MODE_META = {
  explain: { icon: Lightbulb, label: "Explain" },
  quiz: { icon: PenLine, label: "Quiz Me" },
  summarise: { icon: FileText, label: "Summarise" },
}

function MessageBubble({ message, mode }) {
  const isUser = message.role === "user"
  const ModeBadgeIcon = MODE_META[mode]?.icon || Lightbulb
  const modeLabel = MODE_META[mode]?.label || "Explain"

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>

      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
        ${isUser ? "bg-alu-red text-white" : "bg-alu-blue text-white"}`}>
        {isUser ? "You" : <Lightbulb size={14} />}
      </div>

      {/* Bubble */}
      <div className={`max-w-[75%] rounded-3xl px-4 py-3 text-sm leading-relaxed
        ${isUser
          ? "bg-alu-red text-white rounded-tr-sm"
          : "bg-alu-surface text-alu-text border border-alu-border rounded-tl-sm"
        }`}>

        {/* Mode badge — AI messages only */}
        {!isUser && (
          <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-alu-border">
            <ModeBadgeIcon size={11} className="text-alu-blue" />
            <span className="text-xs font-semibold text-alu-blue">{modeLabel}</span>
          </div>
        )}

        {/* Content */}
        {isUser ? (
          message.content
        ) : (
          <ReactMarkdown
            components={{
              h1: ({children}) => <h1 className="text-lg font-bold text-alu-blue mb-2">{children}</h1>,
              h2: ({children}) => <h2 className="text-base font-bold text-alu-blue mb-2">{children}</h2>,
              h3: ({children}) => <h3 className="text-sm font-bold text-alu-blue mb-1">{children}</h3>,
              strong: ({children}) => <strong className="font-bold text-alu-blue">{children}</strong>,
              ul: ({children}) => <ul className="list-disc list-inside space-y-1 my-2">{children}</ul>,
              ol: ({children}) => <ol className="list-decimal list-inside space-y-1 my-2">{children}</ol>,
              li: ({children}) => <li className="text-alu-text">{children}</li>,
              p: ({children}) => <p className="mb-2 last:mb-0">{children}</p>,
              code: ({children}) => <code className="bg-gray-100 text-alu-red px-1 rounded text-xs font-mono">{children}</code>,
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  )
}

export default MessageBubble