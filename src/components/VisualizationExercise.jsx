import { useState } from 'react'
import { AppHeader } from './shared'

export default function VisualizationExercise({ exercise, onDone, onBack }) {
  const { scenes } = exercise
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  function next() {
    if (step < scenes.length - 1) setStep(s => s + 1)
    else setDone(true)
  }
  function prev() {
    if (step > 0) setStep(s => s - 1)
  }

  return (
    <div className="page fade-in">
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />
      <div className="ambient ambient-3" />
      <AppHeader onClose={onBack} />

      <div className="screen">
        <div className="screen-inner">
          {!done ? (
            <>
              <div className="glass-card fade-in" key={step}>
                <div className="viz-step-badge">Step {step + 1} of {scenes.length}</div>
                <p className="viz-text">{scenes[step]}</p>
              </div>

              <div className="grounding-nav">
                <button className="nav-arrow" onClick={prev} disabled={step === 0}>‹</button>
                <div className="progress-dots">
                  {scenes.map((_, i) => (
                    <div key={i} className={`dot ${i === step ? 'active' : i < step ? 'done' : ''}`} />
                  ))}
                </div>
                <button className="nav-arrow nav-arrow-next" onClick={next}>›</button>
              </div>
            </>
          ) : (
            <div className="glass-card fade-in" style={{ textAlign: 'center', maxWidth: 400 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🏡</div>
              <p style={{ fontFamily: 'Quicksand', fontSize: '1.1rem', color: 'var(--on-surface)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                This place is always inside you. Return whenever you need.
              </p>
              <div className="done-row">
                <button className="btn-primary" onClick={onDone}>Continue</button>
                <button className="btn-ghost" onClick={onBack}>Return home</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
