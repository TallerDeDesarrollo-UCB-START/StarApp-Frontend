// Componentes:
import './EditarProyectoBtn.css'
// Librerias-Paquetes-Estilos:

function EditarProyectoBtn({onActivarForm, obtenerProyecto, key}) {
    const click = () => {
        onActivarForm()
        obtenerProyecto(key)
    }
    return (
        <button className="editarButton" onClick={click}>
            Editar
        </button>
    )
}

export default EditarProyectoBtn