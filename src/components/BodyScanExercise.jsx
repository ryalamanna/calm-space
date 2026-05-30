import { useState } from 'react'

export default function BodyScanExercise({ exercise, onDone, onBack }) {
  const { areas } = exercise
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  function next() {
    if (step < areas.length - 1) setStep(s => s + 1)
    else setDone(true)
  }

  const current = areas[step]

  return (
    <div className="screen fade-in">
      <div className="screen-inner">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <div className="exercise-emoji">{exercise.emoji}</div>
        <h2 className="screen-title">{exercise.name}</h2>
        <p className="screen-desc">{exercise.description}</p>

        {!done ? (
          <>
            <div className="scan-card fade-in" key={step}>
              <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a78bfa', fontFamily: 'Arial, sans-serif', marginBottom: '0.75rem' }}>
                Bring your attention to…
              </p>
              <div className="scan-part">{current.part}</div>
              <p className="scan-instruction">{current.instruction}</p>
            </div>

            <div className="progress-dots">
              {areas.map((_, i) => (
                <div key={i} className={`dot ${i === step ? 'active' : i < step ? 'done' : ''}`} />
              ))}
            </div>

            <button className="btn-primary" onClick={next}>
              {step < areas.length - 1 ? 'Next →' : 'Done ✓'}
            </button>
          </>
        ) : (
          <div className="scan-card fade-in" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem' }}>✨</div>
            <p style={{ fontSize: '1.05rem', color: '#4c1d95', fontStyle: 'italic', marginTop: '0.75rem' }}>
              Your body carried you through that. Say thank you to it.
            </p>
            <div className="done-row" style={{ marginTop: '1.25rem' }}>
              <button className="btn-primary" onClick={onDone}>Continue</button>
              <button className="btn-ghost" onClick={onBack}>Home</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
