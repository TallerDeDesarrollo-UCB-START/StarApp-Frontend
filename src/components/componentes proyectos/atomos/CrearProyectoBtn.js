// Componentes:
import './CrearProyectoBtn.css';
// Librerias-Paquetes-Estilos:

function CrearProyectoBtn({onActivarForm}) {
    return (
        <button className="createButton" onClick={onActivarForm}>
            Crear proyecto
        </button>
    )
}

export default CrearProyectoBtn
