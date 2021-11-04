// Componentes:
import './VerProyectoBtn.css';
// Librerias-Paquetes-Estilos:
import { Link } from "react-router-dom";
import { Button} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";


function VerProyectoBtn({proyecto}) {
    return (
        <Link className="ver-button" to={"projects/" + proyecto.id}>Ver detalles</Link>
    )
}

export default VerProyectoBtn