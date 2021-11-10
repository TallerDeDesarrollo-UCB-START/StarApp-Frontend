// Componentes:
import CrearProyectoBtn from '../atomos/CrearProyectoBtn'
import ProyectosPasadosBtn from '../atomos/ProyectosPasadosBtn'
import VolverProyectoBtn from '../atomos/VolverProyectoBtn';
// Librerias-Paquetes-Estilos: 
import './HeaderProyectos.css';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    far_right: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '3%'
    },
});

function HeaderProyectosAdmin({onActivarForm, tituloHeader}) {
    const classes = useStyles()
    const complementoTitulo = tituloHeader? tituloHeader : ''
    return (
        <Container >
                <Box>
                    <VolverProyectoBtn/>
                </Box>
                <Grid container justifyContent="space-between" alignItems={"center"}>
                    <Grid item xs={5} md={7}>
                        <h1>{`Proyectos ${complementoTitulo}`}</h1>
                    </Grid>
                    <Grid item xs={7} md={5} className={classes.far_right}>
                        <ProyectosPasadosBtn/>
                        <CrearProyectoBtn onActivarForm={onActivarForm}/>
                    </Grid>
                    
                </Grid>
        </Container>

    );
}

export default HeaderProyectosAdmin