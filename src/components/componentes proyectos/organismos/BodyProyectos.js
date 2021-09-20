// Componentes:
import ProyectoVoluntario from '../moleculas/ProyectoVoluntario'
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// diego
function BodyProyectos({proyectos}) {
    return (
        <Box>
            {
                proyectos.map(proyecto => (
                    <ProyectoVoluntario key={proyecto.id} proyecto={proyecto} />
                ))
            }
        </Box>
    );
}

export default BodyProyectos