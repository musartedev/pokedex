import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { loadPokemons, toggleLoader, setPokemons } from '../actions';

import PokemonList from '../components/PokemonList/index';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';

const Home = ({ pokemons, toggleLoader, loadPokemons, setPokemons }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      if (pokemons.length === 0) {
        toggleLoader(true);
        await loadPokemons();
      }

      toggleLoader(false);
    };
    fetchPokemons();
  }, []);

  const onSearchChange = (e, { value }) => {
    setSearchTerm(value);
  };

  const onSliderChange = (e, { checked }) => {
    setShowOnlyFavorites(checked);
  };

  const handleUpdatePokemon = (pokemonId, updatedPokemon) => {
    const pokemonIndex = pokemons.findIndex(
      (pokemon) => pokemon.id === pokemonId
    );
    const updatedPokemons = [...pokemons];

    updatedPokemons[pokemonIndex] = updatedPokemon;
    setPokemons(updatedPokemons);
  };

  const renderPokemonsList = () => {
    if (pokemons.length) {
      const regex = '.*' + searchTerm.toLowerCase().replace(/ /g, '.*') + '.*';

      // Filter by name or type
      let filtered = pokemons.filter(
        (pokemon) =>
          pokemon.name.match(regex) || // Match by name
          // Match by type
          pokemon.types.find((elem) => {
            return elem.type.name.match(regex);
          })
      );

      if (showOnlyFavorites) {
        filtered = filtered.filter((pokemon) => pokemon.isFavorite);
      }

      if (filtered.length) {
        return (
          <PokemonList
            pokemons={filtered}
            updatePokemon={handleUpdatePokemon}
          />
        );
      }
    }
    return <div style={{ marginTop: '1em' }}>No results.</div>;
  };

  return (
    <Layout>
      <SearchBar
        value={searchTerm}
        onlyFavorites={showOnlyFavorites}
        onSearchChange={onSearchChange}
        onSliderChange={onSliderChange}
      />
      {renderPokemonsList()}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons.list,
  };
};

const mapDispatchToProps = { loadPokemons, toggleLoader, setPokemons };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
