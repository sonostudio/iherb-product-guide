import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

export async function sendMessage(sessionId, message) {
  const { data } = await api.post('/chat', { session_id: sessionId, message })
  return data
}

export async function getHistory(sessionId) {
  const { data } = await api.get(`/chat/history/${sessionId}`)
  return data
}

export async function clearHistory(sessionId) {
  const { data } = await api.delete(`/chat/history/${sessionId}`)
  return data
}
