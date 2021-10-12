// Componentes:
// Librerias-Paquetes:
import './ProyectoDetalle.css';
import '../moleculas/BannerProyectoDetalle'
import { Box } from '@material-ui/core';


function ProyectoDetalle({proyecto}) {
    return (
        <Box className="content-container-detalle" class="box-proyecto">
            <BannerProyectoDetalle>
                <p>Proyecto: {proyecto.titulo}</p>
                <p>Objetivo: {proyecto.objetivo}</p>
                <p>Descripción: {proyecto.descripcion}</p>
                <p>Líder: {proyecto.lider}</p>
            </BannerProyectoDetalle>
        </Box>
    );
}

export default ProyectoDetalle