// Componentes:
import InputCrearProyecto from '../atomos/InputCrearProyecto'
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn'
import CrearProyectoBtn from '../atomos/CrearProyectoBtn'
// Librerias-Paquetes:
import { Container, FormControl, InputLabel, Input, FormHelperText, Grid, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// Kevin y Pame
function FormularioCrearProyecto() {
    return (
        <Container sx={{ m: 5 }} style={styles}>
            <Typography color="primary" align="left" variant="h3" component="h2" gutterBottom >
                                Llenar formulario del Proyecto
            </Typography> 
            <InputCrearProyecto name="Nombre"/>
            <InputCrearProyecto name="Objetivo"/>
            <InputCrearProyecto name="Descripcion"/>
            <InputCrearProyecto name="Lider"/>
            
            <CrearProyectoBtn/>
            
            {/*<CrearProyectoBtn>*/}
        </Container>
    );
}

const styles = {
    border: '1px solid grey',
    width: "50%"
}

const formstyles={ width: '100%' }

export default FormularioCrearProyecto


/*
const styles = {
    position: 'absolute',
    top: '50%',
    left: "35%",
    width: "437px",
    height: '397px',
    border: '1px solid grey'
}
*/

/*


            <Container style={styles}>
            <Grid container alignItems="center" direction="column">
                
                <Grid item md={12} >
                    <Box style={formstyles}>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="titulo">Titulo</InputLabel>
                            <Input id="titulo" aria-describedby="titulo-helper"></Input>
                            <FormHelperText id="titulo-helper">Titulo del proyecto</FormHelperText>
                        </FormControl>
                    </Box>
                    
                </Grid>
                
                
            </Grid>
        </Container>


*/

/*
<Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off"
            style={styles}>
            
            <div >
                <TextField id="outlined-basic" label="Titulo" variant="outlined" size="small"/>
            </div>
            
        </Box>
*/