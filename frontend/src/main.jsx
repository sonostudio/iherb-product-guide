import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './client-theme.css'
import App from './App.jsx'

// Set data-client on <html> so CSS selectors in client-theme.css apply.
// import.meta.env.VITE_CLIENT works here because this is a JS module processed by Vite.
const clientId = (import.meta.env.VITE_CLIENT || 'dhc').toLowerCase()
document.documentElement.setAttribute('data-client', clientId)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)