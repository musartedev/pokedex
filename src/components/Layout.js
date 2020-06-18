import React from 'react';
import { Menu, Container, Image, Message, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearError } from '../actions/index';
import pokedexLogo from '../images/pokemon.svg';

class Layout extends React.Component {
  render() {
    const { loading, errorMsg, clearError } = this.props;
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
        <Container style={{ marginTop: '7em', heigth: '100%' }}>
          {errorMsg && (
            <Message
              onDismiss={() => clearError()}
              error
              content={errorMsg}
              style={{ marginBottom: '3em' }}
            />
          )}
          {loading ? <Loader active inline="centered" /> : this.props.children}
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.general
  };
};

const mapDispatchToProps = { clearError };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
