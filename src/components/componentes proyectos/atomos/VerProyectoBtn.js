// Componentes:
import './VerProyectoBtn.css';
// Librerias-Paquetes-Estilos:
import { Link } from "react-router-dom";

function VerProyectoBtn({proyecto}) {
    return (
        <Link name={"detalle" + proyecto.titulo} className="ver-button" to={"projects/" + proyecto.id}>Ver detalles</Link>
    )
}

export default VerProyectoBtn