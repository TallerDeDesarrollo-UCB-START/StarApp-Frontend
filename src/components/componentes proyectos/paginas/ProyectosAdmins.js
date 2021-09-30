// Componentes:
import HeaderProyectosAdmin from '../organismos/HeaderProyectosAdmin'
import BodyProyectos from '../organismos/BodyProyectos'
import FormularioCrearProyecto from '../moleculas/FormularioCrearProyecto'
// Librerias-Paquetes:
import {useState} from 'react'
import { Box } from '@material-ui/core';


function ProyectosAdmins({proyectos, onCrearProy, onEliminarProy, onPartiparProy}) {
    // Hooks
    const [mostrarFormCrear, setMostrarFormCrear] = useState(false)

    // Funciones
    const activarFormCrear = () => {
        setMostrarFormCrear(!mostrarFormCrear);
    }

    //Componentes
    const FormularioCrear = mostrarFormCrear===true ? <FormularioCrearProyecto onCrearProy={onCrearProy} onActivarForm={activarFormCrear}/> : <></>

    return (
        <Box style={styles}>
            <HeaderProyectosAdmin onActivarForm={activarFormCrear}/>
            {FormularioCrear}
            <BodyProyectos proyectos={proyectos} onEliminarProy={onEliminarProy} onPartiparProy={onPartiparProy}/>
        </Box>
    );
}

const styles= {
    minHeight: "650px"
    //border: "4px solid orange"
}

export default ProyectosAdmins