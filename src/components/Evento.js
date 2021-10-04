import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "reactstrap";

const url = process.env.REACT_APP_API;
const urlDeploy = `${url}eventos`;

const api = axios.create({
  baseURL: urlDeploy,
  //baseURL: `https://ucbstartfront.herokuapp.com/eventos/`   url produccion
});
class Evento extends Component {
  state = {
    events: [],
    participants: [],
  };

  constructor() {
    super();
    this.getEvneto();
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
                  <div className="card-block px-1">
                    <h4 className="card-title">{event.nombre_evento}</h4>
                    <p className="card-text">
                      <b>Description:</b> {event.descripcion_evento}
                    </p>
                    <p className="card-text">
                      <b>Modalidad:</b> {event.modalidad_evento}
                    </p>
                    <p className="card-text">
                      <b>Fecha:</b> {event.fecha_evento}
                    </p>
                    <p className="card-text">
                      <b>Lugar:</b> {event.lugar_evento}
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
