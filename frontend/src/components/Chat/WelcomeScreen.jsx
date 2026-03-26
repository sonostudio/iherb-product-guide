import { InputBar } from './InputBar'

export function WelcomeScreen({ config, onIcebreaker, onSend, disabled, disclaimer, error }) {
  const { badge, title, subtitle, icebreakerLabel, icebreakers } = config

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

      <div className="welcome-input-wrap">
        {error && <p className="error-msg">{error}</p>}
        <InputBar onSend={onSend} disabled={disabled} />
        <p className="disclaimer">{disclaimer}</p>
      </div>

      <div className="icebreaker-section">
        <p className="icebreaker-label">{icebreakerLabel}</p>
        <div className="icebreaker-chips">
          {icebreakers.map(({ emoji, label }) => (
            <button
              key={label}
              className="icebreaker-chip"
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