import { useContext } from 'react'
import PokemonCard from './PokemonCard'
import ThemeContext from './ThemeContext'

export default function PokemonList(props) {
  const items = props.items.slice(0, props.limit)
  const theme = useContext(ThemeContext)

  return (
    <div className="pokemon-container">
      <ul className="pokemon-list">
        {items.map(item => (
          <PokemonCard themes={theme} key={item.data.name} item={item.data} />
        ))}
      </ul>
      <button className="load-content" onClick={props.load}>
        Show more
      </button>
    </div>
  )
}
