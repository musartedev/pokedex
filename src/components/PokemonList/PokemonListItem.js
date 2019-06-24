import React from 'react';
import { Image, Label, Divider, Grid, Icon } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';

import '../Styles/PokemonList.css';

export default class PokemonListItem extends React.Component {
  state = {
    isFav: false
  };

  render() {
    const { pokemon } = this.props;

    const { isFav, redirect } = this.state;
    const favColor = isFav ? 'yellow' : 'grey';
    return (
      <Grid.Column mobile={16} tablet={8} computer={4} key={pokemon.id}>
        <div className="PokemonListItem">
          <Icon
            name="favorite"
            color={favColor}
            onClick={() => {
              this.setState({ isFav: !isFav });
            }}
          />

          <Link to={`/pokemon/${pokemon.id}`}>
            <Image centered src={pokemon.sprites.front_default} />
            <h2 style={{ textAlign: 'center', color: '#999' }}>
              {pokemon.name}
            </h2>
            <Divider />
            {pokemon.types.map(type => (
              <Label color="red">{type.type.name}</Label>
            ))}
          </Link>
        </div>
        {redirect && <Redirect exact to="/pokemon" />}
      </Grid.Column>
    );
  }
}
