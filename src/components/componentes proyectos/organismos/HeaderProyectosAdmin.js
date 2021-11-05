// Componentes:
import CrearProyectoBtn from '../atomos/CrearProyectoBtn'
import ProyectosPasadosBtn from '../atomos/ProyectosPasadosBtn'
// Librerias-Paquetes-Estilos: 
import './HeaderProyectos.css';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    far_right: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '3%'
    },
  });

function HeaderProyectosAdmin({onActivarForm, tituloHeader}) {
    const classes = useStyles()
    const categoria = tituloHeader? tituloHeader : ''
    return (
        <Container >
                <Grid container justifyContent="space-between" alignItems={"center"}>
                    <Grid item xs={5} md={7}>
                        <h1>{`Proyectos ${categoria}`}</h1>
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