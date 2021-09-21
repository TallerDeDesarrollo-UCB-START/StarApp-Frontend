// Componentes:
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn'
// Librerias-Paquetes:
import { Container } from '@material-ui/core';

// Merce y Vic
function ContenidoProyecto({proyecto}) {
    return (
        <Container>
            {
                <span>Proyecto:</span>

                // Colocan lo que tengan que colocar...
                // El boton de participacion sera un componente atomico.
            }
            <ParticiparEnProyectoBtn />
        </Container>
    );
}

export default ContenidoProyecto