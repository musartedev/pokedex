import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Layout from '../components/Layout';
import PokemonDetail from '../components/PokemonDetail';

class PokemonPage extends React.Component {
  render() {
    const { pokemons } = this.props;
    const { id } = this.props.match.params;

    const pokemon = pokemons.find(pokemon => {
      return pokemon.id === parseInt(id);
    });

    if (pokemons.length <= 0 || !pokemon) return <Redirect exact to="/" />;

    return (
      <Layout>
        <PokemonDetail pokemon={pokemon} />
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    pokemons: state.pokemons.list
  };
};

export default connect(
  mapStateToProps,
  null
)(PokemonPage);
