// Componentes:
import CrearProyectoBtn from '../atomos/CrearProyectoBtn'

// Librerias-Paquetes-Estilos:
import './HeaderProyectos.css';
import { Container } from '@material-ui/core';


// MERCE - VIC
// Acomoden el h1  y  el  boton  como esta en el figma
// en la seccion de historias de usuario
function HeaderProyectosAdmin() {
    return (
        <Container class="header-container">
            <h1>PROYECTOS</h1>
            <CrearProyectoBtn />
        </Container>
    );
}

export default HeaderProyectosAdmin