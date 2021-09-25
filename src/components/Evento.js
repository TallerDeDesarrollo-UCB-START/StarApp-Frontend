import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "reactstrap";

const api = axios.create({
  baseURL: `http://localhost:5000/eventos/`,
  //baseURL: `https://5fc44b7b36bc7900163436cf.mockapi.io/api/Message/Eventos`
});

class Evento extends Component {
  state = {
    event: {},
  };
  constructor() {
    super();
    this.getListaParticipantes();
  }

  getListaParticipantes = async (event) => {
    try {
      let data = await api.get("/:{id}").then(({ data }) => data);
      this.setState({ event: data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return <div>Evento 1</div>;
  }
}
export default Evento;
