
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeComponent from './components/themeComponent.jsx'
import { ContextApi } from './context/ContextApi.jsx'
createRoot(document.getElementById('root')).render(
  <ContextApi>

  <ThemeComponent>
    <App />
    </ThemeComponent>
  </ContextApi>

)
