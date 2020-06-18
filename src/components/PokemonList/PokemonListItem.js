import React from 'react';
import { Image, Label, Divider, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import FavoriteStart from '../common/FavoriteStar';

import '../Styles/PokemonList.css';

const PokemonListItem = ({ pokemon, updatePokemon }) => {
  const toggleFavorite = () => {
    const updatedPokemon = {
      ...pokemon,
      isFavorite: !pokemon.isFavorite,
    };
    updatePokemon(pokemon.id, updatedPokemon);
  };
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonListItem'>
        <FavoriteStart
          isFavorite={pokemon.isFavorite}
          toggleFavorite={toggleFavorite}
        />
        <Link to={`/pokemon/${pokemon.id}`}>
          <Image centered src={pokemon.sprites.front_default} />
          <h2 style={{ textAlign: 'center', color: '#999' }}>{pokemon.name}</h2>
          <Divider />
          {pokemon.types.map((type) => (
            <Label color='red' key={type.slot}>
              {type.type.name}
            </Label>
          ))}
        </Link>
      </div>
    </Grid.Column>
  );
};

export default PokemonListItem;
