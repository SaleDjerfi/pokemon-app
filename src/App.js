import React, { useState } from 'react'
import PokemonList from './Components/PokemonList';

function App() {
  const [pokemon, setPokemon] = useState(["charmander", "bulbasaur"])

  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;
