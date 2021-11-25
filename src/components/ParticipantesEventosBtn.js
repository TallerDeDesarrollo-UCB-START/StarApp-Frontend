import React from "react";
import ReactExport from "react-export-excel";
import { Button } from "@material-ui/core";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

   

class Download extends React.Component {
  render() {
    return (
      <ExcelFile element={<Button>Descargar Lista</Button>}>
        <ExcelSheet data={dataSet1} name="Lista Peticipantes en eventos">
          <ExcelColumn label="Nombre" value="nombre" />
          <ExcelColumn label="Apellidos" value="apellido" />
          <ExcelColumn label="Rol" value="rol" />
          <ExcelColumn label="Celular" value="telefono" />
        </ExcelSheet>
      </ExcelFile>
    );
  }
}

export default Download;
