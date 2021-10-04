// Componentes:
import './EditarProyectoBtn.css'
// Librerias-Paquetes-Estilos:

function EditarProyectoBtn({onActivarForm, proyecto}) {
    const click = () => {
        onActivarForm(proyecto)
    }
    return (
        <button className="editarButton" onClick={click}>
            Editar
        </button>
    )
}

export default EditarProyectoBtn