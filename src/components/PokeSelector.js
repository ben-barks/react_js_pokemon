import React, {Component} from 'react'


const PokeSelector = (props) => {
  const options = props.pokemons.map((pokemon, index) => {
    return (<option key={index} value={index}>{pokemon.name}</option>)
  });

  function handleSelectChange(evt) {
    const selectedIndex = evt.target.value;
    props.onPokemonSelected(selectedIndex);
  }

  return (
    <select id="pokemon-selector"
    defaultValue="default"
    onChange={handleSelectChange}
    >
      <option disabled value="default">Choose your pokemon</option>
      {options}
    </select>
  )
}

export default PokeSelector;
