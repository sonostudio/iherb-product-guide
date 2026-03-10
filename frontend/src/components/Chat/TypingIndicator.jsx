export function TypingIndicator() {
  return (
    <div className="bubble-row assistant">
      <div className="avatar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
        </svg>
      </div>
      <div className="bubble bubble-assistant typing-indicator">
        <span /><span /><span />
      </div>
    </div>
  )
}
