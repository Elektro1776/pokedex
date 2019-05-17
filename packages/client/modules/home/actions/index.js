/* eslint-disable import/prefer-default-export*/
import axios from 'axios';

export const fetchPokemon = () => {
  return axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
};

export const getAllPokemon = () => {
  return dispatch => {
    return fetchPokemon()
      .then(({ data }) => {
        console.log('DATA::', data);
        dispatch(pokemonRecieved(data.pokemon));
      })
      .catch(err => {
        console.log('ERRR::', err);
      });
  };
};

const pokemonRecieved = pokemon => ({
  type: 'POKEMON_RECIEVED',
  pokemon
});

export const selectFilters = filters => ({
  type: 'FILTERS_SELECTED',
  filters
});
export const resetFilters = () => ({
  type: 'RESET_FILTERS'
});
