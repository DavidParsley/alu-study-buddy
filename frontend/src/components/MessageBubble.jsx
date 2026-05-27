import ReactMarkdown from "react-markdown"

function MessageBubble({ message }) {
  const isUser = message.role === "user"

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0
        ${isUser ? "bg-alu-red text-white" : "bg-alu-blue text-white"}`}>
        {isUser ? "You" : "AI"}
      </div>
      <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed
        ${isUser
          ? "bg-alu-red text-white rounded-tr-none"
          : "bg-alu-surface text-alu-text border border-alu-border rounded-tl-none"
        }`}>
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