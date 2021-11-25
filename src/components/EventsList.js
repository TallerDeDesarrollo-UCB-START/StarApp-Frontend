import React, { Component, Fragment } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Modal, Button } from "reactstrap";
import { Link } from "react-router-dom";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import "./EventsList.css";

import TextField from "@mui/material/TextField";

const url = process.env.REACT_APP_API;
const urlLocal = `http://localhost:5000/eventos`;
const urlDeploy = `${url}eventos`;
const urlCrearEvento = `${url}eventos/crearevento`;
const urlLideres = `${url}lideres`;
const urlProyectos = `${url}get_proyectos`;
const apiLideres = axios.create({
  baseURL: urlLideres,
});

const apiProyectos = axios.create({
  baseURL: urlProyectos,
});

const current = new Date();

const currentDate = `${current.getFullYear()}-${current.getMonth() + 1}-${(
  "0" + current.getDate()
).slice(-2)}`;

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
    container:false,
    abierto: false,
    botonMostrar: false,
    botonArchivar: true,
    botonMostrarEventosNoArchivados: false,
    botonMostrarEventosArchivados: true,
    success: false,
    categoriaFiltrada: "Todas",
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
    this.getUserRol();
    this.getLideres();
    this.getProyectos();
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
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

  getEvents = async () => {
    try {
      let data = await api.get("/").then(({ data }) => data);
      if (this.state.categoriaFiltrada !== "Todas") {

        data = data.filter(
          (event) =>
       ( event.fecha_evento === currentDate || event.fecha_evento > currentDate) && event.categoria === this.state.categoriaFiltrada);
       this.setState({ container: true });
      } else {

        data = data.filter(
          (event) =>
            ( event.fecha_evento === currentDate || event.fecha_evento > currentDate) );
         this.setState({ container: true });
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

  getEventsArchivados = async () => {
    try {
      this.state.botonMostrar = true;
      this.state.botonArchivar = false;
      this.state.botonMostrarEventosNoArchivados = true;
      this.state.botonMostrarEventosArchivados = false;
      let data = await api.get("/").then(({ data }) => data);
      if (this.state.categoriaFiltrada !== "Todas") {
        data = data.filter(
          (event) =>
          (event.fecha_evento < currentDate) && event.categoria === this.state.categoriaFiltrada);
          this.setState({ container: true });
      } else {

        data = data.filter(
          (event) => (event.fecha_evento < currentDate) );
          this.setState({ container: true });
      }
      if (data == null){
        this.setState({ container: true });
      }
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
  filterPastEventsChangeHandler = (categoria) => {
    this.setState({ categoriaFiltrada: categoria.target.value });
    this.getEventsArchivados();
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
  }

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
    let result = aux.filter((item, index) => {
      return aux.indexOf(item) === index;
    });
    this.setState({ proyectos: result });
  };

  cerrarModalInsertar() {
    this.setState({ modalInsertar: false });
  }

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
          <h1 style={{
              display: this.state.botonMostrarEventosArchivados == true
                ? "block"
                : "none",
              }}> Bienvenido a Lista de eventos!</h1>
          <h1 style={{
              display: this.state.botonMostrarEventosArchivados == false
                ? "block"
                : "none",
              }}> Bienvenido a Lista de eventos Pasados!</h1>
          <div className="header-lista-eventos">
            
            <span 
            style={{
              display: this.state.botonMostrarEventosArchivados == true
                ? "block"
                : "none",
              }}className="span-align">Categoria:</span>
            <select
              style={{
              display: this.state.botonMostrarEventosArchivados
                ? "block"
                : "none",
              }}
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
            <span 
            style={{
              display: this.state.botonMostrarEventosArchivados == false
                ? "block"
                : "none",
              }}className="span-align">Categoria:</span>
            <select
              style={{
              display: this.state.botonMostrarEventosArchivados == false
                ? "block"
                : "none",
              }}
              value={this.state.categoriaFiltrada}
              onChange={this.filterPastEventsChangeHandler}
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
                <div className="eventos-pasados-button">
                  <Button
                    style={{ marginLeft: "auto" }}
                    color="#ffffff"
                  ></Button>
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
                </div>
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
        <h1 style={{
              display: this.state.container == false
                ? "block"
                : "none",
              }}> Bienvenido a Lista de eventos!</h1>
          <Card>
            {this.state.events.map((event) => (
              <div className="card w-70" key={event.id}>
                <div className="row no-gutters">
                  <div className="col-auto">
                    <img
                      src="https://jorge-zientarski.com/imgs/Events2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col">
                    <div className="card-block px-1">
                      <h4 className="card-title">{event.nombre_evento}</h4>
                      <p className="card-text">
                        <b>Descripción:</b> {event.descripcion_evento}
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

        <Modal id="ModalFormCrearEvento" isOpen={this.state.modalInsertar}>
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

            <div>
              <div>
                <label className="LabelLiderCrearEvento">Lider</label>
              </div>
              <div>
                <select
                  label="Lider"
                  className="liderEventoCrear textInput"
                  name="lider"
                  onChange={this.handleChange}
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

            <div>
              <div>
                <label className="LabelModalidadCrearEvento">Modalidad</label>
              </div>
              <select
                className="nombreEventoCrear textInput"
                name="modalidad_evento"
                onChange={this.handleChange}
                label="Modalidad"
              >
                <option value="Presencial" name="modalidad_evento">
                  Presencial
                </option>
                <option value="Virtual" name="modalidad_evento">
                  Virtual
                </option>
              </select>
            </div>

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

            <div>
              <div>
                <label className="LabelCategoriaCrearEvento">Categoria</label>
              </div>
              <div>
                <select
                  label="Categoria"
                  className="CategoriaEventoCrear textInput"
                  name="categoria"
                  onChange={this.handleChange}
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
            </div>

            <div>
              <div>
                <label className="LabelProyectoCrearEvento">Proyecto</label>
              </div>
              <div>
                <select
                  className="ProyectoEventoCrear textInput"
                  name="proyecto"
                  onChange={this.handleChange}
                  label="Proyecto"
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
