// Componentes:
import ProyectoDetalle from '../moleculas/ProyectoDetalle'
import './BodyProyectos.css';
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

function BodyProyectoIndividual({proyecto}) {
    
    return (
        <Box className="body-container">
            {
                <ProyectoDetalle
                    proyecto={proyecto} />
            }
        </Box>
    );
}
export default BodyProyectoIndividual