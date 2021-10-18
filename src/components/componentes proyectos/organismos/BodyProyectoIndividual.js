// Componentes:
import ProyectoDetalle from '../moleculas/ProyectoDetalle'
import './BodyProyectos.css';
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

function BodyProyectoIndividual({proyecto}) {
    
    return (
        <Box className="body-container">
            {
                proyecto.map(proyecto => (
                    <ProyectoDetalle key={proyecto.id} 
                    proyecto={proyecto} />
                ))
            }
        </Box>
    );
}
export default BodyProyectoIndividual