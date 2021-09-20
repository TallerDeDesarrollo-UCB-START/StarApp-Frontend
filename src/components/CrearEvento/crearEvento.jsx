import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import genericPicture from "../../assets/generic_picture.png";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Card,
} from "reactstrap";

const events = [
  {
    id: 1,
    imagen: "",
    nombre: "EVENTO 1",
    descripcion: "descripcion 1",
    modalidad: "modalidad 1",
    lugar: "CBBA",
    fecha: "2021-09-01",
  },
  {
    id: 2,
    imagen: "",
    nombre: "EVENTO 2",
    descripcion: "descripcion 2",
    modalidad: "modalidad 2",
    lugar: "CBBA",
    fecha: "2021-09-14",
  },
  {
    id: 3,
    imagen: "",
    nombre: "EVENTO 3",
    descripcion: "descripcion 3",
    modalidad: "modalidad 3",
    lugar: "CBBA",
    fecha: "2021-09-14",
  },
];

class crearEvento extends React.Component {
  state = {
    events: events,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      // id: "",
      nombre: "",
      descripcion: "",
      modalidad: "",
      lugar: "",
      fecha: "",
    },
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  insertar = () => {
    window.alert("Evento Guardado");

    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.events.length + 1;
    var lista = this.state.events;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, events: lista });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  mostrarMensajeParticipacion = () => {
    alert("Participación confirmada (NO HACE NADA)");
  };

  render() {
    const listItems = events.map((event) => (
      <div className="mt-1 mb-1">
        <Card>
          <div className="float-container">
            <div className="float-child">
              <img width="300px" height="400px" src={genericPicture} />
            </div>
            <div className="float-child">
              <ul key={event.nombre}>{event.nombre}</ul>
              <ul key={event.descripcion}>{event.descripcion}</ul>
              <ul key={event.modalidad}>{event.modalidad}</ul>
              <ul key={event.fecha}>{event.fecha}</ul>
              <ul key={event.lugar}>{event.lugar}</ul>
            </div>
          </div>
        </Card>
      </div>
    ));
    return (
      <>
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>
            Crear
          </Button>
          <br />
          <br />

          <div>{listItems}</div>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Crear Evento</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.events.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>Evento:</label>
              <input
                className="form-control"
                name="evento"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Descripción:</label>
              <input
                className="form-control"
                name="descripcion"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Lugar:</label>
              <input
                className="form-control"
                name="lugar"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Fecha:</label>
              <input
                className="form-control"
                name="fecha"
                type="date"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Guardar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default crearEvento;
