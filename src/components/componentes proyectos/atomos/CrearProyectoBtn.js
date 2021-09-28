// Componentes:
import './CrearProyectoBtn.css';
// Librerias-Paquetes-Estilos:
import { Container } from '@material-ui/core';

function CrearProyectoBtn({onActivarForm}) {
    return (
        <button className="createButton" onClick={onActivarForm}>
            Crear proyecto
        </button>
    )
}

export default CrearProyectoBtn
