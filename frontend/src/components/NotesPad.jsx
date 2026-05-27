// frontend/src/components/NotesPad.jsx
import { BookOpen, FileText } from "lucide-react"

function NotesPad({ notes, onNotesChange }) {
  return (
    <div className="flex flex-col h-full bg-white border-r border-alu-border">

      {/* Header */}
      <div className="p-4 border-b border-alu-border">
        <div className="flex items-center gap-2">
          <BookOpen size={18} className="text-alu-blue" />
          <h2 className="font-bold text-alu-blue text-lg">Your Notes</h2>
        </div>
        <p className="text-alu-light text-xs mt-1">
          Paste your lecture notes, readings or assignment brief here
        </p>
      </div>

      {/* Textarea */}
      <div className="flex-1 p-4">
        <textarea
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder={`Paste your notes here...\n\nExample:\n- Lecture slides\n- Assignment brief\n- Reading excerpts\n- Past exam questions`}
          className="w-full h-full resize-none outline-none text-sm text-alu-text placeholder-alu-light leading-relaxed"
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