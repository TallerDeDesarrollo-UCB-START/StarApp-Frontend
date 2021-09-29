// Componentes:

// Librerias-Paquetes:
import { Box } from '@material-ui/core';
import {TextField} from '@material-ui/core';

function InputCrearProyecto({name}) {
    return (
        <Box sx={{ m: 5 }}>
            <h  style={{padding:"50px", alignItems:"center"}}>{name}:</h>
            <TextField id="standard-basic" label={name} variant="standard" margin="none" />
        </Box>
    )
}

export default InputCrearProyecto