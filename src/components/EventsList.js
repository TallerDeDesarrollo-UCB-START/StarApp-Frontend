import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Modal, ModalHeader, ModalFooter } from "reactstrap";

const url = process.env.REACT_APP_API
const urlDeploy=`${url}eventos`;
const api = axios.create({
  baseURL: urlDeploy,//`http://localhost:5000/eventos`,
  //baseURL: `https://5fc44b7b36bc7900163436cf.mockapi.io/api/Message/Eventos`
});

class EventsList extends Component {
  state = {
    events: [],
    divcontainer: true,
    abierto: false,
    botonMostrar: false,
    botonArchivar: true,
    botonMostrarEventosNoArchivados: false,
    botonMostrarEventosArchivados: true,
  };

  constructor() {
    super();
    this.getEvents();
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  getEvents = async () => {
    try {
      let data = await api.get("/").then(({ data }) => data);
      data = data.filter((event)=> event.estado == 1);
      this.setState({ events: data });
    } catch (err) {
      console.log(err);
    }
  };

  getEventsArchivados = async () => {
    try {
      this.state.botonMostrar= true;
      this.state.botonArchivar= false;
      this.state.botonMostrarEventosNoArchivados= true;
      this.state.botonMostrarEventosArchivados= false;
      let data = await api.get("/").then(({ data }) => data);
      data = data.filter((event)=> event.estado == 0);
      this.setState({ events: data });
    } catch (err) {
      console.log(err);
    }
  };

  deleteEvento = async (event) => {
    console.log(event.id)
    await axios.delete('http://localhost:5000/eventos/' + event.id);
    this.getEvents();
    this.abrirModal();
  }

  peticionArchivar =  async (event) => {
    await axios.put('http://localhost:5000/eventos/archivar_evento/'+ event.id);
    this.getEventsArchivados();
    window.location.reload();
  }

  peticionMostrar =  async (event) => {
    this.state.botonMostrar= false;
    this.state.botonArchivar= true;
    this.state.botonMostrarEventosNoArchivados= false;
    this.state.botonMostrarEventosArchivados= true;
    await axios.put('http://localhost:5000/eventos/mostrar_evento/'+ event.id);
    this.getEvents();
  }

  render() {

    const modalStyles={
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: 'translate(-50%,-50%)'
    }

    return (
      <div>
        <div>
          <div>
            <h1> Bienvenido a Lista de eventos!</h1>
          </div>
          <div style={{ display: "flex" }}>
            <Button style={{ marginLeft: "auto" }} href="/eventos/crearevento"> Crear Evento </Button> 
            <Button style={{ display: this.state.botonMostrarEventosArchivados ? "block" : "none" }} onClick={()=>this.getEventsArchivados()}>Eventos Archivados</Button>
            <Button style={{ display: this.state.botonMostrarEventosNoArchivados ? "block" : "none" }} href="/eventos">Volver</Button>
          </div>
        </div>
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
                  
                  <div className="principal">
                    <div className="secundario">
                      <Button style={{ display: this.state.botonMostrar ? "block" : "none" }} onClick={()=> this.peticionMostrar(event)}>Mostrar</Button>
                      <Button style={{ display: this.state.botonArchivar ? "block" : "none" }} onClick={()=> this.peticionArchivar(event)}>Archivar</Button>
                      <Button color="success" onClick={this.abrirModal}>Eliminar</Button>
                      </div ></div>

                      <Modal isOpen={this.state.abierto} style={modalStyles}>
                        <ModalHeader>
                          Esta seguro de eliminar este evento ??                    
                        </ModalHeader>
                        <ModalFooter>
                          <Button color="primary" onClick={() => this.deleteEvento(event)}>Aceptar</Button>
                          <Button color="secondary" onClick={this.abrirModal}>Cancelar</Button>
                        </ModalFooter>
                      </Modal>
                </div>
                <div className="card-footer w-100 text-muted"></div>
              </div>
            ))}
          </Card>
        </Container>
      </div>
    );
  }
}
export default EventsList;
