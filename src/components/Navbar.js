import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'

const routes = [
  {
    page: 'Home',
    path: '/'
  },
  {
    page: 'About',
    path: '/about'
  },
  {
    page: 'Contact',
    path: '/contact'
  }
]

export default function Navbar() {
  const [toggleClicked, setToggle] = useState(false)

  useEffect(() => {
    console.log('I re-rendered!')
  })

  return (
    <header>
      <nav className="navbar">
        {/* Logo*/}
        <a href="#!" className="logo">
          BMW
        </a>
        {/* Navbar-list*/}
        <ul className="navbar-list">
          {/* Navbar-list-item */}
          {routes.map(route => (
            <li className="navbar-list-item" key={routes.indexOf(route)}>
              <a href={route.path}>{route.page}</a>
            </li>
          ))}
        </ul>

        <div
          /*
            toggleClicked === true:
              classe 'toggle active' é ativada
            toggleClicked === false
              classe só fica com 'toggle'
           */

          className={toggleClicked ? 'toggle active' : 'toggle '}
          onClick={() => {
            // Alternar o valor de toggleClicked a cada clique
            toggleClicked ? setToggle(false) : setToggle(true)
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <Sidebar
        routes={routes}
        sidebarActive={
          /*
            Se toggleClicked receber true,
            então a sidebar-list vai receber um display flex
            e será renderizada na tela
          */
          toggleClicked ? { display: 'flex' } : { display: 'none' }
        }
      />
      {() => {}}
    </header>
  )
}
