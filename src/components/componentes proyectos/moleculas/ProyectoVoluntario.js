// Componentes:
import BannerProyecto from '../moleculas/BannerProyecto'
import ContenidoProyecto from '../moleculas/ContenidoProyecto'
import './ProyectoVoluntario.css';

// Librerias-Paquetes:
import { Container } from '@material-ui/core';

// Diego
function ProyectoVoluntario({proyecto}) {
    return (
        <Container class = "container">
            <BannerProyecto/>
            <ContenidoProyecto proyecto={proyecto}/>
        </Container>
    );
}
//styles flex ...?
export default ProyectoVoluntario