export default function SearchOptions(props) {
  return (
    <div className="search-options">
      <button>Escolher aleatória</button>
      <button className="show" onClick={props.load}>
        Mostrar mais
      </button>
    </div>
  )
}
