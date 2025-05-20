import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopProvider from './Context/ShopContex.jsx'
import { HashRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  
  <HashRouter >
      <ShopProvider>
            <App />
      </ShopProvider>
  </HashRouter>
  ,
)
