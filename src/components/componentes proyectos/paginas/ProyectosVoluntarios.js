// Componentes:
import HeaderProyectos from '../organismos/HeaderProyectos'
import BodyProyectos from '../organismos/BodyProyectos'
// Librerias-Paquetes:
import { Container } from '@material-ui/core';


function ProyectosVoluntarios() {
    // Aqui arriba se hace el fetch para obtener los proyectos
    // Estos proyectos seran pasados al BodyProyectos como una propiedad
    // Preferiblemente usando el "useState hook" de react.
    return (
        <Container>
            <HeaderProyectos />
            <BodyProyectos />
        </Container>
    );
}

export default ProyectosVoluntarios