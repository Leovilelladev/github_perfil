import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import './global.css';

//a partir da exportacao consigo dar um outro nome para a constante so utilizando "as [nome constante]"EX import { PI as numeroPI}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
