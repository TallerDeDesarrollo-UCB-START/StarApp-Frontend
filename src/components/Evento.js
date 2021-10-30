import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "reactstrap";

const url = process.env.REACT_APP_API;
const urlDeploy = `${url}eventos`;

const api = axios.create({
  baseURL: urlDeploy,
});
class Evento extends Component {
  state = {
    events: [],
    participants: [],
    nombreParticipante: "",
  };

  constructor() {
    super();
    this.getEvneto();
    this.getParticipantes();
  }
  getIdFromURL(thisUrl) {
    var id = thisUrl.substring(thisUrl.indexOf("/") + 1);
    id = thisUrl.split("/").pop();
    return id;
  }

  getEvneto = async () => {
    let thisUrl = window.location.href;
    let id = this.getIdFromURL(thisUrl);

    try {
      let data = await api.get(`/${id}`).then(({ data }) => data);
      this.setState({ events: data });
    } catch (err) {
      console.log(err);
    }
  };
  getParticipantes = async () => {
    let thisUrl = window.location.href;
    let id = this.getIdFromURL(thisUrl);

    try {
      let data = await api.get(`/participantes/${id}`).then(({ data }) => data);
      console.log(data);

      this.setState({ participants: data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <Card>
          {this.state.events.map((event) => (
            <div className="card w-70" key={event.id}>
              <div className="row no-gutters">
                <div className="col-auto">
                  <img
                    src="http://jorge-zientarski.com/imgs/Events2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="col">
                  <div className="row">
                    <h4 className="card-title">{event.nombre_evento}</h4>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="card-block px-1">
                        <p className="card-text">
                          <b>Description:</b> {event.descripcion_evento}
                        </p>
                        <p className="card-text">
                          <b>Categoría:</b> {event.categoria}
                        </p>
                        <p className="card-text">
                          <b>Modalidad:</b> {event.modalidad_evento}
                        </p>
                        <p className="card-text">
                          <b>Fecha:</b> {event.fecha_evento}
                        </p>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card-block px-1">
                        <p className="card-text">
                          <b>Lider:</b> {event.lider}
                        </p>
                        <p className="card-text">
                          <b>Hora Inicio:</b> {event.hora_inicio}
                        </p>
                        <p className="card-text">
                          <b>Hora Fin:</b> {event.hora_fin}
                        </p>
                        <p className="card-text">
                          <b>Lugar:</b> {event.lugar_evento}
                        </p>
                        <p className="card-text">
                          <b>Proyecto:</b> {event.proyecto}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer w-100 text-muted"></div>
            </div>
          ))}
        </Card>
        <h1>Lista de participantes</h1>
        <Card>
          {this.state.participants.map((participant) => (
            <div className="card w-70" key={participant.id}>
              <div className="row no-gutters">
                <div className="col">
                  <div className="card-block px-1">
                    <p className="card-text"></p>
                    <p className="card-text">
                      <b> Nombre:</b> {participant.nombre}{" "}
                      {participant.apellido}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-footer w-100 text-muted"></div>
            </div>
          ))}
        </Card>
      </Container>
    );
  }
}
export default Evento;
