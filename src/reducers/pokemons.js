import { SET_POKEMONS, ADD_POKEMON } from '../actions/types';

const initialState = {
  list: []
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, list: action.payload };
    case ADD_POKEMON: {
      return { ...state, list: [...state.list, action.payload] };
    }
    default:
      return state;
  }
};

export default pokemonReducer;
