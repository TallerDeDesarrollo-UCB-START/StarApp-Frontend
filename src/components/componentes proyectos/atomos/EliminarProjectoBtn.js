// Componentes:
import './EliminarProjectoBtn.css'
// Librerias-Paquetes-Estilos:
import { Button } from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";

function EliminarProjectoBtn({proyecto, onEliminarProy}) {
    return (
        <DeleteButton variant="contained"
            onClick={() => onEliminarProy(proyecto.id)}
        >
            Eliminar
        </DeleteButton>
    )
}

const DeleteButton = withStyles((theme) => ({
    root: {
      backgroundColor: "#ED2020",
      width: '20%',
      color: "#FFFFFF",
      "&:hover": {
        backgroundColor: "#a90e0e",
      },
    },
  }))(Button);
export default EliminarProjectoBtn
