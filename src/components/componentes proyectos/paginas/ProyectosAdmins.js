// Componentes:
import HeaderProyectosAdmin from '../organismos/HeaderProyectosAdmin'
import BodyProyectos from '../organismos/BodyProyectos'
// Librerias-Paquetes:
import { Box } from '@material-ui/core';


function ProyectosAdmins({proyectos}) {

    return (
        <Box style={styles}>
            <HeaderProyectosAdmin />
            <BodyProyectos proyectos={proyectos}/>
        </Box>
    );
}

const styles= {
    minHeight: "650px",
    border: "4px solid orange"
}

export default ProyectosAdmins