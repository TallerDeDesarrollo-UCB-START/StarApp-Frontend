import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "reactstrap";
import { useParams } from "react-router-dom";

const api = axios.create({
  baseURL: `http://localhost:5000/eventos/`,
  //baseURL: `https://5fc44b7b36bc7900163436cf.mockapi.io/api/Message/Eventos`
});

class Evento extends Component {
  state = {
    events: [],
  };

  constructor() {
    super();
    var thisUrl = window.location.href;
    var ids = this.getId(thisUrl);
    console.log("ID", ids);
    this.getEvneto(ids);
  }

  getId(thisUrl) {
    console.log("URL", thisUrl.substring(thisUrl.length - 1));
    return thisUrl.substring(thisUrl.length - 1);
  }

  getEvneto = async (id) => {
    try {
      let data = await api.get(`/${id}`).then(({ data }) => data);
      this.setState({ events: data });
      // console.log("this url", );
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
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
                  </div>
                </div>
              </div>
              <div class="card-footer w-100 text-muted"></div>
            </div>
          ))}
        </Card>
      </Container>
    );
  }
}
export default Evento;
