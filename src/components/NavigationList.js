import { useEffect, useState } from "react"
import NewSideBar from "./NewSidebar"

export default function NavigationList({routes}) {
  const [width, setWidth] = useState(window.innerWidth)
  const [toggle, setToggle] = useState(false)
  
  useEffect(()=>{
    window.addEventListener('resize', ()=> setWidth(window.innerWidth))
    
    return (
      () => {window.removeEventListener('resize', setWidth(window.innerWidth))}
    )
  }, [width])
  
  return (
    <nav className="navigation">
    
    <a className="logo" href="/">Pokedex App</a>
  
    <div className="toggle-icon" onClick={() => toggle ? setToggle(false) : setToggle(true)}>
      <div></div>
      <div></div>
      <div></div>
    </div>

    {
      width >=680 ?
      <ul>
        {routes.map(route => (
          <li key={route.name}>
            <a href={route.path}> {route.name} </a>
          </li>
        ))}
      </ul>
      :
      <NewSideBar toggle={toggle ? 'flex' : 'none'} 
      routes={routes}/>
    }
    </nav>
  )
}
