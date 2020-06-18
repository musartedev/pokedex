import React from 'react';
import { Grid } from 'semantic-ui-react';

import PokemonListItem from './PokemonListItem';
import '../Styles/PokemonList.css';

const PokemonList = ({ pokemons, updatePokemon }) => {
  return (
    <Grid>
      {pokemons.map((pokemon) => {
        return (
          <PokemonListItem
            updatePokemon={updatePokemon}
            pokemon={pokemon}
            key={pokemon.id}
          />
        );
      })}
    </Grid>
  );
};

export default PokemonList;
