// Componentes:
import './EliminarProjectoBtn.css'
// Librerias-Paquetes-Estilos:
import { Container } from '@material-ui/core';

function EliminarProjectoBtn({proyecto, onEliminarProy}) {
    return (
        <button className="eliminarButton" 
            onClick={() => onEliminarProy(proyecto.id)}
        >
            Eliminar
        </button>
    )
}

export default EliminarProjectoBtn
