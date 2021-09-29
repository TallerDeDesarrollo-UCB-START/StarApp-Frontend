// Componentes:
import HeaderProyectos from '../organismos/HeaderProyectos'
import BodyProyectosNormal from '../organismos/BodyProyectosNormal'
// Librerias-Paquetes:
import { Box } from '@material-ui/core';


function ProyectosVoluntarios({proyectos}) {

    return (
        <Box style={styles}>
            <HeaderProyectos />
            <BodyProyectosNormal proyectos={proyectos}/>
        </Box>
    );
}

const styles= {
    minHeight: "650px"
    //border: "4px solid orange"
}

export default ProyectosVoluntarios