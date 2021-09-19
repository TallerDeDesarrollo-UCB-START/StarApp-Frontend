// Componentes:
import BannerProyecto from '../moleculas/BannerProyecto'
import ContenidoProyecto from '../moleculas/ContenidoProyecto'

// Librerias-Paquetes:
import { Container } from '@material-ui/core';


function ProyectoVoluntario() {
    return (
        <Container>
            <BannerProyecto />
            <ContenidoProyecto />
        </Container>
    );
}

export default ProyectoVoluntario