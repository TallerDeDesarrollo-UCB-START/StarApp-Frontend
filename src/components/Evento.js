import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Modal } from "reactstrap";
import { Button } from "@material-ui/core";


const url = process.env.REACT_APP_API;
const urlDeploy = `${url}eventos`;
const urlLideres = `${url}lideres`;
const urlCategorias = `${url}eventos`;

const api = axios.create({
  baseURL: urlDeploy,
});

const apiLideres = axios.create({
  baseURL: urlLideres,
});
const apiCategorias = axios.create({
  baseURL: urlCategorias,
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
    },
    lideres: [],
    categorias: [],
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

  abrilModalEditarEvento(){
    this.prepararModal();
    this.setState({ modalAbierto: true });
    
  }

  prepararModal(){
    this.llenarFormulario();
    this.getLideres();
    this.getCategorias();
  }

  llenarFormulario(){
    this.setState( {formEditado : this.state.events[0]});
  
  }

  cerrarModalEditarEvento(){
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
    let result = aux.filter((item,index)=>{
      return aux.indexOf(item) === index;
    })
    this.setState({ categorias: result });
  };

  getLideres = async () => {
    try {
      let data = await apiLideres.get("/").then(({ data }) => data);
      let aux = data.map((item) => {
        return item.nombre + " " + item.apellido;
      });
      aux.unshift(this.state.formEditado["lider"]);
      let result = aux.filter((item,index)=>{
        return aux.indexOf(item) === index;
      })
      this.setState({ lideres: result });
    } catch (err) {
      console.log(err);
    }
  };


  guardarNuevaData = async () => {
    //console.log(this.state.formEditado);
    let thisUrl = window.location.href;
    let id = this.getIdFromURL(thisUrl);
    var newUrl = "http://localhost:5000/actualizar_evento/" + id;
    await axios.put(newUrl, this.state.formEditado)
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer w-100 text-muted"></div>
            </div>
          ))}
        </Card>


        <Button variant="contained" color="primary" size="medium" onClick={()=>this.abrilModalEditarEvento()} >
          Editar
        </Button>


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

        <Modal isOpen={this.state.modalAbierto} style={customStyles} >
            <div>Editar Evento</div>
            <form>

                 
              <label>Nombre del Evento:</label>
                <input
                  name="nombre_evento"
                  type="text"
                  value={this.state.formEditado['nombre_evento']}
                  onChange={this.handleChange}
                />
              <br></br>


              <label>Descripción:</label>
                <textarea
                  cols="30"
                  rows="10"
                  name="descripcion_evento"
                  type="text"
                  value={this.state.formEditado['descripcion_evento']}
                  onChange={this.handleChange}
                ></textarea>
              <br></br>

              <label>Lider:</label>
                <select
                  className=" form-control lider-input"
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
              <br></br>

              <label>Modalidad</label>
                <select
                  className=" form-control"
                  name="modalidad_evento"
                  onChange={this.handleChange}
                >
                  <option value="Presencial" name="modalidad_evento">
                    Presencial
                  </option>
                  <option value="Virtual" name="modalidad_evento">
                    Virtual
                  </option>
                </select>
              <br></br>

              <label>Lugar</label>
                <input
                  name="lugar_evento"
                  type="text"
                  value={this.state.formEditado['lugar_evento']}
                  onChange={this.handleChange}
                />
              <br></br>

              <label>Fecha</label>
                <input
                  name="fecha_evento"
                  type="date"
                  value={this.state.formEditado['fecha_evento']}
                  onChange={this.handleChange}
                />
              <br></br>

              <label>Categoria</label>
                <select
                  className=" form-control categoria-input"
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
              <br></br>

              <label>Hora Inicio</label>
                <input
                  className="form-control"
                  name="hora_inicio"
                  type="time"
                  value={this.state.formEditado['hora_inicio']}
                  onChange={this.handleChange}
                />
              <br></br>

              <label>Hora Fin</label>
                <input
                  className="form-control"
                  name="hora_fin"
                  type="time"
                  value={this.state.formEditado['hora_fin']}
                  onChange={this.handleChange}
                />
              <br></br>


              <div className="CamposBotones">
                <Button onClick={() => this.guardarNuevaData()} >Actualizar Evento </Button>
                <Button onClick={()=>this.cerrarModalEditarEvento()}>  Cancelar </Button>
              </div> 

            </form>
          </Modal>


      </Container>
    );
  }
}
export default Evento;
