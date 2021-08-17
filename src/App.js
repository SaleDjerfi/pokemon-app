import React, { useState, useEffect} from 'react'
import PokemonList from './Components/PokemonList';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setcurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setnextPageUrl] = useState()
  const [prevPageUrl, setprevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
    setLoading(false)
    setnextPageUrl(res.data.next)
    setprevPageUrl(res.data.previous)
    setPokemon(res.data.results.map(p => p.name))
  })
  }, [currentPageUrl])

  if (loading) return "Loading"

  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
