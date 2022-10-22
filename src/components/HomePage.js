const HomePage = () => {
  return (
    <div className="home-page">
      <img
        src={process.env.PUBLIC_URL + '/images/pokeball_wallpaper.jpg'}
        alt="Pokemon Wallpaper"
        width="450px"/>
      
      <div className="greeting">
        <h3>Welcome!</h3>
        <p>Click below to check out all your favorite Pokemons!</p>
        <a href="/pokedex">Explore</a>
      </div>

    </div>
  )
}

export default HomePage
