import React from 'react';

import { connect } from 'react-redux';
import { loadPokemons, toggleLoader } from '../actions';

import PokemonList from '../components/PokemonList/index';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      filtered: props.pokemons,
      onlyFavorites: false
    };
  }

  onSearchChange = (e, { value }) => {
    const { pokemons } = this.props;
    let regex = '.*' + value.toLowerCase().replace(/ /g, '.*') + '.*';

    let filtered = pokemons.filter(pokemon => pokemon.name.match(regex));
    this.setState({ filtered, value });
  };

  onSliderChange = (e, { checked: onlyFavorites }) => {
    const { pokemons } = this.props;
    let filtered = onlyFavorites
      ? pokemons.filter(pokemon => pokemon.isFavorite)
      : pokemons;
    this.setState({ onlyFavorites, filtered });
  };

  async componentDidMount() {
    const { pokemons, toggleLoader, loadPokemons } = this.props;
    if (pokemons.length === 0) {
      toggleLoader(true);
      await loadPokemons();
    }

    this.setState((state, props) => ({ filtered: props.pokemons }));
    toggleLoader(false);
  }

  render() {
    const { value, filtered: pokemons, onlyFavorites } = this.state;

    return (
      <Layout>
        <SearchBar
          value={value}
          onlyFavorites={onlyFavorites}
          onSearchChange={this.onSearchChange}
          onSliderChange={this.onSliderChange}
        />
        {pokemons.length > 0 ? (
          <PokemonList pokemons={pokemons} />
        ) : (
          <div style={{ marginTop: '1em' }}>No results.</div>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons.list
  };
};

const mapDispatchToProps = { loadPokemons, toggleLoader };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
