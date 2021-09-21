import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import axios from "axios";


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
    modalInsertar: false,
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

          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Modalidad</th>
                <th>Lugar</th>
                <th>Fecha</th>
                <th>Proyecto</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id_evento}>
                  <td>{dato.nombre_evento}</td>
                  <td>{dato.descripcion_evento}</td>
                  <td>{dato.modalidad_evento}</td>
                  <td>{dato.lugar_evento}</td>
                  <td>{dato.fecha_evento}</td>
                  <td>{dato.proyecto}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button color="success"  onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
        </Container>

    
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
              <label>
                Modalidad: 
              </label>
              <input
                className="form-control"
                name="modalidad_evento"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Lugar: 
              </label>
              <input
                className="form-control"
                name="lugar_evento"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Fecha: 
              </label>
              <input
                className="form-control"
                name="fecha_evento"
                type="date"
                onChange={this.handleChange}
              />
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

          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.peticionPost()}> Registrar Evento </Button>
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