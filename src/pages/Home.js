import React from 'react';
import { Search, Grid, Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';

import { connect } from 'react-redux';
import { setPokemons } from '../actions';

import PokemonList from '../components/PokemonList/index';
import Layout from '../components/Layout';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLoading: true,
      value: '',
      filtered: props.pokemons
    };
  }

  onSearchChange = (e, { value }) => {
    const { pokemons } = this.props;
    let regex = '.*' + value.toLowerCase().replace(/ /g, '.*') + '.*';

    let filtered = pokemons.filter(pokemon => pokemon.name.match(regex));
    this.setState({ filtered, value });
  };

  async componentDidMount() {
    const { setPokemons, pokemons } = this.props;
    let pokemonList;
    try {
      if (pokemons.length === 0) {
        const result = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=50'
        );

        if (result.data && result.data.results) {
          pokemonList = await Promise.all(
            result.data.results.map(async item => {
              const pokemonDetail = await axios.get(item.url);
              return pokemonDetail.data;
            })
          );
          setPokemons(pokemonList);
        }
      } else {
        pokemonList = pokemons;
      }

      this.setState({ firstLoading: false, filtered: pokemonList });
    } catch (err) {}
  }

  render() {
    const { value, firstLoading, filtered: pokemons } = this.state;
    return (
      <Layout>
        <Grid>
          <Dimmer active={firstLoading}>
            <Loader />
          </Dimmer>
          <Grid.Column widescreen={8} mobile={16} largeScreen={8}>
            <Search
              aligned="right"
              onSearchChange={this.onSearchChange}
              input={{ fluid: true }}
              showNoResults={false}
              placeholder="Type for search..."
              value={value}
            />
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

const mapDispatchToProps = dispatch => ({
  setPokemons: pokemon => {
    dispatch(setPokemons(pokemon));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
