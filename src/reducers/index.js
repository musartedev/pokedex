import { combineReducers } from "redux";
import userReducer from "./user";
import pokemonsReducer from "./pokemons";

const todoApp = combineReducers({
  user: userReducer,
  pokemons: pokemonsReducer
});

export default todoApp;
