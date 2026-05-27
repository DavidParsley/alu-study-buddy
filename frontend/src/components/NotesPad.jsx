import { BookOpen, FileText, Tag } from "lucide-react"

function NotesPad({ notes, onNotesChange, topic, onTopicChange }) {
  return (
    <div className="flex flex-col h-full border-r border-alu-border" style={{ background: "#FAFAFA" }}>

      {/* Header */}
      <div className="p-4 border-b border-alu-border">
        <div className="flex items-center gap-2">
          <BookOpen size={16} className="text-alu-blue" />
          <h2 className="font-bold text-alu-blue text-base">Your Notes</h2>
        </div>
        <p className="text-alu-light text-xs mt-1">
          Paste your lecture notes, readings or assignment brief here
        </p>
      </div>

      {/* Topic chip input */}
      <div className="px-4 pt-3">
        <div className="flex items-center gap-2 bg-blue-50 border border-alu-border rounded-xl px-3 py-2">
          <Tag size={12} className="text-alu-blue shrink-0" />
          <input
            type="text"
            value={topic}
            onChange={(e) => onTopicChange(e.target.value)}
            placeholder="Course or topic (e.g. COMP 201 — Week 4)"
            className="flex-1 text-xs font-medium text-alu-blue bg-transparent outline-none placeholder-alu-light"
          />
        </div>
      </div>

      {/* Textarea */}
      <div className="flex-1 p-4">
        <textarea
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder={`Paste your notes here...\n\nExample:\n- Lecture slides\n- Assignment brief\n- Reading excerpts\n- Past exam questions`}
          className="w-full h-full resize-none outline-none text-sm text-alu-text placeholder-alu-light leading-relaxed bg-transparent"
        />
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-alu-border flex items-center justify-between">
        <div className="flex items-center gap-1 text-alu-light">
          <FileText size={12} />
          <span className="text-xs">
            {notes.length > 0 ? `${notes.length} characters` : "No notes added yet"}
          </span>
        </div>
        {notes.length > 0 && (
          <button
            onClick={() => onNotesChange("")}
            className="text-xs text-alu-light hover:text-alu-red transition-colors duration-200"
          >
            Clear
          </button>
        )}
      </div>

    </div>
  )
}

export default NotesPad