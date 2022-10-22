export default function NewSideBar({routes, toggle}){
  return (
    <ul className="newsidebar" style={
      {display: toggle}
      }>
      {routes.map(route => (
          <li key={route.name}>
            <a href={route.path}> {route.name} </a>
          </li>
        ))
      }
    </ul>
  )
}