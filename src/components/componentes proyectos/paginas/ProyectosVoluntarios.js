// Componentes:
import HeaderProyectos from '../organismos/HeaderProyectos'
import BodyProyectos from '../organismos/BodyProyectos'
import VolverProyectoBtn from '../atomos/VolverProyectoBtn';
// Librerias-Paquetes:
import { Box } from '@material-ui/core';
import SelectFiltroCategoria from '../atomos/SelectFiltroCategoria';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// DIEGO
//victor y Merce
function ProyectosVoluntarios({proyectos, rol, onPartiparProy, onGetParticipacion, onCancelarParticipacion, onFiltroProy, onNumeroParticipantes, tituloHeader}) {
    const classes = useStyles();

    return (
        <Box style={styles}>
            <HeaderProyectos tituloHeader={tituloHeader}/>
            
            <SelectFiltroCategoria onFiltroProy={onFiltroProy}/>
            <VolverProyectoBtn/>            
            <BodyProyectos rol = {rol}
                            proyectos={proyectos}
                            onPartiparProy={onPartiparProy}
                            onGetParticipacion={onGetParticipacion}
                            onCancelarParticipacion={onCancelarParticipacion}
                            onNumeroParticipantes={onNumeroParticipantes}/>
        </Box>
    );
}

const styles= {
    minHeight: "650px"
    //border: "4px solid orange"
}

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

export default ProyectosVoluntarios