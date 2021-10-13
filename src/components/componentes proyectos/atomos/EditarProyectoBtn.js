// Componentes:
import './EditarProyectoBtn.css'
// Librerias-Paquetes-Estilos:
import { Button } from '@material-ui/core';
import { makeStyles, withStyles} from "@material-ui/core/styles";

function EditarProyectoBtn({onActivarForm, proyecto}) {
    const click = () => {
        onActivarForm(proyecto)
    }
    return (
        <EditarButton variant="contained" color="primary" onClick={click}>
            Editar
        </EditarButton>
    )
}

const EditarButton = withStyles((theme) => ({
    root: {
      marginRight: 10,
      marginLeft: 10,
    },
  }))(Button);

export default EditarProyectoBtn