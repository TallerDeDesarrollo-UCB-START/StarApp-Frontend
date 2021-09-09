import React, { Fragment } from 'react';
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

const data = [
    { id: 1, nombre: "pepe", email: "pepe@gmail.com" ,edad: 20},
];

class FormEditP extends React.Component {
    state = {
      data: data,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        id: "",
        nombre: "",
        email: "",
        edad:""
      },
    };
    mostrarModalActualizar = (dato) => {
        this.setState({
          form: dato,
          modalActualizar: true,
        });
    };
    
    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };
    
    mostrarModalInsertar = () => {
        this.setState({
          modalInsertar: true,
        });
    };
    
    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
          if (dato.id == registro.id) {
            arreglo[contador].nombre = dato.nombre;
            arreglo[contador].email = dato.email;
            arreglo[contador].edad = dato.edad;
            
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    handleChange = (e) => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
    };

    render(){
        return(
        <Fragment>
            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <Modal isOpen={this.state.modalActualizar}>
                <ModalHeader>
                    <div><h3>Editar Perfil</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        
            
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            value={this.state.form.id}
                        />
                    </FormGroup>
            
                    <FormGroup>
                        <label>
                            Nombre: 
                        </label>
                        <input
                            className="form-control"
                            name="nombre"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.form.nombre}
                        />
                    </FormGroup>
            
                    <FormGroup>
                        <label>
                            Email: 
                        </label>
                        <input
                            className="form-control"
                            name="email"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.form.email}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Edad: 
                        </label>
                        <input
                            className="form-control"
                            name="edad"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.form.edad}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button
                    color="primary"
                    onClick={() => this.editar(this.state.form)}
                    >
                    Editar
                    </Button>
                    <Button
                    color="danger"
                    onClick={() => this.cerrarModalActualizar()}
                    >
                    Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </Fragment>
        )
    }
}
export default FormEditP;