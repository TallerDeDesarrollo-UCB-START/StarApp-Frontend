// Componentes:
import './VerProyectoBtn.css';
// Librerias-Paquetes-Estilos:
import { Link } from "react-router-dom";


function VerProyectoBtn({proyecto}) {
    return (
        <button>
            <Link to={"projects/" + proyecto.id}>VER PROYECTO</Link>
        </button>
    )
}

export default VerProyectoBtn