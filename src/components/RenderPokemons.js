import PokemonList from './PokemonList'
import LoadingAnimation from './LoadingAnimation'

export default function RenderPokemons({ loading, items, limit, load }) {
  return loading && items.length >= 1 ? (
    <PokemonList items={items} limit={limit} load={load} />
  ) : (
    <LoadingAnimation />
  )
}
