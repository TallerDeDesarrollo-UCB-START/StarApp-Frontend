// Componentes:
import { Box } from '@material-ui/core';
import TarjetaCategoriaProyecto from '../moleculas/TarjetaCategoriaProyecto'
// Permisos/Roles:

// Librerias-Paquetes:

const ambiental = 'https://media.istockphoto.com/photos/mount-hood-oregon-picture-id1268487061?b=1&k=20&m=1268487061&s=170667a&w=0&h=3fHYwaImlqUETcjCnSV7YO2-PzCFvaX6VSQaiGfWqpc='
const animalista = 'https://media.istockphoto.com/photos/female-veterinarian-holding-a-little-dog-in-her-arms-picture-id1280869192?b=1&k=20&m=1280869192&s=170667a&w=0&h=Fhsw2VrPIhhmKz1gSAjqS7lH_s0KNUSVO9-Obi7CFJE='
const social = 'https://media.istockphoto.com/photos/life-is-amazing-when-you-have-the-greatest-friends-around-picture-id648817898?b=1&k=20&m=648817898&s=170667a&w=0&h=9OGTLvfpfy4Ce4BM__-yDb9RlErBGJRMv7irZMhFLfY='
function ContenidoCategoriasProyectos() {

    return (
        <Box>
            <TarjetaCategoriaProyecto imagen={ambiental}/>
        </Box>
    );
}
export default ContenidoCategoriasProyectos;