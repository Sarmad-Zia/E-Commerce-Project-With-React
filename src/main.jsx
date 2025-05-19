import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopProvider from './Context/ShopContex.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter basename='https://github.com/Sarmad-Zia/E-Commerce-Project-With-React.git' >
      <ShopProvider>
            <App />
      </ShopProvider>
  </BrowserRouter>
  ,
)
