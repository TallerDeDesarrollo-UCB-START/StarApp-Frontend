// Componentes:
import HeaderProyectos from '../organismos/HeaderProyectos'
import BodyProyectos from '../organismos/BodyProyectos'
// Librerias-Paquetes:
import { Box } from '@material-ui/core';
import SelectFiltroCategoria from '../atomos/SelectFiltroCategoria';

// DIEGO
//victor y Merce
function ProyectosVoluntarios({proyectos, rol, onPartiparProy, onGetParticipacion, onCancelarParticipacion, onFiltroProy, onNumeroParticipantes}) {
    return (
        <Box style={styles}>
            <HeaderProyectos />
            <SelectFiltroCategoria onFiltroProy={onFiltroProy}/>
            <BodyProyectos rol = {rol}
                            proyectos={proyectos}
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

export default ProyectosVoluntarios