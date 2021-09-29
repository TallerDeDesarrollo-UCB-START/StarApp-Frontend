// Componentes:
import './ParticiparEnProyectoBtn.css';
// Librerias-Paquetes:
import { Container } from '@material-ui/core';

// Merce Vic
function ParticiparEnProyectoBtn( {proyecto,  onPartiparProy}) {
    return (
        <button className="participarButton"
            onClick={() => onPartiparProy(proyecto.id)}
        >
        Participar
        </button>
    );
}

export default ParticiparEnProyectoBtn