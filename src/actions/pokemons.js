import { SET_POKEMONS, UPDATE_POKEMONS, CURRENT_POKEMON } from '../actions/types';

import axios from '../api/AxiosConfig';
import { getPokemons } from '../api/pokeapi';

import { toggleLoader, setError } from './general';

export const setPokemons = payload => ({
  type: SET_POKEMONS,
  payload
});

export const updatePokemons = payload => ({
  type: UPDATE_POKEMONS,
  payload
});

export const setCurrentPokemon = payload => ({
  type: CURRENT_POKEMON,
  payload
});

export const loadPokemons = limit => async dispatch => {
  try {
    const result = await getPokemons(limit); // Get pokemons list

    if (result.data && result.data.results) {
      const pokemonsList = await Promise.all(
        result.data.results.map(async pokemon => {
          const pokemonDetail = await axios.get(pokemon.url); // Get pokemon detail
          return pokemonDetail.data;
        })
      );
      dispatch(setPokemons(pokemonsList));
    }
  } catch (error) {
    dispatch(toggleLoader(false));
    dispatch(setError(`Oops! Something went wrong.`));
  }
};
