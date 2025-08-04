import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "../public/nav_bar.css"
import "../public/home.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
