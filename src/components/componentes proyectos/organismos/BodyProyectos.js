// Componentes:
import ProyectoVoluntario from '../moleculas/ProyectoVoluntario'
import './BodyProyectos.css';
// Librerias-Paquetes:
import { Box } from '@material-ui/core';

// diego
function BodyProyectos({proyectos}) {
    return (
        <Box class="body-container">
            {
                proyectos2.map(proyecto => (
                    <ProyectoVoluntario key={proyecto.id} proyecto={proyecto} />
                ))
            }
        </Box>
    );
}

const proyectos2 = [
    {
        titulo: 'el agua es oro',
        descripcion: 'blablablalbalablbala',
        objetivo: 'blablablab',
        lider: 'pepe'
    },
    {
        titulo: 'el chirimbito',
        descripcion: 'blablablalbalablbala',
        objetivo: 'blablablab',
        lider: 'pedro'
    }
]

export default BodyProyectos
