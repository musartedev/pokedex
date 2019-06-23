import React from "react";
import { Button, Checkbox, Form, Image } from "semantic-ui-react";

import "./Styles/Login.css";
import pokemonLogo from "../images/pokemon.svg";

const FormExampleForm = () => (
  <Form className="FormExampleForm">
    <Form.Field>
      <label>Email</label>
      <input placeholder="Email" type="email" required />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder="Password" type="password" required />
    </Form.Field>
    <Form.Field>
      <Checkbox label="Remenber me" />
    </Form.Field>
    <Button type="submit">Send</Button>
  </Form>
);

export default class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }}
          className="Login__form-container"
        >
          <Image className="Login__logo" size="small" src={pokemonLogo} />
          <p> Enter for more</p>
          {/* <h2>Login</h2> */}
          <FormExampleForm />
        </div>
      </div>
    );
  }
}
