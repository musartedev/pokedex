import { SET_POKEMONS, ADD_POKEMON, CURRENT_POKEMON } from '../actions/types';

import axios from '../api/AxiosConfig';
import { getPokemons } from '../api/pokeapi';

export const setPokemons = payload => ({
  type: SET_POKEMONS,
  payload
});

export const addPokemon = payload => ({
  type: ADD_POKEMON,
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
    // manageErrorResponse()
  }
};
