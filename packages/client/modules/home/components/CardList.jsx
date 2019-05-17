import React from 'react';
import { Card } from '../../common/components';
const CardList = (props) => {
  return <div className="cardlist">{props.pokemonList.map((pokemon, idx) => <Card pokemon={pokemon} idx={idx} key={idx}/>)}</div>
}

export default CardList;
