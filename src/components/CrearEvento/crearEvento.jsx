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
  { id: 1, evento: "EVENTO 1", descripcion: "descripcion 1", lugar: "CBBA", fecha: "2021-09-01"},
  { id: 2, evento: "EVENTO 2", descripcion: "descripcion 2",lugar: "CBBA", fecha: "2021-09-14" },
  { id: 3, evento: "EVENTO 3", descripcion: "descripcion 3",lugar: "CBBA",fecha: "2021-09-14" },
];

class crearEvento extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      evento: "",
      descripcion: "",
      modalidad: "",
      lugar: "",
      fecha: "",
    },
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  peticionPost=async ()=>{
    await axios.post(url,this.state.form).then(response=>{
      this.modalInsertar();
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
                <th>ID</th>
                <th>Evento</th>
                <th>Descripción</th>
                <th>Modalidad</th>
                <th>Lugar</th>
                <th>Fecha</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.evento}</td>
                  <td>{dato.descripcion}</td>
                  <td>{dato.modalidad}</td>
                  <td>{dato.lugar}</td>
                  <td>{dato.fecha}</td>
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
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Evento: 
              </label>
              <input
                className="form-control"
                name="evento"
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
                name="descripcion"
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
                name="descripcion"
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
                name="lugar"
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
                name="fecha"
                type="date"
                onChange={this.handleChange}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}> Registrar Evento </Button>
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