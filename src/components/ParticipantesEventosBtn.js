import { Box } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import ExportExcel from "react-export-excel";
import MyButton from "./button";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;
const url = process.env.REACT_APP_API;
class ListaParticipantesProyecto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      inicio: "",
      fin: "",
    };
  }

  componentDidMount() {
    let thisUrl = window.location.href;
    let id = this.getId(thisUrl);
    axios
      .get(`${url}eventos/participantes/${id}`)
      .then((response) => {
        this.setState({ posts: response.data });
        this.setState({
          inicio:
            "Hora inicio: " + response.data[0].hora_inicio.substring(0, 10),
        });
        let fin = response.data[0].hora_fin;
        console.log(fin);
        if (fin == null) {
          this.setState({ fin: "Hora fin: en progreso " });
        } else {
          this.setState({ fin: "Hora fin: " + fin });
        }
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
  getId(thisUrl) {
    var id = thisUrl.substring(thisUrl.indexOf("/") + 1);
    id = thisUrl.split("/").pop();
    return id;
  }

  render() {
    const { posts } = this.state;
    //const { inicio } = this.state;
    //const { fin } = this.state;
    return (
      <Box>
        <ExcelFile
          element={<MyButton className="excel">Exportar Participantes</MyButton>}
          filename="ListaParticipantes"
        >
          <ExcelSheet data={posts} name="Participantes">
            <ExcelColumn label="Evento" value="nombre_evento" />
            <ExcelColumn label="Hora Inicio" value="hora_inicio" />
            <ExcelColumn label="Hora Fin" value="hora_fin" />
            <ExcelColumn label="Nombre" value="nombre" />
            <ExcelColumn label="Apellido" value="apellido" />
            <ExcelColumn label="Rol" value="rol" />
            <ExcelColumn label="Teléfono" value="telefono" />
          </ExcelSheet>
        </ExcelFile>
      </Box>
    );
  }
}

export default ListaParticipantesProyecto;
