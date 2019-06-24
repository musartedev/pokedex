import React from 'react';
import { Grid, Image, List, Icon, Dropdown } from 'semantic-ui-react';

import './Styles/PokemonDetail.css';

export default class PokemonDetail extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <Grid textAlign="center">
          <Grid.Row className="PokemonDetail__name-container">
            <h1>{pokemon.name}</h1>
            <span>
              <Icon name="favorite" color="grey" />
            </span>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={6} className="PokemonDetail__card-info">
              <Image
                src={pokemon.sprites.front_default}
                size="small"
                centered
              />
              <List animated verticalAlign="middle" horizontal>
                <List.Item>
                  <List.Content>
                    <List.Header># ID</List.Header>
                    <List.Description>{pokemon.id}</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Height</List.Header>
                    <List.Description>{pokemon.height}</List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Weight</List.Header>
                    <List.Description>{pokemon.weight}</List.Description>
                  </List.Content>
                </List.Item>
              </List>
              <List>
                <List.Item>
                  <List.Content>
                    <List.Header>Type(s)</List.Header>
                    <List.Description>
                      <List>
                        {pokemon.types.map((elem, key) => {
                          return (
                            <List.Item key={key}>{elem.type.name}</List.Item>
                          );
                        })}
                      </List>
                    </List.Description>
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header>Move(s)</List.Header>
                    <List.Description>
                      <Dropdown
                        placeholder="Explore moves"
                        style={{ marginTop: '1em' }}
                        selection
                        options={pokemon.moves.map(elem => {
                          return {
                            key: elem.move.name,
                            text: elem.move.name,
                            value: elem.move.name
                          };
                        })}
                      />
                    </List.Description>
                  </List.Content>
                </List.Item>
                {/* <List.Item>
                  <List.Content>
                    <List.Header>Evolutions</List.Header>
                    <List.Description>
                      <List>
                        <List.Item>Tipo 1</List.Item>
                        <List.Item>Tipo 2</List.Item>
                        <List.Item>Tipo 3</List.Item>
                      </List>
                    </List.Description>
                  </List.Content>
                </List.Item> */}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
