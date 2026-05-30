import { useState, useEffect } from 'react'
import { getRandomExercise, getRandomAffirmations } from './exercises'
import BreathingExercise from './components/BreathingExercise'
import GroundingExercise from './components/GroundingExercise'
import BodyScanExercise from './components/BodyScanExercise'
import VisualizationExercise from './components/VisualizationExercise'
import AffirmationCard from './components/AffirmationCard'
import InstallPrompt from './components/InstallPrompt'
import { AppHeader } from './components/shared'
import './App.css'

export default function App() {
  const [exercise, setExercise] = useState(null)
  const [affirmations, setAffirmations] = useState([])
  const [view, setView] = useState('home')
  const [affirmIdx, setAffirmIdx] = useState(0)
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    setExercise(getRandomExercise())
    setAffirmations(getRandomAffirmations(5))
    const handler = (e) => { e.preventDefault(); setDeferredPrompt(e) }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  function refreshExercise() {
    setExercise(getRandomExercise())
    setView('home')
  }

  function nextAffirmation() {
    setAffirmIdx(i => (i + 1) % affirmations.length)
  }

  if (view === 'exercise' && exercise) {
    const props = { exercise, onDone: () => setView('affirmations'), onBack: () => setView('home') }
    if (exercise.type === 'breathing')     return <BreathingExercise {...props} />
    if (exercise.type === 'grounding')     return <GroundingExercise {...props} />
    if (exercise.type === 'scan')          return <BodyScanExercise {...props} />
    if (exercise.type === 'visualization') return <VisualizationExercise {...props} />
  }

  if (view === 'affirmations') {
    return (
      <AffirmationCard
        text={affirmations[affirmIdx]}
        onNext={nextAffirmation}
        onDone={() => setView('home')}
      />
    )
  }

  return (
    <div className="page fade-in">
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />
      <div className="ambient ambient-3" />

      <AppHeader />

      <div className="home">
        <div className="home-inner">
          {exercise && (
            <div className="exercise-card drift">
              <div className="exercise-tag">Today's Exercise</div>
              <h2 className="exercise-name">{exercise.name}</h2>
              <button className="btn-primary" onClick={() => setView('exercise')}>
                ▶ Begin Journey
              </button>
              <div className="exercise-meta">
                <span className="meta-item">◷ 3–5 min</span>
                <span className="meta-item">✦ Mindfulness</span>
              </div>
              <button className="btn-ghost" style={{ marginTop: '0.25rem', fontSize: '0.8rem' }} onClick={refreshExercise}>
                Try a different one →
              </button>
            </div>
          )}

          <div className="home-quote" onClick={() => setView('affirmations')}>
            <p>"{affirmations[0]}"</p>
            <div className="home-quote-dots">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </div>

      {deferredPrompt && (
        <InstallPrompt
          onInstall={async () => {
            deferredPrompt.prompt()
            const { outcome } = await deferredPrompt.userChoice
            if (outcome === 'accepted') setDeferredPrompt(null)
          }}
          onDismiss={() => setDeferredPrompt(null)}
        />
      )}
    </div>
  )
}
