import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { activeClient } from './config/clients.js'

const html = document.documentElement
const { theme: t, fonts: f, darkMode } = activeClient

// ── Inject Google Fonts for this client (if not the default) ──
if (f.googleFontsUrl) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = f.googleFontsUrl
  document.head.prepend(link)
}

// ── Inject theme CSS variables ────────────────────────────────
html.style.setProperty('--brand-950', t[950])
html.style.setProperty('--brand-800', t[800])
html.style.setProperty('--brand-700', t[700])
html.style.setProperty('--brand-600', t[600])
html.style.setProperty('--brand-500', t[500])
html.style.setProperty('--brand-300', t[300])
html.style.setProperty('--brand-200', t[200])
html.style.setProperty('--brand-100', t[100])
html.style.setProperty('--brand-50',  t[50])

// ── Inject font CSS variables ─────────────────────────────────
html.style.setProperty('--font-body',         f.body)
html.style.setProperty('--font-display',      f.display)
html.style.setProperty('--font-logo',         f.logo)
html.style.setProperty('--font-logo-weight',  f.logoWeight)
html.style.setProperty('--font-logo-tracking',f.logoTracking)
html.style.setProperty('--font-hero-weight',  f.heroWeight)
html.style.setProperty('--font-hero-tracking',f.heroTracking)
html.style.setProperty('--font-label-tracking',f.labelTracking)

// ── Dark mode flag ────────────────────────────────────────────
if (darkMode) html.setAttribute('data-dark', 'true')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)