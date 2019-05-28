import React from 'react';

const PokeDetail = ({pokemon}) => {
  if (pokemon === null) {
    return (
      <p>choose your pokemon pkdetail</p>
    )
  }
  return (
    <div>
      <h3>{pokemon.name}</h3>
    </div>
  )
}

export default PokeDetail;
