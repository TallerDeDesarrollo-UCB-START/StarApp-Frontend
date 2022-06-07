import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Modal } from "reactstrap";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import "./Evento.css";
import ParticipantesEventosBtn from "./ParticipantesEventosBtn";
import EventoImagen from "../assets/images/event_picture.png";
import MyButton from "./button";
import MySelect from "./select";
import MyInputText from "./inputText";

const url = process.env.REACT_APP_API;
const urlDeploy = `${url}eventos`;
const urlLideres = `${url}lideres`;
const urlCategorias = `${url}eventos`;
const urlProyectos = `${url}get_proyectos`;

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
    snackbarAbierto: false,
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
    mensajeSnackbar: "",
    severidadSnackbar: "",
  };

  constructor() {
    super();
    this.getEvento();
    this.getParticipantes();
    this.getUserRol();
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
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getParticipantes = async () => {
    let thisUrl = window.location.href;
    let id = this.getIdFromURL(thisUrl);

    try {
      let data = await api.get(`/participantes/${id}`).then(({ data }) => data);
      this.setState({ participants: data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  validarBotones(event) {
    return !this.state.participants.some(function (evento) {
      return evento.id_evento === event.id;
    });
  }
  handleChange = (e) => {
    console.log("asddsaadsasdasdasdasdasdasddasads");
    console.log(e);
    this.setState({
      formEditado: {
        ...this.state.formEditado,
        [e.target.name]: e.target.value,
      },
    });
  };

  getCategorias = async () => {
    try{
      let data = await apiCategorias.get("/categorias").then(({ data }) => data);
      let aux = data.map((item) => {
        return item.interes;
      });
      aux.unshift(this.state.formEditado["categoria"]);
      let result = aux.filter((item, index) => {
        return aux.indexOf(item) === index;
      });
      this.setState({ categorias: result });
    } catch (error) {
      console.log(error);
      throw error;
    }
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
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  getProyectos = async () => {
    try{
      let data = await apiProyectos.get("/").then(({ data }) => data);
      let aux = data.map((item) => {
        return item.titulo;
      });
      aux.unshift("No Seleccionado");
      this.setState({ proyectos: aux });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  guardarNuevaData = async () => {
    let thisUrl = window.location.href;
    let id = this.getIdFromURL(thisUrl);
    var newUrl = `${url}actualizar_evento/` + id;
    console.log(newUrl);
    await axios
      .put(newUrl, this.state.formEditado)
      .then((response) => {
        this.insertar();
      })
      .catch((error) => {
        console.log(error.message);
        throw error;
      });
  };

  // insertar = async () => {
    // this.handleClick();

    // this.setState({
    //   mensajeSnackbar: "Evento Actualizado",
    //   severidadSnackbar: "success",
    // });
    // await this.sleep(2000);
    // this.cerrarModalEditarEvento();
    // window.location.reload();
  // };

  insertar = async () => {
    if (this.state.formEditado && this.state.formEditado.nombre_evento && this.state.formEditado.fecha_evento && this.state.formEditado.lider && this.state.formEditado.categoria && this.state.formEditado.hora_inicio && this.state.formEditado.hora_fin) {
      if (this.state.formEditado.nombre_evento.trim().length > 0 && this.state.formEditado.nombre_evento.length < 100) {
        this.handleClick();
        this.setState({
          mensajeSnackbar: "Evento Actualizado",
          severidadSnackbar: "success",
        });
        await this.sleep(2000);
        this.cerrarModalEditarEvento();
        window.location.reload()
      } else {
        this.handleClick();
        this.setState({
          mensajeSnackbar: "El nombre del evento debe tener entre 1 y 100 caracteres.",
          severidadSnackbar: "error",
        });
      } 
      if (this.state.formEditado.descripcion_evento.length > 500) {
        this.handleClick();
        this.setState({
          mensajeSnackbar: "La descripción debe tener máximo 500 caracteres.",
          severidadSnackbar: "error",
        });
      } 
      if (this.state.formEditado.lugar_evento.length > 100){
        this.handleClick();
        this.setState({
          mensajeSnackbar: "El lugar debe tener máximo 100 caracteres.",
          severidadSnackbar: "error",
        });
      } 
    } else {
      this.handleClick();
      this.setState({
        mensajeSnackbar: "Llenar todos los campos obligatorios",
        severidadSnackbar: "error",
      });
    }
    
  };

  getUserRol = async () => {
    try {
      let data = await axios.get(
        url + "extended_form/" + window.sessionStorage.id
      );
      let rol = await data.data.data.rol;
      this.setState({ user: rol });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  sleep = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  // handleOpen = () => this.setState({ snackbarAbierto: true });
  handleClose = () => this.setState({ snackbarAbierto: false });
  handleClick = () => this.setState({ snackbarAbierto: true });

  render() {
    const customStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    };
    const rolUser = this.state.user;
    const { snackbarAbierto } = this.state;
    return (
      <Container>
        <MyButton onClick={() => window.history.back()} className="go-back"/>
        <Card>
          {this.state.events.map((event) => (
            <div key={event.id}>
              <div className="row no-gutters">
                <div className="row">
                  <h4 className="card-title">
                    <b>{event.nombre_evento}</b>
                  </h4>
                </div>
                <div className="col-auto">
                  <img
                    src={EventoImagen}
                    className="img-fluid"
                    alt=""
                    align="center"
                  />
                </div>

                <div className="col">
                  <div className="row">
                    <div className="col text-1">
                      <div className="card-block">
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
                          <b>Líder:</b> {event.lider}
                        </p>
                        <p className="card-text" name={'descripcion'+event.descripcion_evento}>
                          <b>Descripción:</b> 
                          {event.descripcion_evento}
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
        {rolUser !== "voluntario" ? (
          <MyButton className="edit" onClick={() => this.abrilModalEditarEvento()} />
        ) : (
          <></>
        )}
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
          {rolUser !== "voluntario" ? <ParticipantesEventosBtn /> : <></>}
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
            <MyInputText
              label="Nombre del evento *"
              name="nombre_evento"
              className="nombreEventoEdicion textInput"
              value={this.state.formEditado["nombre_evento"]}
              onChange={this.handleChange}
            />  

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
            <MySelect
              value={this.state.formEditado.lider}
              onChange={this.handleChange}
              placeholder="Líder"
              name="lider"
            >
              {this.state.lideres.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
            </MySelect>
            <br />
            <br />
            <MySelect
              value={"" || this.state.formEditado["modalidad_evento"]}
              onChange={this.handleChange}
              placeholder="Modalidad *"
              name="modalidad_evento"
            >
              <MenuItem value="Presencial" name="modalidad_evento">
                Presencial
              </MenuItem>
              <MenuItem value="Virtual" name="modalidad_evento">
                Virtual
              </MenuItem>
            </MySelect>
            <MyInputText
              label="Lugar"
              className="LugarEventoEdicion textInput"
              name="lugar_evento"
              value={this.state.formEditado["lugar_evento"]}
              onChange={this.handleChange}
            />

            <TextField
              label="Fecha *"
              className="FechaEventoEdicion textInput"
              name="fecha_evento"
              type="date"
              value={this.state.formEditado["fecha_evento"]}
              onChange={this.handleChange}
            />

            <MySelect
              value={this.state.formEditado.categoria}
              onChange={this.handleChange}
              placeholder="Categoría"
              name="categoria"
            >
              {this.state.categorias.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </MySelect>
            <br />
            <br />
            <MySelect
              value={this.state.formEditado.proyecto}
              onChange={this.handleChange}
              placeholder="Proyecto"
              name="proyecto"
            >
              {this.state.proyectos.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </MySelect>

            <TextField
              label="Hora Inicio *"
              className="HoraInicioEventoEdicion textInput"
              name="hora_inicio"
              type="time"
              value={this.state.formEditado["hora_inicio"]}
              onChange={this.handleChange}
            />

            <TextField
              label="Hora Fin *"
              className="HoraFinEventoEdicion textInput"
              name="hora_fin"
              type="time"
              value={this.state.formEditado["hora_fin"]}
              onChange={this.handleChange}
            />

            <div className="CamposBotones">
              <MyButton className="cancel" onClick={() => this.cerrarModalEditarEvento()}>
                Cancelar
              </MyButton>
              <MyButton className="default" onClick={() => this.guardarNuevaData()}>
                Guardar Cambios
              </MyButton>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={snackbarAbierto}
                onClose={this.handleClose}
                autoHideDuration={3000}
              >
                <MuiAlert
                  onClose={this.handleClose}
                  severity={this.state.severidadSnackbar}
                  elevation={6}
                  variant="filled"
                >
                  {this.state.mensajeSnackbar}
                </MuiAlert>
              </Snackbar>
            </div>
          </form>
        </Modal>
      </Container>
    );
  }
}
export default Evento;
