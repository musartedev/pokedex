import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Layout from '../components/Layout';
import PokemonDetail from '../components/PokemonDetail';

class PokemonPage extends React.Component {
  objIsEmpty = obj => {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  };

  render() {
    const { pokemons } = this.props;
    const { id } = this.props.match.params;

    if (this.objIsEmpty(pokemons)) return <Redirect exact to="/" />;

    return (
      <Layout>
        <PokemonDetail pokemon={pokemons[id]} />
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
