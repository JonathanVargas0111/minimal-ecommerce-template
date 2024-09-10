import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './pages/Home/Home.jsx'
import './styles/base/reset.css'; // Suponiendo que tengas un archivo de reset global
import './styles/utilities.css'; // Utilidades globales

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
