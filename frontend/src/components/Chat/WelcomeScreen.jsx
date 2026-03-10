const ICEBREAKERS = [
  { emoji: "⚡", label: "Boost my energy levels" },
  { emoji: "😴", label: "Help me sleep better" },
  { emoji: "✨", label: "Improve my skin & hair" },
  { emoji: "🧠", label: "Support focus & mental clarity" },
  { emoji: "💪", label: "Build muscle & recovery" },
  { emoji: "🛡️", label: "Strengthen my immune system" },
]

export function WelcomeScreen({ onIcebreaker }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-hero">
        <div className="welcome-badge">iHerb AI Guide</div>
        <h1 className="welcome-title">
          Your personal<br />supplement advisor
        </h1>
        <p className="welcome-subtitle">
          Tell me your health goals and I'll build a personalized supplement routine just for you.
        </p>
      </div>

      <div className="icebreaker-section">
        <p className="icebreaker-label">Where would you like to start?</p>
        <div className="icebreaker-grid">
          {ICEBREAKERS.map(({ emoji, label }) => (
            <button
              key={label}
              className="icebreaker-btn"
              onClick={() => onIcebreaker(label)}
            >
              <span className="icebreaker-emoji">{emoji}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}