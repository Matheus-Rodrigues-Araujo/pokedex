export default function Sidebar(props) {
  return (
    <ul className="sidebar-list" style={props.sidebarActive}>
      {props.routes.map(route => (
        <li className="sidebar-list-item" key={props.routes.indexOf(route)}>
          <a href={route.path}> {route.page} </a>
        </li>
      ))}
    </ul>
  )
}
