import { useState, useEffect, useRef } from 'react'
import { AppHeader } from './shared'

// Color per phase
const PHASE_COLORS = {
  'Breathe In':  { orb: 'rgba(210,188,250,', glow: 'rgba(210,188,250,' },
  'Hold':        { orb: 'rgba(154,208,208,', glow: 'rgba(154,208,208,' },
  'Breathe Out': { orb: 'rgba(154,208,208,', glow: 'rgba(154,208,208,' },
}

function getColor(label) {
  const key = Object.keys(PHASE_COLORS).find(k => label.toLowerCase().includes(k.toLowerCase()))
  return PHASE_COLORS[key] || PHASE_COLORS['Breathe In']
}

export default function BreathingExercise({ exercise, onDone, onBack }) {
  const { steps, rounds } = exercise
  const totalSteps = steps.length
  const [stepIdx, setStepIdx] = useState(0)
  const [roundIdx, setRoundIdx] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(steps[0].duration)
  const [done, setDone] = useState(false)
  // Start small so the first "breathe in" visibly animates outward
  const [mounted, setMounted] = useState(false)
  const timerRef = useRef(null)

  // One frame after mount, flip to true so CSS transition fires on first render
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    if (done) return
    timerRef.current = setInterval(() => {
      setSecondsLeft(s => {
        if (s > 1) return s - 1
        clearInterval(timerRef.current)
        const nextStep = (stepIdx + 1) % totalSteps
        const nextRound = nextStep === 0 ? roundIdx + 1 : roundIdx
        if (nextRound >= rounds) { setDone(true); return 0 }
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

  // Before mounted: always start tiny so the first expand is visible
  const orbSize  = !mounted ? 80 : isExpand ? 260 : step.label.toLowerCase() === 'hold' ? 230 : 180
  const glowSize = orbSize + 60
  const c = getColor(step.label)

  return (
    <div className="page fade-in">
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />
      <div className="ambient ambient-3" />
      <AppHeader onClose={onBack} />

      <div className="screen">
        <div className="screen-inner">
          {!done ? (
            <div className="breath-scene">
              <p className="breath-phase-label">{step.label}</p>

              <div className="breath-orb-wrap">
                {/* outer glow */}
                <div className="breath-orb-glow" style={{
                  width: glowSize, height: glowSize,
                  background: `radial-gradient(circle, ${c.glow}0.08) 0%, transparent 70%)`,
                  filter: 'blur(30px)',
                  transition: `width ${step.duration * 0.85}s ease-in-out, height ${step.duration * 0.85}s ease-in-out`,
                }} />
                {/* main orb */}
                <div className="breath-orb" style={{
                  width: orbSize, height: orbSize,
                  background: `radial-gradient(circle at 40% 38%, ${c.orb}0.55) 0%, ${c.orb}0.18) 55%, transparent 80%)`,
                  filter: 'blur(2px)',
                  transition: `width ${step.duration * 0.85}s ease-in-out, height ${step.duration * 0.85}s ease-in-out`,
                }} />
              </div>

              <p className="breath-round-info">Round {roundIdx + 1} of {rounds}</p>

              <div className="progress-dots">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div key={i} className={`dot ${i === stepIdx ? 'active' : i < stepIdx ? 'done' : ''}`} />
                ))}
              </div>
            </div>
          ) : (
            <div className="glass-card fade-in" style={{ textAlign: 'center', maxWidth: 400 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🌸</div>
              <p style={{ fontFamily: 'Quicksand', fontSize: '1.1rem', color: 'var(--on-surface)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Beautifully done. Notice how you feel right now.
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
