// Componentes:
// Librerias-Paquetes:
import './ProyectoDetalle.css';
import '../moleculas/BannerProyectoDetalle'
import { Box } from '@material-ui/core';


function ProyectoDetalle({proyecto}) {
    return (
        <Box className="content-container-detalle"> {/*agregar estilos y tamaño de box*/}
            <BannerProyectoDetalle></BannerProyectoDetalle>
            {/*{proyecto.titulo}*/}
            {/*{proyecto.objetivo}*/}
            {/*{proyecto.descripcion}*/}
            {/*{proyecto.lider}*/}
        </Box>
    );
}

export default ProyectoDetalle