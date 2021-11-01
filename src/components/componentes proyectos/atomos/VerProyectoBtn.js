// Componentes:
import './VerProyectoBtn.css';
// Librerias-Paquetes-Estilos:
import { Link } from "react-router-dom";
import { Button} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";


function VerProyectoBtn({proyecto}) {
    return (
        <VerButton variant="contained">
            <Link to={"projects/" + proyecto.id}>Ver detalles</Link>
        </VerButton>
    )
}

const VerButton = withStyles((theme) => ({
    root: {
      backgroundColor: "#3C4858",
      color: "#FFFFFF",
      whiteSpace: 'nowrap',
      minWidth: "13%",
      width: '17%',
    },
  }))(Button);

export default VerProyectoBtn