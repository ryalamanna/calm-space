export default function AffirmationCard({ text, onNext, onDone }) {
  return (
    <div className="affirm-screen fade-in">
      <div className="affirm-inner">
        <div className="affirm-emoji">🌸</div>

        <div className="affirm-quote-marks">"</div>

        <p className="affirm-text">{text}</p>

        <div className="affirm-actions">
          <button className="btn-primary" onClick={onNext}>
            Another one ✦
          </button>
          <button className="btn-ghost" onClick={onDone}>
            I'm feeling better → Home
          </button>
        </div>
      </div>
    </div>
  )
}
