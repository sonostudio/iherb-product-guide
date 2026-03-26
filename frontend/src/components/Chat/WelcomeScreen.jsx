export function WelcomeScreen({ config, onIcebreaker }) {
  const { badge, title, subtitle, icebreakerLabel, icebreakers } = config

  // Support \n line breaks in title
  const titleLines = title.split('\n')

  return (
    <div className="welcome-screen">
      <div className="welcome-hero">
        <div className="welcome-badge">{badge}</div>
        <h1 className="welcome-title">
          {titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="welcome-subtitle">{subtitle}</p>
      </div>

      <div className="icebreaker-section">
        <p className="icebreaker-label">{icebreakerLabel}</p>
        <div className="icebreaker-grid">
          {icebreakers.map(({ emoji, label }) => (
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