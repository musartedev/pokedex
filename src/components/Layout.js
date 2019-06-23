import React from "react";
import { Menu, Container, Image } from "semantic-ui-react";

import "./Styles/Layout.css";
import pokedexLogo from "../images/pokemon.svg";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Menu fixed="top" className="Layout__menu">
        <Container>
          <Menu.Item as="a" header>
            <Image
              size="tiny"
              src={pokedexLogo}
              style={{ marginRight: "1.5em" }}
            />
          </Menu.Item>
          <Menu.Item as="a">My Favorites</Menu.Item>
        </Container>
      </Menu>
      <Container text style={{ marginTop: "7em" }}>
        {props.children}
      </Container>
    </React.Fragment>
  );
}
