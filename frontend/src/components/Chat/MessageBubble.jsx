import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function MessageBubble({ message }) {
  const isUser = message.role === 'user'

  return (
    <div className={`bubble-row ${isUser ? 'user' : 'assistant'}`}>
      {!isUser && (
        <div className="avatar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
          </svg>
        </div>
      )}
      <div className={`bubble ${isUser ? 'bubble-user' : 'bubble-assistant'}`}>
        {isUser
          ? <p>{message.content}</p>
          : <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
        }
      </div>
    </div>
  )
}