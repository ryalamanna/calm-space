import { useState } from 'react'

export default function GroundingExercise({ exercise, onDone, onBack }) {
  const { prompts } = exercise
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  function next() {
    if (step < prompts.length - 1) {
      setStep(s => s + 1)
    } else {
      setDone(true)
    }
  }

  const current = prompts[step]

  return (
    <div className="screen fade-in">
      <div className="screen-inner">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <div className="exercise-emoji">{exercise.emoji}</div>
        <h2 className="screen-title">{exercise.name}</h2>
        <p className="screen-desc">{exercise.description}</p>

        {!done ? (
          <>
            <div className="sense-card fade-in" key={step}>
              <div className="sense-icon">{current.icon}</div>
              <div className="sense-count">{current.count}</div>
              <div className="sense-word">things you can {current.sense}</div>
              <p className="sense-examples">e.g. {current.examples}</p>
            </div>

            <div className="progress-dots">
              {prompts.map((_, i) => (
                <div key={i} className={`dot ${i === step ? 'active' : i < step ? 'done' : ''}`} />
              ))}
            </div>

            <button className="btn-primary" onClick={next}>
              {step < prompts.length - 1 ? 'Next Sense →' : 'Done ✓'}
            </button>
          </>
        ) : (
          <div className="sense-card fade-in" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem' }}>🌿</div>
            <p style={{ fontSize: '1.1rem', color: '#4c1d95', fontStyle: 'italic', marginTop: '0.75rem' }}>
              You are here. Present. Grounded. That was wonderful.
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
