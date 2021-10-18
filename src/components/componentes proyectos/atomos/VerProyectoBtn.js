// Componentes:
import './VerProyectoBtn.css';
// Librerias-Paquetes-Estilos:
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";


function VerProyectoBtn({proyecto}) {
    return (
        <VerButton variant="contained" color="primary">
            <Link to={"projects/" + proyecto.id}>VER PROYECTO</Link>
        </VerButton>
    )
}

const VerButton = withStyles((theme) => ({
    root: {
      marginRight: 10,
      marginLeft: 10,
    },
  }))(Button);

export default VerProyectoBtn