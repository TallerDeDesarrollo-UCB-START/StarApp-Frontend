// Componentes:
import HeaderProyectosAdmin from '../organismos/HeaderProyectosAdmin'
import BodyProyectos from '../organismos/BodyProyectos'
import FormularioCrearProyecto from '../moleculas/FormularioCrearProyecto'
// Librerias-Paquetes:
import { Box } from '@material-ui/core';


function ProyectosAdmins({proyectos}) {

    return (
        <Box style={styles}>
            <HeaderProyectosAdmin />
            <FormularioCrearProyecto/>
            <BodyProyectos proyectos={proyectos}/>
        </Box>
    );
}

const styles= {
    minHeight: "650px"
    //border: "4px solid orange"
}

export default ProyectosAdmins