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
} from "reactstrap";


const url = "http://localhost:5000/eventos/crearevento"
const URL = process.env.REACT_APP_API
//const url = `${URL}eventos/crearevento`

class crearEvento extends React.Component {
  state = {
    modalInsertar: true,
    form: {
      nombre_evento: "",
      descripcion_evento: "",
      modalidad_evento: "Presencial",
      lugar_evento: "",
      fecha_evento: "",
      categoria: "",
      estado: "1",
      hora_inicio: "",
      hora_fin: "",
      lider: "",
    },
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  peticionPost=async ()=>{
    console.log(this.state.form);
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
        <Container className="Container">

          <form className="FormEvento">

          
            <Box className="evento" xs={6}>
              <label>
                Nombre del Evento: 
              </label>
              <input
                className="form-control"
                name="nombre_evento"
                type="text"
                onChange={this.handleChange}
              />
            </Box>
          
            <Box className="descripcion" xs={6} mt={0.8}>
              <label>
                Descripción: 
              </label>
              <textarea  className="form-control descripcion-input" cols="30" rows="10"  
                name="descripcion_evento"
                type="text"
                onChange={this.handleChange}>
              </textarea>  
            </Box>

            <Box className="lider" xs={6}>
              <label>
                Lider: 
              </label>
              <input
                className="form-control"
                name="lider"
                type="text"
                onChange={this.handleChange}
              />
            </Box>


            <Box  className="CamposInferiores" xs={12} mt={0.8}>

              <Box className="InLine Modalidad" xs={4}>     
                <label>
                  Modalidad 
                </label>
                <select className=" form-control" name="modalidad_evento" onChange={this.handleChange}>
                  <option value="Presencial" name="modalidad_evento">Presencial</option>
                  <option value="Virtual" name="modalidad_evento">Virtual</option>                
                </select>
              </Box>

              <Box className="InLine Lugar" xs={4}>
                <label>
                  Lugar
                </label>
                <input
                  className="form-control"
                  name="lugar_evento"
                  type="text"
                  onChange={this.handleChange}
                />
              </Box>

              <Box className="InLine Fecha" xs={4}>
                <label>
                  Fecha
                </label>
                <input
                  className="form-control"
                  name="fecha_evento"
                  type="date"
                  onChange={this.handleChange}
                />
              </Box>
            </Box>

            <Box  className="CamposMedios" xs={12} mt={0.8}>
              <Box className="InLine Categoria" xs={4}>     
                <label>
                  Categoria 
                </label>
                <input
                  className="form-control"
                  name="categoria"
                  type="text"
                  onChange={this.handleChange}
                />
              </Box>

              <Box className="InLine HoraInicio" xs={4}>
                <label>
                  Hora Inicio
                </label>
                <input
                  className="form-control"
                  name="hora_inicio"
                  type="time"
                  onChange={this.handleChange}
                />
              </Box>

              <Box className="InLine HoraFin" xs={4}>
                <label>
                  Hora Fin
                </label>
                <input
                  className="form-control"
                  name="hora_fin"
                  type="time"
                  onChange={this.handleChange}
                />
              </Box>
            </Box>

            <div className="CamposBotones">
            <Button className="BtnRegistrar" onClick={() => this.peticionPost()}> Registrar Evento </Button>
              <Button className="BtnCancelar" ><Link to="/eventos"> Cancelar</Link> </Button>

            </div>
            <Box   xs={12} mt={2}> 
              
            </Box>


          </form>

        </Container>
      </>
    );
  }
}
export default crearEvento;
