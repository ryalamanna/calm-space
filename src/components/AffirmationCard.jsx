import { AppHeader } from './shared'

export default function AffirmationCard({ text, onNext, onDone }) {
  return (
    <div className="page fade-in">
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />
      <div className="ambient ambient-3" />
      <AppHeader onClose={onDone} />
      <div className="affirm-screen">
        <div className="affirm-inner">
          <span className="affirm-label">Today's Intention</span>
          <p className="affirm-text">{text}</p>
          <div className="affirm-actions">
            <button className="btn-glass" onClick={onNext}>✦ Another one</button>
            <button className="btn-primary" onClick={onDone} style={{ marginTop: 0 }}>Return home</button>
          </div>
        </div>
      </div>
    </div>
  )
}
