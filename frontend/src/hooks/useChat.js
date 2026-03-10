import { useState, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { sendMessage, clearHistory } from '../api/chat'

// Persist session ID across page refreshes
function getOrCreateSessionId() {
  const key = 'iherb_session_id'
  let id = sessionStorage.getItem(key)
  if (!id) {
    id = uuidv4()
    sessionStorage.setItem(key, id)
  }
  return id
}

export function useChat() {
  const [sessionId] = useState(getOrCreateSessionId)
  const [messages, setMessages] = useState([])   // { role, content, timestamp }
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const send = useCallback(async (text) => {
    if (!text.trim()) return

    const userMsg = { role: 'user', content: text, timestamp: new Date().toISOString() }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)
    setError(null)

    try {
      const data = await sendMessage(sessionId, text)
      const assistantMsg = { role: 'assistant', content: data.response, timestamp: data.timestamp }
      setMessages(prev => [...prev, assistantMsg])
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [sessionId])

  const reset = useCallback(async () => {
    await clearHistory(sessionId)
    setMessages([])
    setError(null)
  }, [sessionId])

  return { messages, loading, error, send, reset, sessionId }
}
