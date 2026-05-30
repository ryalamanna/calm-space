export default function InstallPrompt({ onInstall, onDismiss }) {
  return (
    <div className="install-bar fade-in">
      <p className="install-text">
        <strong>Add to Home Screen</strong><br />
        Keep Calm Space one tap away.
      </p>
      <button className="install-btn" onClick={onInstall}>Install</button>
      <button className="install-dismiss" onClick={onDismiss} aria-label="Dismiss">✕</button>
    </div>
  )
}
