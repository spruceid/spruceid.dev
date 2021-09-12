import React, { useEffect, useState } from 'react';

const Pokesearch = ({setPokemon, pokemon}) => {
  const [localPokemon, setLocalPokemon] = useState(pokemon)
  return (
    <div>
      <input style={{width: '100px',height:'20x', fontSize:'25px'}} value={localPokemon} onChange={e=>setLocalPokemon(e.target.value)} />&nbsp;
      <button style={{fontSize:'25px'}} onClick={e=>setPokemon(localPokemon)}>Search</button>
    </div>
  );
}

const Pokeresult = ({pokedata}) => {
  console.log(`props: ${pokedata}`)
  return (
    <div style={{border:'2px dashed black', display: 'inline-block', width: '200px', marginTop: '10px'}}>
      <img src={pokedata.sprite} style={{float:'left'}} />
      <b>Type:</b> {pokedata.type}<br />
      <b>Weight:</b> {pokedata.weight}<br />
      </div>
  );
}

const Pokedex = () => {
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokedata, setPokedata] = useState({});

  useEffect(
    () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => res.json())
      .then(
        (res) => {
          setPokedata({
            weight: res.weight,
            sprite: res.sprites.front_default,
            type: res.types[0].type.name
          });
        }
      )
    },
    [pokemon]
  );
  return (
    <div style={{margin: '20px'}}>
      <Pokesearch setPokemon={setPokemon} pokemon={pokemon} />
      <Pokeresult pokedata={pokedata} />
    </div>
  );
}

export default Pokedex;