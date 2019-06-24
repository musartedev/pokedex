import { SET_POKEMONS, ADD_POKEMON, CURRENT_POKEMON } from "../actions/types";

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
