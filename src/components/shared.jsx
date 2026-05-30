export function AppHeader({ onClose }) {
  return (
    <header className="app-header">
      <span className="app-logo">Calm Space</span>
      {onClose ? (
        <button className="icon-btn" onClick={onClose} aria-label="Close">✕</button>
      ) : (
        <button className="icon-btn" aria-label="Account">◯</button>
      )}
    </header>
  )
}
