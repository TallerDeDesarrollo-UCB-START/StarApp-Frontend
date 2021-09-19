// Componentes:
import ProyectoVoluntario from '../moleculas/ProyectoVoluntario'
// Librerias-Paquetes:
import { Container } from '@material-ui/core';


function BodyProyectos() {
    return (
        <Container>
            {
             // Aqui se hara un MAP junto a un Fetch, para obtener
             // todos los proyectos de la base de datos
             // y se pasaran sus datos correspondientemente como
             // props
            }
            <ProyectoVoluntario />
            <ProyectoVoluntario />
            <ProyectoVoluntario />
            <ProyectoVoluntario />
        </Container>
    );
}

export default BodyProyectos