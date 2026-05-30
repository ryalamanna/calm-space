import { useState } from 'react'
import { AppHeader } from './shared'

export default function GroundingExercise({ exercise, onDone, onBack }) {
  const { prompts } = exercise
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  function next() {
    if (step < prompts.length - 1) setStep(s => s + 1)
    else setDone(true)
  }
  function prev() {
    if (step > 0) setStep(s => s - 1)
  }

  const current = prompts[step]

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
              <div className="grounding-number-circle">
                <span className="grounding-number">{current.count}</span>
              </div>

              <div className="glass-card fade-in" key={step}>
                <span className="sense-icon">{current.icon}</span>
                <div className="sense-word">Things you can {current.sense}</div>
                <p className="sense-examples">Look around you — name {current.count} distinct things.<br /><span style={{ opacity: 0.5 }}>e.g. {current.examples}</span></p>
              </div>

              <div className="grounding-nav">
                <button className="nav-arrow" onClick={prev} disabled={step === 0}>‹</button>
                <div className="progress-dots">
                  {prompts.map((_, i) => (
                    <div key={i} className={`dot ${i === step ? 'active' : i < step ? 'done' : ''}`} />
                  ))}
                </div>
                <button className="nav-arrow nav-arrow-next" onClick={next}>›</button>
              </div>
            </>
          ) : (
            <div className="glass-card fade-in" style={{ textAlign: 'center', maxWidth: 400 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🌿</div>
              <p style={{ fontFamily: 'Quicksand', fontSize: '1.1rem', color: 'var(--on-surface)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                You are here. Present. Grounded. That was wonderful.
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
