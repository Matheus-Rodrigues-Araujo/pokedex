/* eslint-disable jsx-a11y/alt-text */
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import LoadingAnimation from './LoadingAnimation'
import axios from 'axios'
import ThemeContext from './ThemeContext'

export function PokemonPage() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(id)
  const theme = useContext(ThemeContext)
  const [show, setShow] = useState(false)

  useEffect(() => {
    (async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      const abilitiesList = []
      const statsList = []
      const typesList = []

      // Array with all the pokemon abilities
      res.data.abilities.forEach(a =>
        abilitiesList.push(
          a.ability.name[0].toUpperCase() + a.ability.name.slice(1)
        )
      )

      // Array with all the pokemon stats
      res.data.stats.forEach(s =>
        statsList.push({
          base: s['base_stat'],
          effort: s['effort'],
          stat: s['stat']['name']
        })
      )

      // Array with all the pokemon types
      res.data.types.forEach(type =>
        typesList.push(
          type['type'].name[0].toUpperCase() + type['type'].name.slice(1)
        )
      )

      setPokemon({
        id: res.data.id,
        name: res.data.name[0].toUpperCase() + res.data.name.slice(1),
        weight: res.data.weight,
        // abilities: res.data.abilities[0].ability.name,
        abilities: abilitiesList.map(a => <li>{a}</li>),
        stats: statsList,
        height: res.data.height,
        types: typesList.map(a => (
          <li
            style={{ backgroundColor: theme[a.toLowerCase()], color: 'white' }}
          >
            {a}
          </li>
        )),
        sprites: res.data['sprites'].other['official-artwork']['front_default']
      })

      setShow(true)
    })()
  }, [id, theme])

  function CharacterDescription() {
    return (
      <div className="data-container">
        <h1>
          {pokemon.name} N°{pokemon.id}
        </h1>

        <div className="profile">
          <div className="bio">
            <img
              src={pokemon.sprites}
              alt={`Official artwork of ${pokemon.name}`}
            />
          </div>

          <div className="about">
            <div className="details">
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
            </div>
            <div className="types">
              <h3>Type</h3>
              {pokemon.types}
            </div>

            <div className="abilities">
              <h3>Abilities</h3>
              {pokemon.abilities}
            </div>
          </div>

        </div>
      </div>
    )
  }

  return show && pokemon.sprites ? (
    <CharacterDescription key={pokemon.name} />
  ) : (
    <LoadingAnimation />
  )
}
