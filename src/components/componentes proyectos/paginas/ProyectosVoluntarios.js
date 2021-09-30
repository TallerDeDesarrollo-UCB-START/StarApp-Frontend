// Componentes:
import HeaderProyectos from '../organismos/HeaderProyectos'
import BodyProyectosNormal from '../organismos/BodyProyectosNormal'
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// DIEGO
//victor y Merce
function ProyectosVoluntarios({proyectos, onPartiparProy}) {
    return (
        <Box style={styles}>
            <HeaderProyectos />
            <BodyProyectosNormal proyectos={proyectos} onPartiparProy={onPartiparProy}/>
        </Box>
    );
}

const styles= {
    minHeight: "650px"
    //border: "4px solid orange"
}

export default ProyectosVoluntarios