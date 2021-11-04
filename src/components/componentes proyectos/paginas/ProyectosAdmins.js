// Componentes:
import HeaderProyectosAdmin from '../organismos/HeaderProyectosAdmin'
import BodyProyectos from '../organismos/BodyProyectos'
import FormularioCrearProyecto from '../moleculas/FormularioCrearProyecto'
import FormularioEditarProyecto from '../moleculas/FormularioEditarProyecto'
import VolverProyectoBtn from '../atomos/VolverProyectoBtn'
// Librerias-Paquetes:
import {useState} from 'react'
import { Box } from '@material-ui/core';


function ProyectosAdmins({proyectos, rol, onCrearProy, onEliminarProy, onPartiparProy, onEditarProy, onGetParticipacion, onCancelarParticipacion, onNumeroParticipantes, tituloHeader}) {
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
    const FormularioCrear = mostrarFormCrear===true ? <FormularioCrearProyecto onCrearProy={onCrearProy} onActivarForm={activarFormCrear} mostrarFormCrear={mostrarFormCrear}/> : <></>
    const FormularioEditar = mostrarFormEditar===true ? <FormularioEditarProyecto onEditarProy={onEditarProy} onActivarForm={activarFormEditar} proyecto={proyectoEditar} mostrarFormEditar={mostrarFormEditar}/> : <></>

    return (
        <Box style={styles}>
            <HeaderProyectosAdmin onActivarForm={activarFormCrear} tituloHeader={tituloHeader}/>
            {FormularioCrear}
            {FormularioEditar}
            <VolverProyectoBtn/> 
            <BodyProyectos rol={rol}
                            proyectos={proyectos} 
                            onEliminarProy={onEliminarProy} 
                            onActivarForm={activarFormEditar}
                            onPartiparProy={onPartiparProy}
                            onGetParticipacion={onGetParticipacion}
                            onCancelarParticipacion={onCancelarParticipacion}
                            onNumeroParticipantes={onNumeroParticipantes}/>
        </Box>
    );
}

const styles= {
    minHeight: "650px"
    //border: "4px solid orange"
}

export default ProyectosAdmins