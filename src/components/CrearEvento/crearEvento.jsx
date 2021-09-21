import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link } from 'react-router-dom';
import axios from "axios";
import './crearEvento.css';
import {
  Grid, Input
} from '@material-ui/core';

import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";


  
const url = "http://localhost:3000/eventos/crearevento"

const data = [
  { id_evento: 1, nombre_evento: "Pozo de Agua", descripcion_evento: "descripcion 1", modalidad_evento: "presencial", lugar_evento: "CBBA", fecha_evento: "2021-09-01", proyecto: "A1"},
  { id_evento: 2, nombre_evento: "Recoleccion Dulces", descripcion_evento: "descripcion 2", modalidad_evento: "presencial", lugar_evento: "CBBA", fecha_evento: "2021-10-01", proyecto: "A2"},
  { id_evento: 3, nombre_evento: "Una sonrisa", descripcion_evento: "descripcion 3", modalidad_evento: "virtual", lugar_evento: "CBBA", fecha_evento: "2021-11-01", proyecto: "A3"},
];

class crearEvento extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: true,
    form: {
      id_evento: "",
      nombre_evento: "",
      descripcion_evento: "",
      modalidad_evento: "",
      lugar_evento: "",
      fecha_evento: "",
      proyecto: ""
    },
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  peticionPost=async ()=>{
    await axios.post(url,this.state.form).then(response=>{
      this.insertar();
    }).catch(error=>{
      console.log(error.message);
    })
  }

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  insertar= ()=>{
    window.alert("Evento Guardado");

    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
          
          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
            <div><h3>Crear Evento</h3></div>
            </ModalHeader>

            <ModalBody>

              <FormGroup>
                <label>
                  Evento: 
                </label>
                <input
                  className="form-control"
                  name="nombre_evento"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  Descripción: 
                </label>
                <input
                  className="form-control"
                  name="descripcion_evento"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              
              <FormGroup>
                  <label>Modalidad</label>
                  <input type="select" name="modalidad_evento"
                    
                  />
                    <option>Presencial</option>
                    <option>Virtual</option>
              </FormGroup>


 
              <FormGroup>           
                <label>
                  Proyecto: 
                </label>
                <input
                  className="form-control"
                  name="proyecto"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <Grid  item xs={12}>
                <Grid className="InLine Lugar" item xs={6}>
                  <label>
                    Lugar: 
                  </label>
                  <input
                    className="form-control"
                    name="lugar_evento"
                    type="text"
                    onChange={this.handleChange}
                  />
                </Grid>

                <Grid className="InLine Fecha" item xs={6}>
                  <label>
                    Fecha: 
                  </label>
                  <input
                    className="form-control"
                    name="fecha_evento"
                    type="date"
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
              
            </ModalBody>

            <ModalFooter>
              <Button className="BtnRegistrar" onClick={() => this.peticionPost()}> Registrar Evento </Button>
              <Button className="BtnCancelar" ><Link to="/eventos"><span> Cancelar</span></Link> </Button>
            </ModalFooter>
          
          </Modal>
        </Container>

    

      </>
    );
  }
}
export default crearEvento;