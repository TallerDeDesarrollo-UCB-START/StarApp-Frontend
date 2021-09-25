// Componentes:
import InputCrearProyecto from '../atomos/InputCrearProyecto'
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn'
// Librerias-Paquetes:
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

function FormularioCrearProyecto() {
    return (

        <Box sx={{ m: 5 }} >
            <Typography color="primary" align="left" variant="h3" component="h2" gutterBottom >
                                Llenar formulario del Proyecto
            </Typography> 
            <InputCrearProyecto name="Nombre"/>
            <InputCrearProyecto name="Objetivo"/>
            <InputCrearProyecto name="Descripcion"/>
            <InputCrearProyecto name="Lider del proyecto"/>
            
            <ParticiparEnProyectoBtn/>
            
            {/*<CrearProyectoBtn />*/}
        </Box>
    );
}


export default FormularioCrearProyecto
