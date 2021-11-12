// Componentes:
import './EliminarProjectoBtn.css'
// Librerias-Paquetes-Estilos:
import { Button } from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function EliminarProjectoBtn({proyecto, onEliminarProy}) {
    return (
        <DeleteButton onClick={() => onEliminarProy(proyecto.id)}>
          <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </DeleteButton>
    )
}

const DeleteButton = withStyles((theme) => ({
    root: {
      backgroundColor: "#E3E3E3",
      borderRadius: '40px',
    },
  }))(Button);
export default EliminarProjectoBtn
