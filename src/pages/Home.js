import React from "react";
import { Search, Grid, Dimmer, Loader } from "semantic-ui-react";
import axios from "axios";

import { connect } from "react-redux";
import { addPokemon } from "../actions";

import PokemonList from "../components/PokemonList/index";
import Layout from "../components/Layout";

class Home extends React.Component {
  state = {
    firstLoading: true,
    isLoading: false,
    value: "",
    results: []
  };

  onSearchChange = (e, { value }) => {
    this.setState({ value });
  };

  async componentDidMount() {
    try {
      const { addPokemon } = this.props;
      const result = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );

      const pokemonsList = result.data.results;

      if (pokemonsList) {
        await pokemonsList.map(async (item, key) => {
          const pokemonDetail = await axios.get(item.url);
          addPokemon(pokemonDetail.data);
        });

        this.setState({ firstLoading: false });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { isLoading, value, firstLoading } = this.state;
    const { pokemons } = this.props;
    return (
      <Layout>
        <Grid>
          <Dimmer active={firstLoading}>
            <Loader />
          </Dimmer>
          <Grid.Column widescreen={8} mobile={16} largeScreen={8}>
            <Search
              aligned="right"
              loading={isLoading}
              onSearchChange={this.onSearchChange}
              input={{ fluid: true }}
              placeholder="Type for search..."
              value={value}
            />
          </Grid.Column>
        </Grid>
        <PokemonList pokemons={pokemons} />
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
  addPokemon: pokemon => {
    dispatch(addPokemon(pokemon));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
