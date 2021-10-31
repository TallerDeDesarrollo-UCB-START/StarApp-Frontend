// Componentes:
import { makeStyles } from '@material-ui/core/styles';
import HeaderCategoriasProyectos from '../organismos/HeaderCategoriasProyectos'
import ContenidoCategoriasProyectos from '../organismos/ContenidoCategoriasProyectos'
import { Container } from '@material-ui/core';
// Permisos/Roles:

// Librerias-Paquetes:

const useStyles = makeStyles(() => ({
    container: {
        width: '98%',
    },
}));

function VistaCategoriasProyectos() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <HeaderCategoriasProyectos/>
            <ContenidoCategoriasProyectos/>
        </Container>
    );
}
export default VistaCategoriasProyectos;