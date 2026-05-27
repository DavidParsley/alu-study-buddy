import { SendHorizonal, NotebookPen } from "lucide-react";

function InputBar({ onSend, isLoading, disabled }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !isLoading && !disabled) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    const textarea = document.getElementById("chat-input");
    const value = textarea.value.trim();
    if (!value || isLoading || disabled) return;
    onSend(value);
    textarea.value = "";
  };

  return (
    <div className="p-4 border-t border-alu-border bg-white">
      {/* Disabled notice */}
      {disabled && (
        <div className="mb-3 px-4 py-2 bg-blue-50 border border-alu-blue rounded-lg flex items-center gap-2">
          <NotebookPen size={14} className="text-alu-blue shrink-0" />
          <p className="text-alu-blue text-xs font-medium">
            Paste your notes on the left to get started
          </p>
        </div>
      )}

      <div
        className={`flex gap-3 items-end rounded-xl border-2 p-3 transition-all duration-200
        ${
          disabled
            ? "border-alu-border bg-alu-surface"
            : "border-alu-blue bg-white shadow-sm"
        }`}
      >
        <textarea
          id="chat-input"
          rows={1}
          disabled={disabled || isLoading}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = Math.min(e.target.scrollHeight, 128) + "px";
          }}
          placeholder={
            disabled
              ? "Add notes first..."
              : "Ask a question about your notes..."
          }
          className="flex-1 resize-none outline-none text-sm text-alu-text placeholder-alu-light bg-transparent leading-relaxed overflow-y-auto"
          style={{ minHeight: "24px", maxHeight: "128px" }}
        />

        <button
          onClick={handleSend}
          disabled={disabled || isLoading}
          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200
            ${
              disabled || isLoading
                ? "bg-alu-border text-alu-light cursor-not-allowed"
                : "bg-alu-red text-white hover:bg-red-700 cursor-pointer"
            }`}
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <SendHorizonal size={16} />
          )}
        </button>
      </div>

      <p className="text-xs text-alu-light mt-2 text-center">
        Press{" "}
        <kbd className="px-1 py-0.5 bg-alu-surface border border-alu-border rounded text-xs">
          Enter
        </kbd>{" "}
        to send ·&nbsp;
        <kbd className="px-1 py-0.5 bg-alu-surface border border-alu-border rounded text-xs">
          Shift + Enter
        </kbd>{" "}
        for new line
      </p>
    </div>
  );
}

export default InputBar;
