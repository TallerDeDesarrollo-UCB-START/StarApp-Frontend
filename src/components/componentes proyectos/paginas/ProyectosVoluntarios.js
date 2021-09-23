// Componentes:
import HeaderProyectos from '../organismos/HeaderProyectos'
import BodyProyectos from '../organismos/BodyProyectos'
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// DIEGO
function ProyectosVoluntarios({proyectos}) {

    return (
        <Box style={styles}>
            <HeaderProyectos />
            <BodyProyectos proyectos={proyectos}/>
        </Box>
    );
}

const styles= {
    minHeight: "650px",
    border: "4px solid orange"
}

export default ProyectosVoluntarios