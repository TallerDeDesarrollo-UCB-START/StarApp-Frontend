// Componentes:
import BannerProyecto from '../moleculas/BannerProyecto'
import ContenidoProyecto from '../moleculas/ContenidoProyecto'

// Librerias-Paquetes:
import { Container } from '@material-ui/core';


function ProyectoVoluntario({proyecto}) {
    return (
        <Container>
            <BannerProyecto />
            <ContenidoProyecto proyecto={proyecto}/>
        </Container>
    );
}

export default ProyectoVoluntario