import React from 'react';
import { Icon } from 'semantic-ui-react';

const FavoriteStar = ({ isFavorite, toggleFavorite }) => {
  const favColor = 'yellow';
  const notFavColor = 'grey';

  return (
    <Icon
      name='favorite'
      color={isFavorite ? favColor : notFavColor}
      // TODO: Persist Set favorite
      onClick={toggleFavorite}
    //   onClick={() => {
    //     const updatedPokemon = {
    //       ...pokemon,
    //       isFavorite: !pokemon.isFavorite,
    //     };
    //     updatePokemon(pokemon.id, updatedPokemon);
    //   }}
    />
  );
};

export default FavoriteStar;
