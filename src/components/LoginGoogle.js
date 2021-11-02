import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import fb from "../initializers";
import AxiosClient from "./AxiosClient";
export default class LoginGoogle extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  login() {
    let provider = new fb.auth.GoogleAuthProvider();
    fb.auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    return (
      <div>
        <Button variant="contained" onClick={this.login}>
          Iniciar Sesion con Google
        </Button>
      </div>
    );
  }
}
