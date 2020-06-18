import { SET_POKEMONS, UPDATE_POKEMONS } from '../actions/types';

const initialState = {
  list: []
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, list: action.payload };
    case UPDATE_POKEMONS: {
      return { ...state, list: action.payload };
    }
    default:
      return state;
  }
};

export default pokemonReducer;
