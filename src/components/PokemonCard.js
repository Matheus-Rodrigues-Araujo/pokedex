import BadgeType from './BadgeType'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PokemonCard(props) {
  let item = props.item
  const [hover, setHover] = useState(false)

  const styleCard = item => {
    if (!hover) {
      if (item.types.length > 1) {
        return {
          backgroundImage: `linear-gradient(69deg,
            ${props.themes[item.types[0].type.name]},
            ${props.themes[item.types[1].type.name]})`
        }
      }
      return { backgroundColor: props.themes[item.types[0].type.name] }
    } else {
      return { backgroundColor: 'cyan' }
    }
  }

  return (
    <li
      title={item.name}
      className="pokemon-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={styleCard(item)}
    >
      <h3>
        {item.name.slice(0, 1).toUpperCase() +
          item.name.slice(1, item.name.length)}
      </h3>

      <Link
        to={`/pokemons/${item.id}`}
        // target={'_blank'}
        title={`See more of ${
          item.name.slice(0, 1).toUpperCase() +
          item.name.slice(1, item.name.length)
        }`}
      >
        <img
          alt={item.name}
          src={item.sprites.other['official-artwork'].front_default}
        />
      </Link>

      <BadgeType item={item} />
    </li>
  )
}
