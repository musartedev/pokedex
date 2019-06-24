import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import pokedexLogo from '../images/pokemon.svg';

export default function Layout(props) {
  return (
    <React.Fragment>
      <Menu fixed="top" className="Layout__menu">
        <Container>
          <Menu.Item as={Link} to="/">
            <Image
              size="tiny"
              src={pokedexLogo}
              style={{ marginRight: '1.5em' }}
            />
          </Menu.Item>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item position="right" as={Link} to="/login">
            Sign Out
          </Menu.Item>
        </Container>
      </Menu>
      <Container style={{ marginTop: '7em' }}>{props.children}</Container>
    </React.Fragment>
  );
}
