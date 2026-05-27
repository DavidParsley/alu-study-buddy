const BASE_URL = "http://localhost:8000"

export async function sendMessage(messages, notesContext, mode) {
  const response = await fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: messages,
      notes_context: notesContext,
      mode: mode,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.detail || "Something went wrong")
  }

  const data = await response.json()
  return data.response
}