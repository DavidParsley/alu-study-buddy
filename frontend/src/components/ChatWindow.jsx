import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatWindow({ messages, isLoading, onSend }) {
  const bottomRef = useRef(null);

  // Auto scroll to bottom whenever messages update
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
      {/* Empty state — shown when no messages yet */}
      {messages.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
          <div className="w-16 h-16 bg-alu-surface border-2 border-alu-border rounded-full flex items-center justify-center text-3xl mb-4">
            🎓
          </div>
          <h3 className="font-bold text-alu-blue text-lg">Ready to study?</h3>
          <p className="text-alu-light text-sm mt-2 max-w-xs">
            Paste your notes on the left, pick a mode above, and start chatting
            with your AI study buddy.
          </p>
          <div className="mt-6 flex flex-col gap-2 w-full max-w-sm">
            {[
              "Explain the key concepts in my notes",
              "Generate 5 practice questions",
              "Summarise my notes into bullet points",
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => onSend(suggestion)}
                className="text-left text-sm px-4 py-2 rounded-lg border border-alu-border bg-alu-surface text-alu-muted hover:border-alu-blue hover:text-alu-blue transition-all duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      {messages.map((message, index) => (
        <MessageBubble key={index} message={message} />
      ))}

      {/* Loading indicator — shown while Claude is thinking */}
      {isLoading && (
        <div className="flex gap-3 flex-row">
          <div className="w-8 h-8 rounded-full bg-alu-blue text-white flex items-center justify-center text-sm font-bold shrink-0">
            AI
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

      {/* Invisible div at the bottom — scroll target */}
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatWindow;
