// Componentes:
import CrearProyectoBtn from '../atomos/CrearProyectoBtn'

// Librerias-Paquetes-Estilos:
import './HeaderProyectos.css';
import { Container } from '@material-ui/core';


// MERCE - VIC
// Acomoden el h1  y  el  boton  como esta en el figma
// en la seccion de historias de usuario
function HeaderProyectosAdmin({onActivarForm}) {
    return (
        <Container class="header-container">
            <div class="borderHeader-conatiner"></div>
            <div class="textHeader-container">
                <h1>PROYECTOS</h1>
            </div>
            <CrearProyectoBtn onActivarForm={onActivarForm}/>
        </Container>
    );
}

export default HeaderProyectosAdmin