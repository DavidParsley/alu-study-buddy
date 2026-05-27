function NotesPad({ notes, onNotesChange }) {
  return (
    <div className="flex flex-col h-full bg-white border-r border-alu-border">
      
      {/* Header */}
      <div className="p-4 border-b border-alu-border">
        <h2 className="font-bold text-alu-blue text-lg">📚 Your Notes</h2>
        <p className="text-alu-light text-xs mt-1">
          Paste your lecture notes, readings or assignment brief here
        </p>
      </div>

      {/* Textarea */}
      <div className="flex-1 p-4">
        <textarea
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder="Paste your notes here...&#10;&#10;Example:&#10;- Lecture slides&#10;- Assignment brief&#10;- Reading excerpts&#10;- Past exam questions"
          className="w-full h-full resize-none outline-none text-sm text-alu-text placeholder-alu-light leading-relaxed"
        />
      </div>

      {/* Footer — character count */}
      <div className="px-4 py-2 border-t border-alu-border">
        <p className="text-xs text-alu-light text-right">
          {notes.length > 0
            ? `${notes.length} characters`
            : "No notes added yet"}
        </p>
      </div>

    </div>
  )
}

export default NotesPad