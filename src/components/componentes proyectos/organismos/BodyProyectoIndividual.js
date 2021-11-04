// Componentes:
import ProyectoDetalle from '../moleculas/ProyectoDetalle'
import VolverProyectoBtn from '../atomos/VolverProyectoBtn';
import './BodyProyectos.css';
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

function BodyProyectoIndividual({proyecto}) {
    
    return (
        <Box className="body-container">
            <VolverProyectoBtn/>
            {
                <ProyectoDetalle
                    proyecto={proyecto} />
            }
        </Box>
    );
}
export default BodyProyectoIndividual