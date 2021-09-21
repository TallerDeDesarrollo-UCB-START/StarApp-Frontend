// Componentes:
import BannerProyecto from '../moleculas/BannerProyecto'
import ContenidoProyecto from '../moleculas/ContenidoProyecto'

// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// Diego
function ProyectoVoluntario({proyecto}) {
    return (
        <Box style={styles}>
            <BannerProyecto />
            <ContenidoProyecto proyecto={proyecto}/>
        </Box>
    );
}

const styles = {
    border: "6px solid yellow",
    height: "150px",
    marginBottom: "2%"
}

export default ProyectoVoluntario