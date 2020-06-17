import React from 'react';
import { Image, Label, Divider, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../Styles/PokemonList.css';

const PokemonListItem = props => {
  const { pokemon } = props;

  const favColor = 'yellow';
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonListItem">
        <Icon
          name="favorite"
          color={favColor}
          //TODO: Set favorite
          // onClick={() => {
          //   // this.setState({ isFav: !isFav });
          // }} /
        />

        <Link to={`/pokemon/${pokemon.id}`}>
          <Image centered src={pokemon.sprites.front_default} />
          <h2 style={{ textAlign: 'center', color: '#999' }}>{pokemon.name}</h2>
          <Divider />
          {pokemon.types.map(type => (
            <Label color="red" key={type.slot}>
              {type.type.name}
            </Label>
          ))}
        </Link>
      </div>
    </Grid.Column>
  );
};

export default PokemonListItem;
