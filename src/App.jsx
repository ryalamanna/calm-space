import { useState, useEffect } from 'react'
import { getRandomExercise, getRandomAffirmations } from './exercises'
import BreathingExercise from './components/BreathingExercise'
import GroundingExercise from './components/GroundingExercise'
import BodyScanExercise from './components/BodyScanExercise'
import VisualizationExercise from './components/VisualizationExercise'
import AffirmationCard from './components/AffirmationCard'
import InstallPrompt from './components/InstallPrompt'
import './App.css'

export default function App() {
  const [exercise, setExercise] = useState(null)
  const [affirmations, setAffirmations] = useState([])
  const [view, setView] = useState('home') // home | exercise | affirmations
  const [affirmIdx, setAffirmIdx] = useState(0)
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    setExercise(getRandomExercise())
    setAffirmations(getRandomAffirmations(5))

    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }
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
    if (exercise.type === 'breathing') return <BreathingExercise {...props} />
    if (exercise.type === 'grounding') return <GroundingExercise {...props} />
    if (exercise.type === 'scan') return <BodyScanExercise {...props} />
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
    <div className="home">
      <div className="home-inner">
        <header className="home-header">
          <div className="logo">🌸</div>
          <h1>Calm Space</h1>
          <p className="subtitle">You are safe. Let's take a moment together.</p>
        </header>

        {exercise && (
          <div className="exercise-card">
            <div className="exercise-emoji">{exercise.emoji}</div>
            <div className="exercise-tag">Today's exercise</div>
            <h2 className="exercise-name">{exercise.name}</h2>
            <p className="exercise-desc">{exercise.tagline}</p>
            <button className="btn-primary" onClick={() => setView('exercise')}>
              Begin
            </button>
            <button className="btn-ghost" onClick={refreshExercise}>
              Try a different one →
            </button>
          </div>
        )}

        <div className="affirmation-peek" onClick={() => setView('affirmations')}>
          <span className="peek-label">✦ Affirmation</span>
          <p className="peek-text">"{affirmations[0]}"</p>
          <span className="peek-hint">Tap for more</span>
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
