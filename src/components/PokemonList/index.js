import React from 'react';
import { Grid } from 'semantic-ui-react';

import PokemonListItem from './PokemonListItem';
import '../Styles/PokemonList.css';

const PokemonList = props => {
  const { pokemons } = props;
  return (
    <Grid>
      {pokemons.map(pokemon => {
        return <PokemonListItem pokemon={pokemon} key={pokemon.id} />;
      })}
    </Grid>
  );
};

export default PokemonList;
