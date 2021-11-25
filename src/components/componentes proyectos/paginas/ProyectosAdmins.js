// Componentes:
import HeaderProyectosAdmin from '../organismos/HeaderProyectosAdmin';
import HeaderProyectosPasados from '../organismos/HeaderProyectosPasados';
import BodyProyectos from '../organismos/BodyProyectos'
//import FormularioCrearProyecto from '../moleculas/FormularioCrearProyecto'
import FormularioEditarProyecto from '../moleculas/FormularioEditarProyecto'
// Librerias-Paquetes:
import {useState} from 'react'
import { Box } from '@material-ui/core';


function ProyectosAdmins({proyectos, rol, onEliminarProy, onPartiparProy, onEditarProy, onGetParticipacion, onCancelarParticipacion, onNumeroParticipantes, tituloHeader, proyectosPasadosCategoria}) {
    // Hooks
    const [mostrarFormEditar, setMostrarFormEditar] = useState(false)
    const [proyectoEditar, setProyectoEditar] = useState({})

    // Funciones

    const activarFormEditar = (proyecto) => {
        setProyectoEditar(proyecto)
        setMostrarFormEditar(!mostrarFormEditar);
    }

    //Componentes
    const FormularioEditar = mostrarFormEditar===true ? <FormularioEditarProyecto onEditarProy={onEditarProy} onActivarForm={activarFormEditar} proyecto={proyectoEditar} mostrarFormEditar={mostrarFormEditar}/> : <></>

    return (
        <Box style={styles}>
            <HeaderProyectosAdmin tituloHeader={tituloHeader}/>
            {FormularioEditar}
            <BodyProyectos rol={rol}
                            proyectos={proyectos} 
                            onEliminarProy={onEliminarProy} 
                            onActivarForm={activarFormEditar}
                            onPartiparProy={onPartiparProy}
                            onGetParticipacion={onGetParticipacion}
                            onCancelarParticipacion={onCancelarParticipacion}
                            onNumeroParticipantes={onNumeroParticipantes}/>
            <HeaderProyectosPasados/>
            <BodyProyectos rol={rol}
                            proyectos={proyectosPasadosCategoria} 
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