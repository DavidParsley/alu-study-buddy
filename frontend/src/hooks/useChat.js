import { useState, useEffect } from "react"
import { sendMessage } from "../utils/api"

function useChat() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("alu_messages")
    return saved ? JSON.parse(saved) : []
  })

  const [notes, setNotes] = useState(() => {
    return localStorage.getItem("alu_notes") || ""
  })

  const [mode, setMode] = useState(() => {
    return localStorage.getItem("alu_mode") || "explain"
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Persist to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("alu_messages", JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    localStorage.setItem("alu_notes", notes)
  }, [notes])

  useEffect(() => {
    localStorage.setItem("alu_mode", mode)
  }, [mode])

  const handleSend = async (content) => {
    if (!content.trim() || isLoading) return

    const userMessage = { role: "user", content }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsLoading(true)
    setError(null)

    try {
      const response = await sendMessage(updatedMessages, notes, mode)
      const assistantMessage = { role: "assistant", content: response }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleClear = () => {
    setMessages([])
    setError(null)
    localStorage.removeItem("alu_messages")
  }

  return {
    messages,
    notes,
    setNotes,
    mode,
    setMode,
    isLoading,
    error,
    handleSend,
    handleClear,
  }
}

export default useChat