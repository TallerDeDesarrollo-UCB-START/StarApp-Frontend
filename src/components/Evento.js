import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Modal } from "reactstrap";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./Evento.css";

const url = process.env.REACT_APP_API;
const urlDeploy = `${url}eventos`;
const urlLideres = `${url}lideres`;
const urlCategorias = `${url}eventos`;
const urlProyectos = `http://localhost:5000/get_proyectos`;

const api = axios.create({
  baseURL: urlDeploy,
});

const apiLideres = axios.create({
  baseURL: urlLideres,
});
const apiCategorias = axios.create({
  baseURL: urlCategorias,
});
const apiProyectos = axios.create({
  baseURL: urlProyectos,
});

class Evento extends Component {
  state = {
    events: [],
    participants: [],
    nombreParticipante: "",
    modalAbierto: false,
    formEditado: {
      nombre_evento: "",
      descripcion_evento: "",
      lider: "",
      modalidad_evento: "",
      lugar_evento: "",
      fecha_evento: "",
      categoria: "",
      estado: "1",
      hora_inicio: "",
      hora_fin: "",
      proyecto: "",
    },
    lideres: [],
    categorias: [],
    proyectos: [],
  };

  constructor() {
    super();
    this.getEvento();
    this.getParticipantes();
  }

  getIdFromURL(thisUrl) {
    var id = thisUrl.substring(thisUrl.indexOf("/") + 1);
    id = thisUrl.split("/").pop();
    return id;
  }

  abrilModalEditarEvento() {
    this.prepararModal();
    this.setState({ modalAbierto: true });
  }

  prepararModal() {
    this.llenarFormulario();
    this.getLideres();
    this.getCategorias();
    this.getProyectos();
  }

  llenarFormulario() {
    this.setState({ formEditado: this.state.events[0] });
  }

  cerrarModalEditarEvento() {
    this.setState({ modalAbierto: false });
  }

  getEvento = async () => {
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
      this.setState({ participants: data });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    this.setState({
      formEditado: {
        ...this.state.formEditado,
        [e.target.name]: e.target.value,
      },
    });
  };

  getCategorias = async () => {
    let data = await apiCategorias.get("/categorias").then(({ data }) => data);
    let aux = data.map((item) => {
      return item.interes;
    });
    aux.unshift(this.state.formEditado["categoria"]);
    let result = aux.filter((item, index) => {
      return aux.indexOf(item) === index;
    });
    this.setState({ categorias: result });
  };

  getLideres = async () => {
    try {
      let data = await apiLideres.get("/").then(({ data }) => data);
      let aux = data.map((item) => {
        return item.nombre + " " + item.apellido;
      });
      aux.unshift(this.state.formEditado["lider"]);
      let result = aux.filter((item, index) => {
        return aux.indexOf(item) === index;
      });
      this.setState({ lideres: result });
    } catch (err) {
      console.log(err);
    }
  };
  getProyectos = async () => {
    let data = await apiProyectos.get("/").then(({ data }) => data);
    let aux = data.map((item) => {
      return item.titulo;
    });
    aux.unshift("No Seleccionado");
    this.setState({ proyectos: aux });
  };

  guardarNuevaData = async () => {
    //console.log(this.state.formEditado);
    let thisUrl = window.location.href;
    let id = this.getIdFromURL(thisUrl);
    var newUrl = "http://localhost:5000/actualizar_evento/" + id;
    await axios
      .put(newUrl, this.state.formEditado)
      .then((response) => {
        this.insertar();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  insertar = () => {
    window.alert("Evento Actualizado");
    this.cerrarModalEditarEvento();
    //window.location.href = "/eventos";
    window.location.reload();
  };

  render() {
    const customStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    };
    return (
      <Container>
        <Card>
          {this.state.events.map((event) => (
            <div key={event.id}>
              <div className="row no-gutters">
                <div className="col-auto">
                  <img
                    src="http://jorge-zientarski.com/imgs/Events2.jpg"
                    className="img-fluid"
                    alt=""
                    align="center"
                  />
                </div>

                <div className="col">
                  <div className="row">
                    <h4 className="card-title">
                      <b>{event.nombre_evento}</b>
                    </h4>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="card-block px-1">
                        <p className="card-text">
                          <b>Hora Inicio:</b> {event.hora_inicio}
                        </p>
                        <p className="card-text">
                          <b>Fecha:</b> {event.fecha_evento}
                        </p>
                        <p className="card-text">
                          <b>Proyecto:</b> {event.proyecto}
                        </p>

                        <p className="card-text">
                          <b>Modalidad:</b> {event.modalidad_evento}
                        </p>

                        <p className="card-text">
                          <b>Descripción:</b> {event.descripcion_evento}
                        </p>
                      </div>
                    </div>

                    <div className="col">
                      <div className="card-block px-1">
                        <p className="card-text">
                          <b>Hora Fin:</b> {event.hora_fin}
                        </p>
                        <p className="card-text">
                          <b>Lugar:</b> {event.lugar_evento}
                        </p>
                        <p className="card-text">
                          <b>Categoría:</b> {event.categoria}
                        </p>
                        <p className="card-text">
                          <b>Lider:</b> {event.lider}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <br></br>
        </Card>
        <br></br>
        
        <Button
          className="botonEditarEvento"
          variant="contained"
          color="primary"
          size="small"
          onClick={() => this.abrilModalEditarEvento()}
        >
          Editar
        </Button>
        
        <br></br>
        <br></br>
        <div className="listForm">
          <h4 className="card-list-1">
            <b>Lista De Participantes</b>
          </h4>
          {this.state.participants.map((participant) => (
            <div className="Participante" key={participant.id}>
              <p className="card-list">
                <b> Nombre:</b> {participant.nombre} {participant.apellido}
              </p>
            </div>
          ))}
        </div>

        <Modal
          id="ModalFormEditEvento"
          isOpen={this.state.modalAbierto}
          style={customStyles}
        >
          <div className="Titulo">
            <strong>Editar Evento</strong>
          </div>
          <form className="formularioEdicionEvento">
            <TextField
              label="Nombre del evento"
              name="nombre_evento"
              className="nombreEventoEdicion textInput"
              type="text"
              value={this.state.formEditado["nombre_evento"]}
              onChange={this.handleChange}
            />

            <br></br>

            <TextField
              id="filled-multiline-flexible"
              label="Descripción"
              className="descripcionEventoEdicion textInput"
              multiline
              maxRows={4}
              name="descripcion_evento"
              type="text"
              value={this.state.formEditado["descripcion_evento"]}
              onChange={this.handleChange}
            />
            <div>
              <div>
                <label className="LabelLider">Lider</label>
              </div>
              <div>
                <select
                  label="Lider"
                  className="liderEventoEdicion textInput"
                  name="lider"
                  onChange={this.handleChange}
                  value={this.state.formEditado.lider}
                >
                  {this.state.lideres.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <TextField
              label="Modalidad"
              select
              className="nombreEventoEdicion textInput"
              name="modalidad_evento"
              onChange={this.handleChange}
              value={"" || this.state.formEditado["modalidad_evento"]}
            >
              <MenuItem value="Presencial" name="modalidad_evento">
                Presencial
              </MenuItem>
              <MenuItem value="Virtual" name="modalidad_evento">
                Virtual
              </MenuItem>
            </TextField>

            <TextField
              label="Lugar"
              className="LugarEventoEdicion textInput"
              name="lugar_evento"
              type="text"
              value={this.state.formEditado["lugar_evento"]}
              onChange={this.handleChange}
            />

            <TextField
              label="Fecha"
              className="FechaEventoEdicion textInput"
              name="fecha_evento"
              type="date"
              value={this.state.formEditado["fecha_evento"]}
              onChange={this.handleChange}
            />
            <div>
              <div>
                <label className="LabelCategoria">Categoria</label>
              </div>
              <div>
                <select
                  label="Categoria"
                  className="CategoriaEventoEdicion textInput"
                  name="categoria"
                  onChange={this.handleChange}
                  value={this.state.formEditado.categoria}
                >
                  {this.state.categorias.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <div>
                  <label className="LabelProyecto">Proyecto</label>
                </div>
                <div>
                  <select
                    label="Proyecto"
                    className="ProyectoEventoEdicion textInput"
                    name="proyecto"
                    onChange={this.handleChange}
                    value={this.state.formEditado.proyecto}
                  >
                    {this.state.proyectos.map((item) => {
                      return (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <TextField
                label="Hora Inicio"
                className="HoraInicioEventoEdicion textInput"
                name="hora_inicio"
                type="time"
                value={this.state.formEditado["hora_inicio"]}
                onChange={this.handleChange}
              />

              <TextField
                label="Hora Fin"
                className="HoraFinEventoEdicion textInput"
                name="hora_fin"
                type="time"
                value={this.state.formEditado["hora_fin"]}
                onChange={this.handleChange}
              />

              <div className="CamposBotones">
                <Button
                  className="botonActualizar"
                  onClick={() => this.guardarNuevaData()}
                >
                  Actualizar Evento{" "}
                </Button>
                <Button
                  className="botonCancelar"
                  onClick={() => this.cerrarModalEditarEvento()}
                >
                  {" "}
                  Cancelar{" "}
                </Button>
              </div>
            </div>
          </form>
        </Modal>
      </Container>
    );
  }
}
export default Evento;
