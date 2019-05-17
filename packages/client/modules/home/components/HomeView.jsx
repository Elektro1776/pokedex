import React from 'react';
import CardList from './CardList';

export default (props) => {
  return (
    <CardList pokemonList={props.pokemon} />
  )
}
