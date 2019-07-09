import React from 'react';
import { Search, Grid, Dimmer, Loader, Radio } from 'semantic-ui-react';
// import axios from 'axios';

import { connect } from 'react-redux';
import * as actions from '../actions';

import PokemonList from '../components/PokemonList/index';
import Layout from '../components/Layout';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLoading: true,
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
    if (this.props.pokemons.length === 0) {
      await this.props.loadPokemons();
    }

    this.setState((state, props) => ({
      filtered: props.pokemons,
      firstLoading: false
    }));
  }

  render() {
    const {
      value,
      firstLoading,
      filtered: pokemons,
      onlyFavorites
    } = this.state;

    return (
      <Layout>
        <Grid>
          <Dimmer active={firstLoading}>
            <Loader />
          </Dimmer>
          <Grid.Column widescreen={8} mobile={8} largeScreen={8}>
            <Search
              aligned="right"
              onSearchChange={this.onSearchChange}
              input={{ fluid: true }}
              showNoResults={false}
              placeholder="Type for search..."
              value={value}
            />
          </Grid.Column>
          <Grid.Column
            widescreen={8}
            mobile={8}
            largeScreen={8}
            verticalAlign="middle"
          >
            <Radio
              slider
              type="checkbox"
              checked={onlyFavorites}
              onChange={this.onSliderChange}
            />
            <span style={{ marginLeft: '1em' }}>Show only Favorites</span>
          </Grid.Column>
        </Grid>
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

// const mapDispatchToProps = { loadPokemons };

export default connect(
  mapStateToProps,
  actions
)(Home);
