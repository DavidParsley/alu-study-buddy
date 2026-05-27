function App() {
  return (
    <div className="min-h-screen bg-white text-alu-text flex items-center justify-center">
      <div className="bg-alu-surface border border-alu-border rounded-xl p-8 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-alu-blue">ALU Study Buddy</h1>
        <p className="text-alu-muted mt-2">Claude-powered study assistant</p>
        <button className="mt-4 bg-alu-red text-white px-6 py-2 rounded-lg font-medium">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App