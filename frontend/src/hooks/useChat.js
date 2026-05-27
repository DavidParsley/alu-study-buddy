import { useState } from "react"
import { sendMessage } from "../utils/api"

function useChat() {
  const [messages, setMessages] = useState([])
  const [notes, setNotes] = useState("")
  const [mode, setMode] = useState("explain")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSend = async (content) => {
    if (!content.trim() || isLoading) return

    // Add user message to chat immediately
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