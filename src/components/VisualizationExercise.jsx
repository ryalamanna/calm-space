import { useState } from 'react'

export default function VisualizationExercise({ exercise, onDone, onBack }) {
  const { scenes } = exercise
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  function next() {
    if (step < scenes.length - 1) setStep(s => s + 1)
    else setDone(true)
  }

  return (
    <div className="screen fade-in">
      <div className="screen-inner">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <div className="exercise-emoji">{exercise.emoji}</div>
        <h2 className="screen-title">{exercise.name}</h2>
        <p className="screen-desc">{exercise.description}</p>

        {!done ? (
          <>
            <div className="viz-card fade-in" key={step}>
              <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a78bfa', fontFamily: 'Arial', marginBottom: '1rem' }}>
                Step {step + 1} of {scenes.length}
              </p>
              <p className="viz-text">{scenes[step]}</p>
            </div>

            <div className="progress-dots">
              {scenes.map((_, i) => (
                <div key={i} className={`dot ${i === step ? 'active' : i < step ? 'done' : ''}`} />
              ))}
            </div>

            <button className="btn-primary" onClick={next}>
              {step < scenes.length - 1 ? 'Continue →' : 'Done ✓'}
            </button>
          </>
        ) : (
          <div className="viz-card fade-in" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem' }}>🏡</div>
            <p style={{ fontSize: '1.05rem', color: '#4c1d95', fontStyle: 'italic', marginTop: '0.75rem' }}>
              This place is always inside you. You can return whenever you need.
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
