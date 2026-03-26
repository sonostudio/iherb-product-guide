import { useEffect, useState } from 'react'
import { useChat } from '../hooks/useChat'
import { MessageList } from '../components/Chat/MessageList'
import { InputBar } from '../components/Chat/InputBar'
import { WelcomeScreen } from '../components/Chat/WelcomeScreen'
import { getClientConfig } from '../config/clients'

export function ChatPage() {
  const { messages, loading, error, send, reset } = useChat()
  const [clientConfig] = useState(() => {
    try {
      return getClientConfig()
    } catch (e) {
      console.error('Failed to load client config:', e)
      return null
    }
  })

  useEffect(() => {
    if (!clientConfig) return
    document.title = `${clientConfig.brandName} ${clientConfig.tagline}`
  }, [clientConfig])

  // Fallback if config failed to load
  if (!clientConfig) {
    return (
      <div style={{ padding: 40, fontFamily: 'sans-serif', color: '#333' }}>
        <h2>設定エラー / Config Error</h2>
        <p>CLIENT config could not be loaded. Check the browser console for details.</p>
        <p>Current VITE_CLIENT: <code>{import.meta.env.VITE_CLIENT || '(not set)'}</code></p>
      </div>
    )
  }

  const handleIcebreaker = (text) => {
    send(text)
  }

  return (
    <div className="chat-page">
      <header className="chat-header">
        <div className="header-logo">
          <span className="logo-text">{clientConfig.brandName}</span>
          <span className="logo-sub">{clientConfig.tagline}</span>
        </div>
        {messages.length > 0 && (
          <button className="reset-btn" onClick={reset} title="新しい会話を始める">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
            </svg>
            {clientConfig.newChat}
          </button>
        )}
      </header>

      <main className="chat-main">
        {messages.length === 0
          ? <WelcomeScreen config={clientConfig.welcome} onIcebreaker={handleIcebreaker} />
          : <MessageList messages={messages} loading={loading} />
        }
      </main>

      <footer className="chat-footer">
        {error && <p className="error-msg">{error}</p>}
        <InputBar onSend={send} disabled={loading} />
        <p className="disclaimer">{clientConfig.disclaimer}</p>
      </footer>
    </div>
  )
}