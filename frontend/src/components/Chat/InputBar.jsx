import { useState, useRef, useEffect } from 'react'

export function InputBar({ onSend, disabled, placeholder }) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim() || disabled) return
    onSend(value.trim())
    setValue('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
  }

  const isEmpty = !value.trim()

  return (
    <form className="input-bar" onSubmit={handleSubmit}>
      <textarea
        ref={textareaRef}
        className="input-field"
        placeholder={placeholder ?? 'Type a message...'}
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={disabled}
        rows={2}
      />
      <button
        className={`send-btn ${isEmpty ? 'send-btn--empty' : ''}`}
        type="submit"
        disabled={disabled}
        aria-label="Send message"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
      </button>
    </form>
  )
}