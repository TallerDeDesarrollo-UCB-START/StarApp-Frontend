// Componentes:
import './VerProyectoBtn.css';
// Librerias-Paquetes-Estilos:

function VerProyectoBtn({onActivarForm}) {
    return (
        <button className="createButton" onClick={onActivarForm}>
            Ver proyecto
        </button>
    )
};

export default VerProyectoBtn