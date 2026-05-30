import { useState, useEffect, useRef } from 'react'

export default function BreathingExercise({ exercise, onDone, onBack }) {
  const { steps, rounds } = exercise
  const totalSteps = steps.length
  const [stepIdx, setStepIdx] = useState(0)
  const [roundIdx, setRoundIdx] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(steps[0].duration)
  const [done, setDone] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (done) return
    timerRef.current = setInterval(() => {
      setSecondsLeft(s => {
        if (s > 1) return s - 1

        // advance step
        clearInterval(timerRef.current)
        const nextStep = (stepIdx + 1) % totalSteps
        const nextRound = nextStep === 0 ? roundIdx + 1 : roundIdx

        if (nextRound >= rounds) {
          setDone(true)
          return 0
        }

        setStepIdx(nextStep)
        setRoundIdx(nextRound)
        return steps[nextStep].duration
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIdx, roundIdx, done])

  const step = steps[stepIdx]
  const isExpand = step.label.toLowerCase().includes('in')
  const scale = isExpand ? 1.15 : step.label.toLowerCase() === 'hold' ? 1.08 : 0.92

  return (
    <div className="screen fade-in">
      <div className="screen-inner">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <div className="exercise-emoji">{exercise.emoji}</div>
        <h2 className="screen-title">{exercise.name}</h2>
        <p className="screen-desc">{exercise.description}</p>

        {!done ? (
          <>
            <div className="breath-circle-wrap">
              <div className="pulse-ring" />
              <div
                className="breath-circle"
                style={{
                  background: `radial-gradient(circle at 40% 35%, ${step.color}cc, ${step.color}88)`,
                  boxShadow: `0 0 40px ${step.color}66`,
                  transform: `scale(${scale})`,
                  transition: `transform ${step.duration * 0.85}s ease-in-out, background 0.6s ease`,
                }}
              >
                <span className="breath-label">{step.label}</span>
                <span className="breath-count">{secondsLeft}</span>
              </div>
            </div>

            <p className="breath-round-info">
              Round {roundIdx + 1} of {rounds}
            </p>

            <div className="progress-dots">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i === stepIdx ? 'active' : i < stepIdx ? 'done' : ''}`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="sense-card fade-in" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem' }}>🌸</div>
            <p style={{ fontSize: '1.1rem', color: '#4c1d95', fontStyle: 'italic', marginTop: '0.75rem' }}>
              Beautifully done. Notice how you feel right now.
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
