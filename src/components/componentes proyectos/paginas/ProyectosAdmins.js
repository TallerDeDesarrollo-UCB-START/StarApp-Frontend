// Componentes:
import HeaderProyectosAdmin from '../organismos/HeaderProyectosAdmin'
import BodyProyectos from '../organismos/BodyProyectos'
import FormularioCrearProyecto from '../moleculas/FormularioCrearProyecto'
import FormularioEditarProyecto from '../moleculas/FormularioEditarProyecto'
// Librerias-Paquetes:
import {useState} from 'react'
import { Box } from '@material-ui/core';


function ProyectosAdmins({proyectos, onCrearProy, onEliminarProy, onPartiparProy, onEditarProy, onGetParticipacion}) {
    // Hooks
    const [mostrarFormCrear, setMostrarFormCrear] = useState(false)
    const [mostrarFormEditar, setMostrarFormEditar] = useState(false)
    const [proyectoEditar, setProyectoEditar] = useState({})

    // Funciones
    const activarFormCrear = () => {
        setMostrarFormCrear(!mostrarFormCrear);
    }

    const activarFormEditar = (proyecto) => {
        setProyectoEditar(proyecto)
        setMostrarFormEditar(!mostrarFormEditar);
    }

    //Componentes
    const FormularioCrear = mostrarFormCrear===true ? <FormularioCrearProyecto onCrearProy={onCrearProy} onActivarForm={activarFormCrear}/> : <></>
    const FormularioEditar = mostrarFormEditar===true ? <FormularioEditarProyecto onEditarProy={onEditarProy} onActivarForm={activarFormEditar} proyecto={proyectoEditar}/> : <></>

    return (
        <Box style={styles}>
            <HeaderProyectosAdmin onActivarForm={activarFormCrear}/>
            {FormularioCrear}
            {FormularioEditar}
            <BodyProyectos proyectos={proyectos} 
                            onEliminarProy={onEliminarProy} 
                            onActivarForm={activarFormEditar}
                            onPartiparProy={onPartiparProy}
                            onGetParticipacion={onGetParticipacion}/>
        </Box>
    );
}

const styles= {
    minHeight: "650px"
    //border: "4px solid orange"
}

export default ProyectosAdmins