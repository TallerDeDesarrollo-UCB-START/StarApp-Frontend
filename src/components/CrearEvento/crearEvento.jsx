import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link,Route } from 'react-router-dom';
import axios from "axios";
import './crearEvento.css';
import {
  Grid,
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
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

class crearEvento extends React.Component {
  state = {
    modalActualizar: false,
    modalInsertar: true,
    form: {
      id_evento: "",
      nombre_evento: "",
      descripcion_evento: "",
      modalidad_evento: "Presencial",
      lugar_evento: "",
      fecha_evento: "",
      proyecto: "Proyecto1"
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
    window.location.href = "/eventos";
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

              <Box item xs={12}>
                <label>
                  Evento: 
                </label>
                <input
                  className="form-control"
                  name="nombre_evento"
                  type="text"
                  onChange={this.handleChange}
                />
              </Box>
              
              <Box item xs={12} mt={0.8}>
                <label>
                  Descripción: 
                </label>
                <input
                  className="form-control"
                  name="descripcion_evento"
                  type="text"
                  onChange={this.handleChange}
                />
              </Box>

              <Box item xs={12} mt={0.8}>
                <Box className="InLine Modalidad" item xs={6}>
                  <label>
                    Modalidad: 
                  </label>

                  <select className="modalidad-input" name="modalidad_evento" onChange={this.handleChange}>
                    <option value="Presencial" name="modalidad_evento" selected>Presencial</option>
                    <option value="Virtual" name="modalidad_evento">Virtual</option>                
                  </select>
                </Box>

                <Box className="InLine Proyecto" item xs={6}>
                  <label>
                    Proyecto: 
                  </label>
                  <select className='proyecto-input' name="proyecto" onChange={this.handleChange}>
                    <option value="Proyecto 1" name="proyecto" selected>Proyecto1</option>
                    <option value="Proyecto 2" name="proyecto">Proyecto2</option>
                  </select>
                  
                </Box>

              </Box>

              <Box  item xs={12} mt={0.8}>
                <Box className="InLine Lugar" item xs={6}>
                  <label>
                    Lugar: 
                  </label>
                  <input
                    className="form-control"
                    name="lugar_evento"
                    type="text"
                    onChange={this.handleChange}
                  />
                </Box>

                <Box className="InLine Fecha" item xs={6}>
                  <label>
                    Fecha: 
                  </label>
                  <input
                    className="form-control"
                    name="fecha_evento"
                    type="date"
                    onChange={this.handleChange}
                  />
                </Box>
              </Box>
              
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