// Componentes:
import './VerProyectoBtn.css';
// Librerias-Paquetes-Estilos:

function VerProyectoBtn({onActivarForm}) {
    return (
        <button className="viewButton" onClick={onActivarForm}>
            Ver proyecto
        </button>
    )
}

export default VerProyectoBtn