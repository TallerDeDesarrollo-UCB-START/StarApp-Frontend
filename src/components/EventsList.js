import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "reactstrap";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Evento from "./Evento";

const api = axios.create({
  baseURL: `http://localhost:5000/eventos`,
});

const urlParticipacion = "http://localhost:5000/eventos/participate_evento/";

class EventsList extends Component {
  state = {
    events: [],
  };

  oject = {};

  constructor() {
    super();
    this.getEvents();
  }

  getEvents = async () => {
    try {
      let data = await api.get("/").then(({ data }) => data);
      this.setState({ events: data });
    } catch (err) {
      console.log(err);
    }
  };

  mensajeConfirmacionParticipacion(event) {
    window.alert(
      `Tu participación en el evento ${event.nombre_evento} fue registrada, te esperamos!`
    );
  }
  postParticipacion = async (event) => {
    let newUrl =
      urlParticipacion + event.id + "/sesion/" + window.sessionStorage.id;
    console.log("URL", newUrl);
    await axios
      .post(newUrl, {
        id: event.id,
        id_autenticacion: window.sessionStorage.id,
      })
      .then((response) => {
        this.mensajeConfirmacionParticipacion();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <h1> Bienvenido a Lista de eventos!</h1>
          </div>
          <div style={{ display: "flex" }}>
            <Button style={{ marginLeft: "auto" }} href="/eventos/crearevento">
              Crear Evento
            </Button>
          </div>
        </div>
        <Container>
          <Card>
            {this.state.events.map((event) => (
              <div class="card w-70">
                <div class="row no-gutters">
                  <div class="col-auto">
                    <img
                      src="http://jorge-zientarski.com/imgs/Events2.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="col">
                    <div class="card-block px-1">
                      <h4 class="card-title">{event.nombre_evento}</h4>
                      <p class="card-text">
                        <b>Description:</b> {event.descripcion_evento}
                      </p>
                      <p class="card-text">
                        <b>Modalidad:</b> {event.modalidad_evento}
                      </p>
                      <p class="card-text">
                        <b>Fecha:</b> {event.fecha_evento}
                      </p>
                      <p class="card-text">
                        <b>Lugar:</b> {event.lugar_evento}
                      </p>
                      <Button
                        onClick={() => {
                          this.postParticipacion(event); //descomentar cuando se guarde en DB
                        }}
                      >
                        Participar
                      </Button>
                      <Button>
                        <Link to={"eventos/" + event.id}>Ver Evento</Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div class="card-footer w-100 text-muted"></div>
              </div>
            ))}
          </Card>
        </Container>
      </div>
    );
  }
}
export default EventsList;
