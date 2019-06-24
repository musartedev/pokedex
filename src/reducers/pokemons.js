import { SET_POKEMONS, ADD_POKEMON, CURRENT_POKEMON } from '../actions/types';

const initialState = {
  list: {},
  currentPokemon: {}
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, list: action.payload };
    case ADD_POKEMON:
      return {
        ...state,
        list: {
          ...state.list,
          [action.payload.id]: action.payload
        }
      };
    case CURRENT_POKEMON:
      return { ...state, currentPokemon: action.payload };
    default:
      return state;
  }
};

export default pokemonReducer;
