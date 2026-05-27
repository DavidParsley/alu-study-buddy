function MessageBubble({ message }) {
  const isUser = message.role === "user"

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0
        ${isUser ? "bg-alu-red text-white" : "bg-alu-blue text-white"}`}>
        {isUser ? "You" : "AI"}
      </div>

      {/* Bubble */}
      <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed
        ${isUser
          ? "bg-alu-red text-white rounded-tr-none"
          : "bg-alu-surface text-alu-text border border-alu-border rounded-tl-none"
        }`}>
        
        {/* Render message with line breaks */}
        {message.content.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < message.content.split("\n").length - 1 && <br />}
          </span>
        ))}

      </div>
    </div>
  )
}

export default MessageBubble