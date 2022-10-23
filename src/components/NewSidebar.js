import { Link } from "react-router-dom";

export default function NewSideBar({routes, toggle}){
  return (
    <ul className="newsidebar" style={
      {display: toggle}
      }>
      {routes.map(route => (
          <li key={route.name}>
            <Link to={route.path}> {route.name} </Link>
          </li>
        ))
      }
    </ul>
  )
}