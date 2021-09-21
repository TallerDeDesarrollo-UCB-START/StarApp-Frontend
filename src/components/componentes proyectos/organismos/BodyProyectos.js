// Componentes:
import ProyectoVoluntario from '../moleculas/ProyectoVoluntario'
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// diego
function BodyProyectos({proyectos}) {
    return (
        <Box style={styles}>
            {
                proyectos.map(proyecto => (
                    <ProyectoVoluntario key={proyecto.id} proyecto={proyecto} />
                ))
            }
        </Box>
    );
}

const styles = {
    border: "3px solid green",
    width: "100%"
}

export default BodyProyectos