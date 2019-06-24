import React from 'react';
import { Grid } from 'semantic-ui-react';

import PokemonListItem from './PokemonListItem';
import '../Styles/PokemonList.css';

export default class PokemonList extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <Grid>
        {Object.keys(pokemons).map((key, i) => {
          return <PokemonListItem pokemon={pokemons[key]} key={key} />;
        })}
      </Grid>
    );
  }
}
