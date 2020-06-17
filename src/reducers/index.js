import { combineReducers } from 'redux';
import userReducer from './user';
import pokemonsReducer from './pokemons';
import generalReducer from './general';

const mainReducer = combineReducers({
  user: userReducer,
  pokemons: pokemonsReducer,
  general: generalReducer
});

export default mainReducer;
