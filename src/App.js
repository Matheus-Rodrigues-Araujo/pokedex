import React, { useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'

import HomePage from './components/HomePage'
import Header from './components/Header'
import NavigationList from './components/NavigationList'
import Footer from './components/Footer'


import RenderPokemons from './components/RenderPokemons'

import axios from 'axios'

import { Routes, Route } from 'react-router-dom'

import { PokemonPage } from './components/PokemonPage'

import ThemeContext from './components/ThemeContext'

const pokemonThemes = {
  fire: 'orange',

  water: 'cornflowerblue',

  grass: '#2fff9a',

  normal: 'rgb(239 239 72)',

  flying: 'rgba(0, 223, 255,1)',

  bug: 'rgb(0 128 58 / 79%)',

  poison: '#c016c0de',

  electric: 'rgb(217, 231, 15)',

  ground: 'rgb(182, 84, 84)',

  psychic: 'rgb(197, 10, 50)',

  ghost: 'rgb(26, 24, 24)',

  dark: 'black',

  rock: 'brown',

  fairy: 'rgb(255, 63, 159)',

  dragon: 'darkcyan',

  ice: 'aqua',

  fighting: 'darkseagreen',

  steel: 'rgba(223, 217, 217, 0.699)'
}



function App() {
  const [items, setItems] = useState([])
  const [limit, setLimit] = useState(12)
  const [loading, setLoading] = useState(false)

  const links = [
    {
      path: '/#',
      name: 'Home'
    },
    {
      path: '/pokemons',
      name: 'Pokemons'
    },
    {
      path: '/about',
      name: 'About'
    }
  ]

  const getPokemon = async () => {
    setLoading(false)
    var endpoints = []
    for (let i = 1; i <= 800; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    try {
      let res = await axios.all(endpoints.map(endpoint => axios.get(endpoint)))
      setLimit(12)
      setItems(res)
      setLoading(true)
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        // console.log(error.response.headers)
      }
      //  else if (error.request) {
      //   console.log(error.request + "\nThe request wasn't left")
      // }
    }
  }

  // Calls the getPokemon function
  useEffect(() => {
    getPokemon()
  }, [])

  const pokemonFilter = e => {
    setLoading(false)
    // console.log(e)
    var filteredPokemons = []
    // Update current value when onChange is triggered
    if (e.length >= 1) {
      for (var i in items) {
        // filters all the pokemons that had the input value letters
        if (items[i].data.name.includes(e)) {
          filteredPokemons.push(items[i])
        }
      }
      // Updates items with an array of filtered pokemon(s)
      // console.log(filteredPokemons)
      setItems(filteredPokemons)
      // Updadtes the state of the loading
      setLoading(true)
    } else {
      // Calls the function to reload all the data
      getPokemon()
    }
  }

  // Home Component
  function PokedexPage() {
    return (
      <div className="home">
        <RenderPokemons
          loading={loading}
          items={items}
          limit={limit}
          load={() => setLimit(limit + 3)}
        />
      </div>
    )
  }

  return (
    <HashRouter>
      <ThemeContext.Provider value={pokemonThemes}>
        <div className="main">
          <NavigationList routes={links} />
          
          <Routes>
            <Route path='/' element={<HomePage />}> </Route>
            <Route path="/pokemons" element={<>
              <Header handleInput={pokemonFilter} />
              <PokedexPage />
             </>} />
            <Route path="/pokemons/:id" element={<PokemonPage />}></Route>
            <Route path="*" element={<h1>Page doesn't exist yet, comeback later!</h1>} />
          </Routes>

          <Footer />
        </div>
      </ThemeContext.Provider>
    </HashRouter>
  )
}

export default App
