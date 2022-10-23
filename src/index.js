import React from 'react'
import ReactDOM from 'react-dom/client'


// CSS Files
import './index.css'
import './styles/HomePage.css'
import './styles/Navbar.css'
import './styles/newsidebar.css'
// import './styles/Sidebar.css'
import './styles/Header.css'
import './styles/NavigationList.css'
import './styles/LoadingAnimation.css'
import './styles/PokemonList.css'
import './styles/Footer.css'
import './styles/SearchOptions.css'
import './styles/PokemonCard.css'
import './styles/BadgeType.css'
import './styles/PokemonPage.css'

// Component(s)
import App from './App'

// React-Router
// import { HashRouter } from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode >
    <BrowserRouter basename='/pokedex' >
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
