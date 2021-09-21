import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Card } from "reactstrap";

const api = axios.create({
  baseURL: `http://localhost:5000/eventos`,
});

class EventsList extends Component {
  state = {
    events: [],
  };
  constructor() {
    super();
    api.get("/").then((res) => {
      console.log(res.data);
      this.setState({ events: res.data });
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1> Bienvenido a Lista de eventos!</h1>
        </div>

        <div>
          <Link to="/events/crearevento">Crear Evento</Link>
        </div>

        <div>
          <Link to="/events/event">Ver Evento</Link>
        </div>

        <div>
          <Container>
            <Card>
              {this.state.events.map((event) => (
                <table width="60%" align="center" cellPadding="0">
                  <tr key={event.id}>
                    <td rowspan="5">
                      <img
                        height="100%"
                        width="100%"
                        src="http://jorge-zientarski.com/imgs/Events2.jpg"
                      ></img>
                    </td>
                    <td>Nombre: {event.nombre_evento}</td>
                  </tr>
                  <tr>
                    <td>Modalidad: {event.modalidad_evento}</td>
                  </tr>
                  <tr>
                    <td>Fecha: {event.fecha_evento}</td>
                  </tr>
                  <tr>
                    <td>Lugar: {event.lugar_evento}</td>
                  </tr>
                  <tr>
                    <td>Descripcion: {event.descripcion_evento}</td>
                  </tr>
                </table>
              ))}
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}
export default EventsList;
