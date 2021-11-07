import React, { Component, Fragment } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card,Modal,Button } from "reactstrap";
import { Link } from "react-router-dom";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";

import "./EventsList.css";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const url = process.env.REACT_APP_API;
const urlDeploy = `${url}eventos`;
const urlLocal = `http://localhost:5000/eventos`



// const urlProyectos = `${URL}get_proyectos`;
const urlCrearEvento = `${url}eventos/crearevento`;
const urlLideres = `${url}lideres`;
const urlProyectos = `http://localhost:5000/get_proyectos`;
const apiLideres = axios.create({
  baseURL: urlLideres,
});

const apiProyectos = axios.create({
  baseURL: urlProyectos,
});




const api = axios.create({
  baseURL: urlDeploy,
});
const urlParticipacion = `${urlDeploy}/participate_evento/`;

class EventsList extends Component {
  state = {
    events: [],
    participaciones: [],
    user: "",
    divcontainer: true,
    abierto: false,
    botonMostrar: false,
    botonArchivar: true,
    botonMostrarEventosNoArchivados: false,
    botonMostrarEventosArchivados: true,
    success: false,
    categoriaFiltrada: "Todas",
    filtradoSegunEstado: "En Curso",
    estados:["En Curso","Proximo","Pasado"],
    categorias: [],

    modalInsertar: false,
    form: {
      nombre_evento: "",
      descripcion_evento: "",
      lider: "",
      modalidad_evento: "Presencial",
      lugar_evento: "",
      fecha_evento: "",
      categoria: "Todas",
      estado: "1",
      hora_inicio: "",
      hora_fin: "",
      proyecto: "Ninguno",
    },
    lideres: [],
    proyectos: [],

  };

  constructor() {
    super();
    this.getEvents();
    this.getParticipaciones();
    this.getCategorias();
    this.getFechas();
    this.getUserRol();

    this.getLideres();
    this.getProyectos();
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  getEvents = async () => {
    try {
      let data = await api.get("/").then(({ data }) => data);
      if (
        this.state.categoriaFiltrada !== "Todas" &&
        this.state.categoriaFiltrada !== "Otro"
      ) {
        data = data.filter(
          (event) =>
            event.estado === "1" && event.categoria === this.state.categoriaFiltrada 
            //event.estado === "1" && event.fecha_evento === this.state.filtradoSegunEstado
        );
      } else {
        data = data.filter((event) => event.estado === "1");
      }
      this.setState({ events: data });
    } catch (err) {
      console.log(err);
    }
  };

  getCategorias = async () => {
    let data = await api.get("/categorias").then(({ data }) => data);
    let aux = data.map((item) => {
      return item.interes;
    });
    aux.unshift("Todas");
    this.setState({ categoriaFiltrada: aux[0] });
    this.setState({ categorias: aux });
  };
  getFechas = async () => {
    let data = await api.get("/fechas").then(({ data }) => data);
    let aux = data.map((item) => {
      return item;
    });
    aux.unshift("En Curso");
    this.setState({ filtradoSegunEstado: aux[0] });
    this.setState({ estados: aux });
  };

  getEventsArchivados = async () => {
    try {
      this.state.botonMostrar = true;
      this.state.botonArchivar = false;
      this.state.botonMostrarEventosNoArchivados = true;
      this.state.botonMostrarEventosArchivados = false;
      let data = await api.get("/").then(({ data }) => data);
      data = data.filter((event) => event.estado === "0");
      this.setState({ events: data });
    } catch (err) {
      console.log(err);
    }
  };

  deleteEvento = async (event) => {
    await axios.delete(urlDeploy + "/" + event.id);
    this.getEvents();
    this.abrirModal();
  };

  //Peticiones pertenecientes a Archivar y Motrar
  peticionArchivar = async (event) => {
    await axios.put(urlDeploy + "/archivar_evento/" + event.id);
    this.getEventsArchivados();
    window.location.reload();
  };

  peticionMostrar = async (event) => {
    this.state.botonMostrar = false;
    this.state.botonArchivar = true;
    this.state.botonMostrarEventosNoArchivados = false;
    this.state.botonMostrarEventosArchivados = true;
    await axios.put(urlDeploy + "/mostrar_evento/" + event.id);
    this.getEvents();
  };

  //Funciones pertenecientes a obtener Participacion
  postParticipacion = async (event) => {
    let newUrl =
      urlParticipacion + event.id + "/sesion/" + window.sessionStorage.id;
    await axios
      .post(newUrl, {
        id: event.id,
        id_autenticacion: window.sessionStorage.id,
      })
      .then((response) => {
        this.mensajeConfirmacionParticipacion(event);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  getParticipaciones = async () => {
    try {
      var data = await api
        .get(`/participante/${window.sessionStorage.id}`)
        .then(({ data }) => data);
      this.setState({ participaciones: data });
    } catch (err) {
      console.log(err);
    }
  };

  filterChangeHandler = (categoria) => {
    this.setState({ categoriaFiltrada: categoria.target.value });
    this.getEvents();
  };

  mensajeConfirmacionParticipacion(event) {
    window.alert(
      `Tu participación en el evento ${event.nombre_evento} fue registrada, te esperamos!`
    );
    window.location.reload();
  }

  //Funciones pertenecientes a Eliminacion Participacion
  eliminarParticipacion = async (event) => {
    await axios
      .delete(
        urlDeploy +
          "/eliminar_participacion/" +
          event.id +
          "/" +
          window.sessionStorage.id
      )
      .then((response) => {
        this.mensajeConfirmacionEliminacionParticipacion(event);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  mensajeConfirmacionEliminacionParticipacion(event) {
    window.alert(
      `Tu participación en el evento ${event.nombre_evento} fue eliminada exitosamente!`
    );
    window.location.reload();
  }

  //Mostrar y Ocultar botones participacion
  validarBotones(event) {
    return !this.state.participaciones.some(function (evento) {
      return evento.id_evento === event.id;
    });
  }

  getUserRol = async () => {
    try {
      let data = await axios.get(
        url + "extended_form/" + window.sessionStorage.id
      );
      let rol = await data.data.data.rol;
      this.setState({ user: rol });
    } catch (err) {
      console.log(err);
    }
  };



  //Funciones Crear Evento

  mostrarModalInsertar() {
    this.setState({
      modalInsertar: true,
    });
  };

  peticionPost = async () => {
    console.log(this.state.form);
    await axios
      .post(urlCrearEvento, this.state.form)
      .then((response) => {
        this.insertar();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  getLideres = async () => {
    try {
      let data = await apiLideres.get("/").then(({ data }) => data);
      let aux = data.map((item) => {
        return item.nombre + " " + item.apellido;
      });
      aux.unshift("Sin Lider");
      this.setState({ lideres: aux });
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

  cerrarModalInsertar(){
    this.setState({ modalInsertar: false });
  };

  insertar = () => {
    window.alert("Evento Guardado");
    this.cerrarModalInsertar();
    window.location.reload();

  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const modalStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    };
    const rolUser = this.state.user;
    return (
      <div>
        <div>
          <div>
            <h1> Bienvenido a Lista de eventos!</h1>
          </div>
          <div>
            <select
              value={this.state.categoriaFiltrada}
              onChange={this.filterChangeHandler}
            >
              {this.state.categorias.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <select
              value={this.state.filtradoSegunEstado}
              //onChange={this.filterChangeHandler}
            >
              {this.state.estados.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div style={{ display: "flex" }}>
            {rolUser !== "voluntario" ? (
              <Fragment>
                <Button
                  style={{ marginLeft: "auto" }}
               
                  onClick={() => this.mostrarModalInsertar()}
                >
                  {" "}
                  Crear Evento{" "}
                </Button>
                <Button
                  style={{
                    display: this.state.botonMostrarEventosArchivados
                      ? "block"
                      : "none",
                  }}
                  onClick={() => this.getEventsArchivados()}
                >
                  Eventos Pasados
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <Button
                  style={{ marginLeft: "auto"}} 
                  color="#ffffff"
                >
                  
                </Button>
                <Button
                  style={{
                    display: this.state.botonMostrarEventosArchivados
                      ? "block"
                      : "none",
                  }}
                  onClick={() => this.getEventsArchivados()}
                >
                  Eventos Pasados
                </Button>
              </Fragment>
            )}

            <Button
              style={{
                display: this.state.botonMostrarEventosNoArchivados
                  ? "block"
                  : "none",
              }}
              href="/eventos"
            >
              Volver
            </Button>
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

                      <p className="card-text">
                        <b>Categoría:</b> {event.categoria}
                      </p>

                      {this.validarBotones(event) ? (
                        <Button
                          onClick={() => {
                            this.postParticipacion(event);
                          }}
                        >
                          {" "}
                          Participar
                        </Button>
                      ) : (
                        <Button
                          onClick={() => {
                            this.eliminarParticipacion(event);
                          }}
                        >
                          {" "}
                          Eliminar Participacion
                        </Button>
                      )}

                      <Button>
                        <Link to={"eventos/" + event.id}>Ver Evento</Link>
                      </Button>
                    </div>
                  </div>
                  {rolUser !== "voluntario" ? (
                    <Fragment>
                      <div className="principal">
                        <div className="secundario">
                          <Button
                            style={{
                              display: this.state.botonMostrar
                                ? "block"
                                : "none",
                            }}
                            onClick={() => this.peticionMostrar(event)}
                          >
                            Mostrar
                          </Button>
                          <Button
                            style={{
                              display: this.state.botonArchivar
                                ? "block"
                                : "none",
                            }}
                            onClick={() => this.peticionArchivar(event)}
                          >
                            Archivar
                          </Button>

                          <Button
                            color="success"
                            onClick={() => this.deleteEvento(event)}
                          >
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    </Fragment>
                  ) : (
                    <></>
                  )}

                  <Modal isOpen={this.state.abierto} style={modalStyles}>
                    <ModalHeader>
                      Esta seguro de eliminar este evento ??
                    </ModalHeader>
                    <ModalFooter>
                      <Button
                        color="primary"
                        onClick={() => this.deleteEvento(event)}
                      >
                        Aceptar
                      </Button>
                      <Button color="secondary" onClick={this.abrirModal}>
                        Cancelar
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
                <div className="card-footer w-100 text-muted"></div>
              </div>
            ))}
          </Card>
        </Container>

        <Modal
          id="ModalFormCrearEvento"
          isOpen={this.state.modalInsertar}
        >
          <div className="Titulo">
            <strong>Crear Evento</strong>
          </div>

          <form className="FormularioCrearEvento">
            <TextField
              label="Nombre del evento"
              placeholder="Nombre del evento"
              name="nombre_evento"
              className="nombreEventoCrear textInput"
              type="text"
              onChange={this.handleChange}
            />

            <br></br>

            <TextField
              id="filled-multiline-flexible"
              multiline
              maxRows={4}
              label="Descripción"
              placeholder="Descripcion"
              className="descripcionEventoCrear textInput"
              name="descripcion_evento"
              type="text"
              onChange={this.handleChange}
            />

            <TextField
              select
              label="Lider"
              className="liderEventoCrear textInput"
              name="lider"
              onChange={this.handleChange}
              
            >
              {this.state.lideres.map((item) => {
                return (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </TextField>

            <TextField
              select
              className="nombreEventoCrear textInput"
              name="modalidad_evento"
              onChange={this.handleChange}
              label="Modalidad"
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
              className="LugarEventoCrear textInput"
              placeholder="Lugar"
              name="lugar_evento"
              type="text"
              onChange={this.handleChange}
            />

            <TextField
              className="FechaEventoCrear textInput"
              name="fecha_evento"
              type="date"
              onChange={this.handleChange}
            />

            <TextField
              select
              className="CategoriaEventoCrear textInput"
              name="categoria"
              onChange={this.handleChange}
              label="Categoria"
            >
              {this.state.categorias.map((item) => {
                return (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </TextField>

            <TextField

              className="HoraInicioEventoCrear textInput"
              name="hora_inicio"
              type="time"
              onChange={this.handleChange}
            />

            <TextField

              className="HoraFinEventoCreae textInput"
              name="hora_fin"
              type="time"
              onChange={this.handleChange}
            />

            <div className="CamposBotones">
              <Button
                className="botonActualizar"
                onClick={() => this.peticionPost()}
              >
                Guardar Evento{" "}
              </Button>
              <Button
                className="botonCancelar"
                onClick={() => this.cerrarModalInsertar()}
              >
                {" "}
                Cancelar{" "}
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
export default EventsList;
