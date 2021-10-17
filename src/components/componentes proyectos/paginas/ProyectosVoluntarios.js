// Componentes:
import HeaderProyectos from '../organismos/HeaderProyectos'
import BodyProyectos from '../organismos/BodyProyectos'
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// DIEGO
//victor y Merce
function ProyectosVoluntarios({proyectos, rol, onPartiparProy, onGetParticipacion}) {
    return (
        <Box style={styles}>
            <HeaderProyectos />
            <BodyProyectos rol = {rol}
                            proyectos={proyectos}
                            onPartiparProy={onPartiparProy}
                            onGetParticipacion={onGetParticipacion}/>
        </Box>
    );
}

const styles= {
    minHeight: "650px"
    //border: "4px solid orange"
}

export default ProyectosVoluntarios