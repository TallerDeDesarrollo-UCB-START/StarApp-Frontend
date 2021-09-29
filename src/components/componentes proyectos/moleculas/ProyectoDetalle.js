// Componentes:
// Librerias-Paquetes:
import './ProyectoDetalle.css';
import { Box } from '@material-ui/core';


function ProyectoDetalle({proyecto}) {
    return (
        <Box className="content-container-detalle"> {/*agregar estilos y tamaño de box*/}
            {/*{proyecto.titulo}*/}
            {/*{proyecto.objetivo}*/}
            {/*{proyecto.descripcion}*/}
            {/*{proyecto.lider}*/}
        </Box>
    );
}

export default ProyectoDetalle