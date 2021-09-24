import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import axios from "axios";
import './crearEvento.css';
import {
  Box,
} from '@material-ui/core';


import {
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";


const url = "http://localhost:5000/eventos/crearevento"

class crearEvento extends React.Component {
  state = {
    modalInsertar: true,
    form: {
      nombre_evento: "",
      descripcion_evento: "",
      modalidad_evento: "Presencial",
      lugar_evento: "",
      fecha_evento: "",
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

  insertar = () => {
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

          <form>

            <Box xs={12}>
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
            
            <Box xs={12} mt={0.8}>
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

            <Box xs={12} mt={0.8}>     
              <label>
                Modalidad: 
              </label>
              <select className="modalidad-input" name="modalidad_evento" onChange={this.handleChange}>
                <option value="Presencial" name="modalidad_evento">Presencial</option>
                <option value="Virtual" name="modalidad_evento">Virtual</option>                
              </select>
            </Box>

            <Box  xs={12} mt={0.8}>
              <Box className="InLine Lugar" xs={6}>
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

              <Box className="InLine Fecha" xs={6}>
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

            <Box xs={12} mt={0.8}> 
              <Button className="BtnRegistrar" onClick={() => this.peticionPost()}> Registrar Evento </Button>
              <Button className="BtnCancelar" ><Link to="/eventos"> Cancelar</Link> </Button>
            </Box>


          </form>

        </Container>
      </>
    );
  }
}
export default crearEvento;
