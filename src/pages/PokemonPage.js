import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setPokemons } from '../actions';

import Layout from '../components/Layout';
import PokemonDetail from '../components/PokemonDetail';

class PokemonPage extends React.Component {
  handleUpdatePokemon = (pokemonId, updatedPokemon) => {
    const { pokemons } = this.props;
    const pokemonIndex = pokemons.findIndex(
      (pokemon) => pokemon.id === pokemonId
    );
    const updatedPokemons = [...pokemons];

    updatedPokemons[pokemonIndex] = updatedPokemon;
    setPokemons(updatedPokemons);
  };

  render() {
    const { pokemons } = this.props;
    const { id } = this.props.match.params;

    const pokemon = pokemons.find((pokemon) => {
      return pokemon.id === parseInt(id);
    });

    if (pokemons.length === 0 || !pokemon) return <Redirect exact to='/' />;

    return (
      <Layout>
        <PokemonDetail
          pokemon={pokemon}
          updatePokemon={this.handleUpdatePokemon}
        />
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons.list,
  };
};

export default connect(mapStateToProps, { setPokemons })(PokemonPage);
