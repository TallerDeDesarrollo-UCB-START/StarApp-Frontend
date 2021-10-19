// Componentes:
import './VerProyectoBtn.css';
// Librerias-Paquetes-Estilos:
import { Link } from "react-router-dom";
import { Button} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";


function VerProyectoBtn({proyecto}) {
    return (
        <VerButton variant="contained">
            <Link to={"projects/" + proyecto.id}>VER MÁS</Link>
        </VerButton>
    )
}

const VerButton = withStyles((theme) => ({
    root: {
      backgroundColor: "#3C4858",
      color: "#FFFFFF",
      marginRight: "35%",
      marginLeft: "1%",
      minWidth: "15%"
    },
  }))(Button);

export default VerProyectoBtn